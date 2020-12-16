import {Io} from "@sagittal/general"
import {computeInputUnicode} from "./input"
import {Unicode} from "./symbols"

const translateInputToDisplay = (rootDiv: Element): Unicode => {
    const input = rootDiv.querySelector("textarea")!
    const display = rootDiv.querySelector("div")!

    const unicodeSentence = computeInputUnicode(input.value as Io)
    display.textContent = unicodeSentence

    return unicodeSentence
}

export {
    translateInputToDisplay,
}
