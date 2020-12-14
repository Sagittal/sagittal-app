import {sumTexts} from "@sagittal/general"
import {staffState} from "./globals"
import {COMBINING_STAFF_POSITION_MAP, EMPTY_UNICODE, Symbol, Unicode} from "./symbols"
import {computeMapUnicodes} from "./unicode"

const canBePositioned = (unicodeWord: Unicode): boolean => {
    return (unicodeWord >= "\uE022" && unicodeWord <= "\uE02F") // Leger lines
        || (unicodeWord >= "\uE0A0" && unicodeWord <= "\uE21F") // Noteheads notes stems beams
        || (unicodeWord >= "\uE240" && unicodeWord <= "\uE4FF") // Flags accidentals articulation holds pauses rests
        || (unicodeWord >= "\uE900" && unicodeWord <= "\uEA1F") // Medieval & Renaissance
        || (unicodeWord >= "\uEC30" && unicodeWord <= "\uEC3F") // Kievan square notation
}

const isCombiningStaffPosition = (unicodeWord: Unicode): boolean =>
    COMBINING_STAFF_POSITION_UNICODES.includes(unicodeWord)

const COMBINING_STAFF_POSITION_UNICODES = computeMapUnicodes(COMBINING_STAFF_POSITION_MAP)

const computeMaybePositionedUnicode = ({unicode}: Symbol): Unicode =>
    canBePositioned(unicode) ?
        sumTexts(staffState.position, unicode) :
        isCombiningStaffPosition(unicode) ?
            EMPTY_UNICODE :
            unicode

const maybeRecordStickyPosition = ({unicode}: Symbol): void => {
    if (isCombiningStaffPosition(unicode)) staffState.position = unicode
}

export {
    canBePositioned,
    computeMaybePositionedUnicode,
    maybeRecordStickyPosition,
}
