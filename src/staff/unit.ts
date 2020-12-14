import {Io, isNumber, RecordKey} from "@sagittal/general"
import {computeArbitraryUnit} from "./arbitraryUnit"
import {computeLowercaseCodewordFromInput, computeLowercaseCodewordFromCodeword} from "./codeword"
import {
    BASS_COMBINING_STAFF_POSITION_MAP,
    Code,
    CODE_MAP,
    Codeword,
    LowercaseCodeword,
    TREBLE_COMBINING_STAFF_POSITION_MAP,
    Unit,
} from "./map"
import {Clef, Width} from "./types"

const BASS_CODE_MAP: Record<Code, Unit> = {...CODE_MAP, ...BASS_COMBINING_STAFF_POSITION_MAP} as Record<Code, Unit>
const TREBLE_CODE_MAP: Record<Code, Unit> = {...CODE_MAP, ...TREBLE_COMBINING_STAFF_POSITION_MAP} as Record<Code, Unit>

const LOWERCASE_CODEWORD_TO_CODE_MAP: Record<RecordKey<LowercaseCodeword>, Code> =
    (Object.entries(Code) as Array<[Codeword, Code]>).reduce(
        (
            codes: Record<LowercaseCodeword, Code>,
            [codeword, code]: [Codeword, Code],
        ): Record<LowercaseCodeword, Code> => {
            // Object.entries returns, for an enum, both its string keys to its numeric indices *and* vice versa!
            if (!isNumber(code)) return codes

            return ({
                [computeLowercaseCodewordFromCodeword(codeword)]: code,
                ...codes,
            })
        },
        {} as Record<LowercaseCodeword, Unit>,
    )

const computeUnit = (inputWord: Io, clef: Clef = Clef.TREBLE): Unit => {
    const lowercaseCodeword: LowercaseCodeword = computeLowercaseCodewordFromInput(inputWord)
    const code: Code = LOWERCASE_CODEWORD_TO_CODE_MAP[lowercaseCodeword]
    const codeToUnitMap = clef === Clef.BASS ? BASS_CODE_MAP : TREBLE_CODE_MAP
    const unit = codeToUnitMap[code]

    return unit || (
        inputWord.match(/^u\+/) ?
            computeArbitraryUnit(inputWord) :
            {
                unicode: inputWord, // This is a fallback, if it's not a mapped code or in U+____ form
                width: 0 as Width,
            }
    )
}

export {
    computeUnit,
}
