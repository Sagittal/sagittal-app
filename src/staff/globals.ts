import {INITIAL_STAFF_STATE} from "./constants"
import {StaffState} from "./types"

const staffState: StaffState = JSON.parse(JSON.stringify(INITIAL_STAFF_STATE))

export {
    staffState,
}
