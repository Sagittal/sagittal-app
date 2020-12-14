import {BLANK, Io, max, Maybe, sumTexts} from "@sagittal/general"
import {computeLowercaseCodewordFromInput, computeMapLowercaseCodewords} from "./codeword"
import {staffState} from "./globals"
import {computeSymbol} from "./symbol"
import {Code, EMPTY_UNICODE, LowercaseCodeword, SMART_ADVANCE_MAP, STAFF_LINE_MAP, Unicode} from "./symbols"
import {Width} from "./types"
import {computeUnicodeForCode} from "./unicode"
import {computeSymbolWidth} from "./width"

// TODO: FEATURE IMPROVE: perhaps only keep ; and ;13 or 13; for the manual advances. waiting on Dave

const SMART_ADVANCE_LOWERCASE_CODEWORDS: LowercaseCodeword[] = computeMapLowercaseCodewords(SMART_ADVANCE_MAP)
const ADVANCE_CODE_PREFIX = "sp"
const MAX_ADVANCE_WIDTH: Width = 16 as Width
const MAX_ADVANCE_UNICODE = computeUnicodeForCode(Code["sp16"])

const MANUAL_STAFF_LINES_LOWERCASE_CODEWORDS: LowercaseCodeword[] = computeMapLowercaseCodewords(STAFF_LINE_MAP)
const ST8_UNICODE = computeUnicodeForCode(Code["st8"])
const ST16_UNICODE = computeUnicodeForCode(Code["st16"])
const ST24_UNICODE = computeUnicodeForCode(Code["st24"])
const ST_UNICODE = computeUnicodeForCode(Code["st"])

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

        return sumTexts(useUpExistingStaffAdvanceUnicode, ST_UNICODE, remainingStaffAdvanceUnicode)
    }
}

const recordSymbolWidthForSmartAdvance = (inputWord: Io): void => {
    const symbol = computeSymbol(inputWord)

    const maxSymbolWidthSinceLastAdvance = max(staffState.smartAdvanceWidth, computeSymbolWidth(symbol))

    staffState.smartAdvanceWidth = maxSymbolWidthSinceLastAdvance
}

const computeManualStaffUnicodeAndRecordAutoStaff = (inputWord: Io): Unicode => {
    staffState.autoStaffOn = true

    const {unicode} = computeSymbol(inputWord)

    if (unicode === ST8_UNICODE) staffState.autoStaffWidth = staffState.autoStaffWidth + 8 as Width
    if (unicode === ST16_UNICODE) staffState.autoStaffWidth = staffState.autoStaffWidth + 16 as Width
    if (unicode === ST24_UNICODE) staffState.autoStaffWidth = staffState.autoStaffWidth + 24 as Width

    return unicode
}

const computeMaybeStaffOrAdvanceUnicodeAndUpdateAutoStaffAndSmartAdvance = (inputWord: Io): Maybe<Unicode> => {
    if (SMART_ADVANCE_LOWERCASE_CODEWORDS.includes(computeLowercaseCodewordFromInput(inputWord))) {
        return computeAdvanceUnicodeMindingSmartAdvanceAndPotentiallyAutoStaff(staffState.smartAdvanceWidth)
    } else if (inputWord.match(ADVANCE_CODE_PREFIX) && staffState.autoStaffOn) {
        const manualAdvanceWidth = parseInt(inputWord.replace(ADVANCE_CODE_PREFIX, BLANK)) as Width

        return computeAdvanceUnicodeMindingSmartAdvanceAndPotentiallyAutoStaff(manualAdvanceWidth)
    } else if (MANUAL_STAFF_LINES_LOWERCASE_CODEWORDS.includes(computeLowercaseCodewordFromInput(inputWord))) {
        return computeManualStaffUnicodeAndRecordAutoStaff(inputWord)
    } else {
        recordSymbolWidthForSmartAdvance(inputWord)

        return undefined
    }
}

export {
    recordSymbolWidthForSmartAdvance,
    computeMaybeStaffOrAdvanceUnicodeAndUpdateAutoStaffAndSmartAdvance,
}
