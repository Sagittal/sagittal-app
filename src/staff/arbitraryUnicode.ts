import {Io} from "@sagittal/general"
import {Uni} from "./map"

// TODO: CLEAN: Probably a lot of these types & variable names can be refined now that we have Code type...
//  E.G. "userInput"... ha. sometimes it's Io, sometimes it's Code, etc.

const computeArbitraryUnicode = (userInput: Io): Uni =>
    String.fromCharCode(parseInt(userInput.replace(/^u\+(.*)/, "0x$1"))) as Uni

export {
    computeArbitraryUnicode,
}
