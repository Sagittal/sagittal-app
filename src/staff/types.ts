// TODO: REPO ORGANIZATION: EXTRACT STAFF CODE TO ITS OWN REPO?
//  Wait, should the core of staffCode be extracted to its own repo, so others can contribute to it?

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
