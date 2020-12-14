import {Code, Symbol} from "./types"

const MANUAL_STAFF_MAP: Record<Code, Symbol> = {
    /*U+E020*/[Code["st8"]]: {unicode: "", width: 0},
    /*U+E014*/[Code["st16"]]: {unicode: "", width: 0},
    /*U+E01A*/[Code["st24"]]: {unicode: "", width: 0},
} as Record<Code, Symbol>

// TODO: actually just make it all smart. smart staff becuase you do have to turn it on actually.
//  Smart advance, and smart clefs. actually it is auto clefs. and the positioning is... hmm
const AUTO_STAFF_MAP: Record<Code, Symbol> = {
    /*U+E02F*/[Code["st"]]: {unicode: "", width: 0} // TODO: I actually took the code he wanted for staff-off here
    // Insert staff off symbol here
} as Record<Code, Symbol>

export {
    MANUAL_STAFF_MAP,
    AUTO_STAFF_MAP,
}
