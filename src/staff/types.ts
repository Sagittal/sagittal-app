enum Clef {
    TREBLE = "treble",
    BASS = "bass",
}

type Uni = string & {_UniBrand: boolean}

export {
    Clef,
    Uni,
}
