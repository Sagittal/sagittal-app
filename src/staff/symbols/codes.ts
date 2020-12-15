import {ACCIDENTAL_MAP} from "./accidentals"
import {MANUAL_ADVANCE_MAP, SMART_ADVANCE_MAP} from "./advance"
import {BAR_MAP, BEAMS_MAP, DOT_MAP, LEGER_LINE_MAP, NOTE_MAP, REST_MAP, TIME_SIGNATURE_MAP} from "./basics"
import {CLEF_MAP} from "./clef"
import {MANUAL_POSITION_MAP} from "./position"
import {MANUAL_STAVE_MAP, SMART_STAVE_MAP} from "./stave"
import {Code, Symbol} from "./types"

const CODE_MAP: Record<Code, Symbol> = {
    ...MANUAL_ADVANCE_MAP,
    ...SMART_ADVANCE_MAP,
    ...MANUAL_STAVE_MAP,
    ...SMART_STAVE_MAP,
    ...LEGER_LINE_MAP,
    ...BAR_MAP,
    ...CLEF_MAP,
    ...NOTE_MAP,
    ...REST_MAP,
    ...DOT_MAP,
    ...BEAMS_MAP,
    ...TIME_SIGNATURE_MAP,
    ...ACCIDENTAL_MAP,
    ...MANUAL_POSITION_MAP,
}

export {
    CODE_MAP,
}
