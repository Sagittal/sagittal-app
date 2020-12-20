import {loadFontsThen, setupPackageRoot} from "staff-code"

loadFontsThen((): void => {
    const root: HTMLDivElement = setupPackageRoot()
    document.body.appendChild(root)
})
