import {Clef} from "./types"
import {
    BASS_COMBINING_STAFF_POSITION_UNICODE_MAP,
    Code,
    CODES,
    TREBLE_COMBINING_STAFF_POSITION_UNICODE_MAP,
    Uni,
} from "./map"
import {unicodeFromUnknownCode} from "./unicodeFromUnknownCode"

// TODO: FEATURE ADJUST: accept a user custom codes JSON object to merge in here too

const CODES_WITH_BASS: Record<Code, Uni> = {
    ...CODES,
    ...BASS_COMBINING_STAFF_POSITION_UNICODE_MAP,
} as Record<Code, Uni>

const CODES_WITH_TREBLE: Record<Code, Uni> = {
    ...CODES,
    ...TREBLE_COMBINING_STAFF_POSITION_UNICODE_MAP,
} as Record<Code, Uni>

const getUnicode = (userInput: Code, clef: Clef = Clef.TREBLE): Uni => {
    const INPUT_TO_UNICODE_MAP = clef === Clef.BASS ? CODES_WITH_BASS : CODES_WITH_TREBLE

    const knownUnicode = INPUT_TO_UNICODE_MAP[userInput]

    return knownUnicode || (
        userInput.match(/^u\+/) ?
            unicodeFromUnknownCode(userInput) :
            userInput as Uni
    )
}

export {
    getUnicode,
}
