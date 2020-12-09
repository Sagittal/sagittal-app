/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
# staffCode

The `staffCode` script converts text codes for sheet music notation elements into SMuFL unicode
characters. You can use it to type things like:

a4 nt4 c5 nt4 e5 nt4

and see a chord displayed on a staff.

This script will find all elements on the page matching the CSS selector `span.staff.unprocessed`
and convert their `staffCode` from text to unicode. A modified version of the Bravura Text font
from Steinberg MediaTechnologies GmbH, designed by Daniel Spreadbury, is used to display as sheet
music notation. This project would not have been possible without the great work done on Bravura
Text, and its precursors Bravura and SMuFL. For more information see https://www.smufl.org/fonts/.

You may add an additional class to the span to indicate the clef. This will initiate a staff with
said clef, and also cause the note position modifiers to adjust for that clef. If no clef class
is provided, no clef will be displayed, and the note position modifiers will default to treble.

staffCode assumes your site loads the BravuraTextBB font. We suggest you locate it in your
assets/fonts folder. Please do not load it from another forum's assets, for your own performance.
*/
Object.defineProperty(exports, "__esModule", { value: true });
exports.replaceStaffCodeWithUnicodeBBCode = void 0;
const replace_1 = __webpack_require__(1);
Object.defineProperty(exports, "replaceStaffCodeWithUnicodeBBCode", { enumerable: true, get: function () { return replace_1.replaceStaffCodeWithUnicodeBBCode; } });
document.querySelectorAll("span.staff.unprocessed").forEach(replace_1.replaceStaffCodeWithUnicodeBBCode);


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.replaceStaffCodeWithUnicodeBBCode = void 0;
const staffCodeToUnicode_1 = __webpack_require__(2);
const replaceStaffCodeWithUnicodeBBCode = (staffSpan) => {
    const clef = staffSpan.classList[2];
    staffSpan.classList.remove("unprocessed");
    const clefInitiation = clef === "bass" ? "st24 bscf sp16 st24" :
        clef === "treble" ? "st24 tbcf sp16 st24" : "";
    staffSpan.textContent = staffCodeToUnicode_1.staffCodeToUnicode(`${clefInitiation}${staffSpan.textContent}`);
};
exports.replaceStaffCodeWithUnicodeBBCode = replaceStaffCodeWithUnicodeBBCode;


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.staffCodeToUnicode = void 0;
const getUnicode_1 = __webpack_require__(3);
const types_1 = __webpack_require__(12);
const unicodeFromCode_1 = __webpack_require__(13);
const staffCodeToUnicode = (staffCode) => {
    return staffCode.toLowerCase()
        .replace(/<br>/g, " ")
        .replace(/\n/g, " ")
        .replace(/\t/g, " ")
        .split(" ")
        .map((userInput) => {
        const unicode = getUnicode_1.getUnicode(userInput, types_1.Clef.TREBLE);
        return unicode === undefined ?
            userInput.match(/^u\+/) ?
                unicodeFromCode_1.unicodeFromCode(userInput) :
                userInput :
            unicode;
    })
        .join("");
};
exports.staffCodeToUnicode = staffCodeToUnicode;


/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.getUnicode = void 0;
const combiningStaffPositions_1 = __webpack_require__(4);
const unicodeMap_1 = __webpack_require__(5);
const getUnicode = (userInput, clef) => {
    const CLEF_UNICODE_MAP = clef === "bass" ?
        combiningStaffPositions_1.BASS_COMBINING_STAFF_POSITION_UNICODE_MAP :
        combiningStaffPositions_1.TREBLE_COMBINING_STAFF_POSITION_UNICODE_MAP;
    const INPUT_TO_UNICODE_MAP = {
        ...unicodeMap_1.CLEF_AGNOSTIC_UNICODE_MAP,
        ...CLEF_UNICODE_MAP,
    };
    return INPUT_TO_UNICODE_MAP[userInput];
};
exports.getUnicode = getUnicode;


/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.TREBLE_COMBINING_STAFF_POSITION_UNICODE_MAP = exports.BASS_COMBINING_STAFF_POSITION_UNICODE_MAP = void 0;
const TREBLE_COMBINING_STAFF_POSITION_UNICODE_MAP = {
    "c6": "",
    "b5": "",
    "a5": "",
    "g5": "",
    "f5": "",
    "e5": "",
    "d5": "",
    "c5": "",
    "b4": "",
    "a4": "",
    "g4": "",
    "f4": "",
    "e4": "",
    "d4": "",
    "c4": "",
    "b3": "",
    "a3": "",
};
exports.TREBLE_COMBINING_STAFF_POSITION_UNICODE_MAP = TREBLE_COMBINING_STAFF_POSITION_UNICODE_MAP;
const BASS_COMBINING_STAFF_POSITION_UNICODE_MAP = {
    "e4": "",
    "d4": "",
    "c4": "",
    "b3": "",
    "a3": "",
    "g3": "",
    "f3": "",
    "e3": "",
    "d3": "",
    "c3": "",
    "b2": "",
    "a2": "",
    "g2": "",
    "f2": "",
    "e2": "",
    "d2": "",
    "c2": "",
};
exports.BASS_COMBINING_STAFF_POSITION_UNICODE_MAP = BASS_COMBINING_STAFF_POSITION_UNICODE_MAP;


