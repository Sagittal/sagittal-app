import {downloadSvg} from "../svg"
import {svg} from "./svg"

const downloadButton = document.createElement("button")
downloadButton.textContent = "Download image"
downloadButton.addEventListener("click", (): void => downloadSvg(svg))

// TODO: also add a copy image button?

export {
    downloadButton,
}
