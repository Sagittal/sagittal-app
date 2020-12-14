import {computeMapLowercaseCodewords} from "./codeword"
import {staffState} from "./globals"
import {Code, LowercaseCodeword, STAFF_LINE_MAP, Symbol, Width} from "./symbols"
import {computeUnicodeForCode} from "./unicode"

const MANUAL_STAFF_LINES_LOWERCASE_CODEWORDS: LowercaseCodeword[] = computeMapLowercaseCodewords(STAFF_LINE_MAP)
const ST8_UNICODE = computeUnicodeForCode(Code["st8"])
const ST16_UNICODE = computeUnicodeForCode(Code["st16"])
const ST24_UNICODE = computeUnicodeForCode(Code["st24"])

const maybeRecordAutoStaff = ({unicode}: Symbol): void => {
    if (unicode === ST8_UNICODE) {
        staffState.autoStaffOn = true
        staffState.autoStaffWidth = staffState.autoStaffWidth + 8 as Width
    }
    if (unicode === ST16_UNICODE) {
        staffState.autoStaffOn = true
        staffState.autoStaffWidth = staffState.autoStaffWidth + 16 as Width
    }
    if (unicode === ST24_UNICODE) {
        staffState.autoStaffOn = true
        staffState.autoStaffWidth = staffState.autoStaffWidth + 24 as Width
    }
}

export {
    maybeRecordAutoStaff,
}
