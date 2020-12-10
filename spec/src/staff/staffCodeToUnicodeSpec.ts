import {Io} from "@sagittal/general"
import {_11MUp, _5CDown} from "../../../src/staff/accidentals/sagittal"
import {d5, g4} from "../../../src/staff/combiningStaffPositions"
import {staffCodeToUnicode} from "../../../src/staff/staffCodeToUnicode"
import {nt, sp12, sp14, sp8, st} from "../../../src/staff/unicodeMap"

describe("staffCodeToUnicode", (): void => {
    it("basically works", (): void => {
        const staffCode = "d5 /|\\ d5 nt" as Io

        const actual = staffCodeToUnicode(staffCode)

        const expected = d5 + _11MUp + d5 + nt
        expect(actual).toBe(expected)
    })

    it("the most recently used combining staff position is automatically applied if none is specified", (): void => {
        const staffCode = "d5 /|\\ nt" as Io

        const actual = staffCodeToUnicode(staffCode)

        const expected = d5 + _11MUp + d5 + nt
        expect(actual).toBe(expected)
    })

    it("combining staff positions don't manifest until they are needed (only apply to symbols with ligatures to be vertically shifted by them)", (): void => {
        const staffCode = "d5 st /|\\ sp14 st nt sp12" as Io

        const actual = staffCodeToUnicode(staffCode)

        const expected = st + d5 + _11MUp + sp14 + st + d5 + nt + sp12
        expect(actual).toBe(expected)
    })

    it("combining staff positions persist until a new one is used", (): void => {
        const staffCode = "d5 st /|\\ sp14 st nt sp12 g4 st \\! sp8 st nt sp12" as Io

        const actual = staffCodeToUnicode(staffCode)

        const expected = st + d5 + _11MUp + sp14 + st + d5 + nt + sp12 + st + g4 + _5CDown + sp8 + st + g4 + nt + sp12
        expect(actual).toBe(expected)
    })
})
