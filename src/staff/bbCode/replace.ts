import {Io} from "@sagittal/general"
import {computeInputUnicode} from "../inputUnicode"

const replaceInputWithUnicode = (staffDiv: Element): void => {
    if (staffDiv.classList.contains("processed")) return
    staffDiv.classList.add("processed")

    const unicodeSentence = computeInputUnicode(staffDiv.textContent as Io)
    staffDiv.textContent = unicodeSentence
}


export {
    replaceInputWithUnicode,
}
