import {isUndefined} from "@sagittal/general"
import {Code, CODE_MAP, Unicode} from "./symbols"

const computeUnicodeForCode = (code: Code): Unicode => {
    const symbol = CODE_MAP[code]

    if (isUndefined(symbol)) throw new Error(`Symbol not found for code ${code}`)

    return symbol.unicode
}

export {
    computeUnicodeForCode,
}
