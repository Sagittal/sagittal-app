import {ACCIDENTALS} from "./accidentals"
import {ADVANCES} from "./advance"
import {
    BARS,
    BEAMED_GROUPS_OF_NOTES,
    CLEFS,
    DOTS,
    LEDGER_LINES,
    NOTES,
    RESTS,
    TIME_SIGNATURES,
} from "./basics"
import {STAFF_LINES} from "./lines"
import {Code, Uni} from "./types"

const CODES: Partial<Record<Code, Uni>> = {
    ...ADVANCES,
    ...STAFF_LINES,
    ...LEDGER_LINES,
    ...BARS,
    ...CLEFS,
    ...NOTES,
    ...RESTS,
    ...DOTS,
    ...BEAMED_GROUPS_OF_NOTES,
    ...TIME_SIGNATURES,
    ...ACCIDENTALS,
}

export {
    CODES,
}
