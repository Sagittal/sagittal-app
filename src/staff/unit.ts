import {computeArbitraryUnit} from "./arbitraryUnit"
import {BASS_COMBINING_STAFF_POSITION_MAP, Code, CODES, TREBLE_COMBINING_STAFF_POSITION_MAP, Uni, Unit} from "./map"
import {Clef, Width} from "./types"

const CODES_WITH_BASS: Record<Code, Unit> = {...CODES, ...BASS_COMBINING_STAFF_POSITION_MAP} as Record<Code, Unit>
const CODES_WITH_TREBLE: Record<Code, Unit> = {...CODES, ...TREBLE_COMBINING_STAFF_POSITION_MAP} as Record<Code, Unit>

const computeUnit = (code: Code, clef: Clef = Clef.TREBLE): Unit => {
    const codeToUnitMap = clef === Clef.BASS ? CODES_WITH_BASS : CODES_WITH_TREBLE

    const mappedUnicode = codeToUnitMap[code]

    return mappedUnicode || (
        code.match(/^u\+/) ?
            computeArbitraryUnit(code) :
            {unicode: code, width: 0 as Width}
    )
}

export {
    computeUnit,
}
