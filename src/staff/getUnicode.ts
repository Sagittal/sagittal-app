import {Io, RecordKey} from "@sagittal/general"
import {Clef, Uni} from "./types"
import {
    BASS_COMBINING_STAFF_POSITION_UNICODE_MAP,
    TREBLE_COMBINING_STAFF_POSITION_UNICODE_MAP,
} from "./combiningStaffPositions"
import {CLEF_AGNOSTIC_UNICODE_MAP} from "./unicodeMap"

const getUnicode = (userInput: Io, clef: Clef): Uni => {
    const CLEF_UNICODE_MAP = clef === "bass" ?
        BASS_COMBINING_STAFF_POSITION_UNICODE_MAP :
        TREBLE_COMBINING_STAFF_POSITION_UNICODE_MAP

    const INPUT_TO_UNICODE_MAP: Record<RecordKey<Io>, Uni> = {
        ...CLEF_AGNOSTIC_UNICODE_MAP as Record<string, string> as Record<RecordKey<Io>, Uni>,
        ...CLEF_UNICODE_MAP as Record<string, string> as Record<RecordKey<Io>, Uni>,
    }

    return INPUT_TO_UNICODE_MAP[userInput]
}

export {
    getUnicode,
}
