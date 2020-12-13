import {Code, CODE_MAP} from "../../../src/staff/map"
import {Clef} from "../../../src/staff/types"
import {computeUnit} from "../../../src/staff/unit"

describe("computeUnit", (): void => {
    it("gets you the unicode and width for the code", (): void => {
        const code = Code["nt4"]
        const clef = Clef.TREBLE

        const actual = computeUnit(code, clef)

        expect(actual).toEqual(CODE_MAP[Code["nt4"]]!)
    })

    it("works for different clefs", (): void => {
        expect(computeUnit(Code["d4"], Clef.TREBLE)).toEqual(CODE_MAP[Code["trd4"]]!)
        expect(computeUnit(Code["d4"], Clef.BASS)).toEqual(CODE_MAP[Code["bsd4"]]!)
    })
})
