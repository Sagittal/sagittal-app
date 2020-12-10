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
Object.defineProperty(exports, "__esModule", { value: true });
exports.replaceStaffCodeWithUnicodeBBCode = void 0;
const replace_1 = __webpack_require__(1);
Object.defineProperty(exports, "replaceStaffCodeWithUnicodeBBCode", { enumerable: true, get: function () { return replace_1.replaceStaffCodeWithUnicodeBBCode; } });
document.querySelectorAll("div.staff.unprocessed").forEach(replace_1.replaceStaffCodeWithUnicodeBBCode);
// TODO: I could theoretically add a script that would programmatically SFTP changes up to the site


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.replaceStaffCodeWithUnicodeBBCode = void 0;
const staffCodeToUnicode_1 = __webpack_require__(2);
const types_1 = __webpack_require__(5);
const BASS_CLEF_INITIATION = `${types_1.Code["st24"]} ${types_1.Code["bscf"]} ${types_1.Code["sp16"]} ${types_1.Code["st24"]}`;
const TREBLE_CLEF_INITIATION = `${types_1.Code["st24"]} ${types_1.Code["tbcf"]} ${types_1.Code["sp16"]} ${types_1.Code["st24"]}`;
const replaceStaffCodeWithUnicodeBBCode = (staffDiv) => {
    const clef = staffDiv.classList[2];
    staffDiv.classList.remove("unprocessed");
    // TODO: support the clef initiation feature on the web
    // TODO: test cover that this doesn't default to treble
    const clefInitiation = clef === types_1.Clef.BASS ? BASS_CLEF_INITIATION : clef === types_1.Clef.TREBLE ? TREBLE_CLEF_INITIATION : "";
    staffDiv.textContent = staffCodeToUnicode_1.staffCodeToUnicode(`${clefInitiation}${staffDiv.textContent}`);
};
exports.replaceStaffCodeWithUnicodeBBCode = replaceStaffCodeWithUnicodeBBCode;


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.staffCodeToUnicode = void 0;
const getUnicode_1 = __webpack_require__(3);
const types_1 = __webpack_require__(5);
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
const types_1 = __webpack_require__(5);
const unicodeMap_1 = __webpack_require__(6);
const CODES_WITH_BASS = {
    ...unicodeMap_1.CODES,
    ...combiningStaffPositions_1.BASS_COMBINING_STAFF_POSITION_UNICODE_MAP,
};
const CODES_WITH_TREBLE = {
    ...unicodeMap_1.CODES,
    ...combiningStaffPositions_1.TREBLE_COMBINING_STAFF_POSITION_UNICODE_MAP,
};
const getUnicode = (userInput, clef = types_1.Clef.TREBLE) => {
    const INPUT_TO_UNICODE_MAP = clef === types_1.Clef.BASS ? CODES_WITH_BASS : CODES_WITH_TREBLE;
    return INPUT_TO_UNICODE_MAP[userInput];
};
exports.getUnicode = getUnicode;


/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.bsf2 = exports.bsg2 = exports.bsa2 = exports.bsb2 = exports.bsc3 = exports.bsd3 = exports.bse3 = exports.bsf3 = exports.bsg3 = exports.bsa3 = exports.bsb3 = exports.bsc4 = exports.bsd4 = exports.bse4 = exports.tra3 = exports.trb3 = exports.trc4 = exports.trd4 = exports.tre4 = exports.trf4 = exports.trg4 = exports.tra4 = exports.trb4 = exports.trc5 = exports.trd5 = exports.tre5 = exports.trf5 = exports.trg5 = exports.tra5 = exports.trb5 = exports.trc6 = exports.staffPosLower8 = exports.staffPosLower7 = exports.staffPosLower6 = exports.staffPosLower5 = exports.staffPosLower4 = exports.staffPosLower3 = exports.staffPosLower2 = exports.staffPosLower1 = exports.staffPosCenter = exports.staffPosRaise1 = exports.staffPosRaise2 = exports.staffPosRaise3 = exports.staffPosRaise4 = exports.staffPosRaise5 = exports.staffPosRaise6 = exports.staffPosRaise7 = exports.staffPosRaise8 = exports.TREBLE_COMBINING_STAFF_POSITION_UNICODE_MAP = exports.BASS_COMBINING_STAFF_POSITION_UNICODE_MAP = void 0;
exports.a3 = exports.b3 = exports.c4 = exports.d4 = exports.e4 = exports.f4 = exports.g4 = exports.a4 = exports.b4 = exports.c5 = exports.d5 = exports.e5 = exports.f5 = exports.g5 = exports.a5 = exports.b5 = exports.c6 = exports.bsc2 = exports.bsd2 = exports.bse2 = void 0;
const types_1 = __webpack_require__(5);
const staffPosRaise8 = ""; // U+EB97
exports.staffPosRaise8 = staffPosRaise8;
const staffPosRaise7 = ""; // U+EB96
exports.staffPosRaise7 = staffPosRaise7;
const staffPosRaise6 = ""; // U+EB95
exports.staffPosRaise6 = staffPosRaise6;
const staffPosRaise5 = ""; // U+EB94
exports.staffPosRaise5 = staffPosRaise5;
const staffPosRaise4 = ""; // U+EB93
exports.staffPosRaise4 = staffPosRaise4;
const staffPosRaise3 = ""; // U+EB92
exports.staffPosRaise3 = staffPosRaise3;
const staffPosRaise2 = ""; // U+EB91
exports.staffPosRaise2 = staffPosRaise2;
const staffPosRaise1 = ""; // U+EB90
exports.staffPosRaise1 = staffPosRaise1;
const staffPosCenter = ""; // (blank)
exports.staffPosCenter = staffPosCenter;
const staffPosLower1 = ""; // U+EB98
exports.staffPosLower1 = staffPosLower1;
const staffPosLower2 = ""; // U+EB99
exports.staffPosLower2 = staffPosLower2;
const staffPosLower3 = ""; // U+EB9A
exports.staffPosLower3 = staffPosLower3;
const staffPosLower4 = ""; // U+EB9B
exports.staffPosLower4 = staffPosLower4;
const staffPosLower5 = ""; // U+EB9C
exports.staffPosLower5 = staffPosLower5;
const staffPosLower6 = ""; // U+EB9D
exports.staffPosLower6 = staffPosLower6;
const staffPosLower7 = ""; // U+EB9E
exports.staffPosLower7 = staffPosLower7;
const staffPosLower8 = ""; // U+EB9F
exports.staffPosLower8 = staffPosLower8;
const trc6 = staffPosRaise8;
exports.trc6 = trc6;
const trb5 = staffPosRaise7;
exports.trb5 = trb5;
const tra5 = staffPosRaise6;
exports.tra5 = tra5;
const trg5 = staffPosRaise5;
exports.trg5 = trg5;
const trf5 = staffPosRaise4;
exports.trf5 = trf5;
const tre5 = staffPosRaise3;
exports.tre5 = tre5;
const trd5 = staffPosRaise2;
exports.trd5 = trd5;
const trc5 = staffPosRaise1;
exports.trc5 = trc5;
const trb4 = staffPosCenter;
exports.trb4 = trb4;
const tra4 = staffPosLower1;
exports.tra4 = tra4;
const trg4 = staffPosLower2;
exports.trg4 = trg4;
const trf4 = staffPosLower3;
exports.trf4 = trf4;
const tre4 = staffPosLower4;
exports.tre4 = tre4;
const trd4 = staffPosLower5;
exports.trd4 = trd4;
const trc4 = staffPosLower6;
exports.trc4 = trc4;
const trb3 = staffPosLower7;
exports.trb3 = trb3;
const tra3 = staffPosLower8;
exports.tra3 = tra3;
const bse4 = staffPosRaise8;
exports.bse4 = bse4;
const bsd4 = staffPosRaise7;
exports.bsd4 = bsd4;
const bsc4 = staffPosRaise6;
exports.bsc4 = bsc4;
const bsb3 = staffPosRaise5;
exports.bsb3 = bsb3;
const bsa3 = staffPosRaise4;
exports.bsa3 = bsa3;
const bsg3 = staffPosRaise3;
exports.bsg3 = bsg3;
const bsf3 = staffPosRaise2;
exports.bsf3 = bsf3;
const bse3 = staffPosRaise1;
exports.bse3 = bse3;
const bsd3 = staffPosCenter;
exports.bsd3 = bsd3;
const bsc3 = staffPosLower1;
exports.bsc3 = bsc3;
const bsb2 = staffPosLower2;
exports.bsb2 = bsb2;
const bsa2 = staffPosLower3;
exports.bsa2 = bsa2;
const bsg2 = staffPosLower4;
exports.bsg2 = bsg2;
const bsf2 = staffPosLower5;
exports.bsf2 = bsf2;
const bse2 = staffPosLower6;
exports.bse2 = bse2;
const bsd2 = staffPosLower7;
exports.bsd2 = bsd2;
const bsc2 = staffPosLower8;
exports.bsc2 = bsc2;
const c6 = trc6;
exports.c6 = c6;
const b5 = trb5;
exports.b5 = b5;
const a5 = tra5;
exports.a5 = a5;
const g5 = trg5;
exports.g5 = g5;
const f5 = trf5;
exports.f5 = f5;
const e5 = tre5;
exports.e5 = e5;
const d5 = trd5;
exports.d5 = d5;
const c5 = trc5;
exports.c5 = c5;
const b4 = trb4;
exports.b4 = b4;
const a4 = tra4;
exports.a4 = a4;
const g4 = trg4;
exports.g4 = g4;
const f4 = trf4;
exports.f4 = f4;
const e4 = tre4;
exports.e4 = e4;
const d4 = trd4;
exports.d4 = d4;
const c4 = trc4;
exports.c4 = c4;
const b3 = trb3;
exports.b3 = b3;
const a3 = tra3;
exports.a3 = a3;
const TREBLE_COMBINING_STAFF_POSITION_UNICODE_MAP = {
    [types_1.Code["c6"]]: trc6,
    [types_1.Code["b5"]]: trb5,
    [types_1.Code["a5"]]: tra5,
    [types_1.Code["g5"]]: trg5,
    [types_1.Code["f5"]]: trf5,
    [types_1.Code["e5"]]: tre5,
    [types_1.Code["d5"]]: trd5,
    [types_1.Code["c5"]]: trc5,
    [types_1.Code["b4"]]: trb4,
    [types_1.Code["a4"]]: tra4,
    [types_1.Code["g4"]]: trg4,
    [types_1.Code["f4"]]: trf4,
    [types_1.Code["e4"]]: tre4,
    [types_1.Code["d4"]]: trd4,
    [types_1.Code["c4"]]: trc4,
    [types_1.Code["b3"]]: trb3,
    [types_1.Code["a3"]]: tra3,
};
exports.TREBLE_COMBINING_STAFF_POSITION_UNICODE_MAP = TREBLE_COMBINING_STAFF_POSITION_UNICODE_MAP;
const BASS_COMBINING_STAFF_POSITION_UNICODE_MAP = {
    [types_1.Code["e4"]]: bse4,
    [types_1.Code["d4"]]: bsd4,
    [types_1.Code["c4"]]: bsc4,
    [types_1.Code["b3"]]: bsb3,
    [types_1.Code["a3"]]: bsa3,
    [types_1.Code["g3"]]: bsg3,
    [types_1.Code["f3"]]: bsf3,
    [types_1.Code["e3"]]: bse3,
    [types_1.Code["d3"]]: bsd3,
    [types_1.Code["c3"]]: bsc3,
    [types_1.Code["b2"]]: bsb2,
    [types_1.Code["a2"]]: bsa2,
    [types_1.Code["g2"]]: bsg2,
    [types_1.Code["f2"]]: bsf2,
    [types_1.Code["e2"]]: bse2,
    [types_1.Code["d2"]]: bsd2,
    [types_1.Code["c2"]]: bsc2,
};
exports.BASS_COMBINING_STAFF_POSITION_UNICODE_MAP = BASS_COMBINING_STAFF_POSITION_UNICODE_MAP;


