import {W00} from "./constants"
import {Code, Uni, Unit} from "./types"

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

const ADVANCE_MAP: Partial<Record<Code, Unit>> = {
    [Code["sp1"]]: {unicode: sp1},
    [Code["sp2"]]: {unicode: sp2},
    [Code["sp3"]]: {unicode: sp3},
    [Code["sp4"]]: {unicode: sp4},
    [Code["sp5"]]: {unicode: sp5},
    [Code["sp6"]]: {unicode: sp6},
    [Code["sp7"]]: {unicode: sp7},
    [Code["sp8"]]: {unicode: sp8},
    [Code["sp9"]]: {unicode: sp9},
    [Code["sp10"]]: {unicode: sp10},
    [Code["sp11"]]: {unicode: sp11},
    [Code["sp12"]]: {unicode: sp12},
    [Code["sp13"]]: {unicode: sp13},
    [Code["sp14"]]: {unicode: sp14},
    [Code["sp15"]]: {unicode: sp15},
    [Code["sp16"]]: {unicode: sp16},
}

export {
    ADVANCE_MAP,
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
}
