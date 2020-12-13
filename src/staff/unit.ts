import {computeArbitraryUnit} from "./arbitraryUnit"
import {BASS_COMBINING_STAFF_POSITION_MAP, Code, CODE_MAP, TREBLE_COMBINING_STAFF_POSITION_MAP, Unit} from "./map"
import {Clef, Width} from "./types"

const BASS_CODE_MAP: Record<Code, Unit> = {...CODE_MAP, ...BASS_COMBINING_STAFF_POSITION_MAP} as Record<Code, Unit>
const TREBLE_CODE_MAP: Record<Code, Unit> = {...CODE_MAP, ...TREBLE_COMBINING_STAFF_POSITION_MAP} as Record<Code, Unit>

const computeUnit = (code: Code, clef: Clef = Clef.TREBLE): Unit => {
    const codeToUnitMap = clef === Clef.BASS ? BASS_CODE_MAP : TREBLE_CODE_MAP

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
