import {setAllPropertiesOfObjectOnAnother} from "@sagittal/general"
import {INITIAL_SMARTS, smarts} from "../../../../src/staff/smarts"

afterEach((): void => {
    setAllPropertiesOfObjectOnAnother({objectToChange: smarts, objectWithProperties: INITIAL_SMARTS})
})
