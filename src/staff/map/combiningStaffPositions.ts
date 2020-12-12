import {EMPTY_UNICODE, W00} from "./constants"
import {Code, Uni, Unit} from "./types"

const staffPosRaise8 = "" as Uni  // U+EB97
const staffPosRaise7 = "" as Uni  // U+EB96
const staffPosRaise6 = "" as Uni  // U+EB95
const staffPosRaise5 = "" as Uni  // U+EB94
const staffPosRaise4 = "" as Uni  // U+EB93
const staffPosRaise3 = "" as Uni  // U+EB92
const staffPosRaise2 = "" as Uni  // U+EB91
const staffPosRaise1 = "" as Uni  // U+EB90
const staffPosCenter = EMPTY_UNICODE
const staffPosLower1 = "" as Uni  // U+EB98
const staffPosLower2 = "" as Uni  // U+EB99
const staffPosLower3 = "" as Uni  // U+EB9A
const staffPosLower4 = "" as Uni  // U+EB9B
const staffPosLower5 = "" as Uni  // U+EB9C
const staffPosLower6 = "" as Uni  // U+EB9D
const staffPosLower7 = "" as Uni  // U+EB9E
const staffPosLower8 = "" as Uni  // U+EB9F

const trc6 = staffPosRaise8
const trb5 = staffPosRaise7
const tra5 = staffPosRaise6
const trg5 = staffPosRaise5
const trf5 = staffPosRaise4
const tre5 = staffPosRaise3
const trd5 = staffPosRaise2
const trc5 = staffPosRaise1
const trb4 = staffPosCenter
const tra4 = staffPosLower1
const trg4 = staffPosLower2
const trf4 = staffPosLower3
const tre4 = staffPosLower4
const trd4 = staffPosLower5
const trc4 = staffPosLower6
const trb3 = staffPosLower7
const tra3 = staffPosLower8

const bse4 = staffPosRaise8
const bsd4 = staffPosRaise7
const bsc4 = staffPosRaise6
const bsb3 = staffPosRaise5
const bsa3 = staffPosRaise4
const bsg3 = staffPosRaise3
const bsf3 = staffPosRaise2
const bse3 = staffPosRaise1
const bsd3 = staffPosCenter
const bsc3 = staffPosLower1
const bsb2 = staffPosLower2
const bsa2 = staffPosLower3
const bsg2 = staffPosLower4
const bsf2 = staffPosLower5
const bse2 = staffPosLower6
const bsd2 = staffPosLower7
const bsc2 = staffPosLower8

const c6 = trc6
const b5 = trb5
const a5 = tra5
const g5 = trg5
const f5 = trf5
const e5 = tre5
const d5 = trd5
const c5 = trc5
const b4 = trb4
const a4 = tra4
const g4 = trg4
const f4 = trf4
const e4 = tre4
const d4 = trd4
const c4 = trc4
const b3 = trb3
const a3 = tra3

const TREBLE_COMBINING_STAFF_POSITION_MAP: Partial<Record<Code, Unit>> = {
    [Code["c6"]]: {unicode: trc6, width: W00},
    [Code["b5"]]: {unicode: trb5, width: W00},
    [Code["a5"]]: {unicode: tra5, width: W00},
    [Code["g5"]]: {unicode: trg5, width: W00},
    [Code["f5"]]: {unicode: trf5, width: W00},
    [Code["e5"]]: {unicode: tre5, width: W00},
    [Code["d5"]]: {unicode: trd5, width: W00},
    [Code["c5"]]: {unicode: trc5, width: W00},
    [Code["b4"]]: {unicode: trb4, width: W00},
    [Code["a4"]]: {unicode: tra4, width: W00},
    [Code["g4"]]: {unicode: trg4, width: W00},
    [Code["f4"]]: {unicode: trf4, width: W00},
    [Code["e4"]]: {unicode: tre4, width: W00},
    [Code["d4"]]: {unicode: trd4, width: W00},
    [Code["c4"]]: {unicode: trc4, width: W00},
    [Code["b3"]]: {unicode: trb3, width: W00},
    [Code["a3"]]: {unicode: tra3, width: W00},
}

const BASS_COMBINING_STAFF_POSITION_MAP = {
    [Code["e4"]]: {unicode: bse4, width: W00},
    [Code["d4"]]: {unicode: bsd4, width: W00},
    [Code["c4"]]: {unicode: bsc4, width: W00},
    [Code["b3"]]: {unicode: bsb3, width: W00},
    [Code["a3"]]: {unicode: bsa3, width: W00},
    [Code["g3"]]: {unicode: bsg3, width: W00},
    [Code["f3"]]: {unicode: bsf3, width: W00},
    [Code["e3"]]: {unicode: bse3, width: W00},
    [Code["d3"]]: {unicode: bsd3, width: W00},
    [Code["c3"]]: {unicode: bsc3, width: W00},
    [Code["b2"]]: {unicode: bsb2, width: W00},
    [Code["a2"]]: {unicode: bsa2, width: W00},
    [Code["g2"]]: {unicode: bsg2, width: W00},
    [Code["f2"]]: {unicode: bsf2, width: W00},
    [Code["e2"]]: {unicode: bse2, width: W00},
    [Code["d2"]]: {unicode: bsd2, width: W00},
    [Code["c2"]]: {unicode: bsc2, width: W00},
}

const COMBINING_STAFF_POSITION_UNICODES: Uni[] = [
    staffPosRaise8,
    staffPosRaise7,
    staffPosRaise6,
    staffPosRaise5,
    staffPosRaise4,
    staffPosRaise3,
    staffPosRaise2,
    staffPosRaise1,
    staffPosCenter,
    staffPosLower1,
    staffPosLower2,
    staffPosLower3,
    staffPosLower4,
    staffPosLower5,
    staffPosLower6,
    staffPosLower7,
    staffPosLower8,
]

export {
    BASS_COMBINING_STAFF_POSITION_MAP,
    TREBLE_COMBINING_STAFF_POSITION_MAP,
    staffPosRaise8,
    staffPosRaise7,
    staffPosRaise6,
    staffPosRaise5,
    staffPosRaise4,
    staffPosRaise3,
    staffPosRaise2,
    staffPosRaise1,
    staffPosCenter,
    staffPosLower1,
    staffPosLower2,
    staffPosLower3,
    staffPosLower4,
    staffPosLower5,
    staffPosLower6,
    staffPosLower7,
    staffPosLower8,
    trc6,
    trb5,
    tra5,
    trg5,
    trf5,
    tre5,
    trd5,
    trc5,
    trb4,
    tra4,
    trg4,
    trf4,
    tre4,
    trd4,
    trc4,
    trb3,
    tra3,
    bse4,
    bsd4,
    bsc4,
    bsb3,
    bsa3,
    bsg3,
    bsf3,
    bse3,
    bsd3,
    bsc3,
    bsb2,
    bsa2,
    bsg2,
    bsf2,
    bse2,
    bsd2,
    bsc2,
    c6,
    b5,
    a5,
    g5,
    f5,
    e5,
    d5,
    c5,
    b4,
    a4,
    g4,
    f4,
    e4,
    d4,
    c4,
    b3,
    a3,
    // TODO: See if you can eliminate this confusing thing, and also STAFF_LINES_UNICODES
    COMBINING_STAFF_POSITION_UNICODES,
}