/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.Code = exports.Clef = void 0;
var Clef;
(function (Clef) {
    Clef["TREBLE"] = "treble";
    Clef["BASS"] = "bass";
})(Clef || (Clef = {}));
exports.Clef = Clef;
var Code;
(function (Code) {
    Code["sp1"] = "sp1";
    Code["sp2"] = "sp2";
    Code["sp3"] = "sp3";
    Code["sp4"] = "sp4";
    Code["sp5"] = "sp5";
    Code["sp6"] = "sp6";
    Code["sp7"] = "sp7";
    Code["sp8"] = "sp8";
    Code["sp9"] = "sp9";
    Code["sp10"] = "sp10";
    Code["sp11"] = "sp11";
    Code["sp12"] = "sp12";
    Code["sp13"] = "sp13";
    Code["sp14"] = "sp14";
    Code["sp15"] = "sp15";
    Code["sp16"] = "sp16";
    Code["st8"] = "st8";
    Code["st16"] = "st16";
    Code["st24"] = "st24";
    Code["st"] = "st";
    Code["lgln"] = "lgln";
    Code["brln"] = "brln";
    Code["brlndb"] = "brlndb";
    Code["tbcf"] = "tbcf";
    Code["alcf"] = "alcf";
    Code["bscf"] = "bscf";
    Code["8va"] = "8va";
    Code["8vb"] = "8vb";
    Code["tm0"] = "tm0";
    Code["tm1"] = "tm1";
    Code["tm2"] = "tm2";
    Code["tm3"] = "tm3";
    Code["tm4"] = "tm4";
    Code["tm5"] = "tm5";
    Code["tm6"] = "tm6";
    Code["tm7"] = "tm7";
    Code["tm8"] = "tm8";
    Code["tm9"] = "tm9";
    Code["tmcm"] = "tmcm";
    Code["tmnm"] = "tmnm";
    Code["tmdn"] = "tmdn";
    Code["ntdb"] = "ntdb";
    Code["nt1"] = "nt1";
    Code["nt2"] = "nt2";
    Code["nt2dn"] = "nt2dn";
    Code["nt4"] = "nt4";
    Code["nt4dn"] = "nt4dn";
    Code["nt8"] = "nt8";
    Code["nt8dn"] = "nt8dn";
    Code["nt16"] = "nt16";
    Code["nt16dn"] = "nt16dn";
    Code["nt"] = "nt";
    Code["rsdb"] = "rsdb";
    Code["rs1"] = "rs1";
    Code["rs2"] = "rs2";
    Code["rs4"] = "rs4";
    Code["rs8"] = "rs8";
    Code["rs16"] = "rs16";
    Code["rs"] = "rs";
    Code["dt"] = "dt";
    Code["agdt"] = "agdt";
    Code["ntbmst"] = "ntbmst";
    Code["ntbm8"] = "ntbm8";
    Code["ntbm16"] = "ntbm16";
    Code["bm8"] = "bm8";
    Code["bm16"] = "bm16";
    Code["tp3"] = "tp3";
    Code["c6"] = "c6";
    Code["b5"] = "b5";
    Code["a5"] = "a5";
    Code["g5"] = "g5";
    Code["f5"] = "f5";
    Code["e5"] = "e5";
    Code["d5"] = "d5";
    Code["c5"] = "c5";
    Code["b4"] = "b4";
    Code["a4"] = "a4";
    Code["g4"] = "g4";
    Code["f4"] = "f4";
    Code["e4"] = "e4";
    Code["d4"] = "d4";
    Code["c4"] = "c4";
    Code["b3"] = "b3";
    Code["a3"] = "a3";
    Code["g3"] = "g3";
    Code["f3"] = "f3";
    Code["e3"] = "e3";
    Code["d3"] = "d3";
    Code["c3"] = "c3";
    Code["b2"] = "b2";
    Code["a2"] = "a2";
    Code["g2"] = "g2";
    Code["f2"] = "f2";
    Code["e2"] = "e2";
    Code["d2"] = "d2";
    Code["c2"] = "c2";
    Code["h"] = "h";
    Code["n"] = "n";
    Code["b"] = "b";
    Code["#"] = "#";
    Code["bb"] = "bb";
    Code["x"] = "x";
    Code["smallDoubleSharp"] = "smallDoubleSharp";
    Code["^"] = "^";
    Code["v"] = "v";
    Code[".bbv"] = ".bbv";
    Code[".bv"] = ".bv";
    Code[".nv"] = ".nv";
    Code[".#v"] = ".#v";
    Code[".xv"] = ".xv";
    Code[".bb^"] = ".bb^";
    Code[".b^"] = ".b^";
    Code[".n^"] = ".n^";
    Code[".#^"] = ".#^";
    Code[".x^"] = ".x^";
    Code[".bbvv"] = ".bbvv";
    Code[".bvv"] = ".bvv";
    Code[".nvv"] = ".nvv";
    Code[".#vv"] = ".#vv";
    Code[".xvv"] = ".xvv";
    Code[".bb^^"] = ".bb^^";
    Code[".b^^"] = ".b^^";
    Code[".n^^"] = ".n^^";
    Code[".#^^"] = ".#^^";
    Code[".x^^"] = ".x^^";
    Code[".bbvvv"] = ".bbvvv";
    Code[".bvvv"] = ".bvvv";
    Code[".nvvv"] = ".nvvv";
    Code[".#vvv"] = ".#vvv";
    Code[".xvvv"] = ".xvvv";
    Code[".bb^^^"] = ".bb^^^";
    Code[".b^^^"] = ".b^^^";
    Code[".n^^^"] = ".n^^^";
    Code[".#^^^"] = ".#^^^";
    Code[".x^^^"] = ".x^^^";
    Code[".l"] = ".l";
    Code[".p"] = ".p";
    Code[".ll"] = ".ll";
    Code[".pp"] = ".pp";
    Code[".<"] = ".<";
    Code[".>"] = ".>";
    Code[".<|"] = ".<|";
    Code[".>|"] = ".>|";
    Code[".\\\\"] = ".\\\\";
    Code[".//"] = ".//";
    Code[".\\"] = ".\\";
    Code["./"] = "./";
    Code[".^"] = ".^";
    Code[".v"] = ".v";
    Code[".{"] = ".{";
    Code[".}"] = ".}";
    Code[".bbt"] = ".bbt";
    Code[".bt"] = ".bt";
    Code[".nt"] = ".nt";
    Code[".#t"] = ".#t";
    Code[".xt"] = ".xt";
    Code[".<t"] = ".<t";
    Code[".>t"] = ".>t";
    Code[".\\\\\\"] = ".\\\\\\";
    Code[".///"] = ".///";
    Code[".~"] = ".~";
    Code[".~~"] = ".~~";
    Code[".="] = ".=";
    Code[".bb"] = ".bb";
    Code[".b"] = ".b";
    Code[".n"] = ".n";
    Code[".#"] = ".#";
    Code[".x"] = ".x";
    Code[".<b"] = ".<b";
    Code[".>#"] = ">#";
    Code[">"] = ">";
    Code["<"] = "<";
    Code[">#"] = ">#";
    Code["<b"] = "<b";
    Code["+"] = "+";
    Code["-"] = "-";
    Code["|("] = "|(";
    Code["!("] = "!(";
    Code["/|"] = "/|";
    Code["\\!"] = "\\!";
    Code["|)"] = "|)";
    Code["!)"] = "!)";
    Code["//|"] = "//|";
    Code["\\\\!"] = "\\\\!";
    Code["/|)"] = "/|)";
    Code["\\!)"] = "\\!)";
    Code["/|\\"] = "/|\\";
    Code["\\!/"] = "\\!/";
    Code["(|)"] = "(|)";
    Code["(!)"] = "(!)";
    Code["(|\\"] = "(|\\";
    Code["(!/"] = "(!/";
    Code[")||("] = ")||(";
    Code[")!!("] = ")!!(";
    Code["||)"] = "||)";
    Code["!!)"] = "!!)";
    Code["||\\"] = "||\\";
    Code["!!/"] = "!!/";
    Code["/||)"] = "/||)";
    Code["\\!!)"] = "\\!!)";
    Code["/||\\"] = "/||\\";
    Code["\\!!/"] = "\\!!/";
    Code["|||("] = "|||(";
    Code["!!!("] = "!!!(";
    Code["/|||"] = "/|||";
    Code["\\!!!"] = "\\!!!";
    Code["|||)"] = "|||)";
    Code["!!!)"] = "!!!)";
    Code["//|||"] = "//|||";
    Code["\\\\!!!"] = "\\\\!!!";
    Code["/|||)"] = "/|||)";
    Code["\\!!!)"] = "\\!!!)";
    Code["/|||\\"] = "/|||\\";
    Code["\\!!!/"] = "\\!!!/";
    Code["(|||)"] = "(|||)";
    Code["(!!!)"] = "(!!!)";
    Code["(|||\\"] = "(|||\\";
    Code["(!!!/"] = "(!!!/";
    Code[")X("] = ")X(";
    Code[")Y("] = ")Y(";
    Code["X)"] = "X)";
    Code["Y)"] = "Y)";
    Code["X\\"] = "X\\";
    Code["Y/"] = "Y/";
    Code["/X)"] = "/X)";
    Code["\\Y)"] = "\\Y)";
    Code["/X\\"] = "/X\\";
    Code["\\Y/"] = "\\Y/";
    Code[")|("] = ")|(";
    Code[")!("] = ")!(";
    Code["~|("] = "~|(";
    Code["~!("] = "~!(";
    Code["|\\"] = "|\\";
    Code["!/"] = "!/";
    Code["(|"] = "(|";
    Code["(!"] = "(!";
    Code["(|("] = "(|(";
    Code["(!("] = "(!(";
    Code["~||("] = "~||(";
    Code["~!!("] = "~!!(";
    Code[")||~"] = ")||~";
    Code[")!!~"] = ")!!~";
    Code["/||"] = "/||";
    Code["\\!!"] = "\\!!";
    Code["(||("] = "(||(";
    Code["(!!("] = "(!!(";
    Code["//||"] = "//||";
    Code["\\\\!!"] = "\\\\!!";
    Code[")|||("] = ")|||(";
    Code[")!!!("] = ")!!!(";
    Code["~|||("] = "~|||(";
    Code["~!!!("] = "~!!!(";
    Code["|||\\"] = "|||\\";
    Code["!!!/"] = "!!!/";
    Code["(|||"] = "(|||";
    Code["(!!!"] = "(!!!";
    Code["(|||("] = "(|||(";
    Code["(!!!("] = "(!!!(";
    Code["~X("] = "~X(";
    Code["~Y("] = "~Y(";
    Code[")X~"] = ")X~";
    Code[")Y~"] = ")Y~";
    Code["/X"] = "/X";
    Code["\\Y"] = "\\Y";
    Code["(X("] = "(X(";
    Code["(Y("] = "(Y(";
    Code["//X"] = "//X";
    Code["\\\\Y"] = "\\\\Y";
    Code["|~"] = "|~";
    Code["!~"] = "!~";
    Code[")/|"] = ")/|";
    Code[")\\!"] = ")\\!";
    Code["/|~"] = "/|~";
    Code["\\!~"] = "\\!~";
    Code["||~"] = "||~";
    Code["!!~"] = "!!~";
    Code[")||)"] = ")||)";
    Code[")!!)"] = ")!!)";
    Code["/||~"] = "/||~";
    Code["\\!!~"] = "\\!!~";
    Code["|||~"] = "|||~";
    Code["!!!~"] = "!!!~";
    Code[")/|||"] = ")/|||";
    Code[")\\!!!"] = ")\\!!!";
    Code["/|||~"] = "/|||~";
    Code["\\!!!~"] = "\\!!!~";
    Code["X~"] = "X~";
    Code["Y~"] = "Y~";
    Code[")X)"] = ")X)";
    Code[")Y)"] = ")Y)";
    Code["/X~"] = "/X~";
    Code["\\Y~"] = "\\Y~";
    Code[")|"] = ")|";
    Code[")!"] = ")!";
    Code["~|"] = "~|";
    Code["~!"] = "~!";
    Code[")~|"] = ")~|";
    Code[")~!"] = ")~!";
    Code["~~|"] = "~~|";
    Code["~~!"] = "~~!";
    Code[")|~"] = ")|~";
    Code[")!~"] = ")!~";
    Code[")|)"] = ")|)";
    Code[")!)"] = ")!)";
    Code["~|)"] = "~|)";
    Code["~!)"] = "~!)";
    Code["~|\\"] = "~|\\";
    Code["~!/"] = "~!/";
    Code[")//|"] = ")//|";
    Code[")\\\\!"] = ")\\\\!";
    Code["(|~"] = "(|~";
    Code["(!~"] = "(!~";
    Code["(/|"] = "(/|";
    Code["(\\!"] = "(\\!";
    Code[")/|\\"] = ")/|\\";
    Code[")\\!/"] = ")\\!/";
    Code["|\\)"] = "|\\)";
    Code["!/)"] = "!/)";
    Code["|\\\\"] = "|\\\\";
    Code["!//"] = "!//";
    Code[")|\\\\"] = ")|\\\\";
    Code[")!//"] = ")!//";
    Code[")~||"] = ")~||";
    Code[")~!!"] = ")~!!";
    Code["~~||"] = "~~||";
    Code["~~!!"] = "~~!!";
    Code[")/||"] = ")/||";
    Code[")\\!!"] = ")\\!!";
    Code["(||"] = "(||";
    Code["(!!"] = "(!!";
    Code["~||)"] = "~||)";
    Code["~!!)"] = "~!!)";
    Code["~||\\"] = "~||\\";
    Code["~!!/"] = "~!!/";
    Code[")//||"] = ")//||";
    Code[")\\\\!!"] = ")\\\\!!";
    Code["(||~"] = "(||~";
    Code["(!!~"] = "(!!~";
    Code[")|||"] = ")|||";
    Code[")!!!"] = ")!!!";
    Code["~|||"] = "~|||";
    Code["~!!!"] = "~!!!";
    Code[")~|||"] = ")~|||";
    Code[")~!!!"] = ")~!!!";
    Code["~~|||"] = "~~|||";
    Code["~~!!!"] = "~~!!!";
    Code[")|||~"] = ")|||~";
    Code[")!!!~"] = ")!!!~";
    Code[")|||)"] = ")|||)";
    Code[")!!!)"] = ")!!!)";
    Code["~|||)"] = "~|||)";
    Code["~!!!)"] = "~!!!)";
    Code["~|||\\"] = "~|||\\";
    Code["~!!!/"] = "~!!!/";
    Code[")//|||"] = ")//|||";
    Code[")\\\\!!!"] = ")\\\\!!!";
    Code["(|||~"] = "(|||~";
    Code["(!!!~"] = "(!!!~";
    Code["(/|||"] = "(/|||";
    Code["(\\!!!"] = "(\\!!!";
    Code[")/|||\\"] = ")/|||\\";
    Code[")\\!!!/"] = ")\\!!!/";
    Code["|||\\)"] = "|||\\)";
    Code["!!!/)"] = "!!!/)";
    Code["|||\\\\"] = "|||\\\\";
    Code["!!!//"] = "!!!//";
    Code[")|||\\\\"] = ")|||\\\\";
    Code[")!!!//"] = ")!!!//";
    Code[")~X"] = ")~X";
    Code[")~Y"] = ")~Y";
    Code["~~X"] = "~~X";
    Code["~~Y"] = "~~Y";
    Code[")/X"] = ")/X";
    Code[")\\Y"] = ")\\Y";
    Code["(X"] = "(X";
    Code["(Y"] = "(Y";
    Code["~X)"] = "~X)";
    Code["~Y)"] = "~Y)";
    Code["~X\\"] = "~X\\";
    Code["~Y/"] = "~Y/";
    Code[")//X"] = ")//X";
    Code[")\\\\Y"] = ")\\\\Y";
    Code["(X~"] = "(X~";
    Code["(Y~"] = "(Y~";
    Code["|"] = "|";
    Code["!"] = "!";
    Code["'"] = "'";
    Code["."] = ".";
    Code["`"] = "`";
    Code[","] = ",";
    Code["``"] = "``";
    Code[",,"] = ",,";
    Code["@1"] = "@1";
    Code["l1"] = "l1";
    Code["@2"] = "@2";
    Code["l2"] = "l2";
    Code["@3"] = "@3";
    Code["l3"] = "l3";
    Code["@4"] = "@4";
    Code["l4"] = "l4";
    Code["@5"] = "@5";
    Code["l5"] = "l5";
    Code["@6"] = "@6";
    Code["l6"] = "l6";
    Code["@7"] = "@7";
    Code["l7"] = "l7";
    Code["@8"] = "@8";
    Code["l8"] = "l8";
    Code["@9"] = "@9";
    Code["l9"] = "l9";
    Code["@."] = "@.";
    Code["l."] = "l.";
})(Code || (Code = {}));
exports.Code = Code;


