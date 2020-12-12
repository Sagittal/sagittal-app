import {Io} from "@sagittal/general"
import {computeUserInputUnicode} from "../userInputUnicode"

const replaceStaffCodeWithUnicodeBBCode = (staffDiv: Element): void => {
    if (staffDiv.classList.contains("processed")) return
    staffDiv.classList.add("processed")

    staffDiv.textContent = computeUserInputUnicode(staffDiv.textContent as Io)
}


export {
    replaceStaffCodeWithUnicodeBBCode,
}
