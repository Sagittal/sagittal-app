import {isManualAdvanceUnicode, isSmartAdvanceUnicode} from "./advance"
import {isCspUnicode} from "./position"
import {isSmartStaveUnicode} from "./staves"
import {Unicode} from "./symbols"

const shouldNotBeDisplayed = (unicodeWord: Unicode): boolean => {
    return isCspUnicode(unicodeWord)
        || isSmartStaveUnicode(unicodeWord)
        || isSmartAdvanceUnicode(unicodeWord)
        || isManualAdvanceUnicode(unicodeWord)
}

export {
    shouldNotBeDisplayed,
}
