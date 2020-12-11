import {Io, max, setAllPropertiesOfObjectOnAnother, sumTexts} from "@sagittal/general"
import {ACCIDENTALS} from "./accidentals"
// TODO: clean these up
// tslint:disable-next-line:no-reaching-imports
import {b, bb, n, sharp, smallDoubleSharp, x} from "./accidentals/conventional"
import {
    _11LDown,
    _11LUp,
    _11MDown,
    _11MUp,
    _25SDown,
    _25SUp,
    _35LDown,
    _35LUp,
    _35MDown,
    _35MUp,
    _5CDown,
    _5CUp,
    _5v7kDown,
    _5v7kUp,
    _7CDown,
    _7CUp,
    // tslint:disable-next-line:no-reaching-imports
} from "./accidentals/sagittal"
import {COMBINING_STAFF_POSITIONS} from "./combiningStaffPositions"
import {INITIAL_STAFF_STATE} from "./constants"
import {getUnicode} from "./getUnicode"
import {staffState} from "./globals"
import {computeSpaceUnicode} from "./space"
import {Clef, Code, Uni} from "./types"
import {
    agdt,
    BEAMED_GROUPS_OF_NOTES,
    CLEFS,
    lgln,
    NOTES,
    nt1,
    nt16,
    nt16dn,
    nt2,
    nt2dn,
    nt4,
    nt4dn,
    nt8,
    nt8dn,
    ntdb,
    st,
    STAFF_LINES,
    tm0,
    tm1,
    tm2,
    tm3,
    tm4,
    tm5,
    tm6,
    tm7,
    tm8,
    tm9,
    tmcm,
    tmdn,
    tmnm,
} from "./unicodeMap"

// TODO: obviously break this huge file down a lot

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
//  Actually I don't think it'll be that bad,
//  You can just take the existing unicode and say > \uE022 and < \uEF88 or whatever
// tslint:disable:max-line-length
/*
\uE022 to \uE02F // leger lines
\uE050 to \uE07F // clefs
\uE0A0 to \uE21F // noteheads, notes, beamed groups, stems
\uE240 to \uE4FF // flags, accidentals, articulation, holds and pauses, rests
\uE900 to \uEA1F // Medieval and Renaissance: clefs, prolations, noteheads and stems, notes, oblique forms, plainchant single/multi/articulations, accidentals, rests, miscellany.
\uEC30 to \uEC3F // Kievan square notation
 */

// TODO: maybe Auto Staff opt-out, rather than opt-in.
// TODO: and related, do not take clef as a bbCode argument
//  See forum post after this one: http://forum.sagittal.org/viewtopic.php?p=3095#p3095
const applySmartSpace = (space: number): Uni => {
    if (!staffState.smartStaffOn) { // TODO: this could probably be simplified
        const spaceUnicode = computeSpaceUnicode(staffState.smartSpace)
        staffState.smartSpace = 0
        return spaceUnicode
    }

    // We've got enough staff ahead of us still to apply the advance and still be within it
    if (staffState.smartStaff >= space) {
        const spaceUnicode = computeSpaceUnicode(space)

        staffState.smartStaff = staffState.smartStaff - space
        staffState.smartSpace = 0

        return spaceUnicode
    } else {
        const useUpExistingStaffSpaceUnicode = computeSpaceUnicode(staffState.smartStaff)
        const remainingSpaceWeNeedToApply = space - staffState.smartStaff
        const remainingStaffSpaceUnicode = computeSpaceUnicode(remainingSpaceWeNeedToApply)

        staffState.smartStaff = 24 - remainingSpaceWeNeedToApply
        staffState.smartSpace = 0

        return sumTexts(useUpExistingStaffSpaceUnicode, st, remainingStaffSpaceUnicode)
    }
}

// TODO: may well need to just include these on each key, or make it optional `code: {char: '', width?: 13}` like that
const getSpaceForUnicode = (unicode: Uni): number => {
    if ([...Object.values(CLEFS)].includes(unicode)) return 24
    else if ([ntdb].includes(unicode)) return 23
        // 22
    else if ([nt8, nt16].includes(unicode)) return 21
        // 20
        // 19
        // 18
    else if ([tm0, tm1, tm2, tm3, tm4, tm5, tm6, tm7, tm8, tm9, tmcm].includes(unicode)) return 17
    // 16
    else if ([bb].includes(unicode)) return 15
    else if ([_35LUp, _35LDown].includes(unicode)) return 14
    else if ([lgln, nt1, nt2, nt4, nt2dn, nt4dn, nt8dn, nt16dn, x, _11LUp, _11LDown, _11MUp, _11MDown].includes(unicode)) return 13
    // 12
    else if ([_35MUp, _35MDown].includes(unicode)) return 11
    else if ([sharp, smallDoubleSharp, _25SUp, _25SDown].includes(unicode)) return 10
    else if ([b].includes(unicode)) return 9
    // 8
    else if ([n, _5v7kUp, _5v7kDown, _5CUp, _5CDown, _7CUp, _7CDown].includes(unicode)) return 7
    else if ([agdt].includes(unicode)) return 6
        // 5
        // 4
        // 3
        // 2
    // 1
    else if ([tmnm, tmdn, ...COMBINING_STAFF_POSITIONS, ...Object.values(STAFF_LINES)]) return 0

    return 11
}

const recordSpace = (unicode: Uni): void => {
    staffState.smartSpace = max(staffState.smartSpace, getSpaceForUnicode(unicode))
}

const recordStaff = (userInput: Io): void => {
    staffState.smartStaffOn = true
    if (userInput === Code["st"]) staffState.smartStaff = staffState.smartStaff + 24
    if (userInput === Code["st8"]) staffState.smartStaff = staffState.smartStaff + 8
    if (userInput === Code["st16"]) staffState.smartStaff = staffState.smartStaff + 16
    if (userInput === Code["st24"]) staffState.smartStaff = staffState.smartStaff + 24
}

const staffCodeToUnicode = (staffCode: Io): Uni => {
    setAllPropertiesOfObjectOnAnother({objectToChange: staffState, objectWithProperties: INITIAL_STAFF_STATE})

    let staffPosition = "" as Uni // TODO: blank uni constant

    return `${staffCode.toLowerCase()} sp`
        .replace(/<br>/g, " ")
        .replace(/\n/g, " ")
        .replace(/\t/g, " ")
        .split(" ")
        .map((userInput: Io): Uni => {
            if (["sp", "ad", ";"].includes(userInput)) {
                // TODO: rename most "space" stuff to "advance"
                return applySmartSpace(staffState.smartSpace)
            } else if (userInput.match("sp") && staffState.smartStaffOn) {
                const amount = parseInt(userInput.replace("sp", ""))
                return applySmartSpace(amount)
            }

            if (["st", "st8", "st16", "st24"].includes(userInput)) {
                recordStaff(userInput)
            }

            let unicode = getUnicode(userInput as Code, Clef.TREBLE)

            let output

            if (COMBINING_STAFF_POSITIONS.includes(unicode)) {
                staffPosition = unicode
                output = "" as Uni
            } else if (canBePositioned(unicode)) {
                output = sumTexts(staffPosition, unicode)
            } else {
                output = unicode
            }

            recordSpace(unicode)

            return output
        })
        .join("") as Uni
}

export {
    staffCodeToUnicode,
}
