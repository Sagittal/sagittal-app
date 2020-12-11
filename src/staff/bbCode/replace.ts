import {BASS_CLEF_INITIATION, TREBLE_CLEF_INITIATION} from "../constants"
import {staffCodeToUnicode} from "../staffCodeToUnicode"
import {Clef} from "../types"

const replaceStaffCodeWithUnicodeBBCode = (staffDiv: Element): void => {
    const clef = staffDiv.classList[2] as Clef

    staffDiv.classList.remove("unprocessed")

    // TODO: support the clef initiation feature on the web
    // TODO: test cover that this doesn't default to treble
    const clefInitiation = clef === Clef.BASS ? BASS_CLEF_INITIATION : clef === Clef.TREBLE ? TREBLE_CLEF_INITIATION : ""

    staffDiv.textContent = staffCodeToUnicode(`${clefInitiation}${staffDiv.textContent}`)
}

export {
    replaceStaffCodeWithUnicodeBBCode,
}
