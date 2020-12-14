import {isUndefined} from "@sagittal/general"
import {computeCodewordFromCode} from "./codeword"
import {Code, CODE_MAP, Symbol, Unicode} from "./symbols"

const computeUnicodeForCode = (code: Code): Unicode => {
    const symbol = CODE_MAP[code]

    if (isUndefined(symbol)) throw new Error(`Symbol not found for codeword ${computeCodewordFromCode(code)}`)

    return symbol.unicode
}

const computeMapUnicodes = (map: Record<Code, Symbol>): Unicode[] =>
    Object.values(map).map(({unicode}: Symbol): Unicode => unicode)

export {
    computeUnicodeForCode,
    computeMapUnicodes,
}
