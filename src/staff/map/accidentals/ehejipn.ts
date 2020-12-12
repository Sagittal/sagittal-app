// tslint:disable max-line-length

import {Code, Uni, Unit} from "../types"
import {b, bb, n, sharp, smallDoubleSharp} from "./conventional"
import {sesquisharp} from "./unconventional"

// See: ttps://w3c.github.io/smufl/gitbook/tables/extended-helmholtz-ellis-accidentals-just-intonation.html
// All EHEJIPN staffCodes start with a dot (full-stop). Unicodes are successive below.

const ehejipnDoubleFlat5Otonal = "" as Uni                        // U+E2C0
const ehejipnFlat5Otonal = "" as Uni                              // U+E2C1
const ehejipnNatural5Otonal = "" as Uni                           // U+E2C2
const ehejipnSharp5Otonal = "" as Uni                             // U+E2C3
const ehejipnDoubleSharp5Otonal = "" as Uni                       // U+E2C4
const ehejipnDoubleFlat5Utonal = "" as Uni                        // U+E2C5
const ehejipnFlat5Utonal = "" as Uni                              // U+E2C6
const ehejipnNatural5Utonal = "" as Uni                           // U+E2C7
const ehejipnSharp5Utonal = "" as Uni                             // U+E2C8
const ehejipnDoubleSharp5Utonal = "" as Uni                       // U+E2C9
const ehejipnDoubleFlatDouble5Otonal = "" as Uni                  // U+E2CA
const ehejipnFlatDouble5Otonal = "" as Uni                        // U+E2CB
const ehejipnNaturalDouble5Otonal = "" as Uni                     // U+E2CC
const ehejipnSharpDouble5Otonal = "" as Uni                       // U+E2CD
const ehejipnDoubleSharpDouble5Otonal = "" as Uni                 // U+E2CE
const ehejipnDoubleFlatDouble5Utonal = "" as Uni                  // U+E2CF
const ehejipnFlatDouble5Utonal = "" as Uni                        // U+E2D0
const ehejipnNaturalDouble5Utonal = "" as Uni                     // U+E2D1
const ehejipnSharpDouble5Utonal = "" as Uni                       // U+E2D2
const ehejipnDoubleSharpDouble5Utonal = "" as Uni                 // U+E2D3
const ehejipnDoubleFlatTriple5Otonal = "" as Uni                  // U+E2D4
const ehejipnFlatTriple5Otonal = "" as Uni                        // U+E2D5
const ehejipnNaturalTriple5Otonal = "" as Uni                     // U+E2D6
const ehejipnSharpTriple5Otonal = "" as Uni                       // U+E2D7
const ehejipnDoubleSharpTriple5Otonal = "" as Uni                 // U+E2D8
const ehejipnDoubleFlatTriple5Utonal = "" as Uni                  // U+E2D9
const ehejipnFlatTriple5Utonal = "" as Uni                        // U+E2DA
const ehejipnNaturalTriple5Utonal = "" as Uni                     // U+E2DB
const ehejipnSharpTriple5Utonal = "" as Uni                       // U+E2DC
const ehejipnDoubleSharpTriple5Utonal = "" as Uni                 // U+E2DD
const ehejipn7Otonal = "" as Uni                                  // U+E2DE   lowercase L here, but people would type it uppercase
const ehejipn7Utonal = "" as Uni                                  // U+E2DF   people would type it uppercase
const ehejipnDouble7Otonal = "" as Uni                            // U+E2E0   lowercase LL here, but people would type them uppercase
const ehejipnDouble7Utonal = "" as Uni                            // U+E2E1   people would type them uppercase
const ehejipn11Utonal = "" as Uni                                 // U+E2E2
const ehejipn11Otonal = "" as Uni                                 // U+E2E3
const ehejipn13Otonal = "" as Uni                                 // U+E2E4
const ehejipn13Utonal = "" as Uni                                 // U+E2E5
const ehejipn17Otonal = "" as Uni                                 // U+E2E6
const ehejipn17Utonal = "" as Uni                                 // U+E2E7
const ehejipn19Utonal = "" as Uni                                 // U+E2E8
const ehejipn19Otonal = "" as Uni                                 // U+E2E9
const ehejipn23Otonal = "" as Uni                                 // U+E2EA
const ehejipn23Utonal = "" as Uni                                 // U+E2EB
const ehejipnCombiningOpenCurlyBrace = "" as Uni                  // U+E2EE
const ehejipnCombiningCloseCurlyBrace = "" as Uni                 // U+E2EF
const ehejipnDoubleFlatTemperedSemitone = "" as Uni               // U+E2F0
const ehejipnFlatTemperedSemitone = "" as Uni                     // U+E2F1
const ehejipnNaturalTemperedSemitone = "" as Uni                  // U+E2F2
const ehejipnSharpTemperedSemitone = "" as Uni                    // U+E2F3
const ehejipnDoubleSharpTemperedSemitone = "" as Uni              // U+E2F4
const ehejipnQuarterFlatTemperedSemitone = "" as Uni              // U+E2F5
const ehejipnQuarterSharpTemperedSemitone = "" as Uni             // U+E2F6
const ehejipn53Otonal = "" as Uni                                 // U+E2F7
const ehejipn53Utonal = "" as Uni                                 // U+E2F8
const ehejipnEnharmonicallyReinterpret = "" as Uni                // U+E2F9
const ehejipnEnharmonicallyReinterpretAlmostEqual = "" as Uni     // U+E2FA
const ehejipnEnharmonicallyReinterpretEquals = "" as Uni          // U+E2FB

