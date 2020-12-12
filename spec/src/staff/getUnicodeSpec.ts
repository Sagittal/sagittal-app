import {Code, nt4} from "../../../src/staff/map"
import {computeUnicode} from "../../../src/staff/mappedUnicode"
import {Clef} from "../../../src/staff/types"

describe("computeUnicode", (): void => {
    it("basically works", (): void => {
        const code = Code["nt4"]
        const clef = Clef.TREBLE

        const actual = computeUnicode(code, clef)

        expect(actual).toBe(nt4)
    })
})
