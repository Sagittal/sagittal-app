import {Io} from "@sagittal/general"
import {_11MUp} from "../../../src/staff/accidentals/sagittal"
import {d5} from "../../../src/staff/combiningStaffPositions"
import {staffCodeToUnicode} from "../../../src/staff/staffCodeToUnicode"
import {Uni} from "../../../src/staff/types"
import {nt} from "../../../src/staff/unicodeMap"

describe("staffCodeToUnicode", (): void => {
    it("basically works", (): void => {
        const staffCode = "d5 /|\\ d5 nt" as Io

        const actual = staffCodeToUnicode(staffCode)

        const expected = `${d5}${_11MUp}${d5}${nt}` as Uni
        expect(actual).toBe(expected)
    })
})
