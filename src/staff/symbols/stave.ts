import {Code, Symbol} from "./types"

const MANUAL_STAVE_MAP: Record<Code, Symbol> = {
    /*U+E020*/[Code["st8"]]: {unicode: "", width: 0},
    /*U+E014*/[Code["st16"]]: {unicode: "", width: 0},
    /*U+E01A*/[Code["st24"]]: {unicode: "", width: 0},
} as Record<Code, Symbol>

const SMART_STAVE_MAP: Record<Code, Symbol> = {
    /*U+E02F*/[Code["st"]]: {unicode: "", width: 0},
    // TODO: FEATURE ADJUST: I actually took the code he wanted for stave-off here for stave-on,
    //  But now I'm proposing that it's a toggle: http://forum.sagittal.org/viewtopic.php?p=3112#p3112
    //  - This is about the ability to disable smart stave
    //  Already have a test going for it
    //  Only blocked on his thoughts about whether "!st" is better, or "nost" or "stno" or "stof"
    //  And there's also an open question (related to toggle) whether the manual staves should turn smart staves on
} as Record<Code, Symbol>

export {
    MANUAL_STAVE_MAP,
    SMART_STAVE_MAP,
}
