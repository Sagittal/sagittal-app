import {Io} from "@sagittal/general"
import {Uni, Unit} from "./map"
import {Width} from "./types"

const computeArbitraryUnit = (userInput: Io): Unit => {
    return {
        unicode: String.fromCharCode(parseInt(userInput.replace(/^u\+(.*)/, "0x$1"))) as Uni,
        width: 0 as Width, // TODO: test cover this, Dave specifically called it out
    }
}

export {
    computeArbitraryUnit,
}
