import {isUndefined, max, sumTexts} from "@sagittal/general"
import {computeLowercaseCodewordFromCode} from "./codeword"
import {DEFAULT_WIDTH} from "./constants"
import {staffState} from "./globals"
import {Code, EMPTY_UNICODE, LowercaseCodeword, SMART_ADVANCE_MAP, STAFF_LINE_MAP, Uni, Unit} from "./map"
import {Width} from "./types"
import {computeUnicodeForCode} from "./unicode"

// TODO: FEATURE ADJUST: perhaps only keep ; and ;13 or 13; for the manual ones. waiting on Dave

// TODO: CLEAN: maybe helper for this? computeMapCodewords
const SMART_ADVANCE_LOWERCASE_CODEWORDS: LowercaseCodeword[] = (Object.keys(SMART_ADVANCE_MAP) as unknown[] as Code[])
    .map(computeLowercaseCodewordFromCode)
const ADVANCE_CODE_PREFIX = "sp"

const MAX_ADVANCE_WIDTH: Width = 16 as Width

const MAX_ADVANCE_UNICODE = computeUnicodeForCode(Code["sp16"])

const ST8_UNICODE = computeUnicodeForCode(Code["st8"])
const ST16_UNICODE = computeUnicodeForCode(Code["st16"])
const ST24_UNICODE = computeUnicodeForCode(Code["st24"])
const ST_UNICODE = computeUnicodeForCode(Code["st"])

const WIDTH_TO_ADVANCE_UNICODE_ARRAY: Uni[] = [
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

const computeAdvanceUnicode = (width: Width): Uni => {
    let remainingWidth = width

    let unicodePhrase = EMPTY_UNICODE
    while (remainingWidth >= MAX_ADVANCE_WIDTH) {
        remainingWidth = remainingWidth - MAX_ADVANCE_WIDTH as Width
        unicodePhrase = sumTexts(unicodePhrase, MAX_ADVANCE_UNICODE)
    }

    return sumTexts(unicodePhrase, WIDTH_TO_ADVANCE_UNICODE_ARRAY[remainingWidth])
}

const computeAdvanceUnicodeMindingSmartAdvanceAndPotentiallyAutoStaff = (width: Width): Uni => {
    if (staffState.autoStaffWidth >= width || !staffState.autoStaffOn) {
        const advanceUnicode = computeAdvanceUnicode(width)

        if (staffState.autoStaffOn) staffState.autoStaffWidth = staffState.autoStaffWidth - width as Width
        staffState.smartAdvanceWidth = 0 as Width

        return advanceUnicode
    } else {
        const useUpExistingStaffAdvanceUnicode: Uni = computeAdvanceUnicode(staffState.autoStaffWidth)
        const remainingWidthWeStillNeedToApply: Width = width - staffState.autoStaffWidth as Width
        const remainingStaffAdvanceUnicode = computeAdvanceUnicode(remainingWidthWeStillNeedToApply)

        staffState.autoStaffWidth = 24 - remainingWidthWeStillNeedToApply as Width
        staffState.smartAdvanceWidth = 0 as Width

        return sumTexts(useUpExistingStaffAdvanceUnicode, ST_UNICODE, remainingStaffAdvanceUnicode)
    }
}

const recordSymbolWidthForSmartAdvance = ({width}: Unit): void => {
    staffState.smartAdvanceWidth =
        max(staffState.smartAdvanceWidth, isUndefined(width) ? DEFAULT_WIDTH : width) as number as Width
}

// TODO: DRY this with combining staff positions
//  Or even better, just have a helper method that checks to see if a subset map includes
const STAFF_LINES_UNICODES = Object.values(STAFF_LINE_MAP).map(({unicode}: Unit): Uni => unicode)

const recordManualStaffWidthForAutoStaff = ({unicode}: Unit): void => {
    if (!STAFF_LINES_UNICODES.includes(unicode)) return

    staffState.autoStaffOn = true

    if (unicode === ST8_UNICODE) staffState.autoStaffWidth = staffState.autoStaffWidth + 8 as Width
    if (unicode === ST16_UNICODE) staffState.autoStaffWidth = staffState.autoStaffWidth + 16 as Width
    if (unicode === ST24_UNICODE) staffState.autoStaffWidth = staffState.autoStaffWidth + 24 as Width
}

export {
    recordSymbolWidthForSmartAdvance,
    recordManualStaffWidthForAutoStaff,
    computeAdvanceUnicodeMindingSmartAdvanceAndPotentiallyAutoStaff,
    computeAdvanceUnicode,
    SMART_ADVANCE_LOWERCASE_CODEWORDS,
    ADVANCE_CODE_PREFIX,
}
