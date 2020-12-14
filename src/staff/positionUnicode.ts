import {sumTexts} from "@sagittal/general"
import {staffState} from "./globals"
import {COMBINING_STAFF_POSITION_MAP, EMPTY_UNICODE, Uni, Unit} from "./map"

const canBePositioned = (unicodeWord: Uni): boolean => {
    return (unicodeWord >= "\uE022" && unicodeWord <= "\uE02F") // Leger lines
        || (unicodeWord >= "\uE050" && unicodeWord <= "\uE07F") // Clefs
        || (unicodeWord >= "\uE0A0" && unicodeWord <= "\uE21F") // Noteheads notes stems beams
        || (unicodeWord >= "\uE240" && unicodeWord <= "\uE4FF") // Flags accidentals articulation holds pauses rests
        || (unicodeWord >= "\uE900" && unicodeWord <= "\uEA1F") // Medieval & Renaissance
        || (unicodeWord >= "\uEC30" && unicodeWord <= "\uEC3F") // Kievan square notation
}

const COMBINING_STAFF_POSITION_UNICODES =
    Object.values(COMBINING_STAFF_POSITION_MAP).map(({unicode}: Unit): Uni => unicode)

const computeMaybePositionedUnicode = ({unicode}: Unit): Uni => {
    let output: Uni

    if (COMBINING_STAFF_POSITION_UNICODES.includes(unicode)) {
        staffState.position = unicode
        output = EMPTY_UNICODE
    } else if (canBePositioned(unicode)) {
        output = sumTexts(staffState.position, unicode)
    } else {
        output = unicode
    }

    return output
}

export {
    canBePositioned,
    computeMaybePositionedUnicode,
}
