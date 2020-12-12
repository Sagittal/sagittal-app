import {computeUserInputUnicode} from "../userInputUnicode"
import {staffCodeInput, staffDiv, svg} from "./dom"
import {vectorizeSvg} from "./svg"

const replaceStaffCodeWithUnicodeApp = (): void => {
    const unicode = computeUserInputUnicode(staffCodeInput.value)
    staffDiv.textContent = unicode
    vectorizeSvg(unicode, svg)
}

export {
    replaceStaffCodeWithUnicodeApp,
}
