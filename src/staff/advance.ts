import {max, Maybe, sumTexts} from "@sagittal/general"
import {staffState} from "./globals"
import {Code, EMPTY_UNICODE, MANUAL_ADVANCE_MAP, SMART_ADVANCE_MAP, Symbol, Unicode} from "./symbols"
import {Width} from "./types"
import {computeMapUnicodes, computeUnicodeForCode} from "./unicode"
import {computeSymbolWidth} from "./width"

// TODO: FEATURE IMPROVE, BLOCKED: perhaps only keep ; and ;13 or 13; for the manual advances. waiting on Dave

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
const ST24_UNICODE = computeUnicodeForCode(Code["st24"])
const MAX_ADVANCE_UNICODE = computeUnicodeForCode(Code["sp16"])
const MAX_ADVANCE_WIDTH: Width = 16 as Width

const computeAdvanceUnicode = (width: Width): Unicode => {
    let remainingWidth = width

    let unicodePhrase = EMPTY_UNICODE
    while (remainingWidth >= MAX_ADVANCE_WIDTH) {
        remainingWidth = remainingWidth - MAX_ADVANCE_WIDTH as Width
        unicodePhrase = sumTexts(unicodePhrase, MAX_ADVANCE_UNICODE)
    }

    return sumTexts(unicodePhrase, WIDTH_TO_ADVANCE_UNICODE_ARRAY[remainingWidth])
}

const computeAdvanceUnicodeMindingSmartAdvanceAndPotentiallyAutoStaff = (width: Width): Unicode => {
    if (staffState.autoStaffWidth >= width || !staffState.autoStaffOn) {
        const advanceUnicode = computeAdvanceUnicode(width)

        if (staffState.autoStaffOn) staffState.autoStaffWidth = staffState.autoStaffWidth - width as Width
        staffState.smartAdvanceWidth = 0 as Width

        return advanceUnicode
    } else {
        const useUpExistingStaffAdvanceUnicode: Unicode = computeAdvanceUnicode(staffState.autoStaffWidth)
        const remainingWidthWeStillNeedToApply: Width = width - staffState.autoStaffWidth as Width
        const remainingStaffAdvanceUnicode = computeAdvanceUnicode(remainingWidthWeStillNeedToApply)

        staffState.autoStaffWidth = 24 - remainingWidthWeStillNeedToApply as Width
        staffState.smartAdvanceWidth = 0 as Width

        return sumTexts(useUpExistingStaffAdvanceUnicode, ST24_UNICODE, remainingStaffAdvanceUnicode)
    }
}

const maybeRecordSmartAdvance = (symbol: Symbol): void => {
    const maxSymbolWidthSinceLastAdvance = max(staffState.smartAdvanceWidth, computeSymbolWidth(symbol))

    staffState.smartAdvanceWidth = maxSymbolWidthSinceLastAdvance
}

const computeMaybeAdvancedUnicodeAndMaybeRecordSmartAdvanceAndAutoClef = (
    symbol: Symbol,
): Maybe<Unicode> => {
    if (isSmartAdvanceUnicode(symbol.unicode)) {
        return computeAdvanceUnicodeMindingSmartAdvanceAndPotentiallyAutoStaff(staffState.smartAdvanceWidth)
        // TODO: what if you use manual advance but don't have auto staff on? what happens then?
    } else if (isManualAdvanceUnicode(symbol.unicode) && staffState.autoStaffOn) {
        return computeAdvanceUnicodeMindingSmartAdvanceAndPotentiallyAutoStaff(symbol.width!)
    }

    return undefined
}

const isSmartAdvanceUnicode = (unicodeWord: Unicode): boolean => {
    return SMART_ADVANCE_UNICODES.includes(unicodeWord)
}

const isManualAdvanceUnicode = (unicodeWord: Unicode): boolean => {
    return MANUAL_ADVANCE_UNICODES.includes(unicodeWord)
}

export {
    maybeRecordSmartAdvance,
    computeMaybeAdvancedUnicodeAndMaybeRecordSmartAdvanceAndAutoClef,
    isSmartAdvanceUnicode,
    isManualAdvanceUnicode,
}
