import {Code, Uni} from "../types"

// See: https://w3c.github.io/smufl/gitbook/tables/stein-zimmermann-accidentals-24-edo.html
// And: https://w3c.github.io/smufl/gitbook/tables/other-accidentals.html

const semisharp = "" as Uni    // U+E282   Half sharp (quarter-tone sharp) (Stein)
const semiflat = "" as Uni     // U+E284   Narrow reversed flat (quarter-tone flat)
const sesquisharp = "" as Uni  // U+E283   One and a half sharps (three-quarter-tones sharp) (Stein)
const sesquiflat = "" as Uni   // U+E285   Narrow reversed flat and flat (three-quarter-tones flat)
const wilsonPlus = "" as Uni   // U+E47B   Wilson plus (5 comma up)
const wilsonMinus = "" as Uni  // U+E47C   Wilson minus (5 comma down)

const UNCONVENTIONAL_ACCIDENTALS: Partial<Record<Code, Uni>> = {
    [Code[">"]]: semisharp,
    [Code["<"]]: semiflat,
    [Code[">#"]]: sesquisharp,
    [Code["<b"]]: sesquiflat,
    [Code["+"]]: wilsonPlus,
    [Code["-"]]: wilsonMinus,
}

export {
    UNCONVENTIONAL_ACCIDENTALS,
    semisharp,
    semiflat,
    sesquisharp,
    sesquiflat,
    wilsonPlus,
    wilsonMinus,
}
