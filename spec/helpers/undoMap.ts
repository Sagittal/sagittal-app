import {BLANK, Io, isUndefined, SPACE} from "@sagittal/general"
import {Code, CODE_MAP, Uni, Unit} from "../../src/staff/map"

const CODE_MAP_ENTRIES = Object.entries(CODE_MAP) as Array<[Code, Unit]>

// TODO: use unicodeSentence and unicodeWord here and there
const undoMapFailMessage = (unicodeSentence: Uni): Io => {
    const unicodeWords = unicodeSentence.split(BLANK) as Uni[]

    const codes = unicodeWords.map((unicodeWord: Uni): Code => {
        const codeEntry = CODE_MAP_ENTRIES.find((codeEntry: [Code, Unit]): boolean => {
            const [_, unit] = codeEntry
            const {unicode} = unit

            return unicode === unicodeWord
        })

        if (isUndefined(codeEntry)) return "(unknown)" as Code

        const [code, _] = codeEntry

        return code
    })

    return `actual codes: ${codes.join(SPACE)}`
}

export {
    undoMapFailMessage,
}
