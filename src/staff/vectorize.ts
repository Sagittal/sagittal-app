const vectorizeText = require("vectorize-text")

const svgWrapper = document.createElement("div")

// TODO: Probably don't need to actually display the SVG once the concept is proven out

const HEIGHT_WHICH_CAUSES_SVG_TO_MATCH_TEXT = 57
const MAX_FONT_SIZE_TO_INCREASE_MESH_DETAIL_BEFORE_IT_STARTS_FAILING_TO_RENDER = 256

// TODO: abstract this and pull back into @sagittal/general so the JI notation bound script can use it
const vectorize = (text: string): void => {
    const polygons = vectorizeText(text, {
        polygons: true,
        height: HEIGHT_WHICH_CAUSES_SVG_TO_MATCH_TEXT,
        textBaseline: "top",
        font: "Bravura Text BB",
        size: MAX_FONT_SIZE_TO_INCREASE_MESH_DETAIL_BEFORE_IT_STARTS_FAILING_TO_RENDER,
    })

    const svg = ["<svg xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" width=\"4000\">"]
    polygons.forEach((loops: unknown[][][]): void => {
        svg.push("<path d=\"")
        loops.forEach((loop: unknown[][]): void => {
            const start = loop[0]
            svg.push("M " + start[0] + " " + start[1])
            for (let i = 1; i < loop.length; ++i) {
                const p = loop[i]
                svg.push("L " + p[0] + " " + p[1])
            }
            svg.push("L " + start[0] + " " + start[1])
        })
        svg.push("\" fill-rule=\"even-odd\" stroke-width=\"1\" fill=\"black\"></path>")
    })
    svg.push("</svg>")

    svgWrapper.innerHTML = svg.join("")
}

export {
    vectorize,
    svgWrapper,
}
