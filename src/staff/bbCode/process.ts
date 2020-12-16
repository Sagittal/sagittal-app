import {translateInputToDisplay} from "../translate"

const processStaffCode = (rootDiv: Element): void => {
    if (rootDiv.classList.contains("processed")) return
    rootDiv.classList.add("processed")

    translateInputToDisplay(rootDiv)
}


export {
    processStaffCode,
}
