import {computeUserInputUnicode} from "../userInputUnicode"
import {staffCodeInput, staffDiv, svg} from "./dom"
import {vectorizeSvg} from "./svg"

const replaceStaffCodeWithUnicodeApp = (): void => {
    const unicodeSentence = computeUserInputUnicode(staffCodeInput.value)
    staffDiv.textContent = unicodeSentence
    vectorizeSvg(unicodeSentence, svg)
}

export {
    replaceStaffCodeWithUnicodeApp,
}
