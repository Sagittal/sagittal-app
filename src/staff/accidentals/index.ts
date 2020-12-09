import {CONVENTIONAL_ACCIDENTALS} from "./conventional"
import {EHEJIPN_ACCIDENTALS} from "./ehejipn"
import {SAGITTAL_ACCIDENTALS} from "./sagittal"
import {UNCONVENTIONAL_ACCIDENTALS} from "./unconventional"
import {UPS_AND_DOWNS_ACCIDENTALS} from "./upsAndDowns"

const ACCIDENTALS = {
    ...CONVENTIONAL_ACCIDENTALS,
    ...EHEJIPN_ACCIDENTALS,
    ...SAGITTAL_ACCIDENTALS,
    ...UNCONVENTIONAL_ACCIDENTALS,
    ...UPS_AND_DOWNS_ACCIDENTALS,
}

export {
    ACCIDENTALS,
}
