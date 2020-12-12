import {staffCodeToUnicode} from "../staffCodeToUnicode"
import {staffCodeInput, staffDiv, svg} from "./dom"
import {vectorizeSvg} from "./svg"

const replaceStaffCodeWithUnicodeApp = (): void => {
    const unicode = staffCodeToUnicode(staffCodeInput.value)
    staffDiv.textContent = unicode
    vectorizeSvg(unicode, svg)
}

export {
    replaceStaffCodeWithUnicodeApp,
}
