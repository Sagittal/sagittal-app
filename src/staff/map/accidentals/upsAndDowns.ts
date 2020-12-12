import {Code, Uni, Unit} from "../types"

// See: https://w3c.github.io/smufl/gitbook/tables/arrows-and-arrowheads.html

const up = "" as Uni   // U+EB88
const down = "" as Uni // U+EB8C

const UPS_AND_DOWNS_ACCIDENTAL_MAP: Partial<Record<Code, Unit>> = {
    [Code["^"]]: {unicode: up},
    [Code["v"]]: {unicode: down},
}

export {
    UPS_AND_DOWNS_ACCIDENTAL_MAP,
    up,
    down,
}
