import {BLANK, Io, setAllPropertiesOfObjectOnAnother, SPACE, sumTexts} from "@sagittal/general"
import {
    computeSmartAdvanceAndSmartStavePrefixUnicodeAndUpdateSmarts,
    computeSmartPositionAndSmartClefPrefixUnicodeAndUpdateSmarts,
    INITIAL_SMARTS,
    smarts,
} from "./smarts"
import {computeSymbol} from "./symbol"
import {Code, Unicode} from "./symbols"
import {computeUnicode} from "./unicode"

// TODO: NEW FEATURE, READY TO GO: inline comments with { }. ready to go

// TODO: NEW FEATURE, READY TO GO: CUSTOM JSON
//  So that we can accept a user custom codes JSON object to merge in here too
//  Eventually you should only need to export the maps from the map/ module, not the individual ones to get their widths
//  And for the npm package version, you'd construct it with a custom JSON object or something
//  Slightly blocked on Dave's specific feedback about it being a TSV or tab-separated text file
//  And I'm not quite sure yet how this is going to work w/r/t clefs and positions, if they'll be able to modify those
//  Per Dave's concerns that all mappings are based on final unicodes, not the codewords, to support other languages
//  Use tsv, support arbitrary whitespace between each field on each line
//  He may still have some resistance or thoughts re: all the codes go in such a config file though

// TODO: NEW FEATURE, BLOCKED: should we handle multi-line staves? still waiting on Dave's response
//  Dave wants to handle this, but it seems like it might be pretty hard. carriage returns don't do it alone

// TODO: NEW FEATURE, BLOCKED: what if we don't render partial codes, but instead show a cursor,
//  Including trailing space at end
//  But strip it out of the downloaded SVG
//  Still waiting on Dave
//  He doesn't like that, but now I've proposed we just don't show the thing, and then make the box red for a sec

// TODO: NEW FEATURE, READY TO GO: also add a copy image button? still waiting on Dave's confirmation
//  He says yes do it

// TODO: NEW FEATURE, BLOCKED: SMART BARLINES
//  It's currently not possible to end with a barline
//  This might be related to the `inputWords.push(Code[Code[";"]])` below
//  And BTW "brln" needs a width of 4 and "brlndb" 7
//  .
// TODO: PERFORMANCE, BLOCKED: DON'T RE-RUN ON CODES YOU ALREADY CONVERTED, ONLY NEW STUFF
//  Check the diff with the previous sentence
//  Just waiting cuz I'm curious what Dave thinks
//  He says don't spend time on it, but I can definitely see it slowing down as it gets longer...
//  Then he says it is getting slow for him now.
//  That or only compile the word once you type a space
//  Let's see what he says

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
            const symbol = computeSymbol(inputWord)

            const smartAdvanceAndSmartStavePrefixUnicode =
                computeSmartAdvanceAndSmartStavePrefixUnicodeAndUpdateSmarts(symbol)
            const smartPositionAndSmartClefPrefixUnicode =
                computeSmartPositionAndSmartClefPrefixUnicodeAndUpdateSmarts(symbol)
            const unicode = computeUnicode(symbol)

            return sumTexts(smartAdvanceAndSmartStavePrefixUnicode, smartPositionAndSmartClefPrefixUnicode, unicode)
        })
        .join(BLANK) as Unicode
}

export {
    computeInputUnicode,
}
