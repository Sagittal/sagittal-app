enum Clef {
    TREBLE = "treble",
    BASS = "bass",
}

type Uni = string & {_UniBrand: boolean}

enum Code {
    "sp1" = "sp1",
    "sp2" = "sp2",
    "sp3" = "sp3",
    "sp4" = "sp4",
    "sp5" = "sp5",
    "sp6" = "sp6",
    "sp7" = "sp7",
    "sp8" = "sp8",
    "sp9" = "sp9",
    "sp10" = "sp10",
    "sp11" = "sp11",
    "sp12" = "sp12",
    "sp13" = "sp13",
    "sp14" = "sp14",
    "sp15" = "sp15",
    "sp16" = "sp16",
    "st8" = "st8",
    "st16" = "st16",
    "st24" = "st24",
    "st" = "st",
    "lgln" = "lgln",
    "brln" = "brln",
    "brlndb" = "brlndb",
    "tbcf" = "tbcf",
    "alcf" = "alcf",
    "bscf" = "bscf",
    "8va" = "8va",
    "8vb" = "8vb",
    "tm0" = "tm0",
    "tm1" = "tm1",
    "tm2" = "tm2",
    "tm3" = "tm3",
    "tm4" = "tm4",
    "tm5" = "tm5",
    "tm6" = "tm6",
    "tm7" = "tm7",
    "tm8" = "tm8",
    "tm9" = "tm9",
    "tmcm" = "tmcm",
    "tmnm" = "tmnm",
    "tmdn" = "tmdn",
    "ntdb" = "ntdb",
    "nt1" = "nt1",
    "nt2" = "nt2",
    "nt2dn" = "nt2dn",
    "nt4" = "nt4",
    "nt4dn" = "nt4dn",
    "nt8" = "nt8",
    "nt8dn" = "nt8dn",
    "nt16" = "nt16",
    "nt16dn" = "nt16dn",
    "nt" = "nt",
    "rsdb" = "rsdb",
    "rs1" = "rs1",
    "rs2" = "rs2",
    "rs4" = "rs4",
    "rs8" = "rs8",
    "rs16" = "rs16",
    "rs" = "rs",
    "dt" = "dt",
    "agdt" = "agdt",
    "ntbmst" = "ntbmst",
    "ntbm8" = "ntbm8",
    "ntbm16" = "ntbm16",
    "bm8" = "bm8",
    "bm16" = "bm16",
    "tp3" = "tp3",
    "c6" = "c6",
    "b5" = "b5",
    "a5" = "a5",
    "g5" = "g5",
    "f5" = "f5",
    "e5" = "e5",
    "d5" = "d5",
    "c5" = "c5",
    "b4" = "b4",
    "a4" = "a4",
    "g4" = "g4",
    "f4" = "f4",
    "e4" = "e4",
    "d4" = "d4",
    "c4" = "c4",
    "b3" = "b3",
    "a3" = "a3",
    "g3" = "g3",
    "f3" = "f3",
    "e3" = "e3",
    "d3" = "d3",
    "c3" = "c3",
    "b2" = "b2",
    "a2" = "a2",
    "g2" = "g2",
    "f2" = "f2",
    "e2" = "e2",
    "d2" = "d2",
    "c2" = "c2",
    "h" = "h",
    "n" = "n",
    "b" = "b",
    "#" = "#",
    "bb" = "bb",
    "x" = "x",
    "smallDoubleSharp" = "smallDoubleSharp",
    "^" = "^",
    "v" = "v",
    ".bbv" = ".bbv",
    ".bv" = ".bv",
    ".hv" = ".hv",
    ".#v" = ".#v",
    ".xv" = ".xv",
    ".bb^" = ".bb^",
    ".b^" = ".b^",
    ".h^" = ".h^",
    ".#^" = ".#^",
    ".x^" = ".x^",
    ".bbvv" = ".bbvv",
    ".bvv" = ".bvv",
    ".hvv" = ".hvv",
    ".#vv" = ".#vv",
    ".xvv" = ".xvv",
    ".bb^^" = ".bb^^",
    ".b^^" = ".b^^",
    ".h^^" = ".h^^",
    ".#^^" = ".#^^",
    ".x^^" = ".x^^",
    ".bbvvv" = ".bbvvv",
    ".bvvv" = ".bvvv",
    ".hvvv" = ".hvvv",
    ".#vvv" = ".#vvv",
    ".xvvv" = ".xvvv",
    ".bb^^^" = ".bb^^^",
    ".b^^^" = ".b^^^",
    ".h^^^" = ".h^^^",
    ".#^^^" = ".#^^^",
    ".x^^^" = ".x^^^",
    ".l" = ".l",
    ".p" = ".p",
    ".ll" = ".ll",
    ".pp" = ".pp",
    ".<" = ".<",
    ".>" = ".>",
    ".<|" = ".<|",
    ".>|" = ".>|",
    ".\\\\" = ".\\\\",
    ".//" = ".//",
    ".\\" = ".\\",
    "./" = "./",
    ".^" = ".^",
    ".v" = ".v",
    ".{" = ".{",
    ".}" = ".}",
    ".bbt" = ".bbt",
    ".bt" = ".bt",
    ".ht" = ".ht",
    ".#t" = ".#t",
    ".xt" = ".xt",
    ".<t" = ".<t",
    ".>t" = ".>t",
    ".\\\\\\" = ".\\\\\\",
    ".///" = ".///",
    ".~" = ".~",
    ".~~" = ".~~",
    ".=" = ".=",
    ".bb" = ".bb",
    ".b" = ".b",
    ".h" = ".h",
    ".#" = ".#",
    ".x" = ".x",
    ">" = ">",
    "<" = "<",
    ">#" = ">#",
    "<b" = "<b",
    "+" = "+",
    "-" = "-",
    "|(" = "|(",
    "!(" = "!(",
    "/|" = "/|",
    "\\!" = "\\!",
    "|)" = "|)",
    "!)" = "!)",
    "//|" = "//|",
    "\\\\!" = "\\\\!",
    "/|)" = "/|)",
    "\\!)" = "\\!)",
    "/|\\" = "/|\\",
    "\\!/" = "\\!/",
    "(|)" = "(|)",
    "(!)" = "(!)",
    "(|\\" = "(|\\",
    "(!/" = "(!/",
    ")||(" = ")||(",
    ")!!(" = ")!!(",
    "||)" = "||)",
    "!!)" = "!!)",
    "||\\" = "||\\",
    "!!/" = "!!/",
    "/||)" = "/||)",
    "\\!!)" = "\\!!)",
    "/||\\" = "/||\\",
    "\\!!/" = "\\!!/",
    "|||(" = "|||(",
    "!!!(" = "!!!(",
    "/|||" = "/|||",
    "\\!!!" = "\\!!!",
    "|||)" = "|||)",
    "!!!)" = "!!!)",
    "//|||" = "//|||",
    "\\\\!!!" = "\\\\!!!",
    "/|||)" = "/|||)",
    "\\!!!)" = "\\!!!)",
    "/|||\\" = "/|||\\",
    "\\!!!/" = "\\!!!/",
    "(|||)" = "(|||)",
    "(!!!)" = "(!!!)",
    "(|||\\" = "(|||\\",
    "(!!!/" = "(!!!/",
    ")X(" = ")X(",
    ")Y(" = ")Y(",
    "X)" = "X)",
    "Y)" = "Y)",
    "X\\" = "X\\",
    "Y/" = "Y/",
    "/X)" = "/X)",
    "\\Y)" = "\\Y)",
    "/X\\" = "/X\\",
    "\\Y/" = "\\Y/",
    ")|(" = ")|(",
    ")!(" = ")!(",
    "~|(" = "~|(",
    "~!(" = "~!(",
    "|\\" = "|\\",
    "!/" = "!/",
    "(|" = "(|",
    "(!" = "(!",
    "(|(" = "(|(",
    "(!(" = "(!(",
    "~||(" = "~||(",
    "~!!(" = "~!!(",
    ")||~" = ")||~",
    ")!!~" = ")!!~",
    "/||" = "/||",
    "\\!!" = "\\!!",
    "(||(" = "(||(",
    "(!!(" = "(!!(",
    "//||" = "//||",
    "\\\\!!" = "\\\\!!",
    ")|||(" = ")|||(",
    ")!!!(" = ")!!!(",
    "~|||(" = "~|||(",
    "~!!!(" = "~!!!(",
    "|||\\" = "|||\\",
    "!!!/" = "!!!/",
    "(|||" = "(|||",
    "(!!!" = "(!!!",
    "(|||(" = "(|||(",
    "(!!!(" = "(!!!(",
    "~X(" = "~X(",
    "~Y(" = "~Y(",
    ")X~" = ")X~",
    ")Y~" = ")Y~",
    "/X" = "/X",
    "\\Y" = "\\Y",
    "(X(" = "(X(",
    "(Y(" = "(Y(",
    "//X" = "//X",
    "\\\\Y" = "\\\\Y",
    "|~" = "|~",
    "!~" = "!~",
    ")/|" = ")/|",
    ")\\!" = ")\\!",
    "/|~" = "/|~",
    "\\!~" = "\\!~",
    "||~" = "||~",
    "!!~" = "!!~",
    ")||)" = ")||)",
    ")!!)" = ")!!)",
    "/||~" = "/||~",
    "\\!!~" = "\\!!~",
    "|||~" = "|||~",
    "!!!~" = "!!!~",
    ")/|||" = ")/|||",
    ")\\!!!" = ")\\!!!",
    "/|||~" = "/|||~",
    "\\!!!~" = "\\!!!~",
    "X~" = "X~",
    "Y~" = "Y~",
    ")X)" = ")X)",
    ")Y)" = ")Y)",
    "/X~" = "/X~",
    "\\Y~" = "\\Y~",
    ")|" = ")|",
    ")!" = ")!",
    "~|" = "~|",
    "~!" = "~!",
    ")~|" = ")~|",
    ")~!" = ")~!",
    "~~|" = "~~|",
    "~~!" = "~~!",
    ")|~" = ")|~",
    ")!~" = ")!~",
    ")|)" = ")|)",
    ")!)" = ")!)",
    "~|)" = "~|)",
    "~!)" = "~!)",
    "~|\\" = "~|\\",
    "~!/" = "~!/",
    ")//|" = ")//|",
    ")\\\\!" = ")\\\\!",
    "(|~" = "(|~",
    "(!~" = "(!~",
    "(/|" = "(/|",
    "(\\!" = "(\\!",
    ")/|\\" = ")/|\\",
    ")\\!/" = ")\\!/",
    "|\\)" = "|\\)",
    "!/)" = "!/)",
    "|\\\\" = "|\\\\",
    "!//" = "!//",
    ")|\\\\" = ")|\\\\",
    ")!//" = ")!//",
    ")~||" = ")~||",
    ")~!!" = ")~!!",
    "~~||" = "~~||",
    "~~!!" = "~~!!",
    ")/||" = ")/||",
    ")\\!!" = ")\\!!",
    "(||" = "(||",
    "(!!" = "(!!",
    "~||)" = "~||)",
    "~!!)" = "~!!)",
    "~||\\" = "~||\\",
    "~!!/" = "~!!/",
    ")//||" = ")//||",
    ")\\\\!!" = ")\\\\!!",
    "(||~" = "(||~",
    "(!!~" = "(!!~",
    ")|||" = ")|||",
    ")!!!" = ")!!!",
    "~|||" = "~|||",
    "~!!!" = "~!!!",
    ")~|||" = ")~|||",
    ")~!!!" = ")~!!!",
    "~~|||" = "~~|||",
    "~~!!!" = "~~!!!",
    ")|||~" = ")|||~",
    ")!!!~" = ")!!!~",
    ")|||)" = ")|||)",
    ")!!!)" = ")!!!)",
    "~|||)" = "~|||)",
    "~!!!)" = "~!!!)",
    "~|||\\" = "~|||\\",
    "~!!!/" = "~!!!/",
    ")//|||" = ")//|||",
    ")\\\\!!!" = ")\\\\!!!",
    "(|||~" = "(|||~",
    "(!!!~" = "(!!!~",
    "(/|||" = "(/|||",
    "(\\!!!" = "(\\!!!",
    ")/|||\\" = ")/|||\\",
    ")\\!!!/" = ")\\!!!/",
    "|||\\)" = "|||\\)",
    "!!!/)" = "!!!/)",
    "|||\\\\" = "|||\\\\",
    "!!!//" = "!!!//",
    ")|||\\\\" = ")|||\\\\",
    ")!!!//" = ")!!!//",
    ")~X" = ")~X",
    ")~Y" = ")~Y",
    "~~X" = "~~X",
    "~~Y" = "~~Y",
    ")/X" = ")/X",
    ")\\Y" = ")\\Y",
    "(X" = "(X",
    "(Y" = "(Y",
    "~X)" = "~X)",
    "~Y)" = "~Y)",
    "~X\\" = "~X\\",
    "~Y/" = "~Y/",
    ")//X" = ")//X",
    ")\\\\Y" = ")\\\\Y",
    "(X~" = "(X~",
    "(Y~" = "(Y~",
    "|" = "|",
    "!" = "!",
    "'" = "'",
    "." = ".",
    "`" = "`",
    "," = ",",
    "``" = "``",
    ",," = ",,",
    "@1" = "@1",
    "l1" = "l1",
    "@2" = "@2",
    "l2" = "l2",
    "@3" = "@3",
    "l3" = "l3",
    "@4" = "@4",
    "l4" = "l4",
    "@5" = "@5",
    "l5" = "l5",
    "@6" = "@6",
    "l6" = "l6",
    "@7" = "@7",
    "l7" = "l7",
    "@8" = "@8",
    "l8" = "l8",
    "@9" = "@9",
    "l9" = "l9",
    "@." = "@.",
    "l." = "l.",
}

export {
    Clef,
    Uni,
    Code,
}
