import {Io} from "@sagittal/general"
import {computeInputUnicode} from "../inputUnicode"
import {staffCodeInput, staffDiv, svg} from "./dom"
import {vectorizeSvg} from "./svg"

const handleStaffCodeInputChange = (): void => {
    const unicodeSentence = computeInputUnicode(staffCodeInput.value as Io)
    staffDiv.textContent = unicodeSentence

    vectorizeSvg(unicodeSentence, svg)
}

export {
    handleStaffCodeInputChange,
}
