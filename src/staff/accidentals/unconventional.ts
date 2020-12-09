// https://w3c.github.io/smufl/gitbook/tables/stein-zimmermann-accidentals-24-edo.html
// https://w3c.github.io/smufl/gitbook/tables/other-accidentals.html

const UNCONVENTIONAL_ACCIDENTALS = {
    ">": "",           // U+E282           Half sharp (quarter-tone sharp) (Stein)
    "<": "",           // U+E284           Narrow reversed flat (quarter-tone flat)
    ">#": "",          // U+E283           One and a half sharps (three-quarter-tones sharp) (Stein)
    "<b": "",          // U+E285           Narrow reversed flat and flat (three-quarter-tones flat)
    "+": "",           // U+E47B           Wilson plus (5 comma up)
    "-": "",           // U+E47C           Wilson minus (5 comma down)
}

export {
    UNCONVENTIONAL_ACCIDENTALS,
}
