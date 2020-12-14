import {Unicode, Width} from "../symbols"
import {Clef} from "../types"

interface Smarts {
    advanceWidth: Width,
    staveWidth: Width,
    staveOn: boolean,
    position: Unicode,
    clef: Clef,
}

export {
    Smarts,
}
