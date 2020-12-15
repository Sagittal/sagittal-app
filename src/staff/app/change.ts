import {Io, vectorizeBravuraTextSvg} from "@sagittal/general"
import {computeInputUnicode} from "../input"
import {HEIGHT_WHICH_CAUSES_SVG_TO_MATCH_TEXT} from "./constants"
import {staffCodeInput, staffDiv, svg} from "./dom"

const handleStaffCodeInputChange = (): void => {
    const unicodeSentence = computeInputUnicode(staffCodeInput.value as Io)
    staffDiv.textContent = unicodeSentence

    vectorizeBravuraTextSvg(unicodeSentence, svg, {height: HEIGHT_WHICH_CAUSES_SVG_TO_MATCH_TEXT})
}

export {
    handleStaffCodeInputChange,
}
