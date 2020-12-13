import {sp8, Uni} from "./map"

const computeUnicodeLiteral = (unicode: Uni): string => {
    let str = unicode.charCodeAt(0).toString(16).toUpperCase()
    while (str.length < 4) str = "0" + str

    return "U+" + str
}

export {
    computeUnicodeLiteral,
}
