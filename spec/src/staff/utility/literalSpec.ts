import {Code} from "../../../../src/staff/symbols"
import {computeUnicodeForCode} from "../../../../src/staff/utility"
import {computeUnicodeLiteral} from "../../../../src/staff/utility/literal"

describe("computeUnicodeLiteral", (): void => {
    it("can get you the codepoint of a given Unicode char, using lowercase", (): void => {
        const unicodeWord = computeUnicodeForCode(Code["tmcm"])

        const actual = computeUnicodeLiteral(unicodeWord)

        const expected = "u+e08a"
        expect(actual).toBe(expected)
    })
})