import {computeInputUnicode} from "../inputUnicode"
import {staffCodeInput, staffDiv, svg} from "./dom"
import {vectorizeSvg} from "./svg"

const replaceStaffCodeWithUnicodeApp = (): void => {
    const unicodeSentence = computeInputUnicode(staffCodeInput.value)
    staffDiv.textContent = unicodeSentence
    vectorizeSvg(unicodeSentence, svg)
}

export {
    replaceStaffCodeWithUnicodeApp,
}
