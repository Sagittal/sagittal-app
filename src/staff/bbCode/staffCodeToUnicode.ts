import {BASS_CLEF_INITIATION, TREBLE_CLEF_INITIATION} from "../constants"
import {staffCodeToUnicode} from "../staffCodeToUnicode"
import {Clef} from "../types"

const staffCodeToUnicodeBBCode = (textContent: string | null, {clef}: {clef?: Clef} = {}): string => {
    const clefInitiation = clef === Clef.BASS ? BASS_CLEF_INITIATION : clef === Clef.TREBLE ? TREBLE_CLEF_INITIATION : ""

    return staffCodeToUnicode(`${clefInitiation}${textContent}`)
}

export {
    staffCodeToUnicodeBBCode,
}
