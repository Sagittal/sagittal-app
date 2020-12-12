import {getUnicode} from "../../../src/staff/getUnicode"
import {Clef} from "../../../src/staff/types"
import {Code, nt4} from "../../../src/staff/map"

describe("getUnicode", (): void => {
    it("basically works", (): void => {
        const userInput = Code["nt4"]
        const clef = Clef.TREBLE

        const actual = getUnicode(userInput, clef)

        const expected = `${nt4}`
        expect(actual).toBe(expected)
    })
})
