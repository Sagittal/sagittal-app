import {staffCodeToUnicode} from "../staffCodeToUnicode"
import {vectorize} from "../vectorize"
import {staffCodeInput, staffDiv, svg} from "./dom"

const replaceStaffCodeWithUnicodeApp = (): void => {
    const unicode = staffCodeToUnicode(staffCodeInput.value)
    staffDiv.textContent = unicode
    vectorize(unicode, svg)
}

export {
    replaceStaffCodeWithUnicodeApp,
}
