const vectorizeText = require("vectorize-text")

const HEIGHT_WHICH_CAUSES_SVG_TO_MATCH_TEXT = 57
const MAX_FONT_SIZE_TO_INCREASE_MESH_DETAIL_BEFORE_IT_STARTS_FAILING_TO_RENDER = 256

// TODO: REPO ORGANIZATION: EXTRACT VECTORIZE TO GENERAL?
//  Abstract this and pull back into @sagittal/general so the JI notation bound script can use it
//  Except if I do that, then I'll be forced to import @sagittal/general into that @sagittal/staff repo
//  Which I think I might want to try to avoid

const vectorizeSvg = (text: string, svg: SVGElement): void => {
    const polygons = vectorizeText(text, {
        polygons: true,
        height: HEIGHT_WHICH_CAUSES_SVG_TO_MATCH_TEXT,
        textBaseline: "top",
        font: "Bravura Text BB",
        size: MAX_FONT_SIZE_TO_INCREASE_MESH_DETAIL_BEFORE_IT_STARTS_FAILING_TO_RENDER,
    })

    const path = [""]
    polygons.forEach((loops: string[][][]): void => {
        path.push(`<path d="`)
        loops.forEach((loop: string[][]): void => {
            const start = loop[0]
            path.push("M " + start[0] + " " + start[1])
            for (let i = 1; i < loop.length; ++i) {
                const p = loop[i]
                path.push("L " + p[0] + " " + p[1])
            }
            path.push("L " + start[0] + " " + start[1])
        })
        path.push(`" fill-rule="even-odd" stroke-width="1" fill="black"></path>`)
    })

    svg.innerHTML = path.join("")
}

export {
    vectorizeSvg,
}
