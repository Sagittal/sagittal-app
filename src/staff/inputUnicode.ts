import {BLANK, Io, isUndefined, setAllPropertiesOfObjectOnAnother, SPACE} from "@sagittal/general"
import {computeLowercaseCodewordFromInput} from "./codeword"
import {
    computeMaybeAdvancedUnicodeAndMaybeRecordSmartAdvanceAndSmartClef,
    computeMaybePositionedUnicode,
    INITIAL_SMARTS,
    maybeRecordSmartAdvance,
    maybeRecordSmartClef,
    maybeRecordSmartPosition,
    smarts,
} from "./smarts"
import {maybeRecordSmartStave} from "./smarts/staves"
import {computeSymbol} from "./symbol"
import {Code, LowercaseCodeword, Unicode} from "./symbols"

// TODO: NEW FEATURE, READY TO GO: inline comments with { }. ready to go

// TODO: NEW FEATURE, BLOCKED: CUSTOM JSON
//  So that we can accept a user custom codes JSON object to merge in here too
//  Eventually you should only need to export the maps from the map/ module, not the individual ones to get their widths
//  And for the npm package version, you'd construct it with a custom JSON object or something
//  Slightly blocked on Dave's specific feedback about it being a TSV or tab-separated text file

// TODO: NEW FEATURE, BLOCKED: should we handle multi-line staves? still waiting on Dave's response

// TODO: NEW FEATURE, BLOCKED: what if we don't render partial codes, but instead show a cursor,
//  Including trailing space at end
//  But strip it out of the downloaded SVG
//  Still waiting on Dave

// TODO: NEW FEATURE, BLOCKED: also add a copy image button? still waiting on Dave's confirmation

// TODO: PERFORMANCE, BLOCKED: DON'T RE-RUN ON CODES YOU ALREADY CONVERTED, ONLY NEW STUFF
//  Check the diff with the previous sentence
//  Just waiting cuz I'm curious what Dave thinks

const collapseAllWhitespacesToSingleSpaces = (inputSentence: Io): Io =>
    inputSentence
        .replace(/<br>/g, SPACE)
        .replace(/\n/g, SPACE)
        .replace(/\t/g, SPACE)

const computeInputUnicode = (inputSentence: Io): Unicode => {
    setAllPropertiesOfObjectOnAnother({objectToChange: smarts, objectWithProperties: INITIAL_SMARTS})

    const inputWords = collapseAllWhitespacesToSingleSpaces(inputSentence).split(SPACE)
    inputWords.push(Code[Code[";"]])

    return inputWords
        .map((inputWord: Io): Unicode => {
            const lowercaseCodeword: LowercaseCodeword = computeLowercaseCodewordFromInput(inputWord)
            const symbol = computeSymbol(lowercaseCodeword)

            const unicode = computeMaybeAdvancedUnicodeAndMaybeRecordSmartAdvanceAndSmartClef(symbol)
            // TODO: CLEAN: MOSTLY DUMB 1-TO-1 MAP
            //  Maybe have a pattern to return prefixes and suffixes of unicode
            //  Whether it's advance, stave, or CSP
            //  And only having one return statement at the end
            if (!isUndefined(unicode)) return unicode

            maybeRecordSmartStave(symbol)
            maybeRecordSmartAdvance(symbol)
            maybeRecordSmartClef(symbol)
            maybeRecordSmartPosition(symbol)

            return computeMaybePositionedUnicode(symbol)
        })
        .join(BLANK) as Unicode
}

export {
    computeInputUnicode,
}
