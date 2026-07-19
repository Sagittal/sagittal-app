"""Generate src/sagispeak.js: how every glyph the key uses is named and said.

Sagispeak is Sagittal's own scheme for spelling and pronouncing its symbols.
Nothing here is derived; both halves are lifted.

The spellings come from sagittal-main/wincompose/wincompose_{evo,revo}_
sagispeak.txt, which list, for every glyph in Bravura's Sagittal range, the
Sagispeak that types it. Only the primary spellings are taken; the files also
carry a shorter alternative set (vai for pakai, dai for jakai) and a
Sagispeak-Sagitype hybrid, which are left behind. One entry per glyph is enough
because the names compose: a symbol's Sagispeak is its glyphs' names, accents
first, the way primeFactor.js already spells ",/|" mopai and "'(!(" bijanao.

The pronunciations come from the docs' reference/sagispeak-key.md, generated in
turn from the Everything Sagittal sheet, which is the only place the sounds are
written down: IPA for the two direction vowels, for each flag cluster, and for
the accents. A browser's speech voice cannot be handed IPA, so each phoneme is
respelled into an English grapheme that carries it and the name is spoken in
that spelling — "pai" is /paɪ/, so it is said "pigh" rather than rhyming with
"pay".

Like the font subset, this needs the monorepo around it; the generated
src/sagispeak.js is committed, so the build does not.
"""
import json
import re

from paths import DATA_JS, SAGISPEAK_JS, SAGISPEAK_KEY, WINCOMPOSE

PRIMARY = "(by Sagispeak)"
# The conventional accidentals are named in ordinary words, but a compose
# sequence cannot hold a space, so the files run them together and onto the
# sagittal they follow: U+E264 is "doubleflat" and Revo's U+E333, one glyph for
# both, is "paidoubleflat". Sagispeak is spoken as words, so they are put back —
# which is also what makes an Evo spelling and its Revo counterpart read alike.
WHORLS = {"doublesharp": "double sharp", "doubleflat": "double flat",
          "sharp": "sharp", "flat": "flat"}

# One phoneme, one English grapheme that says it. Longest first, since /aɪ/ and
# /dʒ/ would otherwise be read a symbol at a time.
RESPELLING = [
    ("aɪ", "igh"), ("aʊ", "ow"), ("dʒ", "j"),
    ("ɐ", "uh"), ("ə", "uh"), ("ʃ", "sh"), ("ʒ", "zh"), ("x", "kh"),
    ("i", "ee"), ("o", "oh"),
    ("p", "p"), ("b", "b"), ("t", "t"), ("k", "k"), ("f", "f"),
    ("m", "m"), ("n", "n"), ("r", "r"), ("s", "s"), ("z", "z"),
]
# English gives "ow" to /aʊ/ in "down", "now" and "cow", but to /oʊ/ in a
# handful of common words, and a voice looks a word up before it sounds it out.
# These four respellings land on one of those, so their vowel is written longer.
HOMOGRAPHS = {"tow": "taow", "row": "raow", "sow": "saow", "show": "shaow"}
# The key spells the right barb "c"; its own symbol dictionary and the
# WinCompose files both spell it "k", which is what is used here.
ALIASES = {"kai": "cai", "kao": "cao"}
# Said as themselves, not as Sagispeak.
ENGLISH = {"sharp", "flat", "double"}


def worded(name):
    """A glyph's name as the words it is said in."""
    for whorl, words in WHORLS.items():          # longest suffix first
        if name.endswith(whorl):
            core = name[:-len(whorl)]
            return f"{core} {words}" if core else words
    return name


