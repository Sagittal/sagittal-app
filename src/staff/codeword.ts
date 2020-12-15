import {Io, isUndefined} from "@sagittal/general"
import {Code, Codeword, CODE_MAP, LowercaseCodeword, Symbol, Unicode} from "./symbols"

const CODE_MAP_ENTRIES = Object.entries(CODE_MAP) as Array<[unknown, Symbol]> as Array<[Code, Symbol]>

const computeLowercaseCodewordFromInput = (inputWord: Io): LowercaseCodeword =>
    inputWord.toLowerCase() as LowercaseCodeword

const computeLowercaseCodewordFromCodeword = (codeword: Codeword): LowercaseCodeword =>
    codeword.toLowerCase() as LowercaseCodeword

const computeCodewordFromCode = (code: Code): Codeword =>
    Code[code] as Codeword

const computeCodewordFromUnicode = (unicodeWord: Unicode): Codeword => {
    const codeEntry = CODE_MAP_ENTRIES.find((codeEntry: [Code, Symbol]): boolean => {
        const [_, symbol] = codeEntry
        const {unicode} = symbol

        return unicode === unicodeWord
    })

    if (isUndefined(codeEntry)) return "(unknown)" as Codeword

    const [code, _] = codeEntry

    return computeCodewordFromCode(code)
}

export {
    computeLowercaseCodewordFromInput,
    computeLowercaseCodewordFromCodeword,
    computeCodewordFromCode,
    computeCodewordFromUnicode,
}
