import {Io} from "@sagittal/general"
import {smarts} from "../../../src/staff/smarts"
import {computeSymbol} from "../../../src/staff/symbol"
import {Code, CODE_MAP, Symbol, Unicode, Width} from "../../../src/staff/symbols"
import {Clef, UnicodeLiteral} from "../../../src/staff/types"

describe("computeSymbol", (): void => {
    it("gets you the symbol (unicode, width, and description) for the given word", (): void => {
        const inputWord = "nt4" as Io

        const actual = computeSymbol(inputWord)

        const expected = CODE_MAP[Code["nt4"]]
        expect(actual).toEqual(expected)
    })

    it("works for different clefs", (): void => {
        smarts.clef = Clef.TREBLE
        expect(computeSymbol("d4" as Io)).toEqual(CODE_MAP[Code["tbd4"]])
        smarts.clef = Clef.BASS
        expect(computeSymbol("d4" as Io)).toEqual(CODE_MAP[Code["bsd4"]])
    })

    it("can handle uppercase codes", (): void => {
        expect(computeSymbol("/X" as Io)).toEqual(CODE_MAP[Code["/X"]])
        expect(computeSymbol(".LL" as Io)).toEqual(CODE_MAP[Code[".LL"]])
    })

    it("takes a symbol in its Unicode literal form and converts it to Unicode, and assumes its width is 0                   ", (): void => {
        const unicodeLiteral: UnicodeLiteral = "u+5e78" as UnicodeLiteral

        const actual = computeSymbol(unicodeLiteral)

        const expected = {unicode: "幸" as Unicode, width: 0 as Width} as Symbol
        expect(actual).toEqual(expected)
    })
})
