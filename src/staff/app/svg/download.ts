const DOWNLOAD_FILENAME: string = "staffCode.svg"

// TODO: BUG, LOW PRIORITY: BOUNDING BOXES IN SVG IF DOWNLOAD RIGHT AWAY
//  It doesn't affect Dave's needs for EDO staff notation; but important to solve before unveiling to wide audience

const downloadSvg = (svg: SVGElement): void => {
    const outerHTML = svg.outerHTML
    const blob = new Blob([outerHTML], {type: "image/svg+xml;charset=utf-8"})
    const URL = window.URL || window.webkitURL || window
    const blobURL = URL.createObjectURL(blob)
    const a: HTMLAnchorElement = document.createElement("a")

    a.style.display = "none"
    a.href = blobURL
    a.download = DOWNLOAD_FILENAME

    a.click()
    window.URL.revokeObjectURL(blobURL)
}

export {
    downloadSvg,
}
