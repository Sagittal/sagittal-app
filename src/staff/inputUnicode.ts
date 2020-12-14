import {BLANK, Io, setAllPropertiesOfObjectOnAnother, SPACE} from "@sagittal/general"
import {
    ADVANCE_CODE_PREFIX,
    computeAdvanceUnicodeMindingSmartAdvanceAndPotentiallyAutoStaff,
    recordManualStaffWidthForAutoStaff,
    recordSymbolWidthForSmartAdvance,
    SMART_ADVANCE_LOWERCASE_CODEWORDS,
} from "./advanceUnicode"
import {computeLowercaseCodewordFromInput} from "./codeword"
import {INITIAL_STAFF_STATE} from "./constants"
import {staffState} from "./globals"
import {computeMaybePositionedUnicode} from "./positionUnicode"
import {computeSymbol} from "./symbol"
import {Unicode} from "./symbols"
import {Clef, Width} from "./types"

// TODO: NEW FEATURE: Smart Clefs™: if you type a treble clef, it knows to use treble, etc.
//  It will probably involve a performance improvement to computeSymbol since on the staffState you'll save which clef

// TODO: FEATURE ADJUST: END WITH ENOUGH STAFF?
//  Is it best if includes an assumed ; at the end (unless it's actually an ; ) so that you get enough staff?
//  Not even sure if this is a problem. And haven't talked with Dave yet of course because haven't investigated.

// TODO: NEW FEATURE: CUSTOM JSON
//  So that we can accept a user custom codes JSON object to merge in here too
//  Eventually you should only need to export the maps from the map/ module, not the individual ones to get their widths
//  And for the npm package version, you'd construct it with a custom JSON object or something

// TODO: NEW FEATURE: should we handle multi-line staffs?

// TODO: NEW FEATURE: inline comments with { }

// TODO: NEW FEATURE: what if we don't render partial codes, but instead show a cursor, including trailing space at end
//  But strip it out of the downloaded SVG

// TODO: PERFORMANCE: DON'T RE-RUN ON CODES YOU ALREADY CONVERTED, ONLY NEW STUFF
//  Check the diff with the previous sentence
const computeInputUnicode = (inputSentence: Io): Unicode => {
    setAllPropertiesOfObjectOnAnother({objectToChange: staffState, objectWithProperties: INITIAL_STAFF_STATE})

    return `${inputSentence} ;`
        // TODO: CLEAN: Extract a remove white space helper
        .replace(/<br>/g, " ")
        .replace(/\n/g, " ")
        .replace(/\t/g, " ")
        .split(SPACE)
        .map((inputWord: Io): Unicode => {
            // TODO: CLEAN: Try to handle manual staff here
            //  All smart auto staff advance stuff happens at the top
            //  And collapse the two records into one thing, if there’s even a need for two anymore
            if (SMART_ADVANCE_LOWERCASE_CODEWORDS.includes(computeLowercaseCodewordFromInput(inputWord))) {
                return computeAdvanceUnicodeMindingSmartAdvanceAndPotentiallyAutoStaff(staffState.smartAdvanceWidth)
            } else if (inputWord.match(ADVANCE_CODE_PREFIX) && staffState.autoStaffOn) {
                const manualAdvanceWidth = parseInt(inputWord.replace(ADVANCE_CODE_PREFIX, BLANK)) as Width

                return computeAdvanceUnicodeMindingSmartAdvanceAndPotentiallyAutoStaff(manualAdvanceWidth)
            }

            const symbol = computeSymbol(inputWord, Clef.TREBLE)
            recordSymbolWidthForSmartAdvance(symbol)
            recordManualStaffWidthForAutoStaff(symbol)

            return computeMaybePositionedUnicode(symbol)
        })
        .join(BLANK) as Unicode
}

export {
    computeInputUnicode,
}
