import {Io, max, sumTexts} from "@sagittal/general"
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
import {getUnicode} from "./getUnicode"
import {staffGlobals} from "./globals"
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
    ntdb, st, STAFF_LINES,
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


const applySmartSpace = (): Uni => {
    // console.log("is smsartstaff on?", staffGlobals.smartStaffOn)
    if (!staffGlobals.smartStaffOn) { // TODO: this could probably be simppiflied
        const spaceUnicode = computeSpaceUnicode(staffGlobals.smartSpace)
        staffGlobals.smartSpace = 0
        return spaceUnicode
    }

    // We've got enough staff ahead of us still to apply the advance and still be within it
    if (staffGlobals.smartStaff >= staffGlobals.smartSpace) {
        // console.log("ok have enough staff ahead of us", staffGlobals.smartStaff, "because we only need to apply this much space", staffGlobals.smartSpace)
        const spaceUnicode = computeSpaceUnicode(staffGlobals.smartSpace)

        staffGlobals.smartStaff = staffGlobals.smartStaff - staffGlobals.smartSpace
        staffGlobals.smartSpace = 0
        // console.log("there's now 0 space left, and ", staffGlobals.smartStaff, "staff left")

        return spaceUnicode
    } else {
        // console.log("ok we have", staffGlobals.smartStaff, "staff ahead of us still")
        // console.log("and this much space/advance we're going to apply now, which is more than that", staffGlobals.smartSpace)

        const useUpExistingStaffSpaceUnicode = computeSpaceUnicode(staffGlobals.smartStaff)

        const remainingSpaceWeNeedToApply = staffGlobals.smartSpace - staffGlobals.smartStaff
        // console.log("having used that up we have this much space left", remainingSpaceWeNeedToApply)
        const remainingStaffSpaceUnicode = computeSpaceUnicode(remainingSpaceWeNeedToApply)

        staffGlobals.smartStaff = 24 - remainingSpaceWeNeedToApply
        staffGlobals.smartSpace = 0

        return sumTexts(useUpExistingStaffSpaceUnicode, st, remainingStaffSpaceUnicode)
    }
}

const getSpaceForUnicode = (unicode: Uni): number => {
    if ([...Object.values(CLEFS)].includes(unicode)) return 23
    else if ([ntdb].includes(unicode)) return 22
    // 21
    else if ([nt8, nt16].includes(unicode)) return 20
        // 19
        // 18
    // 17
    else if ([tm0, tm1, tm2, tm3, tm4, tm5, tm6, tm7, tm8, tm9, tmcm].includes(unicode)) return 16
    // 15
    else if ([bb].includes(unicode)) return 14
    else if ([_35LUp, _35LDown].includes(unicode)) return 13
    else if ([lgln, nt1, nt2, nt4, nt2dn, nt4dn, nt8dn, nt16dn, x, _11LUp, _11LDown, _11MUp, _11MDown].includes(unicode)) return 12
    // 11
    else if ([_35MUp, _35MDown].includes(unicode)) return 10
    else if ([sharp, smallDoubleSharp, _25SUp, _25SDown].includes(unicode)) return 9
    else if ([b].includes(unicode)) return 8
    // 7
    else if ([n, _5v7kUp, _5v7kDown, _5CUp, _5CDown, _7CUp, _7CDown].includes(unicode)) return 6
    else if ([agdt].includes(unicode)) return 5
        // 4
        // 3
        // 2
    // 1
    else if ([tmnm, tmdn, ...COMBINING_STAFF_POSITIONS, ...Object.values(STAFF_LINES)]) return 0

    return 11
}

const recordSpace = (unicode: Uni): void => {
    staffGlobals.smartSpace = max(staffGlobals.smartSpace, getSpaceForUnicode(unicode))
}

const recordStaff = (userInput: Io): void => {
    // console.log("we are recordin' some smart staff so we are turning it ON")
    staffGlobals.smartStaffOn = true
    if (userInput === Code["st"]) staffGlobals.smartStaff = staffGlobals.smartStaff + 24
    if (userInput === Code["st8"]) staffGlobals.smartStaff = staffGlobals.smartStaff + 8
    if (userInput === Code["st16"]) staffGlobals.smartStaff = staffGlobals.smartStaff + 16
    if (userInput === Code["st24"]) staffGlobals.smartStaff = staffGlobals.smartStaff + 24
}

const staffCodeToUnicode = (staffCode: Io): Uni => {
    // TODO: just reset. and this should be test covered, integration test?
    staffGlobals.smartStaffOn = false
    staffGlobals.smartStaff = 0
    staffGlobals.smartSpace = 0

    let staffPosition = "" as Uni // TODO: blank uni constant

    return `${staffCode.toLowerCase()} sp`
    // return staffCode.toLowerCase()
        .replace(/<br>/g, " ")
        .replace(/\n/g, " ")
        .replace(/\t/g, " ")
        .split(" ")
        .map((userInput: Io): Uni => {
            if (userInput === "sp") {
                return applySmartSpace()
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
