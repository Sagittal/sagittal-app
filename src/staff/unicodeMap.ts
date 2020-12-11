import {ACCIDENTALS} from "./accidentals"
import {Code, Uni} from "./types"

const sp1 = " " as Uni      // U+200A                   HAIR SPACE
const sp2 = " " as Uni      // U+2009                   THIN SPACE
const sp3 = "  " as Uni     // U+2009 U+200A
const sp4 = " " as Uni      // U+2005                   FOUR-PER-EM SPACE
const sp5 = "  " as Uni     // U+2005 U+200A
const sp6 = " " as Uni      // U+2004                   THREE-PER-EM SPACE
const sp7 = "  " as Uni     // U+2004 U+200A
const sp8 = " " as Uni      // U+2002                   EN SPACE
const sp9 = "  " as Uni     // U+2002 U+200A
const sp10 = " " as Uni     // U+2008                   PUNCTUATION SPACE
const sp11 = "  " as Uni    // U+2008 U+200A
const sp12 = "　" as Uni     // U+3000                   IDEOGRAPHIC SPACE
const sp13 = "　 " as Uni    // U+3000 U+200A
const sp14 = "　 " as Uni    // U+3000 U+2009 *
const sp15 = "　  " as Uni   // U+3000 U+2009 U+200A *
const sp16 = " " as Uni     // U+2003                   EM SPACE

// * U+2001 EM QUAD, our desired sp14, is not in the font yet. Once it is, these should be replaced.

const SPACES: Partial<Record<Code, Uni>> = {
    [Code["sp1"]]: sp1,
    [Code["sp2"]]: sp2,
    [Code["sp3"]]: sp3,
    [Code["sp4"]]: sp4,
    [Code["sp5"]]: sp5,
    [Code["sp6"]]: sp6,
    [Code["sp7"]]: sp7,
    [Code["sp8"]]: sp8,
    [Code["sp9"]]: sp9,
    [Code["sp10"]]: sp10,
    [Code["sp11"]]: sp11,
    [Code["sp12"]]: sp12,
    [Code["sp13"]]: sp13,
    [Code["sp14"]]: sp14,
    [Code["sp15"]]: sp15,
    [Code["sp16"]]: sp16,
}

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

const lgln = "" as Uni     // U+E022    leger line
const LEDGER_LINES: Partial<Record<Code, Uni>> = {
    [Code["lgln"]]: lgln,
}

const brln = "" as Uni     // U+E030   bar line (single)
const brlndb = "" as Uni   // U+E031   bar line double
const BARS: Partial<Record<Code, Uni>> = {
    [Code["brln"]]: brln,
    [Code["brlndb"]]: brlndb,
}

