import {Io} from "@sagittal/general"
import {Code, CODE_MAP} from "../../../src/staff/map"
import {Clef} from "../../../src/staff/types"
import {computeUnit} from "../../../src/staff/unit"

describe("computeUnit", (): void => {
    it("gets you the unicode, width, and description for the given word", (): void => {
        const userInputWord = "nt4" as Io
        const clef = Clef.TREBLE

        const actual = computeUnit(userInputWord, clef)

        expect(actual).toEqual(CODE_MAP[Code["nt4"]])
    })

    it("works for different clefs", (): void => {
        expect(computeUnit("d4" as Io, Clef.TREBLE)).toEqual(CODE_MAP[Code["trd4"]])
        expect(computeUnit("d4" as Io, Clef.BASS)).toEqual(CODE_MAP[Code["bsd4"]])
    })

    it("can handle uppercase codes", (): void => {
        const userInputWord = "/x" as Io // Would be .toLowerCase()'d already

        const actual = computeUnit(userInputWord)

        expect(actual).toEqual(CODE_MAP[Code["/X"]])
    })
})
