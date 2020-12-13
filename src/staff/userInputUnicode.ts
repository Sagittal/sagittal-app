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
import {computeMaybePositionedUnicode} from "./positionUnicode"
import {Clef, Width} from "./types"
import {computeUnit} from "./unit"

// TODO: FEATURE ADJUST: Smart Clefs™: if you type a treble clef, it knows to use treble, etc.

// TODO: FEATURE ADJUST: "stof" to turn off Auto Staff ("st" turns it back on).

// TODO: FEATURE ADJUST: DON'T RECOMPILE ON EVERY SINGLE KEY
//  Might be cool if it doesn't run if you have only one character in, unless it's ;
//  This one I haven't suggested to Dave yet

// TODO: FEATURE ADJUST: END WITH ENOUGH STAFF?
//  Is it best if includes an assumed ; at the end (unless it's actually an ; ) so that you get enough staff?
//  Not even sure if this is a problem. And haven't talked with Dave yet of course because haven't investigated.

// TODO: FEATURE ADJUST: CUSTOM JSON
//  So that we can accept a user custom codes JSON object to merge in here too
//  Eventually you should only need to export the maps from the map/ module, not the individual ones to get their widths
//  And for the npm package version, you'd construct it with a custom JSON object or something

// TODO: should we handle multi-line staffs?

// TODO: inline comments with { }

// TODO: what if we don't render partial codes, but instead show a cursor, including trailing space at end
//  But strip it out of the downloaded SVG

// TODO: DON'T RE-RUN ON CODES YOU ALREADY CONVERTED, ONLY NEW STUFF
//  Check the diff with the previous sentence
const computeUserInputUnicode = (userInputSentence: Io): Uni => {
    setAllPropertiesOfObjectOnAnother({objectToChange: staffState, objectWithProperties: INITIAL_STAFF_STATE})

    return `${userInputSentence.toLowerCase()} ;`
        // TODO: CLEAN: Extract a remove white space helper
        .replace(/<br>/g, " ")
        .replace(/\n/g, " ")
        .replace(/\t/g, " ")
        .split(SPACE)
        .map((userInputWord: Io): Uni => {
            const code = userInputWord as Code

            // TODO: CLEAN: Try to handle manual staff here
            //  All smart auto staff advance stuff happens at the top
            //  And collapse the two records into one thing, if there’s even a need for two anymore
            if (SMART_ADVANCE_CODES.includes(code)) {
                return computeAdvanceUnicodeMindingSmartAdvanceAndPotentiallyAutoStaff(staffState.smartAdvanceWidth)
            } else if (code.match(ADVANCE_CODE_PREFIX) && staffState.autoStaffOn) {
                const manualAdvanceWidth = parseInt(code.replace(ADVANCE_CODE_PREFIX, BLANK)) as Width

                return computeAdvanceUnicodeMindingSmartAdvanceAndPotentiallyAutoStaff(manualAdvanceWidth)
            }

            const unit = computeUnit(code as Code, Clef.TREBLE)
            recordSymbolWidthForSmartAdvance(unit)
            recordManualStaffWidthForAutoStaff(unit)

            return computeMaybePositionedUnicode(unit)
        })
        .join(BLANK) as Uni
}

export {
    computeUserInputUnicode,
}
