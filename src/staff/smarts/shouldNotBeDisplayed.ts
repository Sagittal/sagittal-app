import {Unicode} from "../symbols"
import {isManualAdvanceUnicode, isSmartAdvanceUnicode} from "./advance"
import {isPositionUnicode} from "./position"
import {isSmartStaveUnicode} from "./stave"

const shouldNotBeDisplayed = (unicodeWord: Unicode): boolean =>
    isPositionUnicode(unicodeWord)
    || isSmartStaveUnicode(unicodeWord)
    || isSmartAdvanceUnicode(unicodeWord)
    || isManualAdvanceUnicode(unicodeWord)

export {
    shouldNotBeDisplayed,
}
