import {BLANK, Io, isUndefined, SPACE} from "@sagittal/general"
import {computeCodewordFromCode} from "../../src/staff/codeword"
import {Code, Codeword, CODE_MAP, Symbol, Unicode} from "../../src/staff/symbols"

const CODE_MAP_ENTRIES = Object.entries(CODE_MAP) as Array<[unknown, Symbol]> as Array<[Code, Symbol]>

const undoMapFailMessage = (actualUnicodeSentence: Unicode, expectedUnicodeSentence: Unicode): Io => {
    const actualCodewords = undoMap(actualUnicodeSentence)
    const expectedCodewords = undoMap(expectedUnicodeSentence)

    return `expected "${actualCodewords.join(SPACE)}" to be "${expectedCodewords.join(SPACE)}"`
}

// TODO: UNDO MAP / UN-SMART CODES: might be nice if it could recognize sp13 as a single codeword, rather than sp12 sp1
//  I think those are the only ones which map to multiple... does that affect the unicodeLiteral module at all?
//  Which I simplified from where I took it online so that it assumed single chars?
//  Er, actually, how about instead of thinking of it like an undo map, it is telling you what manual codes you'd have
//  Had to have typed in a world without smarts (which you can't turn off)
//  - There's something confusing about the "Codewords: " comments in the spec,
//  Because I don't think you could just copy and paste *these*
//  Codewords in and see the expected thing. unless there was a way to turn all smart stuff off.
//  Basically this is like the "revised codewords" from what you input. or "enhanced".
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
    undoMap,
}
