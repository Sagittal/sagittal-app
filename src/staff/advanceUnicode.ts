import {max, sumTexts} from "@sagittal/general"
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
    st,
    st16,
    st24,
    st8,
    STAFF_LINES,
    Uni,
} from "./map"
import {Width} from "./types"
import {computeUnicodeWidth} from "./width"

const SMART_ADVANCE_CODES = [Code["sp"], Code["ad"], Code[";"]]
const ADVANCE_CODE_PREFIX = "sp"

const WIDTH_OF_BIGGEST_ADVANCE = 16

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

// TODO: FEATURE ADJUST: maybe Auto Staff opt-out, rather than opt-in. Waiting on Dave's feedback.

const computeAdvanceUnicodeMindingSmartAdvanceAndPotentiallyAutoStaff = (width: Width): Uni => {
    if (!staffState.autoStaffOn) { // TODO: CLEAN: this could probably be simplified
        const advanceUnicode = computeAdvanceUnicode(staffState.smartAdvanceWidth)
        staffState.smartAdvanceWidth = 0 as Width
        return advanceUnicode
    }

    // We've got enough staff ahead of us still to apply the advance and still be within it
    if (staffState.autoStaffWidth >= width) {
        const advanceUnicode = computeAdvanceUnicode(width)

        staffState.autoStaffWidth = staffState.autoStaffWidth - width as Width
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

const recordSymbolWidthForSmartAdvance = (unicode: Uni): void => {
    staffState.smartAdvanceWidth = max(staffState.smartAdvanceWidth, computeUnicodeWidth(unicode)) as number as Width
}

const recordManualStaffWidthForAutoStaff = (unicode: Uni): void => {
    if (!Object.values(STAFF_LINES).includes(unicode)) return

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
