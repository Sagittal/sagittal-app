import {staffCodeInput, staffDiv} from "./dom"
import {staffCodeToUnicode} from "./staffCodeToUnicode"
import {vectorize} from "./vectorize"

const replaceStaffCodeWithUnicodeApp = (): void => {
    const unicode = staffCodeToUnicode(staffCodeInput.value)
    staffDiv.textContent = unicode
    vectorize(unicode)
}

export {
    replaceStaffCodeWithUnicodeApp,
}