const accidentalThreeQuarterTonesFlatZimmermann = "" as Uni         // U+E281

const EHEJIPN_ACCIDENTAL_MAP: Partial<Record<Code, Unit>> = {
    [Code[".bbv"]]: {unicode: ehejipnDoubleFlat5Otonal},
    [Code[".bv"]]: {unicode: ehejipnFlat5Otonal},
    [Code[".nv"]]: {unicode: ehejipnNatural5Otonal},
    [Code[".#v"]]: {unicode: ehejipnSharp5Otonal},
    [Code[".xv"]]: {unicode: ehejipnDoubleSharp5Otonal},
    [Code[".bb^"]]: {unicode: ehejipnDoubleFlat5Utonal},
    [Code[".b^"]]: {unicode: ehejipnFlat5Utonal},
    [Code[".n^"]]: {unicode: ehejipnNatural5Utonal},
    [Code[".#^"]]: {unicode: ehejipnSharp5Utonal},
    [Code[".x^"]]: {unicode: ehejipnDoubleSharp5Utonal},
    [Code[".bbvv"]]: {unicode: ehejipnDoubleFlatDouble5Otonal},
    [Code[".bvv"]]: {unicode: ehejipnFlatDouble5Otonal},
    [Code[".nvv"]]: {unicode: ehejipnNaturalDouble5Otonal},
    [Code[".#vv"]]: {unicode: ehejipnSharpDouble5Otonal},
    [Code[".xvv"]]: {unicode: ehejipnDoubleSharpDouble5Otonal},
    [Code[".bb^^"]]: {unicode: ehejipnDoubleFlatDouble5Utonal},
    [Code[".b^^"]]: {unicode: ehejipnFlatDouble5Utonal},
    [Code[".n^^"]]: {unicode: ehejipnNaturalDouble5Utonal},
    [Code[".#^^"]]: {unicode: ehejipnSharpDouble5Utonal},
    [Code[".x^^"]]: {unicode: ehejipnDoubleSharpDouble5Utonal},
    [Code[".bbvvv"]]: {unicode: ehejipnDoubleFlatTriple5Otonal},
    [Code[".bvvv"]]: {unicode: ehejipnFlatTriple5Otonal},
    [Code[".nvvv"]]: {unicode: ehejipnNaturalTriple5Otonal},
    [Code[".#vvv"]]: {unicode: ehejipnSharpTriple5Otonal},
    [Code[".xvvv"]]: {unicode: ehejipnDoubleSharpTriple5Otonal},
    [Code[".bb^^^"]]: {unicode: ehejipnDoubleFlatTriple5Utonal},
    [Code[".b^^^"]]: {unicode: ehejipnFlatTriple5Utonal},
    [Code[".n^^^"]]: {unicode: ehejipnNaturalTriple5Utonal},
    [Code[".#^^^"]]: {unicode: ehejipnSharpTriple5Utonal},
    [Code[".x^^^"]]: {unicode: ehejipnDoubleSharpTriple5Utonal},
    [Code[".l"]]: {unicode: ehejipn7Otonal},
    [Code[".p"]]: {unicode: ehejipn7Utonal},
    [Code[".ll"]]: {unicode: ehejipnDouble7Otonal},
    [Code[".pp"]]: {unicode: ehejipnDouble7Utonal},
    [Code[".<"]]: {unicode: ehejipn11Utonal},
    [Code[".>"]]: {unicode: ehejipn11Otonal},
    [Code[".<|"]]: {unicode: ehejipn13Otonal},
    [Code[".>|"]]: {unicode: ehejipn13Utonal},
    [Code[".\\\\"]]: {unicode: ehejipn17Otonal},
    [Code[".//"]]: {unicode: ehejipn17Utonal},
    [Code[".\\"]]: {unicode: ehejipn19Utonal},
    [Code["./"]]: {unicode: ehejipn19Otonal},
    [Code[".^"]]: {unicode: ehejipn23Otonal},
    [Code[".v"]]: {unicode: ehejipn23Utonal},
    [Code[".{"]]: {unicode: ehejipnCombiningOpenCurlyBrace},
    [Code[".}"]]: {unicode: ehejipnCombiningCloseCurlyBrace},
    [Code[".bbt"]]: {unicode: ehejipnDoubleFlatTemperedSemitone},
    [Code[".bt"]]: {unicode: ehejipnFlatTemperedSemitone},
    [Code[".nt"]]: {unicode: ehejipnNaturalTemperedSemitone},
    [Code[".#t"]]: {unicode: ehejipnSharpTemperedSemitone},
    [Code[".xt"]]: {unicode: ehejipnDoubleSharpTemperedSemitone},
    [Code[".<t"]]: {unicode: ehejipnQuarterFlatTemperedSemitone},
    [Code[".>t"]]: {unicode: ehejipnQuarterSharpTemperedSemitone},
    [Code[".\\\\\\"]]: {unicode: ehejipn53Otonal},
    [Code[".///"]]: {unicode: ehejipn53Utonal},
    [Code[".~"]]: {unicode: ehejipnEnharmonicallyReinterpret},
    [Code[".~~"]]: {unicode: ehejipnEnharmonicallyReinterpretAlmostEqual},
    [Code[".="]]: {unicode: ehejipnEnharmonicallyReinterpretEquals},

    // For convenience of EHEJIPN users, standard accidentals with dots at the start of their codes
    // See: https://w3c.github.io/smufl/gitbook/tables/standard-accidentals-12-edo.html
    [Code[".bb"]]: {unicode: bb},
    [Code[".b"]]: {unicode: b},
    [Code[".n"]]: {unicode: n},
    [Code[".#"]]: {unicode: sharp},
    [Code[".x"]]: {unicode: smallDoubleSharp},
    [Code[".<b"]]: {unicode: accidentalThreeQuarterTonesFlatZimmermann},
    [Code[".>#"]]: {unicode: sesquisharp},
}

