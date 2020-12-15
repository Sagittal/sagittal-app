import {Unicode} from "../symbols"
import {isManualAdvanceUnicode, isSmartAdvanceUnicode} from "./advance"
import {isCspUnicode} from "./position"
import {isSmartStaveUnicode} from "./staves"

const shouldNotBeDisplayed = (unicodeWord: Unicode): boolean =>
    isCspUnicode(unicodeWord)
    || isSmartStaveUnicode(unicodeWord)
    || isSmartAdvanceUnicode(unicodeWord)
    || isManualAdvanceUnicode(unicodeWord)

export {
    shouldNotBeDisplayed,
}
