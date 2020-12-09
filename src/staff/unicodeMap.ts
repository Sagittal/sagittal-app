import {ACCIDENTALS} from "./accidentals"

const sp1 = " "   // U+200A           HAIR SPACE

const SPACES = {
    sp1,
    "sp2": " ",         // U+2009           THIN SPACE
    "sp3": "  ",        // U+2009 U+200A
    "sp4": " ",         // U+2005           FOUR-PER-EM SPACE
    "sp5": "  ",        // U+2005 U+200A
    "sp6": " ",         // U+2004           THREE-PER-EM SPACE
    "sp7": "  ",        // U+2004 U+200A
    "sp8": " ",         // U+2002           EN SPACE
    "sp9": "  ",        // U+2002 U+200A
    "sp10": " ",        // U+2008           PUNCTUATION SPACE
    "sp11": "  ",       // U+2008 U+200A
    "sp12": "　",        // U+3000           IDEOGRAPHIC SPACE
    "sp13": "　 ",       // U+3000 U+200A
    "sp14": " ",        // U+2001           EM QUAD (not in font yet)
    "sp15": "  ",       // U+2001 U+200A    (not in font yet)
    "sp16": " ",        // U+2003           EM SPACE
}

const LINES = {
    "st8": "",         // U+E020
    "st16": "",        // U+E014
    "st24": "",        // U+E01A
    "st": "",

    "lgln": "",        // U+E022           leger line
}

const BARS = {
    "brln": "",        // U+E030           bar line (single)
    "brlndb": "",      // U+E031           bar line double
}

const CLEFS = {
    "tbcf": "",        // U+E050           treble
    "alcf": "",        // U+E05C           alto
    "bscf": "",        // U+E062           bass
    "8va": "",         // U+E512           octave above
    "8vb": "",         // U+E51C           octave below
}

const TIME_SIGNATURES = {
    "tm0": "",         // U+E080           time signature digit 0
    "tm1": "",         // U+E081           time signature digit 1
    "tm2": "",         // U+E082           time signature digit 2
    "tm3": "",         // U+E083           time signature digit 3
    "tm4": "",         // U+E084           time signature digit 4
    "tm5": "",         // U+E085           time signature digit 5
    "tm6": "",         // U+E086           time signature digit 6
    "tm7": "",         // U+E087           time signature digit 7
    "tm8": "",         // U+E088           time signature digit 8
    "tm9": "",         // U+E089           time signature digit 9

    "tmcm": "",        // U+E08A           common time

    "tmnm": "",        // U+E09E           time signature combining numerator position
    "tmdn": "",        // U+E09F           time signature combining denominator position
}

const NOTES = {
    "ntdb": "",        // U+E1D0           double whole note
    "nt1": "",         // U+E1D2           whole note
    "nt2": "",         // U+E1D3           half note stem up
    "nt2dn": "",       // U+E1D4           half note stem down
    "nt4": "",         // U+E1D5           quarter note stem up
    "nt4dn": "",       // U+E1D6           quarter note stem down
    "nt8": "",         // U+E1D7           quarter note stem up
    "nt8dn": "",       // U+E1D8           quarter note stem down
    "nt16": "",        // U+E1D9           sixteenth note stem up
    "nt16dn": "",      // U+E1DA           sixteenth note stem down
}

const RESTS = {
    "rsdb": "",        // U+E4E2           double whole rest
    "rs1": "",         // U+E4E3           whole rest
    "rs2": "",         // U+E4E4           half rest
    "rs4": "",         // U+E4E5           quarter rest
    "rs8": "",         // U+E4E6           eighth rest
    "rs16": "",        // U+E4E6           sixteenth rest
}

const BEAMS_AND_DOTS = {
    "dt": "",          // U+E1E7           augmentation dot
    "agdt": "",

    // Beamed groups of notes
    // See: https://w3c.github.io/smufl/gitbook/tables/beamed-groups-of-notes.html
    "ntbmst": "",      // U+E1F0           note for start of any beam (short stem)
    "ntbm8": "",       // U+E1F2           note for end of eighth beam, and possible continuation of any beam (short stem)
    "ntbm16": "",      // U+E1F4           note for end of sixteenth beam, and possible continuation of any beam (short stem)
    "bm8": "",         // U+E1F7           eighth beam continuation (for short stems)
    "bm16": "",        // U+E1F9           sixteenth beam continuation (for short stems)
    "tp3": "",         // U+E1FF           tuplet digit 3 (for short stems)
}

const CLEF_AGNOSTIC_UNICODE_MAP = {
    ...SPACES,
    ...LINES,
    ...BARS,
    ...CLEFS,
    ...NOTES,
    ...RESTS,
    ...BEAMS_AND_DOTS,
    ...TIME_SIGNATURES,
    ...ACCIDENTALS,
}

export {
    CLEF_AGNOSTIC_UNICODE_MAP,
}