/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.CLEF_AGNOSTIC_UNICODE_MAP = void 0;
const accidentals_1 = __webpack_require__(6);
const sp1 = " "; // U+200A           HAIR SPACE
const SPACES = {
    sp1,
    "sp2": " ",
    "sp3": "  ",
    "sp4": " ",
    "sp5": "  ",
    "sp6": " ",
    "sp7": "  ",
    "sp8": " ",
    "sp9": "  ",
    "sp10": " ",
    "sp11": "  ",
    "sp12": "　",
    "sp13": "　 ",
    "sp14": " ",
    "sp15": "  ",
    "sp16": " ",
};
const LINES = {
    "st8": "",
    "st16": "",
    "st24": "",
    "st": "",
    "lgln": "",
};
const BARS = {
    "brln": "",
    "brlndb": "",
};
const CLEFS = {
    "tbcf": "",
    "alcf": "",
    "bscf": "",
    "8va": "",
    "8vb": "",
};
const TIME_SIGNATURES = {
    "tm0": "",
    "tm1": "",
    "tm2": "",
    "tm3": "",
    "tm4": "",
    "tm5": "",
    "tm6": "",
    "tm7": "",
    "tm8": "",
    "tm9": "",
    "tmcm": "",
    "tmnm": "",
    "tmdn": "",
};
const NOTES = {
    "ntdb": "",
    "nt1": "",
    "nt2": "",
    "nt2dn": "",
    "nt4": "",
    "nt4dn": "",
    "nt8": "",
    "nt8dn": "",
    "nt16": "",
    "nt16dn": "",
};
const RESTS = {
    "rsdb": "",
    "rs1": "",
    "rs2": "",
    "rs4": "",
    "rs8": "",
    "rs16": "",
};
const BEAMS_AND_DOTS = {
    "dt": "",
    "agdt": "",
    // Beamed groups of notes
    // See: https://w3c.github.io/smufl/gitbook/tables/beamed-groups-of-notes.html
    "ntbmst": "",
    "ntbm8": "",
    "ntbm16": "",
    "bm8": "",
    "bm16": "",
    "tp3": "",
};
const CLEF_AGNOSTIC_UNICODE_MAP = {
    ...SPACES,
    ...LINES,
    ...BARS,
    ...CLEFS,
    ...NOTES,
    ...RESTS,
    ...BEAMS_AND_DOTS,
    ...TIME_SIGNATURES,
    ...accidentals_1.ACCIDENTALS,
};
exports.CLEF_AGNOSTIC_UNICODE_MAP = CLEF_AGNOSTIC_UNICODE_MAP;


/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.ACCIDENTALS = void 0;
const conventional_1 = __webpack_require__(7);
const ehejipn_1 = __webpack_require__(8);
const sagittal_1 = __webpack_require__(9);
const unconventional_1 = __webpack_require__(10);
const upsAndDowns_1 = __webpack_require__(11);
const ACCIDENTALS = {
    ...conventional_1.CONVENTIONAL_ACCIDENTALS,
    ...ehejipn_1.EHEJIPN_ACCIDENTALS,
    ...sagittal_1.SAGITTAL_ACCIDENTALS,
    ...unconventional_1.UNCONVENTIONAL_ACCIDENTALS,
    ...upsAndDowns_1.UPS_AND_DOWNS_ACCIDENTALS,
};
exports.ACCIDENTALS = ACCIDENTALS;


/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.CONVENTIONAL_ACCIDENTALS = void 0;
const h = ""; // U+E261           natural
const n = h;
const CONVENTIONAL_ACCIDENTALS = {
    h,
    n,
    "#": "",
    "b": "",
    "x": "",
    "bb": "",
};
exports.CONVENTIONAL_ACCIDENTALS = CONVENTIONAL_ACCIDENTALS;


