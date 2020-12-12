import {computeArbitraryUnicode} from "./arbitraryUnicode"
import {BASS_COMBINING_STAFF_POSITIONS, Code, CODES, TREBLE_COMBINING_STAFF_POSITIONS, Uni} from "./map"
import {Clef} from "./types"

// TODO: FEATURE ADJUST: accept a user custom codes JSON object to merge in here too

const CODES_WITH_BASS: Record<Code, Uni> = {...CODES, ...BASS_COMBINING_STAFF_POSITIONS} as Record<Code, Uni>
const CODES_WITH_TREBLE: Record<Code, Uni> = {...CODES, ...TREBLE_COMBINING_STAFF_POSITIONS} as Record<Code, Uni>

const computeUnicode = (code: Code, clef: Clef = Clef.TREBLE): Uni => {
    const codeToUnicodeMap = clef === Clef.BASS ? CODES_WITH_BASS : CODES_WITH_TREBLE

    const mappedUnicode = codeToUnicodeMap[code]

    return mappedUnicode || (
        code.match(/^u\+/) ?
            computeArbitraryUnicode(code) :
            code as Uni
    )
}

export {
    computeUnicode,
}
