import {Io} from "@sagittal/general"
import {StaffState} from "./types"
import {Code} from "./map"

const BASS_CLEF_INITIATION = `${Code["st"]} ${Code["bscf"]} ; ` as Io
const TREBLE_CLEF_INITIATION = `${Code["st"]} ${Code["tbcf"]} ; ` as Io

const INITIAL_STAFF_STATE: StaffState = {
    smartSpace: 0,
    autoStaff: 0,
    autoStaffOn: false,
}

export {
    BASS_CLEF_INITIATION,
    TREBLE_CLEF_INITIATION,
    INITIAL_STAFF_STATE,
}
