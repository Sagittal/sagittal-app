import {BLANK, Io, isUndefined, SPACE} from "@sagittal/general"
import {Code, Codeword, CODE_MAP, Uni, Unit} from "../../src/staff/map"

const CODE_MAP_ENTRIES = Object.entries(CODE_MAP) as Array<[unknown, Unit]> as Array<[Code, Unit]>

// TODO: CLEAN: use unicodeSentence and unicodeWord here and there
const undoMapFailMessage = (actualUnicodeSentence: Uni, expectedUnicodeSentence: Uni): Io => {
    const actualCodewords = undoMap(actualUnicodeSentence)
    const expectedCodewords = undoMap(expectedUnicodeSentence)

    return `expected "${actualCodewords.join(SPACE)}" to be "${expectedCodewords.join(SPACE)}"`
}

// TODO: IMPROVE: might be nice if it could recognize sp13 as a single codeword, rather than sp12 sp1
//  I think those are the only ones which map to multiple... does that affect the unicodeLiteral module at all?
//  Which I simplified from where I took it online so that it assumed single chars?
const undoMap = (unicodeSentence: Uni): Codeword[] => {
    const unicodeWords = unicodeSentence.split(BLANK) as Uni[]

    return unicodeWords.map((unicodeWord: Uni): Codeword => {
        const codeEntry = CODE_MAP_ENTRIES.find((codeEntry: [Code, Unit]): boolean => {
            const [_, unit] = codeEntry
            const {unicode} = unit

            return unicode === unicodeWord
        })

        if (isUndefined(codeEntry)) return "(unknown)" as Codeword

        const [code, _] = codeEntry

        return Code[code] as Codeword
    })
}

export {
    undoMapFailMessage,
}
