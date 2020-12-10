import {Code, Uni} from "../types"

const h = "" as Uni                   // U+E261   natural
const n = h
const sharp = "" as Uni                // U+E262   sharp
const b = "" as Uni                   // U+E260   flat
const x = "" as Uni                   // U+E47D   double sharp
const bb = "" as Uni                  // U+E264   double flat
const smallDoubleSharp = "" as Uni    // U+E263   small double-sharp*

// * Not the same as "x" or "X", which is the (Sagittal-compatible) large double-sharp.

const CONVENTIONAL_ACCIDENTALS: Partial<Record<Code, Uni>> = {
    [Code.h]: h,
    [Code.n]: n,
    [Code["#"]]: sharp,
    [Code.b]: b,
    [Code.x]: x,
    [Code.bb]: bb,
    [Code.smallDoubleSharp]: smallDoubleSharp,
}

export {
    CONVENTIONAL_ACCIDENTALS,
    h,
    n,
    sharp,
    b,
    x,
    bb,
    smallDoubleSharp,
}
