import {doOnNextEventLoop, Ms} from "@sagittal/general"
import {TREBLE_CLEF_INITIATION} from "../../constants"
import {replaceStaffCodeWithUnicodeApp} from "../replace"

const staffCodeInput = document.createElement("textarea")
staffCodeInput.value = TREBLE_CLEF_INITIATION
staffCodeInput.addEventListener("keydown", (): void => {
    doOnNextEventLoop(replaceStaffCodeWithUnicodeApp, 100 as Ms).then()
})
staffCodeInput.addEventListener("paste", (): void => {
    doOnNextEventLoop(replaceStaffCodeWithUnicodeApp, 100 as Ms).then()
})
staffCodeInput.addEventListener("cut", (): void => {
    doOnNextEventLoop(replaceStaffCodeWithUnicodeApp, 100 as Ms).then()
})


export {
    staffCodeInput,
}
