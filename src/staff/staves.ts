import {staffState} from "./globals"
import {Code, SMART_STAVE_MAP, Symbol, Unicode, Width} from "./symbols"
import {computeMapUnicodes, computeUnicodeForCode} from "./unicode"

const ST8_UNICODE = computeUnicodeForCode(Code["st8"])
const ST16_UNICODE = computeUnicodeForCode(Code["st16"])
const ST24_UNICODE = computeUnicodeForCode(Code["st24"])
const SMART_STAVE_UNICODE = computeUnicodeForCode(Code["st"])
const SMART_STAVE_UNICODES = computeMapUnicodes(SMART_STAVE_MAP)

const maybeRecordSmartStave = ({unicode}: Symbol): void => {
    if (unicode === SMART_STAVE_UNICODE) {
        staffState.smartStaveOn = true
    }
    if (unicode === ST8_UNICODE) {
        staffState.smartStaveOn = true // TODO: these should not happen, and probably this method should split up
        staffState.smartStaveWidth = staffState.smartStaveWidth + 8 as Width
    }
    if (unicode === ST16_UNICODE) {
        staffState.smartStaveOn = true
        staffState.smartStaveWidth = staffState.smartStaveWidth + 16 as Width
    }
    if (unicode === ST24_UNICODE) {
        staffState.smartStaveOn = true
        staffState.smartStaveWidth = staffState.smartStaveWidth + 24 as Width
    }
}
// TODO: maybe a "smart" folder?

const isSmartStaveUnicode = (unicodeWord: Unicode): boolean =>
    SMART_STAVE_UNICODES.includes(unicodeWord)

export {
    maybeRecordSmartStave,
    isSmartStaveUnicode,
}
