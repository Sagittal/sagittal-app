import {saveSvg} from "../saveSvg"
import {downloadButtonWrapper} from "./dom"

const downloadButton = document.createElement("button")
downloadButton.textContent = "Download"
downloadButton.addEventListener("click", saveSvg)

downloadButtonWrapper.appendChild(downloadButton)
