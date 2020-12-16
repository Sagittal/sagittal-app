import {EMPTY_UNICODE} from "../symbols"
import {Width} from "../types"
import {TREBLE_CODE_MAP} from "./positionAndClef"
import {Smarts} from "./types"

const INITIAL_SMARTS: Smarts = {
    advanceWidth: 0 as Width,
    staveWidth: 0 as Width,
    staveOn: false,
    position: EMPTY_UNICODE,
    codeMap: TREBLE_CODE_MAP,
}

export {
    INITIAL_SMARTS,
}
