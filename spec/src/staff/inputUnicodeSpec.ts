import {Io} from "@sagittal/general"
import {computeInputUnicode} from "../../../src/staff/inputUnicode"
import {Uni} from "../../../src/staff/map"
import {undoMapFailMessage} from "../../helpers/undoMap"

describe("computeInputUnicode", (): void => {
    it("basically works", (): void => {
        const inputSentence = "d5 /|\\ d5 nt" as Io

        const actual = computeInputUnicode(inputSentence)

        // Codewords: d5 /|\ d5 nt sp13
        const expected = "　 " as Uni
        expect(actual).toBe(expected, undoMapFailMessage(actual, expected))
    })

    describe("combining staff positions", (): void => {
        it("the most recently used combining staff position is automatically applied if none is specified                  ", (): void => {
            const inputSentence = "d5 /|\\ nt" as Io

            const actual = computeInputUnicode(inputSentence)

            // Codewords: d5 /|\ d5 nt sp13
            const expected = "　 " as Uni
            expect(actual).toBe(expected, undoMapFailMessage(actual, expected))
        })

        it("combining staff positions don't manifest until they are needed (only apply to symbols with ligatures to be vertically shifted by them)", (): void => {
            const inputSentence = "d5 st /|\\ sp13 nt sp13" as Io

            const actual = computeInputUnicode(inputSentence)

            // Codewords: st d5 /|\ sp13 d5 nt sp11 st sp2
            const expected = "　    " as Uni
            expect(actual).toBe(expected, undoMapFailMessage(actual, expected))
        })

        it("combining staff positions assume treble clef even if no clef has been provided", (): void => {
            const inputSentence = "d4 nt" as Io

            const actual = computeInputUnicode(inputSentence)

            // Codewords: trd4 nt sp13
            const expected = "　 " as Uni
            expect(actual).toBe(expected, undoMapFailMessage(actual, expected))
        })

        // TODO: BASIC FEATURE: OTHER CLEFS
        // tslint:disable-next-line:ban
        xit("combining staff positions change depending on the clef", (): void => {
            const inputSentence = "bscf d4 nt" as Io

            const actual = computeInputUnicode(inputSentence)

            // Codewords: bscf bsd4 nt sp13
            const expected = "" as Uni
            expect(actual).toBe(expected, undoMapFailMessage(actual, expected))
        })

        it("combining staff positions persist until a new one is used", (): void => {
            const inputSentence = "d5 st /|\\ sp13 nt sp13 g4 \\! sp7 nt sp13" as Io

            const actual = computeInputUnicode(inputSentence)

            // Codewords: st d5 /|\ sp13 d5 nt sp11 st sp2 g4 \! sp7 g4 nt sp13
            const expected = "　      　 " as Uni
            expect(actual).toBe(expected, undoMapFailMessage(actual, expected))
        })
    })

    describe("smart advance", (): void => {
        it("advances by the width given by each symbol", (): void => {
            let actual
            let expected

            actual = computeInputUnicode("lgln ;" as Io)
            expected = "　 " as Uni     // Codewords: lgln sp13
            expect(actual).toBe(expected, undoMapFailMessage(actual, expected))

            actual = computeInputUnicode("tbcf ;" as Io)
            expected = "  " as Uni     // Codewords: tbcf sp16 sp8
            expect(actual).toBe(expected, undoMapFailMessage(actual, expected))

            actual = computeInputUnicode("ntdb ;" as Io)
            expected = "   " as Uni    // Codewords: ntdb sp16 sp7
            expect(actual).toBe(expected, undoMapFailMessage(actual, expected))

            actual = computeInputUnicode("nt1 ;" as Io)
            expected = "　 " as Uni     // Codewords: nt1 sp13
            expect(actual).toBe(expected, undoMapFailMessage(actual, expected))

            actual = computeInputUnicode("nt2 ;" as Io)
            expected = "　 " as Uni     // Codewords: nt2 sp13
            expect(actual).toBe(expected, undoMapFailMessage(actual, expected))

            actual = computeInputUnicode("nt4 ;" as Io)
            expected = "　 " as Uni     // Codewords: nt4 sp13
            expect(actual).toBe(expected, undoMapFailMessage(actual, expected))

            actual = computeInputUnicode("nt8 ;" as Io)
            expected = "   " as Uni    // Codewords: nt8 sp16 sp5
            expect(actual).toBe(expected, undoMapFailMessage(actual, expected))

            actual = computeInputUnicode("nt16 ;" as Io)
            expected = "   " as Uni    // Codewords: nt16 sp16 sp5
            expect(actual).toBe(expected, undoMapFailMessage(actual, expected))

            actual = computeInputUnicode("nt2dn ;" as Io)
            expected = "　 " as Uni     // Codewords: nt2dn sp13
            expect(actual).toBe(expected, undoMapFailMessage(actual, expected))

            actual = computeInputUnicode("nt4dn ;" as Io)
            expected = "　 " as Uni     // Codewords: nt4dn sp13
            expect(actual).toBe(expected, undoMapFailMessage(actual, expected))

            actual = computeInputUnicode("nt8dn ;" as Io)
            expected = "　 " as Uni     // Codewords: nt8dn sp13
            expect(actual).toBe(expected, undoMapFailMessage(actual, expected))

            actual = computeInputUnicode("nt16dn ;" as Io)
            expected = "　 " as Uni     // Codewords: nt16dn sp13
            expect(actual).toBe(expected, undoMapFailMessage(actual, expected))
        })

        it("if more than one symbol has occurred since the previous advance, uses the width of the symbol with the max width", (): void => {
            const inputSentence = "lgln nt16 ;" as Io

            const actual = computeInputUnicode(inputSentence)

            // Codewords: lgln nt16 sp16 sp5
            const expected = "   " as Uni
            expect(actual).toBe(expected, undoMapFailMessage(actual, expected))
        })

        it("resets the advance amount after each application", (): void => {
            const inputSentence = "lgln nt16 ; nt4 ;" as Io

            const actual = computeInputUnicode(inputSentence)

            // Codewords: lgln nt16 sp16 sp5 nt4 sp13
            const expected = "   　 " as Uni
            expect(actual).toBe(expected, undoMapFailMessage(actual, expected))
        })
    })

    describe("auto staff", (): void => {
        it("automatically adds staff lines as needed, if a staff has been asked for at all", (): void => {
            const inputSentence = "st24 nt8 ; nt4 ;"

            const actual = computeInputUnicode(inputSentence)

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
})
