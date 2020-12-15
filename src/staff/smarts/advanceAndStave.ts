import {max, sumTexts} from "@sagittal/general"
import {Code, EMPTY_UNICODE, MANUAL_ADVANCE_MAP, SMART_ADVANCE_MAP, SMART_STAVE_MAP, Symbol, Unicode} from "../symbols"
import {Width} from "../types"
import {computeMapUnicodes, computeUnicodeForCode} from "../utility"
import {computeSymbolWidth} from "../width"
import {smarts} from "./globals"

// TODO: FEATURE IMPROVE, BLOCKED: perhaps only keep ; and ;13 or 13; for the manual advances. waiting on Dave
//  Okay, so it's ad<n> and ; and that's it

const SMART_ADVANCE_UNICODES = computeMapUnicodes(SMART_ADVANCE_MAP)
const MANUAL_ADVANCE_UNICODES = computeMapUnicodes(MANUAL_ADVANCE_MAP)
const WIDTH_TO_ADVANCE_UNICODE_ARRAY: Unicode[] = [
    EMPTY_UNICODE,
    computeUnicodeForCode(Code["sp1"]),
    computeUnicodeForCode(Code["sp2"]),
    computeUnicodeForCode(Code["sp3"]),
    computeUnicodeForCode(Code["sp4"]),
    computeUnicodeForCode(Code["sp5"]),
    computeUnicodeForCode(Code["sp6"]),
    computeUnicodeForCode(Code["sp7"]),
    computeUnicodeForCode(Code["sp8"]),
    computeUnicodeForCode(Code["sp9"]),
    computeUnicodeForCode(Code["sp10"]),
    computeUnicodeForCode(Code["sp11"]),
    computeUnicodeForCode(Code["sp12"]),
    computeUnicodeForCode(Code["sp13"]),
    computeUnicodeForCode(Code["sp14"]),
    computeUnicodeForCode(Code["sp15"]),
]

const MAX_ADVANCE_UNICODE = computeUnicodeForCode(Code["sp16"])
const MAX_ADVANCE_WIDTH: Width = 16 as Width

const ST8_UNICODE = computeUnicodeForCode(Code["st8"])
const ST16_UNICODE = computeUnicodeForCode(Code["st16"])
const ST24_UNICODE = computeUnicodeForCode(Code["st24"])

const SMART_STAVE_UNICODE = computeUnicodeForCode(Code["st"])
const SMART_STAVE_UNICODES = computeMapUnicodes(SMART_STAVE_MAP)

const computeAdvanceUnicode = (width: Width): Unicode => {
    let remainingWidth = width

    let unicodePhrase = EMPTY_UNICODE
    while (remainingWidth >= MAX_ADVANCE_WIDTH) {
        remainingWidth = remainingWidth - MAX_ADVANCE_WIDTH as Width
        unicodePhrase = sumTexts(unicodePhrase, MAX_ADVANCE_UNICODE)
    }

    return sumTexts(unicodePhrase, WIDTH_TO_ADVANCE_UNICODE_ARRAY[remainingWidth])
}

const computeSmartAdvanceAndSmartStavePrefixUnicodeAndUpdateSmartAdvanceAndSmartStave = (width: Width): Unicode => {
    let advancePrefixUnicode
    if (smarts.staveWidth >= width || !smarts.staveOn) {
        smarts.staveWidth = smarts.staveWidth - width as Width

        advancePrefixUnicode = computeAdvanceUnicode(width)
    } else {
        const useUpExistingStaffAdvanceUnicode: Unicode = computeAdvanceUnicode(smarts.staveWidth)
        const remainingWidthWeStillNeedToApply: Width = width - smarts.staveWidth as Width
        const remainingStaffAdvanceUnicode = computeAdvanceUnicode(remainingWidthWeStillNeedToApply)

        smarts.staveWidth = 24 - remainingWidthWeStillNeedToApply as Width

        advancePrefixUnicode = sumTexts(useUpExistingStaffAdvanceUnicode, ST24_UNICODE, remainingStaffAdvanceUnicode)
    }

    smarts.advanceWidth = 0 as Width

    return advancePrefixUnicode
}

const computeSmartAdvanceAndSmartStavePrefixUnicodeAndUpdateSmarts = (symbol: Symbol): Unicode => {
    let smartAdvanceAndSmartStavePrefixUnicode
    if (isSmartAdvanceUnicode(symbol.unicode)) {
        smartAdvanceAndSmartStavePrefixUnicode =
            computeSmartAdvanceAndSmartStavePrefixUnicodeAndUpdateSmartAdvanceAndSmartStave(smarts.advanceWidth)
    } else if (isManualAdvanceUnicode(symbol.unicode)) {
        smartAdvanceAndSmartStavePrefixUnicode =
            computeSmartAdvanceAndSmartStavePrefixUnicodeAndUpdateSmartAdvanceAndSmartStave(symbol.width!)
    } else {
        updateSmartStave(symbol)

        const maxSymbolWidthSinceLastAdvance = max(smarts.advanceWidth, computeSymbolWidth(symbol))
        smarts.advanceWidth = maxSymbolWidthSinceLastAdvance

        smartAdvanceAndSmartStavePrefixUnicode = EMPTY_UNICODE
    }

    return smartAdvanceAndSmartStavePrefixUnicode
}

const isSmartAdvanceUnicode = (unicodeWord: Unicode): boolean =>
    SMART_ADVANCE_UNICODES.includes(unicodeWord)

const isManualAdvanceUnicode = (unicodeWord: Unicode): boolean =>
    MANUAL_ADVANCE_UNICODES.includes(unicodeWord)

const updateSmartStave = ({unicode}: Symbol): void => {
    if (unicode === SMART_STAVE_UNICODE) smarts.staveOn = true

    if (unicode === ST8_UNICODE) smarts.staveWidth = smarts.staveWidth + 8 as Width
    if (unicode === ST16_UNICODE) smarts.staveWidth = smarts.staveWidth + 16 as Width
    if (unicode === ST24_UNICODE) smarts.staveWidth = smarts.staveWidth + 24 as Width
}

const isSmartStaveUnicode = (unicodeWord: Unicode): boolean =>
    SMART_STAVE_UNICODES.includes(unicodeWord)

export {
    computeSmartAdvanceAndSmartStavePrefixUnicodeAndUpdateSmarts,
    isSmartAdvanceUnicode,
    isManualAdvanceUnicode,
    updateSmartStave,
    isSmartStaveUnicode,
}
