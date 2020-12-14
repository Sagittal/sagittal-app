import {Io, isNumber, RecordKey} from "@sagittal/general"
import {computeArbitraryUnit} from "./arbitraryUnit"
import {
    BASS_COMBINING_STAFF_POSITION_MAP,
    Code,
    Codeword,
    CODE_MAP,
    TREBLE_COMBINING_STAFF_POSITION_MAP,
    Unit,
} from "./map"
import {Clef, Width} from "./types"

const BASS_CODE_MAP: Record<Code, Unit> = {...CODE_MAP, ...BASS_COMBINING_STAFF_POSITION_MAP} as Record<Code, Unit>
const TREBLE_CODE_MAP: Record<Code, Unit> = {...CODE_MAP, ...TREBLE_COMBINING_STAFF_POSITION_MAP} as Record<Code, Unit>

const LOWERCASE_CODES: Record<RecordKey<Codeword>, Code> = (Object.entries(Code) as Array<[Codeword, Code]>).reduce(
    (thingINeed: Record<Codeword, Code>, [codeword, code]: [Codeword, Code]): Record<Codeword, Code> => {
        if (!isNumber(code)) return thingINeed

        return ({
            [codeword.toLowerCase()]: code,
            ...thingINeed,
        })
    },
    {} as Record<Codeword, Unit>,
)

const computeUnit = (userInputWord: Io, clef: Clef = Clef.TREBLE): Unit => {
    const codeToUnitMap = clef === Clef.BASS ? BASS_CODE_MAP : TREBLE_CODE_MAP

    const code: Code = LOWERCASE_CODES[userInputWord as Codeword]
    const mappedUnit = codeToUnitMap[code]

    return mappedUnit || (
        userInputWord.match(/^u\+/) ?
            computeArbitraryUnit(userInputWord) :
            {
                unicode: userInputWord, // This is a fallback, if it's not a mapped code or in U+____ form
                width: 0 as Width,
            }
    )
}

export {
    computeUnit,
}
