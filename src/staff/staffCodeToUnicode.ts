import {Io} from "@sagittal/general"
import {getUnicode} from "./getUnicode"
import {Clef, Uni} from "./types"
import {unicodeFromCode} from "./unicodeFromCode"

const staffCodeToUnicode = (staffCode: Io): Uni => {
    return staffCode.toLowerCase()
        .replace(/<br>/g, " ")
        .replace(/\n/g, " ")
        .replace(/\t/g, " ")
        .split(" ")
        .map((userInput: Io): Uni => {
            const unicode = getUnicode(userInput, Clef.TREBLE)

            return unicode === undefined ?
                userInput.match(/^u\+/) ?
                    unicodeFromCode(userInput) :
                    userInput as Uni :
                unicode
        })
        .join("") as Uni
}

export {
    staffCodeToUnicode,
}
