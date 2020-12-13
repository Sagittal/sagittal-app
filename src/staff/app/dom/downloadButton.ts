import {downloadSvg} from "../svg"
import {svg} from "./svg"

const downloadButton = document.createElement("button")
downloadButton.textContent = "Download image"
downloadButton.addEventListener("click", (): void => downloadSvg(svg))

// TODO: NEW FEATURE: also add a copy image button? still waiting on Dave's response

export {
    downloadButton,
}
