import {staffDivWrapper} from "./dom"

const staffDiv = document.createElement("div")
staffDiv.style.fontFamily = "Bravura Text BB"
staffDiv.style.fontSize = "40px" // TODO: extract to styles.scss
staffDiv.style.margin = "0.7em 0"

staffDivWrapper.appendChild(staffDiv)

export {
    staffDiv,
}
