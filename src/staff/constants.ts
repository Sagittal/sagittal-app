import {EMPTY_UNICODE} from "./symbols"
import {Clef, StaffState, Width} from "./types"

const DEFAULT_WIDTH = 11 as Width

const INITIAL_STAFF_STATE: StaffState = {
    smartAdvanceWidth: 0 as Width,
    autoStaffWidth: 0 as Width,
    autoStaffOn: false,
    position: EMPTY_UNICODE,
    clef: Clef.TREBLE,
}

export {
    DEFAULT_WIDTH,
    INITIAL_STAFF_STATE,
}
