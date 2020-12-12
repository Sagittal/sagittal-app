import {Io} from "@sagittal/general"
import {Code, EMPTY_UNICODE} from "./map"
import {StaffState, Width} from "./types"

const BASS_CLEF_INITIATION = `${Code["st"]} ${Code["bscf"]} ; ` as Io
const TREBLE_CLEF_INITIATION = `${Code["st"]} ${Code["tbcf"]} ; ` as Io

const DEFAULT_WIDTH = 11 as Width

const INITIAL_STAFF_STATE: StaffState = {
    smartAdvanceWidth: 0 as Width,
    autoStaffWidth: 0 as Width,
    autoStaffOn: false,
    position: EMPTY_UNICODE,
}

export {
    BASS_CLEF_INITIATION,
    TREBLE_CLEF_INITIATION,
    DEFAULT_WIDTH,
    INITIAL_STAFF_STATE,
}
