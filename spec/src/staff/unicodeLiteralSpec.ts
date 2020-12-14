import {Code} from "../../../src/staff/map"
import {computeUnicodeForCode} from "../../../src/staff/unicode"
import {computeUnicodeLiteral} from "../../../src/staff/unicodeLiteral"

describe("computeUnicodeLiteral", (): void => {
    it("can get you the codepoint of a given Unicode char", (): void => {
        const unicodeWord = computeUnicodeForCode(Code["st8"])

        const actual = computeUnicodeLiteral(unicodeWord)

        const expected = "U+E020"
        expect(actual).toBe(expected)
    })
})
