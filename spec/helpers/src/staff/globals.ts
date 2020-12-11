import {staffGlobals} from "../../../../src/staff/globals"

afterEach((): void => {
    staffGlobals.smartSpace = 0
    staffGlobals.smartStaff = 0 // TODO: use the provided helpers and an initial state
    staffGlobals.smartStaffOn = false
})
