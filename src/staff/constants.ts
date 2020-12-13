import {EMPTY_UNICODE} from "./map"
import {StaffState, Width} from "./types"

const DEFAULT_WIDTH = 11 as Width

const INITIAL_STAFF_STATE: StaffState = {
    smartAdvanceWidth: 0 as Width,
    autoStaffWidth: 0 as Width,
    autoStaffOn: false,
    position: EMPTY_UNICODE,
}

export {
    DEFAULT_WIDTH,
    INITIAL_STAFF_STATE,
}
