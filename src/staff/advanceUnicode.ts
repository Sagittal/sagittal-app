import {isUndefined, max, sumTexts} from "@sagittal/general"
import {DEFAULT_WIDTH} from "./constants"
import {staffState} from "./globals"
import {Code, CODE_MAP, EMPTY_UNICODE, STAFF_LINE_MAP, Uni, Unit} from "./map"
import {Width} from "./types"

// TODO: FEATURE ADJUST: perhaps only keep ; and ;13 or 13; for the manual ones. waiting on Dave
const SMART_ADVANCE_CODES: Code[] = [Code["sp"], Code["ad"], Code[";"]]
const ADVANCE_CODE_PREFIX = "sp"

const WIDTH_OF_BIGGEST_ADVANCE: Width = 16 as Width

const WIDTH_TO_ADVANCE_UNICODE_ARRAY: Uni[] = [
    EMPTY_UNICODE,
    CODE_MAP[Code["sp1"]]!.unicode,
    CODE_MAP[Code["sp2"]]!.unicode,
    CODE_MAP[Code["sp3"]]!.unicode,
    CODE_MAP[Code["sp4"]]!.unicode,
    CODE_MAP[Code["sp5"]]!.unicode,
    CODE_MAP[Code["sp6"]]!.unicode,
    CODE_MAP[Code["sp7"]]!.unicode,
    CODE_MAP[Code["sp8"]]!.unicode,
    CODE_MAP[Code["sp9"]]!.unicode,
    CODE_MAP[Code["sp10"]]!.unicode,
    CODE_MAP[Code["sp11"]]!.unicode,
    CODE_MAP[Code["sp12"]]!.unicode,
    CODE_MAP[Code["sp13"]]!.unicode,
    CODE_MAP[Code["sp14"]]!.unicode,
    CODE_MAP[Code["sp15"]]!.unicode,
]

const computeAdvanceUnicode = (width: Width): Uni => {
    let remainingWidth = width

    let unicode = EMPTY_UNICODE
    while (remainingWidth >= WIDTH_OF_BIGGEST_ADVANCE) {
        remainingWidth = remainingWidth - WIDTH_OF_BIGGEST_ADVANCE as Width
        unicode = sumTexts(unicode, CODE_MAP[Code["sp16"]]!.unicode)
    }

    return sumTexts(unicode, WIDTH_TO_ADVANCE_UNICODE_ARRAY[remainingWidth])
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

        return sumTexts(useUpExistingStaffAdvanceUnicode, CODE_MAP[Code["st"]]!.unicode, remainingStaffAdvanceUnicode)
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
    if (unicode === CODE_MAP[Code["st8"]]!.unicode) staffState.autoStaffWidth = staffState.autoStaffWidth + 8 as Width
    if (unicode === CODE_MAP[Code["st16"]]!.unicode) staffState.autoStaffWidth = staffState.autoStaffWidth + 16 as Width
    if (unicode === CODE_MAP[Code["st24"]]!.unicode) staffState.autoStaffWidth = staffState.autoStaffWidth + 24 as Width
}

export {
    recordSymbolWidthForSmartAdvance,
    recordManualStaffWidthForAutoStaff,
    computeAdvanceUnicodeMindingSmartAdvanceAndPotentiallyAutoStaff,
    computeAdvanceUnicode,
    SMART_ADVANCE_CODES,
    ADVANCE_CODE_PREFIX,
}