/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.nt2dn = exports.nt2 = exports.nt1 = exports.ntdb = exports.TIME_SIGNATURES = exports.tmdn = exports.tmnm = exports.tmcm = exports.tm9 = exports.tm8 = exports.tm7 = exports.tm6 = exports.tm5 = exports.tm4 = exports.tm3 = exports.tm2 = exports.tm1 = exports.tm0 = exports.CLEFS = exports._8vb = exports._8va = exports.bscf = exports.alcf = exports.tbcf = exports.BARS = exports.brlndb = exports.brln = exports.LINES = exports.lgln = exports.st = exports.st24 = exports.st16 = exports.st8 = exports.SPACES = exports.sp16 = exports.sp15 = exports.sp14 = exports.sp13 = exports.sp12 = exports.sp11 = exports.sp10 = exports.sp9 = exports.sp8 = exports.sp7 = exports.sp6 = exports.sp5 = exports.sp4 = exports.sp3 = exports.sp2 = exports.sp1 = void 0;
exports.CODES = exports.BEAMED_GROUPS_OF_NOTES = exports.tp3 = exports.bm16 = exports.bm8 = exports.ntbm16 = exports.ntbm8 = exports.ntbmst = exports.DOTS = exports.agdt = exports.dt = exports.RESTS = exports.rs = exports.rs16 = exports.rs8 = exports.rs4 = exports.rs2 = exports.rs1 = exports.rsdb = exports.NOTES = exports.nt = exports.nt16dn = exports.nt16 = exports.nt8dn = exports.nt8 = exports.nt4dn = exports.nt4 = void 0;
const accidentals_1 = __webpack_require__(7);
const types_1 = __webpack_require__(5);
const sp1 = " "; // U+200A                   HAIR SPACE
exports.sp1 = sp1;
const sp2 = " "; // U+2009                   THIN SPACE
exports.sp2 = sp2;
const sp3 = "  "; // U+2009 U+200A
exports.sp3 = sp3;
const sp4 = " "; // U+2005                   FOUR-PER-EM SPACE
exports.sp4 = sp4;
const sp5 = "  "; // U+2005 U+200A
exports.sp5 = sp5;
const sp6 = " "; // U+2004                   THREE-PER-EM SPACE
exports.sp6 = sp6;
const sp7 = "  "; // U+2004 U+200A
exports.sp7 = sp7;
const sp8 = " "; // U+2002                   EN SPACE
exports.sp8 = sp8;
const sp9 = "  "; // U+2002 U+200A
exports.sp9 = sp9;
const sp10 = " "; // U+2008                   PUNCTUATION SPACE
exports.sp10 = sp10;
const sp11 = "  "; // U+2008 U+200A
exports.sp11 = sp11;
const sp12 = "　"; // U+3000                   IDEOGRAPHIC SPACE
exports.sp12 = sp12;
const sp13 = "　 "; // U+3000 U+200A
exports.sp13 = sp13;
const sp14 = "　 "; // U+3000 U+2009 *
exports.sp14 = sp14;
const sp15 = "　  "; // U+3000 U+2009 U+200A *
exports.sp15 = sp15;
const sp16 = " "; // U+2003                   EM SPACE
exports.sp16 = sp16;
// * U+2001 EM QUAD, our desired sp14, is not in the font yet. Once it is, these should be replaced.
const SPACES = {
    [types_1.Code["sp1"]]: sp1,
    [types_1.Code["sp2"]]: sp2,
    [types_1.Code["sp3"]]: sp3,
    [types_1.Code["sp4"]]: sp4,
    [types_1.Code["sp5"]]: sp5,
    [types_1.Code["sp6"]]: sp6,
    [types_1.Code["sp7"]]: sp7,
    [types_1.Code["sp8"]]: sp8,
    [types_1.Code["sp9"]]: sp9,
    [types_1.Code["sp10"]]: sp10,
    [types_1.Code["sp11"]]: sp11,
    [types_1.Code["sp12"]]: sp12,
    [types_1.Code["sp13"]]: sp13,
    [types_1.Code["sp14"]]: sp14,
    [types_1.Code["sp15"]]: sp15,
    [types_1.Code["sp16"]]: sp16,
};
exports.SPACES = SPACES;
const st8 = ""; // U+E020
exports.st8 = st8;
const st16 = ""; // U+E014
exports.st16 = st16;
const st24 = ""; // U+E01A
exports.st24 = st24;
const st = st24;
exports.st = st;
const lgln = ""; // U+E022    leger line
exports.lgln = lgln;
const LINES = {
    [types_1.Code["st8"]]: st8,
    [types_1.Code["st16"]]: st16,
    [types_1.Code["st24"]]: st24,
    [types_1.Code["st"]]: st,
    [types_1.Code["lgln"]]: lgln,
};
exports.LINES = LINES;
const brln = ""; // U+E030   bar line (single)
exports.brln = brln;
const brlndb = ""; // U+E031   bar line double
exports.brlndb = brlndb;
const BARS = {
    [types_1.Code["brln"]]: brln,
    [types_1.Code["brlndb"]]: brlndb,
};
exports.BARS = BARS;
const tbcf = ""; // U+E050    treble
exports.tbcf = tbcf;
const alcf = ""; // U+E05C    alto
exports.alcf = alcf;
const bscf = ""; // U+E062    bass
exports.bscf = bscf;
const _8va = ""; // U+E512    octave above
exports._8va = _8va;
const _8vb = ""; // U+E51C    octave below
exports._8vb = _8vb;
const CLEFS = {
    [types_1.Code["tbcf"]]: tbcf,
    [types_1.Code["alcf"]]: alcf,
    [types_1.Code["bscf"]]: bscf,
    [types_1.Code["8va"]]: _8va,
    [types_1.Code["8va"]]: _8vb,
};
exports.CLEFS = CLEFS;
const tm0 = ""; // U+E080   time signature digit 0
exports.tm0 = tm0;
const tm1 = ""; // U+E081   time signature digit 1
exports.tm1 = tm1;
const tm2 = ""; // U+E082   time signature digit 2
exports.tm2 = tm2;
const tm3 = ""; // U+E083   time signature digit 3
exports.tm3 = tm3;
const tm4 = ""; // U+E084   time signature digit 4
exports.tm4 = tm4;
const tm5 = ""; // U+E085   time signature digit 5
exports.tm5 = tm5;
const tm6 = ""; // U+E086   time signature digit 6
exports.tm6 = tm6;
const tm7 = ""; // U+E087   time signature digit 7
exports.tm7 = tm7;
const tm8 = ""; // U+E088   time signature digit 8
exports.tm8 = tm8;
const tm9 = ""; // U+E089   time signature digit 9
exports.tm9 = tm9;
const tmcm = ""; // U+E08A   common time
exports.tmcm = tmcm;
const tmnm = ""; // U+E09E   time signature combining numerator position
exports.tmnm = tmnm;
const tmdn = ""; // U+E09F   time signature combining denominator position
exports.tmdn = tmdn;
const TIME_SIGNATURES = {
    [types_1.Code["tm0"]]: tm0,
    [types_1.Code["tm1"]]: tm1,
    [types_1.Code["tm2"]]: tm2,
    [types_1.Code["tm3"]]: tm3,
    [types_1.Code["tm4"]]: tm4,
    [types_1.Code["tm5"]]: tm5,
    [types_1.Code["tm6"]]: tm6,
    [types_1.Code["tm7"]]: tm7,
    [types_1.Code["tm8"]]: tm8,
    [types_1.Code["tm9"]]: tm9,
    [types_1.Code["tmcm"]]: tmcm,
    [types_1.Code["tmnm"]]: tmnm,
    [types_1.Code["tmdn"]]: tmdn,
};
exports.TIME_SIGNATURES = TIME_SIGNATURES;
const ntdb = ""; // U+E1D0    double whole note
exports.ntdb = ntdb;
const nt1 = ""; // U+E1D2    whole note
exports.nt1 = nt1;
const nt2 = ""; // U+E1D3    half note stem up
exports.nt2 = nt2;
const nt2dn = ""; // U+E1D4    half note stem down
exports.nt2dn = nt2dn;
const nt4 = ""; // U+E1D5    quarter note stem up
exports.nt4 = nt4;
const nt4dn = ""; // U+E1D6    quarter note stem down
exports.nt4dn = nt4dn;
const nt8 = ""; // U+E1D7    quarter note stem up
exports.nt8 = nt8;
const nt8dn = ""; // U+E1D8    quarter note stem down
exports.nt8dn = nt8dn;
const nt16 = ""; // U+E1D9    sixteenth note stem up
exports.nt16 = nt16;
const nt16dn = ""; // U+E1DA    sixteenth note stem down
exports.nt16dn = nt16dn;
const nt = nt4;
exports.nt = nt;
const NOTES = {
    [types_1.Code["ntdb"]]: ntdb,
    [types_1.Code["nt1"]]: nt1,
    [types_1.Code["nt2"]]: nt2,
    [types_1.Code["nt2dn"]]: nt2dn,
    [types_1.Code["nt4"]]: nt4,
    [types_1.Code["nt4dn"]]: nt4dn,
    [types_1.Code["nt8"]]: nt8,
    [types_1.Code["nt8dn"]]: nt8dn,
    [types_1.Code["nt16"]]: nt16,
    [types_1.Code["nt16dn"]]: nt16dn,
    [types_1.Code["nt"]]: nt,
};
exports.NOTES = NOTES;
const rsdb = ""; // U+E4E2   double whole rest
exports.rsdb = rsdb;
const rs1 = ""; // U+E4E3   whole rest
exports.rs1 = rs1;
const rs2 = ""; // U+E4E4   half rest
exports.rs2 = rs2;
const rs4 = ""; // U+E4E5   quarter rest
exports.rs4 = rs4;
const rs8 = ""; // U+E4E6   eighth rest
exports.rs8 = rs8;
const rs16 = ""; // U+E4E7   sixteenth rest
exports.rs16 = rs16;
const rs = rs4;
exports.rs = rs;
const RESTS = {
    [types_1.Code["rsdb"]]: rsdb,
    [types_1.Code["rs1"]]: rs1,
    [types_1.Code["rs2"]]: rs2,
    [types_1.Code["rs4"]]: rs4,
    [types_1.Code["rs8"]]: rs8,
    [types_1.Code["rs16"]]: rs16,
    [types_1.Code["rs"]]: rs,
};
exports.RESTS = RESTS;
const dt = ""; // U+E1E7    augmentation dot
exports.dt = dt;
const agdt = dt;
exports.agdt = agdt;
const DOTS = {
    [types_1.Code["dt"]]: dt,
    [types_1.Code["agdt"]]: agdt,
};
exports.DOTS = DOTS;
// See: https://w3c.github.io/smufl/gitbook/tables/beamed-groups-of-notes.html
const ntbmst = ""; // U+E1F0   note for start of any beam (short stem)
exports.ntbmst = ntbmst;
const ntbm8 = ""; // U+E1F2   note for end of eighth beam, and possible continuation of any beam (short stem)
exports.ntbm8 = ntbm8;
const ntbm16 = ""; // U+E1F4   note for end of 16th beam, and possible continuation of any beam (short stem)
exports.ntbm16 = ntbm16;
const bm8 = ""; // U+E1F7   eighth beam continuation (for short stems)
exports.bm8 = bm8;
const bm16 = ""; // U+E1F9   sixteenth beam continuation (for short stems)
exports.bm16 = bm16;
const tp3 = ""; // U+E1FF   tuplet digit 3 (for short stems)
exports.tp3 = tp3;
const BEAMED_GROUPS_OF_NOTES = {
    [types_1.Code["ntbmst"]]: ntbmst,
    [types_1.Code["ntbm8"]]: ntbm8,
    [types_1.Code["ntbm16"]]: ntbm16,
    [types_1.Code["bm8"]]: bm8,
    [types_1.Code["bm16"]]: bm16,
    [types_1.Code["tp3"]]: tp3,
};
exports.BEAMED_GROUPS_OF_NOTES = BEAMED_GROUPS_OF_NOTES;
const CODES = {
    ...SPACES,
    ...LINES,
    ...BARS,
    ...CLEFS,
    ...NOTES,
    ...RESTS,
    ...DOTS,
    ...BEAMED_GROUPS_OF_NOTES,
    ...TIME_SIGNATURES,
    ...accidentals_1.ACCIDENTALS,
};
exports.CODES = CODES;


/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.ACCIDENTALS = void 0;
const conventional_1 = __webpack_require__(8);
const ehejipn_1 = __webpack_require__(9);
const sagittal_1 = __webpack_require__(11);
const unconventional_1 = __webpack_require__(10);
const upsAndDowns_1 = __webpack_require__(12);
const ACCIDENTALS = {
    ...conventional_1.CONVENTIONAL_ACCIDENTALS,
    ...ehejipn_1.EHEJIPN_ACCIDENTALS,
    ...sagittal_1.SAGITTAL_ACCIDENTALS,
    ...unconventional_1.UNCONVENTIONAL_ACCIDENTALS,
    ...upsAndDowns_1.UPS_AND_DOWNS_ACCIDENTALS,
};
exports.ACCIDENTALS = ACCIDENTALS;


/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.smallDoubleSharp = exports.bb = exports.x = exports.b = exports.sharp = exports.n = exports.h = exports.CONVENTIONAL_ACCIDENTALS = void 0;
const types_1 = __webpack_require__(5);
const h = ""; // U+E261   natural
exports.h = h;
const n = h;
exports.n = n;
const sharp = ""; // U+E262   sharp
exports.sharp = sharp;
const b = ""; // U+E260   flat
exports.b = b;
const x = ""; // U+E47D   double sharp
exports.x = x;
const bb = ""; // U+E264   double flat
exports.bb = bb;
const smallDoubleSharp = ""; // U+E263   small double-sharp*
exports.smallDoubleSharp = smallDoubleSharp;
// * Not the same as "x" or "X", which is the (Sagittal-compatible) large double-sharp.
const CONVENTIONAL_ACCIDENTALS = {
    [types_1.Code.h]: h,
    [types_1.Code.n]: n,
    [types_1.Code["#"]]: sharp,
    [types_1.Code.b]: b,
    [types_1.Code.x]: x,
    [types_1.Code.bb]: bb,
    [types_1.Code.smallDoubleSharp]: smallDoubleSharp,
};
exports.CONVENTIONAL_ACCIDENTALS = CONVENTIONAL_ACCIDENTALS;


