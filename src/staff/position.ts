import {sumTexts} from "@sagittal/general"
import {staffState} from "./globals"
import {shouldNotBeDisplayed} from "./shouldNotBeDisplayed"
import {CSP_MAP, EMPTY_UNICODE, Symbol, Unicode} from "./symbols"
import {computeMapUnicodes} from "./unicode"

const CSP_UNICODES = computeMapUnicodes(CSP_MAP)

const canBePositioned = (unicodeWord: Unicode): boolean =>
    (unicodeWord >= "\uE022" && unicodeWord <= "\uE024")    // Leger lines
    || (unicodeWord >= "\uE0A0" && unicodeWord <= "\uE21F") // Noteheads, notes, stems, beamed groups of notes
    || (unicodeWord >= "\uE240" && unicodeWord <= "\uE4FF") // Flags, accidentals, articulation, holds, pauses, rests
    || (unicodeWord >= "\uE900" && unicodeWord <= "\uEA1F") // Medieval & Renaissance
    || (unicodeWord >= "\uEC30" && unicodeWord <= "\uEC3F") // Kievan square notation


const isCspUnicode = (unicodeWord: Unicode): boolean =>
    CSP_UNICODES.includes(unicodeWord)

const computeMaybePositionedUnicode = ({unicode}: Symbol): Unicode =>
    canBePositioned(unicode) ?
        sumTexts(staffState.position, unicode) :
        // TODO: CLEAN: MOSTLY DUMB 1-TO-1 MAP
        //  In this refactor, this goes elsewhere, mixing position and non-position
        shouldNotBeDisplayed(unicode) ?
            EMPTY_UNICODE :
            unicode

const maybeRecordStickyPosition = ({unicode}: Symbol): void => {
    if (isCspUnicode(unicode)) staffState.position = unicode
}

export {
    canBePositioned,
    computeMaybePositionedUnicode,
    maybeRecordStickyPosition,
    isCspUnicode,
}
