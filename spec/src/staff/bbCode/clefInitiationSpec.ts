import {BLANK} from "@sagittal/general"
import {computeUserInputUnicodeBBCode} from "../../../../src/staff/bbCode/clefInitiation"
import {sp16, sp8, st} from "../../../../src/staff/map"
import {bscf, tbcf} from "../../../../src/staff/map/basics"
import {Clef} from "../../../../src/staff/types"

describe("computeUserInputUnicodeBBCode", (): void => {
    it("starts off with some clef-related material if a clef class is provided, ending with a space so when the user types something without starting with a space it works - works for treble", (): void => {
        const clef = Clef.TREBLE

        const actual = computeUserInputUnicodeBBCode(BLANK, {clef})

        const expected = st + tbcf + sp16 + sp8
        expect(actual).toBe(expected)
    })

    it("starts off with some clef-related material if a clef class is provided, ending with a space so when the user types something without starting with a space it works - works for treble", (): void => {
        const clef = Clef.BASS

        const actual = computeUserInputUnicodeBBCode(BLANK, {clef})

        const expected = st + bscf + sp16 + sp8
        expect(actual).toBe(expected)
    })

    it("does not add clef-related material if no clef class is provided", (): void => {
        expect(computeUserInputUnicodeBBCode(BLANK)).toBe(BLANK)
    })
})
