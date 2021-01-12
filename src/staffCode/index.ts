import {loadFontsThen, setupPackageRoot} from "staff-code"

loadFontsThen((): void => {
    const root: HTMLSpanElement = setupPackageRoot()
    document.body.appendChild(root)
})
