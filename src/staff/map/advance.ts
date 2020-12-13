import {Code, Uni, Unit} from "./types"

const ADVANCE_MAP: Record<Code, Unit> = {
    /*U+200A              */[Code["sp1"]]: {unicode: " ", description: "HAIR SPACE"},
    /*U+2009              */[Code["sp2"]]: {unicode: " ", description: "THIN SPACE"},
    /*U+2009 U+200A       */[Code["sp3"]]: {unicode: "  " as Uni},
    /*U+2005              */[Code["sp4"]]: {unicode: " ", description: "FOUR-PER-EM SPACE"},
    /*U+2005 U+200A       */[Code["sp5"]]: {unicode: "  " as Uni},
    /*U+2004              */[Code["sp6"]]: {unicode: " ", description: "THREE-PER-EM SPACE"},
    /*U+2004 U+200A       */[Code["sp7"]]: {unicode: "  " as Uni},
    /*U+2002              */[Code["sp8"]]: {unicode: " ", description: "EN SPACE"},
    /*U+2002 U+200A       */[Code["sp9"]]: {unicode: "  " as Uni},
    /*U+2008              */[Code["sp10"]]: {unicode: " ", description: "PUNCTUATION SPACE"},
    /*U+2008 U+200A       */[Code["sp11"]]: {unicode: "  " as Uni},
    /*U+3000              */[Code["sp12"]]: {unicode: "　", description: "IDEOGRAPHIC SPACE"},
    /*U+3000 U+200A       */[Code["sp13"]]: {unicode: "　 " as Uni},
    /*U+3000 U+2009       */[Code["sp14"]]: {unicode: "　 " as Uni}, // *
    /*U+3000 U+2009 U+200A*/[Code["sp15"]]: {unicode: "　  " as Uni}, // *
    /*U+2003              */[Code["sp16"]]: {unicode: " ", description: "EM SPACE"},
} as Record<Code, Unit>

// * U+2001 EM QUAD, our desired sp14, is not in the font yet. Once it is, these should be replaced.

export {
    ADVANCE_MAP,
}
