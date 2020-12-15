import {Code, Symbol} from "../symbols"
import {Clef} from "../types"
import {computeUnicodeForCode} from "../unicode"
import {smarts} from "./globals"

const TREBLE_UNICODE = computeUnicodeForCode(Code["tbcf"])
const BASS_UNICODE = computeUnicodeForCode(Code["bscf"])

const updateSmartClef = ({unicode}: Symbol): void => {
    if (unicode === TREBLE_UNICODE) smarts.clef = Clef.TREBLE
    if (unicode === BASS_UNICODE) smarts.clef = Clef.BASS
}

export {
    updateSmartClef,
}
