import {Io} from "@sagittal/general"
import {ACCIDENTALS} from "./accidentals"
import {COMBINING_STAFF_POSITIONS} from "./combiningStaffPositions"
import {getUnicode} from "./getUnicode"
import {Clef, Code, Uni} from "./types"
import {unicodeFromCode} from "./unicodeFromCode"
import {NOTES} from "./unicodeMap"

const canBePositioned = (unicode: Uni): boolean =>
    Object.values(ACCIDENTALS).includes(unicode)
    || Object.values(NOTES).includes(unicode)

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