/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// tslint:disable max-line-length
Object.defineProperty(exports, "__esModule", { value: true });
exports.ehejipnNaturalTemperedSemitone = exports.ehejipnFlatTemperedSemitone = exports.ehejipnDoubleFlatTemperedSemitone = exports.ehejipnCombiningCloseCurlyBrace = exports.ehejipnCombiningOpenCurlyBrace = exports.ehejipn23Utonal = exports.ehejipn23Otonal = exports.ehejipn19Otonal = exports.ehejipn19Utonal = exports.ehejipn17Utonal = exports.ehejipn17Otonal = exports.ehejipn13Utonal = exports.ehejipn13Otonal = exports.ehejipn11Otonal = exports.ehejipn11Utonal = exports.ehejipnDouble7Utonal = exports.ehejipnDouble7Otonal = exports.ehejipn7Utonal = exports.ehejipn7Otonal = exports.ehejipnDoubleSharpTriple5Utonal = exports.ehejipnSharpTriple5Utonal = exports.ehejipnNaturalTriple5Utonal = exports.ehejipnFlatTriple5Utonal = exports.ehejipnDoubleFlatTriple5Utonal = exports.ehejipnDoubleSharpTriple5Otonal = exports.ehejipnSharpTriple5Otonal = exports.ehejipnNaturalTriple5Otonal = exports.ehejipnFlatTriple5Otonal = exports.ehejipnDoubleFlatTriple5Otonal = exports.ehejipnDoubleSharpDouble5Utonal = exports.ehejipnSharpDouble5Utonal = exports.ehejipnNaturalDouble5Utonal = exports.ehejipnFlatDouble5Utonal = exports.ehejipnDoubleFlatDouble5Utonal = exports.ehejipnDoubleSharpDouble5Otonal = exports.ehejipnSharpDouble5Otonal = exports.ehejipnNaturalDouble5Otonal = exports.ehejipnFlatDouble5Otonal = exports.ehejipnDoubleFlatDouble5Otonal = exports.ehejipnDoubleSharp5Utonal = exports.ehejipnSharp5Utonal = exports.ehejipnNatural5Utonal = exports.ehejipnFlat5Utonal = exports.ehejipnDoubleFlat5Utonal = exports.ehejipnDoubleSharp5Otonal = exports.ehejipnSharp5Otonal = exports.ehejipnNatural5Otonal = exports.ehejipnFlat5Otonal = exports.ehejipnDoubleFlat5Otonal = exports.EHEJIPN_ACCIDENTALS = void 0;
exports.accidentalThreeQuarterTonesFlatZimmermann = exports.ehejipnEnharmonicallyReinterpretEquals = exports.ehejipnEnharmonicallyReinterpretAlmostEqual = exports.ehejipnEnharmonicallyReinterpret = exports.ehejipn53Utonal = exports.ehejipn53Otonal = exports.ehejipnQuarterSharpTemperedSemitone = exports.ehejipnQuarterFlatTemperedSemitone = exports.ehejipnDoubleSharpTemperedSemitone = exports.ehejipnSharpTemperedSemitone = void 0;
const types_1 = __webpack_require__(5);
const conventional_1 = __webpack_require__(8);
const unconventional_1 = __webpack_require__(10);
// See: ttps://w3c.github.io/smufl/gitbook/tables/extended-helmholtz-ellis-accidentals-just-intonation.html
// All EHEJIPN staffCodes start with a dot (full-stop). Unicodes are successive below.
const ehejipnDoubleFlat5Otonal = ""; // U+E2C0
exports.ehejipnDoubleFlat5Otonal = ehejipnDoubleFlat5Otonal;
const ehejipnFlat5Otonal = ""; // U+E2C1
exports.ehejipnFlat5Otonal = ehejipnFlat5Otonal;
const ehejipnNatural5Otonal = ""; // U+E2C2
exports.ehejipnNatural5Otonal = ehejipnNatural5Otonal;
const ehejipnSharp5Otonal = ""; // U+E2C3
exports.ehejipnSharp5Otonal = ehejipnSharp5Otonal;
const ehejipnDoubleSharp5Otonal = ""; // U+E2C4
exports.ehejipnDoubleSharp5Otonal = ehejipnDoubleSharp5Otonal;
const ehejipnDoubleFlat5Utonal = ""; // U+E2C5
exports.ehejipnDoubleFlat5Utonal = ehejipnDoubleFlat5Utonal;
const ehejipnFlat5Utonal = ""; // U+E2C6
exports.ehejipnFlat5Utonal = ehejipnFlat5Utonal;
const ehejipnNatural5Utonal = ""; // U+E2C7
exports.ehejipnNatural5Utonal = ehejipnNatural5Utonal;
const ehejipnSharp5Utonal = ""; // U+E2C8
exports.ehejipnSharp5Utonal = ehejipnSharp5Utonal;
const ehejipnDoubleSharp5Utonal = ""; // U+E2C9
exports.ehejipnDoubleSharp5Utonal = ehejipnDoubleSharp5Utonal;
const ehejipnDoubleFlatDouble5Otonal = ""; // U+E2CA
exports.ehejipnDoubleFlatDouble5Otonal = ehejipnDoubleFlatDouble5Otonal;
const ehejipnFlatDouble5Otonal = ""; // U+E2CB
exports.ehejipnFlatDouble5Otonal = ehejipnFlatDouble5Otonal;
const ehejipnNaturalDouble5Otonal = ""; // U+E2CC
exports.ehejipnNaturalDouble5Otonal = ehejipnNaturalDouble5Otonal;
const ehejipnSharpDouble5Otonal = ""; // U+E2CD
exports.ehejipnSharpDouble5Otonal = ehejipnSharpDouble5Otonal;
const ehejipnDoubleSharpDouble5Otonal = ""; // U+E2CE
exports.ehejipnDoubleSharpDouble5Otonal = ehejipnDoubleSharpDouble5Otonal;
const ehejipnDoubleFlatDouble5Utonal = ""; // U+E2CF
exports.ehejipnDoubleFlatDouble5Utonal = ehejipnDoubleFlatDouble5Utonal;
const ehejipnFlatDouble5Utonal = ""; // U+E2D0
exports.ehejipnFlatDouble5Utonal = ehejipnFlatDouble5Utonal;
const ehejipnNaturalDouble5Utonal = ""; // U+E2D1
exports.ehejipnNaturalDouble5Utonal = ehejipnNaturalDouble5Utonal;
const ehejipnSharpDouble5Utonal = ""; // U+E2D2
exports.ehejipnSharpDouble5Utonal = ehejipnSharpDouble5Utonal;
const ehejipnDoubleSharpDouble5Utonal = ""; // U+E2D3
exports.ehejipnDoubleSharpDouble5Utonal = ehejipnDoubleSharpDouble5Utonal;
const ehejipnDoubleFlatTriple5Otonal = ""; // U+E2D4
exports.ehejipnDoubleFlatTriple5Otonal = ehejipnDoubleFlatTriple5Otonal;
const ehejipnFlatTriple5Otonal = ""; // U+E2D5
exports.ehejipnFlatTriple5Otonal = ehejipnFlatTriple5Otonal;
const ehejipnNaturalTriple5Otonal = ""; // U+E2D6
exports.ehejipnNaturalTriple5Otonal = ehejipnNaturalTriple5Otonal;
const ehejipnSharpTriple5Otonal = ""; // U+E2D7
exports.ehejipnSharpTriple5Otonal = ehejipnSharpTriple5Otonal;
const ehejipnDoubleSharpTriple5Otonal = ""; // U+E2D8
exports.ehejipnDoubleSharpTriple5Otonal = ehejipnDoubleSharpTriple5Otonal;
const ehejipnDoubleFlatTriple5Utonal = ""; // U+E2D9
exports.ehejipnDoubleFlatTriple5Utonal = ehejipnDoubleFlatTriple5Utonal;
const ehejipnFlatTriple5Utonal = ""; // U+E2DA
exports.ehejipnFlatTriple5Utonal = ehejipnFlatTriple5Utonal;
const ehejipnNaturalTriple5Utonal = ""; // U+E2DB
exports.ehejipnNaturalTriple5Utonal = ehejipnNaturalTriple5Utonal;
const ehejipnSharpTriple5Utonal = ""; // U+E2DC
exports.ehejipnSharpTriple5Utonal = ehejipnSharpTriple5Utonal;
const ehejipnDoubleSharpTriple5Utonal = ""; // U+E2DD
exports.ehejipnDoubleSharpTriple5Utonal = ehejipnDoubleSharpTriple5Utonal;
const ehejipn7Otonal = ""; // U+E2DE   lowercase L here, but people would type it uppercase
exports.ehejipn7Otonal = ehejipn7Otonal;
const ehejipn7Utonal = ""; // U+E2DF   people would type it uppercase
exports.ehejipn7Utonal = ehejipn7Utonal;
const ehejipnDouble7Otonal = ""; // U+E2E0   lowercase LL here, but people would type them uppercase
exports.ehejipnDouble7Otonal = ehejipnDouble7Otonal;
const ehejipnDouble7Utonal = ""; // U+E2E1   people would type them uppercase
exports.ehejipnDouble7Utonal = ehejipnDouble7Utonal;
const ehejipn11Utonal = ""; // U+E2E2
exports.ehejipn11Utonal = ehejipn11Utonal;
const ehejipn11Otonal = ""; // U+E2E3
exports.ehejipn11Otonal = ehejipn11Otonal;
const ehejipn13Otonal = ""; // U+E2E4
exports.ehejipn13Otonal = ehejipn13Otonal;
const ehejipn13Utonal = ""; // U+E2E5
exports.ehejipn13Utonal = ehejipn13Utonal;
const ehejipn17Otonal = ""; // U+E2E6
exports.ehejipn17Otonal = ehejipn17Otonal;
const ehejipn17Utonal = ""; // U+E2E7
exports.ehejipn17Utonal = ehejipn17Utonal;
const ehejipn19Utonal = ""; // U+E2E8
exports.ehejipn19Utonal = ehejipn19Utonal;
const ehejipn19Otonal = ""; // U+E2E9
exports.ehejipn19Otonal = ehejipn19Otonal;
const ehejipn23Otonal = ""; // U+E2EA
exports.ehejipn23Otonal = ehejipn23Otonal;
const ehejipn23Utonal = ""; // U+E2EB
exports.ehejipn23Utonal = ehejipn23Utonal;
const ehejipnCombiningOpenCurlyBrace = ""; // U+E2EE
exports.ehejipnCombiningOpenCurlyBrace = ehejipnCombiningOpenCurlyBrace;
const ehejipnCombiningCloseCurlyBrace = ""; // U+E2EF
exports.ehejipnCombiningCloseCurlyBrace = ehejipnCombiningCloseCurlyBrace;
const ehejipnDoubleFlatTemperedSemitone = ""; // U+E2F0
exports.ehejipnDoubleFlatTemperedSemitone = ehejipnDoubleFlatTemperedSemitone;
const ehejipnFlatTemperedSemitone = ""; // U+E2F1
exports.ehejipnFlatTemperedSemitone = ehejipnFlatTemperedSemitone;
const ehejipnNaturalTemperedSemitone = ""; // U+E2F2
exports.ehejipnNaturalTemperedSemitone = ehejipnNaturalTemperedSemitone;
const ehejipnSharpTemperedSemitone = ""; // U+E2F3
exports.ehejipnSharpTemperedSemitone = ehejipnSharpTemperedSemitone;
const ehejipnDoubleSharpTemperedSemitone = ""; // U+E2F4
exports.ehejipnDoubleSharpTemperedSemitone = ehejipnDoubleSharpTemperedSemitone;
const ehejipnQuarterFlatTemperedSemitone = ""; // U+E2F5
exports.ehejipnQuarterFlatTemperedSemitone = ehejipnQuarterFlatTemperedSemitone;
const ehejipnQuarterSharpTemperedSemitone = ""; // U+E2F6
exports.ehejipnQuarterSharpTemperedSemitone = ehejipnQuarterSharpTemperedSemitone;
const ehejipn53Otonal = ""; // U+E2F7
exports.ehejipn53Otonal = ehejipn53Otonal;
const ehejipn53Utonal = ""; // U+E2F8
exports.ehejipn53Utonal = ehejipn53Utonal;
const ehejipnEnharmonicallyReinterpret = ""; // U+E2F9
exports.ehejipnEnharmonicallyReinterpret = ehejipnEnharmonicallyReinterpret;
const ehejipnEnharmonicallyReinterpretAlmostEqual = ""; // U+E2FA
exports.ehejipnEnharmonicallyReinterpretAlmostEqual = ehejipnEnharmonicallyReinterpretAlmostEqual;
const ehejipnEnharmonicallyReinterpretEquals = ""; // U+E2FB
exports.ehejipnEnharmonicallyReinterpretEquals = ehejipnEnharmonicallyReinterpretEquals;
const accidentalThreeQuarterTonesFlatZimmermann = ""; // U+E281
exports.accidentalThreeQuarterTonesFlatZimmermann = accidentalThreeQuarterTonesFlatZimmermann;
const EHEJIPN_ACCIDENTALS = {
    [types_1.Code[".bbv"]]: ehejipnDoubleFlat5Otonal,
    [types_1.Code[".bv"]]: ehejipnFlat5Otonal,
    [types_1.Code[".nv"]]: ehejipnNatural5Otonal,
    [types_1.Code[".#v"]]: ehejipnSharp5Otonal,
    [types_1.Code[".xv"]]: ehejipnDoubleSharp5Otonal,
    [types_1.Code[".bb^"]]: ehejipnDoubleFlat5Utonal,
    [types_1.Code[".b^"]]: ehejipnFlat5Utonal,
    [types_1.Code[".n^"]]: ehejipnNatural5Utonal,
    [types_1.Code[".#^"]]: ehejipnSharp5Utonal,
    [types_1.Code[".x^"]]: ehejipnDoubleSharp5Utonal,
    [types_1.Code[".bbvv"]]: ehejipnDoubleFlatDouble5Otonal,
    [types_1.Code[".bvv"]]: ehejipnFlatDouble5Otonal,
    [types_1.Code[".nvv"]]: ehejipnNaturalDouble5Otonal,
    [types_1.Code[".#vv"]]: ehejipnSharpDouble5Otonal,
    [types_1.Code[".xvv"]]: ehejipnDoubleSharpDouble5Otonal,
    [types_1.Code[".bb^^"]]: ehejipnDoubleFlatDouble5Utonal,
    [types_1.Code[".b^^"]]: ehejipnFlatDouble5Utonal,
    [types_1.Code[".n^^"]]: ehejipnNaturalDouble5Utonal,
    [types_1.Code[".#^^"]]: ehejipnSharpDouble5Utonal,
    [types_1.Code[".x^^"]]: ehejipnDoubleSharpDouble5Utonal,
    [types_1.Code[".bbvvv"]]: ehejipnDoubleFlatTriple5Otonal,
    [types_1.Code[".bvvv"]]: ehejipnFlatTriple5Otonal,
    [types_1.Code[".nvvv"]]: ehejipnNaturalTriple5Otonal,
    [types_1.Code[".#vvv"]]: ehejipnSharpTriple5Otonal,
    [types_1.Code[".xvvv"]]: ehejipnDoubleSharpTriple5Otonal,
    [types_1.Code[".bb^^^"]]: ehejipnDoubleFlatTriple5Utonal,
    [types_1.Code[".b^^^"]]: ehejipnFlatTriple5Utonal,
    [types_1.Code[".n^^^"]]: ehejipnNaturalTriple5Utonal,
    [types_1.Code[".#^^^"]]: ehejipnSharpTriple5Utonal,
    [types_1.Code[".x^^^"]]: ehejipnDoubleSharpTriple5Utonal,
    [types_1.Code[".l"]]: ehejipn7Otonal,
    [types_1.Code[".p"]]: ehejipn7Utonal,
    [types_1.Code[".ll"]]: ehejipnDouble7Otonal,
    [types_1.Code[".pp"]]: ehejipnDouble7Utonal,
    [types_1.Code[".<"]]: ehejipn11Utonal,
    [types_1.Code[".>"]]: ehejipn11Otonal,
    [types_1.Code[".<|"]]: ehejipn13Otonal,
    [types_1.Code[".>|"]]: ehejipn13Utonal,
    [types_1.Code[".\\\\"]]: ehejipn17Otonal,
    [types_1.Code[".//"]]: ehejipn17Utonal,
    [types_1.Code[".\\"]]: ehejipn19Utonal,
    [types_1.Code["./"]]: ehejipn19Otonal,
    [types_1.Code[".^"]]: ehejipn23Otonal,
    [types_1.Code[".v"]]: ehejipn23Utonal,
    [types_1.Code[".{"]]: ehejipnCombiningOpenCurlyBrace,
    [types_1.Code[".}"]]: ehejipnCombiningCloseCurlyBrace,
    [types_1.Code[".bbt"]]: ehejipnDoubleFlatTemperedSemitone,
    [types_1.Code[".bt"]]: ehejipnFlatTemperedSemitone,
    [types_1.Code[".nt"]]: ehejipnNaturalTemperedSemitone,
    [types_1.Code[".#t"]]: ehejipnSharpTemperedSemitone,
    [types_1.Code[".xt"]]: ehejipnDoubleSharpTemperedSemitone,
    [types_1.Code[".<t"]]: ehejipnQuarterFlatTemperedSemitone,
    [types_1.Code[".>t"]]: ehejipnQuarterSharpTemperedSemitone,
    [types_1.Code[".\\\\\\"]]: ehejipn53Otonal,
    [types_1.Code[".///"]]: ehejipn53Utonal,
    [types_1.Code[".~"]]: ehejipnEnharmonicallyReinterpret,
    [types_1.Code[".~~"]]: ehejipnEnharmonicallyReinterpretAlmostEqual,
    [types_1.Code[".="]]: ehejipnEnharmonicallyReinterpretEquals,
    // For convenience of EHEJIPN users, standard accidentals with dots at the start of their codes
    // See: https://w3c.github.io/smufl/gitbook/tables/standard-accidentals-12-edo.html
    [types_1.Code[".bb"]]: conventional_1.bb,
    [types_1.Code[".b"]]: conventional_1.b,
    [types_1.Code[".n"]]: conventional_1.n,
    [types_1.Code[".#"]]: conventional_1.sharp,
    [types_1.Code[".x"]]: conventional_1.smallDoubleSharp,
    [types_1.Code[".<b"]]: accidentalThreeQuarterTonesFlatZimmermann,
    [types_1.Code[".>#"]]: unconventional_1.sesquisharp,
};
exports.EHEJIPN_ACCIDENTALS = EHEJIPN_ACCIDENTALS;


