import {BLANK, Io, isUndefined, SPACE} from "@sagittal/general"
import {computeCodewordFromCode} from "../../src/staff/codeword"
import {Code, Codeword, CODE_MAP, Unicode, Symbol} from "../../src/staff/symbols"

const CODE_MAP_ENTRIES = Object.entries(CODE_MAP) as Array<[unknown, Symbol]> as Array<[Code, Symbol]>

const undoMapFailMessage = (actualUnicodeSentence: Unicode, expectedUnicodeSentence: Unicode): Io => {
    const actualCodewords = undoMap(actualUnicodeSentence)
    const expectedCodewords = undoMap(expectedUnicodeSentence)

    return `expected "${actualCodewords.join(SPACE)}" to be "${expectedCodewords.join(SPACE)}"`
}

// TODO: IMPROVE: might be nice if it could recognize sp13 as a single codeword, rather than sp12 sp1
//  I think those are the only ones which map to multiple... does that affect the unicodeLiteral module at all?
//  Which I simplified from where I took it online so that it assumed single chars?
const undoMap = (unicodeSentence: Unicode): Codeword[] => {
    const unicodeWords = unicodeSentence.split(BLANK) as Unicode[]

    return unicodeWords.map((unicodeWord: Unicode): Codeword => {
        const codeEntry = CODE_MAP_ENTRIES.find((codeEntry: [Code, Symbol]): boolean => {
            const [_, symbol] = codeEntry
            const {unicode} = symbol

            return unicode === unicodeWord
        })

        if (isUndefined(codeEntry)) return "(unknown)" as Codeword

        const [code, _] = codeEntry

        return computeCodewordFromCode(code)
    })
}

export {
    undoMapFailMessage,
}
