import {isUndefined, max, sumTexts} from "@sagittal/general"
import {DEFAULT_WIDTH} from "./constants"
import {staffState} from "./globals"
import {
    Code,
    EMPTY_UNICODE,
    sp1,
    sp10,
    sp11,
    sp12,
    sp13,
    sp14,
    sp15,
    sp16,
    sp2,
    sp3,
    sp4,
    sp5,
    sp6,
    sp7,
    sp8,
    sp9,
    st, st16, st24, st8,
    STAFF_LINES_UNICODES,
    Uni,
    Unit,
} from "./map"
import {Width} from "./types"

// TODO: perhaps only keep ; and ;13 or 13; for the manual ones
const SMART_ADVANCE_CODES: Code[] = [Code["sp"], Code["ad"], Code[";"]]
const ADVANCE_CODE_PREFIX = "sp"

const WIDTH_OF_BIGGEST_ADVANCE: Width = 16 as Width

const WIDTH_TO_ADVANCE_UNICODE_ARRAY: Uni[] = [
    EMPTY_UNICODE,
    sp1,
    sp2,
    sp3,
    sp4,
    sp5,
    sp6,
    sp7,
    sp8,
    sp9,
    sp10,
    sp11,
    sp12,
    sp13,
    sp14,
    sp15,
]

const computeAdvanceUnicode = (width: Width): Uni => {
    let remainingWidth = width

    let unicode = EMPTY_UNICODE
    while (remainingWidth >= WIDTH_OF_BIGGEST_ADVANCE) {
        remainingWidth = remainingWidth - WIDTH_OF_BIGGEST_ADVANCE as Width
        unicode = sumTexts(unicode, sp16)
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

        return sumTexts(useUpExistingStaffAdvanceUnicode, st, remainingStaffAdvanceUnicode)
    }
}

const recordSymbolWidthForSmartAdvance = ({width}: Unit): void => {
    staffState.smartAdvanceWidth =
        max(staffState.smartAdvanceWidth, isUndefined(width) ? DEFAULT_WIDTH : width) as number as Width
}

const recordManualStaffWidthForAutoStaff = ({unicode}: Unit): void => {
    if (!STAFF_LINES_UNICODES.includes(unicode)) return

    staffState.autoStaffOn = true
    if (unicode === st8) staffState.autoStaffWidth = staffState.autoStaffWidth + 8 as Width
    if (unicode === st16) staffState.autoStaffWidth = staffState.autoStaffWidth + 16 as Width
    if (unicode === st24) staffState.autoStaffWidth = staffState.autoStaffWidth + 24 as Width
}

export {
    recordSymbolWidthForSmartAdvance,
    recordManualStaffWidthForAutoStaff,
    computeAdvanceUnicodeMindingSmartAdvanceAndPotentiallyAutoStaff,
    computeAdvanceUnicode,
    SMART_ADVANCE_CODES,
    ADVANCE_CODE_PREFIX,
}
