type Unicode = string & {_UniBrand: boolean}

type Width = number & {_WidthBrand: boolean}

interface Symbol {
    unicode: Unicode,
    width?: Width,
    description?: string,
}

type Codeword = string & {_CodewordBrand: boolean}                  // String key; what input words become via "smarts"

type LowercaseCodeword = string & {_LowercaseCodewordBrand: boolean}// The lower case string that gets matched

enum Code {                                                         // Just a numeric registry
    ";",
    "ad1",
    "ad2",
    "ad3",
    "ad4",
    "ad5",
    "ad6",
    "ad7",
    "ad8",
    "ad9",
    "ad10",
    "ad11",
    "ad12",
    "ad13",
    "ad14",
    "ad15",
    "ad16",
    "st8",
    "st16",
    "st24",
    "st",
    "stof",
    "lgln",
    "brln",
    "brlndb",
    "tbcf",
    "alcf",
    "bscf",
    "8va",
    "8vb",
    "tm0",
    "tm1",
    "tm2",
    "tm3",
    "tm4",
    "tm5",
    "tm6",
    "tm7",
    "tm8",
    "tm9",
    "tmcm",
    "tmnm",
    "tmdn",
    "ntdb",
    "nt1",
    "nt2",
    "nt2dn",
    "nt4",
    "nt4dn",
    "nt8",
    "nt8dn",
    "nt16",
    "nt16dn",
    "nt",
    "rsdb",
    "rs1",
    "rs2",
    "rs4",
    "rs8",
    "rs16",
    "rs",
    "dt",
    "agdt",
    "ntbmst",
    "ntbm8",
    "ntbm16",
    "bm8",
    "bm16",
    "tp3",
    "br",
    "c6",
    "b5",
    "a5",
    "g5",
    "f5",
    "e5",
    "d5",
    "c5",
    "b4",
    "a4",
    "g4",
    "f4",
    "e4",
    "d4",
    "c4",
    "b3",
    "a3",
    "g3",
    "f3",
    "e3",
    "d3",
    "c3",
    "b2",
    "a2",
    "g2",
    "f2",
    "e2",
    "d2",
    "c2",
    "tbc6",
    "tbb5",
    "tba5",
    "tbg5",
    "tbf5",
    "tbe5",
    "tbd5",
    "tbc5",
    "tbb4",
    "tba4",
    "tbg4",
    "tbf4",
    "tbe4",
    "tbd4",
    "tbc4",
    "tbb3",
    "tba3",
    "bse4",
    "bsd4",
    "bsc4",
    "bsb3",
    "bsa3",
    "bsg3",
    "bsf3",
    "bse3",
    "bsd3",
    "bsc3",
    "bsb2",
    "bsa2",
    "bsg2",
    "bsf2",
    "bse2",
    "bsd2",
    "bsc2",
    "up8",
    "up7",
    "up6",
    "up5",
    "up4",
    "up3",
    "up2",
    "up1",
    "md0",
    "dn1",
    "dn2",
    "dn3",
    "dn4",
    "dn5",
    "dn6",
    "dn7",
    "dn8",
    "h",
    "n",
    "b",
    "#",
    "bb",
    "x",
    "^",
    "v",
    ".bbv",
    ".bv",
    ".nv",
    ".#v",
    ".xv",
    ".bb^",
    ".b^",
    ".n^",
    ".#^",
    ".x^",
    ".bbvv",
    ".bvv",
    ".nvv",
    ".#vv",
    ".xvv",
    ".bb^^",
    ".b^^",
    ".n^^",
    ".#^^",
    ".x^^",
    ".bbvvv",
    ".bvvv",
    ".nvvv",
    ".#vvv",
    ".xvvv",
    ".bb^^^",
    ".b^^^",
    ".n^^^",
    ".#^^^",
    ".x^^^",
    ".L",
    ".P",
    ".LL",
    ".PP",
    ".<",
    ".>",
    ".<|",
    ".>|",
    ".\\\\",
    ".//",
    ".\\",
    "./",
    ".^",
    ".v",
    ".{",
    ".}",
    ".bbt",
    ".bt",
    ".nt",
    ".#t",
    ".xt",
    ".<t",
    ".>t",
    ".\\\\\\",
    ".///",
    ".~",
    ".~~",
    ".=",
    ".bb",
    ".b",
    ".n",
    ".#",
    ".x",
    ".<b",
    ".>#",
    ">",
    "<",
    ">#",
    "<b",
    "+",
    "-",
    "|(",
    "!(",
    "/|",
    "\\!",
    "|)",
    "!)",
    "//|",
    "\\\\!",
    "/|)",
    "\\!)",
    "/|\\",
    "\\!/",
    "(|)",
    "(!)",
    "(|\\",
    "(!/",
    ")||(",
    ")!!(",
    "||)",
    "!!)",
    "||\\",
    "!!/",
    "/||)",
    "\\!!)",
    "/||\\",
    "\\!!/",
    "|||(",
    "!!!(",
    "/|||",
    "\\!!!",
    "|||)",
    "!!!)",
    "//|||",
    "\\\\!!!",
    "/|||)",
    "\\!!!)",
    "/|||\\",
    "\\!!!/",
    "(|||)",
    "(!!!)",
    "(|||\\",
    "(!!!/",
    ")X(",
    ")Y(",
    "X)",
    "Y)",
    "X\\",
    "Y/",
    "/X)",
    "\\Y)",
    "/X\\",
    "\\Y/",
    ")|(",
    ")!(",
    "~|(",
    "~!(",
    "|\\",
    "!/",
    "(|",
    "(!",
    "(|(",
    "(!(",
    "~||(",
    "~!!(",
    ")||~",
    ")!!~",
    "/||",
    "\\!!",
    "(||(",
    "(!!(",
    "//||",
    "\\\\!!",
    ")|||(",
    ")!!!(",
    "~|||(",
    "~!!!(",
    "|||\\",
    "!!!/",
    "(|||",
    "(!!!",
    "(|||(",
    "(!!!(",
    "~X(",
    "~Y(",
    ")X~",
    ")Y~",
    "/X",
    "\\Y",
    "(X(",
    "(Y(",
    "//X",
    "\\\\Y",
    "|~",
    "!~",
    ")/|",
    ")\\!",
    "/|~",
    "\\!~",
    "||~",
    "!!~",
    ")||)",
    ")!!)",
    "/||~",
    "\\!!~",
    "|||~",
    "!!!~",
    ")/|||",
    ")\\!!!",
    "/|||~",
    "\\!!!~",
    "X~",
    "Y~",
    ")X)",
    ")Y)",
    "/X~",
    "\\Y~",
    ")|",
    ")!",
    "~|",
    "~!",
    ")~|",
    ")~!",
    "~~|",
    "~~!",
    ")|~",
    ")!~",
    ")|)",
    ")!)",
    "~|)",
    "~!)",
    "~|\\",
    "~!/",
    ")//|",
    ")\\\\!",
    "(|~",
    "(!~",
    "(/|",
    "(\\!",
    ")/|\\",
    ")\\!/",
    "|\\)",
    "!/)",
    "|\\\\",
    "!//",
    ")|\\\\",
    ")!//",
    ")~||",
    ")~!!",
    "~~||",
    "~~!!",
    ")/||",
    ")\\!!",
    "(||",
    "(!!",
    "~||)",
    "~!!)",
    "~||\\",
    "~!!/",
    ")//||",
    ")\\\\!!",
    "(||~",
    "(!!~",
    ")|||",
    ")!!!",
    "~|||",
    "~!!!",
    ")~|||",
    ")~!!!",
    "~~|||",
    "~~!!!",
    ")|||~",
    ")!!!~",
    ")|||)",
    ")!!!)",
    "~|||)",
    "~!!!)",
    "~|||\\",
    "~!!!/",
    ")//|||",
    ")\\\\!!!",
    "(|||~",
    "(!!!~",
    "(/|||",
    "(\\!!!",
    ")/|||\\",
    ")\\!!!/",
    "|||\\)",
    "!!!/)",
    "|||\\\\",
    "!!!//",
    ")|||\\\\",
    ")!!!//",
    ")~X",
    ")~Y",
    "~~X",
    "~~Y",
    ")/X",
    ")\\Y",
    "(X",
    "(Y",
    "~X)",
    "~Y)",
    "~X\\",
    "~Y/",
    ")//X",
    ")\\\\Y",
    "(X~",
    "(Y~",
    "|",
    "!",
    "'",
    ".",
    "`",
    ",",
    "``",
    ",,",
    "@1",
    "l1",
    "@2",
    "l2",
    "@3",
    "l3",
    "@4",
    "l4",
    "@5",
    "l5",
    "@6",
    "l6",
    "@7",
    "l7",
    "@8",
    "l8",
    "@9",
    "l9",
    "@.",
    "l.",
}

export {
    Unicode,
    Width,
    Code,
    Symbol,
    Codeword,
    LowercaseCodeword,
}
