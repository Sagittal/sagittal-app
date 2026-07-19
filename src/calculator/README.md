# calculator

A web port of the *Sagittal Standard JI Notation Calculator* spreadsheet
([forum.sagittal.org t=86](http://forum.sagittal.org/viewtopic.php?t=86)).

Enter a pitch as a ratio or as its prime exponents, choose the Pythagorean nominal
that is your 1/1, and read off its Sagittal notation — Evo and/or Revo, as Sagitype,
as Unicode codepoints, drawn in Bravura and named in Sagispeak. A row of tabs under the
input panel picks which notation is on screen, one at a time: *Precision Level* gives
all four levels, with a live diagram of where your pitch falls among each level's
symbols; *Prime Factor* spells the same pitch in the prime-factor notation
([t=99](http://forum.sagittal.org/viewtopic.php?t=99)): one Sagittal per prime
factor, with the factor-by-factor arithmetic laid out.

The build is a single self-contained `index.html`: no server, no network, no font
to install.

## Layout

    src/template.html   markup, styles and the UI runtime
    src/core.js         the computation, ported cell for cell from the workbook
    src/primeFactor.js  the one-symbol-per-prime comma table and speller
    src/data.js         generated — boundary, comma and key tables, verbatim
    src/sagispeak.js    generated — each Sagittal glyph's name, and how it is said
    src/font.b64        generated — a ~12 KB subset of the Sagittal Bravura
    data/*.xlsx         the workbook the tables come from
    tools/              build and specs

Nothing in `src/data.js` is re-derived: the boundaries, commas and symbol keys are
lifted straight out of the spreadsheet, and `core.js` reproduces the Calculator
sheet's formulas including Excel's `MOD`, `ROUND` and `VLOOKUP` semantics.

## Build

    python tools/build.py                 # -> index.html and dist/artifact.html

Regenerating the data (only needed when the workbook or the font changes) requires
`openpyxl` and `fonttools`:

    python tools/dumpWorkbook.py          # xlsx  -> data/workbookDump.json
    python tools/extractData.py           # dump  -> src/data.js + src/font.b64
    python tools/extractSagispeak.py      # WinCompose + the docs -> src/sagispeak.js

The font subset is cut from `BravuraSagittalUpdate_v10.otf` in the `bravura`
folder of the `sagittal-main` monorepo, so the glyphs match the rest of Sagittal,
mina diacritics included. The Sagispeak names come from the same monorepo's
`wincompose/wincompose_{evo,revo}_sagispeak.txt`, which give the spelling that types
each glyph, and their pronunciations from the docs' own
`reference/sagispeak-key.md`, which gives the IPA; nothing about a name is invented
here. Only the regeneration steps need the monorepo — `src/font.b64` and
`src/sagispeak.js` are committed, so `tools/build.py` works from a standalone clone
of this repo.

## Specs

    node tools/coreSpec.mjs               # the maths, against the workbook itself
    node tools/primeFactorSpec.mjs        # the prime-factor tables and speller
    python tools/runInteractionSpec.py    # the UI, in headless Edge or Chrome

`coreSpec.mjs` checks every UI output cell for 59 input vectors against values
recalculated from the workbook's own formulas (`tools/oracle.py` produces
`data/expectedFromWorkbook.json` using the `formulas` package) — 10,384 cells.
`primeFactorSpec.mjs` re-derives each prime's symbol from the app's own
extreme-level tables and font subset, and pins the speller's spellings, symbol
order and cents reconciliation. `runInteractionSpec.py` drives the built page and
asserts the behaviour of the inputs, the linked ratio/vector, the collapsing
columns, the copy and pronounce buttons, the notation tabs, the diagram and the
prime-factor
section.

## How it fits into this repo

`bin/build_calculator.sh` copies the built `index.html` into `dist/calculator`,
the same way `xtras` is copied rather than bundled — there is nothing for webpack
to do with a page that already carries its own data and font. It is served at
`/calculator`.

## Credit

The spreadsheet is George Secor's and Dave Keenan's. Bravura is © Steinberg Media
Technologies GmbH under the SIL Open Font License 1.1; the subset embedded in the
page is cut from this repo's Sagittal-corrected build of it.
