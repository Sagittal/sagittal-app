import {Io, Px} from "@sagittal/general"
import {Code} from "../../map"

const HEIGHT_WHICH_CAUSES_SVG_TO_MATCH_TEXT: Px = 57 as Px

const INITIAL_STAFF_CODE_INPUT_VALUE = `${Code["st"]} ${Code["tbcf"]} ; ` as Io

export {
    HEIGHT_WHICH_CAUSES_SVG_TO_MATCH_TEXT,
    INITIAL_STAFF_CODE_INPUT_VALUE,
}
