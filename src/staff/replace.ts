import {staffCodeInput} from "./staffCodeInput"
import {staffCodeToUnicode} from "./staffCodeToUnicode"
import {staffDiv} from "./staffDiv"

const replaceStaffCodeWithUnicodeApp = (): void => {
    staffDiv.textContent = staffCodeToUnicode(staffCodeInput.value)
}

export {
    replaceStaffCodeWithUnicodeApp,
}
