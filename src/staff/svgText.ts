// @ts-ignore
import SvgText from "svg-text"

// TODO: Unfortunately this only converts to SVG text, not really vectorizing it
//  See: http://forum.sagittal.org/viewtopic.php?p=3068#p3068
//  So people still have to have the font installed for it to work
//  So, perhaps we need to export it as an image blob (to PNG)
//  And maybe could eventually eliminate the middleman of this library

// TODO: Probably don't need to actually display the SVG on the page anymore...

const updateSvg = (text: string): void => {
    const existingSvg = document.querySelector("svg")
    existingSvg && document.body.removeChild(existingSvg)

    new SvgText({text})
}

export {
    updateSvg,
}
