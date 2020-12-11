import {doOnNextEventLoop, Ms} from "@sagittal/general"
import {replaceStaffCodeWithUnicodeApp} from "./replace"

const controlsDiv = document.createElement("div")
document.body.appendChild(controlsDiv)

const staffCodeInput = document.createElement("textarea")
controlsDiv.appendChild(staffCodeInput)
staffCodeInput.value = "st24 tbcf sp" // TODO: constantize with the forum thing
staffCodeInput.addEventListener("keydown", (): void => { doOnNextEventLoop(replaceStaffCodeWithUnicodeApp, 100 as Ms) })
staffCodeInput.addEventListener("paste", (): void => { doOnNextEventLoop(replaceStaffCodeWithUnicodeApp, 100 as Ms) })
staffCodeInput.addEventListener("cut", (): void => { doOnNextEventLoop(replaceStaffCodeWithUnicodeApp, 100 as Ms) })

export {
    controlsDiv,
    staffCodeInput,
}
