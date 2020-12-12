import {Io, max, sumTexts} from "@sagittal/general"
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
    Uni,
} from "./map"
import {Width} from "./types"
import {computeUnicodeWidth} from "./width"

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
        const advanceUnicode = computeAdvanceUnicode(staffState.smartAdvance)
        staffState.smartAdvance = 0 as Width
        return advanceUnicode
    }

    // We've got enough staff ahead of us still to apply the advance and still be within it
    if (staffState.autoStaff >= width) {
        const advanceUnicode = computeAdvanceUnicode(width)

        staffState.autoStaff = staffState.autoStaff - width as Width
        staffState.smartAdvance = 0 as Width

        return advanceUnicode
    } else {
        const useUpExistingStaffAdvanceUnicode: Uni = computeAdvanceUnicode(staffState.autoStaff)
        const remainingWidthWeStillNeedToApply: Width = width - staffState.autoStaff as Width
        const remainingStaffAdvanceUnicode = computeAdvanceUnicode(remainingWidthWeStillNeedToApply)

        staffState.autoStaff = 24 - remainingWidthWeStillNeedToApply as Width
        staffState.smartAdvance = 0 as Width

        return sumTexts(useUpExistingStaffAdvanceUnicode, st, remainingStaffAdvanceUnicode)
    }
}

const recordSymbolWidthForSmartAdvance = (unicode: Uni): void => {
    staffState.smartAdvance = max(staffState.smartAdvance, computeUnicodeWidth(unicode)) as number as Width
}

const recordManualStaffWidthForAutoStaff = (userInput: Io): void => {
    staffState.autoStaffOn = true
    if (userInput === Code["st"]) staffState.autoStaff = staffState.autoStaff + 24 as Width
    if (userInput === Code["st8"]) staffState.autoStaff = staffState.autoStaff + 8 as Width
    if (userInput === Code["st16"]) staffState.autoStaff = staffState.autoStaff + 16 as Width
    if (userInput === Code["st24"]) staffState.autoStaff = staffState.autoStaff + 24 as Width
}

export {
    recordSymbolWidthForSmartAdvance,
    recordManualStaffWidthForAutoStaff,
    computeAdvanceUnicodeMindingSmartAdvanceAndPotentiallyAutoStaff,
    computeAdvanceUnicode,
}
