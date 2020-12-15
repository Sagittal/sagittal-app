import {Io, isNumber, isUndefined, RecordKey} from "@sagittal/general"
import {smarts} from "./smarts"
import {BASS_CSP_MAP, Code, Codeword, CODE_MAP, LowercaseCodeword, Symbol, TREBLE_CSP_MAP, Unicode} from "./symbols"
import {Clef, Width} from "./types"
import {isUnicodeLiteral} from "./utility"

const computeLowercaseCodewordFromInput = (inputWord: Io): LowercaseCodeword =>
    inputWord.toLowerCase() as LowercaseCodeword

const computeLowercaseCodewordFromCodeword = (codeword: Codeword): LowercaseCodeword =>
    codeword.toLowerCase() as LowercaseCodeword

const BASS_CODE_MAP: Record<Code, Symbol> =
    {...CODE_MAP, ...BASS_CSP_MAP} as Record<Code, Symbol>
const TREBLE_CODE_MAP: Record<Code, Symbol> =
    {...CODE_MAP, ...TREBLE_CSP_MAP} as Record<Code, Symbol>

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

const computeArbitrarySymbol = (inputWord: Io): Symbol =>
    ({
        unicode: String.fromCharCode(parseInt(inputWord.replace(/^u\+(.*)/, "0x$1"))) as Unicode,
        width: 0 as Width,
    })

const computeFallbackToInputAsFailedSymbol = (inputWord: Io): Symbol =>
    ({
        unicode: inputWord as Unicode,
        width: 0 as Width,
    })

const computeSymbol = (inputWord: Io): Symbol => {
    const lowercaseCodeword: LowercaseCodeword = computeLowercaseCodewordFromInput(inputWord)
    const code: Code = LOWERCASE_CODEWORD_TO_CODE_MAP[lowercaseCodeword]
    const codeMap = smarts.clef === Clef.BASS ? BASS_CODE_MAP : TREBLE_CODE_MAP
    const symbol = codeMap[code]

    if (!isUndefined(symbol)) return symbol

    if (isUnicodeLiteral(inputWord)) return computeArbitrarySymbol(inputWord)

    return computeFallbackToInputAsFailedSymbol(inputWord)
}

export {
    computeSymbol,
}
