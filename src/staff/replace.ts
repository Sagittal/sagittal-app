import {staffCodeInput} from "./staffCodeInput"
import {staffCodeToUnicode} from "./staffCodeToUnicode"
import {staffDiv} from "./staffDiv"
import {vectorize} from "./vectorize"

const replaceStaffCodeWithUnicodeApp = (): void => {
    const unicode = staffCodeToUnicode(staffCodeInput.value)
    staffDiv.textContent = unicode
    vectorize(unicode)
}

export {
    replaceStaffCodeWithUnicodeApp,
}
