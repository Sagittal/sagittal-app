const DOWNLOAD_FILENAME: string = "staffCode.svg"

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