import {sumTexts} from "@sagittal/general"
import {staffState} from "./globals"
import {COMBINING_STAFF_POSITION_MAP, EMPTY_UNICODE, Uni, Unit} from "./map"

const canBePositioned = (unicode: Uni): boolean => {
    return (unicode >= "\uE022" && unicode <= "\uE02F") // Leger lines
        || (unicode >= "\uE050" && unicode <= "\uE07F") // Clefs
        || (unicode >= "\uE0A0" && unicode <= "\uE21F") // Noteheads, notes, beamed groups, stems
        || (unicode >= "\uE240" && unicode <= "\uE4FF") // Flags, accidentals, articulation, holds and pauses, rests
        || (unicode >= "\uE900" && unicode <= "\uEA1F") // Medieval and Renaissance
        || (unicode >= "\uEC30" && unicode <= "\uEC3F") // Kievan square notation
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