/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.wilsonMinus = exports.wilsonPlus = exports.sesquiflat = exports.sesquisharp = exports.semiflat = exports.semisharp = exports.UNCONVENTIONAL_ACCIDENTALS = void 0;
const types_1 = __webpack_require__(5);
// See: https://w3c.github.io/smufl/gitbook/tables/stein-zimmermann-accidentals-24-edo.html
// And: https://w3c.github.io/smufl/gitbook/tables/other-accidentals.html
const semisharp = ""; // U+E282   Half sharp (quarter-tone sharp) (Stein)
exports.semisharp = semisharp;
const semiflat = ""; // U+E284   Narrow reversed flat (quarter-tone flat)
exports.semiflat = semiflat;
const sesquisharp = ""; // U+E283   One and a half sharps (three-quarter-tones sharp) (Stein)
exports.sesquisharp = sesquisharp;
const sesquiflat = ""; // U+E285   Narrow reversed flat and flat (three-quarter-tones flat)
exports.sesquiflat = sesquiflat;
const wilsonPlus = ""; // U+E47B   Wilson plus (5 comma up)
exports.wilsonPlus = wilsonPlus;
const wilsonMinus = ""; // U+E47C   Wilson minus (5 comma down)
exports.wilsonMinus = wilsonMinus;
const UNCONVENTIONAL_ACCIDENTALS = {
    [types_1.Code[">"]]: semisharp,
    [types_1.Code["<"]]: semiflat,
    [types_1.Code[">#"]]: sesquisharp,
    [types_1.Code["<b"]]: sesquiflat,
    [types_1.Code["+"]]: wilsonPlus,
    [types_1.Code["-"]]: wilsonMinus,
};
exports.UNCONVENTIONAL_ACCIDENTALS = UNCONVENTIONAL_ACCIDENTALS;


