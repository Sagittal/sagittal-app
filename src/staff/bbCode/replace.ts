import {staffCodeToUnicode} from "../staffCodeToUnicode"
import {Clef} from "../types"

const replaceStaffCodeWithUnicodeBBCode = (staffSpan: Element): void => {
    const clef = staffSpan.classList[2] as Clef

    staffSpan.classList.remove("unprocessed")

    const clefInitiation = clef === "bass" ? "st24 bscf sp16 st24" :
        clef === "treble" ? "st24 tbcf sp16 st24" : ""

    staffSpan.textContent = staffCodeToUnicode(`${clefInitiation}${staffSpan.textContent}`)
}

export {
    replaceStaffCodeWithUnicodeBBCode,
}
