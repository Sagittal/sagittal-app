import {controlsDiv} from "./staffCodeInput"
import {svgWrapper} from "./vectorize"

const saveSvg = (): void => {
    const svg: SVGElement | null = svgWrapper.querySelector("svg")
    if (!svg) return
    const clonedSvg: SVGElement = svg.cloneNode(true) as SVGElement

    const outerHTML = clonedSvg.outerHTML
    const blob = new Blob([outerHTML], {type: "image/svg+xml;charset=utf-8"})
    const URL = window.URL || window.webkitURL || window
    const blobURL = URL.createObjectURL(blob)
    const name: string = "staffCode.svg"
    const a: HTMLAnchorElement = document.createElement("a")

    a.style.display = "none"
    a.href = blobURL
    a.download = name

    a.click()
    window.URL.revokeObjectURL(blobURL)
}

const buttonDiv = document.createElement("div")
const button = document.createElement("button")
button.textContent = "Download"
button.addEventListener("click", saveSvg)

buttonDiv.appendChild(button)
controlsDiv.appendChild(buttonDiv)
