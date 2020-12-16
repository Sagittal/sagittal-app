import {doOnNextEventLoop, Ms} from "@sagittal/general"
import {processStaffCodeChange} from "../process"
import {INITIAL_STAFF_CODE_INPUT_VALUE} from "./constants"

const input = document.createElement("textarea")
input.value = INITIAL_STAFF_CODE_INPUT_VALUE
input.addEventListener("keydown", (): void => {
    doOnNextEventLoop(processStaffCodeChange, 100 as Ms).then()
})
input.addEventListener("paste", (): void => {
    doOnNextEventLoop(processStaffCodeChange, 100 as Ms).then()
})
input.addEventListener("cut", (): void => {
    doOnNextEventLoop(processStaffCodeChange, 100 as Ms).then()
})

export {
    input,
}
