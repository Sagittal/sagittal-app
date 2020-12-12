import {BLANK, Io, setAllPropertiesOfObjectOnAnother, SPACE} from "@sagittal/general"
import {
    ADVANCE_CODE_PREFIX,
    computeAdvanceUnicodeMindingSmartAdvanceAndPotentiallyAutoStaff,
    recordManualStaffWidthForAutoStaff,
    recordSymbolWidthForSmartAdvance,
    SMART_ADVANCE_CODES,
} from "./advanceUnicode"
import {INITIAL_STAFF_STATE} from "./constants"
import {staffState} from "./globals"
import {Code, Uni} from "./map"
import {computeUnicode} from "./mappedUnicode"
import {computeMaybePositionedUnicode} from "./positionUnicode"
import {Clef, Width} from "./types"

// TODO: FEATURE ADJUST: Smart Clefs™: if you type a treble clef, it knows to use treble, etc.
//  If not that, then at least have some way in which you can change clef in the app. Awaiting Dave's feedback.

// TODO: FEATURE ADJUST: maybe Auto Staff opt-out, rather than opt-in. Waiting on Dave's feedback.

// TODO: FEATURE ADJUST: and related, do not take clef as a bbCode argument
//  See forum post after this one: http://forum.sagittal.org/viewtopic.php?p=3095#p3095
//  Also waiting on Dave's feedback.

// TODO: FEATURE ADJUST: DON'T RECOMPILE ON EVERY SINGLE KEY
//  Might be cool if it doesn't run if you have only one character in, unless it's ;
//  This one I haven't suggested to Dave yet

// TODO: FEATURE ADJUST: END WITH ENOUGH STAFF?
//  Is it best if includes an assumed ; at the end (unless it's actually an ; ) so that you get enough staff?
//  Not even sure if this is a problem.

const computeUserInputUnicode = (userInputSentence: Io): Uni => {
    setAllPropertiesOfObjectOnAnother({objectToChange: staffState, objectWithProperties: INITIAL_STAFF_STATE})

    return `${userInputSentence.toLowerCase()} ;`
        .replace(/<br>/g, " ")
        .replace(/\n/g, " ")
        .replace(/\t/g, " ")
        .split(SPACE)
        .map((userInputWord: Io): Uni => {
            const code = userInputWord as Code

            if (SMART_ADVANCE_CODES.includes(code)) {
                return computeAdvanceUnicodeMindingSmartAdvanceAndPotentiallyAutoStaff(staffState.smartAdvanceWidth)
            } else if (code.match(ADVANCE_CODE_PREFIX) && staffState.autoStaffOn) {
                const manualAdvanceWidth = parseInt(code.replace(ADVANCE_CODE_PREFIX, BLANK)) as Width

                return computeAdvanceUnicodeMindingSmartAdvanceAndPotentiallyAutoStaff(manualAdvanceWidth)
            }

            const unicode = computeUnicode(code as Code, Clef.TREBLE)
            recordSymbolWidthForSmartAdvance(unicode)
            recordManualStaffWidthForAutoStaff(unicode)

            return computeMaybePositionedUnicode(unicode)
        })
        .join(BLANK) as Uni
}

export {
    computeUserInputUnicode,
}
