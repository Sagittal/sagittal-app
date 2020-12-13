import {Code, Uni, Unit} from "../types"

// See: https://w3c.github.io/smufl/gitbook/tables/arrows-and-arrowheads.html

const UPS_AND_DOWNS_ACCIDENTAL_MAP: Record<Code, Unit> = {
    /*U+EB88*/[Code["^"]]: {unicode: "" as Uni},
    /*U+EB8C*/[Code["v"]]: {unicode: "" as Uni},
} as Record<Code, Unit>

export {
    UPS_AND_DOWNS_ACCIDENTAL_MAP,
}
