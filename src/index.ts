const div = document.createElement("div")
div.textContent = "(one day this could be the new home page)"
document.body.appendChild(div)

const linkToJiPitch = document.createElement("a")
linkToJiPitch.href = "/ji-pitch"
linkToJiPitch.style.display = "block"
linkToJiPitch.textContent = "JI Pitch"
document.body.appendChild(linkToJiPitch)

const linkToNotator = document.createElement("a")
linkToNotator.href = "/notator"
linkToNotator.style.display = "block"
linkToNotator.textContent = "Notator"
document.body.appendChild(linkToNotator)

const linkToXtras = document.createElement("a")
linkToXtras.href = "/xtras"
linkToXtras.style.display = "block"
linkToXtras.textContent = "Xtras"
document.body.appendChild(linkToXtras)
