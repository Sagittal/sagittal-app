// TODO: this is not great. eventually use React to have some actual control over the layout

const staffCodeInputWrapper = document.createElement("div")
const staffDivWrapper = document.createElement("div")
const downloadButtonWrapper = document.createElement("div")
document.body.appendChild(staffCodeInputWrapper)
document.body.appendChild(staffDivWrapper)
document.body.appendChild(downloadButtonWrapper)

export {
    staffCodeInputWrapper,
    staffDivWrapper,
    downloadButtonWrapper,
}
