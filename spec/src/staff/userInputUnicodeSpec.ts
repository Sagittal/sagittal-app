import {Io} from "@sagittal/general"
import {
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
import {d5, g4} from "../../../src/staff/map/combiningStaffPositions"
import {computeUserInputUnicode} from "../../../src/staff/userInputUnicode"

describe("computeUserInputUnicode", (): void => {
    it("basically works", (): void => {
        const userInputSentence = "d5 /|\\ d5 nt" as Io

        const actual = computeUserInputUnicode(userInputSentence)

        const expected = d5 + _11MUp + d5 + nt + sp13
        expect(actual).toBe(expected)
    })

    it("the most recently used combining staff position is automatically applied if none is specified", (): void => {
        const userInputSentence = "d5 /|\\ nt" as Io

        const actual = computeUserInputUnicode(userInputSentence)

        const expected = d5 + _11MUp + d5 + nt + sp13
        expect(actual).toBe(expected)
    })

    it("combining staff positions don't manifest until they are needed (only apply to symbols with ligatures to be vertically shifted by them)", (): void => {
        const userInputSentence = "d5 st /|\\ sp13 nt sp13" as Io

        const actual = computeUserInputUnicode(userInputSentence)

        const expected = st + d5 + _11MUp + sp13 + d5 + nt + sp11 + st + sp2
        expect(actual).toBe(expected)
    })

    it("combining staff positions persist until a new one is used", (): void => {
        const userInputSentence = "d5 st /|\\ sp13 nt sp13 g4 \\! sp7 nt sp13" as Io

        const actual = computeUserInputUnicode(userInputSentence)

        const expected = st + d5 + _11MUp + sp13 + d5 + nt + sp11 + st + sp2 + g4 + _5CDown + sp7 + g4 + nt + sp13
        expect(actual).toBe(expected)
    })

    it("automatically advances, proportioned to each symbol", (): void => {
        expect(computeUserInputUnicode("lgln ;" as Io)).toBe(lgln + sp13)

        expect(computeUserInputUnicode("tbcf ;" as Io)).toBe(tbcf + sp16 + sp8)

        expect(computeUserInputUnicode("ntdb ;" as Io)).toBe(ntdb + sp16 + sp7)
        expect(computeUserInputUnicode("nt1 ;" as Io)).toBe(nt1 + sp13)
        expect(computeUserInputUnicode("nt2 ;" as Io)).toBe(nt2 + sp13)
        expect(computeUserInputUnicode("nt4 ;" as Io)).toBe(nt4 + sp13)
        expect(computeUserInputUnicode("nt8 ;" as Io)).toBe(nt8 + sp16 + sp5)
        expect(computeUserInputUnicode("nt16 ;" as Io)).toBe(nt16 + sp16 + sp5)
        expect(computeUserInputUnicode("nt2dn ;" as Io)).toBe(nt2dn + sp13)
        expect(computeUserInputUnicode("nt4dn ;" as Io)).toBe(nt4dn + sp13)
        expect(computeUserInputUnicode("nt8dn ;" as Io)).toBe(nt8dn + sp13)
        expect(computeUserInputUnicode("nt16dn ;" as Io)).toBe(nt16dn + sp13)
    })

    it("if more than one symbol has occurred since the previous advance, uses the width of the symbol with the max width", (): void => {
        // TODO: TEST HELPING: might want a helper that converts the unicodes BACK into their tokens
        expect(computeUserInputUnicode("lgln nt16 ;" as Io)).toBe(lgln + nt16 + sp16 + sp5)
    })

    it("resets the advance amount after each application", (): void => {
        expect(computeUserInputUnicode("lgln nt16 ; nt4 ;" as Io)).toBe(lgln + nt16 + sp16 + sp5 + nt4 + sp13)
    })

    it("automatically adds staff lines as needed, if a staff has been asked for at all", (): void => {
        expect(computeUserInputUnicode("st24 nt8 ; nt4 ;")).toBe(st24 + nt8 + sp16 + sp5 + nt4 + sp3 + st24 + sp10)
    })
})
