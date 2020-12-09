import {staffCodeInput} from "./staffCodeInput"
import {staffCodeToUnicode} from "./staffCodeToUnicode"
import {staffDiv} from "./staffDiv"
import {updateSvg} from "./svgText"

const replaceStaffCodeWithUnicodeApp = (): void => {
    const unicode = staffCodeToUnicode(staffCodeInput.value)
    staffDiv.textContent = unicode
    updateSvg(unicode)
}

export {
    replaceStaffCodeWithUnicodeApp,
}
