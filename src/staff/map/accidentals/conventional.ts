import {W07, W09, W10, W13, W15} from "../constants"
import {Code, Uni, Unit} from "../types"

const h = "" as Uni                   // U+E261   natural
const n = h
const sharp = "" as Uni                // U+E262   sharp
const b = "" as Uni                   // U+E260   flat
const x = "" as Uni                   // U+E47D   double sharp
const bb = "" as Uni                  // U+E264   double flat
const smallDoubleSharp = "" as Uni    // U+E263   small double-sharp*

// * Not the same as "x" or "X", which is the (Sagittal-compatible) large double-sharp.

const CONVENTIONAL_ACCIDENTAL_MAP: Partial<Record<Code, Unit>> = {
    [Code["h"]]: {unicode: h, width: W07},
    [Code["n"]]: {unicode: n, width: W07},
    [Code["#"]]: {unicode: sharp, width: W10},
    [Code["b"]]: {unicode: b, width: W09},
    [Code["x"]]: {unicode: x, width: W13},
    [Code["bb"]]: {unicode: bb, width: W15},
    [Code["smallDoubleSharp"]]: {unicode: smallDoubleSharp, width: W10},
}

export {
    CONVENTIONAL_ACCIDENTAL_MAP,
    h,
    n,
    sharp,
    b,
    x,
    bb,
    smallDoubleSharp,
}
