import {Io} from "@sagittal/general"
import {Symbol, Unicode} from "./symbols"
import {Width} from "./types"

const computeArbitrarySymbol = (inputWord: Io): Symbol =>
    ({
        unicode: String.fromCharCode(parseInt(inputWord.replace(/^u\+(.*)/, "0x$1"))) as Unicode,
        width: 0 as Width,
    })

export {
    computeArbitrarySymbol,
}
