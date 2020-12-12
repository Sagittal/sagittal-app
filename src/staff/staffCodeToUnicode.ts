import {BLANK, Io, setAllPropertiesOfObjectOnAnother} from "@sagittal/general"
import {
    computeAdvanceUnicodeMindingSmartAdvanceAndPotentiallyAutoStaff,
    recordManualStaffWidthForAutoStaff,
    recordSymbolWidthForSmartAdvance,
} from "./advanceUnicode"
import {INITIAL_STAFF_STATE} from "./constants"
import {staffState} from "./globals"
import {Code, st, Uni} from "./map"
import {computeMaybePositionedUnicode} from "./positionUnicode"
import {Clef, Width} from "./types"
import {computeUnicode} from "./unicode"

// TODO: FEATURE ADJUST: and related, do not take clef as a bbCode argument
//  See forum post after this one: http://forum.sagittal.org/viewtopic.php?p=3095#p3095
//  Also waiting on Dave's feedback.

// TODO: FEATURE ADJUST: DON'T RECOMPILE ON EVERY SINGLE KEY
//  Might be cool if it doesn't run if you have only one character in, unless it's ;
//  This one I haven't suggested to Dave yet

// TODO: FEATURE ADJUST: END WITH ENOUGH STAFF?
//  Is it best if includes an assumed ; at the end (unless it's actually an ; ) so that you get enough staff?

const staffCodeToUnicode = (staffCode: Io): Uni => {
    setAllPropertiesOfObjectOnAnother({objectToChange: staffState, objectWithProperties: INITIAL_STAFF_STATE})

    return `${staffCode.toLowerCase()} ;`
        .replace(/<br>/g, " ")
        .replace(/\n/g, " ")
        .replace(/\t/g, " ")
        .split(" ")
        .map((userInput: Io): Uni => {
            if (["sp", "ad", ";"].includes(userInput)) {
                return computeAdvanceUnicodeMindingSmartAdvanceAndPotentiallyAutoStaff(staffState.smartAdvance)
            } else if (userInput.match("sp") && staffState.autoStaffOn) {
                const manualAdvanceWidth = parseInt(userInput.replace("sp", BLANK)) as Width
                return computeAdvanceUnicodeMindingSmartAdvanceAndPotentiallyAutoStaff(manualAdvanceWidth)
            }

            if (["st", "st8", "st16", "st24"].includes(userInput)) {
                // TODO: should this also be based on unicode, so you can only refer to st or st24,
                //  Which are the same? and so it's similar to recordSymbolWidthForSmartAdvance?
                recordManualStaffWidthForAutoStaff(userInput)
            }

            const unicode = computeUnicode(userInput as Code, Clef.TREBLE)
            recordSymbolWidthForSmartAdvance(unicode)

            return computeMaybePositionedUnicode(unicode)
        })
        .join(BLANK) as Uni
}

export {
    staffCodeToUnicode,
}
