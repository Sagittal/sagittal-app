import {Io} from "@sagittal/general"
import {Code, Codeword, LowercaseCodeword} from "./map"

const computeLowercaseCodewordFromInput = (inputWord: Io): LowercaseCodeword => {
    return inputWord.toLowerCase() as LowercaseCodeword
}

const computeLowercaseCodewordFromCodeword = (codeword: Codeword): LowercaseCodeword => {
    return codeword.toLowerCase() as LowercaseCodeword
}

const computeLowercaseCodewordFromCode = (code: Code): LowercaseCodeword => {
    return computeCodewordFromCode(code).toLowerCase() as LowercaseCodeword
}

const computeCodewordFromCode = (code: Code): Codeword => {
    return Code[code] as Codeword
}

export {
    computeLowercaseCodewordFromInput,
    computeLowercaseCodewordFromCode,
    computeLowercaseCodewordFromCodeword,
    computeCodewordFromCode,
}
