import {ACCIDENTAL_MAP} from "./accidentals"
import {ADVANCE_MAP} from "./advance"
import {BAR_MAP, BEAMS_MAP, CLEF_MAP, DOT_MAP, LEDGER_LINE_MAP, NOTE_MAP, REST_MAP, TIME_SIGNATURE_MAP} from "./basics"
import {
    BASS_COMBINING_STAFF_POSITION_MAP,
    CLEF_SPECIFIED_COMBINING_STAFF_POSITION_MAP,
    TREBLE_COMBINING_STAFF_POSITION_MAP,
} from "./combiningStaffPositions"
import {STAFF_LINE_MAP} from "./lines"
import {Code, Unit} from "./types"

const CODE_MAP: Record<Code, Unit> = {
    ...ADVANCE_MAP,
    ...STAFF_LINE_MAP,
    ...LEDGER_LINE_MAP,
    ...BAR_MAP,
    ...CLEF_MAP,
    ...NOTE_MAP,
    ...REST_MAP,
    ...DOT_MAP,
    ...BEAMS_MAP,
    ...TIME_SIGNATURE_MAP,
    ...ACCIDENTAL_MAP,
    ...BASS_COMBINING_STAFF_POSITION_MAP,
    ...TREBLE_COMBINING_STAFF_POSITION_MAP,
    ...CLEF_SPECIFIED_COMBINING_STAFF_POSITION_MAP,
} as Record<Code, Unit>

export {
    CODE_MAP,
}
