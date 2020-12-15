import {Code, Symbol} from "./types"

const CLEF_MAP: Record<Code, Symbol> = {
    /*U+E050*/[Code["tbcf"]]: {unicode: "", width: 24, description: "treble"},
    /*U+E05C*/[Code["alcf"]]: {unicode: "", width: 24, description: "alto"},
    /*U+E062*/[Code["bscf"]]: {unicode: "", width: 24, description: "bass"},
    /*U+E512*/[Code["8va"]]: {unicode: "", width: 24, description: "octave above"},
    /*U+E51C*/[Code["8va"]]: {unicode: "", width: 24, description: "octave below"},
} as Record<Code, Symbol>

export {
    CLEF_MAP,
}
