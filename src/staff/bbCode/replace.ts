import {Io} from "@sagittal/general"
import {computeInputUnicode} from "../input"

const replaceInputWithUnicode = (rootDiv: Element): void => {
    // TODO: DRY with sibling
    if (rootDiv.classList.contains("processed")) return
    rootDiv.classList.add("processed")

    const input = rootDiv.querySelector("textarea")!
    const display = rootDiv.querySelector("div")!

    const unicodeSentence = computeInputUnicode(input.value as Io)
    display.textContent = unicodeSentence
}


export {
    replaceInputWithUnicode,
}
