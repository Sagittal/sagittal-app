import {doOnNextEventLoop, Ms} from "@sagittal/general"
import {TREBLE_CLEF_INITIATION} from "./constants"
import {replaceStaffCodeWithUnicodeApp} from "./replace"

const controlsDiv = document.createElement("div")
document.body.appendChild(controlsDiv)

const staffCodeInput = document.createElement("textarea")
controlsDiv.appendChild(staffCodeInput)
// TODO: Smart Clefs™: if you type a treble clef, it knows to use treble, etc.
staffCodeInput.value = TREBLE_CLEF_INITIATION
staffCodeInput.addEventListener("keydown", (): void => { doOnNextEventLoop(replaceStaffCodeWithUnicodeApp, 100 as Ms) })
staffCodeInput.addEventListener("paste", (): void => { doOnNextEventLoop(replaceStaffCodeWithUnicodeApp, 100 as Ms) })
staffCodeInput.addEventListener("cut", (): void => { doOnNextEventLoop(replaceStaffCodeWithUnicodeApp, 100 as Ms) })

export {
    controlsDiv,
    staffCodeInput,
}
