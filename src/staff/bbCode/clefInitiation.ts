import {BASS_CLEF_INITIATION, TREBLE_CLEF_INITIATION} from "../constants"
import {Clef} from "../types"
import {computeUserInputUnicode} from "../userInputUnicode"

const computeUserInputUnicodeBBCode = (textContent: string | null, {clef}: {clef?: Clef} = {}): string => {
    const clefInitiation = clef === Clef.BASS ? BASS_CLEF_INITIATION : clef === Clef.TREBLE ? TREBLE_CLEF_INITIATION : ""

    return computeUserInputUnicode(`${clefInitiation}${textContent}`)
}

export {
    computeUserInputUnicodeBBCode,
}
