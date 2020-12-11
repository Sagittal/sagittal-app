import {
    BASS_COMBINING_STAFF_POSITION_UNICODE_MAP,
    TREBLE_COMBINING_STAFF_POSITION_UNICODE_MAP,
} from "./combiningStaffPositions"
import {Clef, Code, Uni} from "./types"
import {unicodeFromUnknownCode} from "./unicodeFromUnknownCode"
import {CODES} from "./unicodeMap"

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
