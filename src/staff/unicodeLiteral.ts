import {Uni} from "./map"

const computeUnicodeLiteral = (unicodeWord: Uni): string => {
    let str = unicodeWord.charCodeAt(0).toString(16).toUpperCase()
    while (str.length < 4) str = "0" + str

    return "U+" + str
}

export {
    computeUnicodeLiteral,
}
