import {Io} from "@sagittal/general"
import {_11MUp, _5CDown} from "../../../src/staff/accidentals/sagittal"
import {d5, g4} from "../../../src/staff/combiningStaffPositions"
import {staffCodeToUnicode} from "../../../src/staff/staffCodeToUnicode"
import {
    lgln,
    nt,
    nt1,
    nt16,
    nt16dn,
    nt2,
    nt2dn,
    nt4,
    nt4dn,
    nt8,
    nt8dn,
    ntdb, sp10,
    sp11,
    sp12,
    sp13,
    sp16,
    sp2, sp3,
    sp4,
    sp5,
    sp7,
    sp8,
    sp9,
    st,
    st24,
    tbcf,
} from '../../../src/staff/unicodeMap'

describe("staffCodeToUnicode", (): void => {
    it("basically works", (): void => {
        const staffCode = "d5 /|\\ d5 nt" as Io

        const actual = staffCodeToUnicode(staffCode)

        const expected = d5 + _11MUp + d5 + nt + sp13
        expect(actual).toBe(expected)
    })

    it("the most recently used combining staff position is automatically applied if none is specified", (): void => {
        const staffCode = "d5 /|\\ nt" as Io

        const actual = staffCodeToUnicode(staffCode)

        const expected = d5 + _11MUp + d5 + nt + sp13
        expect(actual).toBe(expected)
    })

    it("combining staff positions don't manifest until they are needed (only apply to symbols with ligatures to be vertically shifted by them)", (): void => {
        const staffCode = "d5 st /|\\ sp13 nt sp13" as Io

        const actual = staffCodeToUnicode(staffCode)

        const expected = st + d5 + _11MUp + sp13 + d5 + nt + sp11 + st + sp2
        expect(actual).toBe(expected)
    })

    it("combining staff positions persist until a new one is used", (): void => {
        const staffCode = "d5 st /|\\ sp13 nt sp13 g4 \\! sp7 nt sp13" as Io

        const actual = staffCodeToUnicode(staffCode)

        const expected = st + d5 + _11MUp + sp13 + d5 + nt + sp11 + st + sp2 + g4 + _5CDown + sp7 + g4 + nt + sp13
        expect(actual).toBe(expected)
    })

    it("automatically add spaces, proportioned to each symbol", (): void => {
        expect(staffCodeToUnicode("lgln sp" as Io)).toBe(lgln + sp13)

        expect(staffCodeToUnicode("tbcf sp" as Io)).toBe(tbcf + sp16 + sp8)

        expect(staffCodeToUnicode("ntdb sp" as Io)).toBe(ntdb + sp16 + sp7)
        expect(staffCodeToUnicode("nt1 sp" as Io)).toBe(nt1 + sp13)
        expect(staffCodeToUnicode("nt2 sp" as Io)).toBe(nt2 + sp13)
        expect(staffCodeToUnicode("nt4 sp" as Io)).toBe(nt4 + sp13)
        expect(staffCodeToUnicode("nt8 sp" as Io)).toBe(nt8 + sp16 + sp5)
        expect(staffCodeToUnicode("nt16 sp" as Io)).toBe(nt16 + sp16 + sp5)
        expect(staffCodeToUnicode("nt2dn sp" as Io)).toBe(nt2dn + sp13)
        expect(staffCodeToUnicode("nt4dn sp" as Io)).toBe(nt4dn + sp13)
        expect(staffCodeToUnicode("nt8dn sp" as Io)).toBe(nt8dn + sp13)
        expect(staffCodeToUnicode("nt16dn sp" as Io)).toBe(nt16dn + sp13)
    })

    it("if more than one symbol has occurred since the previous sp, uses the space value for the one with the max needed space", (): void => {
        // TODO: might want a helper that conerst the unicodes BACK into their tokens
        expect(staffCodeToUnicode("lgln nt16 sp" as Io)).toBe(lgln + nt16 + sp16 + sp5)
    })

    it("resets the space amount after each application", (): void => {
        expect(staffCodeToUnicode("lgln nt16 sp nt4 sp" as Io)).toBe(lgln + nt16 + sp16 + sp5 + nt4 + sp13)
    })

    it("automatically adds staff as needed, if a staff has been asked for at all", (): void => {
        expect(staffCodeToUnicode("st nt8 sp nt4 sp")).toBe(st24 + nt8 + sp16 + sp5 + nt4 + sp3 + st24 + sp10)
    })
})
