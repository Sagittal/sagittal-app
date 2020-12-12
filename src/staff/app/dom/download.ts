import {saveSvg} from "../../saveSvg"
import {svg} from "./svg"

const downloadButton = document.createElement("button")
downloadButton.textContent = "Download"
downloadButton.addEventListener("click", (): void => saveSvg(svg))

export {
    downloadButton,
}
