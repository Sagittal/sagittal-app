import {Io} from "@sagittal/general"
import {Uni} from "./types"

const unicodeFromCode = (userInput: Io): Uni =>
    String.fromCharCode(parseInt(userInput.replace(/^u\+(.*)/, "0x$1"))) as Uni

export {
    unicodeFromCode,
}
