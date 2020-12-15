import {EMPTY_UNICODE, POSITION_MAP, Symbol, Unicode} from "../symbols"
import {computeMapUnicodes} from "../utility"
import {smarts} from "./globals"

const POSITION_UNICODES = computeMapUnicodes(POSITION_MAP)

const canBePositioned = (unicodeWord: Unicode): boolean =>
    (unicodeWord >= "\uE022" && unicodeWord <= "\uE024")    // Leger lines
    || (unicodeWord >= "\uE0A0" && unicodeWord <= "\uE21F") // Noteheads, notes, stems, beamed groups of notes
    || (unicodeWord >= "\uE240" && unicodeWord <= "\uE4FF") // Flags, accidentals, articulation, holds, pauses, rests
    || (unicodeWord >= "\uE900" && unicodeWord <= "\uEA1F") // Medieval & Renaissance
    || (unicodeWord >= "\uEC30" && unicodeWord <= "\uEC3F") // Kievan square notation

const isPositionUnicode = (unicodeWord: Unicode): boolean =>
    POSITION_UNICODES.includes(unicodeWord)

const updateSmartPosition = ({unicode}: Symbol): void => {
    if (isPositionUnicode(unicode)) smarts.position = unicode
}

const computeSmartPositionUnicode = ({unicode}: Symbol): Unicode =>
    canBePositioned(unicode) ? smarts.position : EMPTY_UNICODE

export {
    canBePositioned,
    updateSmartPosition,
    isPositionUnicode,
    computeSmartPositionUnicode,
}
