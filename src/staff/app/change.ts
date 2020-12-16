import {Io, vectorizeBravuraTextSvg} from "@sagittal/general"
import {computeInputUnicode} from "../input"
import {HEIGHT_WHICH_CAUSES_SVG_TO_MATCH_TEXT} from "./constants"
import {svg} from "./dom"

const handleStaffCodeInputChange = (rootDiv: Element): void => {
    const input = rootDiv.querySelector("textarea")!
    const display = rootDiv.querySelector("div")!

    const unicodeSentence = computeInputUnicode(input.value as Io)
    display.textContent = unicodeSentence

    vectorizeBravuraTextSvg(unicodeSentence, svg, {height: HEIGHT_WHICH_CAUSES_SVG_TO_MATCH_TEXT})
}

export {
    handleStaffCodeInputChange,
}
