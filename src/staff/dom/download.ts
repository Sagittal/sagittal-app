import {saveSvg} from "../saveSvg"

const downloadButton = document.createElement("button")
downloadButton.textContent = "Download"
downloadButton.addEventListener("click", saveSvg)

export {
    downloadButton,
}
