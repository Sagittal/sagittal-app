import {doOnNextEventLoop, Ms} from "@sagittal/general"
import {replaceStaffCodeWithUnicodeApp} from "./replace"

const staffCodeInput = document.createElement("textarea")
document.body.appendChild(staffCodeInput)
staffCodeInput.value = "st24 tbcf sp16 st24"
staffCodeInput.addEventListener("keydown", (): void => { doOnNextEventLoop(replaceStaffCodeWithUnicodeApp, 100 as Ms) })
staffCodeInput.addEventListener("paste", (): void => { doOnNextEventLoop(replaceStaffCodeWithUnicodeApp, 100 as Ms) })
staffCodeInput.addEventListener("cut", (): void => { doOnNextEventLoop(replaceStaffCodeWithUnicodeApp, 100 as Ms) })

export {
    staffCodeInput,
}
