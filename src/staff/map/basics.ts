import {W00, W06, W13, W17, W21, W23, W24} from "./constants"
import {Code, Uni, Unit} from "./types"

// TODO: Move all these comments into the descriptions

const lgln = "" as Uni     // U+E022    leger line
const LEDGER_LINES: Partial<Record<Code, Unit>> = {
    [Code["lgln"]]: {unicode: lgln, width: W13},
}

const brln = "" as Uni     // U+E030   bar line (single)
const brlndb = "" as Uni   // U+E031   bar line double
const BAR_MAP: Partial<Record<Code, Unit>> = {
    [Code["brln"]]: {unicode: brln},
    [Code["brlndb"]]: {unicode: brlndb},
}

const tbcf = "" as Uni    // U+E050    treble
const alcf = "" as Uni    // U+E05C    alto
const bscf = "" as Uni    // U+E062    bass
const _8va = "" as Uni    // U+E512    octave above
const _8vb = "" as Uni    // U+E51C    octave below
const CLEF_MAP: Partial<Record<Code, Unit>> = {
    [Code["tbcf"]]: {unicode: tbcf, width: W24},
    [Code["alcf"]]: {unicode: alcf, width: W24},
    [Code["bscf"]]: {unicode: bscf, width: W24},
    [Code["8va"]]: {unicode: _8va, width: W24},
    [Code["8va"]]: {unicode: _8vb, width: W24},
}

const tm0 = "" as Uni      // U+E080   time signature digit 0
const tm1 = "" as Uni      // U+E081   time signature digit 1
const tm2 = "" as Uni      // U+E082   time signature digit 2
const tm3 = "" as Uni      // U+E083   time signature digit 3
const tm4 = "" as Uni      // U+E084   time signature digit 4
const tm5 = "" as Uni      // U+E085   time signature digit 5
const tm6 = "" as Uni      // U+E086   time signature digit 6
const tm7 = "" as Uni      // U+E087   time signature digit 7
const tm8 = "" as Uni      // U+E088   time signature digit 8
const tm9 = "" as Uni      // U+E089   time signature digit 9
const tmcm = "" as Uni     // U+E08A   common time
const tmnm = "" as Uni     // U+E09E   time signature combining numerator position
const tmdn = "" as Uni     // U+E09F   time signature combining denominator position
const TIME_SIGNATURE_MAP: Partial<Record<Code, Unit>> = {
    [Code["tm0"]]: {unicode: tm0, width: W17},
    [Code["tm1"]]: {unicode: tm1, width: W17},
    [Code["tm2"]]: {unicode: tm2, width: W17},
    [Code["tm3"]]: {unicode: tm3, width: W17},
    [Code["tm4"]]: {unicode: tm4, width: W17},
    [Code["tm5"]]: {unicode: tm5, width: W17},
    [Code["tm6"]]: {unicode: tm6, width: W17},
    [Code["tm7"]]: {unicode: tm7, width: W17},
    [Code["tm8"]]: {unicode: tm8, width: W17},
    [Code["tm9"]]: {unicode: tm9, width: W17},
    [Code["tmcm"]]: {unicode: tmcm, width: W17},
    [Code["tmnm"]]: {unicode: tmnm, width: W00},
    [Code["tmdn"]]: {unicode: tmdn, width: W00},
}

const ntdb = "" as Uni    // U+E1D0    double whole note
const nt1 = "" as Uni     // U+E1D2    whole note
const nt2 = "" as Uni     // U+E1D3    half note stem up
const nt2dn = "" as Uni   // U+E1D4    half note stem down
const nt4 = "" as Uni     // U+E1D5    quarter note stem up
const nt4dn = "" as Uni   // U+E1D6    quarter note stem down
const nt8 = "" as Uni     // U+E1D7    quarter note stem up
const nt8dn = "" as Uni   // U+E1D8    quarter note stem down
const nt16 = "" as Uni    // U+E1D9    sixteenth note stem up
const nt16dn = "" as Uni  // U+E1DA    sixteenth note stem down
const nt = nt4
const NOTE_MAP: Partial<Record<Code, Unit>> = {
    [Code["ntdb"]]: {unicode: ntdb, width: W23},
    [Code["nt1"]]: {unicode: nt1, width: W13},
    [Code["nt2"]]: {unicode: nt2, width: W13},
    [Code["nt2dn"]]: {unicode: nt2dn, width: W13},
    [Code["nt4"]]: {unicode: nt4, width: W13},
    [Code["nt4dn"]]: {unicode: nt4dn, width: W13},
    [Code["nt8"]]: {unicode: nt8, width: W21},
    [Code["nt8dn"]]: {unicode: nt8dn, width: W13},
    [Code["nt16"]]: {unicode: nt16, width: W21},
    [Code["nt16dn"]]: {unicode: nt16dn, width: W13},
    [Code["nt"]]: {unicode: nt, width: W13},
}