export {
    EHEJIPN_ACCIDENTAL_MAP,
    ehejipnDoubleFlat5Otonal,
    ehejipnFlat5Otonal,
    ehejipnNatural5Otonal,
    ehejipnSharp5Otonal,
    ehejipnDoubleSharp5Otonal,
    ehejipnDoubleFlat5Utonal,
    ehejipnFlat5Utonal,
    ehejipnNatural5Utonal,
    ehejipnSharp5Utonal,
    ehejipnDoubleSharp5Utonal,
    ehejipnDoubleFlatDouble5Otonal,
    ehejipnFlatDouble5Otonal,
    ehejipnNaturalDouble5Otonal,
    ehejipnSharpDouble5Otonal,
    ehejipnDoubleSharpDouble5Otonal,
    ehejipnDoubleFlatDouble5Utonal,
    ehejipnFlatDouble5Utonal,
    ehejipnNaturalDouble5Utonal,
    ehejipnSharpDouble5Utonal,
    ehejipnDoubleSharpDouble5Utonal,
    ehejipnDoubleFlatTriple5Otonal,
    ehejipnFlatTriple5Otonal,
    ehejipnNaturalTriple5Otonal,
    ehejipnSharpTriple5Otonal,
    ehejipnDoubleSharpTriple5Otonal,
    ehejipnDoubleFlatTriple5Utonal,
    ehejipnFlatTriple5Utonal,
    ehejipnNaturalTriple5Utonal,
    ehejipnSharpTriple5Utonal,
    ehejipnDoubleSharpTriple5Utonal,
    ehejipn7Otonal,
    ehejipn7Utonal,
    ehejipnDouble7Otonal,
    ehejipnDouble7Utonal,
    ehejipn11Utonal,
    ehejipn11Otonal,
    ehejipn13Otonal,
    ehejipn13Utonal,
    ehejipn17Otonal,
    ehejipn17Utonal,
    ehejipn19Utonal,
    ehejipn19Otonal,
    ehejipn23Otonal,
    ehejipn23Utonal,
    ehejipnCombiningOpenCurlyBrace,
    ehejipnCombiningCloseCurlyBrace,
    ehejipnDoubleFlatTemperedSemitone,
    ehejipnFlatTemperedSemitone,
    ehejipnNaturalTemperedSemitone,
    ehejipnSharpTemperedSemitone,
    ehejipnDoubleSharpTemperedSemitone,
    ehejipnQuarterFlatTemperedSemitone,
    ehejipnQuarterSharpTemperedSemitone,
    ehejipn53Otonal,
    ehejipn53Utonal,
    ehejipnEnharmonicallyReinterpret,
    ehejipnEnharmonicallyReinterpretAlmostEqual,
    ehejipnEnharmonicallyReinterpretEquals,
    accidentalThreeQuarterTonesFlatZimmermann,
}
