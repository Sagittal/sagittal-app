import {Code, CODE_MAP} from "../../../src/staff/map"
import {computeUnicodeLiteral} from "../../../src/staff/unicodeLiteral"

describe("computeUnicodeLiteral", (): void => {
    it("can get you the codepoint of a given Unicode char", (): void => {
        const unicode = CODE_MAP[Code["st8"]]!.unicode

        const actual = computeUnicodeLiteral(unicode)

        const expected = "U+E020"
        expect(actual).toBe(expected)
    })
})
