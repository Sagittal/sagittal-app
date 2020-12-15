import {BLANK, Io, SPACE} from "@sagittal/general"
import {computeCodewordFromUnicode} from "../../src/staff/codeword"
import {Codeword, Unicode} from "../../src/staff/symbols"

const codewordFailMessage = (actualUnicodeSentence: Unicode, expectedUnicodeSentence: Unicode): Io => {
    const actualCodewords = computeCodewordsFromUnicode(actualUnicodeSentence)
    const expectedCodewords = computeCodewordsFromUnicode(expectedUnicodeSentence)

    return `expected "${actualCodewords.join(SPACE)}" to be "${expectedCodewords.join(SPACE)}"`
}

const computeCodewordsFromUnicode = (unicodeSentence: Unicode): Codeword[] => {
    const unicodeWords = unicodeSentence.split(BLANK) as Unicode[]

    return unicodeWords.map(computeCodewordFromUnicode)
}

export {
    codewordFailMessage,
    computeCodewordsFromUnicode,
}
