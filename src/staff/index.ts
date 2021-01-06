import {Io, Maybe} from "@sagittal/general"
import {loadFontsThen, setupPackageRoot} from "staff-code"

const initialText = new URLSearchParams(window.location.search).get("codes") || undefined as Maybe<Io>

loadFontsThen((): void => {
    const root: HTMLSpanElement = setupPackageRoot({initialText})
    document.body.appendChild(root)
})

// TODO: NEW FEATURE, BLOCKED: SIZE AND LINE HEIGHT CONTROLS
//  We've talked a lot about SC options like size and line height.
//  It occurs to me that as the developer of the package variant of SC,
//  I've surfaced the ability for a web developer including a SC widget in their web app to config these things himself.
//  But as an example of such a web developer, who has included it in the burgeoning Sagittal web app
//  (well, at this point, there's nothing else to it besides SC, but setting that fact aside),
//  I have simply accepted SC's defaults. It occurs to me that perhaps I should surface these options to the end user,
//  Just as we have already done for end users of the bbCode variant via bbCode attributes.
//  That is, I believe I should add a couple little inputs to adjust the size and line height.
//  I think they'd fit nicely next to the download button below the input textarea. What do you think?
//  - Blocked on Dave's thoughts
