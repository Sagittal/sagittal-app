import {Code, SMART_STAVE_MAP, Symbol, Unicode, Width} from "../symbols"
import {computeMapUnicodes, computeUnicodeForCode} from "../unicode"
import {smarts} from "./globals"

const ST8_UNICODE = computeUnicodeForCode(Code["st8"])
const ST16_UNICODE = computeUnicodeForCode(Code["st16"])
const ST24_UNICODE = computeUnicodeForCode(Code["st24"])
const SMART_STAVE_UNICODE = computeUnicodeForCode(Code["st"])
const SMART_STAVE_UNICODES = computeMapUnicodes(SMART_STAVE_MAP)

const maybeRecordSmartStave = ({unicode}: Symbol): void => {
    if (unicode === SMART_STAVE_UNICODE) {
        smarts.staveOn = true
    }
    if (unicode === ST8_UNICODE) {
        smarts.staveOn = true // TODO: these should not happen, and probably this method should split up
        smarts.staveWidth = smarts.staveWidth + 8 as Width
    }
    if (unicode === ST16_UNICODE) {
        smarts.staveOn = true
        smarts.staveWidth = smarts.staveWidth + 16 as Width
    }
    if (unicode === ST24_UNICODE) {
        smarts.staveOn = true
        smarts.staveWidth = smarts.staveWidth + 24 as Width
    }
}

const isSmartStaveUnicode = (unicodeWord: Unicode): boolean =>
    SMART_STAVE_UNICODES.includes(unicodeWord)

export {
    maybeRecordSmartStave,
    isSmartStaveUnicode,
}
