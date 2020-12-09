// tslint:disable max-line-length

// See: ttps://w3c.github.io/smufl/gitbook/tables/extended-helmholtz-ellis-accidentals-just-intonation.html
// All EHEJIPN staffCodes start with a dot (full-stop). Unicodes are successive below.

const EHEJIPN_ACCIDENTALS = {
    ".bbv": "",        // U+E2C0
    ".bv": "",         // U+E2C1
    ".hv": "",         // U+E2C2
    ".#v": "",         // U+E2C3
    ".xv": "",         // U+E2C4
    ".bb^": "",        // U+E2C5
    ".b^": "",         // U+E2C6
    ".h^": "",         // U+E2C7
    ".#^": "",         // U+E2C8
    ".x^": "",         // U+E2C9
    ".bbvv": "",       // U+E2CA
    ".bvv": "",        // U+E2CB
    ".hvv": "",        // U+E2CC
    ".#vv": "",        // U+E2CD
    ".xvv": "",        // U+E2CE
    ".bb^^": "",       // U+E2CF
    ".b^^": "",        // U+E2D0
    ".h^^": "",        // U+E2D1
    ".#^^": "",        // U+E2D2
    ".x^^": "",        // U+E2D3
    ".bbvvv": "",      // U+E2D4
    ".bvvv": "",       // U+E2D5
    ".hvvv": "",       // U+E2D6
    ".#vvv": "",       // U+E2D7
    ".xvvv": "",       // U+E2D8
    ".bb^^^": "",      // U+E2D9
    ".b^^^": "",       // U+E2DA
    ".h^^^": "",       // U+E2DB
    ".#^^^": "",       // U+E2DC
    ".x^^^": "",       // U+E2DD
    ".l": "",          // U+E2DE           lowercase L here, but people would type it uppercase
    ".p": "",          // U+E2DF           people would type it uppercase
    ".ll": "",         // U+E2E0           lowercase LL here, but people would type them uppercase
    ".pp": "",         // U+E2E1           people would type them uppercase
    ".<": "",          // U+E2E2
    ".>": "",          // U+E2E3
    ".<|": "",         // U+E2E4
    ".>|": "",         // U+E2E5
    ".\\\\": "",       // U+E2E6
    ".//": "",         // U+E2E7
    ".\\": "",         // U+E2E8
    "./": "",          // U+E2E9
    ".^": "",          // U+E2EA
    ".v": "",          // U+E2EB
    ".-": "",          // U+E2EC
    ".+": "",          // U+E2ED
    ".{": "",          // U+E2EE
    ".}": "",          // U+E2EF
    ".bbt": "",        // U+E2F0
    ".bt": "",         // U+E2F1
    ".ht": "",         // U+E2F2
    ".#t": "",         // U+E2F3
    ".xt": "",         // U+E2F4
    ".<t": "",         // U+E2F5
    ".>t": "",         // U+E2F6
    ".\\\\\\": "",     // U+E2F7
    ".///": "",        // U+E2F8
    ".~": "",          // U+E2F9
    ".~~": "",         // U+E2FA
    ".=": "",          // U+E2FB

    // For convenience of EHEJIPN users, standard accidentals with dots at the start of their codes
    // See: https://w3c.github.io/smufl/gitbook/tables/standard-accidentals-12-edo.html
    ".bb": "",         // U+E264
    ".b": "",          // U+E260
    ".h": "",          // U+E261
    ".#": "",          // U+E262
    ".x": "",          // U+E263            Small double-sharp, not the same as "x" or "X", which is the (sagittal-compatible) large double-sharp
}

export {
    EHEJIPN_ACCIDENTALS,
}
