import {isUndefined} from "@sagittal/general"
import {Code, CODE_MAP, Uni} from "./map"

const computeUnicodeForCode = (code: Code): Uni => {
    const unit = CODE_MAP[code]

    if (isUndefined(unit)) throw new Error(`Symbol not found for code ${code}`)

    return unit.unicode
}

export {
    computeUnicodeForCode,
}
