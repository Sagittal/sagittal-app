/*
# staffCode

The `staffCode` script converts text codes for sheet music notation elements into SMuFL unicode
characters. You can use it to type things like:

a4 nt4 c5 nt4 e5 nt4

and see a chord displayed on a staff.

This script will find all elements on the page matching the CSS selector `div.staff.unprocessed`
and convert their `staffCode` from text to unicode. A modified version of the Bravura Text font
from Steinberg MediaTechnologies GmbH, designed by Daniel Spreadbury, is used to display as sheet
music notation. This project would not have been possible without the great work done on Bravura
Text, and its precursors Bravura and SMuFL. For more information see https://www.smufl.org/fonts/.

You may add an additional class to the div to indicate the clef. This will initiate a staff with
said clef, and also cause the note position modifiers to adjust for that clef. If no clef class
is provided, no clef will be displayed, and the note position modifiers will default to treble.

staffCode assumes your site loads the BravuraTextBB font. We suggest you locate it in your
assets/fonts folder. Please do not load it from another forum's assets, for your own performance.
*/

import {replaceStaffCodeWithUnicodeBBCode} from "./replace"

document.querySelectorAll("div.staff.unprocessed").forEach(replaceStaffCodeWithUnicodeBBCode)

export {
    replaceStaffCodeWithUnicodeBBCode,
}

// TODO: I could theoretically add a script that would programmatically SFTP changes up to the site