/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// tslint:disable max-line-length
Object.defineProperty(exports, "__esModule", { value: true });
exports.doubleSharp5v7kDown = exports.doubleFlat5CUp = exports.doubleSharp5CDown = exports.doubleFlat7CUp = exports.doubleSharp7CDown = exports.doubleFlat25SUp = exports.doubleSharp25SDown = exports.flat35LDown = exports.sharp35LUp = exports.flat11LDown = exports.sharp11LUp = exports.flat11MDown = exports.sharp11MUp = exports.flat35MDown = exports.sharp35MUp = exports.flat25SDown = exports.sharp25SUp = exports.flat7CDown = exports.sharp7CUp = exports.flat5CDown = exports.sharp5CUp = exports.flat5v7kDown = exports.sharp5v7kUp = exports.apotomeDown = exports.apotomeUp = exports.flat5v7kUp = exports.sharp5v7kDown = exports.flat5CUp = exports.sharp5CDown = exports.flat7CUp = exports.sharp7CDown = exports.flat25SUp = exports.sharp25SDown = exports._35LDown = exports._35LUp = exports._11LDown = exports._11LUp = exports._11MDown = exports._11MUp = exports._35MDown = exports._35MUp = exports._25SDown = exports._25SUp = exports._7CDown = exports._7CUp = exports._5CDown = exports._5CUp = exports._5v7KDown = exports._5v7KUp = exports.SAGITTAL_ACCIDENTALS = void 0;
exports.sharp5v23SDown = exports._5v23SDown = exports._5v23SUp = exports._5v19CDown = exports._5v19CUp = exports._23CDown = exports._23CUp = exports.doubleFlat7v11kUp = exports.doubleSharp7v11kDown = exports.doubleFlat17CUp = exports.doubleSharp17CDown = exports.doubleFlat55CUp = exports.doubleSharp55CDown = exports.doubleFlat7v11CUp = exports.doubleSharp7v11CDown = exports.doubleFlat5v11SUp = exports.doubleSharp5v11SDown = exports.flat5v11SDown = exports.sharp5v11SUp = exports.flat7v11CDown = exports.sharp7v11CUp = exports.flat55CDown = exports.sharp55CUp = exports.flat17CDown = exports.sharp17CUp = exports.flat7v11kDown = exports.sharp7v11kUp = exports.flat7v11kUp = exports.sharp7v11kDown = exports.flat17CUp = exports.sharp17CDown = exports.flat55CUp = exports.sharp55CDown = exports.flat7v11CUp = exports.sharp7v11CDown = exports.flat5v11SUp = exports.sharp5v11SDown = exports._5v11SDown = exports._5v11SUp = exports._7v11CDown = exports._7v11CUp = exports._55CDown = exports._55CUp = exports._17CDown = exports._17CUp = exports._7v11KDown = exports._7v11KUp = exports.doubleFlat = exports.doubleSharp = exports.doubleFlat5v7kUp = void 0;
exports.sharp49SDown = exports.flat23SUp = exports.sharp23SDown = exports._5v13LDown = exports._5v13LUp = exports._11v19LDown = exports._11v19LUp = exports._49LDown = exports._49LUp = exports._5v49MDown = exports._5v49MUp = exports._49MDown = exports._49MUp = exports._11v19MDown = exports._11v19MUp = exports._5v13MDown = exports._5v13MUp = exports._23SDown = exports._23SUp = exports._49SDown = exports._49SUp = exports._7v19CDown = exports._7v19CUp = exports._19CDown = exports._19CUp = exports._11v49CDown = exports._11v49CUp = exports._143CDown = exports._143CUp = exports._17KDown = exports._17KUp = exports._19sDown = exports._19sUp = exports.doubleFlat23CUp = exports.doubleSharp23CDown = exports.doubleFlat5v19CUp = exports.doubleSharp5v19CDown = exports.doubleFlat5v23SUp = exports.doubleSharp5v23SDown = exports.flat5v23SDown = exports.sharp5v23SUp = exports.flat5v19CDown = exports.sharp5v19CUp = exports.flat23CDown = exports.sharp23CUp = exports.flat23CUp = exports.sharp23CDown = exports.flat5v19CUp = exports.sharp5v19CDown = exports.flat5v23SUp = void 0;
exports.doubleSharp19CDown = exports.doubleFlat7v19CUp = exports.doubleSharp7v19CDown = exports.doubleFlat49SUp = exports.doubleSharp49SDown = exports.doubleFlat23SUp = exports.doubleSharp23SDown = exports.flat5v13LDown = exports.sharp5v13LUp = exports.flat11v19LDown = exports.sharp11v19LUp = exports.flat49LDown = exports.sharp49LUp = exports.flat5v49MDown = exports.sharp5v49MUp = exports.flat49MDown = exports.sharp49MUp = exports.flat11v19MDown = exports.sharp11v19MUp = exports.flat5v13MDown = exports.sharp5v13MUp = exports.flat23SDown = exports.sharp23SUp = exports.flat49SDown = exports.sharp49SUp = exports.flat7v19CDown = exports.sharp7v19CUp = exports.flat19CDown = exports.sharp19CUp = exports.flat11v49CDown = exports.sharp11v49CUp = exports.flat143CDown = exports.sharp143CUp = exports.flat17kDown = exports.sharp17kUp = exports.flat19sDown = exports.sharp19sUp = exports.flat19sUp = exports.sharp19sDown = exports.flat17kUp = exports.sharp17kDown = exports.flat143CUp = exports.sharp143CDown = exports.flat11v49CUp = exports.sharp11v49CDown = exports.flat19CUp = exports.sharp19CDown = exports.flat7v19CUp = exports.sharp7v19CDown = exports.flat49SUp = void 0;
exports.dotDown = exports.dotUp = exports.wingbirdDown = exports.wingbirdUp = exports.wedgebirdDown = exports.wedgebirdUp = exports.hornbirdDown = exports.hornbirdUp = exports.mBirdDown = exports.mBirdUp = exports.wedgewingDown = exports.wedgewingUp = exports.hornwingDown = exports.hornwingUp = exports.mWingDown = exports.mWingUp = exports.wedgeDown = exports.wedgeUp = exports.hornDown = exports.hornUp = exports.birdDown = exports.birdUp = exports.wingDown = exports.wingUp = exports.tickDown = exports.tickUp = exports.shaftDown = exports.shaftUp = exports.doubleFlat19sUp = exports.doubleSharp19sDown = exports.doubleFlat17kUp = exports.doubleSharp17kDown = exports.doubleFlat143CUp = exports.doubleSharp143CDown = exports.doubleFlat11v49CUp = exports.doubleSharp11v49CDown = exports.doubleFlat19CUp = void 0;
const types_1 = __webpack_require__(5);
// TODO: I considered pulling these unicodes in from @sagittal/system, but decided not to bloat it for the forum
const _5v7KUp = ""; // U+E300   5:7 kleisma up, (5:7k, ~11:13k, 7C less 5C)
exports._5v7KUp = _5v7KUp;
const _5v7KDown = ""; // U+E301   5:7 kleisma down
exports._5v7KDown = _5v7KDown;
const _5CUp = ""; // U+E302   5 comma up, (5C), 1° up [22 27 29 34 41 46 53 96-EDOs], 1/12-tone up
exports._5CUp = _5CUp;
const _5CDown = ""; // U+E303   5 comma down, 1° down [22 27 29 34 41 46 53 96-EDOs], 1/12-tone down
exports._5CDown = _5CDown;
const _7CUp = ""; // U+E304   7 comma up, (7C), 1° up [43-EDO], 2° up [72-EDO], 1/6-tone up
exports._7CUp = _7CUp;
const _7CDown = ""; // U+E305   7 comma down, 1° down [43-EDO], 2° down [72-EDO], 1/6-tone down
exports._7CDown = _7CDown;
const _25SUp = ""; // U+E306   25 small diesis up, (25S, ~5:13S, ~37S, 5C plus 5C), 2° up [53-EDO]
exports._25SUp = _25SUp;
const _25SDown = ""; // U+E307   25 small diesis down, 2° down [53-EDO]
exports._25SDown = _25SDown;
const _35MUp = ""; // U+E308   35 medium diesis up, (35M, ~13M, ~125M, 5C plus 7C), 2/9-tone up
exports._35MUp = _35MUp;
const _35MDown = ""; // U+E309   35 medium diesis down, 1°[50] 2°[27] down, 2/9-tone down
exports._35MDown = _35MDown;
const _11MUp = ""; // U+E30A   11 medium diesis up, (11M), 1°[17 31] 2°46 up, 1/4-tone up
exports._11MUp = _11MUp;
const _11MDown = ""; // U+E30B   11 medium diesis down, 1°[17 31] 2°46 down, 1/4-tone down
exports._11MDown = _11MDown;
const _11LUp = ""; // U+E30C   11 large diesis up, (11L), (sharp less 11M), 3° up [46-EDO]
exports._11LUp = _11LUp;
const _11LDown = ""; // U+E30D   11 large diesis down, 3° down [46-EDO]
exports._11LDown = _11LDown;
const _35LUp = ""; // U+E30E   35 large diesis up, (35L, ~13L, ~125L, sharp less 35M), 2°50 up
exports._35LUp = _35LUp;
const _35LDown = ""; // U+E30F   35 large diesis down, 2° down [50-EDO], 5/18-tone down
exports._35LDown = _35LDown;
const sharp25SDown = ""; // U+E310   Sharp 25S-down, 3° up [53-EDO]
exports.sharp25SDown = sharp25SDown;
const flat25SUp = ""; // U+E311   Flat 25S-up, 3° down [53-EDO]
exports.flat25SUp = flat25SUp;
const sharp7CDown = ""; // U+E312   Sharp 7C-down, 2° up [43-EDO], 4° up [72-EDO], 1/3-tone up
exports.sharp7CDown = sharp7CDown;
const flat7CUp = ""; // U+E313   Flat 7C-up, 2° down [43-EDO], 4° down [72-EDO], 1/3-tone down
exports.flat7CUp = flat7CUp;
const sharp5CDown = ""; // U+E314   Sharp 5C-down, 2°[22 29] 3°[27 34 41] 4°[39 46 53] 5°[72] 7°[96] up, 5/12-tone up
exports.sharp5CDown = sharp5CDown;
const flat5CUp = ""; // U+E315   Flat 5C-up, 2°[22 29] 3°[27 34 41] 4°[39 46 53] 5°[72] 7°[96] down, 5/12-tone down
exports.flat5CUp = flat5CUp;
const sharp5v7kDown = ""; // U+E316   Sharp 5:7k-down
exports.sharp5v7kDown = sharp5v7kDown;
const flat5v7kUp = ""; // U+E317   Flat 5:7k-up
exports.flat5v7kUp = flat5v7kUp;
const apotomeUp = ""; // U+E318   Sharp, (apotome up)[almost all-EDOs], 1/2-tone up
exports.apotomeUp = apotomeUp;
const apotomeDown = ""; // U+E319   Flat, (apotome down)[almost all-EDOs], 1/2-tone down
exports.apotomeDown = apotomeDown;
const sharp5v7kUp = ""; // U+E31C   Sharp 5:7k-up
exports.sharp5v7kUp = sharp5v7kUp;
const flat5v7kDown = ""; // U+E31D   Flat 5:7k-down
exports.flat5v7kDown = flat5v7kDown;
const sharp5CUp = ""; // U+E31E   Sharp 5C-up, 4°[22 29] 5°[27 34 41] 6°[39 46 53] up, 7/12-tone up
exports.sharp5CUp = sharp5CUp;
const flat5CDown = ""; // U+E31F   Flat 5C-down, 4°[22 29] 5°[27 34 41] 6°[39 46 53] down, 7/12-tone down
exports.flat5CDown = flat5CDown;
const sharp7CUp = ""; // U+E320   Sharp 7C-up, 4° up [43-EDO], 8° up [72-EDO], 2/3-tone up
exports.sharp7CUp = sharp7CUp;
const flat7CDown = ""; // U+E321   Flat 7C-down, 4° down [43-EDO], 8° down [72-EDO], 2/3-tone down
exports.flat7CDown = flat7CDown;
const sharp25SUp = ""; // U+E322   Sharp 25S-up, 7° up [53-EDO]
exports.sharp25SUp = sharp25SUp;
const flat25SDown = ""; // U+E323   Flat 25S-down, 7° down [53-EDO]
exports.flat25SDown = flat25SDown;
const sharp35MUp = ""; // U+E324   Sharp 35M-up, 4° up [50-EDO], 6° up [27-EDO], 13/18-tone up
exports.sharp35MUp = sharp35MUp;
const flat35MDown = ""; // U+E325   Flat 35M-down, 4° down [50-EDO], 6° down [27-EDO], 13/18-tone down
exports.flat35MDown = flat35MDown;
const sharp11MUp = ""; // U+E326   Sharp 11M-up, 3° up [17 31-EDOs], 7° up [46-EDO], 3/4-tone up
exports.sharp11MUp = sharp11MUp;
const flat11MDown = ""; // U+E327   Flat 11M-down, 3° down [17 31-EDOs], 7° down [46-EDO], 3/4-tone down
exports.flat11MDown = flat11MDown;
const sharp11LUp = ""; // U+E328   Sharp 11L-up, 8° up [46-EDO]
exports.sharp11LUp = sharp11LUp;
const flat11LDown = ""; // U+E329   Flat 11L-down, 8° up [46-EDO]
exports.flat11LDown = flat11LDown;
const sharp35LUp = ""; // U+E32A   Sharp 35L-up, 5° up [50-EDO]
exports.sharp35LUp = sharp35LUp;
const flat35LDown = ""; // U+E32B   Flat 35L-down, 5° down [50-EDO]
exports.flat35LDown = flat35LDown;
const doubleSharp25SDown = ""; // U+E32C   Double sharp 25S-down, 8°up [53-EDO]
exports.doubleSharp25SDown = doubleSharp25SDown;
const doubleFlat25SUp = ""; // U+E32D   Double flat 25S-up, 8°down [53-EDO]
exports.doubleFlat25SUp = doubleFlat25SUp;
const doubleSharp7CDown = ""; // U+E32E   Double sharp 7C-down, 5°[43] 10°[72] up, 5/6-tone up
exports.doubleSharp7CDown = doubleSharp7CDown;
const doubleFlat7CUp = ""; // U+E32F   Double flat 7C-up, 5° down [43-EDO], 10° down [72-EDO], 5/6-tone down
exports.doubleFlat7CUp = doubleFlat7CUp;
const doubleSharp5CDown = ""; // U+E330   Double sharp 5C-down, 5°[22 29] 7°[34 41] 9°53 up, 11/12 tone up
exports.doubleSharp5CDown = doubleSharp5CDown;
const doubleFlat5CUp = ""; // U+E331   Double flat 5C-up, 5°[22 29] 7°[34 41] 9°53 down, 11/12 tone down
exports.doubleFlat5CUp = doubleFlat5CUp;
const doubleSharp5v7kDown = ""; // U+E332   Double sharp 5:7k-down
exports.doubleSharp5v7kDown = doubleSharp5v7kDown;
const doubleFlat5v7kUp = ""; // U+E333   Double flat 5:7k-up
exports.doubleFlat5v7kUp = doubleFlat5v7kUp;
const doubleSharp = ""; // U+E334   Double sharp, (2 apotomes up)[almost all-EDOs], whole-tone up
exports.doubleSharp = doubleSharp;
const doubleFlat = ""; // U+E335   Double flat, (2 apotomes down)[almost all-EDOs], whole-tone down
exports.doubleFlat = doubleFlat;
const _7v11KUp = ""; // U+E340   7:11 kleisma up, (7:11k)
exports._7v11KUp = _7v11KUp;
const _7v11KDown = ""; // U+E341   7:11 kleisma down
exports._7v11KDown = _7v11KDown;
const _17CUp = ""; // U+E342   17 comma up, (17C)
exports._17CUp = _17CUp;
const _17CDown = ""; // U+E343   17 comma down
exports._17CDown = _17CDown;
const _55CUp = ""; // U+E344   55 comma up, (55C, 11M less 5C), 3°up [96-EDO], 3/16-tone up
exports._55CUp = _55CUp;
const _55CDown = ""; // U+E345   55 comma down, 3° down [96-EDO], 3/16-tone down
exports._55CDown = _55CDown;
const _7v11CUp = ""; // U+E346   7:11 comma up, (7:11C, ~13:17S, ~29S, 11L less 7C), 1° up [60-EDO]
exports._7v11CUp = _7v11CUp;
const _7v11CDown = ""; // U+E347   7:11 comma down, 1° down [60-EDO], 1/10-tone down
exports._7v11CDown = _7v11CDown;
const _5v11SUp = ""; // U+E348   5:11 small diesis up, (5:11S, ~7:13S, ~11:17S, 5:7k plus 7:11C)
exports._5v11SUp = _5v11SUp;
const _5v11SDown = ""; // U+E349   5:11 small diesis down
exports._5v11SDown = _5v11SDown;
const sharp5v11SDown = ""; // U+E34A   Sharp 5:11S-down
exports.sharp5v11SDown = sharp5v11SDown;
const flat5v11SUp = ""; // U+E34B   Flat 5:11S-up
exports.flat5v11SUp = flat5v11SUp;
const sharp7v11CDown = ""; // U+E34C   Sharp 7:11C-down, 4° up [60-EDO], 2/5-tone up
exports.sharp7v11CDown = sharp7v11CDown;
const flat7v11CUp = ""; // U+E34D   Flat 7:11C-up, 4° down [60-EDO], 2/5-tone down
exports.flat7v11CUp = flat7v11CUp;
const sharp55CDown = ""; // U+E34E   Sharp 55C-down, 5° up [96-EDO], 5/16-tone up
exports.sharp55CDown = sharp55CDown;
const flat55CUp = ""; // U+E34F   Flat 55C-up, 5° down [96-EDO], 5/16-tone down
exports.flat55CUp = flat55CUp;
const sharp17CDown = ""; // U+E350   Sharp 17C-down
exports.sharp17CDown = sharp17CDown;
const flat17CUp = ""; // U+E351   Flat 17C-up
exports.flat17CUp = flat17CUp;
const sharp7v11kDown = ""; // U+E352   Sharp 7:11k-down
exports.sharp7v11kDown = sharp7v11kDown;
const flat7v11kUp = ""; // U+E353   Flat 7:11k-up
exports.flat7v11kUp = flat7v11kUp;
const sharp7v11kUp = ""; // U+E354   Sharp 7:11k-up
exports.sharp7v11kUp = sharp7v11kUp;
const flat7v11kDown = ""; // U+E355   Flat 7:11k-down
exports.flat7v11kDown = flat7v11kDown;
const sharp17CUp = ""; // U+E356   Sharp 17C-up
exports.sharp17CUp = sharp17CUp;
const flat17CDown = ""; // U+E357   Flat 17C-down
exports.flat17CDown = flat17CDown;
const sharp55CUp = ""; // U+E358   Sharp 55C-up, 11° up [96-EDO], 11/16-tone up
exports.sharp55CUp = sharp55CUp;
const flat55CDown = ""; // U+E359   Flat 55C-down, 11° down [96-EDO], 11/16-tone down
exports.flat55CDown = flat55CDown;
const sharp7v11CUp = ""; // U+E35A   Sharp 7:11C-up, 6° up [60-EDO], 3/5- tone up
exports.sharp7v11CUp = sharp7v11CUp;
const flat7v11CDown = ""; // U+E35B   Flat 7:11C-down, 6° down [60-EDO], 3/5- tone down
exports.flat7v11CDown = flat7v11CDown;
const sharp5v11SUp = ""; // U+E35C   Sharp 5:11S-up
exports.sharp5v11SUp = sharp5v11SUp;
const flat5v11SDown = ""; // U+E35D   Flat 5:11S-down
exports.flat5v11SDown = flat5v11SDown;
const doubleSharp5v11SDown = ""; // U+E35E   Double sharp 5:11S-down
exports.doubleSharp5v11SDown = doubleSharp5v11SDown;
const doubleFlat5v11SUp = ""; // U+E35F   Double flat 5:11S-up
exports.doubleFlat5v11SUp = doubleFlat5v11SUp;
const doubleSharp7v11CDown = ""; // U+E360   Double sharp 7:11C-down, 9° up [60-EDO], 9/10-tone up
exports.doubleSharp7v11CDown = doubleSharp7v11CDown;
const doubleFlat7v11CUp = ""; // U+E361   Double flat 7:11C-up, 9° down [60-EDO], 9/10-tone down
exports.doubleFlat7v11CUp = doubleFlat7v11CUp;
const doubleSharp55CDown = ""; // U+E362   Double sharp 55C-down, 13° up [96-EDO], 13/16-tone up
exports.doubleSharp55CDown = doubleSharp55CDown;
const doubleFlat55CUp = ""; // U+E363   Double flat 55C-up, 13° down [96-EDO], 13/16-tone down
exports.doubleFlat55CUp = doubleFlat55CUp;
const doubleSharp17CDown = ""; // U+E364   Double sharp 17C-down
exports.doubleSharp17CDown = doubleSharp17CDown;
const doubleFlat17CUp = ""; // U+E365   Double flat 17C-up
exports.doubleFlat17CUp = doubleFlat17CUp;
const doubleSharp7v11kDown = ""; // U+E366   Double sharp 7:11k-down
exports.doubleSharp7v11kDown = doubleSharp7v11kDown;
const doubleFlat7v11kUp = ""; // U+E367   Double flat 7:11k-up
exports.doubleFlat7v11kUp = doubleFlat7v11kUp;
const _23CUp = ""; // U+E370   23 comma up, (23C), 2° up [96-EDO], 1/8-tone up
exports._23CUp = _23CUp;
const _23CDown = ""; // U+E371   23 comma down, 2° down [96-EDO], 1/8-tone down
exports._23CDown = _23CDown;
const _5v19CUp = ""; // U+E372   5:19 comma up, (5:19C, 5C plus 19s), 1/20-tone up
exports._5v19CUp = _5v19CUp;
const _5v19CDown = ""; // U+E373   5:19 comma down, 1/20-tone down
exports._5v19CDown = _5v19CDown;
const _5v23SUp = ""; // U+E374   5:23 small diesis up, (5:23S, 5C plus 23C), 2° up [60-EDO], 1/5-tone up
exports._5v23SUp = _5v23SUp;
const _5v23SDown = ""; // U+E375   5:23 small diesis down, 2° down [60-EDO], 1/5-tone down
exports._5v23SDown = _5v23SDown;
const sharp5v23SDown = ""; // U+E376   Sharp 5:23S-down, 3° up [60-EDO], 3/10-tone up
exports.sharp5v23SDown = sharp5v23SDown;
const flat5v23SUp = ""; // U+E377   Flat 5:23S-up, 3° down [60-EDO], 3/10-tone down
exports.flat5v23SUp = flat5v23SUp;
const sharp5v19CDown = ""; // U+E378   Sharp 5:19C-down, 9/20-tone up
exports.sharp5v19CDown = sharp5v19CDown;
const flat5v19CUp = ""; // U+E379   Flat 5:19C-up, 9/20-tone down
exports.flat5v19CUp = flat5v19CUp;
const sharp23CDown = ""; // U+E37A   Sharp 23C-down, 6° up [96-EDO], 3/8-tone up
exports.sharp23CDown = sharp23CDown;
const flat23CUp = ""; // U+E37B   Flat 23C-up, 6° down [96-EDO], 3/8-tone down
exports.flat23CUp = flat23CUp;
const sharp23CUp = ""; // U+E37C   Sharp 23C-up, 10° up [96-EDO], 5/8-tone up
exports.sharp23CUp = sharp23CUp;
const flat23CDown = ""; // U+E37D   Flat 23C-down, 10° down [96-EDO], 5/8-tone down
exports.flat23CDown = flat23CDown;
const sharp5v19CUp = ""; // U+E37E   Sharp 5:19C-up, 11/20-tone up
exports.sharp5v19CUp = sharp5v19CUp;
const flat5v19CDown = ""; // U+E37F   Flat 5:19C-down, 11/20-tone down
exports.flat5v19CDown = flat5v19CDown;
const sharp5v23SUp = ""; // U+E380   Sharp 5:23S-up, 7° up [60-EDO], 7/10-tone up
exports.sharp5v23SUp = sharp5v23SUp;
const flat5v23SDown = ""; // U+E381   Flat 5:23S-down, 7° down [60-EDO], 7/10-tone down
exports.flat5v23SDown = flat5v23SDown;
const doubleSharp5v23SDown = ""; // U+E382   Double sharp 5:23S-down, 8° up [60-EDO], 4/5-tone up
exports.doubleSharp5v23SDown = doubleSharp5v23SDown;
const doubleFlat5v23SUp = ""; // U+E383   Double flat 5:23S-up, 8° down [60-EDO], 4/5-tone down
exports.doubleFlat5v23SUp = doubleFlat5v23SUp;
const doubleSharp5v19CDown = ""; // U+E384   Double sharp 5:19C-down, 19/20-tone up
exports.doubleSharp5v19CDown = doubleSharp5v19CDown;
const doubleFlat5v19CUp = ""; // U+E385   Double flat 5:19C-up, 19/20-tone down
exports.doubleFlat5v19CUp = doubleFlat5v19CUp;
const doubleSharp23CDown = ""; // U+E386   Double sharp 23C-down, 14°up [96-EDO], 7/8-tone up
exports.doubleSharp23CDown = doubleSharp23CDown;
const doubleFlat23CUp = ""; // U+E387   Double flat 23C-up, 14° down [96-EDO], 7/8-tone down
exports.doubleFlat23CUp = doubleFlat23CUp;
const _19sUp = ""; // U+E390   19 schisma up, (19s)
exports._19sUp = _19sUp;
const _19sDown = ""; // U+E391   19 schisma down
exports._19sDown = _19sDown;
const _17KUp = ""; // U+E392   17 kleisma up, (17k)
exports._17KUp = _17KUp;
const _17KDown = ""; // U+E393   17 kleisma down
exports._17KDown = _17KDown;
const _143CUp = ""; // U+E394   143 comma up, (143C, 13L less 11M)
exports._143CUp = _143CUp;
const _143CDown = ""; // U+E395   143 comma down
exports._143CDown = _143CDown;
const _11v49CUp = ""; // U+E396   11:49 comma up, (11:49C, 11M less 49S)
exports._11v49CUp = _11v49CUp;
const _11v49CDown = ""; // U+E397   11:49 comma down
exports._11v49CDown = _11v49CDown;
const _19CUp = ""; // U+E398   19 comma up, (19C)
exports._19CUp = _19CUp;
const _19CDown = ""; // U+E399   19 comma down
exports._19CDown = _19CDown;
const _7v19CUp = ""; // U+E39A   7:19 comma up, (7:19C, 7C less 19s)
exports._7v19CUp = _7v19CUp;
const _7v19CDown = ""; // U+E39B   7:19 comma down
exports._7v19CDown = _7v19CDown;
const _49SUp = ""; // U+E39C   49 small diesis up, (49S, ~31S)
exports._49SUp = _49SUp;
const _49SDown = ""; // U+E39D   49 small diesis down
exports._49SDown = _49SDown;
const _23SUp = ""; // U+E39E   23 small diesis up, (23S)
exports._23SUp = _23SUp;
const _23SDown = ""; // U+E39F   23 small diesis down
exports._23SDown = _23SDown;
const _5v13MUp = ""; // U+E3A0   5:13 medium diesis up, (5:13M, ~37M, 5C plus 13C)
exports._5v13MUp = _5v13MUp;
const _5v13MDown = ""; // U+E3A1   5:13 medium diesis down
exports._5v13MDown = _5v13MDown;
const _11v19MUp = ""; // U+E3A2   11:19 medium diesis up, (11:19M, 11M plus 19s)
exports._11v19MUp = _11v19MUp;
const _11v19MDown = ""; // U+E3A3   11:19 medium diesis down
exports._11v19MDown = _11v19MDown;
const _49MUp = ""; // U+E3A4   49 medium diesis up, (49M, ~31M, 7C plus 7C)
exports._49MUp = _49MUp;
const _49MDown = ""; // U+E3A5   49 medium diesis down
exports._49MDown = _49MDown;
const _5v49MUp = ""; // U+E3A6   5:49 medium diesis up, (5:49M, half apotome)
exports._5v49MUp = _5v49MUp;
const _5v49MDown = ""; // U+E3A7   5:49 medium diesis down
exports._5v49MDown = _5v49MDown;
const _49LUp = ""; // U+E3A8   49 large diesis up, (49L, ~31L, apotome less 49M)
exports._49LUp = _49LUp;
const _49LDown = ""; // U+E3A9   49 large diesis down
exports._49LDown = _49LDown;
const _11v19LUp = ""; // U+E3AA   11:19 large diesis up, (11:19L, apotome less 11:19M)
exports._11v19LUp = _11v19LUp;
const _11v19LDown = ""; // U+E3AB   11:19 large diesis down
exports._11v19LDown = _11v19LDown;
const _5v13LUp = ""; // U+E3AC   5:13 large diesis up, (5:13L, ~37L, apotome less 5:13M)
exports._5v13LUp = _5v13LUp;
const _5v13LDown = ""; // U+E3AD   5:13 large diesis down
exports._5v13LDown = _5v13LDown;
const sharp23SDown = ""; // U+E3B0   Sharp 23S-down
exports.sharp23SDown = sharp23SDown;
const flat23SUp = ""; // U+E3B1   Flat 23S-up
exports.flat23SUp = flat23SUp;
const sharp49SDown = ""; // U+E3B2   Sharp 49S-down
exports.sharp49SDown = sharp49SDown;
const flat49SUp = ""; // U+E3B3   Flat 49S-up
exports.flat49SUp = flat49SUp;
const sharp7v19CDown = ""; // U+E3B4   Sharp 7:19C-down
exports.sharp7v19CDown = sharp7v19CDown;
const flat7v19CUp = ""; // U+E3B5   Flat 7:19C-up
exports.flat7v19CUp = flat7v19CUp;
const sharp19CDown = ""; // U+E3B6   Sharp 19C-down
exports.sharp19CDown = sharp19CDown;
const flat19CUp = ""; // U+E3B7   Flat 19C-up
exports.flat19CUp = flat19CUp;
const sharp11v49CDown = ""; // U+E3B8   Sharp 11:49C-down
exports.sharp11v49CDown = sharp11v49CDown;
const flat11v49CUp = ""; // U+E3B9   Flat 11:49C-up
exports.flat11v49CUp = flat11v49CUp;
const sharp143CDown = ""; // U+E3BA   Sharp 143C-down
exports.sharp143CDown = sharp143CDown;
const flat143CUp = ""; // U+E3BB   Flat 143C-up
exports.flat143CUp = flat143CUp;
const sharp17kDown = ""; // U+E3BC   Sharp 17k-down
exports.sharp17kDown = sharp17kDown;
const flat17kUp = ""; // U+E3BD   Flat 17k-up
exports.flat17kUp = flat17kUp;
const sharp19sDown = ""; // U+E3BE   Sharp 19s-down
exports.sharp19sDown = sharp19sDown;
const flat19sUp = ""; // U+E3BF   Flat 19s-up
exports.flat19sUp = flat19sUp;
const sharp19sUp = ""; // U+E3C0   Sharp 19s-up
exports.sharp19sUp = sharp19sUp;
const flat19sDown = ""; // U+E3C1   Flat 19s-down
exports.flat19sDown = flat19sDown;
const sharp17kUp = ""; // U+E3C2   Sharp 17k-up
exports.sharp17kUp = sharp17kUp;
const flat17kDown = ""; // U+E3C3   Flat 17k-down
exports.flat17kDown = flat17kDown;
const sharp143CUp = ""; // U+E3C4   Sharp 143C-up
exports.sharp143CUp = sharp143CUp;
const flat143CDown = ""; // U+E3C5   Flat 143C-down
exports.flat143CDown = flat143CDown;
const sharp11v49CUp = ""; // U+E3C6   Sharp 11:49C-up
exports.sharp11v49CUp = sharp11v49CUp;
const flat11v49CDown = ""; // U+E3C7   Flat 11:49C-down
exports.flat11v49CDown = flat11v49CDown;
const sharp19CUp = ""; // U+E3C8   Sharp 19C-up
exports.sharp19CUp = sharp19CUp;
const flat19CDown = ""; // U+E3C9   Flat 19C-down
exports.flat19CDown = flat19CDown;
const sharp7v19CUp = ""; // U+E3CA   Sharp 7:19C-up
exports.sharp7v19CUp = sharp7v19CUp;
const flat7v19CDown = ""; // U+E3CB   Flat 7:19C-down
exports.flat7v19CDown = flat7v19CDown;
const sharp49SUp = ""; // U+E3CC   Sharp 49S-up
exports.sharp49SUp = sharp49SUp;
const flat49SDown = ""; // U+E3CD   Flat 49S-down
exports.flat49SDown = flat49SDown;
const sharp23SUp = ""; // U+E3CE   Sharp 23S-up
exports.sharp23SUp = sharp23SUp;
const flat23SDown = ""; // U+E3CF   Flat 23S-down
exports.flat23SDown = flat23SDown;
const sharp5v13MUp = ""; // U+E3D0   Sharp 5:13M-up
exports.sharp5v13MUp = sharp5v13MUp;
const flat5v13MDown = ""; // U+E3D1   Flat 5:13M-down
exports.flat5v13MDown = flat5v13MDown;
const sharp11v19MUp = ""; // U+E3D2   Sharp 11:19M-up
exports.sharp11v19MUp = sharp11v19MUp;
const flat11v19MDown = ""; // U+E3D3   Flat 11:19M-down
exports.flat11v19MDown = flat11v19MDown;
const sharp49MUp = ""; // U+E3D4   Sharp 49M-up
exports.sharp49MUp = sharp49MUp;
const flat49MDown = ""; // U+E3D5   Flat 49M-down
exports.flat49MDown = flat49MDown;
const sharp5v49MUp = ""; // U+E3D6   Sharp 5:49M-up, (one and a half apotomes)
exports.sharp5v49MUp = sharp5v49MUp;
const flat5v49MDown = ""; // U+E3D7   Flat 5:49M-down
exports.flat5v49MDown = flat5v49MDown;
const sharp49LUp = ""; // U+E3D8   Sharp 49L-up
exports.sharp49LUp = sharp49LUp;
const flat49LDown = ""; // U+E3D9   Flat 49L-down
exports.flat49LDown = flat49LDown;
const sharp11v19LUp = ""; // U+E3DA   Sharp 11:19L-up
exports.sharp11v19LUp = sharp11v19LUp;
const flat11v19LDown = ""; // U+E3DB   Flat 11:19L-down
exports.flat11v19LDown = flat11v19LDown;
const sharp5v13LUp = ""; // U+E3DC   Sharp 5:13L-up
exports.sharp5v13LUp = sharp5v13LUp;
const flat5v13LDown = ""; // U+E3DD   Flat 5:13L-down
exports.flat5v13LDown = flat5v13LDown;
const doubleSharp23SDown = ""; // U+E3E0   Double sharp 23S-down
exports.doubleSharp23SDown = doubleSharp23SDown;
const doubleFlat23SUp = ""; // U+E3E1   Double flat 23S-up
exports.doubleFlat23SUp = doubleFlat23SUp;
const doubleSharp49SDown = ""; // U+E3E2   Double sharp 49S-down
exports.doubleSharp49SDown = doubleSharp49SDown;
const doubleFlat49SUp = ""; // U+E3E3   Double flat 49S-up
exports.doubleFlat49SUp = doubleFlat49SUp;
const doubleSharp7v19CDown = ""; // U+E3E4   Double sharp 7:19C-down
exports.doubleSharp7v19CDown = doubleSharp7v19CDown;
const doubleFlat7v19CUp = ""; // U+E3E5   Double flat 7:19C-up
exports.doubleFlat7v19CUp = doubleFlat7v19CUp;
const doubleSharp19CDown = ""; // U+E3E6   Double sharp 19C-down
exports.doubleSharp19CDown = doubleSharp19CDown;
const doubleFlat19CUp = ""; // U+E3E7   Double flat 19C-up
exports.doubleFlat19CUp = doubleFlat19CUp;
const doubleSharp11v49CDown = ""; // U+E3E8   Double sharp 11:49C-down
exports.doubleSharp11v49CDown = doubleSharp11v49CDown;
const doubleFlat11v49CUp = ""; // U+E3E9   Double flat 11:49C-up
exports.doubleFlat11v49CUp = doubleFlat11v49CUp;
const doubleSharp143CDown = ""; // U+E3EA   Double sharp 143C-down
exports.doubleSharp143CDown = doubleSharp143CDown;
const doubleFlat143CUp = ""; // U+E3EB   Double flat 143C-up
exports.doubleFlat143CUp = doubleFlat143CUp;
const doubleSharp17kDown = ""; // U+E3EC   Double sharp 17k-down
exports.doubleSharp17kDown = doubleSharp17kDown;
const doubleFlat17kUp = ""; // U+E3ED   Double flat 17k-up
exports.doubleFlat17kUp = doubleFlat17kUp;
const doubleSharp19sDown = ""; // U+E3EE   Double sharp 19s-down
exports.doubleSharp19sDown = doubleSharp19sDown;
const doubleFlat19sUp = ""; // U+E3EF   Double flat 19s-up
exports.doubleFlat19sUp = doubleFlat19sUp;
const shaftUp = ""; // U+E3F0   Shaft up, (natural for use with only diacritics up)
exports.shaftUp = shaftUp;
const shaftDown = ""; // U+E3F1   Shaft down, (natural for use with only diacritics down)
exports.shaftDown = shaftDown;
const tickUp = ""; // U+E3F2   Acute, 5 schisma up (5s), 2 cents up
exports.tickUp = tickUp;
const tickDown = ""; // U+E3F3   Grave, 5 schisma down, 2 cents down
exports.tickDown = tickDown;
const wingUp = ""; // U+E3F4   1 mina up, 5.7.13-schismina up, 0.42 cents up
exports.wingUp = wingUp;
const wingDown = ""; // U+E3F5   1 mina down, 5.7.13-schismina down, 0.42 cents down
exports.wingDown = wingDown;
const birdUp = ""; // U+E3F6   2 minas up, 65:77-schismina up, 0.83 cents up
exports.birdUp = birdUp;
const birdDown = ""; // U+E3F7   2 minas down, 65:77-schismina down, 0.83 cents down
exports.birdDown = birdDown;
const hornUp = ""; // U+E3F8   1 tina up, 7²⋅11⋅19/5-schismina up, 0.17 cents up
exports.hornUp = hornUp;
const hornDown = ""; // U+E3F9   1 tina down, 7²⋅11⋅19/5-schismina down, 0.17 cents down
exports.hornDown = hornDown;
const wedgeUp = ""; // U+E3FA   2 tinas up, 1/(7³⋅17)-schismina up, 0.30 cents up
exports.wedgeUp = wedgeUp;
const wedgeDown = ""; // U+E3FB   2 tinas down, 1/(7³⋅17)-schismina down, 0.30 cents down
exports.wedgeDown = wedgeDown;
const mWingUp = ""; // U+E3FC   3 tinas up, 1 mina up, 1/(5⋅7⋅13)-schismina up, 0.42 cents up
exports.mWingUp = mWingUp;
const mWingDown = ""; // U+E3FD   3 tinas down, 1 mina down, 1/(5⋅7⋅13)-schismina down, 0.42 cents down
exports.mWingDown = mWingDown;
const hornwingUp = ""; // U+E3FE   4 tinas up, 5²⋅11²/7-schismina up, 0.57 cents up
exports.hornwingUp = hornwingUp;
const hornwingDown = ""; // U+E3FF   4 tinas down, 5²⋅11²/7-schismina down, 0.57 cents down
exports.hornwingDown = hornwingDown;
const wedgewingUp = ""; // U+E400   5 tinas up, 7⁴/25-schismina up, 0.72 cents up
exports.wedgewingUp = wedgewingUp;
const wedgewingDown = ""; // U+E401   5 tinas down, 7⁴/25-schismina down, 0.72 cents down
exports.wedgewingDown = wedgewingDown;
const mBirdUp = ""; // U+E402   6 tinas up, 2 minas up, 65/77-schismina up, 0.83 cents up
exports.mBirdUp = mBirdUp;
const mBirdDown = ""; // U+E403   6 tinas down, 2 minas down, 65/77-schismina down, 0.83 cents down
exports.mBirdDown = mBirdDown;
const hornbirdUp = ""; // U+E404   7 tinas up, 7/(5²⋅17)-schismina up, 1.02 cents up
exports.hornbirdUp = hornbirdUp;
const hornbirdDown = ""; // U+E405   7 tinas down, 7/(5²⋅17)-schismina down, 1.02 cents down
exports.hornbirdDown = hornbirdDown;
const wedgebirdUp = ""; // U+E406   8 tinas up, 11⋅17/(5²⋅7)-schismina up, 1.14 cents up
exports.wedgebirdUp = wedgebirdUp;
const wedgebirdDown = ""; // U+E407   8 tinas down, 11⋅17/(5²⋅7)-schismina down, 1.14 cents down
exports.wedgebirdDown = wedgebirdDown;
const wingbirdUp = ""; // U+E408   9 tinas up, 1/(7²⋅11)-schismina up, 1.26 cents up
exports.wingbirdUp = wingbirdUp;
const wingbirdDown = ""; // U+E409   9 tinas down, 1/(7²⋅11)-schismina down, 1.26 cents down
exports.wingbirdDown = wingbirdDown;
const dotUp = ""; // U+E40A   fractional tina up, 77/(5⋅37)-schismina up, 0.08 cents up
exports.dotUp = dotUp;
const dotDown = ""; // U+E40B   fractional tina down, 77/(5⋅37)-schismina down, 0.08 cents down
exports.dotDown = dotDown;
const SAGITTAL_ACCIDENTALS = {
    [types_1.Code["|("]]: _5v7KUp,
    [types_1.Code["!("]]: _5v7KDown,
    [types_1.Code["/|"]]: _5CUp,
    [types_1.Code["\\!"]]: _5CDown,
    [types_1.Code["|)"]]: _7CUp,
    [types_1.Code["!)"]]: _7CDown,
    [types_1.Code["//|"]]: _25SUp,
    [types_1.Code["\\\\!"]]: _25SDown,
    [types_1.Code["/|)"]]: _35MUp,
    [types_1.Code["\\!)"]]: _35MDown,
    [types_1.Code["/|\\"]]: _11MUp,
    [types_1.Code["\\!/"]]: _11MDown,
    [types_1.Code["(|)"]]: _11LUp,
    [types_1.Code["(!)"]]: _11LDown,
    [types_1.Code["(|\\"]]: _35LUp,
    [types_1.Code["(!/"]]: _35LDown,
    [types_1.Code[")||("]]: sharp25SDown,
    [types_1.Code[")!!("]]: flat25SUp,
    [types_1.Code["||)"]]: sharp7CDown,
    [types_1.Code["!!)"]]: flat7CUp,
    [types_1.Code["||\\"]]: sharp5CDown,
    [types_1.Code["!!/"]]: flat5CUp,
    [types_1.Code["/||)"]]: sharp5v7kDown,
    [types_1.Code["\\!!)"]]: flat5v7kUp,
    [types_1.Code["/||\\"]]: apotomeUp,
    [types_1.Code["\\!!/"]]: apotomeDown,
    [types_1.Code["|||("]]: sharp5v7kUp,
    [types_1.Code["!!!("]]: flat5v7kDown,
    [types_1.Code["/|||"]]: sharp5CUp,
    [types_1.Code["\\!!!"]]: flat5CDown,
    [types_1.Code["|||)"]]: sharp7CUp,
    [types_1.Code["!!!)"]]: flat7CDown,
    [types_1.Code["//|||"]]: sharp25SUp,
    [types_1.Code["\\\\!!!"]]: flat25SDown,
    [types_1.Code["/|||)"]]: sharp35MUp,
    [types_1.Code["\\!!!)"]]: flat35MDown,
    [types_1.Code["/|||\\"]]: sharp11MUp,
    [types_1.Code["\\!!!/"]]: flat11MDown,
    [types_1.Code["(|||)"]]: sharp11LUp,
    [types_1.Code["(!!!)"]]: flat11LDown,
    [types_1.Code["(|||\\"]]: sharp35LUp,
    [types_1.Code["(!!!/"]]: flat35LDown,
    [types_1.Code[")X("]]: doubleSharp25SDown,
    [types_1.Code[")Y("]]: doubleFlat25SUp,
    [types_1.Code["X)"]]: doubleSharp7CDown,
    [types_1.Code["Y)"]]: doubleFlat7CUp,
    [types_1.Code["X\\"]]: doubleSharp5CDown,
    [types_1.Code["Y/"]]: doubleFlat5CUp,
    [types_1.Code["/X)"]]: doubleSharp5v7kDown,
    [types_1.Code["\\Y)"]]: doubleFlat5v7kUp,
    [types_1.Code["/X\\"]]: doubleSharp,
    [types_1.Code["\\Y/"]]: doubleFlat,
    [types_1.Code[")|("]]: _7v11KUp,
    [types_1.Code[")!("]]: _7v11KDown,
    [types_1.Code["~|("]]: _17CUp,
    [types_1.Code["~!("]]: _17CDown,
    [types_1.Code["|\\"]]: _55CUp,
    [types_1.Code["!/"]]: _55CDown,
    [types_1.Code["(|"]]: _7v11CUp,
    [types_1.Code["(!"]]: _7v11CDown,
    [types_1.Code["(|("]]: _5v11SUp,
    [types_1.Code["(!("]]: _5v11SDown,
    [types_1.Code["~||("]]: sharp5v11SDown,
    [types_1.Code["~!!("]]: flat5v11SUp,
    [types_1.Code[")||~"]]: sharp7v11CDown,
    [types_1.Code[")!!~"]]: flat7v11CUp,
    [types_1.Code["/||"]]: sharp55CDown,
    [types_1.Code["\\!!"]]: flat55CUp,
    [types_1.Code["(||("]]: sharp17CDown,
    [types_1.Code["(!!("]]: flat17CUp,
    [types_1.Code["//||"]]: sharp7v11kDown,
    [types_1.Code["\\\\!!"]]: flat7v11kUp,
    [types_1.Code[")|||("]]: sharp7v11kUp,
    [types_1.Code[")!!!("]]: flat7v11kDown,
    [types_1.Code["~|||("]]: sharp17CUp,
    [types_1.Code["~!!!("]]: flat17CDown,
    [types_1.Code["|||\\"]]: sharp55CUp,
    [types_1.Code["!!!/"]]: flat55CDown,
    [types_1.Code["(|||"]]: sharp7v11CUp,
    [types_1.Code["(!!!"]]: flat7v11CDown,
    [types_1.Code["(|||("]]: sharp5v11SUp,
    [types_1.Code["(!!!("]]: flat5v11SDown,
    [types_1.Code["~X("]]: doubleSharp5v11SDown,
    [types_1.Code["~Y("]]: doubleFlat5v11SUp,
    [types_1.Code[")X~"]]: doubleSharp7v11CDown,
    [types_1.Code[")Y~"]]: doubleFlat7v11CUp,
    [types_1.Code["/X"]]: doubleSharp55CDown,
    [types_1.Code["\\Y"]]: doubleFlat55CUp,
    [types_1.Code["(X("]]: doubleSharp17CDown,
    [types_1.Code["(Y("]]: doubleFlat17CUp,
    [types_1.Code["//X"]]: doubleSharp7v11kDown,
    [types_1.Code["\\\\Y"]]: doubleFlat7v11kUp,
    [types_1.Code["|~"]]: _23CUp,
    [types_1.Code["!~"]]: _23CDown,
    [types_1.Code[")/|"]]: _5v19CUp,
    [types_1.Code[")\\!"]]: _5v19CDown,
    [types_1.Code["/|~"]]: _5v23SUp,
    [types_1.Code["\\!~"]]: _5v23SDown,
    [types_1.Code["||~"]]: sharp5v23SDown,
    [types_1.Code["!!~"]]: flat5v23SUp,
    [types_1.Code[")||)"]]: sharp5v19CDown,
    [types_1.Code[")!!)"]]: flat5v19CUp,
    [types_1.Code["/||~"]]: sharp23CDown,
    [types_1.Code["\\!!~"]]: flat23CUp,
    [types_1.Code["|||~"]]: sharp23CUp,
    [types_1.Code["!!!~"]]: flat23CDown,
    [types_1.Code[")/|||"]]: sharp5v19CUp,
    [types_1.Code[")\\!!!"]]: flat5v19CDown,
    [types_1.Code["/|||~"]]: sharp5v23SUp,
    [types_1.Code["\\!!!~"]]: flat5v23SDown,
    [types_1.Code["X~"]]: doubleSharp5v23SDown,
    [types_1.Code["Y~"]]: doubleFlat5v23SUp,
    [types_1.Code[")X)"]]: doubleSharp5v19CDown,
    [types_1.Code[")Y)"]]: doubleFlat5v19CUp,
    [types_1.Code["/X~"]]: doubleSharp23CDown,
    [types_1.Code["\\Y~"]]: doubleFlat23CUp,
    [types_1.Code[")|"]]: _19sUp,
    [types_1.Code[")!"]]: _19sDown,
    [types_1.Code["~|"]]: _17KUp,
    [types_1.Code["~!"]]: _17KDown,
    [types_1.Code[")~|"]]: _143CUp,
    [types_1.Code[")~!"]]: _143CDown,
    [types_1.Code["~~|"]]: _11v49CUp,
    [types_1.Code["~~!"]]: _11v49CDown,
    [types_1.Code[")|~"]]: _19CUp,
    [types_1.Code[")!~"]]: _19CDown,
    [types_1.Code[")|)"]]: _7v19CUp,
    [types_1.Code[")!)"]]: _7v19CDown,
    [types_1.Code["~|)"]]: _49SUp,
    [types_1.Code["~!)"]]: _49SDown,
    [types_1.Code["~|\\"]]: _23SUp,
    [types_1.Code["~!/"]]: _23SDown,
    [types_1.Code[")//|"]]: _5v13MUp,
    [types_1.Code[")\\\\!"]]: _5v13MDown,
    [types_1.Code["(|~"]]: _11v19MUp,
    [types_1.Code["(!~"]]: _11v19MDown,
    [types_1.Code["(/|"]]: _49MUp,
    [types_1.Code["(\\!"]]: _49MDown,
    [types_1.Code[")/|\\"]]: _5v49MUp,
    [types_1.Code[")\\!/"]]: _5v49MDown,
    [types_1.Code["|\\)"]]: _49LUp,
    [types_1.Code["!/)"]]: _49LDown,
    [types_1.Code["|\\\\"]]: _11v19LUp,
    [types_1.Code["!//"]]: _11v19LDown,
    [types_1.Code[")|\\\\"]]: _5v13LUp,
    [types_1.Code[")!//"]]: _5v13LDown,
    [types_1.Code[")~||"]]: sharp23SDown,
    [types_1.Code[")~!!"]]: flat23SUp,
    [types_1.Code["~~||"]]: sharp49SDown,
    [types_1.Code["~~!!"]]: flat49SUp,
    [types_1.Code[")/||"]]: sharp7v19CDown,
    [types_1.Code[")\\!!"]]: flat7v19CUp,
    [types_1.Code["(||"]]: sharp19CDown,
    [types_1.Code["(!!"]]: flat19CUp,
    [types_1.Code["~||)"]]: sharp11v49CDown,
    [types_1.Code["~!!)"]]: flat11v49CUp,
    [types_1.Code["~||\\"]]: sharp143CDown,
    [types_1.Code["~!!/"]]: flat143CUp,
    [types_1.Code[")//||"]]: sharp17kDown,
    [types_1.Code[")\\\\!!"]]: flat17kUp,
    [types_1.Code["(||~"]]: sharp19sDown,
    [types_1.Code["(!!~"]]: flat19sUp,
    [types_1.Code[")|||"]]: sharp19sUp,
    [types_1.Code[")!!!"]]: flat19sDown,
    [types_1.Code["~|||"]]: sharp17kUp,
    [types_1.Code["~!!!"]]: flat17kDown,
    [types_1.Code[")~|||"]]: sharp143CUp,
    [types_1.Code[")~!!!"]]: flat143CDown,
    [types_1.Code["~~|||"]]: sharp11v49CUp,
    [types_1.Code["~~!!!"]]: flat11v49CDown,
    [types_1.Code[")|||~"]]: sharp19CUp,
    [types_1.Code[")!!!~"]]: flat19CDown,
    [types_1.Code[")|||)"]]: sharp7v19CUp,
    [types_1.Code[")!!!)"]]: flat7v19CDown,
    [types_1.Code["~|||)"]]: sharp49SUp,
    [types_1.Code["~!!!)"]]: flat49SDown,
    [types_1.Code["~|||\\"]]: sharp23SUp,
    [types_1.Code["~!!!/"]]: flat23SDown,
    [types_1.Code[")//|||"]]: sharp5v13MUp,
    [types_1.Code[")\\\\!!!"]]: flat5v13MDown,
    [types_1.Code["(|||~"]]: sharp11v19MUp,
    [types_1.Code["(!!!~"]]: flat11v19MDown,
    [types_1.Code["(/|||"]]: sharp49MUp,
    [types_1.Code["(\\!!!"]]: flat49MDown,
    [types_1.Code[")/|||\\"]]: sharp5v49MUp,
    [types_1.Code[")\\!!!/"]]: flat5v49MDown,
    [types_1.Code["|||\\)"]]: sharp49LUp,
    [types_1.Code["!!!/)"]]: flat49LDown,
    [types_1.Code["|||\\\\"]]: sharp11v19LUp,
    [types_1.Code["!!!//"]]: flat11v19LDown,
    [types_1.Code[")|||\\\\"]]: sharp5v13LUp,
    [types_1.Code[")!!!//"]]: flat5v13LDown,
    [types_1.Code[")~X"]]: doubleSharp23SDown,
    [types_1.Code[")~Y"]]: doubleFlat23SUp,
    [types_1.Code["~~X"]]: doubleSharp49SDown,
    [types_1.Code["~~Y"]]: doubleFlat49SUp,
    [types_1.Code[")/X"]]: doubleSharp7v19CDown,
    [types_1.Code[")\\Y"]]: doubleFlat7v19CUp,
    [types_1.Code["(X"]]: doubleSharp19CDown,
    [types_1.Code["(Y"]]: doubleFlat19CUp,
    [types_1.Code["~X)"]]: doubleSharp11v49CDown,
    [types_1.Code["~Y)"]]: doubleFlat11v49CUp,
    [types_1.Code["~X\\"]]: doubleSharp143CDown,
    [types_1.Code["~Y/"]]: doubleFlat143CUp,
    [types_1.Code[")//X"]]: doubleSharp17kDown,
    [types_1.Code[")\\\\Y"]]: doubleFlat17kUp,
    [types_1.Code["(X~"]]: doubleSharp19sDown,
    [types_1.Code["(Y~"]]: doubleFlat19sUp,
    [types_1.Code["|"]]: shaftUp,
    [types_1.Code["!"]]: shaftDown,
    [types_1.Code["'"]]: tickUp,
    [types_1.Code["."]]: tickDown,
    [types_1.Code["`"]]: wingUp,
    [types_1.Code[","]]: wingDown,
    [types_1.Code["``"]]: birdUp,
    [types_1.Code[",,"]]: birdDown,
    [types_1.Code["@1"]]: hornUp,
    [types_1.Code["l1"]]: hornDown,
    [types_1.Code["@2"]]: wedgeUp,
    [types_1.Code["l2"]]: wedgeDown,
    [types_1.Code["@3"]]: mWingUp,
    [types_1.Code["l3"]]: mWingDown,
    [types_1.Code["@4"]]: hornwingUp,
    [types_1.Code["l4"]]: hornwingDown,
    [types_1.Code["@5"]]: wedgewingUp,
    [types_1.Code["l5"]]: wedgewingDown,
    [types_1.Code["@6"]]: mBirdUp,
    [types_1.Code["l6"]]: mBirdDown,
    [types_1.Code["@7"]]: hornbirdUp,
    [types_1.Code["l7"]]: hornbirdDown,
    [types_1.Code["@8"]]: wedgebirdUp,
    [types_1.Code["l8"]]: wedgebirdDown,
    [types_1.Code["@9"]]: wingbirdUp,
    [types_1.Code["l9"]]: wingbirdDown,
    [types_1.Code["@."]]: dotUp,
    [types_1.Code["l."]]: dotDown,
};
exports.SAGITTAL_ACCIDENTALS = SAGITTAL_ACCIDENTALS;


/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.down = exports.up = exports.UPS_AND_DOWNS_ACCIDENTALS = void 0;
const types_1 = __webpack_require__(5);
// See: https://w3c.github.io/smufl/gitbook/tables/arrows-and-arrowheads.html
const up = ""; // U+EB88
exports.up = up;
const down = ""; // U+EB8C
exports.down = down;
const UPS_AND_DOWNS_ACCIDENTALS = {
    [types_1.Code["^"]]: up,
    [types_1.Code["v"]]: down,
};
exports.UPS_AND_DOWNS_ACCIDENTALS = UPS_AND_DOWNS_ACCIDENTALS;


/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.unicodeFromCode = void 0;
// TODO: Probably a lot of these types and variable names can be refined now that we have Code type
const unicodeFromCode = (userInput) => String.fromCharCode(parseInt(userInput.replace(/^u\+(.*)/, "0x$1")));
exports.unicodeFromCode = unicodeFromCode;


/***/ })
/******/ ]);