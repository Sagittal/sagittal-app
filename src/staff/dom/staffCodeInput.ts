import {doOnNextEventLoop, Ms} from "@sagittal/general"
import {TREBLE_CLEF_INITIATION} from "../constants"
import {replaceStaffCodeWithUnicodeApp} from "../replace"
import {staffCodeInputWrapper} from "./dom"

const staffCodeInput = document.createElement("textarea")
// TODO: Smart Clefs™: if you type a treble clef, it knows to use treble, etc.
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

staffCodeInputWrapper.appendChild(staffCodeInput)

export {
    staffCodeInput,
}
