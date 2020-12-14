import {Code, Symbol} from "./types"

const MANUAL_STAVE_MAP: Record<Code, Symbol> = {
    /*U+E020*/[Code["st8"]]: {unicode: "", width: 0},
    /*U+E014*/[Code["st16"]]: {unicode: "", width: 0},
    /*U+E01A*/[Code["st24"]]: {unicode: "", width: 0},
} as Record<Code, Symbol>

const SMART_STAVE_MAP: Record<Code, Symbol> = {
    /*U+E02F*/[Code["st"]]: {unicode: "", width: 0}, // TODO: I actually took the code he wanted for stave-off here
    // Insert staff off symbol here
} as Record<Code, Symbol>

export {
    MANUAL_STAVE_MAP,
    SMART_STAVE_MAP,
}
