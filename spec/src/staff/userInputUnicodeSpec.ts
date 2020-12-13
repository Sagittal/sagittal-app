import {Io} from "@sagittal/general"
import {Code, CODE_MAP} from "../../../src/staff/map"
import {computeUserInputUnicode} from "../../../src/staff/userInputUnicode"
import {undoMapFailMessage} from "../../helpers/undoMap"

describe("computeUserInputUnicode", (): void => {
    it("basically works", (): void => {
        const userInputSentence = "d5 /|\\ d5 nt" as Io

        const actual = computeUserInputUnicode(userInputSentence)

        const expected
            = CODE_MAP[Code["d5"]]!.unicode
            + CODE_MAP[Code["/|\\"]]!.unicode
            + CODE_MAP[Code["d5"]]!.unicode
            + CODE_MAP[Code["nt"]]!.unicode
            + CODE_MAP[Code["sp13"]]!.unicode
        expect(actual).toBe(expected, undoMapFailMessage(actual))
    })

    it("the most recently used combining staff position is automatically applied if none is specified", (): void => {
        const userInputSentence = "d5 /|\\ nt" as Io

        const actual = computeUserInputUnicode(userInputSentence)

        const expected
            = CODE_MAP[Code["d5"]]!.unicode
            + CODE_MAP[Code["/|\\"]]!.unicode
            + CODE_MAP[Code["d5"]]!.unicode
            + CODE_MAP[Code["nt"]]!.unicode
            + CODE_MAP[Code["sp13"]]!.unicode
        expect(actual).toBe(expected, undoMapFailMessage(actual))
    })

    it("combining staff positions don't manifest until they are needed (only apply to symbols with ligatures to be vertically shifted by them)", (): void => {
        const userInputSentence = "d5 st /|\\ sp13 nt sp13" as Io

        const actual = computeUserInputUnicode(userInputSentence)

        const expected
            = CODE_MAP[Code["st"]]!.unicode
            + CODE_MAP[Code["d5"]]!.unicode
            + CODE_MAP[Code["/|\\"]]!.unicode
            + CODE_MAP[Code["sp13"]]!.unicode
            + CODE_MAP[Code["d5"]]!.unicode
            + CODE_MAP[Code["nt"]]!.unicode
            + CODE_MAP[Code["sp11"]]!.unicode
            + CODE_MAP[Code["st"]]!.unicode
            + CODE_MAP[Code["sp2"]]!.unicode
        expect(actual).toBe(expected, undoMapFailMessage(actual))
    })

    it("combining staff positions assume treble clef even if no clef has been provided", (): void => {
        const userInputSentence = "d4 nt" as Io

        const actual = computeUserInputUnicode(userInputSentence)

        const expected
            = CODE_MAP[Code["trd4"]]!.unicode
            + CODE_MAP[Code["nt"]]!.unicode
            + CODE_MAP[Code["sp13"]]!.unicode
        expect(actual).toBe(expected, undoMapFailMessage(actual))
    })

    // TODO: BASIC FEATURE: OTHER CLEFS
    // tslint:disable-next-line:ban
    xit("combining staff positions change depending on the clef", (): void => {
        const userInputSentence = "bscf d4 nt" as Io

        const actual = computeUserInputUnicode(userInputSentence)

        const expected
            = CODE_MAP[Code["bscf"]]!.unicode
            + CODE_MAP[Code["bsd4"]]!.unicode
            + CODE_MAP[Code["nt"]]!.unicode
            + CODE_MAP[Code["sp13"]]!.unicode
        expect(actual).toBe(expected, undoMapFailMessage(actual))
    })

    it("combining staff positions persist until a new one is used", (): void => {
        const userInputSentence = "d5 st /|\\ sp13 nt sp13 g4 \\! sp7 nt sp13" as Io

        const actual = computeUserInputUnicode(userInputSentence)

        const expected
            = CODE_MAP[Code["st"]]!.unicode
            + CODE_MAP[Code["d5"]]!.unicode
            + CODE_MAP[Code["/|\\"]]!.unicode
            + CODE_MAP[Code["sp13"]]!.unicode
            + CODE_MAP[Code["d5"]]!.unicode
            + CODE_MAP[Code["nt"]]!.unicode
            + CODE_MAP[Code["sp11"]]!.unicode
            + CODE_MAP[Code["st"]]!.unicode
            + CODE_MAP[Code["sp2"]]!.unicode
            + CODE_MAP[Code["g4"]]!.unicode
            + CODE_MAP[Code["\\!"]]!.unicode
            + CODE_MAP[Code["sp7"]]!.unicode
            + CODE_MAP[Code["g4"]]!.unicode
            + CODE_MAP[Code["nt"]]!.unicode
            + CODE_MAP[Code["sp13"]]!.unicode
        expect(actual).toBe(expected, undoMapFailMessage(actual))
    })

    it("automatically advances, proportioned to each symbol", (): void => {
        let actual

        actual = computeUserInputUnicode("lgln ;" as Io)
        expect(actual).toBe(
            CODE_MAP[Code["lgln"]]!.unicode + CODE_MAP[Code["sp13"]]!.unicode,
            undoMapFailMessage(actual),
        )

        actual = computeUserInputUnicode("tbcf ;" as Io)
        expect(actual).toBe(
            CODE_MAP[Code["tbcf"]]!.unicode + CODE_MAP[Code["sp16"]]!.unicode + CODE_MAP[Code["sp8"]]!.unicode,
            undoMapFailMessage(actual),
        )

        actual = computeUserInputUnicode("ntdb ;" as Io)
        expect(actual).toBe(
            CODE_MAP[Code["ntdb"]]!.unicode + CODE_MAP[Code["sp16"]]!.unicode + CODE_MAP[Code["sp7"]]!.unicode,
            undoMapFailMessage(actual),
        )
        actual = computeUserInputUnicode("nt1 ;" as Io)
        expect(actual).toBe(
            CODE_MAP[Code["nt1"]]!.unicode + CODE_MAP[Code["sp13"]]!.unicode,
            undoMapFailMessage(actual),
        )
        actual = computeUserInputUnicode("nt2 ;" as Io)
        expect(actual).toBe(
            CODE_MAP[Code["nt2"]]!.unicode + CODE_MAP[Code["sp13"]]!.unicode,
            undoMapFailMessage(actual),
        )
        actual = computeUserInputUnicode("nt4 ;" as Io)
        expect(actual).toBe(
            CODE_MAP[Code["nt4"]]!.unicode + CODE_MAP[Code["sp13"]]!.unicode,
            undoMapFailMessage(actual),
        )
        actual = computeUserInputUnicode("nt8 ;" as Io)
        expect(actual).toBe(
            CODE_MAP[Code["nt8"]]!.unicode + CODE_MAP[Code["sp16"]]!.unicode + CODE_MAP[Code["sp5"]]!.unicode,
            undoMapFailMessage(actual),
        )
        actual = computeUserInputUnicode("nt16 ;" as Io)
        expect(actual).toBe(
            CODE_MAP[Code["nt16"]]!.unicode + CODE_MAP[Code["sp16"]]!.unicode + CODE_MAP[Code["sp5"]]!.unicode,
            undoMapFailMessage(actual),
        )
        actual = computeUserInputUnicode("nt2dn ;" as Io)
        expect(actual).toBe(
            CODE_MAP[Code["nt2dn"]]!.unicode + CODE_MAP[Code["sp13"]]!.unicode,
            undoMapFailMessage(actual),
        )
        actual = computeUserInputUnicode("nt4dn ;" as Io)
        expect(actual).toBe(
            CODE_MAP[Code["nt4dn"]]!.unicode + CODE_MAP[Code["sp13"]]!.unicode,
            undoMapFailMessage(actual),
        )
        actual = computeUserInputUnicode("nt8dn ;" as Io)
        expect(actual).toBe(
            CODE_MAP[Code["nt8dn"]]!.unicode + CODE_MAP[Code["sp13"]]!.unicode,
            undoMapFailMessage(actual),
        )
        actual = computeUserInputUnicode("nt16dn ;" as Io)
        expect(actual).toBe(
            CODE_MAP[Code["nt16dn"]]!.unicode + CODE_MAP[Code["sp13"]]!.unicode,
            undoMapFailMessage(actual),
        )
    })

    it("if more than one symbol has occurred since the previous advance, uses the width of the symbol with the max width", (): void => {
        const userInputSentence = "lgln nt16 ;" as Io

        const actual = computeUserInputUnicode(userInputSentence)

        const expected
            = CODE_MAP[Code["lgln"]]!.unicode
            + CODE_MAP[Code["nt16"]]!.unicode
            + CODE_MAP[Code["sp16"]]!.unicode
            + CODE_MAP[Code["sp5"]]!.unicode

        expect(actual).toBe(expected, undoMapFailMessage(actual))
    })

    it("resets the advance amount after each application", (): void => {
        // TODO: CLEAN: all "user input" to just "input"
        const userInputSentence = "lgln nt16 ; nt4 ;" as Io

        const actual = computeUserInputUnicode(userInputSentence)

        const expected
            = CODE_MAP[Code["lgln"]]!.unicode
            + CODE_MAP[Code["nt16"]]!.unicode
            + CODE_MAP[Code["sp16"]]!.unicode
            + CODE_MAP[Code["sp5"]]!.unicode
            + CODE_MAP[Code["nt4"]]!.unicode
            + CODE_MAP[Code["sp13"]]!.unicode
        expect(actual).toBe(expected, undoMapFailMessage(actual))
    })

    it("automatically adds staff lines as needed, if a staff has been asked for at all", (): void => {
        const userInputSentence = "st24 nt8 ; nt4 ;"

        const actual = computeUserInputUnicode(userInputSentence)

        const expected
            = CODE_MAP[Code["st24"]]!.unicode
            + CODE_MAP[Code["nt8"]]!.unicode
            + CODE_MAP[Code["sp16"]]!.unicode
            + CODE_MAP[Code["sp5"]]!.unicode
            + CODE_MAP[Code["nt4"]]!.unicode
            + CODE_MAP[Code["sp3"]]!.unicode
            + CODE_MAP[Code["st24"]]!.unicode
            + CODE_MAP[Code["sp10"]]!.unicode

        expect(actual).toBe(expected, undoMapFailMessage(actual))
    })

    // TODO: NEW FEATURE: STOF to disable auto staff
    //  "stof" to turn off Auto Staff ("st" turns it back on).
    // tslint:disable-next-line:ban
    xit("can turn off Auto Staff", (): void => {

    })
})
