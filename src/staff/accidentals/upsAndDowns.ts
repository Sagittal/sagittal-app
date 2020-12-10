import {Code, Uni} from "../types"

// See: https://w3c.github.io/smufl/gitbook/tables/arrows-and-arrowheads.html

const up = "" as Uni   // U+EB88
const down = "" as Uni // U+EB8C

const UPS_AND_DOWNS_ACCIDENTALS: Partial<Record<Code, Uni>> = {
    [Code["^"]]: up,
    [Code["v"]]: down,
}

export {
    UPS_AND_DOWNS_ACCIDENTALS,
    up,
    down,
}
