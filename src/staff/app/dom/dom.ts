import {display} from "./display"
import {downloadButton} from "./downloadButton"
import {input} from "./input"
import {root} from "./root"

const setupDom = (): void => {
    document.body.appendChild(root)

    root.appendChild(input)
    root.appendChild(display)
    root.appendChild(downloadButton)
}

export {
    setupDom,
}
