import {Io} from "@sagittal/general"
import {Code, Codeword, LowercaseCodeword} from "./symbols"

const computeLowercaseCodewordFromInput = (inputWord: Io): LowercaseCodeword =>
    inputWord.toLowerCase() as LowercaseCodeword

const computeLowercaseCodewordFromCodeword = (codeword: Codeword): LowercaseCodeword =>
    codeword.toLowerCase() as LowercaseCodeword

const computeCodewordFromCode = (code: Code): Codeword =>
    Code[code] as Codeword

export {
    computeLowercaseCodewordFromInput,
    computeLowercaseCodewordFromCodeword,
    computeCodewordFromCode,
}
