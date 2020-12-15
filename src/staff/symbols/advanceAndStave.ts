import {Code, Symbol} from "./types"

const MANUAL_ADVANCE_MAP: Record<Code, Symbol> = {
    /*U+200A              */[Code["sp1"]]: {unicode: " ", width: 1, description: "HAIR SPACE"},
    /*U+2009              */[Code["sp2"]]: {unicode: " ", width: 2, description: "THIN SPACE"},
    /*U+2009 U+200A       */[Code["sp3"]]: {unicode: "  ", width: 3},
    /*U+2005              */[Code["sp4"]]: {unicode: " ", width: 4, description: "FOUR-PER-EM SPACE"},
    /*U+2005 U+200A       */[Code["sp5"]]: {unicode: "  ", width: 5},
    /*U+2004              */[Code["sp6"]]: {unicode: " ", width: 6, description: "THREE-PER-EM SPACE"},
    /*U+2004 U+200A       */[Code["sp7"]]: {unicode: "  ", width: 7},
    /*U+2002              */[Code["sp8"]]: {unicode: " ", width: 8, description: "EN SPACE"},
    /*U+2002 U+200A       */[Code["sp9"]]: {unicode: "  ", width: 9},
    /*U+2008              */[Code["sp10"]]: {unicode: " ", width: 10, description: "PUNCTUATION SPACE"},
    /*U+2008 U+200A       */[Code["sp11"]]: {unicode: "  ", width: 11},
    /*U+3000              */[Code["sp12"]]: {unicode: "　", width: 12, description: "IDEOGRAPHIC SPACE"},
    /*U+3000 U+200A       */[Code["sp13"]]: {unicode: "　 ", width: 13},
    /*U+3000 U+2009       */[Code["sp14"]]: {unicode: "　 ", width: 14}, // *
    /*U+3000 U+2009 U+200A*/[Code["sp15"]]: {unicode: "　  ", width: 15}, // *
    /*U+2003              */[Code["sp16"]]: {unicode: " ", width: 16, description: "EM SPACE"},
} as Record<Code, Symbol>

const SMART_ADVANCE_MAP: Record<Code, Symbol> = {
    /*U+2000*/[Code[";"]]: {unicode: " ", width: 0, description: "EN QUAD"},
} as Record<Code, Symbol>
SMART_ADVANCE_MAP[Code["sp"]] = SMART_ADVANCE_MAP[Code[";"]]
SMART_ADVANCE_MAP[Code["ad"]] = SMART_ADVANCE_MAP[Code[";"]]

// * U+2001 EM QUAD, our desired sp14, is not in the font yet. Once it is, these should be replaced.

const MANUAL_STAVE_MAP: Record<Code, Symbol> = {
    /*U+E020*/[Code["st8"]]: {unicode: "", width: 0},
    /*U+E014*/[Code["st16"]]: {unicode: "", width: 0},
    /*U+E01A*/[Code["st24"]]: {unicode: "", width: 0},
} as Record<Code, Symbol>

const SMART_STAVE_MAP: Record<Code, Symbol> = {
    /*U+E02E*/[Code["st"]]: {unicode: "", width: 0},
    /*U+E02F*/[Code["stof"]]: {unicode: "", width: 0},
} as Record<Code, Symbol>

export {
    MANUAL_ADVANCE_MAP,
    SMART_ADVANCE_MAP,
    MANUAL_STAVE_MAP,
    SMART_STAVE_MAP,
}

// TODO: And BTW "brln" needs a width of 4 and "brlndb" 7.
