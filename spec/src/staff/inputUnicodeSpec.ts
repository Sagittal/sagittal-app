import {Io, sumTexts} from "@sagittal/general"
import {Code, CODE_MAP, Uni} from "../../../src/staff/map"
import {computeUserInputUnicode} from "../../../src/staff/userInputUnicode"
import {undoMapFailMessage} from "../../helpers/undoMap"

describe("computeUserInputUnicode", (): void => {
    it("basically works", (): void => {
        const userInputSentence = "d5 /|\\ d5 nt" as Io

        const actual = computeUserInputUnicode(userInputSentence)

        // Codewords: d5 /|\ d5 nt sp13
        const expected = "　 " as Uni
        expect(actual).toBe(expected, undoMapFailMessage(actual, expected))
    })

    it("the most recently used combining staff position is automatically applied if none is specified", (): void => {
        const userInputSentence = "d5 /|\\ nt" as Io

        const actual = computeUserInputUnicode(userInputSentence)

        // Codewords: d5 /|\ d5 nt sp13
        const expected = "　 " as Uni
        expect(actual).toBe(expected, undoMapFailMessage(actual, expected))
    })

    it("combining staff positions don't manifest until they are needed (only apply to symbols with ligatures to be vertically shifted by them)", (): void => {
        const userInputSentence = "d5 st /|\\ sp13 nt sp13" as Io

        const actual = computeUserInputUnicode(userInputSentence)

        // Codewords: st d5 /|\ sp13 d5 nt sp11 st sp2
        const expected = "　    " as Uni
        expect(actual).toBe(expected, undoMapFailMessage(actual, expected))
    })

    it("combining staff positions assume treble clef even if no clef has been provided", (): void => {
        const userInputSentence = "d4 nt" as Io

        const actual = computeUserInputUnicode(userInputSentence)

        // Codewords: trd4 nt sp13
        const expected = "　 " as Uni
        expect(actual).toBe(expected, undoMapFailMessage(actual, expected))
    })

    // TODO: BASIC FEATURE: OTHER CLEFS
    // tslint:disable-next-line:ban
    xit("combining staff positions change depending on the clef", (): void => {
        const userInputSentence = "bscf d4 nt" as Io

        const actual = computeUserInputUnicode(userInputSentence)

        const expected = sumTexts(
            CODE_MAP[Code["bscf"]]!.unicode,
            CODE_MAP[Code["bsd4"]]!.unicode,
            CODE_MAP[Code["nt"]]!.unicode,
            CODE_MAP[Code["sp13"]]!.unicode,
        )
        // Codewords: bscf bsd4 nt sp13
        // Const expected = "" as Uni
        expect(actual).toBe(expected, undoMapFailMessage(actual, expected))
    })

    it("combining staff positions persist until a new one is used", (): void => {
        const userInputSentence = "d5 st /|\\ sp13 nt sp13 g4 \\! sp7 nt sp13" as Io

        const actual = computeUserInputUnicode(userInputSentence)

        // Codewords: st d5 /|\ sp13 d5 nt sp11 st sp2 g4 \! sp7 g4 nt sp13
        const expected = "　      　 " as Uni
        expect(actual).toBe(expected, undoMapFailMessage(actual, expected))
    })

    it("automatically advances, proportioned to each symbol", (): void => {
        let actual
        let expected

        actual = computeUserInputUnicode("lgln ;" as Io)
        expected = "　 " as Uni     // Codewords: lgln sp13
        expect(actual).toBe(expected, undoMapFailMessage(actual, expected))

        actual = computeUserInputUnicode("tbcf ;" as Io)
        expected = "  " as Uni     // Codewords: tbcf sp16 sp8
        expect(actual).toBe(expected, undoMapFailMessage(actual, expected))

        actual = computeUserInputUnicode("ntdb ;" as Io)
        expected = "   " as Uni    // Codewords: ntdb sp16 sp7
        expect(actual).toBe(expected, undoMapFailMessage(actual, expected))

        actual = computeUserInputUnicode("nt1 ;" as Io)
        expected = "　 " as Uni     // Codewords: nt1 sp13
        expect(actual).toBe(expected, undoMapFailMessage(actual, expected))

        actual = computeUserInputUnicode("nt2 ;" as Io)
        expected = "　 " as Uni     // Codewords: nt2 sp13
        expect(actual).toBe(expected, undoMapFailMessage(actual, expected))

        actual = computeUserInputUnicode("nt4 ;" as Io)
        expected = "　 " as Uni     // Codewords: nt4 sp13
        expect(actual).toBe(expected, undoMapFailMessage(actual, expected))

        actual = computeUserInputUnicode("nt8 ;" as Io)
        expected = "   " as Uni    // Codewords: nt8 sp16 sp5
        expect(actual).toBe(expected, undoMapFailMessage(actual, expected))

        actual = computeUserInputUnicode("nt16 ;" as Io)
        expected = "   " as Uni    // Codewords: nt16 sp16 sp5
        expect(actual).toBe(expected, undoMapFailMessage(actual, expected))

        actual = computeUserInputUnicode("nt2dn ;" as Io)
        expected = "　 " as Uni     // Codewords: nt2dn sp13
        expect(actual).toBe(expected, undoMapFailMessage(actual, expected))

        actual = computeUserInputUnicode("nt4dn ;" as Io)
        expected = "　 " as Uni     // Codewords: nt4dn sp13
        expect(actual).toBe(expected, undoMapFailMessage(actual, expected))

        actual = computeUserInputUnicode("nt8dn ;" as Io)
        expected = "　 " as Uni     // Codewords: nt8dn sp13
        expect(actual).toBe(expected, undoMapFailMessage(actual, expected))

        actual = computeUserInputUnicode("nt16dn ;" as Io)
        expected = "　 " as Uni     // Codewords: nt16dn sp13
        expect(actual).toBe(expected, undoMapFailMessage(actual, expected))
    })

    it("if more than one symbol has occurred since the previous advance, uses the width of the symbol with the max width", (): void => {
        const userInputSentence = "lgln nt16 ;" as Io

        const actual = computeUserInputUnicode(userInputSentence)

        // Codewords: lgln nt16 sp16 sp5
        const expected = "   " as Uni
        expect(actual).toBe(expected, undoMapFailMessage(actual, expected))
    })

    it("resets the advance amount after each application", (): void => {
        // TODO: CLEAN: all "user input" to just "input"
        const userInputSentence = "lgln nt16 ; nt4 ;" as Io

        const actual = computeUserInputUnicode(userInputSentence)

        // Codewords: lgln nt16 sp16 sp5 nt4 sp13
        const expected = "   　 " as Uni
        expect(actual).toBe(expected, undoMapFailMessage(actual, expected))
    })

    // TODO: CLEAN: group these tests up into describes

    it("automatically adds staff lines as needed, if a staff has been asked for at all", (): void => {
        const userInputSentence = "st24 nt8 ; nt4 ;"

        const actual = computeUserInputUnicode(userInputSentence)

        // Codewords: st24 nt8 sp16 sp5 nt4 sp3 st24 sp10
        const expected = "      " as Uni
        expect(actual).toBe(expected, undoMapFailMessage(actual, expected))
    })

    // TODO: NEW FEATURE: STOF to disable auto staff
    //  "stof" to turn off Auto Staff ("st" turns it back on).
    // tslint:disable-next-line:ban
    xit("can turn off Auto Staff", (): void => {

    })
})
