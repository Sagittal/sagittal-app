// @ts-ignore
import SvgText from "svg-text"

const updateSvg = (text: string): void => {
    const existingSvg = document.querySelector("svg")
    existingSvg && document.body.removeChild(existingSvg)

    new SvgText({text})
}

export {
    updateSvg,
}
