import {EMPTY_UNICODE} from "../symbols"
import {Clef, Width} from "../types"
import {Smarts} from "./types"

const INITIAL_SMARTS: Smarts = {
    advanceWidth: 0 as Width,
    staveWidth: 0 as Width,
    staveOn: false,
    position: EMPTY_UNICODE,
    clef: Clef.TREBLE,
}

export {
    INITIAL_SMARTS,
}
