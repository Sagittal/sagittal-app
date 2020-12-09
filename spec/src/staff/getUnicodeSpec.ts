import {getUnicode} from "../../../src/staff/getUnicode"
import {Clef} from "../../../src/staff/types"

describe("getUnicode", (): void => {
    it("basically works", (): void => {
        const userInput = "nt4"

        const actual = getUnicode(userInput, Clef.TREBLE)

        const expected = ""
        expect(actual).toBe(expected)
    })
})
