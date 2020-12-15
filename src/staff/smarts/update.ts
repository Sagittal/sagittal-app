import {Symbol} from "../symbols"
import {updateSmartAdvance} from "./advance"
import {updateSmartClef} from "./clef"
import {updateSmartPosition} from "./position"
import {updateSmartStave} from "./stave"

const updateSmarts = (symbol: Symbol): void => {
    updateSmartStave(symbol)
    updateSmartAdvance(symbol)
    updateSmartClef(symbol)
    updateSmartPosition(symbol)
}

export {
    updateSmarts,
}
