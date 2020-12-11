import {staffDivWrapper} from "./dom"

const staffDiv = document.createElement("div")
staffDiv.classList.add("staff")

staffDivWrapper.appendChild(staffDiv)

export {
    staffDiv,
}
