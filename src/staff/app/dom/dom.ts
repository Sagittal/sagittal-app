import {downloadButton} from "./downloadButton"
import {staffCodeInput} from "./staffCodeInput"
import {staffDiv} from "./staffDiv"

const setupDom = (): void => {
    document.body.appendChild(staffCodeInput)
    document.body.appendChild(staffDiv)
    document.body.appendChild(downloadButton)
}

export {
    setupDom,
}
