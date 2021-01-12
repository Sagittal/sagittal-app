const div = document.createElement("div")
div.textContent = "(one day this could be the new home page)"
document.body.appendChild(div)

const linkToStaffCode = document.createElement("a")
linkToStaffCode.href = "/staffcode"
linkToStaffCode.style.display = "block"
linkToStaffCode.textContent = "StaffCode"
document.body.appendChild(linkToStaffCode)

const linkToXtras = document.createElement("a")
linkToXtras.href = "/xtras"
linkToStaffCode.style.display = "block"
linkToXtras.textContent = "Xtras"
document.body.appendChild(linkToXtras)
