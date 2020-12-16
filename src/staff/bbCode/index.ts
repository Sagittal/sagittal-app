/*
# staffCode

The `staffCode` script converts text codes for sheet music notation elements into SMuFL unicode
characters. You can use it to type things like:

a4 nt4 c5 nt4 e5 nt4

and see a chord displayed on a staff.

This script will find all elements on the page matching the CSS selector `div.staff-code`
and convert their `staffCode` from text to unicode. A modified version of the Bravura Text font
from Steinberg MediaTechnologies GmbH, designed by Daniel Spreadbury, is used to display as sheet
music notation. This project would not have been possible without the great work done on Bravura
Text, and its precursors Bravura and SMuFL. For more information see https://www.smufl.org/fonts/.
*/

import "../styles"
import {processStaffCode} from "./process"

document.querySelectorAll(".staff-code").forEach(processStaffCode)

// TODO: NON-BLOCKING LOADING FOR THE FORUM
//  Or rather, now the problem is: we need to know when a font has finished loading before doing the above replacement
//  In order to do that, either use a library like this: https://www.npmjs.com/package/jquery-fontspy
//  Or `document.fonts`: https://makandracards.com/makandra/31499-detecting-when-fonts-are-loaded-via-javascript
//  Or these: https://portalzine.de/dev/options-to-detect-when-a-font-face-has-been-loaded/
//  This: https://stackoverflow.com/questions/5680013/how-to-be-notified-once-a-web-font-has-loaded
//  Or this: https://developer.mozilla.org/en-US/docs/Web/API/FontFaceSet/load
//  `document.fonts.ready.then(()` did not work btw

// TODO: ALLOW FOR USERS TO CONFIGURE WHICH FONT IT USES
//  Probably in the HTML replacement somehow
//  Although maybe in a config file, along with custom codewords
