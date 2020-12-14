import {computeArbitrarySymbol} from "../../../src/staff/arbitrarySymbol"
import {Symbol, Unicode} from "../../../src/staff/symbols"
import {UnicodeLiteral, Width} from "../../../src/staff/types"

describe("computeArbitrarySymbol", (): void => {
    it("takes a symbol in its Unicode literal form and converts it to Unicode, and assumes its width is 0                   ", (): void => {
        const unicodeLiteral: UnicodeLiteral = "u+5e78" as UnicodeLiteral

        const actual = computeArbitrarySymbol(unicodeLiteral)

        const expected = {unicode: "幸" as Unicode, width: 0 as Width} as Symbol
        expect(actual).toEqual(expected)
    })
})