/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// https://w3c.github.io/smufl/gitbook/tables/extended-helmholtz-ellis-accidentals-just-intonation.html
// All EHEJIPN staffCodes start with a dot (full-stop). Unicodes are successive below.
Object.defineProperty(exports, "__esModule", { value: true });
exports.EHEJIPN_ACCIDENTALS = void 0;
const EHEJIPN_ACCIDENTALS = {
    ".bbv": "",
    ".bv": "",
    ".hv": "",
    ".#v": "",
    ".xv": "",
    ".bb^": "",
    ".b^": "",
    ".h^": "",
    ".#^": "",
    ".x^": "",
    ".bbvv": "",
    ".bvv": "",
    ".hvv": "",
    ".#vv": "",
    ".xvv": "",
    ".bb^^": "",
    ".b^^": "",
    ".h^^": "",
    ".#^^": "",
    ".x^^": "",
    ".bbvvv": "",
    ".bvvv": "",
    ".hvvv": "",
    ".#vvv": "",
    ".xvvv": "",
    ".bb^^^": "",
    ".b^^^": "",
    ".h^^^": "",
    ".#^^^": "",
    ".x^^^": "",
    ".l": "",
    ".p": "",
    ".ll": "",
    ".pp": "",
    ".<": "",
    ".>": "",
    ".<|": "",
    ".>|": "",
    ".\\\\": "",
    ".//": "",
    ".\\": "",
    "./": "",
    ".^": "",
    ".v": "",
    ".-": "",
    ".+": "",
    ".{": "",
    ".}": "",
    ".bbt": "",
    ".bt": "",
    ".ht": "",
    ".#t": "",
    ".xt": "",
    ".<t": "",
    ".>t": "",
    ".\\\\\\": "",
    ".///": "",
    ".~": "",
    ".~~": "",
    ".=": "",
    // For convenience of EHEJIPN users, standard accidentals with dots at the start of their codes
    // https://w3c.github.io/smufl/gitbook/tables/standard-accidentals-12-edo.html
    ".bb": "",
    ".b": "",
    ".h": "",
    ".#": "",
    ".x": "",
};
exports.EHEJIPN_ACCIDENTALS = EHEJIPN_ACCIDENTALS;


