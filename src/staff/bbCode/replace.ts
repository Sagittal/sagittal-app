import {Clef} from "../types"
import {staffCodeToUnicodeBBCode} from "./staffCodeToUnicode"

const replaceStaffCodeWithUnicodeBBCode = (staffDiv: Element): void => {
    if (staffDiv.classList.contains("processed")) return
    staffDiv.classList.add("processed")

    const newTextContent = staffCodeToUnicodeBBCode(
        staffDiv.textContent,
        {clef: staffDiv.classList[1] as Clef},
    )

    staffDiv.textContent = newTextContent
}


export {
    replaceStaffCodeWithUnicodeBBCode,
}
