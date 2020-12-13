import {Code, Unit} from "./types"

const STAFF_LINE_MAP: Record<Code, Unit> = {
    /*U+E020*/[Code["st8"]]: {unicode: "", width: 0},
    /*U+E014*/[Code["st16"]]: {unicode: "", width: 0},
    /*U+E01A*/[Code["st24"]]: {unicode: "", width: 0},
} as Record<Code, Unit>

STAFF_LINE_MAP[Code["st"]] = STAFF_LINE_MAP[Code["st24"]]

export {
    STAFF_LINE_MAP,
}
