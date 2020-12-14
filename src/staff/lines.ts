import {staffState} from "./globals"
import {AUTO_STAFF_MAP, Code, Symbol, Unicode, Width} from "./symbols"
import {computeMapUnicodes, computeUnicodeForCode} from "./unicode"

const ST8_UNICODE = computeUnicodeForCode(Code["st8"])
const ST16_UNICODE = computeUnicodeForCode(Code["st16"])
const ST24_UNICODE = computeUnicodeForCode(Code["st24"])
const AUTO_STAFF_UNICODE = computeUnicodeForCode(Code["st"])
// TODO: find all accidental smart staff
const AUTO_STAFF_UNICODES = computeMapUnicodes(AUTO_STAFF_MAP) // TODO: put all consts at top

// TODO: within staffCode.js or whatever this is called, call physical staff "stave"
//  Rename these files from lines and remove refernces to lines and staff

const maybeRecordAutoStaff = ({unicode}: Symbol): void => {
    if (unicode === AUTO_STAFF_UNICODE) {
        staffState.autoStaffOn = true
    }
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


const isAutoStaffUnicode = (unicodeWord: Unicode): boolean => {
    return AUTO_STAFF_UNICODES.includes(unicodeWord) // TODO: clean up braces single line fns
}

export {
    maybeRecordAutoStaff,
    isAutoStaffUnicode,
}
