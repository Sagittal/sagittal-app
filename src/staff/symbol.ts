import {Io, isNumber, isUndefined, RecordKey} from "@sagittal/general"
import {computeArbitrarySymbol} from "./arbitrarySymbol"
import {computeLowercaseCodewordFromCodeword, computeLowercaseCodewordFromInput} from "./codeword"
import {
    BASS_COMBINING_STAFF_POSITION_MAP,
    Code,
    Codeword,
    CODE_MAP,
    LowercaseCodeword,
    Symbol,
    TREBLE_COMBINING_STAFF_POSITION_MAP,
    Unicode,
} from "./symbols"
import {Clef, Width} from "./types"
import {isUnicodeLiteral} from "./unicodeLiteral"

const BASS_CODE_MAP: Record<Code, Symbol> =
    {...CODE_MAP, ...BASS_COMBINING_STAFF_POSITION_MAP} as Record<Code, Symbol>
const TREBLE_CODE_MAP: Record<Code, Symbol> =
    {...CODE_MAP, ...TREBLE_COMBINING_STAFF_POSITION_MAP} as Record<Code, Symbol>

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
        {} as Record<LowercaseCodeword, Symbol>,
    )

const computeSymbol = (inputWord: Io, clef: Clef = Clef.TREBLE): Symbol => {
    const lowercaseCodeword: LowercaseCodeword = computeLowercaseCodewordFromInput(inputWord)
    const code: Code = LOWERCASE_CODEWORD_TO_CODE_MAP[lowercaseCodeword]
    const codeMap = clef === Clef.BASS ? BASS_CODE_MAP : TREBLE_CODE_MAP
    const symbol = codeMap[code]

    if (!isUndefined(symbol)) return symbol

    if (isUnicodeLiteral(inputWord)) return computeArbitrarySymbol(inputWord)

    return {
        unicode: inputWord as Unicode, // This is a fallback, if it's not a mapped code or in U+____ form
        width: 0 as Width,
    }

}

export {
    computeSymbol,
}
