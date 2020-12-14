import {Io} from "@sagittal/general"
import {smarts} from "../../../src/staff/smarts"
import {computeSymbol} from "../../../src/staff/symbol"
import {Code, CODE_MAP} from "../../../src/staff/symbols"
import {Clef} from "../../../src/staff/types"

describe("computeSymbol", (): void => {
    it("gets you the symbol (unicode, width, and description) for the given word", (): void => {
        const inputWord = "nt4" as Io

        const actual = computeSymbol(inputWord)

        expect(actual).toEqual(CODE_MAP[Code["nt4"]])
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
})