const rsdb = "" as Uni     // U+E4E2   double whole rest
const rs1 = "" as Uni      // U+E4E3   whole rest
const rs2 = "" as Uni      // U+E4E4   half rest
const rs4 = "" as Uni      // U+E4E5   quarter rest
const rs8 = "" as Uni      // U+E4E6   eighth rest
const rs16 = "" as Uni     // U+E4E7   sixteenth rest
const rs = rs4
const REST_MAP: Partial<Record<Code, Unit>> = {
    [Code["rsdb"]]: {unicode: rsdb},
    [Code["rs1"]]: {unicode: rs1},
    [Code["rs2"]]: {unicode: rs2},
    [Code["rs4"]]: {unicode: rs4},
    [Code["rs8"]]: {unicode: rs8},
    [Code["rs16"]]: {unicode: rs16},
    [Code["rs"]]: {unicode: rs},
}

const dt = "" as Uni       // U+E1E7    augmentation dot
const agdt = dt
const DOT_MAP: Partial<Record<Code, Unit>> = {
    [Code["dt"]]: {unicode: dt, width: W06},
    [Code["agdt"]]: {unicode: agdt, width: W06},
}

// See: https://w3c.github.io/smufl/gitbook/tables/beamed-groups-of-notes.html
const ntbmst = "" as Uni   // U+E1F0   note for start of any beam (short stem)
const ntbm8 = "" as Uni    // U+E1F2   note for end of eighth beam, and possible continuation of any beam (short stem)
const ntbm16 = "" as Uni   // U+E1F4   note for end of 16th beam, and possible continuation of any beam (short stem)
const bm8 = "" as Uni      // U+E1F7   eighth beam continuation (for short stems)
const bm16 = "" as Uni     // U+E1F9   sixteenth beam continuation (for short stems)
const tp3 = "" as Uni      // U+E1FF   tuplet digit 3 (for short stems)
const BEAMS_MAP: Partial<Record<Code, Unit>> = {
    [Code["ntbmst"]]: {unicode: ntbmst},
    [Code["ntbm8"]]: {unicode: ntbm8},
    [Code["ntbm16"]]: {unicode: ntbm16},
    [Code["bm8"]]: {unicode: bm8},
    [Code["bm16"]]: {unicode: bm16},
    [Code["tp3"]]: {unicode: tp3},
}

export {
    lgln,
    LEDGER_LINES,
    brln,
    brlndb,
    BAR_MAP,
    tbcf,
    alcf,
    bscf,
    _8va,
    _8vb,
    CLEF_MAP,
    tm0,
    tm1,
    tm2,
    tm3,
    tm4,
    tm5,
    tm6,
    tm7,
    tm8,
    tm9,
    tmcm,
    tmnm,
    tmdn,
    TIME_SIGNATURE_MAP,
    ntdb,
    nt1,
    nt2,
    nt2dn,
    nt4,
    nt4dn,
    nt8,
    nt8dn,
    nt16,
    nt16dn,
    nt,
    NOTE_MAP,
    rsdb,
    rs1,
    rs2,
    rs4,
    rs8,
    rs16,
    rs,
    REST_MAP,
    dt,
    agdt,
    DOT_MAP,
    ntbmst,
    ntbm8,
    ntbm16,
    bm8,
    bm16,
    tp3,
    BEAMS_MAP,
}
