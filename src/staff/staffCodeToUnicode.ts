import {Io} from "@sagittal/general"
import {ACCIDENTALS} from "./accidentals"
import {COMBINING_STAFF_POSITIONS} from "./combiningStaffPositions"
import {getUnicode} from "./getUnicode"
import {Clef, Code, Uni} from "./types"
import {unicodeFromCode} from "./unicodeFromCode"
import {BEAMED_GROUPS_OF_NOTES, CLEFS, lgln, NOTES} from "./unicodeMap"

const canBePositioned = (unicode: Uni): boolean =>
    Object.values(ACCIDENTALS).includes(unicode)
    || Object.values(NOTES).includes(unicode)
    || Object.values(BEAMED_GROUPS_OF_NOTES).includes(unicode)
    || Object.values(CLEFS).includes(unicode)
    || unicode === lgln

// TODO: it would be better if we went by the unicode range, to support arbitrary unicode input
//  I think that would involve every unicode map object also containing the unicode codepoint in addition to the unicode
//  Or perhaps... instead... sigh... so we can just see it, rather than in a comment, and everything passes through that
//  Helper method to convert to the actual unicode symbol from its codepoint.
//  That is, assuming the \u form of it can also be looked at and compared to a range
// tslint:disable:max-line-length
/*
\uE022 to \uE02F // leger lines
\uE050 to \uE07F // clefs
\uE0A0 to \uE21F // noteheads, notes, beamed groups, stems
\uE240 to \uE4FF // flags, accidentals, articulation, holds and pauses, rests
\uE900 to \uEA1F // Medieval and Renaissance: clefs, prolations, noteheads and stems, notes, oblique forms, plainchant single/multi/articulations, accidentals, rests, miscellany.
\uEC30 to \uEC3F // Kievan square notation
 */

const staffCodeToUnicode = (staffCode: Io): Uni => {
    let staffPosition = ""

    return staffCode.toLowerCase()
        .replace(/<br>/g, " ")
        .replace(/\n/g, " ")
        .replace(/\t/g, " ")
        .split(" ")
        .map((userInput: Io): Uni => {
            let unicode = getUnicode(userInput as Code, Clef.TREBLE)

            unicode = unicode === undefined ?
                userInput.match(/^u\+/) ?
                    // TODO: name change to indicate arbitrary rather than known
                    unicodeFromCode(userInput) :
                    userInput as Uni :
                unicode

            if (COMBINING_STAFF_POSITIONS.includes(unicode)) {
                staffPosition = unicode
                unicode = "" as Uni
            } else if (canBePositioned(unicode)) {
                unicode = staffPosition + unicode as Uni
            }

            return unicode
        })
        .join("") as Uni
}

export {
    staffCodeToUnicode,
}
