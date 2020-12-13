// TODO: REPO ORGANIZATION: EXTRACT STAFF CODE TO ITS OWN REPO?
//  Wait, should the core of staffCode be extracted to its own repo, so others can contribute to it?
//  It'll be npm installable... but it'll just be the part that we plug into either the app or the bbCode thing
//  The thing we'd tell people to install into phpBB is still generate from here
//  And write a README for the library (how to consume it in the way the Sagittal app currently is)

import {Uni} from "./map"

type Width = number & {_WidthBrand: boolean}

interface StaffState {
    smartAdvanceWidth: Width,
    autoStaffWidth: Width,
    autoStaffOn: boolean,
    position: Uni,
}

enum Clef {
    TREBLE = "treble",
    BASS = "bass",
}

export {
    Clef,
    StaffState,
    Width,
}
