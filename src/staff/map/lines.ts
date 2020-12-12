import {W00} from "./constants"
import {Code, Uni, Unit} from "./types"

const st8 = "" as Uni      // U+E020
const st16 = "" as Uni     // U+E014
const st24 = "" as Uni     // U+E01A
const st = st24
const STAFF_LINE_MAP: Partial<Record<Code, Unit>> = {
    [Code["st8"]]: {unicode: st8, width: W00},
    [Code["st16"]]: {unicode: st16, width: W00},
    [Code["st24"]]: {unicode: st24, width: W00},
    [Code["st"]]: {unicode: st, width: W00},
}

const STAFF_LINES_UNICODES: Uni[] = [
    st8,
    st16,
    st24,
]

export {
    STAFF_LINE_MAP,
    STAFF_LINES_UNICODES,
    st8,
    st16,
    st24,
    st,
}
