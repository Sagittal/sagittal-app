import {Code, Uni} from "./types"

const st8 = "" as Uni      // U+E020
const st16 = "" as Uni     // U+E014
const st24 = "" as Uni     // U+E01A
const st = st24
const STAFF_LINES: Partial<Record<Code, Uni>> = {
    [Code["st8"]]: st8,
    [Code["st16"]]: st16,
    [Code["st24"]]: st24,
    [Code["st"]]: st,
}

export {
    STAFF_LINES,
    st8,
    st16,
    st24,
    st,
}
