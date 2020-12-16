import {vectorizeBravuraTextSvg} from "@sagittal/general"
import {translateInputToDisplay} from "../translate"
import {HEIGHT_WHICH_CAUSES_SVG_TO_MATCH_TEXT} from "./constants"
import {root, svg} from "./dom"

const processStaffCodeChange = (): void => {
    const unicodeSentence = translateInputToDisplay(root)

    vectorizeBravuraTextSvg(unicodeSentence, svg, {height: HEIGHT_WHICH_CAUSES_SVG_TO_MATCH_TEXT})
}

export {
    processStaffCodeChange,
}
