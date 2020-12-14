import {isManualAdvanceUnicode, isSmartAdvanceUnicode} from "./advance"
import {isAutoStaffUnicode} from "./lines"
import {isCombiningStaffPositionUnicode} from "./position"
import {Unicode} from "./symbols"

const isSpecialUnicode = (unicodeWord: Unicode): boolean => {
    return isCombiningStaffPositionUnicode(unicodeWord)
        || isAutoStaffUnicode(unicodeWord)
        || isSmartAdvanceUnicode(unicodeWord)
        || isManualAdvanceUnicode(unicodeWord)
}

export {
    isSpecialUnicode,
}
