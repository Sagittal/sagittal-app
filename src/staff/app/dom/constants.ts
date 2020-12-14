import {Io, Px} from "@sagittal/general"
import {Code} from "../../symbols"

const HEIGHT_WHICH_CAUSES_SVG_TO_MATCH_TEXT: Px = 57 as Px

const INITIAL_STAFF_CODE_INPUT_VALUE = `${Code[Code["st"]]} ${Code[Code["tbcf"]]} ${Code[Code[";"]]} ` as Io

export {
    HEIGHT_WHICH_CAUSES_SVG_TO_MATCH_TEXT,
    INITIAL_STAFF_CODE_INPUT_VALUE,
}