/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.SAGITTAL_ACCIDENTALS = void 0;
const SAGITTAL_ACCIDENTALS = {
    "|(": "",
    "!(": "",
    "/|": "",
    "\\!": "",
    "|)": "",
    "!)": "",
    "//|": "",
    "\\\\!": "",
    "/|)": "",
    "\\!)": "",
    "/|\\": "",
    "\\!/": "",
    "(|)": "",
    "(!)": "",
    "(|\\": "",
    "(!/": "",
    ")||(": "",
    ")!!(": "",
    "||)": "",
    "!!)": "",
    "||\\": "",
    "!!/": "",
    "/||)": "",
    "\\!!)": "",
    "/||\\": "",
    "\\!!/": "",
    "|||(": "",
    "!!!(": "",
    "/|||": "",
    "\\!!!": "",
    "|||)": "",
    "!!!)": "",
    "//|||": "",
    "\\\\!!!": "",
    "/|||)": "",
    "\\!!!)": "",
    "/|||\\": "",
    "\\!!!/": "",
    "(|||)": "",
    "(!!!)": "",
    "(|||\\": "",
    "(!!!/": "",
    ")X(": "",
    ")Y(": "",
    "X)": "",
    "Y)": "",
    "X\\": "",
    "Y/": "",
    "/X)": "",
    "\\Y)": "",
    "/X\\": "",
    "\\Y/": "",
    ")|(": "",
    ")!(": "",
    "~|(": "",
    "~!(": "",
    "|\\": "",
    "!/": "",
    "(|": "",
    "(!": "",
    "(|(": "",
    "(!(": "",
    "~||(": "",
    "~!!(": "",
    ")||~": "",
    ")!!~": "",
    "/||": "",
    "\\!!": "",
    "(||(": "",
    "(!!(": "",
    "//||": "",
    "\\\\!!": "",
    ")|||(": "",
    ")!!!(": "",
    "~|||(": "",
    "~!!!(": "",
    "|||\\": "",
    "!!!/": "",
    "(|||": "",
    "(!!!": "",
    "(|||(": "",
    "(!!!(": "",
    "~X(": "",
    "~Y(": "",
    ")X~": "",
    ")Y~": "",
    "/X": "",
    "\\Y": "",
    "(X(": "",
    "(Y(": "",
    "//X": "",
    "\\\\Y": "",
    "|~": "",
    "!~": "",
    ")/|": "",
    ")\\!": "",
    "/|~": "",
    "\\!~": "",
    "||~": "",
    "!!~": "",
    ")||)": "",
    ")!!)": "",
    "/||~": "",
    "\\!!~": "",
    "|||~": "",
    "!!!~": "",
    ")/|||": "",
    ")\\!!!": "",
    "/|||~": "",
    "\\!!!~": "",
    "X~": "",
    "Y~": "",
    ")X)": "",
    ")Y)": "",
    "/X~": "",
    "\\Y~": "",
    ")|": "",
    ")!": "",
    "~|": "",
    "~!": "",
    ")~|": "",
    ")~!": "",
    "~~|": "",
    "~~!": "",
    ")|~": "",
    ")!~": "",
    ")|)": "",
    ")!)": "",
    "~|)": "",
    "~!)": "",
    "~|\\": "",
    "~!/": "",
    ")//|": "",
    ")\\\\!": "",
    "(|~": "",
    "(!~": "",
    "(/|": "",
    "(\\!": "",
    ")/|\\": "",
    ")\\!/": "",
    "|\\)": "",
    "!/)": "",
    "|\\\\": "",
    "!//": "",
    ")|\\\\": "",
    ")!//": "",
    ")~||": "",
    ")~!!": "",
    "~~||": "",
    "~~!!": "",
    ")/||": "",
    ")\\!!": "",
    "(||": "",
    "(!!": "",
    "~||)": "",
    "~!!)": "",
    "~||\\": "",
    "~!!/": "",
    ")//||": "",
    ")\\\\!!": "",
    "(||~": "",
    "(!!~": "",
    ")|||": "",
    ")!!!": "",
    "~|||": "",
    "~!!!": "",
    ")~|||": "",
    ")~!!!": "",
    "~~|||": "",
    "~~!!!": "",
    ")|||~": "",
    ")!!!~": "",
    ")|||)": "",
    ")!!!)": "",
    "~|||)": "",
    "~!!!)": "",
    "~|||\\": "",
    "~!!!/": "",
    ")//|||": "",
    ")\\\\!!!": "",
    "(|||~": "",
    "(!!!~": "",
    "(/|||": "",
    "(\\!!!": "",
    ")/|||\\": "",
    ")\\!!!/": "",
    "|||\\)": "",
    "!!!/)": "",
    "|||\\\\": "",
    "!!!//": "",
    ")|||\\\\": "",
    ")!!!//": "",
    ")~X": "",
    ")~Y": "",
    "~~X": "",
    "~~Y": "",
    ")/X": "",
    ")\\Y": "",
    "(X": "",
    "(Y": "",
    "~X)": "",
    "~Y)": "",
    "~X\\": "",
    "~Y/": "",
    ")//X": "",
    ")\\\\Y": "",
    "(X~": "",
    "(Y~": "",
    "|": "",
    "!": "",
    "'": "",
    ".": "",
    "`": "",
    ",": "",
    "``": "",
    ",,": "",
    "@1": "",
    "l1": "",
    "@2": "",
    "l2": "",
    "@3": "",
    "l3": "",
    "@4": "",
    "l4": "",
    "@5": "",
    "l5": "",
    "@6": "",
    "l6": "",
    "@7": "",
    "l7": "",
    "@8": "",
    "l8": "",
    "@9": "",
    "l9": "",
    "@.": "",
    "l.": "",
};
exports.SAGITTAL_ACCIDENTALS = SAGITTAL_ACCIDENTALS;


/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// https://w3c.github.io/smufl/gitbook/tables/stein-zimmermann-accidentals-24-edo.html
// https://w3c.github.io/smufl/gitbook/tables/other-accidentals.html
Object.defineProperty(exports, "__esModule", { value: true });
exports.UNCONVENTIONAL_ACCIDENTALS = void 0;
const UNCONVENTIONAL_ACCIDENTALS = {
    ">": "",
    "<": "",
    ">#": "",
    "<b": "",
    "+": "",
    "-": "",
};
exports.UNCONVENTIONAL_ACCIDENTALS = UNCONVENTIONAL_ACCIDENTALS;


/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// https://w3c.github.io/smufl/gitbook/tables/arrows-and-arrowheads.html
Object.defineProperty(exports, "__esModule", { value: true });
exports.UPS_AND_DOWNS_ACCIDENTALS = void 0;
const UPS_AND_DOWNS_ACCIDENTALS = {
    "^": "",
    "v": "",
};
exports.UPS_AND_DOWNS_ACCIDENTALS = UPS_AND_DOWNS_ACCIDENTALS;


/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.Clef = void 0;
var Clef;
(function (Clef) {
    Clef["TREBLE"] = "treble";
    Clef["BASS"] = "bass";
})(Clef || (Clef = {}));
exports.Clef = Clef;


/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.unicodeFromCode = void 0;
const unicodeFromCode = (userInput) => String.fromCharCode(parseInt(userInput.replace(/^u\+(.*)/, "0x$1")));
exports.unicodeFromCode = unicodeFromCode;


/***/ })
/******/ ]);