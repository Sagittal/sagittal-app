const googleAnalyticsTag1 = document.createElement("script")
googleAnalyticsTag1.async = true
googleAnalyticsTag1.src = "https://www.googletagmanager.com/gtag/js?id=G-8DDP6TEPDF"
document.head.appendChild(googleAnalyticsTag1)

const googleAnalyticsTag2 = document.createElement("script")
googleAnalyticsTag2.innerHTML = `
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());

gtag('config', 'G-8DDP6TEPDF', {
  cookie_flags: 'max-age=7200;secure;samesite=none'
});
`
document.head.appendChild(googleAnalyticsTag2)

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
