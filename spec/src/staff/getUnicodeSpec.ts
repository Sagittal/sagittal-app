import {getUnicode} from "../../../src/staff/getUnicode"
import {Clef, Code} from "../../../src/staff/types"
import {nt4} from "../../../src/staff/unicodeMap"

describe("getUnicode", (): void => {
    it("basically works", (): void => {
        const userInput = Code["nt4"]
        const clef = Clef.TREBLE

        const actual = getUnicode(userInput, clef)

        const expected = `${nt4}`
        expect(actual).toBe(expected)
    })
})
