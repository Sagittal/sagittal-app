import {buildStaffCode, translateInputToDisplay} from "staff-code"

const root = buildStaffCode()
document.body.appendChild(root)

translateInputToDisplay(root)
