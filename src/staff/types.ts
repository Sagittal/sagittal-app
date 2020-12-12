// TODO: REPO ORGANIZATION: EXTRACT STAFF CODE TO ITS OWN REPO?
//  Wait, should the core of staffCode be extracted to its own repo, so others can contribute to it?

interface StaffState {
    smartSpace: number,
    // TODO: CLEAN: WIDTH/PIXELS
    //  Look on forum to see if there's a good word for what these units are and make a nominal type for them
    //  See: http://forum.sagittal.org/viewtopic.php?p=2952#p2952
    //  In the lookup tables, we would include for every symbol, its width in pixels (eighths of a staff space),
    //  Including any right side-bearing it might need. Then, as the script is outputting symbols,
    //  It keeps a running maximum of their widths since the last space character.
    //  And when it encounters an "sp", it converts it to an "sp<n>" where <n> is the maximum width encountered
    //  Since the last space, then it sets the running maximum back to zero.
    autoStaff: number,
    autoStaffOn: boolean,
}

enum Clef {
    TREBLE = "treble",
    BASS = "bass",
}

export {
    Clef,
    StaffState,
}
