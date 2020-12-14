import {Io} from "@sagittal/general"
import {Code, Codeword, LowercaseCodeword, Symbol} from "./symbols"

const computeLowercaseCodewordFromInput = (inputWord: Io): LowercaseCodeword =>
    inputWord.toLowerCase() as LowercaseCodeword

const computeLowercaseCodewordFromCodeword = (codeword: Codeword): LowercaseCodeword =>
    codeword.toLowerCase() as LowercaseCodeword

const computeLowercaseCodewordFromCode = (code: Code): LowercaseCodeword =>
    computeCodewordFromCode(code).toLowerCase() as LowercaseCodeword

const computeCodewordFromCode = (code: Code): Codeword =>
    Code[code] as Codeword

const computeMapLowercaseCodewords = (map: Record<Code, Symbol>): LowercaseCodeword[] =>
    (Object.keys(map) as unknown[] as Code[])
        .map(computeLowercaseCodewordFromCode)

export {
    computeLowercaseCodewordFromInput,
    computeLowercaseCodewordFromCode,
    computeLowercaseCodewordFromCodeword,
    computeCodewordFromCode,
    computeMapLowercaseCodewords,
}
