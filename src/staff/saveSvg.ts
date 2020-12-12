const saveSvg = (svg: SVGElement): void => {
    const outerHTML = svg.outerHTML
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

export {
    saveSvg,
}
