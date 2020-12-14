import {staffState} from "./globals"
import {Code, Symbol} from "./symbols"
import {Clef} from "./types"
import {computeUnicodeForCode} from "./unicode"

const TREBLE_UNICODE = computeUnicodeForCode(Code["tbcf"])
const BASS_UNICODE = computeUnicodeForCode(Code["bscf"])

const maybeRecordSmartClef = ({unicode}: Symbol): void => {
    if (unicode === TREBLE_UNICODE) staffState.clef = Clef.TREBLE
    if (unicode === BASS_UNICODE) staffState.clef = Clef.BASS
}

export {
    maybeRecordSmartClef,
}