const tbcf = "" as Uni    // U+E050    treble
const alcf = "" as Uni    // U+E05C    alto
const bscf = "" as Uni    // U+E062    bass
const _8va = "" as Uni    // U+E512    octave above
const _8vb = "" as Uni    // U+E51C    octave below
const CLEFS: Partial<Record<Code, Uni>> = {
    [Code["tbcf"]]: tbcf,
    [Code["alcf"]]: alcf,
    [Code["bscf"]]: bscf,
    [Code["8va"]]: _8va,
    [Code["8va"]]: _8vb,
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
const TIME_SIGNATURES: Partial<Record<Code, Uni>> = {
    [Code["tm0"]]: tm0,
    [Code["tm1"]]: tm1,
    [Code["tm2"]]: tm2,
    [Code["tm3"]]: tm3,
    [Code["tm4"]]: tm4,
    [Code["tm5"]]: tm5,
    [Code["tm6"]]: tm6,
    [Code["tm7"]]: tm7,
    [Code["tm8"]]: tm8,
    [Code["tm9"]]: tm9,
    [Code["tmcm"]]: tmcm,
    [Code["tmnm"]]: tmnm,
    [Code["tmdn"]]: tmdn,
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
const NOTES: Partial<Record<Code, Uni>> = {
    [Code["ntdb"]]: ntdb,
    [Code["nt1"]]: nt1,
    [Code["nt2"]]: nt2,
    [Code["nt2dn"]]: nt2dn,
    [Code["nt4"]]: nt4,
    [Code["nt4dn"]]: nt4dn,
    [Code["nt8"]]: nt8,
    [Code["nt8dn"]]: nt8dn,
    [Code["nt16"]]: nt16,
    [Code["nt16dn"]]: nt16dn,
    [Code["nt"]]: nt,
}

const rsdb = "" as Uni     // U+E4E2   double whole rest
const rs1 = "" as Uni      // U+E4E3   whole rest
const rs2 = "" as Uni      // U+E4E4   half rest
const rs4 = "" as Uni      // U+E4E5   quarter rest
const rs8 = "" as Uni      // U+E4E6   eighth rest
const rs16 = "" as Uni     // U+E4E7   sixteenth rest
const rs = rs4
const RESTS: Partial<Record<Code, Uni>> = {
    [Code["rsdb"]]: rsdb,
    [Code["rs1"]]: rs1,
    [Code["rs2"]]: rs2,
    [Code["rs4"]]: rs4,
    [Code["rs8"]]: rs8,
    [Code["rs16"]]: rs16,
    [Code["rs"]]: rs,
}

const dt = "" as Uni       // U+E1E7    augmentation dot
const agdt = dt
const DOTS: Partial<Record<Code, Uni>> = {
    [Code["dt"]]: dt,
    [Code["agdt"]]: agdt,
}

// See: https://w3c.github.io/smufl/gitbook/tables/beamed-groups-of-notes.html
const ntbmst = "" as Uni   // U+E1F0   note for start of any beam (short stem)
const ntbm8 = "" as Uni    // U+E1F2   note for end of eighth beam, and possible continuation of any beam (short stem)
const ntbm16 = "" as Uni   // U+E1F4   note for end of 16th beam, and possible continuation of any beam (short stem)
const bm8 = "" as Uni      // U+E1F7   eighth beam continuation (for short stems)
const bm16 = "" as Uni     // U+E1F9   sixteenth beam continuation (for short stems)
const tp3 = "" as Uni      // U+E1FF   tuplet digit 3 (for short stems)
const BEAMED_GROUPS_OF_NOTES: Partial<Record<Code, Uni>> = {
    [Code["ntbmst"]]: ntbmst,
    [Code["ntbm8"]]: ntbm8,
    [Code["ntbm16"]]: ntbm16,
    [Code["bm8"]]: bm8,
    [Code["bm16"]]: bm16,
    [Code["tp3"]]: tp3,
}

const CODES: Partial<Record<Code, Uni>> = {
    ...SPACES,
    ...STAFF_LINES,
    ...LEDGER_LINES,
    ...BARS,
    ...CLEFS,
    ...NOTES,
    ...RESTS,
    ...DOTS,
    ...BEAMED_GROUPS_OF_NOTES,
    ...TIME_SIGNATURES,
    ...ACCIDENTALS,
}

export {
    sp1,
    sp2,
    sp3,
    sp4,
    sp5,
    sp6,
    sp7,
    sp8,
    sp9,
    sp10,
    sp11,
    sp12,
    sp13,
    sp14,
    sp15,
    sp16,
    SPACES,
    st8,
    st16,
    st24,
    st,
    lgln,
    STAFF_LINES,
    LEDGER_LINES,
    brln,
    brlndb,
    BARS,
    tbcf,
    alcf,
    bscf,
    _8va,
    _8vb,
    CLEFS,
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
    TIME_SIGNATURES,
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
    NOTES,
    rsdb,
    rs1,
    rs2,
    rs4,
    rs8,
    rs16,
    rs,
    RESTS,
    dt,
    agdt,
    DOTS,
    ntbmst,
    ntbm8,
    ntbm16,
    bm8,
    bm16,
    tp3,
    BEAMED_GROUPS_OF_NOTES,
    CODES,
}
