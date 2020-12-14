import {Code, Symbol} from "./types"

const STAFF_LINE_MAP: Record<Code, Symbol> = {
    /*U+E020*/[Code["st8"]]: {unicode: "", width: 0},
    /*U+E014*/[Code["st16"]]: {unicode: "", width: 0},
    /*U+E01A*/[Code["st24"]]: {unicode: "", width: 0},
} as Record<Code, Symbol>

STAFF_LINE_MAP[Code["st"]] = STAFF_LINE_MAP[Code["st24"]]

export {
    STAFF_LINE_MAP,
}
