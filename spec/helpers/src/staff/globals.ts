import {setAllPropertiesOfObjectOnAnother} from "@sagittal/general"
import {INITIAL_STAFF_STATE} from "../../../../src/staff/constants"
import {staffState} from "../../../../src/staff/globals"

afterEach((): void => {
    setAllPropertiesOfObjectOnAnother({objectToChange: staffState, objectWithProperties: INITIAL_STAFF_STATE})
})
