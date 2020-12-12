import {sumTexts} from "@sagittal/general"
import {EMPTY_UNICODE} from "./constants"
import {Uni} from "./types"
import {sp1, sp10, sp11, sp12, sp13, sp14, sp15, sp16, sp2, sp3, sp4, sp5, sp6, sp7, sp8, sp9} from "./unicodeMap"

const BIGGEST_SPACE = 16

// TODO: CLEAN: ugh names are so bad
const SPACES_ARRAY: Uni[] = [
    EMPTY_UNICODE,
    sp1,
    sp2,
    sp3,
    sp4,
    sp5,
    sp6,
    sp7,
    sp8,
    sp9,
    sp10,
    sp11,
    sp12,
    sp13,
    sp14,
    sp15,
]

const computeSpaceUnicode = (spaces: number): Uni => {
    let remainingSpace = spaces

    let unicode = EMPTY_UNICODE
    while (remainingSpace >= BIGGEST_SPACE) {
        remainingSpace = remainingSpace - 16
        unicode = sumTexts(unicode, sp16)
    }

    return sumTexts(unicode, SPACES_ARRAY[remainingSpace])
}

export {
    computeSpaceUnicode,
}
