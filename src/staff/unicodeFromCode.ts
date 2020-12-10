import {Io} from "@sagittal/general"
import {Uni} from "./types"

// TODO: Probably a lot of these types and variable names can be refined now that we have Code type

const unicodeFromCode = (userInput: Io): Uni =>
    String.fromCharCode(parseInt(userInput.replace(/^u\+(.*)/, "0x$1"))) as Uni

export {
    unicodeFromCode,
}