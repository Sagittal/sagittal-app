import {Io} from "@sagittal/general"
import {
    bscf,
    lgln,
    nt1,
    nt16,
    nt16dn,
    nt2,
    nt2dn,
    nt4,
    nt4dn,
    nt8,
    nt8dn,
    ntdb,
    sp10,
    sp11,
    sp13,
    sp16,
    sp2,
    sp3,
    sp5,
    sp7,
    sp8,
    st,
    st24,
    _11MUp,
    _5CDown,
} from "../../../src/staff/map"
import {nt, tbcf} from "../../../src/staff/map/basics"
import {bsd4, d5, g4, trd4} from "../../../src/staff/map/combiningStaffPositions"
import {computeUserInputUnicode} from "../../../src/staff/userInputUnicode"
import {undoMapFailMessage} from "../../helpers/undoMap"

describe("computeUserInputUnicode", (): void => {
    it("basically works", (): void => {
        const userInputSentence = "d5 /|\\ d5 nt" as Io

        const actual = computeUserInputUnicode(userInputSentence)

        const expected = d5 + _11MUp + d5 + nt + sp13
        expect(actual).toBe(expected, undoMapFailMessage(actual))
    })

    it("the most recently used combining staff position is automatically applied if none is specified", (): void => {
        const userInputSentence = "d5 /|\\ nt" as Io

        const actual = computeUserInputUnicode(userInputSentence)

        const expected = d5 + _11MUp + d5 + nt + sp13
        expect(actual).toBe(expected, undoMapFailMessage(actual))
    })

    it("combining staff positions don't manifest until they are needed (only apply to symbols with ligatures to be vertically shifted by them)", (): void => {
        const userInputSentence = "d5 st /|\\ sp13 nt sp13" as Io

        const actual = computeUserInputUnicode(userInputSentence)

        const expected = st + d5 + _11MUp + sp13 + d5 + nt + sp11 + st + sp2
        expect(actual).toBe(expected, undoMapFailMessage(actual))
    })

    it("combining staff positions assume treble clef even if no clef has been provided", (): void => {
        const userInputSentence = "d4 nt" as Io

        const actual = computeUserInputUnicode(userInputSentence)

        const expected = trd4 + nt + sp13
        expect(actual).toBe(expected, undoMapFailMessage(actual))
    })

    // TODO: OTHER CLEFS
    // tslint:disable-next-line:ban
    xit("combining staff positions change depending on the clef", (): void => {
        const userInputSentence = "bscf d4 nt" as Io

        const actual = computeUserInputUnicode(userInputSentence)

        const expected = bscf + bsd4 + nt + sp13
        expect(actual).toBe(expected, undoMapFailMessage(actual))
    })

    it("combining staff positions persist until a new one is used", (): void => {
        const userInputSentence = "d5 st /|\\ sp13 nt sp13 g4 \\! sp7 nt sp13" as Io

        const actual = computeUserInputUnicode(userInputSentence)

        const expected = st + d5 + _11MUp + sp13 + d5 + nt + sp11 + st + sp2 + g4 + _5CDown + sp7 + g4 + nt + sp13
        expect(actual).toBe(expected, undoMapFailMessage(actual))
    })

    it("automatically advances, proportioned to each symbol", (): void => {
        let actual

        actual = computeUserInputUnicode("lgln ;" as Io)
        expect(actual).toBe(lgln + sp13, undoMapFailMessage(actual))

        actual = computeUserInputUnicode("tbcf ;" as Io)
        expect(actual).toBe(tbcf + sp16 + sp8, undoMapFailMessage(actual))

        actual = computeUserInputUnicode("ntdb ;" as Io)
        expect(actual).toBe(ntdb + sp16 + sp7, undoMapFailMessage(actual))
        actual = computeUserInputUnicode("nt1 ;" as Io)
        expect(actual).toBe(nt1 + sp13, undoMapFailMessage(actual))
        actual = computeUserInputUnicode("nt2 ;" as Io)
        expect(actual).toBe(nt2 + sp13, undoMapFailMessage(actual))
        actual = computeUserInputUnicode("nt4 ;" as Io)
        expect(actual).toBe(nt4 + sp13, undoMapFailMessage(actual))
        actual = computeUserInputUnicode("nt8 ;" as Io)
        expect(actual).toBe(nt8 + sp16 + sp5, undoMapFailMessage(actual))
        actual = computeUserInputUnicode("nt16 ;" as Io)
        expect(actual).toBe(nt16 + sp16 + sp5, undoMapFailMessage(actual))
        actual = computeUserInputUnicode("nt2dn ;" as Io)
        expect(actual).toBe(nt2dn + sp13, undoMapFailMessage(actual))
        actual = computeUserInputUnicode("nt4dn ;" as Io)
        expect(actual).toBe(nt4dn + sp13, undoMapFailMessage(actual))
        actual = computeUserInputUnicode("nt8dn ;" as Io)
        expect(actual).toBe(nt8dn + sp13, undoMapFailMessage(actual))
        actual = computeUserInputUnicode("nt16dn ;" as Io)
        expect(actual).toBe(nt16dn + sp13, undoMapFailMessage(actual))
    })

    it("if more than one symbol has occurred since the previous advance, uses the width of the symbol with the max width", (): void => {
        const userInputSentence = "lgln nt16 ;" as Io

        const actual = computeUserInputUnicode(userInputSentence)

        const expected = lgln + nt16 + sp16 + sp5
        expect(actual).toBe(expected, undoMapFailMessage(actual))
    })

    it("resets the advance amount after each application", (): void => {
        // TODO: CLEAN: all "user input" to just "input"
        const userInputSentence = "lgln nt16 ; nt4 ;" as Io

        const actual = computeUserInputUnicode(userInputSentence)

        const expected = lgln + nt16 + sp16 + sp5 + nt4 + sp13
        expect(actual).toBe(expected, undoMapFailMessage(actual))
    })

    it("automatically adds staff lines as needed, if a staff has been asked for at all", (): void => {
        const userInputSentence = "st24 nt8 ; nt4 ;"

        const actual = computeUserInputUnicode(userInputSentence)

        const expected = st24 + nt8 + sp16 + sp5 + nt4 + sp3 + st24 + sp10
        expect(actual).toBe(expected, undoMapFailMessage(actual))
    })
})
