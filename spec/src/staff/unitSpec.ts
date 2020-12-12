import {Code, nt4} from "../../../src/staff/map"
import {Clef, Width} from "../../../src/staff/types"
import {computeUnit} from "../../../src/staff/unit"

describe("computeUnit", (): void => {
    it("gets you the unicode and width for the code", (): void => {
        const code = Code["nt4"]
        const clef = Clef.TREBLE

        const actual = computeUnit(code, clef)

        expect(actual).toEqual({unicode: nt4, width: 13 as Width})
    })
})
