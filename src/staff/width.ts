import {
    agdt,
    b,
    bb,
    CLEFS,
    COMBINING_STAFF_POSITIONS,
    lgln,
    n,
    nt1,
    nt16,
    nt16dn,
    nt2,
    nt2dn,
    nt4,
    nt4dn,
    nt8,
    nt8dn,
    ntdb,
    sharp,
    smallDoubleSharp,
    STAFF_LINES,
    tm0,
    tm1,
    tm2,
    tm3,
    tm4,
    tm5,
    tm6,
    tm7,
    tm8,
    tm9,
    tmcm,
    tmdn,
    tmnm,
    Uni,
    x,
    _11LDown,
    _11LUp,
    _11MDown,
    _11MUp,
    _25SDown,
    _25SUp,
    _35LDown,
    _35LUp,
    _35MDown,
    _35MUp,
    _5CDown,
    _5CUp,
    _5v7kDown,
    _5v7kUp,
    _7CDown,
    _7CUp,
} from "./map"
import {Width} from "./types"

const DEFAULT_WIDTH = 11 as Width

// TODO: OVERHAUL: CODE VALUES INCLUDE WIDTH
//  We may well need to just include these on each key, or make it optional `code: {char: '', width?: 13}` like that
//  So that we can accept a user custom codes JSON object to merge in here too

const computeUnicodeWidth = (unicode: Uni): Width => {
    if ([...Object.values(CLEFS)].includes(unicode)) return 24 as Width
    else if ([ntdb].includes(unicode)) return 23 as Width
    // 22
    else if ([nt8, nt16].includes(unicode)) return 21 as Width
        // 20
        // 19
    // 18
    else if ([tm0, tm1, tm2, tm3, tm4, tm5, tm6, tm7, tm8, tm9, tmcm].includes(unicode)) return 17 as Width
    // 16
    else if ([bb].includes(unicode)) return 15 as Width
    else if ([_35LUp, _35LDown].includes(unicode)) return 14 as Width
    // tslint:disable-next-line:max-line-length
    else if ([lgln, nt1, nt2, nt4, nt2dn, nt4dn, nt8dn, nt16dn, x, _11LUp, _11LDown, _11MUp, _11MDown].includes(unicode)) return 13 as Width
    // 12
    else if ([_35MUp, _35MDown].includes(unicode)) return 11 as Width
    else if ([sharp, smallDoubleSharp, _25SUp, _25SDown].includes(unicode)) return 10 as Width
    else if ([b].includes(unicode)) return 9 as Width
    // 8
    else if ([n, _5v7kUp, _5v7kDown, _5CUp, _5CDown, _7CUp, _7CDown].includes(unicode)) return 7 as Width
    else if ([agdt].includes(unicode)) return 6 as Width
        // 5
        // 4
        // 3
        // 2
    // 1
    else if ([tmnm, tmdn, ...COMBINING_STAFF_POSITIONS, ...Object.values(STAFF_LINES)]) return 0 as Width

    return DEFAULT_WIDTH
}

export {
    computeUnicodeWidth,
}
