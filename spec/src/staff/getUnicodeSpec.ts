import {Code, nt4} from "../../../src/staff/map"
import {Clef} from "../../../src/staff/types"
import {computeUnicode} from "../../../src/staff/unicode"

describe("computeUnicode", (): void => {
    it("basically works", (): void => {
        const userInput = Code["nt4"]
        const clef = Clef.TREBLE

        const actual = computeUnicode(userInput, clef)

        const expected = `${nt4}`
        expect(actual).toBe(expected)
    })
})
