import {Code, StaffState, Uni} from "./types"

const BASS_CLEF_INITIATION = `${Code["st"]} ${Code["bscf"]} ; `
const TREBLE_CLEF_INITIATION = `${Code["st"]} ${Code["tbcf"]} ; `

const INITIAL_STAFF_STATE: StaffState = {
    smartSpace: 0,
    // TODO: autoStaff, autoStaffOn, and smartSpace
    smartStaff: 0,
    smartStaffOn: false,
}

const EMPTY_UNICODE: Uni = "" as Uni

export {
    BASS_CLEF_INITIATION,
    TREBLE_CLEF_INITIATION,
    INITIAL_STAFF_STATE,
    EMPTY_UNICODE,
}
