// TODO: REPO ORGANIZATION: EXTRACT STAFF CODE TO ITS OWN REPO?
//  Wait, should the core of staffCode be extracted to its own repo, so others can contribute to it?
//  It'll be npm installable... but it'll just be the part that we plug into either the app or the bbCode thing
//  The thing we'd tell people to install into phpBB is still generate from here
//  And write a README for the library (how to consume it in the way the Sagittal app currently is)
//  - Actually you’d think the bbcode script should be generated in the staffCode repo not the Sagittal app one
//  - Use GitHub releases for the by code script
//  And programmatically pull it in whenever redeploy
//  Or instead get rid of that code because I won’t count on having to do it often in future
//  - And maybe the bb code interface shouldn’t be different
//  Ie it should have an input and a div
//  So it’s not replacing (processing)
//  Just it removes the input when done
//  - Start edo script group to try consuming it
//  It should always run once upon loading
//  Forum will need to take care of styling its input not to display

import {Unicode, Width} from "./symbols"

interface StaffState {
    smartAdvanceWidth: Width,
    autoStaffWidth: Width,
    autoStaffOn: boolean,
    position: Unicode,
    clef: Clef,
}

enum Clef {
    TREBLE = "treble",
    BASS = "bass",
}

type UnicodeLiteral = string & {_UnicodeLiteralBrand: boolean}

export {
    Clef,
    StaffState,
    Width,
    UnicodeLiteral,
}
