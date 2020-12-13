import {doOnNextEventLoop, Ms} from "@sagittal/general"
import {replaceStaffCodeWithUnicodeApp} from "../replace"
import {INITIAL_STAFF_CODE_INPUT_VALUE} from "./constants"

const staffCodeInput = document.createElement("textarea")
staffCodeInput.value = INITIAL_STAFF_CODE_INPUT_VALUE
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
