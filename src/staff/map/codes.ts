import {ACCIDENTAL_MAP} from "./accidentals"
import {ADVANCE_MAP} from "./advance"
import {BAR_MAP, BEAMS_MAP, CLEF_MAP, DOT_MAP, LEDGER_LINES, NOTE_MAP, REST_MAP, TIME_SIGNATURE_MAP} from "./basics"
import {STAFF_LINE_MAP} from "./lines"
import {Code, Unit} from "./types"

const CODES: Partial<Record<Code, Unit>> = {
    ...ADVANCE_MAP,
    ...STAFF_LINE_MAP,
    ...LEDGER_LINES,
    ...BAR_MAP,
    ...CLEF_MAP,
    ...NOTE_MAP,
    ...REST_MAP,
    ...DOT_MAP,
    ...BEAMS_MAP,
    ...TIME_SIGNATURE_MAP,
    ...ACCIDENTAL_MAP,
}

export {
    CODES,
}
