import {Clef} from "../types"
import {computeUserInputUnicodeBBCode} from "./clefInitiation"

const replaceStaffCodeWithUnicodeBBCode = (staffDiv: Element): void => {
    if (staffDiv.classList.contains("processed")) return
    staffDiv.classList.add("processed")

    const newTextContent = computeUserInputUnicodeBBCode(
        staffDiv.textContent,
        {clef: staffDiv.classList[1] as Clef},
    )

    staffDiv.textContent = newTextContent
}


export {
    replaceStaffCodeWithUnicodeBBCode,
}
