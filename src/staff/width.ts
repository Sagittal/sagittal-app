import {isUndefined} from "@sagittal/general"
import {DEFAULT_WIDTH} from "./constants"
import {Symbol, Width} from "./symbols"

const computeSymbolWidth = ({width}: Symbol): Width =>
    isUndefined(width) ? DEFAULT_WIDTH : width

export {
    computeSymbolWidth,
}