def names(path):
    """The single-glyph sequences of one WinCompose file, as glyph -> name.

    A line reads `<Multi_key> ... : ""  UE300  # Sagittal nai`; the sequences
    that type two glyphs at once (a sagittal plus a conventional accidental)
    are skipped, since each of their glyphs is named on its own elsewhere.
    """
    found = {}
    primary = False
    for line in path.read_text(encoding="utf-8").splitlines():
        if line.startswith("#"):
            primary = line.rstrip().endswith(PRIMARY)
            continue
        if not primary or not line.startswith("<Multi_key>"):
            continue
        glyphs, comment = line.rsplit("#", 1)
        codes = [w for w in glyphs.split() if w.startswith("U") and w[1:].isalnum()]
        if len(codes) == 1:
            found[chr(int(codes[0][1:], 16))] = worded(comment.split()[-1])
    return found


def sounds(path):
    """The key page's three tables, as spelling -> IPA.

    The vowels and the accents name themselves outright. The per-symbol rows
    instead pair a stem's IPA with the two full names it makes — "nai / nao",
    "/n/" — so the direction vowel is appended here; some carry a shorter name
    with a sound of its own. Where a row offers several pronunciations, the
    first is taken. Only the leading cells are read, since the sagitype columns
    further along hold a "|" of their own and do not survive the split.
    """
    rows = []
    for line in path.read_text(encoding="utf-8").splitlines():
        cells = [c.strip().strip("`") for c in line.strip().strip("|").split("|")]
        if len(cells) > 1:
            rows.append(cells)

    def ipa(cell):
        first = re.match(r"/([^/]+)/", cell)
        return first.group(1) if first else None

    found = {cells[0]: ipa(cells[1]) for cells in rows
             if " / " not in cells[0] and ipa(cells[1])}
    for cells in rows:
        for name, sound in ((0, 1), (2, 3)):
            if len(cells) <= sound or " / " not in cells[name] or not ipa(cells[sound]):
                continue
            for full in cells[name].split(" / "):
                vowel = found[full[-2:]]
                found[full] = ipa(cells[sound]) + vowel
    return found


def respelled(ipa):
    """The IPA written back out in English graphemes, phoneme by phoneme."""
    out, rest = "", ipa
    while rest:
        for phoneme, english in RESPELLING:
            if rest.startswith(phoneme):
                out, rest = out + english, rest[len(phoneme):]
                break
        else:
            raise AssertionError(f"no respelling for /{rest[0]}/ in /{ipa}/")
    return HOMOGRAPHS.get(out, out)


def spoken(word, sound):
    """How one word of a name is said."""
    if word in ENGLISH:
        return word
    key = word if word in sound else ALIASES.get(word)
    assert key in sound, f"the key page gives no sound for {word!r}"
    return respelled(sound[key])


spellings = {}
for flavor in ("evo", "revo"):
    for glyph, name in names(WINCOMPOSE / f"wincompose_{flavor}_sagispeak.txt").items():
        assert spellings.setdefault(glyph, name) == name, (hex(ord(glyph)), name)

sound = sounds(SAGISPEAK_KEY)
assert sound.get("ai") == "aɪ" and sound.get("ao") == "aʊ", sorted(sound)[:5]

raw = DATA_JS.read_text(encoding="utf-8")
data = json.loads(raw[raw.index("{"):raw.rindex("}") + 1])
# The key table's strings are the symbol's glyphs plus the row's notehead,
# which is not a sagittal and has no Sagispeak of its own.
noteheads = set(data["noteheads"].values())
glyphs = {ch for row in data["key"].values() for ch in row[2] + row[3]
          if ch != " " and ch not in noteheads}

unnamed = sorted(f"U+{ord(ch):04X}" for ch in glyphs if ch not in spellings)
assert not unnamed, f"no Sagispeak for {', '.join(unnamed)}"
table = {}
for ch in sorted(glyphs):
    name = spellings[ch]
    say = " ".join(spoken(word, sound) for word in name.split(" "))
    table[ch] = [name, say]

with SAGISPEAK_JS.open("w", encoding="utf-8") as fh:
    fh.write("const SAG_SPEAK = ")
    json.dump(table, fh, ensure_ascii=True)
    fh.write(';\nif (typeof module !== "undefined") module.exports = SAG_SPEAK;\n')

print(f"sagispeak.js {len(table)} glyphs named and sounded")
