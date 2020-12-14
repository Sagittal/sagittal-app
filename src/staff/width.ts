import {isUndefined} from "@sagittal/general"
import {Symbol, Width} from "./symbols"

const DEFAULT_WIDTH = 11 as Width

const computeSymbolWidth = ({width}: Symbol): Width =>
    isUndefined(width) ? DEFAULT_WIDTH : width

export {
    computeSymbolWidth,
}
