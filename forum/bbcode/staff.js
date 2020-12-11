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
const types_1 = __webpack_require__(242);
const BASS_CLEF_INITIATION = `${types_1.Code["st24"]} ${types_1.Code["bscf"]} sp `;
const TREBLE_CLEF_INITIATION = `${types_1.Code["st24"]} ${types_1.Code["tbcf"]} sp `;
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
const general_1 = __webpack_require__(3);
const accidentals_1 = __webpack_require__(240);
// TODO: clean these up
// tslint:disable-next-line:no-reaching-imports
const conventional_1 = __webpack_require__(241);
const sagittal_1 = __webpack_require__(245);
const combiningStaffPositions_1 = __webpack_require__(247);
const constants_1 = __webpack_require__(248);
const getUnicode_1 = __webpack_require__(249);
const globals_1 = __webpack_require__(252);
const space_1 = __webpack_require__(253);
const types_1 = __webpack_require__(242);
const unicodeMap_1 = __webpack_require__(251);
const canBePositioned = (unicode) => Object.values(accidentals_1.ACCIDENTALS).includes(unicode)
    || Object.values(unicodeMap_1.NOTES).includes(unicode)
    || Object.values(unicodeMap_1.BEAMED_GROUPS_OF_NOTES).includes(unicode)
    || Object.values(unicodeMap_1.CLEFS).includes(unicode)
    || unicode === unicodeMap_1.lgln;
// TODO: it would be better if we went by the unicode range, to support arbitrary unicode input
//  I think that would involve every unicode map object also containing the unicode codepoint in addition to the unicode
//  Or perhaps... instead... sigh... so we can just see it, rather than in a comment, and everything passes through that
//  Helper method to convert to the actual unicode symbol from its codepoint.
//  That is, assuming the \u form of it can also be looked at and compared to a range
//  Actually I don't think it'll be that bad,
//  You can just take the existing unicode and say > \uE022 and < \uEF88 or whatever
// tslint:disable:max-line-length
/*
\uE022 to \uE02F // leger lines
\uE050 to \uE07F // clefs
\uE0A0 to \uE21F // noteheads, notes, beamed groups, stems
\uE240 to \uE4FF // flags, accidentals, articulation, holds and pauses, rests
\uE900 to \uEA1F // Medieval and Renaissance: clefs, prolations, noteheads and stems, notes, oblique forms, plainchant single/multi/articulations, accidentals, rests, miscellany.
\uEC30 to \uEC3F // Kievan square notation
 */
const applySmartSpace = (space) => {
    if (!globals_1.staffState.smartStaffOn) { // TODO: this could probably be simppiflied
        const spaceUnicode = space_1.computeSpaceUnicode(globals_1.staffState.smartSpace);
        globals_1.staffState.smartSpace = 0;
        return spaceUnicode;
    }
    // We've got enough staff ahead of us still to apply the advance and still be within it
    if (globals_1.staffState.smartStaff >= space) {
        const spaceUnicode = space_1.computeSpaceUnicode(space);
        globals_1.staffState.smartStaff = globals_1.staffState.smartStaff - space;
        globals_1.staffState.smartSpace = 0;
        return spaceUnicode;
    }
    else {
        const useUpExistingStaffSpaceUnicode = space_1.computeSpaceUnicode(globals_1.staffState.smartStaff);
        const remainingSpaceWeNeedToApply = space - globals_1.staffState.smartStaff;
        const remainingStaffSpaceUnicode = space_1.computeSpaceUnicode(remainingSpaceWeNeedToApply);
        globals_1.staffState.smartStaff = 24 - remainingSpaceWeNeedToApply;
        globals_1.staffState.smartSpace = 0;
        return general_1.sumTexts(useUpExistingStaffSpaceUnicode, unicodeMap_1.st, remainingStaffSpaceUnicode);
    }
};
const getSpaceForUnicode = (unicode) => {
    if ([...Object.values(unicodeMap_1.CLEFS)].includes(unicode))
        return 24;
    else if ([unicodeMap_1.ntdb].includes(unicode))
        return 23;
    // 22
    else if ([unicodeMap_1.nt8, unicodeMap_1.nt16].includes(unicode))
        return 21;
    // 20
    // 19
    // 18
    else if ([unicodeMap_1.tm0, unicodeMap_1.tm1, unicodeMap_1.tm2, unicodeMap_1.tm3, unicodeMap_1.tm4, unicodeMap_1.tm5, unicodeMap_1.tm6, unicodeMap_1.tm7, unicodeMap_1.tm8, unicodeMap_1.tm9, unicodeMap_1.tmcm].includes(unicode))
        return 17;
    // 16
    else if ([conventional_1.bb].includes(unicode))
        return 15;
    else if ([sagittal_1._35LUp, sagittal_1._35LDown].includes(unicode))
        return 14;
    else if ([unicodeMap_1.lgln, unicodeMap_1.nt1, unicodeMap_1.nt2, unicodeMap_1.nt4, unicodeMap_1.nt2dn, unicodeMap_1.nt4dn, unicodeMap_1.nt8dn, unicodeMap_1.nt16dn, conventional_1.x, sagittal_1._11LUp, sagittal_1._11LDown, sagittal_1._11MUp, sagittal_1._11MDown].includes(unicode))
        return 13;
    // 12
    else if ([sagittal_1._35MUp, sagittal_1._35MDown].includes(unicode))
        return 11;
    else if ([conventional_1.sharp, conventional_1.smallDoubleSharp, sagittal_1._25SUp, sagittal_1._25SDown].includes(unicode))
        return 10;
    else if ([conventional_1.b].includes(unicode))
        return 9;
    // 8
    else if ([conventional_1.n, sagittal_1._5v7kUp, sagittal_1._5v7kDown, sagittal_1._5CUp, sagittal_1._5CDown, sagittal_1._7CUp, sagittal_1._7CDown].includes(unicode))
        return 7;
    else if ([unicodeMap_1.agdt].includes(unicode))
        return 6;
    // 5
    // 4
    // 3
    // 2
    // 1
    else if (true)
        return 0;
    return 11;
};
const recordSpace = (unicode) => {
    globals_1.staffState.smartSpace = general_1.max(globals_1.staffState.smartSpace, getSpaceForUnicode(unicode));
};
const recordStaff = (userInput) => {
    globals_1.staffState.smartStaffOn = true;
    if (userInput === types_1.Code["st"])
        globals_1.staffState.smartStaff = globals_1.staffState.smartStaff + 24;
    if (userInput === types_1.Code["st8"])
        globals_1.staffState.smartStaff = globals_1.staffState.smartStaff + 8;
    if (userInput === types_1.Code["st16"])
        globals_1.staffState.smartStaff = globals_1.staffState.smartStaff + 16;
    if (userInput === types_1.Code["st24"])
        globals_1.staffState.smartStaff = globals_1.staffState.smartStaff + 24;
};
const staffCodeToUnicode = (staffCode) => {
    general_1.setAllPropertiesOfObjectOnAnother({ objectToChange: globals_1.staffState, objectWithProperties: constants_1.INITIAL_STAFF_STATE });
    let staffPosition = ""; // TODO: blank uni constant
    return `${staffCode.toLowerCase()} sp`
        .replace(/<br>/g, " ")
        .replace(/\n/g, " ")
        .replace(/\t/g, " ")
        .split(" ")
        .map((userInput) => {
        if (userInput === "sp") {
            return applySmartSpace(globals_1.staffState.smartSpace);
        }
        else if (userInput.match("sp") && globals_1.staffState.smartStaffOn) {
            const amount = parseInt(userInput.replace("sp", ""));
            return applySmartSpace(amount);
        }
        if (["st", "st8", "st16", "st24"].includes(userInput)) {
            recordStaff(userInput);
        }
        let unicode = getUnicode_1.getUnicode(userInput, types_1.Clef.TREBLE);
        let output;
        if (combiningStaffPositions_1.COMBINING_STAFF_POSITIONS.includes(unicode)) {
            staffPosition = unicode;
            output = "";
        }
        else if (canBePositioned(unicode)) {
            output = general_1.sumTexts(staffPosition, unicode);
        }
        else {
            output = unicode;
        }
        recordSpace(unicode);
        return output;
    })
        .join("");
};
exports.staffCodeToUnicode = staffCodeToUnicode;


/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.clearLogFiles = exports.BLANK = exports.IDENTIFYING_ACCIDENTAL_CHARS = exports.IDENTIFYING_MONZO_CHARS = exports.IDENTIFYING_COMMA_NAME_CHARS = exports.alignFormattedDecimal = exports.sumTexts = exports.camelCaseToConstantCase = exports.cleanArray = exports.setAllPropertiesOfObjectOnAnother = exports.cleanObject = exports.computeKeyPath = exports.computeExampleElement = exports.parseBoolean = exports.isString = exports.offset = exports.deepMap = exports.isObject = exports.MAX_JS_PRECISION = exports.NOT_FOUND = exports.setAt = exports.isEmpty = exports.decrement = exports.increment = exports.finalElement = exports.indexOfFinalElement = exports.ZERO_ONE_INDEX_DIFF = exports.sort = exports.shuffle = exports.isArray = exports.shallowClone = exports.RankStrategy = exports.rank = exports.now = exports.merge = exports.isUndefined = exports.isNumber = exports.isCloseTo = exports.ExtensionBaseType = exports.doOnNextEventLoop = exports.dig = exports.deepEquals = exports.deepClone = exports.concat = exports.computeTrimmedArray = exports.computeRange = exports.computePlusOrMinusRange = exports.computeExtensionBase = exports.computeDeepDistinct = exports.DEFAULT_PRECISION = void 0;
exports.computeCombinations = exports.ceil = exports.BASE_2 = exports.abs = exports.program = exports.DEFAULT_IO_SETTINGS = exports.formatBound = exports.MERGED_CELL_INDICATOR = exports.NUMERIC_CHARS = exports.DOT_OPERATOR = exports.TimePrecision = exports.Alignment = exports.parseDecimal = exports.parseInteger = exports.formatCents = exports.IDENTIFYING_QUOTIENT_CHARS = exports.IDENTIFYING_CENTS_CHARS = exports.parseCents = exports.formatPitch = exports.TableFormat = exports.split = exports.readLines = exports.time = exports.splitFieldTitlesIntoRowsBySpaces = exports.TAB = exports.SUPERSCRIPT_NUMBERS = exports.COMMA = exports.stringify = exports.SPACE = exports.setLogTargets = exports.saveLog = exports.removeColor = exports.parseQuotient = exports.parse23FreeClass = exports.parseMonzo = exports.setupScriptAndIo = exports.NEWLINE = exports.LogTarget = exports.join = exports.ioSettings = exports.IO_PRECISION = exports.formatTime = exports.formatTable = exports.formatQuotient = exports.formatDecimal = exports.formatMonzo = exports.formatIntegerDecimal = exports.computePx = exports.ScriptFlag = exports.colorize = void 0;
exports.isQuotientRational = exports.computeDecimalFromQuotient = exports.doForEachRationalMonzo = exports.radiansToDegrees = exports.computeAngle = exports.isIntegerDecimalRough = exports.computeRationalDecimalGpf = exports.isDecimalInteger = exports.computeLowestTermsRationalQuotient = exports.areMonzosEqual = exports.computeDecimalFromMonzo = exports.add = exports.TWO_PRIME_INDEX = exports.computeSubQuotient = exports.computeRoughRationalQuotient = exports.THREE_SMOOTHNESS = exports.THREE_PRIME_INDEX = exports.computeSuperQuotient = exports.sumMonzos = exports.sum = exports.round = exports.computePrimes = exports.pow = exports.ONE = exports.negative = exports.multiply = exports.isMonzoSuper = exports.mod = exports.min = exports.max = exports.log = exports.invertMonzo = exports.integerDivide = exports.QuotientPartType = exports.floor = exports.FIVE_ROUGHNESS = exports.THREE_ROUGHNESS = exports.FIVE_PRIME_INDEX = exports.dividesEvenly = exports.Direction = exports.subtract = exports.count = exports.computeTriangularNumber = exports.computeSuperMonzo = exports.computeRoughRationalMonzo = exports.computeQuotientFromMonzo = exports.computePrimeCount = exports.computeRationalMonzoFromRationalQuotient = exports.isMonzoSub = exports.computeDistributions = void 0;
exports.computeRationalQuotientSmoothness = exports.sumRationalScamons = exports.divide = exports.scaleScamon = exports.computeRationalDecimalCopf = exports.isEven = exports.computePatentVal = exports.computeMonzoMapping = exports.subtractRationalScamons = exports.invertQuotient = exports.isLowestTerms = exports.multiplyScamon = exports.invertScamon = exports.computeRationalQuotientFromRationalScamon = exports.isRationalScamonSmooth = exports.computeRationalScamonSmoothness = exports.isRationalScamonRough = exports.computeRationalScamonGeometricMean = exports.computeIrrationalDecimalFromScamon = exports.addRationalScamons = exports.isRationalScamonUnison = exports.isRationalScamonSub = exports.computeRationalScamonFromRationalMonzo = exports.areRationalScamonsEqual = exports.addScamons = exports.computeScamonFromQuotient = exports.computeScamonFromMonzo = exports.computeRationalScamonSopfr = exports.computeRationalScamonCopfr = exports.HALF_SCALER = exports.computeScamonFromDecimal = exports.halveScamon = exports.isScamonRational = exports.isScamonUnison = exports.isScamonSub = exports.isScamonLesserOrEqual = exports.isScamonGreaterOrEqual = exports.isScamonLesser = exports.isScamonGreater = exports.computeSuperScamon = exports.areScamonsEqual = exports.MeanType = exports.reciprocal = exports.EMPTY_MONZO = exports.computeRationalMonzoSmoothness = exports.computeRationalMonzoSopfr = exports.computeRationalMonzoCopfr = exports.computeRationalMonzoFromRationalDecimal = exports.isMonzoRational = exports.computeRationalDecimalCopfr = void 0;
exports.runScriptAndGetConsoleOutput = exports.customMatchers = exports.slowReporter = exports.specNameReporter = exports.specReporter = exports.onlyRunInCi = exports.catchEmptyFiles = exports.catchBadSpecFiles = exports.catchBadMainDescriptions = exports.computePossibilities = exports.computeParameterValues = exports.computePitchExpectation = exports.two3FreeClassFixture = exports.computeLowerAndUpperExclusive = exports.SYNTONIC_COMMA = exports.SEPTIMAL_KLEISMA = exports.SEPTIMAL_COMMA = exports.SCHISMINA = exports.SCHISMA = exports.APOTOME = exports.OCTAVE_WINDOW = exports.THIRTYONE_THREE_COMMA = exports.PYTHAGOREAN_WHOLE_TONE = exports.PYTHAGOREAN_LARGE_DIESIS = exports.SUPERCOMPLEX_PYTHAGOREAN_KLEISMA = exports.PYTHAGOREAN_SCHISMA = exports.PYTHAGOREAN_LIMMA = exports.PYTHAGOREAN_COMMA = exports.TWO_3_FREE_CLASS_SIGN = exports.TWO_3_FREE = exports.format23FreeClass = exports.compute23FreeClassName = exports.computeCentsFromPitch = exports.THREE_PRIME_LIMIT = exports.compute23FreeClass = exports.COMMA_POPULARITIES = exports.computePitchFromCents = exports.UNISON = exports.subtractPitch = exports.dividePitch = exports.CENTS_PER_OCTAVE = exports.maxScamon = exports.computeArithmeticMean = exports.computeIrrationalMonzoFromScamon = exports.IRRATIONAL_SCAMON_BASE_MONZO = exports.computeRationalMonzoFromRationalScamon = exports.FIVE_SMOOTHNESS = exports.computeRationalScamonFromRationalQuotient = void 0;
var code_1 = __webpack_require__(4);
Object.defineProperty(exports, "DEFAULT_PRECISION", { enumerable: true, get: function () { return code_1.DEFAULT_PRECISION; } });
Object.defineProperty(exports, "computeDeepDistinct", { enumerable: true, get: function () { return code_1.computeDeepDistinct; } });
Object.defineProperty(exports, "computeExtensionBase", { enumerable: true, get: function () { return code_1.computeExtensionBase; } });
Object.defineProperty(exports, "computePlusOrMinusRange", { enumerable: true, get: function () { return code_1.computePlusOrMinusRange; } });
Object.defineProperty(exports, "computeRange", { enumerable: true, get: function () { return code_1.computeRange; } });
Object.defineProperty(exports, "computeTrimmedArray", { enumerable: true, get: function () { return code_1.computeTrimmedArray; } });
Object.defineProperty(exports, "concat", { enumerable: true, get: function () { return code_1.concat; } });
Object.defineProperty(exports, "deepClone", { enumerable: true, get: function () { return code_1.deepClone; } });
Object.defineProperty(exports, "deepEquals", { enumerable: true, get: function () { return code_1.deepEquals; } });
Object.defineProperty(exports, "dig", { enumerable: true, get: function () { return code_1.dig; } });
Object.defineProperty(exports, "doOnNextEventLoop", { enumerable: true, get: function () { return code_1.doOnNextEventLoop; } });
Object.defineProperty(exports, "ExtensionBaseType", { enumerable: true, get: function () { return code_1.ExtensionBaseType; } });
Object.defineProperty(exports, "isCloseTo", { enumerable: true, get: function () { return code_1.isCloseTo; } });
Object.defineProperty(exports, "isNumber", { enumerable: true, get: function () { return code_1.isNumber; } });
Object.defineProperty(exports, "isUndefined", { enumerable: true, get: function () { return code_1.isUndefined; } });
Object.defineProperty(exports, "merge", { enumerable: true, get: function () { return code_1.merge; } });
Object.defineProperty(exports, "now", { enumerable: true, get: function () { return code_1.now; } });
Object.defineProperty(exports, "rank", { enumerable: true, get: function () { return code_1.rank; } });
Object.defineProperty(exports, "RankStrategy", { enumerable: true, get: function () { return code_1.RankStrategy; } });
Object.defineProperty(exports, "shallowClone", { enumerable: true, get: function () { return code_1.shallowClone; } });
Object.defineProperty(exports, "isArray", { enumerable: true, get: function () { return code_1.isArray; } });
Object.defineProperty(exports, "shuffle", { enumerable: true, get: function () { return code_1.shuffle; } });
Object.defineProperty(exports, "sort", { enumerable: true, get: function () { return code_1.sort; } });
Object.defineProperty(exports, "ZERO_ONE_INDEX_DIFF", { enumerable: true, get: function () { return code_1.ZERO_ONE_INDEX_DIFF; } });
Object.defineProperty(exports, "indexOfFinalElement", { enumerable: true, get: function () { return code_1.indexOfFinalElement; } });
Object.defineProperty(exports, "finalElement", { enumerable: true, get: function () { return code_1.finalElement; } });
Object.defineProperty(exports, "increment", { enumerable: true, get: function () { return code_1.increment; } });
Object.defineProperty(exports, "decrement", { enumerable: true, get: function () { return code_1.decrement; } });
Object.defineProperty(exports, "isEmpty", { enumerable: true, get: function () { return code_1.isEmpty; } });
Object.defineProperty(exports, "setAt", { enumerable: true, get: function () { return code_1.setAt; } });
Object.defineProperty(exports, "NOT_FOUND", { enumerable: true, get: function () { return code_1.NOT_FOUND; } });
Object.defineProperty(exports, "MAX_JS_PRECISION", { enumerable: true, get: function () { return code_1.MAX_JS_PRECISION; } });
Object.defineProperty(exports, "isObject", { enumerable: true, get: function () { return code_1.isObject; } });
Object.defineProperty(exports, "deepMap", { enumerable: true, get: function () { return code_1.deepMap; } });
Object.defineProperty(exports, "offset", { enumerable: true, get: function () { return code_1.offset; } });
Object.defineProperty(exports, "isString", { enumerable: true, get: function () { return code_1.isString; } });
Object.defineProperty(exports, "parseBoolean", { enumerable: true, get: function () { return code_1.parseBoolean; } });
Object.defineProperty(exports, "computeExampleElement", { enumerable: true, get: function () { return code_1.computeExampleElement; } });
Object.defineProperty(exports, "computeKeyPath", { enumerable: true, get: function () { return code_1.computeKeyPath; } });
Object.defineProperty(exports, "cleanObject", { enumerable: true, get: function () { return code_1.cleanObject; } });
Object.defineProperty(exports, "setAllPropertiesOfObjectOnAnother", { enumerable: true, get: function () { return code_1.setAllPropertiesOfObjectOnAnother; } });
Object.defineProperty(exports, "cleanArray", { enumerable: true, get: function () { return code_1.cleanArray; } });
Object.defineProperty(exports, "camelCaseToConstantCase", { enumerable: true, get: function () { return code_1.camelCaseToConstantCase; } });
var io_1 = __webpack_require__(62);
Object.defineProperty(exports, "sumTexts", { enumerable: true, get: function () { return io_1.sumTexts; } });
Object.defineProperty(exports, "alignFormattedDecimal", { enumerable: true, get: function () { return io_1.alignFormattedDecimal; } });
Object.defineProperty(exports, "IDENTIFYING_COMMA_NAME_CHARS", { enumerable: true, get: function () { return io_1.IDENTIFYING_COMMA_NAME_CHARS; } });
Object.defineProperty(exports, "IDENTIFYING_MONZO_CHARS", { enumerable: true, get: function () { return io_1.IDENTIFYING_MONZO_CHARS; } });
Object.defineProperty(exports, "IDENTIFYING_ACCIDENTAL_CHARS", { enumerable: true, get: function () { return io_1.IDENTIFYING_ACCIDENTAL_CHARS; } });
Object.defineProperty(exports, "BLANK", { enumerable: true, get: function () { return io_1.BLANK; } });
Object.defineProperty(exports, "clearLogFiles", { enumerable: true, get: function () { return io_1.clearLogFiles; } });
Object.defineProperty(exports, "colorize", { enumerable: true, get: function () { return io_1.colorize; } });
Object.defineProperty(exports, "ScriptFlag", { enumerable: true, get: function () { return io_1.ScriptFlag; } });
Object.defineProperty(exports, "computePx", { enumerable: true, get: function () { return io_1.computePx; } });
Object.defineProperty(exports, "formatIntegerDecimal", { enumerable: true, get: function () { return io_1.formatIntegerDecimal; } });
Object.defineProperty(exports, "formatMonzo", { enumerable: true, get: function () { return io_1.formatMonzo; } });
Object.defineProperty(exports, "formatDecimal", { enumerable: true, get: function () { return io_1.formatDecimal; } });
Object.defineProperty(exports, "formatQuotient", { enumerable: true, get: function () { return io_1.formatQuotient; } });
Object.defineProperty(exports, "formatTable", { enumerable: true, get: function () { return io_1.formatTable; } });
Object.defineProperty(exports, "formatTime", { enumerable: true, get: function () { return io_1.formatTime; } });
Object.defineProperty(exports, "IO_PRECISION", { enumerable: true, get: function () { return io_1.IO_PRECISION; } });
Object.defineProperty(exports, "ioSettings", { enumerable: true, get: function () { return io_1.ioSettings; } });
Object.defineProperty(exports, "join", { enumerable: true, get: function () { return io_1.join; } });
Object.defineProperty(exports, "LogTarget", { enumerable: true, get: function () { return io_1.LogTarget; } });
Object.defineProperty(exports, "NEWLINE", { enumerable: true, get: function () { return io_1.NEWLINE; } });
Object.defineProperty(exports, "setupScriptAndIo", { enumerable: true, get: function () { return io_1.setupScriptAndIo; } });
Object.defineProperty(exports, "parseMonzo", { enumerable: true, get: function () { return io_1.parseMonzo; } });
Object.defineProperty(exports, "parse23FreeClass", { enumerable: true, get: function () { return io_1.parse23FreeClass; } });
Object.defineProperty(exports, "parseQuotient", { enumerable: true, get: function () { return io_1.parseQuotient; } });
Object.defineProperty(exports, "removeColor", { enumerable: true, get: function () { return io_1.removeColor; } });
Object.defineProperty(exports, "saveLog", { enumerable: true, get: function () { return io_1.saveLog; } });
Object.defineProperty(exports, "setLogTargets", { enumerable: true, get: function () { return io_1.setLogTargets; } });
Object.defineProperty(exports, "SPACE", { enumerable: true, get: function () { return io_1.SPACE; } });
Object.defineProperty(exports, "stringify", { enumerable: true, get: function () { return io_1.stringify; } });
Object.defineProperty(exports, "COMMA", { enumerable: true, get: function () { return io_1.COMMA; } });
Object.defineProperty(exports, "SUPERSCRIPT_NUMBERS", { enumerable: true, get: function () { return io_1.SUPERSCRIPT_NUMBERS; } });
Object.defineProperty(exports, "TAB", { enumerable: true, get: function () { return io_1.TAB; } });
Object.defineProperty(exports, "splitFieldTitlesIntoRowsBySpaces", { enumerable: true, get: function () { return io_1.splitFieldTitlesIntoRowsBySpaces; } });
Object.defineProperty(exports, "time", { enumerable: true, get: function () { return io_1.time; } });
Object.defineProperty(exports, "readLines", { enumerable: true, get: function () { return io_1.readLines; } });
Object.defineProperty(exports, "split", { enumerable: true, get: function () { return io_1.split; } });
Object.defineProperty(exports, "TableFormat", { enumerable: true, get: function () { return io_1.TableFormat; } });
Object.defineProperty(exports, "formatPitch", { enumerable: true, get: function () { return io_1.formatPitch; } });
Object.defineProperty(exports, "parseCents", { enumerable: true, get: function () { return io_1.parseCents; } });
Object.defineProperty(exports, "IDENTIFYING_CENTS_CHARS", { enumerable: true, get: function () { return io_1.IDENTIFYING_CENTS_CHARS; } });
Object.defineProperty(exports, "IDENTIFYING_QUOTIENT_CHARS", { enumerable: true, get: function () { return io_1.IDENTIFYING_QUOTIENT_CHARS; } });
Object.defineProperty(exports, "formatCents", { enumerable: true, get: function () { return io_1.formatCents; } });
Object.defineProperty(exports, "parseInteger", { enumerable: true, get: function () { return io_1.parseInteger; } });
Object.defineProperty(exports, "parseDecimal", { enumerable: true, get: function () { return io_1.parseDecimal; } });
Object.defineProperty(exports, "Alignment", { enumerable: true, get: function () { return io_1.Alignment; } });
Object.defineProperty(exports, "TimePrecision", { enumerable: true, get: function () { return io_1.TimePrecision; } });
Object.defineProperty(exports, "DOT_OPERATOR", { enumerable: true, get: function () { return io_1.DOT_OPERATOR; } });
Object.defineProperty(exports, "NUMERIC_CHARS", { enumerable: true, get: function () { return io_1.NUMERIC_CHARS; } });
Object.defineProperty(exports, "MERGED_CELL_INDICATOR", { enumerable: true, get: function () { return io_1.MERGED_CELL_INDICATOR; } });
Object.defineProperty(exports, "formatBound", { enumerable: true, get: function () { return io_1.formatBound; } });
Object.defineProperty(exports, "DEFAULT_IO_SETTINGS", { enumerable: true, get: function () { return io_1.DEFAULT_IO_SETTINGS; } });
Object.defineProperty(exports, "program", { enumerable: true, get: function () { return io_1.program; } });
var math_1 = __webpack_require__(6);
Object.defineProperty(exports, "abs", { enumerable: true, get: function () { return math_1.abs; } });
Object.defineProperty(exports, "BASE_2", { enumerable: true, get: function () { return math_1.BASE_2; } });
Object.defineProperty(exports, "ceil", { enumerable: true, get: function () { return math_1.ceil; } });
Object.defineProperty(exports, "computeCombinations", { enumerable: true, get: function () { return math_1.computeCombinations; } });
Object.defineProperty(exports, "computeDistributions", { enumerable: true, get: function () { return math_1.computeDistributions; } });
Object.defineProperty(exports, "isMonzoSub", { enumerable: true, get: function () { return math_1.isMonzoSub; } });
Object.defineProperty(exports, "computeRationalMonzoFromRationalQuotient", { enumerable: true, get: function () { return math_1.computeRationalMonzoFromRationalQuotient; } });
Object.defineProperty(exports, "computePrimeCount", { enumerable: true, get: function () { return math_1.computePrimeCount; } });
Object.defineProperty(exports, "computeQuotientFromMonzo", { enumerable: true, get: function () { return math_1.computeQuotientFromMonzo; } });
Object.defineProperty(exports, "computeRoughRationalMonzo", { enumerable: true, get: function () { return math_1.computeRoughRationalMonzo; } });
Object.defineProperty(exports, "computeSuperMonzo", { enumerable: true, get: function () { return math_1.computeSuperMonzo; } });
Object.defineProperty(exports, "computeTriangularNumber", { enumerable: true, get: function () { return math_1.computeTriangularNumber; } });
Object.defineProperty(exports, "count", { enumerable: true, get: function () { return math_1.count; } });
Object.defineProperty(exports, "subtract", { enumerable: true, get: function () { return math_1.subtract; } });
Object.defineProperty(exports, "Direction", { enumerable: true, get: function () { return math_1.Direction; } });
Object.defineProperty(exports, "dividesEvenly", { enumerable: true, get: function () { return math_1.dividesEvenly; } });
Object.defineProperty(exports, "FIVE_PRIME_INDEX", { enumerable: true, get: function () { return math_1.FIVE_PRIME_INDEX; } });
Object.defineProperty(exports, "THREE_ROUGHNESS", { enumerable: true, get: function () { return math_1.THREE_ROUGHNESS; } });
Object.defineProperty(exports, "FIVE_ROUGHNESS", { enumerable: true, get: function () { return math_1.FIVE_ROUGHNESS; } });
Object.defineProperty(exports, "floor", { enumerable: true, get: function () { return math_1.floor; } });
Object.defineProperty(exports, "QuotientPartType", { enumerable: true, get: function () { return math_1.QuotientPartType; } });
Object.defineProperty(exports, "integerDivide", { enumerable: true, get: function () { return math_1.integerDivide; } });
Object.defineProperty(exports, "invertMonzo", { enumerable: true, get: function () { return math_1.invertMonzo; } });
Object.defineProperty(exports, "log", { enumerable: true, get: function () { return math_1.log; } });
Object.defineProperty(exports, "max", { enumerable: true, get: function () { return math_1.max; } });
Object.defineProperty(exports, "min", { enumerable: true, get: function () { return math_1.min; } });
Object.defineProperty(exports, "mod", { enumerable: true, get: function () { return math_1.mod; } });
Object.defineProperty(exports, "isMonzoSuper", { enumerable: true, get: function () { return math_1.isMonzoSuper; } });
Object.defineProperty(exports, "multiply", { enumerable: true, get: function () { return math_1.multiply; } });
Object.defineProperty(exports, "negative", { enumerable: true, get: function () { return math_1.negative; } });
Object.defineProperty(exports, "ONE", { enumerable: true, get: function () { return math_1.ONE; } });
Object.defineProperty(exports, "pow", { enumerable: true, get: function () { return math_1.pow; } });
Object.defineProperty(exports, "computePrimes", { enumerable: true, get: function () { return math_1.computePrimes; } });
Object.defineProperty(exports, "round", { enumerable: true, get: function () { return math_1.round; } });
Object.defineProperty(exports, "sum", { enumerable: true, get: function () { return math_1.sum; } });
Object.defineProperty(exports, "sumMonzos", { enumerable: true, get: function () { return math_1.sumMonzos; } });
Object.defineProperty(exports, "computeSuperQuotient", { enumerable: true, get: function () { return math_1.computeSuperQuotient; } });
Object.defineProperty(exports, "THREE_PRIME_INDEX", { enumerable: true, get: function () { return math_1.THREE_PRIME_INDEX; } });
Object.defineProperty(exports, "THREE_SMOOTHNESS", { enumerable: true, get: function () { return math_1.THREE_SMOOTHNESS; } });
Object.defineProperty(exports, "computeRoughRationalQuotient", { enumerable: true, get: function () { return math_1.computeRoughRationalQuotient; } });
Object.defineProperty(exports, "computeSubQuotient", { enumerable: true, get: function () { return math_1.computeSubQuotient; } });
Object.defineProperty(exports, "TWO_PRIME_INDEX", { enumerable: true, get: function () { return math_1.TWO_PRIME_INDEX; } });
Object.defineProperty(exports, "add", { enumerable: true, get: function () { return math_1.add; } });
Object.defineProperty(exports, "computeDecimalFromMonzo", { enumerable: true, get: function () { return math_1.computeDecimalFromMonzo; } });
Object.defineProperty(exports, "areMonzosEqual", { enumerable: true, get: function () { return math_1.areMonzosEqual; } });
Object.defineProperty(exports, "computeLowestTermsRationalQuotient", { enumerable: true, get: function () { return math_1.computeLowestTermsRationalQuotient; } });
Object.defineProperty(exports, "isDecimalInteger", { enumerable: true, get: function () { return math_1.isDecimalInteger; } });
Object.defineProperty(exports, "computeRationalDecimalGpf", { enumerable: true, get: function () { return math_1.computeRationalDecimalGpf; } });
Object.defineProperty(exports, "isIntegerDecimalRough", { enumerable: true, get: function () { return math_1.isIntegerDecimalRough; } });
Object.defineProperty(exports, "computeAngle", { enumerable: true, get: function () { return math_1.computeAngle; } });
Object.defineProperty(exports, "radiansToDegrees", { enumerable: true, get: function () { return math_1.radiansToDegrees; } });
Object.defineProperty(exports, "doForEachRationalMonzo", { enumerable: true, get: function () { return math_1.doForEachRationalMonzo; } });
Object.defineProperty(exports, "computeDecimalFromQuotient", { enumerable: true, get: function () { return math_1.computeDecimalFromQuotient; } });
Object.defineProperty(exports, "isQuotientRational", { enumerable: true, get: function () { return math_1.isQuotientRational; } });
Object.defineProperty(exports, "computeRationalDecimalCopfr", { enumerable: true, get: function () { return math_1.computeRationalDecimalCopfr; } });
Object.defineProperty(exports, "isMonzoRational", { enumerable: true, get: function () { return math_1.isMonzoRational; } });
Object.defineProperty(exports, "computeRationalMonzoFromRationalDecimal", { enumerable: true, get: function () { return math_1.computeRationalMonzoFromRationalDecimal; } });
Object.defineProperty(exports, "computeRationalMonzoCopfr", { enumerable: true, get: function () { return math_1.computeRationalMonzoCopfr; } });
Object.defineProperty(exports, "computeRationalMonzoSopfr", { enumerable: true, get: function () { return math_1.computeRationalMonzoSopfr; } });
Object.defineProperty(exports, "computeRationalMonzoSmoothness", { enumerable: true, get: function () { return math_1.computeRationalMonzoSmoothness; } });
Object.defineProperty(exports, "EMPTY_MONZO", { enumerable: true, get: function () { return math_1.EMPTY_MONZO; } });
Object.defineProperty(exports, "reciprocal", { enumerable: true, get: function () { return math_1.reciprocal; } });
Object.defineProperty(exports, "MeanType", { enumerable: true, get: function () { return math_1.MeanType; } });
Object.defineProperty(exports, "areScamonsEqual", { enumerable: true, get: function () { return math_1.areScamonsEqual; } });
Object.defineProperty(exports, "computeSuperScamon", { enumerable: true, get: function () { return math_1.computeSuperScamon; } });
Object.defineProperty(exports, "isScamonGreater", { enumerable: true, get: function () { return math_1.isScamonGreater; } });
Object.defineProperty(exports, "isScamonLesser", { enumerable: true, get: function () { return math_1.isScamonLesser; } });
Object.defineProperty(exports, "isScamonGreaterOrEqual", { enumerable: true, get: function () { return math_1.isScamonGreaterOrEqual; } });
Object.defineProperty(exports, "isScamonLesserOrEqual", { enumerable: true, get: function () { return math_1.isScamonLesserOrEqual; } });
Object.defineProperty(exports, "isScamonSub", { enumerable: true, get: function () { return math_1.isScamonSub; } });
Object.defineProperty(exports, "isScamonUnison", { enumerable: true, get: function () { return math_1.isScamonUnison; } });
Object.defineProperty(exports, "isScamonRational", { enumerable: true, get: function () { return math_1.isScamonRational; } });
Object.defineProperty(exports, "halveScamon", { enumerable: true, get: function () { return math_1.halveScamon; } });
Object.defineProperty(exports, "computeScamonFromDecimal", { enumerable: true, get: function () { return math_1.computeScamonFromDecimal; } });
Object.defineProperty(exports, "HALF_SCALER", { enumerable: true, get: function () { return math_1.HALF_SCALER; } });
Object.defineProperty(exports, "computeRationalScamonCopfr", { enumerable: true, get: function () { return math_1.computeRationalScamonCopfr; } });
Object.defineProperty(exports, "computeRationalScamonSopfr", { enumerable: true, get: function () { return math_1.computeRationalScamonSopfr; } });
Object.defineProperty(exports, "computeScamonFromMonzo", { enumerable: true, get: function () { return math_1.computeScamonFromMonzo; } });
Object.defineProperty(exports, "computeScamonFromQuotient", { enumerable: true, get: function () { return math_1.computeScamonFromQuotient; } });
Object.defineProperty(exports, "addScamons", { enumerable: true, get: function () { return math_1.addScamons; } });
Object.defineProperty(exports, "areRationalScamonsEqual", { enumerable: true, get: function () { return math_1.areRationalScamonsEqual; } });
Object.defineProperty(exports, "computeRationalScamonFromRationalMonzo", { enumerable: true, get: function () { return math_1.computeRationalScamonFromRationalMonzo; } });
Object.defineProperty(exports, "isRationalScamonSub", { enumerable: true, get: function () { return math_1.isRationalScamonSub; } });
Object.defineProperty(exports, "isRationalScamonUnison", { enumerable: true, get: function () { return math_1.isRationalScamonUnison; } });
Object.defineProperty(exports, "addRationalScamons", { enumerable: true, get: function () { return math_1.addRationalScamons; } });
Object.defineProperty(exports, "computeIrrationalDecimalFromScamon", { enumerable: true, get: function () { return math_1.computeIrrationalDecimalFromScamon; } });
Object.defineProperty(exports, "computeRationalScamonGeometricMean", { enumerable: true, get: function () { return math_1.computeRationalScamonGeometricMean; } });
Object.defineProperty(exports, "isRationalScamonRough", { enumerable: true, get: function () { return math_1.isRationalScamonRough; } });
Object.defineProperty(exports, "computeRationalScamonSmoothness", { enumerable: true, get: function () { return math_1.computeRationalScamonSmoothness; } });
Object.defineProperty(exports, "isRationalScamonSmooth", { enumerable: true, get: function () { return math_1.isRationalScamonSmooth; } });
Object.defineProperty(exports, "computeRationalQuotientFromRationalScamon", { enumerable: true, get: function () { return math_1.computeRationalQuotientFromRationalScamon; } });
Object.defineProperty(exports, "invertScamon", { enumerable: true, get: function () { return math_1.invertScamon; } });
Object.defineProperty(exports, "multiplyScamon", { enumerable: true, get: function () { return math_1.multiplyScamon; } });
Object.defineProperty(exports, "isLowestTerms", { enumerable: true, get: function () { return math_1.isLowestTerms; } });
Object.defineProperty(exports, "invertQuotient", { enumerable: true, get: function () { return math_1.invertQuotient; } });
Object.defineProperty(exports, "subtractRationalScamons", { enumerable: true, get: function () { return math_1.subtractRationalScamons; } });
Object.defineProperty(exports, "computeMonzoMapping", { enumerable: true, get: function () { return math_1.computeMonzoMapping; } });
Object.defineProperty(exports, "computePatentVal", { enumerable: true, get: function () { return math_1.computePatentVal; } });
Object.defineProperty(exports, "isEven", { enumerable: true, get: function () { return math_1.isEven; } });
Object.defineProperty(exports, "computeRationalDecimalCopf", { enumerable: true, get: function () { return math_1.computeRationalDecimalCopf; } });
Object.defineProperty(exports, "scaleScamon", { enumerable: true, get: function () { return math_1.scaleScamon; } });
Object.defineProperty(exports, "divide", { enumerable: true, get: function () { return math_1.divide; } });
Object.defineProperty(exports, "sumRationalScamons", { enumerable: true, get: function () { return math_1.sumRationalScamons; } });
Object.defineProperty(exports, "computeRationalQuotientSmoothness", { enumerable: true, get: function () { return math_1.computeRationalQuotientSmoothness; } });
Object.defineProperty(exports, "computeRationalScamonFromRationalQuotient", { enumerable: true, get: function () { return math_1.computeRationalScamonFromRationalQuotient; } });
Object.defineProperty(exports, "FIVE_SMOOTHNESS", { enumerable: true, get: function () { return math_1.FIVE_SMOOTHNESS; } });
Object.defineProperty(exports, "computeRationalMonzoFromRationalScamon", { enumerable: true, get: function () { return math_1.computeRationalMonzoFromRationalScamon; } });
Object.defineProperty(exports, "IRRATIONAL_SCAMON_BASE_MONZO", { enumerable: true, get: function () { return math_1.IRRATIONAL_SCAMON_BASE_MONZO; } });
Object.defineProperty(exports, "computeIrrationalMonzoFromScamon", { enumerable: true, get: function () { return math_1.computeIrrationalMonzoFromScamon; } });
Object.defineProperty(exports, "computeArithmeticMean", { enumerable: true, get: function () { return math_1.computeArithmeticMean; } });
Object.defineProperty(exports, "maxScamon", { enumerable: true, get: function () { return math_1.maxScamon; } });
var music_1 = __webpack_require__(135);
Object.defineProperty(exports, "CENTS_PER_OCTAVE", { enumerable: true, get: function () { return music_1.CENTS_PER_OCTAVE; } });
Object.defineProperty(exports, "dividePitch", { enumerable: true, get: function () { return music_1.dividePitch; } });
Object.defineProperty(exports, "subtractPitch", { enumerable: true, get: function () { return music_1.subtractPitch; } });
Object.defineProperty(exports, "UNISON", { enumerable: true, get: function () { return music_1.UNISON; } });
Object.defineProperty(exports, "computePitchFromCents", { enumerable: true, get: function () { return music_1.computePitchFromCents; } });
Object.defineProperty(exports, "COMMA_POPULARITIES", { enumerable: true, get: function () { return music_1.COMMA_POPULARITIES; } });
Object.defineProperty(exports, "compute23FreeClass", { enumerable: true, get: function () { return music_1.compute23FreeClass; } });
Object.defineProperty(exports, "THREE_PRIME_LIMIT", { enumerable: true, get: function () { return music_1.THREE_PRIME_LIMIT; } });
Object.defineProperty(exports, "computeCentsFromPitch", { enumerable: true, get: function () { return music_1.computeCentsFromPitch; } });
Object.defineProperty(exports, "compute23FreeClassName", { enumerable: true, get: function () { return music_1.compute23FreeClassName; } });
Object.defineProperty(exports, "format23FreeClass", { enumerable: true, get: function () { return music_1.format23FreeClass; } });
Object.defineProperty(exports, "TWO_3_FREE", { enumerable: true, get: function () { return music_1.TWO_3_FREE; } });
Object.defineProperty(exports, "TWO_3_FREE_CLASS_SIGN", { enumerable: true, get: function () { return music_1.TWO_3_FREE_CLASS_SIGN; } });
Object.defineProperty(exports, "PYTHAGOREAN_COMMA", { enumerable: true, get: function () { return music_1.PYTHAGOREAN_COMMA; } });
Object.defineProperty(exports, "PYTHAGOREAN_LIMMA", { enumerable: true, get: function () { return music_1.PYTHAGOREAN_LIMMA; } });
Object.defineProperty(exports, "PYTHAGOREAN_SCHISMA", { enumerable: true, get: function () { return music_1.PYTHAGOREAN_SCHISMA; } });
Object.defineProperty(exports, "SUPERCOMPLEX_PYTHAGOREAN_KLEISMA", { enumerable: true, get: function () { return music_1.SUPERCOMPLEX_PYTHAGOREAN_KLEISMA; } });
Object.defineProperty(exports, "PYTHAGOREAN_LARGE_DIESIS", { enumerable: true, get: function () { return music_1.PYTHAGOREAN_LARGE_DIESIS; } });
Object.defineProperty(exports, "PYTHAGOREAN_WHOLE_TONE", { enumerable: true, get: function () { return music_1.PYTHAGOREAN_WHOLE_TONE; } });
Object.defineProperty(exports, "THIRTYONE_THREE_COMMA", { enumerable: true, get: function () { return music_1.THIRTYONE_THREE_COMMA; } });
Object.defineProperty(exports, "OCTAVE_WINDOW", { enumerable: true, get: function () { return music_1.OCTAVE_WINDOW; } });
Object.defineProperty(exports, "APOTOME", { enumerable: true, get: function () { return music_1.APOTOME; } });
Object.defineProperty(exports, "SCHISMA", { enumerable: true, get: function () { return music_1.SCHISMA; } });
Object.defineProperty(exports, "SCHISMINA", { enumerable: true, get: function () { return music_1.SCHISMINA; } });
Object.defineProperty(exports, "SEPTIMAL_COMMA", { enumerable: true, get: function () { return music_1.SEPTIMAL_COMMA; } });
Object.defineProperty(exports, "SEPTIMAL_KLEISMA", { enumerable: true, get: function () { return music_1.SEPTIMAL_KLEISMA; } });
Object.defineProperty(exports, "SYNTONIC_COMMA", { enumerable: true, get: function () { return music_1.SYNTONIC_COMMA; } });
Object.defineProperty(exports, "computeLowerAndUpperExclusive", { enumerable: true, get: function () { return music_1.computeLowerAndUpperExclusive; } });
Object.defineProperty(exports, "two3FreeClassFixture", { enumerable: true, get: function () { return music_1.two3FreeClassFixture; } });
Object.defineProperty(exports, "computePitchExpectation", { enumerable: true, get: function () { return music_1.computePitchExpectation; } });
var lfc_1 = __webpack_require__(222);
Object.defineProperty(exports, "computeParameterValues", { enumerable: true, get: function () { return lfc_1.computeParameterValues; } });
Object.defineProperty(exports, "computePossibilities", { enumerable: true, get: function () { return lfc_1.computePossibilities; } });
var spec_1 = __webpack_require__(225);
Object.defineProperty(exports, "catchBadMainDescriptions", { enumerable: true, get: function () { return spec_1.catchBadMainDescriptions; } });
Object.defineProperty(exports, "catchBadSpecFiles", { enumerable: true, get: function () { return spec_1.catchBadSpecFiles; } });
Object.defineProperty(exports, "catchEmptyFiles", { enumerable: true, get: function () { return spec_1.catchEmptyFiles; } });
Object.defineProperty(exports, "onlyRunInCi", { enumerable: true, get: function () { return spec_1.onlyRunInCi; } });
Object.defineProperty(exports, "specReporter", { enumerable: true, get: function () { return spec_1.specReporter; } });
Object.defineProperty(exports, "specNameReporter", { enumerable: true, get: function () { return spec_1.specNameReporter; } });
Object.defineProperty(exports, "slowReporter", { enumerable: true, get: function () { return spec_1.slowReporter; } });
Object.defineProperty(exports, "customMatchers", { enumerable: true, get: function () { return spec_1.customMatchers; } });
Object.defineProperty(exports, "runScriptAndGetConsoleOutput", { enumerable: true, get: function () { return spec_1.runScriptAndGetConsoleOutput; } });


/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.RankStrategy = exports.ExtensionBaseType = exports.isObject = exports.isString = exports.isArray = exports.isUndefined = exports.isNumber = exports.offset = exports.setAt = exports.now = exports.decrement = exports.increment = exports.allElementsEqual = exports.computeTrimmedArray = exports.sort = exports.shuffle = exports.rank = exports.computeRange = exports.computePlusOrMinusRange = exports.merge = exports.isSingleton = exports.isEmpty = exports.isCloseTo = exports.indexOfFinalElement = exports.finalElement = exports.computeExtensionBase = exports.doOnNextEventLoop = exports.dig = exports.computeExampleElement = exports.parseBoolean = exports.deepEquals = exports.computeDeepDistinct = exports.MIN_JS_VALUE_PRESERVING_MAX_PRECISION = exports.MAX_JS_VALUE_PRESERVING_MAX_PRECISION = exports.MAX_JS_PRECISION = exports.NOT_FOUND = exports.MAX_JS_INTEGER_VALUE = exports.ZERO_ONE_INDEX_DIFF = exports.DEFAULT_PRECISION = exports.concat = exports.deepMap = exports.shallowClone = exports.deepClone = exports.setAllPropertiesOfObjectOnAnother = exports.camelCaseToConstantCase = exports.cleanArray = exports.cleanObject = exports.computeKeyPath = exports.computeCardinality = void 0;
var cardinality_1 = __webpack_require__(5);
Object.defineProperty(exports, "computeCardinality", { enumerable: true, get: function () { return cardinality_1.computeCardinality; } });
var keyPath_1 = __webpack_require__(190);
Object.defineProperty(exports, "computeKeyPath", { enumerable: true, get: function () { return keyPath_1.computeKeyPath; } });
var cleanObject_1 = __webpack_require__(192);
Object.defineProperty(exports, "cleanObject", { enumerable: true, get: function () { return cleanObject_1.cleanObject; } });
var cleanArray_1 = __webpack_require__(193);
Object.defineProperty(exports, "cleanArray", { enumerable: true, get: function () { return cleanArray_1.cleanArray; } });
var case_1 = __webpack_require__(194);
Object.defineProperty(exports, "camelCaseToConstantCase", { enumerable: true, get: function () { return case_1.camelCaseToConstantCase; } });
var setAllPropertiesOfObjectOnAnother_1 = __webpack_require__(195);
Object.defineProperty(exports, "setAllPropertiesOfObjectOnAnother", { enumerable: true, get: function () { return setAllPropertiesOfObjectOnAnother_1.setAllPropertiesOfObjectOnAnother; } });
var clone_1 = __webpack_require__(196);
Object.defineProperty(exports, "deepClone", { enumerable: true, get: function () { return clone_1.deepClone; } });
Object.defineProperty(exports, "shallowClone", { enumerable: true, get: function () { return clone_1.shallowClone; } });
var deepMap_1 = __webpack_require__(197);
Object.defineProperty(exports, "deepMap", { enumerable: true, get: function () { return deepMap_1.deepMap; } });
var concat_1 = __webpack_require__(198);
Object.defineProperty(exports, "concat", { enumerable: true, get: function () { return concat_1.concat; } });
var constants_1 = __webpack_require__(199);
Object.defineProperty(exports, "DEFAULT_PRECISION", { enumerable: true, get: function () { return constants_1.DEFAULT_PRECISION; } });
Object.defineProperty(exports, "ZERO_ONE_INDEX_DIFF", { enumerable: true, get: function () { return constants_1.ZERO_ONE_INDEX_DIFF; } });
Object.defineProperty(exports, "MAX_JS_INTEGER_VALUE", { enumerable: true, get: function () { return constants_1.MAX_JS_INTEGER_VALUE; } });
Object.defineProperty(exports, "NOT_FOUND", { enumerable: true, get: function () { return constants_1.NOT_FOUND; } });
Object.defineProperty(exports, "MAX_JS_PRECISION", { enumerable: true, get: function () { return constants_1.MAX_JS_PRECISION; } });
Object.defineProperty(exports, "MAX_JS_VALUE_PRESERVING_MAX_PRECISION", { enumerable: true, get: function () { return constants_1.MAX_JS_VALUE_PRESERVING_MAX_PRECISION; } });
Object.defineProperty(exports, "MIN_JS_VALUE_PRESERVING_MAX_PRECISION", { enumerable: true, get: function () { return constants_1.MIN_JS_VALUE_PRESERVING_MAX_PRECISION; } });
var deepDistinct_1 = __webpack_require__(200);
Object.defineProperty(exports, "computeDeepDistinct", { enumerable: true, get: function () { return deepDistinct_1.computeDeepDistinct; } });
var deepEquals_1 = __webpack_require__(201);
Object.defineProperty(exports, "deepEquals", { enumerable: true, get: function () { return deepEquals_1.deepEquals; } });
var parseBoolean_1 = __webpack_require__(203);
Object.defineProperty(exports, "parseBoolean", { enumerable: true, get: function () { return parseBoolean_1.parseBoolean; } });
var exampleElement_1 = __webpack_require__(204);
Object.defineProperty(exports, "computeExampleElement", { enumerable: true, get: function () { return exampleElement_1.computeExampleElement; } });
var dig_1 = __webpack_require__(205);
Object.defineProperty(exports, "dig", { enumerable: true, get: function () { return dig_1.dig; } });
var doOnNextEventLoop_1 = __webpack_require__(206);
Object.defineProperty(exports, "doOnNextEventLoop", { enumerable: true, get: function () { return doOnNextEventLoop_1.doOnNextEventLoop; } });
var extensionBase_1 = __webpack_require__(207);
Object.defineProperty(exports, "computeExtensionBase", { enumerable: true, get: function () { return extensionBase_1.computeExtensionBase; } });
var finalElement_1 = __webpack_require__(191);
Object.defineProperty(exports, "finalElement", { enumerable: true, get: function () { return finalElement_1.finalElement; } });
Object.defineProperty(exports, "indexOfFinalElement", { enumerable: true, get: function () { return finalElement_1.indexOfFinalElement; } });
var isCloseTo_1 = __webpack_require__(202);
Object.defineProperty(exports, "isCloseTo", { enumerable: true, get: function () { return isCloseTo_1.isCloseTo; } });
var isEmpty_1 = __webpack_require__(209);
Object.defineProperty(exports, "isEmpty", { enumerable: true, get: function () { return isEmpty_1.isEmpty; } });
Object.defineProperty(exports, "isSingleton", { enumerable: true, get: function () { return isEmpty_1.isSingleton; } });
var merge_1 = __webpack_require__(210);
Object.defineProperty(exports, "merge", { enumerable: true, get: function () { return merge_1.merge; } });
var plusOrMinusRange_1 = __webpack_require__(211);
Object.defineProperty(exports, "computePlusOrMinusRange", { enumerable: true, get: function () { return plusOrMinusRange_1.computePlusOrMinusRange; } });
var range_1 = __webpack_require__(212);
Object.defineProperty(exports, "computeRange", { enumerable: true, get: function () { return range_1.computeRange; } });
var rank_1 = __webpack_require__(213);
Object.defineProperty(exports, "rank", { enumerable: true, get: function () { return rank_1.rank; } });
var shuffle_1 = __webpack_require__(216);
Object.defineProperty(exports, "shuffle", { enumerable: true, get: function () { return shuffle_1.shuffle; } });
var sort_1 = __webpack_require__(215);
Object.defineProperty(exports, "sort", { enumerable: true, get: function () { return sort_1.sort; } });
var trim_1 = __webpack_require__(217);
Object.defineProperty(exports, "computeTrimmedArray", { enumerable: true, get: function () { return trim_1.computeTrimmedArray; } });
var allElementsEqual_1 = __webpack_require__(218);
Object.defineProperty(exports, "allElementsEqual", { enumerable: true, get: function () { return allElementsEqual_1.allElementsEqual; } });
var crement_1 = __webpack_require__(214);
Object.defineProperty(exports, "increment", { enumerable: true, get: function () { return crement_1.increment; } });
Object.defineProperty(exports, "decrement", { enumerable: true, get: function () { return crement_1.decrement; } });
var typedOperations_1 = __webpack_require__(219);
Object.defineProperty(exports, "now", { enumerable: true, get: function () { return typedOperations_1.now; } });
var setAt_1 = __webpack_require__(220);
Object.defineProperty(exports, "setAt", { enumerable: true, get: function () { return setAt_1.setAt; } });
var offset_1 = __webpack_require__(221);
Object.defineProperty(exports, "offset", { enumerable: true, get: function () { return offset_1.offset; } });
var typeGuards_1 = __webpack_require__(189);
Object.defineProperty(exports, "isNumber", { enumerable: true, get: function () { return typeGuards_1.isNumber; } });
Object.defineProperty(exports, "isUndefined", { enumerable: true, get: function () { return typeGuards_1.isUndefined; } });
Object.defineProperty(exports, "isArray", { enumerable: true, get: function () { return typeGuards_1.isArray; } });
Object.defineProperty(exports, "isString", { enumerable: true, get: function () { return typeGuards_1.isString; } });
Object.defineProperty(exports, "isObject", { enumerable: true, get: function () { return typeGuards_1.isObject; } });
var types_1 = __webpack_require__(208);
Object.defineProperty(exports, "ExtensionBaseType", { enumerable: true, get: function () { return types_1.ExtensionBaseType; } });
Object.defineProperty(exports, "RankStrategy", { enumerable: true, get: function () { return types_1.RankStrategy; } });


/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.computeCardinality = void 0;
var math_1 = __webpack_require__(6);
var typeGuards_1 = __webpack_require__(189);
var computeCardinality = function (array) {
    var cardinality = [];
    var cursor = array;
    while (typeGuards_1.isObject(cursor)) {
        cardinality.push(math_1.count(cursor));
        cursor = cursor[0];
    }
    return cardinality;
};
exports.computeCardinality = computeCardinality;


/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.scaleScamon = exports.computePatentVal = exports.computeMonzoMapping = exports.invertQuotient = exports.multiplyScamon = exports.invertScamon = exports.addScamons = exports.computeScamonFromQuotient = exports.computeScamonFromMonzo = exports.computeScamonFromDecimal = exports.halveScamon = exports.isScamonGreaterOrEqual = exports.isScamonLesserOrEqual = exports.isScamonLesser = exports.isScamonGreater = exports.areScamonsEqual = exports.computeSuperScamon = exports.isScamonUnison = exports.isScamonSuper = exports.isScamonSub = exports.addMonzos = exports.areDecimalsEqual = exports.reciprocal = exports.EMPTY_MONZO = exports.subtractMonzos = exports.mod = exports.isDecimalUnison = exports.isDecimalSuper = exports.isDecimalSub = exports.areQuotientsEqual = exports.computeQuotientFromMonzo = exports.Direction = exports.areMonzosEqual = exports.computeDecimalFromMonzo = exports.isMonzoUnison = exports.sumMonzos = exports.isMonzoSuper = exports.invertMonzo = exports.computeSuperMonzo = exports.isMonzoSub = exports.computeDecimalFromQuotient = exports.computeSubQuotient = exports.isQuotientUnison = exports.computeSuperQuotient = exports.QuotientPartType = exports.isQuotientSuper = exports.isQuotientSub = exports.ADDITIVE_IDENTITY = exports.BASE_2 = exports.computeCombinations = void 0;
exports.computeRationalDecimalCopfr = exports.computeRationalDecimalGpf = exports.doForEachRationalMonzo = exports.isIntegerDecimalRough = exports.computeLowestTermsRationalQuotient = exports.isRationalMonzoRough = exports.isQuotientRational = exports.computeRationalQuotientFromRationalDecimal = exports.isRationalMonzoSmooth = exports.computeRoughRationalMonzo = exports.computeRationalMonzoFromRationalQuotient = exports.isRationalQuotientSmooth = exports.computeRoughRationalQuotient = exports.isRationalQuotientRough = exports.isDecimalInteger = exports.integerDivide = exports.floor = exports.ceil = exports.computePrimes = exports.computePrimeCount = exports.TWO_PRIME_INDEX = exports.THREE_SMOOTHNESS = exports.THREE_ROUGHNESS = exports.THREE_PRIME_INDEX = exports.ONE = exports.FIVE_ROUGHNESS = exports.FIVE_PRIME_INDEX = exports.MeanType = exports.sum = exports.divide = exports.add = exports.round = exports.pow = exports.negative = exports.multiply = exports.min = exports.max = exports.log = exports.subtract = exports.count = exports.abs = exports.computeTriangularNumber = exports.radiansToDegrees = exports.computeAngle = exports.isOdd = exports.isEven = exports.dividesEvenly = exports.computeDistributions = exports.maxScamon = exports.computeArithmeticMean = void 0;
exports.computeIrrationalMonzoFromScamon = exports.IRRATIONAL_SCAMON_BASE_MONZO = exports.computeIrrationalDecimalFromScamon = exports.HALF_SCALER = exports.computeRationalMonzoFromRationalScamon = exports.computeRationalScamonFromRationalQuotient = exports.FIVE_SMOOTHNESS = exports.computeRationalQuotientSmoothness = exports.sumRationalScamons = exports.computeRationalDecimalCopf = exports.subtractRationalScamons = exports.isLowestTerms = exports.computeRationalQuotientFromRationalScamon = exports.isRationalScamonSmooth = exports.computeRationalScamonSmoothness = exports.isRationalScamonRough = exports.computeRationalScamonGeometricMean = exports.addRationalScamons = exports.isRationalScamonUnison = exports.isRationalScamonSub = exports.areRationalScamonsEqual = exports.computeRationalScamonSopfr = exports.computeRationalScamonCopfr = exports.isScamonRational = exports.computeRationalScamonFromRationalMonzo = exports.isMonzoRational = exports.computeRationalMonzoFromRationalDecimal = exports.isDecimalRational = exports.computeRationalMonzoSopfr = exports.computeRationalMonzoSmoothness = exports.computeRationalMonzoCopfr = void 0;
var combinations_1 = __webpack_require__(7);
Object.defineProperty(exports, "computeCombinations", { enumerable: true, get: function () { return combinations_1.computeCombinations; } });
var constants_1 = __webpack_require__(9);
Object.defineProperty(exports, "BASE_2", { enumerable: true, get: function () { return constants_1.BASE_2; } });
Object.defineProperty(exports, "ADDITIVE_IDENTITY", { enumerable: true, get: function () { return constants_1.ADDITIVE_IDENTITY; } });
var numeric_1 = __webpack_require__(10);
Object.defineProperty(exports, "isQuotientSub", { enumerable: true, get: function () { return numeric_1.isQuotientSub; } });
Object.defineProperty(exports, "isQuotientSuper", { enumerable: true, get: function () { return numeric_1.isQuotientSuper; } });
Object.defineProperty(exports, "QuotientPartType", { enumerable: true, get: function () { return numeric_1.QuotientPartType; } });
Object.defineProperty(exports, "computeSuperQuotient", { enumerable: true, get: function () { return numeric_1.computeSuperQuotient; } });
Object.defineProperty(exports, "isQuotientUnison", { enumerable: true, get: function () { return numeric_1.isQuotientUnison; } });
Object.defineProperty(exports, "computeSubQuotient", { enumerable: true, get: function () { return numeric_1.computeSubQuotient; } });
Object.defineProperty(exports, "computeDecimalFromQuotient", { enumerable: true, get: function () { return numeric_1.computeDecimalFromQuotient; } });
Object.defineProperty(exports, "isMonzoSub", { enumerable: true, get: function () { return numeric_1.isMonzoSub; } });
Object.defineProperty(exports, "computeSuperMonzo", { enumerable: true, get: function () { return numeric_1.computeSuperMonzo; } });
Object.defineProperty(exports, "invertMonzo", { enumerable: true, get: function () { return numeric_1.invertMonzo; } });
Object.defineProperty(exports, "isMonzoSuper", { enumerable: true, get: function () { return numeric_1.isMonzoSuper; } });
Object.defineProperty(exports, "sumMonzos", { enumerable: true, get: function () { return numeric_1.sumMonzos; } });
Object.defineProperty(exports, "isMonzoUnison", { enumerable: true, get: function () { return numeric_1.isMonzoUnison; } });
Object.defineProperty(exports, "computeDecimalFromMonzo", { enumerable: true, get: function () { return numeric_1.computeDecimalFromMonzo; } });
Object.defineProperty(exports, "areMonzosEqual", { enumerable: true, get: function () { return numeric_1.areMonzosEqual; } });
Object.defineProperty(exports, "Direction", { enumerable: true, get: function () { return numeric_1.Direction; } });
Object.defineProperty(exports, "computeQuotientFromMonzo", { enumerable: true, get: function () { return numeric_1.computeQuotientFromMonzo; } });
Object.defineProperty(exports, "areQuotientsEqual", { enumerable: true, get: function () { return numeric_1.areQuotientsEqual; } });
Object.defineProperty(exports, "isDecimalSub", { enumerable: true, get: function () { return numeric_1.isDecimalSub; } });
Object.defineProperty(exports, "isDecimalSuper", { enumerable: true, get: function () { return numeric_1.isDecimalSuper; } });
Object.defineProperty(exports, "isDecimalUnison", { enumerable: true, get: function () { return numeric_1.isDecimalUnison; } });
Object.defineProperty(exports, "mod", { enumerable: true, get: function () { return numeric_1.mod; } });
Object.defineProperty(exports, "subtractMonzos", { enumerable: true, get: function () { return numeric_1.subtractMonzos; } });
Object.defineProperty(exports, "EMPTY_MONZO", { enumerable: true, get: function () { return numeric_1.EMPTY_MONZO; } });
Object.defineProperty(exports, "reciprocal", { enumerable: true, get: function () { return numeric_1.reciprocal; } });
Object.defineProperty(exports, "areDecimalsEqual", { enumerable: true, get: function () { return numeric_1.areDecimalsEqual; } });
Object.defineProperty(exports, "addMonzos", { enumerable: true, get: function () { return numeric_1.addMonzos; } });
Object.defineProperty(exports, "isScamonSub", { enumerable: true, get: function () { return numeric_1.isScamonSub; } });
Object.defineProperty(exports, "isScamonSuper", { enumerable: true, get: function () { return numeric_1.isScamonSuper; } });
Object.defineProperty(exports, "isScamonUnison", { enumerable: true, get: function () { return numeric_1.isScamonUnison; } });
Object.defineProperty(exports, "computeSuperScamon", { enumerable: true, get: function () { return numeric_1.computeSuperScamon; } });
Object.defineProperty(exports, "areScamonsEqual", { enumerable: true, get: function () { return numeric_1.areScamonsEqual; } });
Object.defineProperty(exports, "isScamonGreater", { enumerable: true, get: function () { return numeric_1.isScamonGreater; } });
Object.defineProperty(exports, "isScamonLesser", { enumerable: true, get: function () { return numeric_1.isScamonLesser; } });
Object.defineProperty(exports, "isScamonLesserOrEqual", { enumerable: true, get: function () { return numeric_1.isScamonLesserOrEqual; } });
Object.defineProperty(exports, "isScamonGreaterOrEqual", { enumerable: true, get: function () { return numeric_1.isScamonGreaterOrEqual; } });
Object.defineProperty(exports, "halveScamon", { enumerable: true, get: function () { return numeric_1.halveScamon; } });
Object.defineProperty(exports, "computeScamonFromDecimal", { enumerable: true, get: function () { return numeric_1.computeScamonFromDecimal; } });
Object.defineProperty(exports, "computeScamonFromMonzo", { enumerable: true, get: function () { return numeric_1.computeScamonFromMonzo; } });
Object.defineProperty(exports, "computeScamonFromQuotient", { enumerable: true, get: function () { return numeric_1.computeScamonFromQuotient; } });
Object.defineProperty(exports, "addScamons", { enumerable: true, get: function () { return numeric_1.addScamons; } });
Object.defineProperty(exports, "invertScamon", { enumerable: true, get: function () { return numeric_1.invertScamon; } });
Object.defineProperty(exports, "multiplyScamon", { enumerable: true, get: function () { return numeric_1.multiplyScamon; } });
Object.defineProperty(exports, "invertQuotient", { enumerable: true, get: function () { return numeric_1.invertQuotient; } });
Object.defineProperty(exports, "computeMonzoMapping", { enumerable: true, get: function () { return numeric_1.computeMonzoMapping; } });
Object.defineProperty(exports, "computePatentVal", { enumerable: true, get: function () { return numeric_1.computePatentVal; } });
Object.defineProperty(exports, "scaleScamon", { enumerable: true, get: function () { return numeric_1.scaleScamon; } });
Object.defineProperty(exports, "computeArithmeticMean", { enumerable: true, get: function () { return numeric_1.computeArithmeticMean; } });
Object.defineProperty(exports, "maxScamon", { enumerable: true, get: function () { return numeric_1.maxScamon; } });
var distributions_1 = __webpack_require__(185);
Object.defineProperty(exports, "computeDistributions", { enumerable: true, get: function () { return distributions_1.computeDistributions; } });
var dividesEvenly_1 = __webpack_require__(28);
Object.defineProperty(exports, "dividesEvenly", { enumerable: true, get: function () { return dividesEvenly_1.dividesEvenly; } });
Object.defineProperty(exports, "isEven", { enumerable: true, get: function () { return dividesEvenly_1.isEven; } });
Object.defineProperty(exports, "isOdd", { enumerable: true, get: function () { return dividesEvenly_1.isOdd; } });
var angle_1 = __webpack_require__(186);
Object.defineProperty(exports, "computeAngle", { enumerable: true, get: function () { return angle_1.computeAngle; } });
Object.defineProperty(exports, "radiansToDegrees", { enumerable: true, get: function () { return angle_1.radiansToDegrees; } });
var triangularNumber_1 = __webpack_require__(187);
Object.defineProperty(exports, "computeTriangularNumber", { enumerable: true, get: function () { return triangularNumber_1.computeTriangularNumber; } });
var typedOperations_1 = __webpack_require__(8);
Object.defineProperty(exports, "abs", { enumerable: true, get: function () { return typedOperations_1.abs; } });
Object.defineProperty(exports, "count", { enumerable: true, get: function () { return typedOperations_1.count; } });
Object.defineProperty(exports, "subtract", { enumerable: true, get: function () { return typedOperations_1.subtract; } });
Object.defineProperty(exports, "log", { enumerable: true, get: function () { return typedOperations_1.log; } });
Object.defineProperty(exports, "max", { enumerable: true, get: function () { return typedOperations_1.max; } });
Object.defineProperty(exports, "min", { enumerable: true, get: function () { return typedOperations_1.min; } });
Object.defineProperty(exports, "multiply", { enumerable: true, get: function () { return typedOperations_1.multiply; } });
Object.defineProperty(exports, "negative", { enumerable: true, get: function () { return typedOperations_1.negative; } });
Object.defineProperty(exports, "pow", { enumerable: true, get: function () { return typedOperations_1.pow; } });
Object.defineProperty(exports, "round", { enumerable: true, get: function () { return typedOperations_1.round; } });
Object.defineProperty(exports, "add", { enumerable: true, get: function () { return typedOperations_1.add; } });
Object.defineProperty(exports, "divide", { enumerable: true, get: function () { return typedOperations_1.divide; } });
Object.defineProperty(exports, "sum", { enumerable: true, get: function () { return typedOperations_1.sum; } });
var types_1 = __webpack_require__(188);
Object.defineProperty(exports, "MeanType", { enumerable: true, get: function () { return types_1.MeanType; } });
var rational_1 = __webpack_require__(13);
Object.defineProperty(exports, "FIVE_PRIME_INDEX", { enumerable: true, get: function () { return rational_1.FIVE_PRIME_INDEX; } });
Object.defineProperty(exports, "FIVE_ROUGHNESS", { enumerable: true, get: function () { return rational_1.FIVE_ROUGHNESS; } });
Object.defineProperty(exports, "ONE", { enumerable: true, get: function () { return rational_1.ONE; } });
Object.defineProperty(exports, "THREE_PRIME_INDEX", { enumerable: true, get: function () { return rational_1.THREE_PRIME_INDEX; } });
Object.defineProperty(exports, "THREE_ROUGHNESS", { enumerable: true, get: function () { return rational_1.THREE_ROUGHNESS; } });
Object.defineProperty(exports, "THREE_SMOOTHNESS", { enumerable: true, get: function () { return rational_1.THREE_SMOOTHNESS; } });
Object.defineProperty(exports, "TWO_PRIME_INDEX", { enumerable: true, get: function () { return rational_1.TWO_PRIME_INDEX; } });
Object.defineProperty(exports, "computePrimeCount", { enumerable: true, get: function () { return rational_1.computePrimeCount; } });
Object.defineProperty(exports, "computePrimes", { enumerable: true, get: function () { return rational_1.computePrimes; } });
Object.defineProperty(exports, "ceil", { enumerable: true, get: function () { return rational_1.ceil; } });
Object.defineProperty(exports, "floor", { enumerable: true, get: function () { return rational_1.floor; } });
Object.defineProperty(exports, "integerDivide", { enumerable: true, get: function () { return rational_1.integerDivide; } });
Object.defineProperty(exports, "isDecimalInteger", { enumerable: true, get: function () { return rational_1.isDecimalInteger; } });
Object.defineProperty(exports, "isRationalQuotientRough", { enumerable: true, get: function () { return rational_1.isRationalQuotientRough; } });
Object.defineProperty(exports, "computeRoughRationalQuotient", { enumerable: true, get: function () { return rational_1.computeRoughRationalQuotient; } });
Object.defineProperty(exports, "isRationalQuotientSmooth", { enumerable: true, get: function () { return rational_1.isRationalQuotientSmooth; } });
Object.defineProperty(exports, "computeRationalMonzoFromRationalQuotient", { enumerable: true, get: function () { return rational_1.computeRationalMonzoFromRationalQuotient; } });
Object.defineProperty(exports, "computeRoughRationalMonzo", { enumerable: true, get: function () { return rational_1.computeRoughRationalMonzo; } });
Object.defineProperty(exports, "isRationalMonzoSmooth", { enumerable: true, get: function () { return rational_1.isRationalMonzoSmooth; } });
Object.defineProperty(exports, "computeRationalQuotientFromRationalDecimal", { enumerable: true, get: function () { return rational_1.computeRationalQuotientFromRationalDecimal; } });
Object.defineProperty(exports, "isQuotientRational", { enumerable: true, get: function () { return rational_1.isQuotientRational; } });
Object.defineProperty(exports, "isRationalMonzoRough", { enumerable: true, get: function () { return rational_1.isRationalMonzoRough; } });
Object.defineProperty(exports, "computeLowestTermsRationalQuotient", { enumerable: true, get: function () { return rational_1.computeLowestTermsRationalQuotient; } });
Object.defineProperty(exports, "isIntegerDecimalRough", { enumerable: true, get: function () { return rational_1.isIntegerDecimalRough; } });
Object.defineProperty(exports, "doForEachRationalMonzo", { enumerable: true, get: function () { return rational_1.doForEachRationalMonzo; } });
Object.defineProperty(exports, "computeRationalDecimalGpf", { enumerable: true, get: function () { return rational_1.computeRationalDecimalGpf; } });
Object.defineProperty(exports, "computeRationalDecimalCopfr", { enumerable: true, get: function () { return rational_1.computeRationalDecimalCopfr; } });
Object.defineProperty(exports, "computeRationalMonzoCopfr", { enumerable: true, get: function () { return rational_1.computeRationalMonzoCopfr; } });
Object.defineProperty(exports, "computeRationalMonzoSmoothness", { enumerable: true, get: function () { return rational_1.computeRationalMonzoSmoothness; } });
Object.defineProperty(exports, "computeRationalMonzoSopfr", { enumerable: true, get: function () { return rational_1.computeRationalMonzoSopfr; } });
Object.defineProperty(exports, "isDecimalRational", { enumerable: true, get: function () { return rational_1.isDecimalRational; } });
Object.defineProperty(exports, "computeRationalMonzoFromRationalDecimal", { enumerable: true, get: function () { return rational_1.computeRationalMonzoFromRationalDecimal; } });
Object.defineProperty(exports, "isMonzoRational", { enumerable: true, get: function () { return rational_1.isMonzoRational; } });
Object.defineProperty(exports, "computeRationalScamonFromRationalMonzo", { enumerable: true, get: function () { return rational_1.computeRationalScamonFromRationalMonzo; } });
Object.defineProperty(exports, "isScamonRational", { enumerable: true, get: function () { return rational_1.isScamonRational; } });
Object.defineProperty(exports, "computeRationalScamonCopfr", { enumerable: true, get: function () { return rational_1.computeRationalScamonCopfr; } });
Object.defineProperty(exports, "computeRationalScamonSopfr", { enumerable: true, get: function () { return rational_1.computeRationalScamonSopfr; } });
Object.defineProperty(exports, "areRationalScamonsEqual", { enumerable: true, get: function () { return rational_1.areRationalScamonsEqual; } });
Object.defineProperty(exports, "isRationalScamonSub", { enumerable: true, get: function () { return rational_1.isRationalScamonSub; } });
Object.defineProperty(exports, "isRationalScamonUnison", { enumerable: true, get: function () { return rational_1.isRationalScamonUnison; } });
Object.defineProperty(exports, "addRationalScamons", { enumerable: true, get: function () { return rational_1.addRationalScamons; } });
Object.defineProperty(exports, "computeRationalScamonGeometricMean", { enumerable: true, get: function () { return rational_1.computeRationalScamonGeometricMean; } });
Object.defineProperty(exports, "isRationalScamonRough", { enumerable: true, get: function () { return rational_1.isRationalScamonRough; } });
Object.defineProperty(exports, "computeRationalScamonSmoothness", { enumerable: true, get: function () { return rational_1.computeRationalScamonSmoothness; } });
Object.defineProperty(exports, "isRationalScamonSmooth", { enumerable: true, get: function () { return rational_1.isRationalScamonSmooth; } });
Object.defineProperty(exports, "computeRationalQuotientFromRationalScamon", { enumerable: true, get: function () { return rational_1.computeRationalQuotientFromRationalScamon; } });
Object.defineProperty(exports, "isLowestTerms", { enumerable: true, get: function () { return rational_1.isLowestTerms; } });
Object.defineProperty(exports, "subtractRationalScamons", { enumerable: true, get: function () { return rational_1.subtractRationalScamons; } });
Object.defineProperty(exports, "computeRationalDecimalCopf", { enumerable: true, get: function () { return rational_1.computeRationalDecimalCopf; } });
Object.defineProperty(exports, "sumRationalScamons", { enumerable: true, get: function () { return rational_1.sumRationalScamons; } });
Object.defineProperty(exports, "computeRationalQuotientSmoothness", { enumerable: true, get: function () { return rational_1.computeRationalQuotientSmoothness; } });
Object.defineProperty(exports, "FIVE_SMOOTHNESS", { enumerable: true, get: function () { return rational_1.FIVE_SMOOTHNESS; } });
Object.defineProperty(exports, "computeRationalScamonFromRationalQuotient", { enumerable: true, get: function () { return rational_1.computeRationalScamonFromRationalQuotient; } });
Object.defineProperty(exports, "computeRationalMonzoFromRationalScamon", { enumerable: true, get: function () { return rational_1.computeRationalMonzoFromRationalScamon; } });
var irrational_1 = __webpack_require__(169);
Object.defineProperty(exports, "HALF_SCALER", { enumerable: true, get: function () { return irrational_1.HALF_SCALER; } });
Object.defineProperty(exports, "computeIrrationalDecimalFromScamon", { enumerable: true, get: function () { return irrational_1.computeIrrationalDecimalFromScamon; } });
Object.defineProperty(exports, "IRRATIONAL_SCAMON_BASE_MONZO", { enumerable: true, get: function () { return irrational_1.IRRATIONAL_SCAMON_BASE_MONZO; } });
Object.defineProperty(exports, "computeIrrationalMonzoFromScamon", { enumerable: true, get: function () { return irrational_1.computeIrrationalMonzoFromScamon; } });


/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.computeCombinationsWithRepetitions = exports.computeCombinations = void 0;
var code_1 = __webpack_require__(4);
var typedOperations_1 = __webpack_require__(8);
var computeCombinations = function (array, comboCount, _a) {
    var _b = _a === void 0 ? {} : _a, _c = _b.withRepeatedElements, withRepeatedElements = _c === void 0 ? false : _c;
    if (withRepeatedElements) {
        return computeCombinationsWithRepetitions(array, comboCount);
    }
    var combinations = [];
    if (comboCount === 0) {
        return [];
    }
    var computeRecursiveCombinations = function (integerDecimal, combination) {
        if (combination.length === comboCount) {
            combinations.push(code_1.shallowClone(combination));
            return;
        }
        if (combination.length + array.length - integerDecimal + 1 < comboCount) {
            return;
        }
        computeRecursiveCombinations(integerDecimal + 1, combination);
        combination.push(integerDecimal);
        computeRecursiveCombinations(integerDecimal + 1, combination);
        combination.pop();
    };
    computeRecursiveCombinations(1, []);
    return combinations.map(function (combination) {
        return combination.map(function (index) {
            return array[index - 1];
        });
    });
};
exports.computeCombinations = computeCombinations;
var computeCombinationsWithRepetitions = function (array, comboCount) {
    if (comboCount === void 0) {
        comboCount = typedOperations_1.count(array);
    }
    var data = Array(comboCount);
    var results = [];
    var computeCombinationsWithRepetitionsRecursively = function (position, start) {
        if (position === comboCount) {
            results.push(code_1.shallowClone(data));
            return;
        }
        for (var index = start; index < array.length; ++index) {
            data[position] = code_1.deepClone(array[index]);
            computeCombinationsWithRepetitionsRecursively(position + 1, index);
        }
    };
    computeCombinationsWithRepetitionsRecursively(0, 0);
    return results;
};
exports.computeCombinationsWithRepetitions = computeCombinationsWithRepetitions;


/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __read = (this && this.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
var __spread = (this && this.__spread) || function () {
    for (var ar = [], i = 0; i < arguments.length; i++) ar = ar.concat(__read(arguments[i]));
    return ar;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.count = exports.log = exports.pow = exports.min = exports.max = exports.abs = exports.round = exports.negative = exports.divide = exports.multiply = exports.subtract = exports.add = exports.product = exports.sum = void 0;
var code_1 = __webpack_require__(4);
var constants_1 = __webpack_require__(9);
var count = function (array) {
    return array.length;
};
exports.count = count;
var sum = function () {
    var addends = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        addends[_i] = arguments[_i];
    }
    return addends.reduce(function (total, addend) { return total + addend; }, constants_1.ADDITIVE_IDENTITY);
};
exports.sum = sum;
var product = function () {
    var factors = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        factors[_i] = arguments[_i];
    }
    return factors.reduce(function (total, factor) { return total * factor; }, constants_1.MULTIPLICATIVE_IDENTITY);
};
exports.product = product;
var add = function (augend, addend) {
    return augend + addend;
}; // Sum
exports.add = add;
var subtract = function (minuend, subtrahend) {
    return minuend - subtrahend;
}; // Difference
exports.subtract = subtract;
var multiply = function (multiplicand, multiplier) {
    return multiplicand * multiplier; // Product
};
exports.multiply = multiply;
var divide = function (dividend, divisor) {
    return dividend / divisor; // Quotient
};
exports.divide = divide;
var negative = function (number) {
    return number === 0 ? 0 : -number;
};
exports.negative = negative;
var round = function (number, precision) {
    if (code_1.isUndefined(precision)) {
        return Math.round(number);
    }
    if (abs(number) > code_1.MAX_JS_INTEGER_VALUE) {
        return number;
    }
    if (abs(number) < constants_1.VALUE_BELOW_WHICH_ROUNDING_IMPLEMENTATION_BREAKS) {
        return 0;
    }
    return +(Math.round(String(number) + "e+" + String(precision)) + "e-" + String(precision));
};
exports.round = round;
var abs = function (number) {
    return Math.abs(number);
};
exports.abs = abs;
var max = function () {
    var numbers = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        numbers[_i] = arguments[_i];
    }
    return Math.max.apply(Math, __spread(numbers));
};
exports.max = max;
var min = function () {
    var numbers = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        numbers[_i] = arguments[_i];
    }
    return Math.min.apply(Math, __spread(numbers));
};
exports.min = min;
var pow = function (base, exponent) {
    return Math.pow(base, exponent);
};
exports.pow = pow;
var log = function (power, base) {
    if (base === void 0) { base = Math.E; }
    return Math.log(power) / Math.log(base);
};
exports.log = log;


/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.DEGREES_TO_RADIANS = exports.RADIANS_TO_DEGREES = exports.BASE_2 = exports.VALUE_BELOW_WHICH_ROUNDING_IMPLEMENTATION_BREAKS = exports.MULTIPLICATIVE_IDENTITY = exports.ADDITIVE_IDENTITY = void 0;
var BASE_2 = 2;
exports.BASE_2 = BASE_2;
var ADDITIVE_IDENTITY = 0;
exports.ADDITIVE_IDENTITY = ADDITIVE_IDENTITY;
var MULTIPLICATIVE_IDENTITY = 1;
exports.MULTIPLICATIVE_IDENTITY = MULTIPLICATIVE_IDENTITY;
var VALUE_BELOW_WHICH_ROUNDING_IMPLEMENTATION_BREAKS = 1 / 1000000;
exports.VALUE_BELOW_WHICH_ROUNDING_IMPLEMENTATION_BREAKS = VALUE_BELOW_WHICH_ROUNDING_IMPLEMENTATION_BREAKS;
var RADIANS_TO_DEGREES = 180 / Math.PI;
exports.RADIANS_TO_DEGREES = RADIANS_TO_DEGREES;
var DEGREES_TO_RADIANS = Math.PI / 180;
exports.DEGREES_TO_RADIANS = DEGREES_TO_RADIANS;


/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.maxScamon = exports.scaleScamon = exports.multiplyScamon = exports.invertScamon = exports.addScamons = exports.computeScamonFromQuotient = exports.computeScamonFromMonzo = exports.computeScamonFromDecimal = exports.halveScamon = exports.isScamonGreaterOrEqual = exports.isScamonLesserOrEqual = exports.isScamonLesser = exports.isScamonGreater = exports.areScamonsEqual = exports.computeSuperScamon = exports.isScamonUnison = exports.isScamonSuper = exports.isScamonSub = exports.computePatentVal = exports.computeMonzoMapping = exports.addMonzos = exports.EMPTY_MONZO = exports.subtractMonzos = exports.areMonzosEqual = exports.isMonzoUnison = exports.sumMonzos = exports.isMonzoSuper = exports.invertMonzo = exports.computeSuperMonzo = exports.isMonzoSub = exports.halveQuotient = exports.computeQuotientProduct = exports.areQuotientsEqual = exports.computeQuotientFromMonzo = exports.invertQuotient = exports.computeSubQuotient = exports.isQuotientUnison = exports.computeSuperQuotient = exports.QuotientPartType = exports.isQuotientSuper = exports.isQuotientSub = exports.computeArithmeticMean = exports.areDecimalsEqual = exports.reciprocal = exports.mod = exports.isDecimalUnison = exports.isDecimalSuper = exports.isDecimalSub = exports.computeDecimalFromMonzo = exports.computeDecimalFromQuotient = void 0;
exports.Direction = void 0;
var decimal_1 = __webpack_require__(11);
Object.defineProperty(exports, "computeDecimalFromQuotient", { enumerable: true, get: function () { return decimal_1.computeDecimalFromQuotient; } });
Object.defineProperty(exports, "computeDecimalFromMonzo", { enumerable: true, get: function () { return decimal_1.computeDecimalFromMonzo; } });
Object.defineProperty(exports, "isDecimalSub", { enumerable: true, get: function () { return decimal_1.isDecimalSub; } });
Object.defineProperty(exports, "isDecimalSuper", { enumerable: true, get: function () { return decimal_1.isDecimalSuper; } });
Object.defineProperty(exports, "isDecimalUnison", { enumerable: true, get: function () { return decimal_1.isDecimalUnison; } });
Object.defineProperty(exports, "mod", { enumerable: true, get: function () { return decimal_1.mod; } });
Object.defineProperty(exports, "reciprocal", { enumerable: true, get: function () { return decimal_1.reciprocal; } });
Object.defineProperty(exports, "areDecimalsEqual", { enumerable: true, get: function () { return decimal_1.areDecimalsEqual; } });
Object.defineProperty(exports, "computeArithmeticMean", { enumerable: true, get: function () { return decimal_1.computeArithmeticMean; } });
var quotient_1 = __webpack_require__(161);
Object.defineProperty(exports, "isQuotientSub", { enumerable: true, get: function () { return quotient_1.isQuotientSub; } });
Object.defineProperty(exports, "isQuotientSuper", { enumerable: true, get: function () { return quotient_1.isQuotientSuper; } });
Object.defineProperty(exports, "QuotientPartType", { enumerable: true, get: function () { return quotient_1.QuotientPartType; } });
Object.defineProperty(exports, "computeSuperQuotient", { enumerable: true, get: function () { return quotient_1.computeSuperQuotient; } });
Object.defineProperty(exports, "isQuotientUnison", { enumerable: true, get: function () { return quotient_1.isQuotientUnison; } });
Object.defineProperty(exports, "computeSubQuotient", { enumerable: true, get: function () { return quotient_1.computeSubQuotient; } });
Object.defineProperty(exports, "invertQuotient", { enumerable: true, get: function () { return quotient_1.invertQuotient; } });
Object.defineProperty(exports, "computeQuotientFromMonzo", { enumerable: true, get: function () { return quotient_1.computeQuotientFromMonzo; } });
Object.defineProperty(exports, "areQuotientsEqual", { enumerable: true, get: function () { return quotient_1.areQuotientsEqual; } });
Object.defineProperty(exports, "computeQuotientProduct", { enumerable: true, get: function () { return quotient_1.computeQuotientProduct; } });
Object.defineProperty(exports, "halveQuotient", { enumerable: true, get: function () { return quotient_1.halveQuotient; } });
var monzo_1 = __webpack_require__(57);
Object.defineProperty(exports, "isMonzoSub", { enumerable: true, get: function () { return monzo_1.isMonzoSub; } });
Object.defineProperty(exports, "computeSuperMonzo", { enumerable: true, get: function () { return monzo_1.computeSuperMonzo; } });
Object.defineProperty(exports, "invertMonzo", { enumerable: true, get: function () { return monzo_1.invertMonzo; } });
Object.defineProperty(exports, "isMonzoSuper", { enumerable: true, get: function () { return monzo_1.isMonzoSuper; } });
Object.defineProperty(exports, "sumMonzos", { enumerable: true, get: function () { return monzo_1.sumMonzos; } });
Object.defineProperty(exports, "isMonzoUnison", { enumerable: true, get: function () { return monzo_1.isMonzoUnison; } });
Object.defineProperty(exports, "areMonzosEqual", { enumerable: true, get: function () { return monzo_1.areMonzosEqual; } });
Object.defineProperty(exports, "subtractMonzos", { enumerable: true, get: function () { return monzo_1.subtractMonzos; } });
Object.defineProperty(exports, "EMPTY_MONZO", { enumerable: true, get: function () { return monzo_1.EMPTY_MONZO; } });
Object.defineProperty(exports, "addMonzos", { enumerable: true, get: function () { return monzo_1.addMonzos; } });
Object.defineProperty(exports, "computeMonzoMapping", { enumerable: true, get: function () { return monzo_1.computeMonzoMapping; } });
Object.defineProperty(exports, "computePatentVal", { enumerable: true, get: function () { return monzo_1.computePatentVal; } });
var scamon_1 = __webpack_require__(167);
Object.defineProperty(exports, "isScamonSub", { enumerable: true, get: function () { return scamon_1.isScamonSub; } });
Object.defineProperty(exports, "isScamonSuper", { enumerable: true, get: function () { return scamon_1.isScamonSuper; } });
Object.defineProperty(exports, "isScamonUnison", { enumerable: true, get: function () { return scamon_1.isScamonUnison; } });
Object.defineProperty(exports, "computeSuperScamon", { enumerable: true, get: function () { return scamon_1.computeSuperScamon; } });
Object.defineProperty(exports, "areScamonsEqual", { enumerable: true, get: function () { return scamon_1.areScamonsEqual; } });
Object.defineProperty(exports, "isScamonGreater", { enumerable: true, get: function () { return scamon_1.isScamonGreater; } });
Object.defineProperty(exports, "isScamonLesser", { enumerable: true, get: function () { return scamon_1.isScamonLesser; } });
Object.defineProperty(exports, "isScamonLesserOrEqual", { enumerable: true, get: function () { return scamon_1.isScamonLesserOrEqual; } });
Object.defineProperty(exports, "isScamonGreaterOrEqual", { enumerable: true, get: function () { return scamon_1.isScamonGreaterOrEqual; } });
Object.defineProperty(exports, "halveScamon", { enumerable: true, get: function () { return scamon_1.halveScamon; } });
Object.defineProperty(exports, "computeScamonFromDecimal", { enumerable: true, get: function () { return scamon_1.computeScamonFromDecimal; } });
Object.defineProperty(exports, "computeScamonFromMonzo", { enumerable: true, get: function () { return scamon_1.computeScamonFromMonzo; } });
Object.defineProperty(exports, "computeScamonFromQuotient", { enumerable: true, get: function () { return scamon_1.computeScamonFromQuotient; } });
Object.defineProperty(exports, "addScamons", { enumerable: true, get: function () { return scamon_1.addScamons; } });
Object.defineProperty(exports, "invertScamon", { enumerable: true, get: function () { return scamon_1.invertScamon; } });
Object.defineProperty(exports, "multiplyScamon", { enumerable: true, get: function () { return scamon_1.multiplyScamon; } });
Object.defineProperty(exports, "scaleScamon", { enumerable: true, get: function () { return scamon_1.scaleScamon; } });
Object.defineProperty(exports, "maxScamon", { enumerable: true, get: function () { return scamon_1.maxScamon; } });
var types_1 = __webpack_require__(184);
Object.defineProperty(exports, "Direction", { enumerable: true, get: function () { return types_1.Direction; } });


/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.invertDecimal = exports.isDecimalSub = exports.isDecimalUnison = exports.isDecimalSuper = exports.computeDecimalFromQuotient = exports.computeArithmeticMean = exports.reciprocal = exports.mod = exports.areDecimalsEqual = exports.computeDecimalFromMonzo = void 0;
var fromMonzo_1 = __webpack_require__(12);
Object.defineProperty(exports, "computeDecimalFromMonzo", { enumerable: true, get: function () { return fromMonzo_1.computeDecimalFromMonzo; } });
var comparison_1 = __webpack_require__(157);
Object.defineProperty(exports, "areDecimalsEqual", { enumerable: true, get: function () { return comparison_1.areDecimalsEqual; } });
var typedOperations_1 = __webpack_require__(158);
Object.defineProperty(exports, "mod", { enumerable: true, get: function () { return typedOperations_1.mod; } });
Object.defineProperty(exports, "reciprocal", { enumerable: true, get: function () { return typedOperations_1.reciprocal; } });
Object.defineProperty(exports, "computeArithmeticMean", { enumerable: true, get: function () { return typedOperations_1.computeArithmeticMean; } });
var fromQuotient_1 = __webpack_require__(159);
Object.defineProperty(exports, "computeDecimalFromQuotient", { enumerable: true, get: function () { return fromQuotient_1.computeDecimalFromQuotient; } });
var direction_1 = __webpack_require__(160);
Object.defineProperty(exports, "isDecimalSuper", { enumerable: true, get: function () { return direction_1.isDecimalSuper; } });
Object.defineProperty(exports, "isDecimalUnison", { enumerable: true, get: function () { return direction_1.isDecimalUnison; } });
Object.defineProperty(exports, "isDecimalSub", { enumerable: true, get: function () { return direction_1.isDecimalSub; } });
Object.defineProperty(exports, "invertDecimal", { enumerable: true, get: function () { return direction_1.invertDecimal; } });


/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.computeDecimalFromMonzo = void 0;
var code_1 = __webpack_require__(4);
var constants_1 = __webpack_require__(9);
var rational_1 = __webpack_require__(13);
var typedOperations_1 = __webpack_require__(8);
var monzo_1 = __webpack_require__(57);
var isDecimalWithLostPrecision = function (decimal) {
    return isNaN(decimal) || decimal > code_1.MAX_JS_VALUE_PRESERVING_MAX_PRECISION || decimal < code_1.MIN_JS_VALUE_PRESERVING_MAX_PRECISION;
};
var computeDecimalFromHugeMonzo = function (monzo) {
    var decimal = constants_1.MULTIPLICATIVE_IDENTITY;
    var depletingMonzo = code_1.shallowClone(monzo);
    var maybeNewDecimal;
    var negative;
    var prime;
    var index;
    while (!monzo_1.isMonzoUnison(depletingMonzo)) {
        index = depletingMonzo.length;
        maybeNewDecimal = NaN;
        while (isDecimalWithLostPrecision(maybeNewDecimal)) {
            index = code_1.decrement(index);
            if (depletingMonzo[index] === 0)
                continue;
            if (index < 0)
                return maybeNewDecimal;
            negative = depletingMonzo[index] < 0;
            prime = rational_1.primes[index];
            maybeNewDecimal = decimal * (negative ? 1 / prime : prime);
        }
        decimal = maybeNewDecimal;
        if (negative) {
            depletingMonzo[index] = code_1.increment(depletingMonzo[index]);
        }
        else {
            depletingMonzo[index] = code_1.decrement(depletingMonzo[index]);
        }
        if (depletingMonzo[index] === 0 && index === code_1.indexOfFinalElement(depletingMonzo))
            depletingMonzo.pop();
    }
    return decimal;
};
var computeDecimalFromMonzo = function (monzo) {
    var decimal = monzo.reduce(function (decimal, primeExponent, index) {
        return decimal * typedOperations_1.pow(rational_1.primes[index], primeExponent);
    }, constants_1.MULTIPLICATIVE_IDENTITY);
    if (isDecimalWithLostPrecision(decimal)) {
        return computeDecimalFromHugeMonzo(monzo);
    }
    return decimal;
};
exports.computeDecimalFromMonzo = computeDecimalFromMonzo;


/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.isScamonRational = exports.computeRationalScamonFromRationalQuotient = exports.computeRationalScamonFromRationalMonzo = exports.computeRationalScamonFromRationalDecimal = exports.computeRationalMonzoFromRationalScamon = exports.isRationalMonzoSmooth = exports.isMonzoRational = exports.computeRationalMonzoSopfr = exports.computeRationalMonzoSmoothness = exports.computeRationalMonzoCopfr = exports.computeRationalMonzoFromRationalDecimal = exports.doForEachRationalMonzo = exports.isRationalMonzoRough = exports.computeRoughRationalMonzo = exports.computeRationalMonzoFromRationalQuotient = exports.computeRationalQuotientSmoothness = exports.isLowestTerms = exports.computeRationalQuotientFromRationalScamon = exports.areRationalQuotientsEqual = exports.computeLowestTermsRationalQuotient = exports.isQuotientRational = exports.computeRationalQuotientFromRationalDecimal = exports.isRationalQuotientSmooth = exports.computeRoughRationalQuotient = exports.isRationalQuotientRough = exports.computeRationalDecimalCopf = exports.computeRationalDecimalGpf = exports.computeRationalDecimalCopfr = exports.isDecimalRational = exports.integerDivide = exports.floor = exports.ceil = exports.computeRationalDecimalSmoothness = exports.computeIntegerDecimalSmoothness = exports.isIntegerDecimalRough = exports.isDecimalInteger = exports.computeGreatestCommonDivisor = exports.primes = exports.computePrimes = exports.computeSmoothnessIndex = exports.computeRoughnessIndex = exports.computePrimeCount = exports.FIVE_SMOOTHNESS = exports.TWO_PRIME_INDEX = exports.THREE_SMOOTHNESS = exports.THREE_ROUGHNESS = exports.THREE_PRIME_INDEX = exports.ONE = exports.FIVE_ROUGHNESS = exports.FIVE_PRIME_INDEX = void 0;
exports.sumRationalScamons = exports.subtractRationalScamons = exports.isRationalScamonSmooth = exports.computeRationalScamonSmoothness = exports.isRationalScamonRough = exports.computeRationalScamonGeometricMean = exports.addRationalScamons = exports.isRationalScamonUnison = exports.isRationalScamonSub = exports.areRationalScamonsEqual = exports.computeRationalScamonSopfr = exports.computeRationalScamonCopfr = void 0;
var constants_1 = __webpack_require__(14);
Object.defineProperty(exports, "FIVE_PRIME_INDEX", { enumerable: true, get: function () { return constants_1.FIVE_PRIME_INDEX; } });
Object.defineProperty(exports, "FIVE_ROUGHNESS", { enumerable: true, get: function () { return constants_1.FIVE_ROUGHNESS; } });
Object.defineProperty(exports, "ONE", { enumerable: true, get: function () { return constants_1.ONE; } });
Object.defineProperty(exports, "THREE_PRIME_INDEX", { enumerable: true, get: function () { return constants_1.THREE_PRIME_INDEX; } });
Object.defineProperty(exports, "THREE_ROUGHNESS", { enumerable: true, get: function () { return constants_1.THREE_ROUGHNESS; } });
Object.defineProperty(exports, "THREE_SMOOTHNESS", { enumerable: true, get: function () { return constants_1.THREE_SMOOTHNESS; } });
Object.defineProperty(exports, "TWO_PRIME_INDEX", { enumerable: true, get: function () { return constants_1.TWO_PRIME_INDEX; } });
Object.defineProperty(exports, "FIVE_SMOOTHNESS", { enumerable: true, get: function () { return constants_1.FIVE_SMOOTHNESS; } });
var primeCount_1 = __webpack_require__(15);
Object.defineProperty(exports, "computePrimeCount", { enumerable: true, get: function () { return primeCount_1.computePrimeCount; } });
Object.defineProperty(exports, "computeRoughnessIndex", { enumerable: true, get: function () { return primeCount_1.computeRoughnessIndex; } });
Object.defineProperty(exports, "computeSmoothnessIndex", { enumerable: true, get: function () { return primeCount_1.computeSmoothnessIndex; } });
var primes_1 = __webpack_require__(16);
Object.defineProperty(exports, "computePrimes", { enumerable: true, get: function () { return primes_1.computePrimes; } });
Object.defineProperty(exports, "primes", { enumerable: true, get: function () { return primes_1.primes; } });
var common_1 = __webpack_require__(17);
Object.defineProperty(exports, "computeGreatestCommonDivisor", { enumerable: true, get: function () { return common_1.computeGreatestCommonDivisor; } });
var decimal_1 = __webpack_require__(18);
Object.defineProperty(exports, "isDecimalInteger", { enumerable: true, get: function () { return decimal_1.isDecimalInteger; } });
Object.defineProperty(exports, "isIntegerDecimalRough", { enumerable: true, get: function () { return decimal_1.isIntegerDecimalRough; } });
Object.defineProperty(exports, "computeIntegerDecimalSmoothness", { enumerable: true, get: function () { return decimal_1.computeIntegerDecimalSmoothness; } });
Object.defineProperty(exports, "computeRationalDecimalSmoothness", { enumerable: true, get: function () { return decimal_1.computeRationalDecimalSmoothness; } });
Object.defineProperty(exports, "ceil", { enumerable: true, get: function () { return decimal_1.ceil; } });
Object.defineProperty(exports, "floor", { enumerable: true, get: function () { return decimal_1.floor; } });
Object.defineProperty(exports, "integerDivide", { enumerable: true, get: function () { return decimal_1.integerDivide; } });
Object.defineProperty(exports, "isDecimalRational", { enumerable: true, get: function () { return decimal_1.isDecimalRational; } });
Object.defineProperty(exports, "computeRationalDecimalCopfr", { enumerable: true, get: function () { return decimal_1.computeRationalDecimalCopfr; } });
Object.defineProperty(exports, "computeRationalDecimalGpf", { enumerable: true, get: function () { return decimal_1.computeRationalDecimalGpf; } });
Object.defineProperty(exports, "computeRationalDecimalCopf", { enumerable: true, get: function () { return decimal_1.computeRationalDecimalCopf; } });
var quotient_1 = __webpack_require__(22);
Object.defineProperty(exports, "isRationalQuotientRough", { enumerable: true, get: function () { return quotient_1.isRationalQuotientRough; } });
Object.defineProperty(exports, "computeRoughRationalQuotient", { enumerable: true, get: function () { return quotient_1.computeRoughRationalQuotient; } });
Object.defineProperty(exports, "isRationalQuotientSmooth", { enumerable: true, get: function () { return quotient_1.isRationalQuotientSmooth; } });
Object.defineProperty(exports, "computeRationalQuotientFromRationalDecimal", { enumerable: true, get: function () { return quotient_1.computeRationalQuotientFromRationalDecimal; } });
Object.defineProperty(exports, "isQuotientRational", { enumerable: true, get: function () { return quotient_1.isQuotientRational; } });
Object.defineProperty(exports, "computeLowestTermsRationalQuotient", { enumerable: true, get: function () { return quotient_1.computeLowestTermsRationalQuotient; } });
Object.defineProperty(exports, "areRationalQuotientsEqual", { enumerable: true, get: function () { return quotient_1.areRationalQuotientsEqual; } });
Object.defineProperty(exports, "computeRationalQuotientFromRationalScamon", { enumerable: true, get: function () { return quotient_1.computeRationalQuotientFromRationalScamon; } });
Object.defineProperty(exports, "isLowestTerms", { enumerable: true, get: function () { return quotient_1.isLowestTerms; } });
Object.defineProperty(exports, "computeRationalQuotientSmoothness", { enumerable: true, get: function () { return quotient_1.computeRationalQuotientSmoothness; } });
var monzo_1 = __webpack_require__(20);
Object.defineProperty(exports, "computeRationalMonzoFromRationalQuotient", { enumerable: true, get: function () { return monzo_1.computeRationalMonzoFromRationalQuotient; } });
Object.defineProperty(exports, "computeRoughRationalMonzo", { enumerable: true, get: function () { return monzo_1.computeRoughRationalMonzo; } });
Object.defineProperty(exports, "isRationalMonzoRough", { enumerable: true, get: function () { return monzo_1.isRationalMonzoRough; } });
Object.defineProperty(exports, "doForEachRationalMonzo", { enumerable: true, get: function () { return monzo_1.doForEachRationalMonzo; } });
Object.defineProperty(exports, "computeRationalMonzoFromRationalDecimal", { enumerable: true, get: function () { return monzo_1.computeRationalMonzoFromRationalDecimal; } });
Object.defineProperty(exports, "computeRationalMonzoCopfr", { enumerable: true, get: function () { return monzo_1.computeRationalMonzoCopfr; } });
Object.defineProperty(exports, "computeRationalMonzoSmoothness", { enumerable: true, get: function () { return monzo_1.computeRationalMonzoSmoothness; } });
Object.defineProperty(exports, "computeRationalMonzoSopfr", { enumerable: true, get: function () { return monzo_1.computeRationalMonzoSopfr; } });
Object.defineProperty(exports, "isMonzoRational", { enumerable: true, get: function () { return monzo_1.isMonzoRational; } });
Object.defineProperty(exports, "isRationalMonzoSmooth", { enumerable: true, get: function () { return monzo_1.isRationalMonzoSmooth; } });
Object.defineProperty(exports, "computeRationalMonzoFromRationalScamon", { enumerable: true, get: function () { return monzo_1.computeRationalMonzoFromRationalScamon; } });
var scamon_1 = __webpack_require__(47);
Object.defineProperty(exports, "computeRationalScamonFromRationalDecimal", { enumerable: true, get: function () { return scamon_1.computeRationalScamonFromRationalDecimal; } });
Object.defineProperty(exports, "computeRationalScamonFromRationalMonzo", { enumerable: true, get: function () { return scamon_1.computeRationalScamonFromRationalMonzo; } });
Object.defineProperty(exports, "computeRationalScamonFromRationalQuotient", { enumerable: true, get: function () { return scamon_1.computeRationalScamonFromRationalQuotient; } });
Object.defineProperty(exports, "isScamonRational", { enumerable: true, get: function () { return scamon_1.isScamonRational; } });
Object.defineProperty(exports, "computeRationalScamonCopfr", { enumerable: true, get: function () { return scamon_1.computeRationalScamonCopfr; } });
Object.defineProperty(exports, "computeRationalScamonSopfr", { enumerable: true, get: function () { return scamon_1.computeRationalScamonSopfr; } });
Object.defineProperty(exports, "areRationalScamonsEqual", { enumerable: true, get: function () { return scamon_1.areRationalScamonsEqual; } });
Object.defineProperty(exports, "isRationalScamonSub", { enumerable: true, get: function () { return scamon_1.isRationalScamonSub; } });
Object.defineProperty(exports, "isRationalScamonUnison", { enumerable: true, get: function () { return scamon_1.isRationalScamonUnison; } });
Object.defineProperty(exports, "addRationalScamons", { enumerable: true, get: function () { return scamon_1.addRationalScamons; } });
Object.defineProperty(exports, "computeRationalScamonGeometricMean", { enumerable: true, get: function () { return scamon_1.computeRationalScamonGeometricMean; } });
Object.defineProperty(exports, "isRationalScamonRough", { enumerable: true, get: function () { return scamon_1.isRationalScamonRough; } });
Object.defineProperty(exports, "computeRationalScamonSmoothness", { enumerable: true, get: function () { return scamon_1.computeRationalScamonSmoothness; } });
Object.defineProperty(exports, "isRationalScamonSmooth", { enumerable: true, get: function () { return scamon_1.isRationalScamonSmooth; } });
Object.defineProperty(exports, "subtractRationalScamons", { enumerable: true, get: function () { return scamon_1.subtractRationalScamons; } });
Object.defineProperty(exports, "sumRationalScamons", { enumerable: true, get: function () { return scamon_1.sumRationalScamons; } });


/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.SMOOTH_ROUGH_OFFSET = exports.FIVE_SMOOTHNESS = exports.THREE_SMOOTHNESS = exports.THREE_ROUGHNESS = exports.ONE = exports.FIVE_ROUGHNESS = exports.FIVE_PRIME_INDEX = exports.THREE_PRIME_INDEX = exports.TWO_PRIME_INDEX = void 0;
var TWO_PRIME_INDEX = 0;
exports.TWO_PRIME_INDEX = TWO_PRIME_INDEX;
var THREE_PRIME_INDEX = 1;
exports.THREE_PRIME_INDEX = THREE_PRIME_INDEX;
var FIVE_PRIME_INDEX = 2;
exports.FIVE_PRIME_INDEX = FIVE_PRIME_INDEX;
var THREE_ROUGHNESS = 3;
exports.THREE_ROUGHNESS = THREE_ROUGHNESS;
var FIVE_ROUGHNESS = 5;
exports.FIVE_ROUGHNESS = FIVE_ROUGHNESS;
var THREE_SMOOTHNESS = 3;
exports.THREE_SMOOTHNESS = THREE_SMOOTHNESS;
var FIVE_SMOOTHNESS = 5;
exports.FIVE_SMOOTHNESS = FIVE_SMOOTHNESS;
var ONE = 1;
exports.ONE = ONE;
var SMOOTH_ROUGH_OFFSET = 1;
exports.SMOOTH_ROUGH_OFFSET = SMOOTH_ROUGH_OFFSET;


/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.computeSmoothnessIndex = exports.computeRoughnessIndex = exports.computePrimeCount = void 0;
var code_1 = __webpack_require__(4);
var constants_1 = __webpack_require__(14);
var primes_1 = __webpack_require__(16);
// Prime Counting Function (π)
// See: https://mathworld.wolfram.com/PrimeCountingFunction.html
var computePrimeCount = function (number) {
    var primes = primes_1.computePrimes(number + primes_1.MAX_PRIME_GAP_AT_MAX_POSSIBLE_PRIME_ABLE_TO_BE_COMPUTED);
    var count = primes.findIndex(function (prime) { return prime > number; });
    return count;
};
exports.computePrimeCount = computePrimeCount;
var computeRoughnessIndex = function (roughness) {
    var primes = primes_1.computePrimes();
    var index = primes.findIndex(function (prime) { return prime >= roughness; });
    if (index === -1) {
        throw new Error("Cannot compute roughness index for numbers greater than " + code_1.finalElement(primes) + ", the largest prime currently recognized.");
    }
    return index;
};
exports.computeRoughnessIndex = computeRoughnessIndex;
var computeSmoothnessIndex = function (smoothness) {
    return computeRoughnessIndex(smoothness) + constants_1.SMOOTH_ROUGH_OFFSET;
};
exports.computeSmoothnessIndex = computeSmoothnessIndex;


/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.primes = exports.computePrimes = exports.MAX_PRIME_GAP_AT_MAX_POSSIBLE_PRIME_ABLE_TO_BE_COMPUTED = exports.MAX_POSSIBLE_PRIME_THAT_SHOULD_BE_COMPUTED = void 0;
var code_1 = __webpack_require__(4);
var primes = [
    2,
    3,
    5,
    7,
    11,
    13,
    17,
    19,
    23,
    29,
    31,
    37,
    41,
    43,
    47,
    53,
    59,
    61,
    67,
    71,
    73,
    79,
    83,
    89,
    97,
    101,
    103,
    107,
    109,
    113,
    127,
    131,
    137,
    139,
    149,
    151,
    157,
    163,
    167,
    173,
    179,
    181,
    191,
    193,
    197,
    199,
    211,
    223,
    227,
    229,
    233,
    239,
    241,
    251,
    257,
    263,
    269,
    271,
    277,
    281,
    283,
    293,
    307,
    311,
    313,
    317,
    331,
    337,
    347,
    349,
    353,
    359,
    367,
    373,
    379,
    383,
    389,
    397,
    401,
    409,
    419,
    421,
    431,
    433,
    439,
    443,
    449,
    457,
    461,
    463,
    467,
    479,
    487,
    491,
    499,
    503,
    509,
    521,
    523,
    541,
    547,
    557,
    563,
    569,
    571,
    577,
    587,
    593,
    599,
    601,
    607,
    613,
    617,
    619,
    631,
    641,
    643,
    647,
    653,
    659,
    661,
    673,
    677,
    683,
    691,
    701,
    709,
    719,
    727,
    733,
    739,
    743,
    751,
    757,
    761,
    769,
    773,
    787,
    797,
    809,
    811,
    821,
    823,
    827,
    829,
    839,
    853,
    857,
    859,
    863,
    877,
    881,
    883,
    887,
    907,
    911,
    919,
    929,
    937,
    941,
    947,
    953,
    967,
    971,
    977,
    983,
    991,
    997,
];
exports.primes = primes;
var computePrimes = function (maxPossiblePrime) {
    if (maxPossiblePrime === void 0) { maxPossiblePrime = DEFAULT_MAX_POSSIBLE_PRIME; }
    if (maxPossiblePrime <= code_1.finalElement(primes)) {
        return primes;
    }
    if (maxPossiblePrime > MAX_POSSIBLE_PRIME_THAT_SHOULD_BE_COMPUTED) {
        throw new Error("Cannot compute primes greater than " + MAX_POSSIBLE_PRIME_THAT_SHOULD_BE_COMPUTED + "; " + maxPossiblePrime + " was requested.");
    }
    var primeToGoUpTo = maxPossiblePrime > MAX_MAX_POSSIBLE_PRIME_BEFORE_JUST_COMPUTE_ALL_ABLE ?
        MAX_POSSIBLE_PRIME_THAT_SHOULD_BE_COMPUTED :
        maxPossiblePrime;
    var sieve = [];
    var extendedPrimes = [];
    for (var i = 2; i <= primeToGoUpTo; i++) {
        if (!sieve[i]) {
            extendedPrimes.push(i);
            for (var j = i << 1; j <= primeToGoUpTo; j += i) {
                sieve[j] = true;
            }
        }
    }
    exports.primes = primes = extendedPrimes;
    return primes;
};
exports.computePrimes = computePrimes;
var DEFAULT_MAX_POSSIBLE_PRIME = 1000;
var MAX_POSSIBLE_PRIME_THAT_SHOULD_BE_COMPUTED = 262139;
exports.MAX_POSSIBLE_PRIME_THAT_SHOULD_BE_COMPUTED = MAX_POSSIBLE_PRIME_THAT_SHOULD_BE_COMPUTED;
var MAX_PRIME_GAP_AT_MAX_POSSIBLE_PRIME_ABLE_TO_BE_COMPUTED = 15;
exports.MAX_PRIME_GAP_AT_MAX_POSSIBLE_PRIME_ABLE_TO_BE_COMPUTED = MAX_PRIME_GAP_AT_MAX_POSSIBLE_PRIME_ABLE_TO_BE_COMPUTED;
var MAX_MAX_POSSIBLE_PRIME_BEFORE_JUST_COMPUTE_ALL_ABLE = 50000;


/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __read = (this && this.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
var __spread = (this && this.__spread) || function () {
    for (var ar = [], i = 0; i < arguments.length; i++) ar = ar.concat(__read(arguments[i]));
    return ar;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.computeGreatestCommonDivisor = exports.computeLeastCommonMultiple = void 0;
var code_1 = __webpack_require__(4);
var numeric_1 = __webpack_require__(10);
var typedOperations_1 = __webpack_require__(8);
var constants_1 = __webpack_require__(14);
var computeLowestCommonMultipleOfTwoIntegerDecimals = function (integerDecimalA, integerDecimalB) {
    return typedOperations_1.abs(typedOperations_1.divide(integerDecimalA * integerDecimalB, computeGreatestCommonDivisor(integerDecimalA, integerDecimalB)));
};
var computeGreatestCommonDivisorOfTwoIntegerDecimals = function (integerDecimalA, integerDecimalB) {
    var output = integerDecimalA;
    var remainder = integerDecimalB;
    while (remainder) {
        var previousRemainder = remainder;
        remainder = numeric_1.mod(output, remainder);
        output = previousRemainder;
    }
    return output;
};
var recurseCommon = function (commonFunction) {
    var integerDecimals = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        integerDecimals[_i - 1] = arguments[_i];
    }
    if (code_1.isSingleton(integerDecimals)) {
        return integerDecimals[0];
    }
    if (code_1.isEmpty(integerDecimals)) {
        return constants_1.ONE;
    }
    var result = commonFunction(integerDecimals[0], integerDecimals[1]);
    if (integerDecimals.length === 2) {
        return result;
    }
    return recurseCommon.apply(void 0, __spread([commonFunction, result], integerDecimals.slice(2)));
};
var computeCommon = function (integerDecimals, commonFunction) {
    if (code_1.isEmpty(integerDecimals)) {
        return constants_1.ONE;
    }
    if (code_1.allElementsEqual(integerDecimals)) {
        return integerDecimals[0];
    }
    return recurseCommon.apply(void 0, __spread([commonFunction], integerDecimals));
};
var computeLeastCommonMultiple = function () {
    var integerDecimals = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        integerDecimals[_i] = arguments[_i];
    }
    return computeCommon(integerDecimals, computeLowestCommonMultipleOfTwoIntegerDecimals);
};
exports.computeLeastCommonMultiple = computeLeastCommonMultiple;
var computeGreatestCommonDivisor = function () {
    var integerDecimals = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        integerDecimals[_i] = arguments[_i];
    }
    return computeCommon(integerDecimals, computeGreatestCommonDivisorOfTwoIntegerDecimals);
};
exports.computeGreatestCommonDivisor = computeGreatestCommonDivisor;


/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.integerDivide = exports.floor = exports.ceil = exports.isIntegerDecimalRough = exports.computeRoughIntegerDecimal = exports.computeIntegerDecimalSmoothness = exports.computeRationalDecimalSmoothness = exports.isIntegerDecimalSmooth = exports.isDecimalInteger = exports.isDecimalRational = exports.computeRationalDecimalGpf = exports.computeRationalDecimalFromRationalScamon = exports.computeRationalDecimalCopf = exports.computeRationalDecimalCopfr = void 0;
var copfr_1 = __webpack_require__(19);
Object.defineProperty(exports, "computeRationalDecimalCopfr", { enumerable: true, get: function () { return copfr_1.computeRationalDecimalCopfr; } });
var copf_1 = __webpack_require__(40);
Object.defineProperty(exports, "computeRationalDecimalCopf", { enumerable: true, get: function () { return copf_1.computeRationalDecimalCopf; } });
var fromScamon_1 = __webpack_require__(41);
Object.defineProperty(exports, "computeRationalDecimalFromRationalScamon", { enumerable: true, get: function () { return fromScamon_1.computeRationalDecimalFromRationalScamon; } });
var gpf_1 = __webpack_require__(42);
Object.defineProperty(exports, "computeRationalDecimalGpf", { enumerable: true, get: function () { return gpf_1.computeRationalDecimalGpf; } });
var typeGuards_1 = __webpack_require__(46);
Object.defineProperty(exports, "isDecimalRational", { enumerable: true, get: function () { return typeGuards_1.isDecimalRational; } });
Object.defineProperty(exports, "isDecimalInteger", { enumerable: true, get: function () { return typeGuards_1.isDecimalInteger; } });
var smoothness_1 = __webpack_require__(43);
Object.defineProperty(exports, "isIntegerDecimalSmooth", { enumerable: true, get: function () { return smoothness_1.isIntegerDecimalSmooth; } });
Object.defineProperty(exports, "computeRationalDecimalSmoothness", { enumerable: true, get: function () { return smoothness_1.computeRationalDecimalSmoothness; } });
Object.defineProperty(exports, "computeIntegerDecimalSmoothness", { enumerable: true, get: function () { return smoothness_1.computeIntegerDecimalSmoothness; } });
var roughness_1 = __webpack_require__(44);
Object.defineProperty(exports, "computeRoughIntegerDecimal", { enumerable: true, get: function () { return roughness_1.computeRoughIntegerDecimal; } });
Object.defineProperty(exports, "isIntegerDecimalRough", { enumerable: true, get: function () { return roughness_1.isIntegerDecimalRough; } });
var typedOperations_1 = __webpack_require__(45);
Object.defineProperty(exports, "ceil", { enumerable: true, get: function () { return typedOperations_1.ceil; } });
Object.defineProperty(exports, "floor", { enumerable: true, get: function () { return typedOperations_1.floor; } });
Object.defineProperty(exports, "integerDivide", { enumerable: true, get: function () { return typedOperations_1.integerDivide; } });


/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.computeRationalDecimalCopfr = void 0;
var monzo_1 = __webpack_require__(20);
// Count Of Prime Factors with Repetition (big omega, Ω)
var computeRationalDecimalCopfr = function (rationalDecimal) {
    var rationalMonzo = monzo_1.computeRationalMonzoFromRationalDecimal(rationalDecimal);
    return monzo_1.computeRationalMonzoCopfr(rationalMonzo);
};
exports.computeRationalDecimalCopfr = computeRationalDecimalCopfr;


/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.computeRationalMonzoFromRationalScamon = exports.doForEachRationalMonzo = exports.isMonzoRational = exports.computeRationalMonzoSopfr = exports.computeRationalMonzoCopfr = exports.computeRationalMonzoSmoothness = exports.isRationalMonzoSmooth = exports.computeRoughRationalMonzo = exports.isRationalMonzoRough = exports.computeRationalMonzoFromRationalQuotient = exports.computeRationalMonzoFromRationalDecimal = void 0;
var fromDecimal_1 = __webpack_require__(21);
Object.defineProperty(exports, "computeRationalMonzoFromRationalDecimal", { enumerable: true, get: function () { return fromDecimal_1.computeRationalMonzoFromRationalDecimal; } });
var fromQuotient_1 = __webpack_require__(32);
Object.defineProperty(exports, "computeRationalMonzoFromRationalQuotient", { enumerable: true, get: function () { return fromQuotient_1.computeRationalMonzoFromRationalQuotient; } });
var roughness_1 = __webpack_require__(33);
Object.defineProperty(exports, "isRationalMonzoRough", { enumerable: true, get: function () { return roughness_1.isRationalMonzoRough; } });
Object.defineProperty(exports, "computeRoughRationalMonzo", { enumerable: true, get: function () { return roughness_1.computeRoughRationalMonzo; } });
var smoothness_1 = __webpack_require__(34);
Object.defineProperty(exports, "isRationalMonzoSmooth", { enumerable: true, get: function () { return smoothness_1.isRationalMonzoSmooth; } });
Object.defineProperty(exports, "computeRationalMonzoSmoothness", { enumerable: true, get: function () { return smoothness_1.computeRationalMonzoSmoothness; } });
var copfr_1 = __webpack_require__(35);
Object.defineProperty(exports, "computeRationalMonzoCopfr", { enumerable: true, get: function () { return copfr_1.computeRationalMonzoCopfr; } });
var sopfr_1 = __webpack_require__(36);
Object.defineProperty(exports, "computeRationalMonzoSopfr", { enumerable: true, get: function () { return sopfr_1.computeRationalMonzoSopfr; } });
var typeGuards_1 = __webpack_require__(37);
Object.defineProperty(exports, "isMonzoRational", { enumerable: true, get: function () { return typeGuards_1.isMonzoRational; } });
var doForEachMonzo_1 = __webpack_require__(38);
Object.defineProperty(exports, "doForEachRationalMonzo", { enumerable: true, get: function () { return doForEachMonzo_1.doForEachRationalMonzo; } });
var fromScamon_1 = __webpack_require__(39);
Object.defineProperty(exports, "computeRationalMonzoFromRationalScamon", { enumerable: true, get: function () { return fromScamon_1.computeRationalMonzoFromRationalScamon; } });


/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.computeIntegerMonzoFromIntegerDecimal = exports.computeRationalMonzoFromRationalDecimal = void 0;
var code_1 = __webpack_require__(4);
var primes_1 = __webpack_require__(16);
var quotient_1 = __webpack_require__(22);
var fromQuotient_1 = __webpack_require__(32);
var computeRationalMonzoFromRationalDecimal = function (rationalDecimal) {
    if (rationalDecimal < 0)
        throw new Error("Cannot convert " + rationalDecimal + " to a monzo because it is negative.");
    var rationalQuotient = quotient_1.computeRationalQuotientFromRationalDecimal(rationalDecimal);
    return fromQuotient_1.computeRationalMonzoFromRationalQuotient(rationalQuotient);
};
exports.computeRationalMonzoFromRationalDecimal = computeRationalMonzoFromRationalDecimal;
var computeIntegerMonzoFromIntegerDecimal = function (integerDecimal) {
    var integerMonzo = [];
    var remnant = integerDecimal;
    if (integerDecimal > code_1.MAX_JS_INTEGER_VALUE) {
        throw new Error("This integer " + integerDecimal + " is larger than the maximum integer JavaScript can encode (double float precision, 2^53) and therefore will be rounded and be unable to be prime factored properly.");
    }
    var primes = primes_1.computePrimes(integerDecimal > primes_1.MAX_POSSIBLE_PRIME_THAT_SHOULD_BE_COMPUTED ? undefined : integerDecimal);
    var index = 0;
    var divisor = primes[index];
    integerMonzo[index] = 0;
    while (remnant > 1) {
        if (remnant % divisor === 0) {
            remnant = remnant / divisor;
            integerMonzo[index] = integerMonzo[index] + 1;
        }
        else {
            if (index === code_1.indexOfFinalElement(primes)) {
                throw new Error("This integer " + integerDecimal + " contains primes which are too big; remainder is " + remnant);
            }
            index = index + 1;
            divisor = primes[index];
            integerMonzo[index] = 0;
        }
    }
    return integerMonzo;
};
exports.computeIntegerMonzoFromIntegerDecimal = computeIntegerMonzoFromIntegerDecimal;


/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.computeRationalQuotientFromRationalScamon = exports.isLowestTerms = exports.computeLowestTermsRationalQuotient = exports.computeRationalQuotientProduct = exports.areRationalQuotientsEqual = exports.isQuotientRational = exports.computeRationalQuotientFromRationalDecimal = exports.computeRationalQuotientSmoothness = exports.isRationalQuotientSmooth = exports.computeRoughRationalQuotient = exports.isRationalQuotientRough = void 0;
var roughness_1 = __webpack_require__(23);
Object.defineProperty(exports, "isRationalQuotientRough", { enumerable: true, get: function () { return roughness_1.isRationalQuotientRough; } });
Object.defineProperty(exports, "computeRoughRationalQuotient", { enumerable: true, get: function () { return roughness_1.computeRoughRationalQuotient; } });
var smoothness_1 = __webpack_require__(24);
Object.defineProperty(exports, "isRationalQuotientSmooth", { enumerable: true, get: function () { return smoothness_1.isRationalQuotientSmooth; } });
Object.defineProperty(exports, "computeRationalQuotientSmoothness", { enumerable: true, get: function () { return smoothness_1.computeRationalQuotientSmoothness; } });
var fromDecimal_1 = __webpack_require__(25);
Object.defineProperty(exports, "computeRationalQuotientFromRationalDecimal", { enumerable: true, get: function () { return fromDecimal_1.computeRationalQuotientFromRationalDecimal; } });
var typeGuards_1 = __webpack_require__(27);
Object.defineProperty(exports, "isQuotientRational", { enumerable: true, get: function () { return typeGuards_1.isQuotientRational; } });
var comparison_1 = __webpack_require__(29);
Object.defineProperty(exports, "areRationalQuotientsEqual", { enumerable: true, get: function () { return comparison_1.areRationalQuotientsEqual; } });
var typedOperations_1 = __webpack_require__(30);
Object.defineProperty(exports, "computeRationalQuotientProduct", { enumerable: true, get: function () { return typedOperations_1.computeRationalQuotientProduct; } });
var lowestTerms_1 = __webpack_require__(26);
Object.defineProperty(exports, "computeLowestTermsRationalQuotient", { enumerable: true, get: function () { return lowestTerms_1.computeLowestTermsRationalQuotient; } });
Object.defineProperty(exports, "isLowestTerms", { enumerable: true, get: function () { return lowestTerms_1.isLowestTerms; } });
var fromScamon_1 = __webpack_require__(31);
Object.defineProperty(exports, "computeRationalQuotientFromRationalScamon", { enumerable: true, get: function () { return fromScamon_1.computeRationalQuotientFromRationalScamon; } });


/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __read = (this && this.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.isRationalQuotientRough = exports.computeRoughRationalQuotient = void 0;
var decimal_1 = __webpack_require__(18);
var computeRoughRationalQuotient = function (_a, roughness) {
    var _b = __read(_a, 2), numerator = _b[0], denominator = _b[1];
    // @ts-ignore
    return ([decimal_1.computeRoughIntegerDecimal(numerator, roughness), decimal_1.computeRoughIntegerDecimal(denominator, roughness)]);
};
exports.computeRoughRationalQuotient = computeRoughRationalQuotient;
var isRationalQuotientRough = function (candidateRoughRationalQuotient, roughness) {
    var _a = __read(candidateRoughRationalQuotient, 2), numerator = _a[0], denominator = _a[1];
    return decimal_1.isIntegerDecimalRough(numerator, roughness) && decimal_1.isIntegerDecimalRough(denominator, roughness);
};
exports.isRationalQuotientRough = isRationalQuotientRough;


/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __read = (this && this.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.computeRationalQuotientSmoothness = exports.isRationalQuotientSmooth = void 0;
var typedOperations_1 = __webpack_require__(8);
var decimal_1 = __webpack_require__(18);
var isRationalQuotientSmooth = function (rationalQuotient, smoothness) {
    var _a = __read(rationalQuotient, 2), numerator = _a[0], denominator = _a[1];
    return decimal_1.isIntegerDecimalSmooth(numerator, smoothness) && decimal_1.isIntegerDecimalSmooth(denominator, smoothness);
};
exports.isRationalQuotientSmooth = isRationalQuotientSmooth;
var computeRationalQuotientSmoothness = function (rationalQuotient) {
    var _a = __read(rationalQuotient, 2), numerator = _a[0], denominator = _a[1];
    return typedOperations_1.max(decimal_1.computeIntegerDecimalSmoothness(numerator), decimal_1.computeIntegerDecimalSmoothness(denominator));
};
exports.computeRationalQuotientSmoothness = computeRationalQuotientSmoothness;


/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.computeRationalQuotientFromRationalDecimal = void 0;
var typedOperations_1 = __webpack_require__(8);
var decimal_1 = __webpack_require__(18);
var lowestTerms_1 = __webpack_require__(26);
var computeRationalQuotientFromRationalDecimal = function (rationalDecimal) {
    var integerDenominator = 1;
    var rationalNumerator = rationalDecimal;
    while (!decimal_1.isDecimalInteger(rationalNumerator)) {
        integerDenominator = typedOperations_1.multiply(integerDenominator, 10);
        rationalNumerator = rationalNumerator * 10;
    }
    var rationalQuotient = [
        rationalNumerator,
        integerDenominator,
    ];
    return lowestTerms_1.computeLowestTermsRationalQuotient(rationalQuotient);
};
exports.computeRationalQuotientFromRationalDecimal = computeRationalQuotientFromRationalDecimal;


/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __read = (this && this.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.computeLowestTermsRationalQuotient = exports.isLowestTerms = void 0;
var code_1 = __webpack_require__(4);
var typedOperations_1 = __webpack_require__(8);
var common_1 = __webpack_require__(17);
var computeLowestTermsRationalQuotient = function (_a) {
    var _b = __read(_a, 2), numerator = _b[0], denominator = _b[1];
    var greatestCommonDivisor = common_1.computeGreatestCommonDivisor(numerator, denominator);
    return [
        typedOperations_1.divide(numerator, greatestCommonDivisor),
        typedOperations_1.divide(denominator, greatestCommonDivisor),
    ];
};
exports.computeLowestTermsRationalQuotient = computeLowestTermsRationalQuotient;
var isLowestTerms = function (rationalQuotient) {
    return code_1.deepEquals(rationalQuotient, computeLowestTermsRationalQuotient(rationalQuotient));
};
exports.isLowestTerms = isLowestTerms;


/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __read = (this && this.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.isQuotientInteger = exports.isQuotientRational = void 0;
var dividesEvenly_1 = __webpack_require__(28);
var decimal_1 = __webpack_require__(18);
var isQuotientRational = function (candidateRationalQuotient) {
    var _a = __read(candidateRationalQuotient, 2), numerator = _a[0], denominator = _a[1];
    return decimal_1.isDecimalInteger(numerator) && decimal_1.isDecimalInteger(denominator);
};
exports.isQuotientRational = isQuotientRational;
var isQuotientInteger = function (candidateIntegerQuotient) {
    var _a = __read(candidateIntegerQuotient, 2), numerator = _a[0], denominator = _a[1];
    return dividesEvenly_1.dividesEvenly(numerator, denominator);
};
exports.isQuotientInteger = isQuotientInteger;


/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.isOdd = exports.isEven = exports.dividesEvenly = void 0;
var dividesEvenly = function (number, modulus) {
    return number % modulus === 0;
};
exports.dividesEvenly = dividesEvenly;
var isEven = function (number) {
    return dividesEvenly(number, 2);
};
exports.isEven = isEven;
var isOdd = function (number) {
    return !isEven(number);
};
exports.isOdd = isOdd;


/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.areRationalQuotientsEqual = void 0;
var code_1 = __webpack_require__(4);
var lowestTerms_1 = __webpack_require__(26);
var areRationalQuotientsEqual = function (rationalQuotientA, rationalQuotientB) {
    return code_1.deepEquals(lowestTerms_1.computeLowestTermsRationalQuotient(rationalQuotientA), lowestTerms_1.computeLowestTermsRationalQuotient(rationalQuotientB));
};
exports.areRationalQuotientsEqual = areRationalQuotientsEqual;


/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __read = (this && this.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
var __spread = (this && this.__spread) || function () {
    for (var ar = [], i = 0; i < arguments.length; i++) ar = ar.concat(__read(arguments[i]));
    return ar;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.computeRationalQuotientProduct = void 0;
var numeric_1 = __webpack_require__(10);
var lowestTerms_1 = __webpack_require__(26);
var computeRationalQuotientProduct = function () {
    var rationalQuotients = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        rationalQuotients[_i] = arguments[_i];
    }
    return lowestTerms_1.computeLowestTermsRationalQuotient(numeric_1.computeQuotientProduct.apply(void 0, __spread(rationalQuotients)));
};
exports.computeRationalQuotientProduct = computeRationalQuotientProduct;
var halveRationalQuotient = function (rationalQuotient) {
    return lowestTerms_1.computeLowestTermsRationalQuotient(numeric_1.halveQuotient(rationalQuotient));
};


/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.computeRationalQuotientFromRationalScamon = void 0;
var numeric_1 = __webpack_require__(10);
var computeRationalQuotientFromRationalScamon = function (rationalScamon) {
    return numeric_1.computeQuotientFromMonzo(rationalScamon.monzo);
};
exports.computeRationalQuotientFromRationalScamon = computeRationalQuotientFromRationalScamon;


/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __read = (this && this.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.computeRationalMonzoFromRationalQuotient = void 0;
var numeric_1 = __webpack_require__(10);
var fromDecimal_1 = __webpack_require__(21);
var computeRationalMonzoFromRationalQuotient = function (_a) {
    var _b = __read(_a, 2), numerator = _b[0], denominator = _b[1];
    var positiveFactors = fromDecimal_1.computeIntegerMonzoFromIntegerDecimal(numerator);
    var negativeFactors = numeric_1.invertMonzo(fromDecimal_1.computeIntegerMonzoFromIntegerDecimal(denominator));
    return numeric_1.sumMonzos(positiveFactors, negativeFactors);
};
exports.computeRationalMonzoFromRationalQuotient = computeRationalMonzoFromRationalQuotient;


/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.isRationalMonzoRough = exports.computeRoughRationalMonzo = void 0;
var code_1 = __webpack_require__(4);
var primeCount_1 = __webpack_require__(15);
var computeRoughRationalMonzo = function (rationalMonzo, roughness) {
    var roughnessIndex = primeCount_1.computeRoughnessIndex(roughness);
    return code_1.computeTrimmedArray(rationalMonzo.map(function (primeExponent, index) {
        return index < roughnessIndex ?
            0 :
            primeExponent;
    }));
};
exports.computeRoughRationalMonzo = computeRoughRationalMonzo;
var isRationalMonzoRough = function (candidateRoughRationalMonzo, roughness) {
    var roughnessIndex = primeCount_1.computeRoughnessIndex(roughness);
    var index = 0;
    while (index < roughnessIndex) {
        if (candidateRoughRationalMonzo[index] !== 0)
            return false;
        index = code_1.increment(index);
    }
    return true;
};
exports.isRationalMonzoRough = isRationalMonzoRough;


/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.computeRationalMonzoSmoothness = exports.isRationalMonzoSmooth = void 0;
var code_1 = __webpack_require__(4);
var typedOperations_1 = __webpack_require__(8);
var primeCount_1 = __webpack_require__(15);
var primes_1 = __webpack_require__(16);
var isRationalMonzoSmooth = function (candidateSmoothRationalMonzo, smoothness) {
    var smoothnessIndex = primeCount_1.computeSmoothnessIndex(smoothness);
    while (smoothnessIndex < typedOperations_1.count(candidateSmoothRationalMonzo)) {
        if (candidateSmoothRationalMonzo[smoothnessIndex] !== 0)
            return false;
        smoothnessIndex = code_1.increment(smoothnessIndex);
    }
    return true;
};
exports.isRationalMonzoSmooth = isRationalMonzoSmooth;
var computeRationalMonzoSmoothness = function (rationalMonzo) {
    var trimmedMonzo = code_1.computeTrimmedArray(rationalMonzo);
    if (code_1.isEmpty(trimmedMonzo)) {
        return 1;
    }
    var primes = primes_1.computePrimes();
    return primes[code_1.indexOfFinalElement(trimmedMonzo)];
};
exports.computeRationalMonzoSmoothness = computeRationalMonzoSmoothness;


/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.computeRationalMonzoCopfr = void 0;
var typedOperations_1 = __webpack_require__(8);
// Count Of Prime Factors with Repetition (big omega, Ω)
var computeRationalMonzoCopfr = function (rationalMonzo) {
    return rationalMonzo.reduce(function (copfr, primeExponent) {
        return copfr + typedOperations_1.abs(primeExponent);
    }, 0);
};
exports.computeRationalMonzoCopfr = computeRationalMonzoCopfr;


/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.computeRationalMonzoSopfr = void 0;
var typedOperations_1 = __webpack_require__(8);
var primes_1 = __webpack_require__(16);
// Sum Of Prime Factors with Repetition
var computeRationalMonzoSopfr = function (rationalMonzo) {
    var primes = primes_1.computePrimes();
    return rationalMonzo.reduce(function (sopfr, primeExponent, index) {
        var prime = typedOperations_1.abs(primeExponent * primes[index]);
        return sopfr + prime;
    }, 0);
};
exports.computeRationalMonzoSopfr = computeRationalMonzoSopfr;


/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.isMonzoRational = exports.isMonzoInteger = void 0;
var decimal_1 = __webpack_require__(18);
var isMonzoRational = function (candidateRationalMonzo) {
    return candidateRationalMonzo.every(function (primeExponent) { return decimal_1.isDecimalInteger(primeExponent); });
};
exports.isMonzoRational = isMonzoRational;
var isMonzoInteger = function (candidateIntegerMonzo) {
    return isMonzoRational(candidateIntegerMonzo) &&
        candidateIntegerMonzo.every(function (primeExponent) { return primeExponent >= 0; });
};
exports.isMonzoInteger = isMonzoInteger;


/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __read = (this && this.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
var __spread = (this && this.__spread) || function () {
    for (var ar = [], i = 0; i < arguments.length; i++) ar = ar.concat(__read(arguments[i]));
    return ar;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.doForEachRationalMonzo = void 0;
var code_1 = __webpack_require__(4);
var doForEachRationalMonzo = function (primeExponentExtremas, workFunction) {
    var args = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        args[_i - 2] = arguments[_i];
    }
    var initialMonzo = primeExponentExtremas.map(function (_a) {
        var _b = __read(_a, 2), minPrimeExponent = _b[0], _ = _b[1];
        return minPrimeExponent;
    });
    var finalMonzo = primeExponentExtremas.map(function (_a) {
        var _b = __read(_a, 2), _ = _b[0], maxPrimeExponent = _b[1];
        return maxPrimeExponent;
    });
    var currentMonzo = code_1.shallowClone(initialMonzo);
    var results = [];
    while (true) {
        // Do the work (trimming has the extra win of shallow cloning, disconnecting from this ticking process)
        var monzoForWork = code_1.computeTrimmedArray(currentMonzo);
        var result = workFunction.apply(void 0, __spread([monzoForWork], args));
        if (!code_1.isUndefined(result)) {
            results.push(result);
        }
        // Figure out which index is the first one which hasn't reached its max
        var indexToTick = 0;
        // We have reached the max for this c for now (and haven't exceeded the end of the monzo)
        while (indexToTick < currentMonzo.length && currentMonzo[indexToTick] === finalMonzo[indexToTick]) {
            indexToTick = code_1.increment(indexToTick);
        }
        // Ok so now we're at the first prime exponent which isn't at its max
        // Quit now if apparently ALL the terms are at their maxes
        if (indexToTick === currentMonzo.length) {
            break;
        }
        // Otherwise increment the prime exponent at this not-yet-maxed index toward its max
        currentMonzo[indexToTick] = code_1.increment(currentMonzo[indexToTick]);
        // And reset the prime exponent at every other index before this one to its min,
        // So we can repeat everything we've done so far but for this index being one higher than it was previously
        var i = 0;
        while (i < indexToTick) {
            currentMonzo[i] = initialMonzo[i];
            i = code_1.increment(i);
        }
    }
    return results;
};
exports.doForEachRationalMonzo = doForEachRationalMonzo;


/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.computeRationalMonzoFromRationalScamon = void 0;
var computeRationalMonzoFromRationalScamon = function (rationalScamon) {
    return rationalScamon.monzo;
};
exports.computeRationalMonzoFromRationalScamon = computeRationalMonzoFromRationalScamon;


/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.computeRationalDecimalCopf = void 0;
var monzo_1 = __webpack_require__(20);
// Count Of Prime Factors (without repetition) (little omega, ω)
var computeRationalDecimalCopf = function (rationalDecimal) {
    var rationalMonzo = monzo_1.computeRationalMonzoFromRationalDecimal(rationalDecimal);
    return rationalMonzo.reduce(function (copf, primeExponent) {
        return primeExponent === 0 ? copf : copf + 1;
    }, 0);
};
exports.computeRationalDecimalCopf = computeRationalDecimalCopf;


/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.computeRationalDecimalFromRationalScamon = void 0;
var numeric_1 = __webpack_require__(10);
var computeRationalDecimalFromRationalScamon = function (rationalScamon) {
    return numeric_1.computeDecimalFromMonzo(rationalScamon.monzo);
};
exports.computeRationalDecimalFromRationalScamon = computeRationalDecimalFromRationalScamon;


/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.computeRationalDecimalGpf = void 0;
var smoothness_1 = __webpack_require__(43);
// Greatest Prime Factor
var computeRationalDecimalGpf = function (rationalDecimal) {
    return smoothness_1.computeRationalDecimalSmoothness(rationalDecimal);
};
exports.computeRationalDecimalGpf = computeRationalDecimalGpf;


/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.computeRationalDecimalSmoothness = exports.computeIntegerDecimalSmoothness = exports.isIntegerDecimalSmooth = void 0;
var constants_1 = __webpack_require__(9);
var constants_2 = __webpack_require__(14);
var monzo_1 = __webpack_require__(20);
var quotient_1 = __webpack_require__(22);
var roughness_1 = __webpack_require__(44);
var isIntegerDecimalSmooth = function (integerDecimal, smoothness) {
    return roughness_1.computeRoughIntegerDecimal(integerDecimal, smoothness + constants_2.SMOOTH_ROUGH_OFFSET) === constants_1.MULTIPLICATIVE_IDENTITY;
};
exports.isIntegerDecimalSmooth = isIntegerDecimalSmooth;
var computeIntegerDecimalSmoothness = function (integerDecimal) {
    var integerMonzo = monzo_1.computeRationalMonzoFromRationalDecimal(integerDecimal);
    return monzo_1.computeRationalMonzoSmoothness(integerMonzo);
};
exports.computeIntegerDecimalSmoothness = computeIntegerDecimalSmoothness;
var computeRationalDecimalSmoothness = function (rationalDecimal) {
    var rationalQuotient = quotient_1.computeRationalQuotientFromRationalDecimal(rationalDecimal);
    return quotient_1.computeRationalQuotientSmoothness(rationalQuotient);
};
exports.computeRationalDecimalSmoothness = computeRationalDecimalSmoothness;


/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.computeRoughIntegerDecimal = exports.isIntegerDecimalRough = void 0;
var code_1 = __webpack_require__(4);
var dividesEvenly_1 = __webpack_require__(28);
var primeCount_1 = __webpack_require__(15);
var primes_1 = __webpack_require__(16);
var typedOperations_1 = __webpack_require__(45);
var isIntegerDecimalRough = function (integerDecimal, roughness) {
    var isRough = true;
    var primes = primes_1.computePrimes(integerDecimal);
    var index = 0;
    while (true) {
        var prime = primes[index];
        if (prime >= roughness) {
            break;
        }
        if (integerDecimal % prime === 0) {
            isRough = false;
            break;
        }
        index = code_1.increment(index);
    }
    return isRough;
};
exports.isIntegerDecimalRough = isIntegerDecimalRough;
var computeRoughIntegerDecimal = function (integerDecimal, roughness) {
    var roughnessIndex = primeCount_1.computeRoughnessIndex(roughness);
    var primes = primes_1.computePrimes(integerDecimal > primes_1.MAX_POSSIBLE_PRIME_THAT_SHOULD_BE_COMPUTED ? undefined : integerDecimal);
    var roughIntegerDecimal = integerDecimal;
    var primeIndex = 0;
    while (primeIndex < roughnessIndex) {
        var prime = primes[primeIndex];
        while (dividesEvenly_1.dividesEvenly(roughIntegerDecimal, prime)) {
            roughIntegerDecimal =
                typedOperations_1.integerDivide(roughIntegerDecimal, prime);
        }
        primeIndex = code_1.increment(primeIndex);
    }
    return roughIntegerDecimal;
};
exports.computeRoughIntegerDecimal = computeRoughIntegerDecimal;


/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.ceil = exports.floor = exports.integerDivide = void 0;
var typedOperations_1 = __webpack_require__(8);
var integerDivide = function (dividend, divisor) {
    return floor(typedOperations_1.divide(dividend, divisor));
};
exports.integerDivide = integerDivide;
var floor = function (decimal) {
    return Math.floor(decimal);
};
exports.floor = floor;
var ceil = function (decimal) {
    return Math.ceil(decimal);
};
exports.ceil = ceil;


/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.isDecimalInteger = exports.isDecimalRational = void 0;
var code_1 = __webpack_require__(4);
var dividesEvenly_1 = __webpack_require__(28);
var typedOperations_1 = __webpack_require__(8);
var isDecimalRational = function (candidateRationalDecimal) {
    return candidateRationalDecimal === typedOperations_1.round(candidateRationalDecimal, code_1.DEFAULT_PRECISION);
};
exports.isDecimalRational = isDecimalRational;
var isDecimalInteger = function (candidateIntegerDecimal) {
    return dividesEvenly_1.dividesEvenly(candidateIntegerDecimal, 1);
};
exports.isDecimalInteger = isDecimalInteger;


/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.sumRationalScamons = exports.computeRationalScamonGeometricMean = exports.subtractRationalScamons = exports.addRationalScamons = exports.computeRationalScamonFromRationalQuotient = exports.computeRationalScamonFromRationalMonzo = exports.computeRationalScamonFromRationalDecimal = exports.isRationalScamonUnison = exports.isRationalScamonSuper = exports.isRationalScamonSub = exports.isRationalScamonLesserOrEqual = exports.isRationalScamonLesser = exports.isRationalScamonGreaterOrEqual = exports.isRationalScamonGreater = exports.areRationalScamonsEqual = exports.computeRationalScamonSopfr = exports.computeRationalScamonCopfr = exports.isRationalScamonSmooth = exports.computeRationalScamonSmoothness = exports.isRationalScamonRough = exports.isScamonRational = void 0;
var typeGuards_1 = __webpack_require__(48);
Object.defineProperty(exports, "isScamonRational", { enumerable: true, get: function () { return typeGuards_1.isScamonRational; } });
var roughness_1 = __webpack_require__(49);
Object.defineProperty(exports, "isRationalScamonRough", { enumerable: true, get: function () { return roughness_1.isRationalScamonRough; } });
var smoothness_1 = __webpack_require__(50);
Object.defineProperty(exports, "computeRationalScamonSmoothness", { enumerable: true, get: function () { return smoothness_1.computeRationalScamonSmoothness; } });
Object.defineProperty(exports, "isRationalScamonSmooth", { enumerable: true, get: function () { return smoothness_1.isRationalScamonSmooth; } });
var copfr_1 = __webpack_require__(51);
Object.defineProperty(exports, "computeRationalScamonCopfr", { enumerable: true, get: function () { return copfr_1.computeRationalScamonCopfr; } });
var sopfr_1 = __webpack_require__(52);
Object.defineProperty(exports, "computeRationalScamonSopfr", { enumerable: true, get: function () { return sopfr_1.computeRationalScamonSopfr; } });
var comparison_1 = __webpack_require__(53);
Object.defineProperty(exports, "areRationalScamonsEqual", { enumerable: true, get: function () { return comparison_1.areRationalScamonsEqual; } });
Object.defineProperty(exports, "isRationalScamonGreater", { enumerable: true, get: function () { return comparison_1.isRationalScamonGreater; } });
Object.defineProperty(exports, "isRationalScamonGreaterOrEqual", { enumerable: true, get: function () { return comparison_1.isRationalScamonGreaterOrEqual; } });
Object.defineProperty(exports, "isRationalScamonLesser", { enumerable: true, get: function () { return comparison_1.isRationalScamonLesser; } });
Object.defineProperty(exports, "isRationalScamonLesserOrEqual", { enumerable: true, get: function () { return comparison_1.isRationalScamonLesserOrEqual; } });
var direction_1 = __webpack_require__(54);
Object.defineProperty(exports, "isRationalScamonSub", { enumerable: true, get: function () { return direction_1.isRationalScamonSub; } });
Object.defineProperty(exports, "isRationalScamonSuper", { enumerable: true, get: function () { return direction_1.isRationalScamonSuper; } });
Object.defineProperty(exports, "isRationalScamonUnison", { enumerable: true, get: function () { return direction_1.isRationalScamonUnison; } });
var from_1 = __webpack_require__(55);
Object.defineProperty(exports, "computeRationalScamonFromRationalDecimal", { enumerable: true, get: function () { return from_1.computeRationalScamonFromRationalDecimal; } });
Object.defineProperty(exports, "computeRationalScamonFromRationalMonzo", { enumerable: true, get: function () { return from_1.computeRationalScamonFromRationalMonzo; } });
Object.defineProperty(exports, "computeRationalScamonFromRationalQuotient", { enumerable: true, get: function () { return from_1.computeRationalScamonFromRationalQuotient; } });
var typedOperations_1 = __webpack_require__(56);
Object.defineProperty(exports, "addRationalScamons", { enumerable: true, get: function () { return typedOperations_1.addRationalScamons; } });
Object.defineProperty(exports, "subtractRationalScamons", { enumerable: true, get: function () { return typedOperations_1.subtractRationalScamons; } });
Object.defineProperty(exports, "computeRationalScamonGeometricMean", { enumerable: true, get: function () { return typedOperations_1.computeRationalScamonGeometricMean; } });
Object.defineProperty(exports, "sumRationalScamons", { enumerable: true, get: function () { return typedOperations_1.sumRationalScamons; } });


/***/ }),
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.isScamonRational = void 0;
var code_1 = __webpack_require__(4);
var isScamonRational = function (candidateRationalScamon) {
    return code_1.isUndefined(candidateRationalScamon.scaler);
};
exports.isScamonRational = isScamonRational;


/***/ }),
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.isRationalScamonRough = void 0;
var monzo_1 = __webpack_require__(20);
var isRationalScamonRough = function (candidateRoughRationalScamon, roughness) {
    return monzo_1.isRationalMonzoRough(candidateRoughRationalScamon.monzo, roughness);
};
exports.isRationalScamonRough = isRationalScamonRough;


/***/ }),
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.computeRationalScamonSmoothness = exports.isRationalScamonSmooth = void 0;
var monzo_1 = __webpack_require__(20);
var isRationalScamonSmooth = function (candidateSmoothRationalScamon, smoothness) {
    return monzo_1.isRationalMonzoSmooth(candidateSmoothRationalScamon.monzo, smoothness);
};
exports.isRationalScamonSmooth = isRationalScamonSmooth;
var computeRationalScamonSmoothness = function (_a) {
    var monzo = _a.monzo;
    return monzo_1.computeRationalMonzoSmoothness(monzo);
};
exports.computeRationalScamonSmoothness = computeRationalScamonSmoothness;


/***/ }),
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.computeRationalScamonCopfr = void 0;
var monzo_1 = __webpack_require__(20);
// Count Of Prime Factors with Repetition (big omega, Ω)
var computeRationalScamonCopfr = function (_a) {
    var monzo = _a.monzo;
    return monzo_1.computeRationalMonzoCopfr(monzo);
};
exports.computeRationalScamonCopfr = computeRationalScamonCopfr;


/***/ }),
/* 52 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.computeRationalScamonSopfr = void 0;
var monzo_1 = __webpack_require__(20);
// Sum Of Prime Factors with Repetition
var computeRationalScamonSopfr = function (_a) {
    var monzo = _a.monzo;
    return monzo_1.computeRationalMonzoSopfr(monzo);
};
exports.computeRationalScamonSopfr = computeRationalScamonSopfr;


/***/ }),
/* 53 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.isRationalScamonLesserOrEqual = exports.isRationalScamonGreaterOrEqual = exports.isRationalScamonLesser = exports.isRationalScamonGreater = exports.areRationalScamonsEqual = void 0;
var code_1 = __webpack_require__(4);
var numeric_1 = __webpack_require__(10);
var decimal_1 = __webpack_require__(18);
var areRationalScamonsEqual = function (rationalScamonA, rationalScamonB, precision) {
    if (precision === void 0) { precision = code_1.MAX_JS_PRECISION; }
    return numeric_1.areMonzosEqual(rationalScamonA.monzo, rationalScamonB.monzo, precision);
};
exports.areRationalScamonsEqual = areRationalScamonsEqual;
var isRationalScamonGreater = function (rationalScamon, otherRationalScamon, precision) {
    if (precision === void 0) { precision = code_1.MAX_JS_PRECISION; }
    return !areRationalScamonsEqual(rationalScamon, otherRationalScamon, precision)
        && decimal_1.computeRationalDecimalFromRationalScamon(rationalScamon) >
            decimal_1.computeRationalDecimalFromRationalScamon(otherRationalScamon);
};
exports.isRationalScamonGreater = isRationalScamonGreater;
var isRationalScamonLesser = function (rationalScamon, otherRationalScamon, precision) {
    if (precision === void 0) { precision = code_1.MAX_JS_PRECISION; }
    return !areRationalScamonsEqual(rationalScamon, otherRationalScamon, precision)
        && decimal_1.computeRationalDecimalFromRationalScamon(rationalScamon) <
            decimal_1.computeRationalDecimalFromRationalScamon(otherRationalScamon);
};
exports.isRationalScamonLesser = isRationalScamonLesser;
var isRationalScamonGreaterOrEqual = function (rationalScamon, otherRationalScamon, precision) {
    if (precision === void 0) { precision = code_1.MAX_JS_PRECISION; }
    return areRationalScamonsEqual(rationalScamon, otherRationalScamon, precision)
        || isRationalScamonGreater(rationalScamon, otherRationalScamon);
};
exports.isRationalScamonGreaterOrEqual = isRationalScamonGreaterOrEqual;
var isRationalScamonLesserOrEqual = function (rationalScamon, otherRationalScamon, precision) {
    if (precision === void 0) { precision = code_1.MAX_JS_PRECISION; }
    return areRationalScamonsEqual(rationalScamon, otherRationalScamon, precision)
        || isRationalScamonLesser(rationalScamon, otherRationalScamon);
};
exports.isRationalScamonLesserOrEqual = isRationalScamonLesserOrEqual;


/***/ }),
/* 54 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.isRationalScamonUnison = exports.isRationalScamonSub = exports.isRationalScamonSuper = void 0;
var numeric_1 = __webpack_require__(10);
var isRationalScamonSuper = function (candidateSuperRationalScamon) {
    return numeric_1.isMonzoSuper(candidateSuperRationalScamon.monzo);
};
exports.isRationalScamonSuper = isRationalScamonSuper;
var isRationalScamonSub = function (candidateSubRationalScamon) {
    return numeric_1.isMonzoSub(candidateSubRationalScamon.monzo);
};
exports.isRationalScamonSub = isRationalScamonSub;
// This is actually not that silly, because irrational scamons can be unison via a scaler with a 0 numerator while their
// Monzos are not unison.
var isRationalScamonUnison = function (candidateUnisonRationalScamon) {
    return numeric_1.isMonzoUnison(candidateUnisonRationalScamon.monzo);
};
exports.isRationalScamonUnison = isRationalScamonUnison;


/***/ }),
/* 55 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.computeRationalScamonFromRationalQuotient = exports.computeRationalScamonFromRationalMonzo = exports.computeRationalScamonFromRationalDecimal = void 0;
var monzo_1 = __webpack_require__(20);
var computeRationalScamonFromRationalDecimal = function (rationalDecimal) {
    return ({
        monzo: monzo_1.computeRationalMonzoFromRationalDecimal(rationalDecimal),
    });
};
exports.computeRationalScamonFromRationalDecimal = computeRationalScamonFromRationalDecimal;
var computeRationalScamonFromRationalMonzo = function (rationalMonzo) {
    return ({ monzo: rationalMonzo });
};
exports.computeRationalScamonFromRationalMonzo = computeRationalScamonFromRationalMonzo;
var computeRationalScamonFromRationalQuotient = function (rationalQuotient) {
    return computeRationalScamonFromRationalMonzo(monzo_1.computeRationalMonzoFromRationalQuotient(rationalQuotient));
};
exports.computeRationalScamonFromRationalQuotient = computeRationalScamonFromRationalQuotient;


/***/ }),
/* 56 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __read = (this && this.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
var __spread = (this && this.__spread) || function () {
    for (var ar = [], i = 0; i < arguments.length; i++) ar = ar.concat(__read(arguments[i]));
    return ar;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.sumRationalScamons = exports.computeRationalScamonGeometricMean = exports.addRationalScamons = exports.subtractRationalScamons = void 0;
var numeric_1 = __webpack_require__(10);
var monzo_1 = __webpack_require__(20);
var addRationalScamons = function (augendScamon, addendScamon) {
    return ({
        monzo: numeric_1.addMonzos(augendScamon.monzo, addendScamon.monzo),
    });
};
exports.addRationalScamons = addRationalScamons;
var subtractRationalScamons = function (minuendScamon, subtrahendScamon) {
    return ({
        monzo: numeric_1.subtractMonzos(minuendScamon.monzo, subtrahendScamon.monzo),
    });
};
exports.subtractRationalScamons = subtractRationalScamons;
var computeRationalScamonGeometricMean = function () {
    var rationalScamons = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        rationalScamons[_i] = arguments[_i];
    }
    return {
        monzo: numeric_1.sumMonzos.apply(void 0, __spread(rationalScamons.map(monzo_1.computeRationalMonzoFromRationalScamon))),
        scaler: [1, rationalScamons.length],
    };
};
exports.computeRationalScamonGeometricMean = computeRationalScamonGeometricMean;
var sumRationalScamons = function () {
    var rationalScamons = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        rationalScamons[_i] = arguments[_i];
    }
    return ({
        monzo: numeric_1.sumMonzos.apply(void 0, __spread(rationalScamons.map(monzo_1.computeRationalMonzoFromRationalScamon))),
    });
};
exports.sumRationalScamons = sumRationalScamons;


/***/ }),
/* 57 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.EMPTY_MONZO = exports.computePatentVal = exports.computeMonzoMapping = exports.areMonzosEqual = exports.addMonzos = exports.subtractMonzos = exports.sumMonzos = exports.isMonzoUnison = exports.invertMonzo = exports.isMonzoSuper = exports.isMonzoSub = exports.computeSuperMonzo = void 0;
var direction_1 = __webpack_require__(58);
Object.defineProperty(exports, "computeSuperMonzo", { enumerable: true, get: function () { return direction_1.computeSuperMonzo; } });
Object.defineProperty(exports, "isMonzoSub", { enumerable: true, get: function () { return direction_1.isMonzoSub; } });
Object.defineProperty(exports, "isMonzoSuper", { enumerable: true, get: function () { return direction_1.isMonzoSuper; } });
Object.defineProperty(exports, "invertMonzo", { enumerable: true, get: function () { return direction_1.invertMonzo; } });
Object.defineProperty(exports, "isMonzoUnison", { enumerable: true, get: function () { return direction_1.isMonzoUnison; } });
var typedOperations_1 = __webpack_require__(59);
Object.defineProperty(exports, "sumMonzos", { enumerable: true, get: function () { return typedOperations_1.sumMonzos; } });
Object.defineProperty(exports, "subtractMonzos", { enumerable: true, get: function () { return typedOperations_1.subtractMonzos; } });
Object.defineProperty(exports, "addMonzos", { enumerable: true, get: function () { return typedOperations_1.addMonzos; } });
var comparison_1 = __webpack_require__(60);
Object.defineProperty(exports, "areMonzosEqual", { enumerable: true, get: function () { return comparison_1.areMonzosEqual; } });
var mapping_1 = __webpack_require__(61);
Object.defineProperty(exports, "computeMonzoMapping", { enumerable: true, get: function () { return mapping_1.computeMonzoMapping; } });
var patentVal_1 = __webpack_require__(155);
Object.defineProperty(exports, "computePatentVal", { enumerable: true, get: function () { return patentVal_1.computePatentVal; } });
var constants_1 = __webpack_require__(156);
Object.defineProperty(exports, "EMPTY_MONZO", { enumerable: true, get: function () { return constants_1.EMPTY_MONZO; } });


/***/ }),
/* 58 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.invertMonzo = exports.computeSubMonzo = exports.computeSuperMonzo = exports.isMonzoUnison = exports.isMonzoSuper = exports.isMonzoSub = void 0;
var constants_1 = __webpack_require__(9);
var decimal_1 = __webpack_require__(11);
var isMonzoSub = function (candidateSubMonzo) {
    if (candidateSubMonzo.length &&
        candidateSubMonzo.every(function (primeExponent) { return primeExponent >= 0; })) {
        return false;
    }
    if (candidateSubMonzo.length &&
        candidateSubMonzo.every(function (primeExponent) { return primeExponent <= 0; })) {
        return true;
    }
    return decimal_1.computeDecimalFromMonzo(candidateSubMonzo) < constants_1.MULTIPLICATIVE_IDENTITY;
};
exports.isMonzoSub = isMonzoSub;
var isMonzoSuper = function (candidateSuperMonzo) {
    return !(isMonzoUnison(candidateSuperMonzo) || isMonzoSub(candidateSuperMonzo));
};
exports.isMonzoSuper = isMonzoSuper;
var isMonzoUnison = function (candidateUnisonMonzo) {
    return candidateUnisonMonzo.every(function (primeExponent) { return primeExponent === 0; });
};
exports.isMonzoUnison = isMonzoUnison;
var computeSuperMonzo = function (monzo) {
    return isMonzoSuper(monzo) ?
        monzo :
        invertMonzo(monzo);
};
exports.computeSuperMonzo = computeSuperMonzo;
var computeSubMonzo = function (monzo) {
    return isMonzoSub(monzo) ?
        monzo :
        invertMonzo(monzo);
};
exports.computeSubMonzo = computeSubMonzo;
var invertMonzo = function (monzo) {
    return monzo.map(function (primeExponent) {
        return primeExponent === 0 ?
            0 :
            -primeExponent;
    });
};
exports.invertMonzo = invertMonzo;


/***/ }),
/* 59 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __read = (this && this.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
var __spread = (this && this.__spread) || function () {
    for (var ar = [], i = 0; i < arguments.length; i++) ar = ar.concat(__read(arguments[i]));
    return ar;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.multiplyMonzo = exports.subtractMonzos = exports.addMonzos = exports.sumMonzos = void 0;
var code_1 = __webpack_require__(4);
var math_1 = __webpack_require__(6);
var sumMonzos = function () {
    var monzos = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        monzos[_i] = arguments[_i];
    }
    var maxMonzoLength = math_1.max.apply(void 0, __spread(monzos.map(math_1.count)));
    var summedMonzos = code_1.computeRange(maxMonzoLength).map(function (index) {
        return monzos.reduce(function (totalPrimeExponent, monzo) {
            var primeExponent = monzo[index] || 0;
            return math_1.add(totalPrimeExponent, primeExponent);
        }, 0);
    });
    return code_1.computeTrimmedArray(summedMonzos);
};
exports.sumMonzos = sumMonzos;
var addMonzos = function (augendMonzo, addendMonzo) {
    var monzoToMap = code_1.shallowClone(augendMonzo);
    while (monzoToMap.length < addendMonzo.length) {
        monzoToMap.push(0);
    }
    return code_1.computeTrimmedArray(monzoToMap.map(function (primeExponent, index) {
        return addendMonzo[index] ? math_1.add(primeExponent, addendMonzo[index]) : primeExponent;
    }));
};
exports.addMonzos = addMonzos;
var subtractMonzos = function (minuendMonzo, subtrahendMonzo) {
    return addMonzos(minuendMonzo, math_1.invertMonzo(subtrahendMonzo));
};
exports.subtractMonzos = subtractMonzos;
var multiplyMonzo = function (monzo, multiplier) {
    return monzo.map(function (primeExponent) {
        return math_1.multiply(primeExponent, multiplier);
    });
};
exports.multiplyMonzo = multiplyMonzo;


/***/ }),
/* 60 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.areMonzosEqual = void 0;
var code_1 = __webpack_require__(4);
var areMonzosEqual = function (monzoA, monzoB, precision) {
    if (precision === void 0) { precision = code_1.MAX_JS_PRECISION; }
    return code_1.deepEquals(code_1.computeTrimmedArray(monzoA), code_1.computeTrimmedArray(monzoB), precision);
};
exports.areMonzosEqual = areMonzosEqual;


/***/ }),
/* 61 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.computeMonzoMapping = void 0;
var io_1 = __webpack_require__(62);
var computeMonzoMapping = function (monzo, val) {
    if (val.length < monzo.length) {
        throw new Error("Please provide a val with a prime limit at least as high as the monzo it is mapping. This val " + io_1.formatVal(val) + " could not map monzo " + io_1.formatMonzo(monzo) + ".");
    }
    return monzo.reduce(function (step, primeExponent, index) {
        return step + primeExponent * val[index];
    }, 0);
};
exports.computeMonzoMapping = computeMonzoMapping;


/***/ }),
/* 62 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.TimePrecision = exports.formatCents = exports.formatPitch = exports.formatTime = exports.formatQuotient = exports.formatDecimal = exports.formatVal = exports.formatMonzo = exports.formatIntegerDecimal = exports.alignFormattedDecimal = exports.computePx = exports.split = exports.join = exports.sumTexts = exports.MERGED_CELL_INDICATOR = exports.Alignment = exports.TableFormat = exports.splitFieldTitlesIntoRowsBySpaces = exports.formatTable = exports.stringify = exports.removeColor = exports.DOT_OPERATOR = exports.parseDecimal = exports.parseInteger = exports.parseCents = exports.parseQuotient = exports.parseMonzo = exports.parse23FreeClass = exports.setupScriptAndIo = exports.ScriptFlag = exports.setLogTargets = exports.saveLog = exports.LogTarget = exports.clearLogFiles = exports.DEFAULT_IO_SETTINGS = exports.NUMERIC_CHARS = exports.IDENTIFYING_QUOTIENT_CHARS = exports.IDENTIFYING_CENTS_CHARS = exports.COMMA = exports.TAB = exports.SUPERSCRIPT_NUMBERS = exports.SPACE = exports.NEWLINE = exports.IO_PRECISION = exports.BLANK = exports.IDENTIFYING_ACCIDENTAL_CHARS = exports.IDENTIFYING_MONZO_CHARS = exports.IDENTIFYING_COMMA_NAME_CHARS = exports.colorize = exports.ioSettings = void 0;
exports.readLines = exports.program = exports.time = exports.formatBound = void 0;
var globals_1 = __webpack_require__(63);
Object.defineProperty(exports, "ioSettings", { enumerable: true, get: function () { return globals_1.ioSettings; } });
var colorize_1 = __webpack_require__(77);
Object.defineProperty(exports, "colorize", { enumerable: true, get: function () { return colorize_1.colorize; } });
var constants_1 = __webpack_require__(64);
Object.defineProperty(exports, "IDENTIFYING_COMMA_NAME_CHARS", { enumerable: true, get: function () { return constants_1.IDENTIFYING_COMMA_NAME_CHARS; } });
Object.defineProperty(exports, "IDENTIFYING_MONZO_CHARS", { enumerable: true, get: function () { return constants_1.IDENTIFYING_MONZO_CHARS; } });
Object.defineProperty(exports, "IDENTIFYING_ACCIDENTAL_CHARS", { enumerable: true, get: function () { return constants_1.IDENTIFYING_ACCIDENTAL_CHARS; } });
Object.defineProperty(exports, "BLANK", { enumerable: true, get: function () { return constants_1.BLANK; } });
Object.defineProperty(exports, "IO_PRECISION", { enumerable: true, get: function () { return constants_1.IO_PRECISION; } });
Object.defineProperty(exports, "NEWLINE", { enumerable: true, get: function () { return constants_1.NEWLINE; } });
Object.defineProperty(exports, "SPACE", { enumerable: true, get: function () { return constants_1.SPACE; } });
Object.defineProperty(exports, "SUPERSCRIPT_NUMBERS", { enumerable: true, get: function () { return constants_1.SUPERSCRIPT_NUMBERS; } });
Object.defineProperty(exports, "TAB", { enumerable: true, get: function () { return constants_1.TAB; } });
Object.defineProperty(exports, "COMMA", { enumerable: true, get: function () { return constants_1.COMMA; } });
Object.defineProperty(exports, "IDENTIFYING_CENTS_CHARS", { enumerable: true, get: function () { return constants_1.IDENTIFYING_CENTS_CHARS; } });
Object.defineProperty(exports, "IDENTIFYING_QUOTIENT_CHARS", { enumerable: true, get: function () { return constants_1.IDENTIFYING_QUOTIENT_CHARS; } });
Object.defineProperty(exports, "NUMERIC_CHARS", { enumerable: true, get: function () { return constants_1.NUMERIC_CHARS; } });
Object.defineProperty(exports, "DEFAULT_IO_SETTINGS", { enumerable: true, get: function () { return constants_1.DEFAULT_IO_SETTINGS; } });
var scripts_1 = __webpack_require__(80);
Object.defineProperty(exports, "clearLogFiles", { enumerable: true, get: function () { return scripts_1.clearLogFiles; } });
Object.defineProperty(exports, "LogTarget", { enumerable: true, get: function () { return scripts_1.LogTarget; } });
Object.defineProperty(exports, "saveLog", { enumerable: true, get: function () { return scripts_1.saveLog; } });
Object.defineProperty(exports, "setLogTargets", { enumerable: true, get: function () { return scripts_1.setLogTargets; } });
Object.defineProperty(exports, "ScriptFlag", { enumerable: true, get: function () { return scripts_1.ScriptFlag; } });
Object.defineProperty(exports, "setupScriptAndIo", { enumerable: true, get: function () { return scripts_1.setupScriptAndIo; } });
var parse_1 = __webpack_require__(116);
Object.defineProperty(exports, "parse23FreeClass", { enumerable: true, get: function () { return parse_1.parse23FreeClass; } });
Object.defineProperty(exports, "parseMonzo", { enumerable: true, get: function () { return parse_1.parseMonzo; } });
Object.defineProperty(exports, "parseQuotient", { enumerable: true, get: function () { return parse_1.parseQuotient; } });
Object.defineProperty(exports, "parseCents", { enumerable: true, get: function () { return parse_1.parseCents; } });
Object.defineProperty(exports, "parseInteger", { enumerable: true, get: function () { return parse_1.parseInteger; } });
Object.defineProperty(exports, "parseDecimal", { enumerable: true, get: function () { return parse_1.parseDecimal; } });
Object.defineProperty(exports, "DOT_OPERATOR", { enumerable: true, get: function () { return parse_1.DOT_OPERATOR; } });
var removeColor_1 = __webpack_require__(89);
Object.defineProperty(exports, "removeColor", { enumerable: true, get: function () { return removeColor_1.removeColor; } });
var stringify_1 = __webpack_require__(123);
Object.defineProperty(exports, "stringify", { enumerable: true, get: function () { return stringify_1.stringify; } });
var table_1 = __webpack_require__(65);
Object.defineProperty(exports, "formatTable", { enumerable: true, get: function () { return table_1.formatTable; } });
Object.defineProperty(exports, "splitFieldTitlesIntoRowsBySpaces", { enumerable: true, get: function () { return table_1.splitFieldTitlesIntoRowsBySpaces; } });
Object.defineProperty(exports, "TableFormat", { enumerable: true, get: function () { return table_1.TableFormat; } });
Object.defineProperty(exports, "Alignment", { enumerable: true, get: function () { return table_1.Alignment; } });
Object.defineProperty(exports, "MERGED_CELL_INDICATOR", { enumerable: true, get: function () { return table_1.MERGED_CELL_INDICATOR; } });
var typedOperations_1 = __webpack_require__(71);
Object.defineProperty(exports, "sumTexts", { enumerable: true, get: function () { return typedOperations_1.sumTexts; } });
Object.defineProperty(exports, "join", { enumerable: true, get: function () { return typedOperations_1.join; } });
Object.defineProperty(exports, "split", { enumerable: true, get: function () { return typedOperations_1.split; } });
var image_1 = __webpack_require__(124);
Object.defineProperty(exports, "computePx", { enumerable: true, get: function () { return image_1.computePx; } });
var format_1 = __webpack_require__(126);
Object.defineProperty(exports, "alignFormattedDecimal", { enumerable: true, get: function () { return format_1.alignFormattedDecimal; } });
Object.defineProperty(exports, "formatIntegerDecimal", { enumerable: true, get: function () { return format_1.formatIntegerDecimal; } });
Object.defineProperty(exports, "formatMonzo", { enumerable: true, get: function () { return format_1.formatMonzo; } });
Object.defineProperty(exports, "formatVal", { enumerable: true, get: function () { return format_1.formatVal; } });
Object.defineProperty(exports, "formatDecimal", { enumerable: true, get: function () { return format_1.formatDecimal; } });
Object.defineProperty(exports, "formatQuotient", { enumerable: true, get: function () { return format_1.formatQuotient; } });
Object.defineProperty(exports, "formatTime", { enumerable: true, get: function () { return format_1.formatTime; } });
Object.defineProperty(exports, "formatPitch", { enumerable: true, get: function () { return format_1.formatPitch; } });
Object.defineProperty(exports, "formatCents", { enumerable: true, get: function () { return format_1.formatCents; } });
Object.defineProperty(exports, "TimePrecision", { enumerable: true, get: function () { return format_1.TimePrecision; } });
Object.defineProperty(exports, "formatBound", { enumerable: true, get: function () { return format_1.formatBound; } });
var time_1 = __webpack_require__(152);
Object.defineProperty(exports, "time", { enumerable: true, get: function () { return time_1.time; } });
var program_1 = __webpack_require__(153);
Object.defineProperty(exports, "program", { enumerable: true, get: function () { return program_1.program; } });
var lines_1 = __webpack_require__(154);
Object.defineProperty(exports, "readLines", { enumerable: true, get: function () { return lines_1.readLines; } });


/***/ }),
/* 63 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.ioSettings = void 0;
var constants_1 = __webpack_require__(64);
var ioSettings = JSON.parse(JSON.stringify(constants_1.DEFAULT_IO_SETTINGS));
exports.ioSettings = ioSettings;


/***/ }),
/* 64 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.WINDOWS_CARRIAGE_RETURN = exports.NUMERIC_CHARS = exports.DEFAULT_IO_SETTINGS = exports.IDENTIFYING_ACCIDENTAL_CHARS = exports.IDENTIFYING_QUOTIENT_CHARS = exports.IDENTIFYING_CENTS_CHARS = exports.IDENTIFYING_COMMA_NAME_CHARS = exports.COMMA = exports.TAB = exports.BLANK = exports.SPACE = exports.NEWLINE = exports.SUPERSCRIPT_NUMBERS = exports.IDENTIFYING_MONZO_CHARS = exports.IO_PRECISION = void 0;
var table_1 = __webpack_require__(65);
var IO_PRECISION = 3;
exports.IO_PRECISION = IO_PRECISION;
var IDENTIFYING_MONZO_CHARS = /[\[\]⟩|>]/;
exports.IDENTIFYING_MONZO_CHARS = IDENTIFYING_MONZO_CHARS;
var IDENTIFYING_COMMA_NAME_CHARS = /[unskCSMLA]/;
exports.IDENTIFYING_COMMA_NAME_CHARS = IDENTIFYING_COMMA_NAME_CHARS;
var IDENTIFYING_CENTS_CHARS = /[c¢]/;
exports.IDENTIFYING_CENTS_CHARS = IDENTIFYING_CENTS_CHARS;
var IDENTIFYING_QUOTIENT_CHARS = /[\/:]/;
exports.IDENTIFYING_QUOTIENT_CHARS = IDENTIFYING_QUOTIENT_CHARS;
var IDENTIFYING_ACCIDENTAL_CHARS = /[()~|!\\`,.'#<>b+\-]/;
exports.IDENTIFYING_ACCIDENTAL_CHARS = IDENTIFYING_ACCIDENTAL_CHARS;
var NUMERIC_CHARS = /[0123456789]/;
exports.NUMERIC_CHARS = NUMERIC_CHARS;
var SUPERSCRIPT_NUMBERS = ["⁰", "¹", "²", "³", "⁴", "⁵", "⁶", "⁷", "⁸", "⁹"];
exports.SUPERSCRIPT_NUMBERS = SUPERSCRIPT_NUMBERS;
var SUBSCRIPT_NUMBERS = ["₀", "₁", "₂", "₃", "₄", "₅", "₆", "₇", "₈", "₉"];
var NEWLINE = "\n";
exports.NEWLINE = NEWLINE;
var WINDOWS_CARRIAGE_RETURN = "\r";
exports.WINDOWS_CARRIAGE_RETURN = WINDOWS_CARRIAGE_RETURN;
var SPACE = " ";
exports.SPACE = SPACE;
var BLANK = "";
exports.BLANK = BLANK;
var TAB = "\t";
exports.TAB = TAB;
var COMMA = ",";
exports.COMMA = COMMA;
var DEFAULT_IO_SETTINGS = {
    tableFormat: table_1.TableFormat.TERMINAL,
    logTargets: {},
    disableColors: false,
    time: undefined,
    logDir: "",
};
exports.DEFAULT_IO_SETTINGS = DEFAULT_IO_SETTINGS;


/***/ }),
/* 65 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.Alignment = exports.TableFormat = exports.formatTable = exports.MERGED_CELL_INDICATOR = exports.splitFieldTitlesIntoRowsBySpaces = void 0;
var splitFieldTitlesIntoRowsBySpaces_1 = __webpack_require__(66);
Object.defineProperty(exports, "splitFieldTitlesIntoRowsBySpaces", { enumerable: true, get: function () { return splitFieldTitlesIntoRowsBySpaces_1.splitFieldTitlesIntoRowsBySpaces; } });
var constants_1 = __webpack_require__(68);
Object.defineProperty(exports, "MERGED_CELL_INDICATOR", { enumerable: true, get: function () { return constants_1.MERGED_CELL_INDICATOR; } });
var table_1 = __webpack_require__(69);
Object.defineProperty(exports, "formatTable", { enumerable: true, get: function () { return table_1.formatTable; } });
var types_1 = __webpack_require__(73);
Object.defineProperty(exports, "TableFormat", { enumerable: true, get: function () { return types_1.TableFormat; } });
Object.defineProperty(exports, "Alignment", { enumerable: true, get: function () { return types_1.Alignment; } });


/***/ }),
/* 66 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.splitFieldTitlesIntoRowsBySpaces = void 0;
var headerRowsFromFieldTitleColumns_1 = __webpack_require__(67);
var splitFieldTitlesIntoRowsBySpaces = function (fieldTitles, options) {
    if (options === void 0) { options = {}; }
    var popular23FreeClassesFieldTitleColumns = fieldTitles.map(function (fieldTitle) {
        return fieldTitle.split(" ");
    });
    return headerRowsFromFieldTitleColumns_1.computeHeaderRowsFromFieldTitleColumns(popular23FreeClassesFieldTitleColumns, options);
};
exports.splitFieldTitlesIntoRowsBySpaces = splitFieldTitlesIntoRowsBySpaces;


/***/ }),
/* 67 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __read = (this && this.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
var __spread = (this && this.__spread) || function () {
    for (var ar = [], i = 0; i < arguments.length; i++) ar = ar.concat(__read(arguments[i]));
    return ar;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.computeHeaderRowsFromFieldTitleColumns = void 0;
var code_1 = __webpack_require__(4);
var math_1 = __webpack_require__(6);
var constants_1 = __webpack_require__(64);
var computeHeaderRowsFromFieldTitleColumns = function (fieldTitleColumns, _a) {
    var _b = _a === void 0 ? {} : _a, _c = _b.includeSpacerRow, includeSpacerRow = _c === void 0 ? false : _c;
    var maxFieldTitleHeaderRowCount = code_1.isEmpty(fieldTitleColumns) ? 0 : math_1.max.apply(void 0, __spread(fieldTitleColumns.map(function (fieldTitleColumn) {
        return math_1.count(fieldTitleColumn);
    })));
    var rows = __spread(Array(maxFieldTitleHeaderRowCount).keys()).map(function (_) { return []; });
    fieldTitleColumns.forEach(function (fieldTitleColumn) {
        while (fieldTitleColumn.length < maxFieldTitleHeaderRowCount) {
            fieldTitleColumn.unshift(constants_1.BLANK);
        }
        fieldTitleColumn.forEach(function (fieldTitleCell, index) {
            rows[index].push(fieldTitleCell);
        });
    });
    if (includeSpacerRow) {
        rows.push(__spread(Array(fieldTitleColumns.length).keys()).map(function (_) { return constants_1.BLANK; }));
    }
    return rows;
};
exports.computeHeaderRowsFromFieldTitleColumns = computeHeaderRowsFromFieldTitleColumns;


/***/ }),
/* 68 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.MERGED_CELL_INDICATOR = exports.DEFAULT_FORMAT_TABLE_OPTIONS = void 0;
var DEFAULT_FORMAT_TABLE_OPTIONS = {
    tableAlignment: undefined,
    colors: undefined,
    headerRowCount: 1,
};
exports.DEFAULT_FORMAT_TABLE_OPTIONS = DEFAULT_FORMAT_TABLE_OPTIONS;
var MERGED_CELL_INDICATOR = "⤝"; // Canadian syllabics chi sign
exports.MERGED_CELL_INDICATOR = MERGED_CELL_INDICATOR;


/***/ }),
/* 69 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.formatTable = void 0;
var code_1 = __webpack_require__(4);
var math_1 = __webpack_require__(6);
var globals_1 = __webpack_require__(63);
var tableForForum_1 = __webpack_require__(70);
var tableForSpreadsheet_1 = __webpack_require__(76);
var tableForTerminal_1 = __webpack_require__(79);
var types_1 = __webpack_require__(73);
var formatTable = function (table, options) {
    var rowLengths = table.map(function (row) {
        return math_1.count(row);
    });
    var distinctRowLengths = code_1.computeDeepDistinct(rowLengths);
    if (distinctRowLengths.length > 1) {
        throw new Error("Table does not have rows with all the same lengths. Row lengths are " + rowLengths + ".");
    }
    switch (globals_1.ioSettings.tableFormat) {
        case types_1.TableFormat.FORUM:
        case types_1.TableFormat.FORUM_WITH_SPLIT_QUOTIENTS:
            return tableForForum_1.formatTableForForum(table, options);
        case types_1.TableFormat.TERMINAL:
            return tableForTerminal_1.formatTableForTerminal(table, options);
        case types_1.TableFormat.SPREADSHEET:
            return tableForSpreadsheet_1.formatTableForSpreadsheet(table, options);
    }
};
exports.formatTable = formatTable;


/***/ }),
/* 70 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.formatTableForForum = void 0;
var code_1 = __webpack_require__(4);
var constants_1 = __webpack_require__(64);
var typedOperations_1 = __webpack_require__(71);
var alignment_1 = __webpack_require__(72);
var columnRange_1 = __webpack_require__(74);
var columnSpans_1 = __webpack_require__(75);
var constants_2 = __webpack_require__(68);
var types_1 = __webpack_require__(73);
var computeMaybeColoredCell = function (cell, color) {
    return code_1.isUndefined(color) ? (cell || constants_1.BLANK) : "[hilite=" + color + "]" + cell + "[/hilite]";
};
var formatTableForForum = function (table, options) {
    var _a = options || {}, _b = _a.tableAlignment, tableAlignment = _b === void 0 ? constants_2.DEFAULT_FORMAT_TABLE_OPTIONS.tableAlignment : _b, _c = _a.colors, colors = _c === void 0 ? constants_2.DEFAULT_FORMAT_TABLE_OPTIONS.colors : _c, _d = _a.headerRowCount, headerRowCount = _d === void 0 ? constants_2.DEFAULT_FORMAT_TABLE_OPTIONS.headerRowCount : _d;
    var columnRange = columnRange_1.computeColumnRange(table);
    var columnAlignments = alignment_1.computeColumnAlignments(tableAlignment, columnRange);
    var formattedRows = table.map(function (row, rowIndex) {
        var isHeader = rowIndex < headerRowCount;
        var color = colors ? colors[rowIndex] : undefined;
        var spans = columnSpans_1.computeColumnSpans(row);
        var rowText = row.reduce(function (alignedRow, cell, cellIndex) {
            var columnSpan = spans[cellIndex];
            if (columnSpan === 0)
                return alignedRow;
            var isMergedCell = columnSpan > 1;
            var cellSpan = isMergedCell ? "=" + columnSpan : constants_1.BLANK;
            var columnAlignment = columnAlignments[cellIndex];
            var maybeColoredCell = code_1.isUndefined(cell) ? constants_1.BLANK : computeMaybeColoredCell(cell, color);
            var cellTag = isHeader ?
                isMergedCell ? "th" :
                    columnAlignment === types_1.Alignment.LEFT ?
                        "thl" :
                        columnAlignment === types_1.Alignment.RIGHT ? "thr" : "th" :
                isMergedCell ? "td" :
                    columnAlignment === types_1.Alignment.CENTER ?
                        "tdc" :
                        columnAlignment === types_1.Alignment.RIGHT ? "tdr" : "td";
            var alignedCell = "[" + cellTag + cellSpan + "]" + maybeColoredCell + "[/" + cellTag + "]";
            return typedOperations_1.sumTexts(alignedRow, alignedCell);
        }, constants_1.BLANK);
        return typedOperations_1.sumTexts("[tr]", rowText, "[/tr]");
    });
    formattedRows.unshift("[table]");
    formattedRows.push("[/table]");
    var formattedTable = typedOperations_1.join(formattedRows, constants_1.NEWLINE);
    return typedOperations_1.sumTexts(formattedTable, constants_1.NEWLINE);
};
exports.formatTableForForum = formatTableForForum;


/***/ }),
/* 71 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.split = exports.join = exports.length = exports.sumTexts = void 0;
var constants_1 = __webpack_require__(64);
var sumTexts = function () {
    var strings = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        strings[_i] = arguments[_i];
    }
    return join(strings, constants_1.BLANK);
};
exports.sumTexts = sumTexts;
var length = function (string) {
    return string.length;
};
exports.length = length;
var join = function (array, separator) {
    return array.join(separator);
};
exports.join = join;
var split = function (string, separator) {
    return string.split(separator);
};
exports.split = split;


/***/ }),
/* 72 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.alignCellIo = exports.computeColumnWidths = exports.computeColumnAlignments = void 0;
var code_1 = __webpack_require__(4);
var constants_1 = __webpack_require__(64);
var typedOperations_1 = __webpack_require__(71);
var types_1 = __webpack_require__(73);
var computeColumnAlignments = function (tableAlignment, columnRange) {
    return code_1.isUndefined(tableAlignment) ?
        columnRange.map(function (_) { return undefined; }) :
        code_1.isString(tableAlignment) ?
            columnRange.map(function (_) { return tableAlignment; }) :
            columnRange.map(function (index) { return tableAlignment[index]; });
};
exports.computeColumnAlignments = computeColumnAlignments;
var computeColumnWidths = function (table, columnRange) {
    return columnRange.map(function (columnIndex) {
        return table.reduce(function (columnWidth, row) {
            var columnCell = row[columnIndex];
            var cellWidth = code_1.isUndefined(columnCell) || columnCell.includes("[/latex]") ?
                0 :
                typedOperations_1.length(columnCell);
            if (cellWidth > columnWidth) {
                columnWidth = cellWidth;
            }
            return columnWidth;
        }, 0);
    });
};
exports.computeColumnWidths = computeColumnWidths;
var furtherAlignCellIo = function (alignedCellIo, columnAlignment) {
    return ((columnAlignment === types_1.Alignment.LEFT) || code_1.isUndefined(columnAlignment)) ?
        alignedCellIo + " " :
        columnAlignment === types_1.Alignment.RIGHT ?
            " " + alignedCellIo :
            alignedCellIo.length % 2 === 0 ?
                " " + alignedCellIo :
                alignedCellIo + " ";
};
var alignCellIo = function (cellIo, _a) {
    var columnWidth = _a.columnWidth, columnAlignment = _a.columnAlignment;
    var alignedCellIo = code_1.isUndefined(cellIo) ? constants_1.BLANK : cellIo;
    while (alignedCellIo.length < columnWidth) {
        alignedCellIo = furtherAlignCellIo(alignedCellIo, columnAlignment);
    }
    return alignedCellIo;
};
exports.alignCellIo = alignCellIo;


/***/ }),
/* 73 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.TableFormat = exports.Alignment = void 0;
var Alignment;
(function (Alignment) {
    Alignment["LEFT"] = "left";
    Alignment["RIGHT"] = "right";
    Alignment["CENTER"] = "center";
})(Alignment || (Alignment = {}));
exports.Alignment = Alignment;
var TableFormat;
(function (TableFormat) {
    TableFormat["FORUM"] = "forum";
    TableFormat["FORUM_WITH_SPLIT_QUOTIENTS"] = "forumWithSplitQuotients";
    TableFormat["TERMINAL"] = "terminal";
    TableFormat["SPREADSHEET"] = "spreadsheet";
})(TableFormat || (TableFormat = {}));
exports.TableFormat = TableFormat;


/***/ }),
/* 74 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __read = (this && this.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
var __spread = (this && this.__spread) || function () {
    for (var ar = [], i = 0; i < arguments.length; i++) ar = ar.concat(__read(arguments[i]));
    return ar;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.computeColumnRange = void 0;
var computeColumnRange = function (table) {
    var exampleRow = table[0];
    var columnCount = exampleRow.length;
    return __spread(Array(columnCount).keys());
};
exports.computeColumnRange = computeColumnRange;


/***/ }),
/* 75 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.computeColumnSpans = void 0;
var code_1 = __webpack_require__(4);
var constants_1 = __webpack_require__(68);
var computeColumnSpans = function (row) {
    var columnSpans = [];
    var mergeCounter = 0;
    row.forEach(function (cell) {
        var finalColumnSpanIndex = code_1.indexOfFinalElement(columnSpans);
        if (cell === constants_1.MERGED_CELL_INDICATOR) {
            columnSpans[finalColumnSpanIndex] = code_1.increment(columnSpans[finalColumnSpanIndex]);
            mergeCounter = code_1.increment(mergeCounter);
        }
        else {
            if (mergeCounter > 0) {
                for (var i = 0; i < mergeCounter; i++) {
                    columnSpans.push(0);
                }
                mergeCounter = 0;
            }
            columnSpans.push(1);
        }
    });
    return columnSpans;
};
exports.computeColumnSpans = computeColumnSpans;


/***/ }),
/* 76 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.formatTableForSpreadsheet = void 0;
var code_1 = __webpack_require__(4);
var colorize_1 = __webpack_require__(77);
var constants_1 = __webpack_require__(64);
var typedOperations_1 = __webpack_require__(71);
var constants_2 = __webpack_require__(68);
var maybeColorize_1 = __webpack_require__(78);
var formatTableForSpreadsheet = function (table, options) {
    var _a = options || {}, _b = _a.colors, colors = _b === void 0 ? constants_2.DEFAULT_FORMAT_TABLE_OPTIONS.colors : _b, _c = _a.headerRowCount, headerRowCount = _c === void 0 ? constants_2.DEFAULT_FORMAT_TABLE_OPTIONS.headerRowCount : _c;
    var formattedRows = table.map(function (row, rowIndex) {
        var rowText = row.reduce(function (alignedRow, cell, cellIndex) {
            var alignedCell = code_1.isUndefined(cell) ? constants_1.BLANK : cell;
            var maybeSeparator = cellIndex === code_1.indexOfFinalElement(row) ? constants_1.BLANK : constants_1.TAB;
            return typedOperations_1.sumTexts(alignedRow, alignedCell, maybeSeparator);
        }, constants_1.BLANK);
        var maybeColoredRowIo = maybeColorize_1.maybeColorize(rowText, rowIndex, colors);
        if (rowIndex === headerRowCount - 1) {
            return colorize_1.colorize(maybeColoredRowIo, "underline");
        }
        return maybeColoredRowIo;
    });
    var formattedTable = typedOperations_1.join(formattedRows, constants_1.NEWLINE);
    return typedOperations_1.sumTexts(formattedTable, constants_1.NEWLINE);
};
exports.formatTableForSpreadsheet = formatTableForSpreadsheet;


/***/ }),
/* 77 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.colorize = void 0;
var globals_1 = __webpack_require__(63);
var colorize = function (io, color) {
    if (globals_1.ioSettings.disableColors)
        return io;
    // @ts-ignore
    return io[color];
};
exports.colorize = colorize;


/***/ }),
/* 78 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.maybeColorize = void 0;
var code_1 = __webpack_require__(4);
var colorize_1 = __webpack_require__(77);
var maybeColorize = function (rowIo, rowIndex, colors) {
    if (code_1.isUndefined(colors)) {
        return rowIo;
    }
    var rowColor = colors[rowIndex];
    return rowColor ? colorize_1.colorize(rowIo, rowColor) : rowIo;
};
exports.maybeColorize = maybeColorize;


/***/ }),
/* 79 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.formatTableForTerminal = void 0;
var code_1 = __webpack_require__(4);
var colorize_1 = __webpack_require__(77);
var constants_1 = __webpack_require__(64);
var typedOperations_1 = __webpack_require__(71);
var alignment_1 = __webpack_require__(72);
var columnRange_1 = __webpack_require__(74);
var constants_2 = __webpack_require__(68);
var maybeColorize_1 = __webpack_require__(78);
var formatTableForTerminal = function (table, options) {
    var _a = options || {}, _b = _a.tableAlignment, tableAlignment = _b === void 0 ? constants_2.DEFAULT_FORMAT_TABLE_OPTIONS.tableAlignment : _b, _c = _a.colors, colors = _c === void 0 ? constants_2.DEFAULT_FORMAT_TABLE_OPTIONS.colors : _c, _d = _a.headerRowCount, headerRowCount = _d === void 0 ? constants_2.DEFAULT_FORMAT_TABLE_OPTIONS.headerRowCount : _d;
    var columnRange = columnRange_1.computeColumnRange(table);
    var columnAlignments = alignment_1.computeColumnAlignments(tableAlignment, columnRange);
    var columnWidths = alignment_1.computeColumnWidths(table, columnRange);
    var formattedRows = table.map(function (row, rowIndex) {
        var rowText = row.reduce(function (alignedRow, cell, cellIndex) {
            var columnWidth = columnWidths[cellIndex];
            var columnAlignment = columnAlignments[cellIndex];
            var alignedCell = alignment_1.alignCellIo(cell, { columnWidth: columnWidth, columnAlignment: columnAlignment });
            var maybeSeparator = cellIndex === code_1.indexOfFinalElement(row) ? constants_1.BLANK : constants_1.TAB;
            return typedOperations_1.sumTexts(alignedRow, alignedCell, maybeSeparator);
        }, constants_1.BLANK);
        var maybeColoredRowIo = maybeColorize_1.maybeColorize(rowText, rowIndex, colors);
        if (rowIndex === headerRowCount - 1) {
            return colorize_1.colorize(maybeColoredRowIo, "underline");
        }
        return maybeColoredRowIo;
    });
    var formattedTable = typedOperations_1.join(formattedRows, constants_1.NEWLINE);
    return typedOperations_1.sumTexts(formattedTable, constants_1.NEWLINE);
};
exports.formatTableForTerminal = formatTableForTerminal;


/***/ }),
/* 80 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.ScriptFlag = exports.setupScriptAndIo = exports.LogTarget = exports.setLogTargets = exports.saveLog = exports.clearLogFiles = void 0;
var clear_1 = __webpack_require__(81);
Object.defineProperty(exports, "clearLogFiles", { enumerable: true, get: function () { return clear_1.clearLogFiles; } });
var save_1 = __webpack_require__(85);
Object.defineProperty(exports, "saveLog", { enumerable: true, get: function () { return save_1.saveLog; } });
var set_1 = __webpack_require__(91);
Object.defineProperty(exports, "setLogTargets", { enumerable: true, get: function () { return set_1.setLogTargets; } });
var types_1 = __webpack_require__(87);
Object.defineProperty(exports, "LogTarget", { enumerable: true, get: function () { return types_1.LogTarget; } });
var setup_1 = __webpack_require__(92);
Object.defineProperty(exports, "setupScriptAndIo", { enumerable: true, get: function () { return setup_1.setupScriptAndIo; } });
var types_2 = __webpack_require__(87);
Object.defineProperty(exports, "ScriptFlag", { enumerable: true, get: function () { return types_2.ScriptFlag; } });


/***/ }),
/* 81 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __values = (this && this.__values) || function(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.clearLogFiles = void 0;
var fs = __importStar(__webpack_require__(82));
var path = __importStar(__webpack_require__(83));
var clearLogFiles = function (logDir) {
    var e_1, _a;
    if (!fs.existsSync("log"))
        return;
    var directory = "log/" + logDir;
    if (!fs.existsSync(directory))
        return;
    var files = fs.readdirSync(directory);
    try {
        for (var files_1 = __values(files), files_1_1 = files_1.next(); !files_1_1.done; files_1_1 = files_1.next()) {
            var file = files_1_1.value;
            fs.unlinkSync(path.join(directory, file));
        }
    }
    catch (e_1_1) { e_1 = { error: e_1_1 }; }
    finally {
        try {
            if (files_1_1 && !files_1_1.done && (_a = files_1.return)) _a.call(files_1);
        }
        finally { if (e_1) throw e_1.error; }
    }
};
exports.clearLogFiles = clearLogFiles;


/***/ }),
/* 82 */
/***/ (function(module, exports) {

module.exports = {};

/***/ }),
/* 83 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(process) {// .dirname, .basename, and .extname methods are extracted from Node.js v8.11.1,
// backported and transplited with Babel, with backwards-compat fixes

// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.

// resolves . and .. elements in a path array with directory names there
// must be no slashes, empty elements, or device names (c:\) in the array
// (so also no leading and trailing slashes - it does not distinguish
// relative and absolute paths)
function normalizeArray(parts, allowAboveRoot) {
  // if the path tries to go above the root, `up` ends up > 0
  var up = 0;
  for (var i = parts.length - 1; i >= 0; i--) {
    var last = parts[i];
    if (last === '.') {
      parts.splice(i, 1);
    } else if (last === '..') {
      parts.splice(i, 1);
      up++;
    } else if (up) {
      parts.splice(i, 1);
      up--;
    }
  }

  // if the path is allowed to go above the root, restore leading ..s
  if (allowAboveRoot) {
    for (; up--; up) {
      parts.unshift('..');
    }
  }

  return parts;
}

// path.resolve([from ...], to)
// posix version
exports.resolve = function() {
  var resolvedPath = '',
      resolvedAbsolute = false;

  for (var i = arguments.length - 1; i >= -1 && !resolvedAbsolute; i--) {
    var path = (i >= 0) ? arguments[i] : process.cwd();

    // Skip empty and invalid entries
    if (typeof path !== 'string') {
      throw new TypeError('Arguments to path.resolve must be strings');
    } else if (!path) {
      continue;
    }

    resolvedPath = path + '/' + resolvedPath;
    resolvedAbsolute = path.charAt(0) === '/';
  }

  // At this point the path should be resolved to a full absolute path, but
  // handle relative paths to be safe (might happen when process.cwd() fails)

  // Normalize the path
  resolvedPath = normalizeArray(filter(resolvedPath.split('/'), function(p) {
    return !!p;
  }), !resolvedAbsolute).join('/');

  return ((resolvedAbsolute ? '/' : '') + resolvedPath) || '.';
};

// path.normalize(path)
// posix version
exports.normalize = function(path) {
  var isAbsolute = exports.isAbsolute(path),
      trailingSlash = substr(path, -1) === '/';

  // Normalize the path
  path = normalizeArray(filter(path.split('/'), function(p) {
    return !!p;
  }), !isAbsolute).join('/');

  if (!path && !isAbsolute) {
    path = '.';
  }
  if (path && trailingSlash) {
    path += '/';
  }

  return (isAbsolute ? '/' : '') + path;
};

// posix version
exports.isAbsolute = function(path) {
  return path.charAt(0) === '/';
};

// posix version
exports.join = function() {
  var paths = Array.prototype.slice.call(arguments, 0);
  return exports.normalize(filter(paths, function(p, index) {
    if (typeof p !== 'string') {
      throw new TypeError('Arguments to path.join must be strings');
    }
    return p;
  }).join('/'));
};


// path.relative(from, to)
// posix version
exports.relative = function(from, to) {
  from = exports.resolve(from).substr(1);
  to = exports.resolve(to).substr(1);

  function trim(arr) {
    var start = 0;
    for (; start < arr.length; start++) {
      if (arr[start] !== '') break;
    }

    var end = arr.length - 1;
    for (; end >= 0; end--) {
      if (arr[end] !== '') break;
    }

    if (start > end) return [];
    return arr.slice(start, end - start + 1);
  }

  var fromParts = trim(from.split('/'));
  var toParts = trim(to.split('/'));

  var length = Math.min(fromParts.length, toParts.length);
  var samePartsLength = length;
  for (var i = 0; i < length; i++) {
    if (fromParts[i] !== toParts[i]) {
      samePartsLength = i;
      break;
    }
  }

  var outputParts = [];
  for (var i = samePartsLength; i < fromParts.length; i++) {
    outputParts.push('..');
  }

  outputParts = outputParts.concat(toParts.slice(samePartsLength));

  return outputParts.join('/');
};

exports.sep = '/';
exports.delimiter = ':';

exports.dirname = function (path) {
  if (typeof path !== 'string') path = path + '';
  if (path.length === 0) return '.';
  var code = path.charCodeAt(0);
  var hasRoot = code === 47 /*/*/;
  var end = -1;
  var matchedSlash = true;
  for (var i = path.length - 1; i >= 1; --i) {
    code = path.charCodeAt(i);
    if (code === 47 /*/*/) {
        if (!matchedSlash) {
          end = i;
          break;
        }
      } else {
      // We saw the first non-path separator
      matchedSlash = false;
    }
  }

  if (end === -1) return hasRoot ? '/' : '.';
  if (hasRoot && end === 1) {
    // return '//';
    // Backwards-compat fix:
    return '/';
  }
  return path.slice(0, end);
};

function basename(path) {
  if (typeof path !== 'string') path = path + '';

  var start = 0;
  var end = -1;
  var matchedSlash = true;
  var i;

  for (i = path.length - 1; i >= 0; --i) {
    if (path.charCodeAt(i) === 47 /*/*/) {
        // If we reached a path separator that was not part of a set of path
        // separators at the end of the string, stop now
        if (!matchedSlash) {
          start = i + 1;
          break;
        }
      } else if (end === -1) {
      // We saw the first non-path separator, mark this as the end of our
      // path component
      matchedSlash = false;
      end = i + 1;
    }
  }

  if (end === -1) return '';
  return path.slice(start, end);
}

// Uses a mixed approach for backwards-compatibility, as ext behavior changed
// in new Node.js versions, so only basename() above is backported here
exports.basename = function (path, ext) {
  var f = basename(path);
  if (ext && f.substr(-1 * ext.length) === ext) {
    f = f.substr(0, f.length - ext.length);
  }
  return f;
};

exports.extname = function (path) {
  if (typeof path !== 'string') path = path + '';
  var startDot = -1;
  var startPart = 0;
  var end = -1;
  var matchedSlash = true;
  // Track the state of characters (if any) we see before our first dot and
  // after any path separator we find
  var preDotState = 0;
  for (var i = path.length - 1; i >= 0; --i) {
    var code = path.charCodeAt(i);
    if (code === 47 /*/*/) {
        // If we reached a path separator that was not part of a set of path
        // separators at the end of the string, stop now
        if (!matchedSlash) {
          startPart = i + 1;
          break;
        }
        continue;
      }
    if (end === -1) {
      // We saw the first non-path separator, mark this as the end of our
      // extension
      matchedSlash = false;
      end = i + 1;
    }
    if (code === 46 /*.*/) {
        // If this is our first dot, mark it as the start of our extension
        if (startDot === -1)
          startDot = i;
        else if (preDotState !== 1)
          preDotState = 1;
    } else if (startDot !== -1) {
      // We saw a non-dot and non-path separator before our dot, so we should
      // have a good chance at having a non-empty extension
      preDotState = -1;
    }
  }

  if (startDot === -1 || end === -1 ||
      // We saw a non-dot character immediately before the dot
      preDotState === 0 ||
      // The (right-most) trimmed path component is exactly '..'
      preDotState === 1 && startDot === end - 1 && startDot === startPart + 1) {
    return '';
  }
  return path.slice(startDot, end);
};

function filter (xs, f) {
    if (xs.filter) return xs.filter(f);
    var res = [];
    for (var i = 0; i < xs.length; i++) {
        if (f(xs[i], i, xs)) res.push(xs[i]);
    }
    return res;
}

// String.prototype.substr - negative index don't work in IE8
var substr = 'ab'.substr(-1) === 'b'
    ? function (str, start, len) { return str.substr(start, len) }
    : function (str, start, len) {
        if (start < 0) start = str.length + start;
        return str.substr(start, len);
    }
;

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(84)))

/***/ }),
/* 84 */
/***/ (function(module, exports) {

// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) { return [] }

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };


/***/ }),
/* 85 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.saveLog = void 0;
var colorize_1 = __webpack_require__(77);
var globals_1 = __webpack_require__(63);
var colors_1 = __webpack_require__(86);
var types_1 = __webpack_require__(87);
var write_1 = __webpack_require__(88);
var saveLog = function (message, target) {
    if (target === void 0) { target = types_1.LogTarget.ALL; }
    if (globals_1.ioSettings.logTargets[types_1.LogTarget.NONE]) {
        return;
    }
    if (globals_1.ioSettings.logTargets[types_1.LogTarget.ALL] || globals_1.ioSettings.logTargets[target] || target === types_1.LogTarget.ALL) {
        write_1.write(message, target, globals_1.ioSettings.logDir);
        // tslint:disable-next-line:no-console
        console.log(colorize_1.colorize(message, colors_1.targetColors[target]));
    }
};
exports.saveLog = saveLog;


/***/ }),
/* 86 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.targetColors = void 0;
var types_1 = __webpack_require__(87);
var targetColors = (_a = {},
    _a[types_1.LogTarget.ALL] = "white",
    _a[types_1.LogTarget.ERROR] = "red",
    _a[types_1.LogTarget.SPEC] = "magenta",
    _a[types_1.LogTarget.NONE] = "white",
    _a[types_1.LogTarget.FINAL] = "green",
    _a[types_1.LogTarget.PROGRESS] = "yellow",
    _a[types_1.LogTarget.DETAILS] = "white",
    _a[types_1.LogTarget.SETUP] = "cyan",
    _a[types_1.LogTarget.RESULT] = "green",
    _a);
exports.targetColors = targetColors;


/***/ }),
/* 87 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.ScriptFlag = exports.LogTarget = void 0;
var LogTarget;
(function (LogTarget) {
    LogTarget["ALL"] = "all";
    LogTarget["ERROR"] = "error";
    LogTarget["SPEC"] = "spec";
    LogTarget["NONE"] = "none";
    LogTarget["FINAL"] = "final";
    LogTarget["PROGRESS"] = "progress";
    LogTarget["DETAILS"] = "details";
    LogTarget["SETUP"] = "setup";
    LogTarget["RESULT"] = "result";
})(LogTarget || (LogTarget = {}));
exports.LogTarget = LogTarget;
// Keep this alphabetical so you can ensure no conflicts.
var ScriptFlag;
(function (ScriptFlag) {
    ScriptFlag["MAX_2_3_FREE_SOPFR"] = "+";
    ScriptFlag["MAX_2_3_FREE_COPFR"] = "#";
    ScriptFlag["SOS_MODE"] = "0";
    ScriptFlag["EXCLUDED_FIELDS"] = "1";
    ScriptFlag["SYNC"] = "2";
    ScriptFlag["MAX_ATE"] = "3";
    ScriptFlag["SECONDARY_COMMA_ZONES"] = "4";
    ScriptFlag["COMPLEXITY_SEARCH_ED"] = "5";
    ScriptFlag["COMPLEXITY_ONLY"] = "6";
    ScriptFlag["ACCIDENTAL"] = "7";
    ScriptFlag["ORDERED_FIELDS"] = "8";
    ScriptFlag["EXCLUSIVE"] = "9";
    ScriptFlag["MAX_AAS"] = "a";
    ScriptFlag["TABLE_FORMAT"] = "b";
    ScriptFlag["NO_COLOR"] = "c";
    ScriptFlag["UNDIRECTED_COMMA_NAME"] = "d";
    ScriptFlag["NO_MOOT"] = "e";
    ScriptFlag["FACTORING_MODE"] = "f";
    ScriptFlag["COMMA_NAME"] = "g";
    // "h" reserved for help
    ScriptFlag["INTEGER"] = "i";
    ScriptFlag["MAX_UNIT"] = "j";
    ScriptFlag["USE_KNOWN_POPULAR_2_3_FREE_CLASSES"] = "k";
    ScriptFlag["LOWER_BOUND"] = "l";
    ScriptFlag["MONZO"] = "m";
    ScriptFlag["MAX_N2D3P9"] = "n";
    ScriptFlag["ONLY_TOP"] = "o";
    ScriptFlag["PRIME_LIMIT"] = "p";
    ScriptFlag["QUOTIENT"] = "q";
    ScriptFlag["USE_BEST_NOTATING_COMMAS"] = "r";
    ScriptFlag["SORT_BY"] = "s";
    ScriptFlag["LOG_TARGETS"] = "t";
    ScriptFlag["UPPER_BOUND"] = "u";
    ScriptFlag["UNABBREVIATED_COMMA_NAME"] = "v";
    // Free again: "w"
    ScriptFlag["NO_TIME"] = "x";
    ScriptFlag["USE_LATE"] = "y";
    ScriptFlag["Z"] = "z";
})(ScriptFlag || (ScriptFlag = {}));
exports.ScriptFlag = ScriptFlag;


/***/ }),
/* 88 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.write = void 0;
var fs = __importStar(__webpack_require__(82));
var constants_1 = __webpack_require__(64);
var globals_1 = __webpack_require__(63);
var removeColor_1 = __webpack_require__(89);
var table_1 = __webpack_require__(65);
var constants_2 = __webpack_require__(90);
var write = function (message, target, logDir) {
    fs.existsSync("log") || fs.mkdirSync("log");
    fs.existsSync("log/" + logDir) || fs.mkdirSync("log/" + logDir);
    var file = "log/" + logDir + "/" + target + ".txt";
    if (!fs.existsSync(file) && globals_1.ioSettings.tableFormat === table_1.TableFormat.SPREADSHEET) {
        // See: http://forum.sagittal.org/viewtopic.php?p=2410#p2410
        // And https://stackoverflow.com/a/27975629/6998322
        fs.appendFileSync(file, constants_2.BOM, { encoding: "utf8" });
        // This is to prevent Excel from dropping columns of desired data
        // Because it seems to base things on the first row of the file
        // Even if the table proper doesn't come for a few lines
        // Based on how I've designed the output of the scripts to be more than mere tables
        fs.appendFileSync(file, " \t \t \t \t \t \t \t \t \t \t \t \t \t \t \t \t \t \t \t \t \t \t \t \t \t \t \t \t \t \t \t \t \t \t \t \t\n", { encoding: "utf8" });
    }
    fs.appendFileSync(file, "" + removeColor_1.removeColor(message) + constants_1.NEWLINE, { encoding: "utf8" });
};
exports.write = write;


/***/ }),
/* 89 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.removeColor = void 0;
var constants_1 = __webpack_require__(64);
var removeColor = function (io) {
    return io.replace(/\x1B\[\d+m/g, constants_1.BLANK);
};
exports.removeColor = removeColor;


/***/ }),
/* 90 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.BOM = void 0;
var BOM = "\ufeff";
exports.BOM = BOM;


/***/ }),
/* 91 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.setLogTargets = void 0;
var constants_1 = __webpack_require__(64);
var globals_1 = __webpack_require__(63);
var types_1 = __webpack_require__(87);
var setLogTargets = function (logTargetsCommaSeparatedString) {
    if (logTargetsCommaSeparatedString === void 0) { logTargetsCommaSeparatedString = constants_1.BLANK; }
    globals_1.ioSettings.logTargets = Object.keys(types_1.LogTarget).reduce(function (logTargets, logTarget) {
        var _a;
        return (__assign(__assign({}, logTargets), (_a = {}, _a[logTarget] = false, _a)));
    }, {});
    if (logTargetsCommaSeparatedString === true) {
        globals_1.ioSettings.logTargets[types_1.LogTarget.ALL] = true;
        return;
    }
    var targets = logTargetsCommaSeparatedString.split(",");
    targets.forEach(function (target) {
        globals_1.ioSettings.logTargets[target] = true;
    });
    globals_1.ioSettings.logTargets[types_1.LogTarget.FINAL] = true;
};
exports.setLogTargets = setLogTargets;


/***/ }),
/* 92 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {
Object.defineProperty(exports, "__esModule", { value: true });
exports.setupScriptAndIo = void 0;
__webpack_require__(93);
var commander_1 = __webpack_require__(109);
var code_1 = __webpack_require__(4);
var constants_1 = __webpack_require__(64);
var globals_1 = __webpack_require__(63);
var clear_1 = __webpack_require__(81);
var set_1 = __webpack_require__(91);
var types_1 = __webpack_require__(87);
var setupScriptAndIo = function (logDir, defaultLogTargets) {
    if (!code_1.isUndefined(logDir))
        globals_1.ioSettings.logDir = logDir;
    commander_1.program
        .option("-" + types_1.ScriptFlag.LOG_TARGETS + ", --log-targets [logTargets]", "log targets")
        .option("-" + types_1.ScriptFlag.NO_COLOR + ", --no-color", "no color")
        .option("-" + types_1.ScriptFlag.TABLE_FORMAT + ", --table-format <tableFormat>", "table format")
        .option("-" + types_1.ScriptFlag.NO_TIME + ", --no-time", "no time");
    commander_1.program.parse(process.argv);
    if (!code_1.isUndefined(logDir))
        clear_1.clearLogFiles(logDir);
    if (!code_1.isUndefined(commander_1.program.tableFormat))
        globals_1.ioSettings.tableFormat = commander_1.program.tableFormat;
    set_1.setLogTargets(commander_1.program.logTargets || defaultLogTargets && defaultLogTargets.join(constants_1.COMMA));
    globals_1.ioSettings.disableColors = !commander_1.program.color || !!process.env.TEST_MODE;
    if (commander_1.program.time && !process.env.TEST_MODE) {
        globals_1.ioSettings.time = code_1.now();
    }
};
exports.setupScriptAndIo = setupScriptAndIo;

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(84)))

/***/ }),
/* 93 */
/***/ (function(module, exports, __webpack_require__) {

var colors = __webpack_require__(94);
module['exports'] = colors;

// Remark: By default, colors will add style properties to String.prototype.
//
// If you don't wish to extend String.prototype, you can do this instead and
// native String will not be touched:
//
//   var colors = require('colors/safe);
//   colors.red("foo")
//
//
__webpack_require__(108)();


/***/ }),
/* 94 */
/***/ (function(module, exports, __webpack_require__) {

/*

The MIT License (MIT)

Original Library
  - Copyright (c) Marak Squires

Additional functionality
 - Copyright (c) Sindre Sorhus <sindresorhus@gmail.com> (sindresorhus.com)

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.

*/

var colors = {};
module['exports'] = colors;

colors.themes = {};

var util = __webpack_require__(95);
var ansiStyles = colors.styles = __webpack_require__(98);
var defineProps = Object.defineProperties;
var newLineRegex = new RegExp(/[\r\n]+/g);

colors.supportsColor = __webpack_require__(99).supportsColor;

if (typeof colors.enabled === 'undefined') {
  colors.enabled = colors.supportsColor() !== false;
}

colors.enable = function() {
  colors.enabled = true;
};

colors.disable = function() {
  colors.enabled = false;
};

colors.stripColors = colors.strip = function(str) {
  return ('' + str).replace(/\x1B\[\d+m/g, '');
};

// eslint-disable-next-line no-unused-vars
var stylize = colors.stylize = function stylize(str, style) {
  if (!colors.enabled) {
    return str+'';
  }

  var styleMap = ansiStyles[style];

  // Stylize should work for non-ANSI styles, too
  if(!styleMap && style in colors){
    // Style maps like trap operate as functions on strings;
    // they don't have properties like open or close.
    return colors[style](str);
  }

  return styleMap.open + str + styleMap.close;
};

var matchOperatorsRe = /[|\\{}()[\]^$+*?.]/g;
var escapeStringRegexp = function(str) {
  if (typeof str !== 'string') {
    throw new TypeError('Expected a string');
  }
  return str.replace(matchOperatorsRe, '\\$&');
};

function build(_styles) {
  var builder = function builder() {
    return applyStyle.apply(builder, arguments);
  };
  builder._styles = _styles;
  // __proto__ is used because we must return a function, but there is
  // no way to create a function with a different prototype.
  builder.__proto__ = proto;
  return builder;
}

var styles = (function() {
  var ret = {};
  ansiStyles.grey = ansiStyles.gray;
  Object.keys(ansiStyles).forEach(function(key) {
    ansiStyles[key].closeRe =
      new RegExp(escapeStringRegexp(ansiStyles[key].close), 'g');
    ret[key] = {
      get: function() {
        return build(this._styles.concat(key));
      },
    };
  });
  return ret;
})();

var proto = defineProps(function colors() {}, styles);

function applyStyle() {
  var args = Array.prototype.slice.call(arguments);

  var str = args.map(function(arg) {
    // Use weak equality check so we can colorize null/undefined in safe mode
    if (arg != null && arg.constructor === String) {
      return arg;
    } else {
      return util.inspect(arg);
    }
  }).join(' ');

  if (!colors.enabled || !str) {
    return str;
  }

  var newLinesPresent = str.indexOf('\n') != -1;

  var nestedStyles = this._styles;

  var i = nestedStyles.length;
  while (i--) {
    var code = ansiStyles[nestedStyles[i]];
    str = code.open + str.replace(code.closeRe, code.open) + code.close;
    if (newLinesPresent) {
      str = str.replace(newLineRegex, function(match) {
        return code.close + match + code.open;
      });
    }
  }

  return str;
}

colors.setTheme = function(theme) {
  if (typeof theme === 'string') {
    console.log('colors.setTheme now only accepts an object, not a string.  ' +
      'If you are trying to set a theme from a file, it is now your (the ' +
      'caller\'s) responsibility to require the file.  The old syntax ' +
      'looked like colors.setTheme(__dirname + ' +
      '\'/../themes/generic-logging.js\'); The new syntax looks like '+
      'colors.setTheme(require(__dirname + ' +
      '\'/../themes/generic-logging.js\'));');
    return;
  }
  for (var style in theme) {
    (function(style) {
      colors[style] = function(str) {
        if (typeof theme[style] === 'object') {
          var out = str;
          for (var i in theme[style]) {
            out = colors[theme[style][i]](out);
          }
          return out;
        }
        return colors[theme[style]](str);
      };
    })(style);
  }
};

function init() {
  var ret = {};
  Object.keys(styles).forEach(function(name) {
    ret[name] = {
      get: function() {
        return build([name]);
      },
    };
  });
  return ret;
}

var sequencer = function sequencer(map, str) {
  var exploded = str.split('');
  exploded = exploded.map(map);
  return exploded.join('');
};

// custom formatter methods
colors.trap = __webpack_require__(102);
colors.zalgo = __webpack_require__(103);

// maps
colors.maps = {};
colors.maps.america = __webpack_require__(104)(colors);
colors.maps.zebra = __webpack_require__(105)(colors);
colors.maps.rainbow = __webpack_require__(106)(colors);
colors.maps.random = __webpack_require__(107)(colors);

for (var map in colors.maps) {
  (function(map) {
    colors[map] = function(str) {
      return sequencer(colors.maps[map], str);
    };
  })(map);
}

defineProps(colors, init());


/***/ }),
/* 95 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(process) {// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.

var getOwnPropertyDescriptors = Object.getOwnPropertyDescriptors ||
  function getOwnPropertyDescriptors(obj) {
    var keys = Object.keys(obj);
    var descriptors = {};
    for (var i = 0; i < keys.length; i++) {
      descriptors[keys[i]] = Object.getOwnPropertyDescriptor(obj, keys[i]);
    }
    return descriptors;
  };

var formatRegExp = /%[sdj%]/g;
exports.format = function(f) {
  if (!isString(f)) {
    var objects = [];
    for (var i = 0; i < arguments.length; i++) {
      objects.push(inspect(arguments[i]));
    }
    return objects.join(' ');
  }

  var i = 1;
  var args = arguments;
  var len = args.length;
  var str = String(f).replace(formatRegExp, function(x) {
    if (x === '%%') return '%';
    if (i >= len) return x;
    switch (x) {
      case '%s': return String(args[i++]);
      case '%d': return Number(args[i++]);
      case '%j':
        try {
          return JSON.stringify(args[i++]);
        } catch (_) {
          return '[Circular]';
        }
      default:
        return x;
    }
  });
  for (var x = args[i]; i < len; x = args[++i]) {
    if (isNull(x) || !isObject(x)) {
      str += ' ' + x;
    } else {
      str += ' ' + inspect(x);
    }
  }
  return str;
};


// Mark that a method should not be used.
// Returns a modified function which warns once by default.
// If --no-deprecation is set, then it is a no-op.
exports.deprecate = function(fn, msg) {
  if (typeof process !== 'undefined' && process.noDeprecation === true) {
    return fn;
  }

  // Allow for deprecating things in the process of starting up.
  if (typeof process === 'undefined') {
    return function() {
      return exports.deprecate(fn, msg).apply(this, arguments);
    };
  }

  var warned = false;
  function deprecated() {
    if (!warned) {
      if (process.throwDeprecation) {
        throw new Error(msg);
      } else if (process.traceDeprecation) {
        console.trace(msg);
      } else {
        console.error(msg);
      }
      warned = true;
    }
    return fn.apply(this, arguments);
  }

  return deprecated;
};


var debugs = {};
var debugEnviron;
exports.debuglog = function(set) {
  if (isUndefined(debugEnviron))
    debugEnviron = process.env.NODE_DEBUG || '';
  set = set.toUpperCase();
  if (!debugs[set]) {
    if (new RegExp('\\b' + set + '\\b', 'i').test(debugEnviron)) {
      var pid = process.pid;
      debugs[set] = function() {
        var msg = exports.format.apply(exports, arguments);
        console.error('%s %d: %s', set, pid, msg);
      };
    } else {
      debugs[set] = function() {};
    }
  }
  return debugs[set];
};


/**
 * Echos the value of a value. Trys to print the value out
 * in the best way possible given the different types.
 *
 * @param {Object} obj The object to print out.
 * @param {Object} opts Optional options object that alters the output.
 */
/* legacy: obj, showHidden, depth, colors*/
function inspect(obj, opts) {
  // default options
  var ctx = {
    seen: [],
    stylize: stylizeNoColor
  };
  // legacy...
  if (arguments.length >= 3) ctx.depth = arguments[2];
  if (arguments.length >= 4) ctx.colors = arguments[3];
  if (isBoolean(opts)) {
    // legacy...
    ctx.showHidden = opts;
  } else if (opts) {
    // got an "options" object
    exports._extend(ctx, opts);
  }
  // set default options
  if (isUndefined(ctx.showHidden)) ctx.showHidden = false;
  if (isUndefined(ctx.depth)) ctx.depth = 2;
  if (isUndefined(ctx.colors)) ctx.colors = false;
  if (isUndefined(ctx.customInspect)) ctx.customInspect = true;
  if (ctx.colors) ctx.stylize = stylizeWithColor;
  return formatValue(ctx, obj, ctx.depth);
}
exports.inspect = inspect;


// http://en.wikipedia.org/wiki/ANSI_escape_code#graphics
inspect.colors = {
  'bold' : [1, 22],
  'italic' : [3, 23],
  'underline' : [4, 24],
  'inverse' : [7, 27],
  'white' : [37, 39],
  'grey' : [90, 39],
  'black' : [30, 39],
  'blue' : [34, 39],
  'cyan' : [36, 39],
  'green' : [32, 39],
  'magenta' : [35, 39],
  'red' : [31, 39],
  'yellow' : [33, 39]
};

// Don't use 'blue' not visible on cmd.exe
inspect.styles = {
  'special': 'cyan',
  'number': 'yellow',
  'boolean': 'yellow',
  'undefined': 'grey',
  'null': 'bold',
  'string': 'green',
  'date': 'magenta',
  // "name": intentionally not styling
  'regexp': 'red'
};


function stylizeWithColor(str, styleType) {
  var style = inspect.styles[styleType];

  if (style) {
    return '\u001b[' + inspect.colors[style][0] + 'm' + str +
           '\u001b[' + inspect.colors[style][1] + 'm';
  } else {
    return str;
  }
}


function stylizeNoColor(str, styleType) {
  return str;
}


function arrayToHash(array) {
  var hash = {};

  array.forEach(function(val, idx) {
    hash[val] = true;
  });

  return hash;
}


function formatValue(ctx, value, recurseTimes) {
  // Provide a hook for user-specified inspect functions.
  // Check that value is an object with an inspect function on it
  if (ctx.customInspect &&
      value &&
      isFunction(value.inspect) &&
      // Filter out the util module, it's inspect function is special
      value.inspect !== exports.inspect &&
      // Also filter out any prototype objects using the circular check.
      !(value.constructor && value.constructor.prototype === value)) {
    var ret = value.inspect(recurseTimes, ctx);
    if (!isString(ret)) {
      ret = formatValue(ctx, ret, recurseTimes);
    }
    return ret;
  }

  // Primitive types cannot have properties
  var primitive = formatPrimitive(ctx, value);
  if (primitive) {
    return primitive;
  }

  // Look up the keys of the object.
  var keys = Object.keys(value);
  var visibleKeys = arrayToHash(keys);

  if (ctx.showHidden) {
    keys = Object.getOwnPropertyNames(value);
  }

  // IE doesn't make error fields non-enumerable
  // http://msdn.microsoft.com/en-us/library/ie/dww52sbt(v=vs.94).aspx
  if (isError(value)
      && (keys.indexOf('message') >= 0 || keys.indexOf('description') >= 0)) {
    return formatError(value);
  }

  // Some type of object without properties can be shortcutted.
  if (keys.length === 0) {
    if (isFunction(value)) {
      var name = value.name ? ': ' + value.name : '';
      return ctx.stylize('[Function' + name + ']', 'special');
    }
    if (isRegExp(value)) {
      return ctx.stylize(RegExp.prototype.toString.call(value), 'regexp');
    }
    if (isDate(value)) {
      return ctx.stylize(Date.prototype.toString.call(value), 'date');
    }
    if (isError(value)) {
      return formatError(value);
    }
  }

  var base = '', array = false, braces = ['{', '}'];

  // Make Array say that they are Array
  if (isArray(value)) {
    array = true;
    braces = ['[', ']'];
  }

  // Make functions say that they are functions
  if (isFunction(value)) {
    var n = value.name ? ': ' + value.name : '';
    base = ' [Function' + n + ']';
  }

  // Make RegExps say that they are RegExps
  if (isRegExp(value)) {
    base = ' ' + RegExp.prototype.toString.call(value);
  }

  // Make dates with properties first say the date
  if (isDate(value)) {
    base = ' ' + Date.prototype.toUTCString.call(value);
  }

  // Make error with message first say the error
  if (isError(value)) {
    base = ' ' + formatError(value);
  }

  if (keys.length === 0 && (!array || value.length == 0)) {
    return braces[0] + base + braces[1];
  }

  if (recurseTimes < 0) {
    if (isRegExp(value)) {
      return ctx.stylize(RegExp.prototype.toString.call(value), 'regexp');
    } else {
      return ctx.stylize('[Object]', 'special');
    }
  }

  ctx.seen.push(value);

  var output;
  if (array) {
    output = formatArray(ctx, value, recurseTimes, visibleKeys, keys);
  } else {
    output = keys.map(function(key) {
      return formatProperty(ctx, value, recurseTimes, visibleKeys, key, array);
    });
  }

  ctx.seen.pop();

  return reduceToSingleString(output, base, braces);
}


function formatPrimitive(ctx, value) {
  if (isUndefined(value))
    return ctx.stylize('undefined', 'undefined');
  if (isString(value)) {
    var simple = '\'' + JSON.stringify(value).replace(/^"|"$/g, '')
                                             .replace(/'/g, "\\'")
                                             .replace(/\\"/g, '"') + '\'';
    return ctx.stylize(simple, 'string');
  }
  if (isNumber(value))
    return ctx.stylize('' + value, 'number');
  if (isBoolean(value))
    return ctx.stylize('' + value, 'boolean');
  // For some reason typeof null is "object", so special case here.
  if (isNull(value))
    return ctx.stylize('null', 'null');
}


function formatError(value) {
  return '[' + Error.prototype.toString.call(value) + ']';
}


function formatArray(ctx, value, recurseTimes, visibleKeys, keys) {
  var output = [];
  for (var i = 0, l = value.length; i < l; ++i) {
    if (hasOwnProperty(value, String(i))) {
      output.push(formatProperty(ctx, value, recurseTimes, visibleKeys,
          String(i), true));
    } else {
      output.push('');
    }
  }
  keys.forEach(function(key) {
    if (!key.match(/^\d+$/)) {
      output.push(formatProperty(ctx, value, recurseTimes, visibleKeys,
          key, true));
    }
  });
  return output;
}


function formatProperty(ctx, value, recurseTimes, visibleKeys, key, array) {
  var name, str, desc;
  desc = Object.getOwnPropertyDescriptor(value, key) || { value: value[key] };
  if (desc.get) {
    if (desc.set) {
      str = ctx.stylize('[Getter/Setter]', 'special');
    } else {
      str = ctx.stylize('[Getter]', 'special');
    }
  } else {
    if (desc.set) {
      str = ctx.stylize('[Setter]', 'special');
    }
  }
  if (!hasOwnProperty(visibleKeys, key)) {
    name = '[' + key + ']';
  }
  if (!str) {
    if (ctx.seen.indexOf(desc.value) < 0) {
      if (isNull(recurseTimes)) {
        str = formatValue(ctx, desc.value, null);
      } else {
        str = formatValue(ctx, desc.value, recurseTimes - 1);
      }
      if (str.indexOf('\n') > -1) {
        if (array) {
          str = str.split('\n').map(function(line) {
            return '  ' + line;
          }).join('\n').substr(2);
        } else {
          str = '\n' + str.split('\n').map(function(line) {
            return '   ' + line;
          }).join('\n');
        }
      }
    } else {
      str = ctx.stylize('[Circular]', 'special');
    }
  }
  if (isUndefined(name)) {
    if (array && key.match(/^\d+$/)) {
      return str;
    }
    name = JSON.stringify('' + key);
    if (name.match(/^"([a-zA-Z_][a-zA-Z_0-9]*)"$/)) {
      name = name.substr(1, name.length - 2);
      name = ctx.stylize(name, 'name');
    } else {
      name = name.replace(/'/g, "\\'")
                 .replace(/\\"/g, '"')
                 .replace(/(^"|"$)/g, "'");
      name = ctx.stylize(name, 'string');
    }
  }

  return name + ': ' + str;
}


function reduceToSingleString(output, base, braces) {
  var numLinesEst = 0;
  var length = output.reduce(function(prev, cur) {
    numLinesEst++;
    if (cur.indexOf('\n') >= 0) numLinesEst++;
    return prev + cur.replace(/\u001b\[\d\d?m/g, '').length + 1;
  }, 0);

  if (length > 60) {
    return braces[0] +
           (base === '' ? '' : base + '\n ') +
           ' ' +
           output.join(',\n  ') +
           ' ' +
           braces[1];
  }

  return braces[0] + base + ' ' + output.join(', ') + ' ' + braces[1];
}


// NOTE: These type checking functions intentionally don't use `instanceof`
// because it is fragile and can be easily faked with `Object.create()`.
function isArray(ar) {
  return Array.isArray(ar);
}
exports.isArray = isArray;

function isBoolean(arg) {
  return typeof arg === 'boolean';
}
exports.isBoolean = isBoolean;

function isNull(arg) {
  return arg === null;
}
exports.isNull = isNull;

function isNullOrUndefined(arg) {
  return arg == null;
}
exports.isNullOrUndefined = isNullOrUndefined;

function isNumber(arg) {
  return typeof arg === 'number';
}
exports.isNumber = isNumber;

function isString(arg) {
  return typeof arg === 'string';
}
exports.isString = isString;

function isSymbol(arg) {
  return typeof arg === 'symbol';
}
exports.isSymbol = isSymbol;

function isUndefined(arg) {
  return arg === void 0;
}
exports.isUndefined = isUndefined;

function isRegExp(re) {
  return isObject(re) && objectToString(re) === '[object RegExp]';
}
exports.isRegExp = isRegExp;

function isObject(arg) {
  return typeof arg === 'object' && arg !== null;
}
exports.isObject = isObject;

function isDate(d) {
  return isObject(d) && objectToString(d) === '[object Date]';
}
exports.isDate = isDate;

function isError(e) {
  return isObject(e) &&
      (objectToString(e) === '[object Error]' || e instanceof Error);
}
exports.isError = isError;

function isFunction(arg) {
  return typeof arg === 'function';
}
exports.isFunction = isFunction;

function isPrimitive(arg) {
  return arg === null ||
         typeof arg === 'boolean' ||
         typeof arg === 'number' ||
         typeof arg === 'string' ||
         typeof arg === 'symbol' ||  // ES6 symbol
         typeof arg === 'undefined';
}
exports.isPrimitive = isPrimitive;

exports.isBuffer = __webpack_require__(96);

function objectToString(o) {
  return Object.prototype.toString.call(o);
}


function pad(n) {
  return n < 10 ? '0' + n.toString(10) : n.toString(10);
}


var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep',
              'Oct', 'Nov', 'Dec'];

// 26 Feb 16:19:34
function timestamp() {
  var d = new Date();
  var time = [pad(d.getHours()),
              pad(d.getMinutes()),
              pad(d.getSeconds())].join(':');
  return [d.getDate(), months[d.getMonth()], time].join(' ');
}


// log is just a thin wrapper to console.log that prepends a timestamp
exports.log = function() {
  console.log('%s - %s', timestamp(), exports.format.apply(exports, arguments));
};


/**
 * Inherit the prototype methods from one constructor into another.
 *
 * The Function.prototype.inherits from lang.js rewritten as a standalone
 * function (not on Function.prototype). NOTE: If this file is to be loaded
 * during bootstrapping this function needs to be rewritten using some native
 * functions as prototype setup using normal JavaScript does not work as
 * expected during bootstrapping (see mirror.js in r114903).
 *
 * @param {function} ctor Constructor function which needs to inherit the
 *     prototype.
 * @param {function} superCtor Constructor function to inherit prototype from.
 */
exports.inherits = __webpack_require__(97);

exports._extend = function(origin, add) {
  // Don't do anything if add isn't an object
  if (!add || !isObject(add)) return origin;

  var keys = Object.keys(add);
  var i = keys.length;
  while (i--) {
    origin[keys[i]] = add[keys[i]];
  }
  return origin;
};

function hasOwnProperty(obj, prop) {
  return Object.prototype.hasOwnProperty.call(obj, prop);
}

var kCustomPromisifiedSymbol = typeof Symbol !== 'undefined' ? Symbol('util.promisify.custom') : undefined;

exports.promisify = function promisify(original) {
  if (typeof original !== 'function')
    throw new TypeError('The "original" argument must be of type Function');

  if (kCustomPromisifiedSymbol && original[kCustomPromisifiedSymbol]) {
    var fn = original[kCustomPromisifiedSymbol];
    if (typeof fn !== 'function') {
      throw new TypeError('The "util.promisify.custom" argument must be of type Function');
    }
    Object.defineProperty(fn, kCustomPromisifiedSymbol, {
      value: fn, enumerable: false, writable: false, configurable: true
    });
    return fn;
  }

  function fn() {
    var promiseResolve, promiseReject;
    var promise = new Promise(function (resolve, reject) {
      promiseResolve = resolve;
      promiseReject = reject;
    });

    var args = [];
    for (var i = 0; i < arguments.length; i++) {
      args.push(arguments[i]);
    }
    args.push(function (err, value) {
      if (err) {
        promiseReject(err);
      } else {
        promiseResolve(value);
      }
    });

    try {
      original.apply(this, args);
    } catch (err) {
      promiseReject(err);
    }

    return promise;
  }

  Object.setPrototypeOf(fn, Object.getPrototypeOf(original));

  if (kCustomPromisifiedSymbol) Object.defineProperty(fn, kCustomPromisifiedSymbol, {
    value: fn, enumerable: false, writable: false, configurable: true
  });
  return Object.defineProperties(
    fn,
    getOwnPropertyDescriptors(original)
  );
}

exports.promisify.custom = kCustomPromisifiedSymbol

function callbackifyOnRejected(reason, cb) {
  // `!reason` guard inspired by bluebird (Ref: https://goo.gl/t5IS6M).
  // Because `null` is a special error value in callbacks which means "no error
  // occurred", we error-wrap so the callback consumer can distinguish between
  // "the promise rejected with null" or "the promise fulfilled with undefined".
  if (!reason) {
    var newReason = new Error('Promise was rejected with a falsy value');
    newReason.reason = reason;
    reason = newReason;
  }
  return cb(reason);
}

function callbackify(original) {
  if (typeof original !== 'function') {
    throw new TypeError('The "original" argument must be of type Function');
  }

  // We DO NOT return the promise as it gives the user a false sense that
  // the promise is actually somehow related to the callback's execution
  // and that the callback throwing will reject the promise.
  function callbackified() {
    var args = [];
    for (var i = 0; i < arguments.length; i++) {
      args.push(arguments[i]);
    }

    var maybeCb = args.pop();
    if (typeof maybeCb !== 'function') {
      throw new TypeError('The last argument must be of type Function');
    }
    var self = this;
    var cb = function() {
      return maybeCb.apply(self, arguments);
    };
    // In true node style we process the callback on `nextTick` with all the
    // implications (stack, `uncaughtException`, `async_hooks`)
    original.apply(this, args)
      .then(function(ret) { process.nextTick(cb, null, ret) },
            function(rej) { process.nextTick(callbackifyOnRejected, rej, cb) });
  }

  Object.setPrototypeOf(callbackified, Object.getPrototypeOf(original));
  Object.defineProperties(callbackified,
                          getOwnPropertyDescriptors(original));
  return callbackified;
}
exports.callbackify = callbackify;

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(84)))

/***/ }),
/* 96 */
/***/ (function(module, exports) {

module.exports = function isBuffer(arg) {
  return arg && typeof arg === 'object'
    && typeof arg.copy === 'function'
    && typeof arg.fill === 'function'
    && typeof arg.readUInt8 === 'function';
}

/***/ }),
/* 97 */
/***/ (function(module, exports) {

if (typeof Object.create === 'function') {
  // implementation from standard node.js 'util' module
  module.exports = function inherits(ctor, superCtor) {
    ctor.super_ = superCtor
    ctor.prototype = Object.create(superCtor.prototype, {
      constructor: {
        value: ctor,
        enumerable: false,
        writable: true,
        configurable: true
      }
    });
  };
} else {
  // old school shim for old browsers
  module.exports = function inherits(ctor, superCtor) {
    ctor.super_ = superCtor
    var TempCtor = function () {}
    TempCtor.prototype = superCtor.prototype
    ctor.prototype = new TempCtor()
    ctor.prototype.constructor = ctor
  }
}


/***/ }),
/* 98 */
/***/ (function(module, exports) {

/*
The MIT License (MIT)

Copyright (c) Sindre Sorhus <sindresorhus@gmail.com> (sindresorhus.com)

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.

*/

var styles = {};
module['exports'] = styles;

var codes = {
  reset: [0, 0],

  bold: [1, 22],
  dim: [2, 22],
  italic: [3, 23],
  underline: [4, 24],
  inverse: [7, 27],
  hidden: [8, 28],
  strikethrough: [9, 29],

  black: [30, 39],
  red: [31, 39],
  green: [32, 39],
  yellow: [33, 39],
  blue: [34, 39],
  magenta: [35, 39],
  cyan: [36, 39],
  white: [37, 39],
  gray: [90, 39],
  grey: [90, 39],

  brightRed: [91, 39],
  brightGreen: [92, 39],
  brightYellow: [93, 39],
  brightBlue: [94, 39],
  brightMagenta: [95, 39],
  brightCyan: [96, 39],
  brightWhite: [97, 39],

  bgBlack: [40, 49],
  bgRed: [41, 49],
  bgGreen: [42, 49],
  bgYellow: [43, 49],
  bgBlue: [44, 49],
  bgMagenta: [45, 49],
  bgCyan: [46, 49],
  bgWhite: [47, 49],
  bgGray: [100, 49],
  bgGrey: [100, 49],

  bgBrightRed: [101, 49],
  bgBrightGreen: [102, 49],
  bgBrightYellow: [103, 49],
  bgBrightBlue: [104, 49],
  bgBrightMagenta: [105, 49],
  bgBrightCyan: [106, 49],
  bgBrightWhite: [107, 49],

  // legacy styles for colors pre v1.0.0
  blackBG: [40, 49],
  redBG: [41, 49],
  greenBG: [42, 49],
  yellowBG: [43, 49],
  blueBG: [44, 49],
  magentaBG: [45, 49],
  cyanBG: [46, 49],
  whiteBG: [47, 49],

};

Object.keys(codes).forEach(function(key) {
  var val = codes[key];
  var style = styles[key] = [];
  style.open = '\u001b[' + val[0] + 'm';
  style.close = '\u001b[' + val[1] + 'm';
});


/***/ }),
/* 99 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {/*
The MIT License (MIT)

Copyright (c) Sindre Sorhus <sindresorhus@gmail.com> (sindresorhus.com)

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.

*/



var os = __webpack_require__(100);
var hasFlag = __webpack_require__(101);

var env = process.env;

var forceColor = void 0;
if (hasFlag('no-color') || hasFlag('no-colors') || hasFlag('color=false')) {
  forceColor = false;
} else if (hasFlag('color') || hasFlag('colors') || hasFlag('color=true')
           || hasFlag('color=always')) {
  forceColor = true;
}
if ('FORCE_COLOR' in env) {
  forceColor = env.FORCE_COLOR.length === 0
    || parseInt(env.FORCE_COLOR, 10) !== 0;
}

function translateLevel(level) {
  if (level === 0) {
    return false;
  }

  return {
    level: level,
    hasBasic: true,
    has256: level >= 2,
    has16m: level >= 3,
  };
}

function supportsColor(stream) {
  if (forceColor === false) {
    return 0;
  }

  if (hasFlag('color=16m') || hasFlag('color=full')
      || hasFlag('color=truecolor')) {
    return 3;
  }

  if (hasFlag('color=256')) {
    return 2;
  }

  if (stream && !stream.isTTY && forceColor !== true) {
    return 0;
  }

  var min = forceColor ? 1 : 0;

  if (process.platform === 'win32') {
    // Node.js 7.5.0 is the first version of Node.js to include a patch to
    // libuv that enables 256 color output on Windows. Anything earlier and it
    // won't work. However, here we target Node.js 8 at minimum as it is an LTS
    // release, and Node.js 7 is not. Windows 10 build 10586 is the first
    // Windows release that supports 256 colors. Windows 10 build 14931 is the
    // first release that supports 16m/TrueColor.
    var osRelease = os.release().split('.');
    if (Number(process.versions.node.split('.')[0]) >= 8
        && Number(osRelease[0]) >= 10 && Number(osRelease[2]) >= 10586) {
      return Number(osRelease[2]) >= 14931 ? 3 : 2;
    }

    return 1;
  }

  if ('CI' in env) {
    if (['TRAVIS', 'CIRCLECI', 'APPVEYOR', 'GITLAB_CI'].some(function(sign) {
      return sign in env;
    }) || env.CI_NAME === 'codeship') {
      return 1;
    }

    return min;
  }

  if ('TEAMCITY_VERSION' in env) {
    return (/^(9\.(0*[1-9]\d*)\.|\d{2,}\.)/.test(env.TEAMCITY_VERSION) ? 1 : 0
    );
  }

  if ('TERM_PROGRAM' in env) {
    var version = parseInt((env.TERM_PROGRAM_VERSION || '').split('.')[0], 10);

    switch (env.TERM_PROGRAM) {
      case 'iTerm.app':
        return version >= 3 ? 3 : 2;
      case 'Hyper':
        return 3;
      case 'Apple_Terminal':
        return 2;
      // No default
    }
  }

  if (/-256(color)?$/i.test(env.TERM)) {
    return 2;
  }

  if (/^screen|^xterm|^vt100|^rxvt|color|ansi|cygwin|linux/i.test(env.TERM)) {
    return 1;
  }

  if ('COLORTERM' in env) {
    return 1;
  }

  if (env.TERM === 'dumb') {
    return min;
  }

  return min;
}

function getSupportLevel(stream) {
  var level = supportsColor(stream);
  return translateLevel(level);
}

module.exports = {
  supportsColor: getSupportLevel,
  stdout: getSupportLevel(process.stdout),
  stderr: getSupportLevel(process.stderr),
};

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(84)))

/***/ }),
/* 100 */
/***/ (function(module, exports) {

exports.endianness = function () { return 'LE' };

exports.hostname = function () {
    if (typeof location !== 'undefined') {
        return location.hostname
    }
    else return '';
};

exports.loadavg = function () { return [] };

exports.uptime = function () { return 0 };

exports.freemem = function () {
    return Number.MAX_VALUE;
};

exports.totalmem = function () {
    return Number.MAX_VALUE;
};

exports.cpus = function () { return [] };

exports.type = function () { return 'Browser' };

exports.release = function () {
    if (typeof navigator !== 'undefined') {
        return navigator.appVersion;
    }
    return '';
};

exports.networkInterfaces
= exports.getNetworkInterfaces
= function () { return {} };

exports.arch = function () { return 'javascript' };

exports.platform = function () { return 'browser' };

exports.tmpdir = exports.tmpDir = function () {
    return '/tmp';
};

exports.EOL = '\n';

exports.homedir = function () {
	return '/'
};


/***/ }),
/* 101 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {/*
MIT License

Copyright (c) Sindre Sorhus <sindresorhus@gmail.com> (sindresorhus.com)

Permission is hereby granted, free of charge, to any person obtaining a copy of
this software and associated documentation files (the "Software"), to deal in
the Software without restriction, including without limitation the rights to
use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies
of the Software, and to permit persons to whom the Software is furnished to do
so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
*/



module.exports = function(flag, argv) {
  argv = argv || process.argv;

  var terminatorPos = argv.indexOf('--');
  var prefix = /^-{1,2}/.test(flag) ? '' : '--';
  var pos = argv.indexOf(prefix + flag);

  return pos !== -1 && (terminatorPos === -1 ? true : pos < terminatorPos);
};

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(84)))

/***/ }),
/* 102 */
/***/ (function(module, exports) {

module['exports'] = function runTheTrap(text, options) {
  var result = '';
  text = text || 'Run the trap, drop the bass';
  text = text.split('');
  var trap = {
    a: ['\u0040', '\u0104', '\u023a', '\u0245', '\u0394', '\u039b', '\u0414'],
    b: ['\u00df', '\u0181', '\u0243', '\u026e', '\u03b2', '\u0e3f'],
    c: ['\u00a9', '\u023b', '\u03fe'],
    d: ['\u00d0', '\u018a', '\u0500', '\u0501', '\u0502', '\u0503'],
    e: ['\u00cb', '\u0115', '\u018e', '\u0258', '\u03a3', '\u03be', '\u04bc',
      '\u0a6c'],
    f: ['\u04fa'],
    g: ['\u0262'],
    h: ['\u0126', '\u0195', '\u04a2', '\u04ba', '\u04c7', '\u050a'],
    i: ['\u0f0f'],
    j: ['\u0134'],
    k: ['\u0138', '\u04a0', '\u04c3', '\u051e'],
    l: ['\u0139'],
    m: ['\u028d', '\u04cd', '\u04ce', '\u0520', '\u0521', '\u0d69'],
    n: ['\u00d1', '\u014b', '\u019d', '\u0376', '\u03a0', '\u048a'],
    o: ['\u00d8', '\u00f5', '\u00f8', '\u01fe', '\u0298', '\u047a', '\u05dd',
      '\u06dd', '\u0e4f'],
    p: ['\u01f7', '\u048e'],
    q: ['\u09cd'],
    r: ['\u00ae', '\u01a6', '\u0210', '\u024c', '\u0280', '\u042f'],
    s: ['\u00a7', '\u03de', '\u03df', '\u03e8'],
    t: ['\u0141', '\u0166', '\u0373'],
    u: ['\u01b1', '\u054d'],
    v: ['\u05d8'],
    w: ['\u0428', '\u0460', '\u047c', '\u0d70'],
    x: ['\u04b2', '\u04fe', '\u04fc', '\u04fd'],
    y: ['\u00a5', '\u04b0', '\u04cb'],
    z: ['\u01b5', '\u0240'],
  };
  text.forEach(function(c) {
    c = c.toLowerCase();
    var chars = trap[c] || [' '];
    var rand = Math.floor(Math.random() * chars.length);
    if (typeof trap[c] !== 'undefined') {
      result += trap[c][rand];
    } else {
      result += c;
    }
  });
  return result;
};


/***/ }),
/* 103 */
/***/ (function(module, exports) {

// please no
module['exports'] = function zalgo(text, options) {
  text = text || '   he is here   ';
  var soul = {
    'up': [
      '̍', '̎', '̄', '̅',
      '̿', '̑', '̆', '̐',
      '͒', '͗', '͑', '̇',
      '̈', '̊', '͂', '̓',
      '̈', '͊', '͋', '͌',
      '̃', '̂', '̌', '͐',
      '̀', '́', '̋', '̏',
      '̒', '̓', '̔', '̽',
      '̉', 'ͣ', 'ͤ', 'ͥ',
      'ͦ', 'ͧ', 'ͨ', 'ͩ',
      'ͪ', 'ͫ', 'ͬ', 'ͭ',
      'ͮ', 'ͯ', '̾', '͛',
      '͆', '̚',
    ],
    'down': [
      '̖', '̗', '̘', '̙',
      '̜', '̝', '̞', '̟',
      '̠', '̤', '̥', '̦',
      '̩', '̪', '̫', '̬',
      '̭', '̮', '̯', '̰',
      '̱', '̲', '̳', '̹',
      '̺', '̻', '̼', 'ͅ',
      '͇', '͈', '͉', '͍',
      '͎', '͓', '͔', '͕',
      '͖', '͙', '͚', '̣',
    ],
    'mid': [
      '̕', '̛', '̀', '́',
      '͘', '̡', '̢', '̧',
      '̨', '̴', '̵', '̶',
      '͜', '͝', '͞',
      '͟', '͠', '͢', '̸',
      '̷', '͡', ' ҉',
    ],
  };
  var all = [].concat(soul.up, soul.down, soul.mid);

  function randomNumber(range) {
    var r = Math.floor(Math.random() * range);
    return r;
  }

  function isChar(character) {
    var bool = false;
    all.filter(function(i) {
      bool = (i === character);
    });
    return bool;
  }


  function heComes(text, options) {
    var result = '';
    var counts;
    var l;
    options = options || {};
    options['up'] =
      typeof options['up'] !== 'undefined' ? options['up'] : true;
    options['mid'] =
      typeof options['mid'] !== 'undefined' ? options['mid'] : true;
    options['down'] =
      typeof options['down'] !== 'undefined' ? options['down'] : true;
    options['size'] =
      typeof options['size'] !== 'undefined' ? options['size'] : 'maxi';
    text = text.split('');
    for (l in text) {
      if (isChar(l)) {
        continue;
      }
      result = result + text[l];
      counts = {'up': 0, 'down': 0, 'mid': 0};
      switch (options.size) {
        case 'mini':
          counts.up = randomNumber(8);
          counts.mid = randomNumber(2);
          counts.down = randomNumber(8);
          break;
        case 'maxi':
          counts.up = randomNumber(16) + 3;
          counts.mid = randomNumber(4) + 1;
          counts.down = randomNumber(64) + 3;
          break;
        default:
          counts.up = randomNumber(8) + 1;
          counts.mid = randomNumber(6) / 2;
          counts.down = randomNumber(8) + 1;
          break;
      }

      var arr = ['up', 'mid', 'down'];
      for (var d in arr) {
        var index = arr[d];
        for (var i = 0; i <= counts[index]; i++) {
          if (options[index]) {
            result = result + soul[index][randomNumber(soul[index].length)];
          }
        }
      }
    }
    return result;
  }
  // don't summon him
  return heComes(text, options);
};



/***/ }),
/* 104 */
/***/ (function(module, exports) {

module['exports'] = function(colors) {
  return function(letter, i, exploded) {
    if (letter === ' ') return letter;
    switch (i%3) {
      case 0: return colors.red(letter);
      case 1: return colors.white(letter);
      case 2: return colors.blue(letter);
    }
  };
};


/***/ }),
/* 105 */
/***/ (function(module, exports) {

module['exports'] = function(colors) {
  return function(letter, i, exploded) {
    return i % 2 === 0 ? letter : colors.inverse(letter);
  };
};


/***/ }),
/* 106 */
/***/ (function(module, exports) {

module['exports'] = function(colors) {
  // RoY G BiV
  var rainbowColors = ['red', 'yellow', 'green', 'blue', 'magenta'];
  return function(letter, i, exploded) {
    if (letter === ' ') {
      return letter;
    } else {
      return colors[rainbowColors[i++ % rainbowColors.length]](letter);
    }
  };
};



/***/ }),
/* 107 */
/***/ (function(module, exports) {

module['exports'] = function(colors) {
  var available = ['underline', 'inverse', 'grey', 'yellow', 'red', 'green',
    'blue', 'white', 'cyan', 'magenta', 'brightYellow', 'brightRed',
    'brightGreen', 'brightBlue', 'brightWhite', 'brightCyan', 'brightMagenta'];
  return function(letter, i, exploded) {
    return letter === ' ' ? letter :
      colors[
          available[Math.round(Math.random() * (available.length - 2))]
      ](letter);
  };
};


/***/ }),
/* 108 */
/***/ (function(module, exports, __webpack_require__) {

var colors = __webpack_require__(94);

module['exports'] = function() {
  //
  // Extends prototype of native string object to allow for "foo".red syntax
  //
  var addProperty = function(color, func) {
    String.prototype.__defineGetter__(color, func);
  };

  addProperty('strip', function() {
    return colors.strip(this);
  });

  addProperty('stripColors', function() {
    return colors.strip(this);
  });

  addProperty('trap', function() {
    return colors.trap(this);
  });

  addProperty('zalgo', function() {
    return colors.zalgo(this);
  });

  addProperty('zebra', function() {
    return colors.zebra(this);
  });

  addProperty('rainbow', function() {
    return colors.rainbow(this);
  });

  addProperty('random', function() {
    return colors.random(this);
  });

  addProperty('america', function() {
    return colors.america(this);
  });

  //
  // Iterate through all default styles and colors
  //
  var x = Object.keys(colors.styles);
  x.forEach(function(style) {
    addProperty(style, function() {
      return colors.stylize(this, style);
    });
  });

  function applyTheme(theme) {
    //
    // Remark: This is a list of methods that exist
    // on String that you should not overwrite.
    //
    var stringPrototypeBlacklist = [
      '__defineGetter__', '__defineSetter__', '__lookupGetter__',
      '__lookupSetter__', 'charAt', 'constructor', 'hasOwnProperty',
      'isPrototypeOf', 'propertyIsEnumerable', 'toLocaleString', 'toString',
      'valueOf', 'charCodeAt', 'indexOf', 'lastIndexOf', 'length',
      'localeCompare', 'match', 'repeat', 'replace', 'search', 'slice',
      'split', 'substring', 'toLocaleLowerCase', 'toLocaleUpperCase',
      'toLowerCase', 'toUpperCase', 'trim', 'trimLeft', 'trimRight',
    ];

    Object.keys(theme).forEach(function(prop) {
      if (stringPrototypeBlacklist.indexOf(prop) !== -1) {
        console.log('warn: '.red + ('String.prototype' + prop).magenta +
          ' is probably something you don\'t want to override.  ' +
          'Ignoring style name');
      } else {
        if (typeof(theme[prop]) === 'string') {
          colors[prop] = colors[theme[prop]];
          addProperty(prop, function() {
            return colors[prop](this);
          });
        } else {
          var themePropApplicator = function(str) {
            var ret = str || this;
            for (var t = 0; t < theme[prop].length; t++) {
              ret = colors[theme[prop][t]](ret);
            }
            return ret;
          };
          addProperty(prop, themePropApplicator);
          colors[prop] = function(str) {
            return themePropApplicator(str);
          };
        }
      }
    });
  }

  colors.setTheme = function(theme) {
    if (typeof theme === 'string') {
      console.log('colors.setTheme now only accepts an object, not a string. ' +
        'If you are trying to set a theme from a file, it is now your (the ' +
        'caller\'s) responsibility to require the file.  The old syntax ' +
        'looked like colors.setTheme(__dirname + ' +
        '\'/../themes/generic-logging.js\'); The new syntax looks like '+
        'colors.setTheme(require(__dirname + ' +
        '\'/../themes/generic-logging.js\'));');
      return;
    } else {
      applyTheme(theme);
    }
  };
};


/***/ }),
/* 109 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(process, Buffer) {/**
 * Module dependencies.
 */

const EventEmitter = __webpack_require__(115).EventEmitter;
const spawn = __webpack_require__(82).spawn;
const path = __webpack_require__(83);
const fs = __webpack_require__(82);

// @ts-check

class Option {
  /**
   * Initialize a new `Option` with the given `flags` and `description`.
   *
   * @param {string} flags
   * @param {string} description
   * @api public
   */

  constructor(flags, description) {
    this.flags = flags;
    this.required = flags.indexOf('<') >= 0; // A value must be supplied when the option is specified.
    this.optional = flags.indexOf('[') >= 0; // A value is optional when the option is specified.
    this.mandatory = false; // The option must have a value after parsing, which usually means it must be specified on command line.
    this.negate = flags.indexOf('-no-') !== -1;
    const flagParts = flags.split(/[ ,|]+/);
    if (flagParts.length > 1 && !/^[[<]/.test(flagParts[1])) this.short = flagParts.shift();
    this.long = flagParts.shift();
    this.description = description || '';
    this.defaultValue = undefined;
  }

  /**
   * Return option name.
   *
   * @return {string}
   * @api private
   */

  name() {
    return this.long.replace(/^--/, '');
  };

  /**
   * Return option name, in a camelcase format that can be used
   * as a object attribute key.
   *
   * @return {string}
   * @api private
   */

  attributeName() {
    return camelcase(this.name().replace(/^no-/, ''));
  };

  /**
   * Check if `arg` matches the short or long flag.
   *
   * @param {string} arg
   * @return {boolean}
   * @api private
   */

  is(arg) {
    return this.short === arg || this.long === arg;
  };
}

/**
 * CommanderError class
 * @class
 */
class CommanderError extends Error {
  /**
   * Constructs the CommanderError class
   * @param {number} exitCode suggested exit code which could be used with process.exit
   * @param {string} code an id string representing the error
   * @param {string} message human-readable description of the error
   * @constructor
   */
  constructor(exitCode, code, message) {
    super(message);
    // properly capture stack trace in Node.js
    Error.captureStackTrace(this, this.constructor);
    this.name = this.constructor.name;
    this.code = code;
    this.exitCode = exitCode;
    this.nestedError = undefined;
  }
}

class Command extends EventEmitter {
  /**
   * Initialize a new `Command`.
   *
   * @param {string} [name]
   * @api public
   */

  constructor(name) {
    super();
    this.commands = [];
    this.options = [];
    this.parent = null;
    this._allowUnknownOption = false;
    this._args = [];
    this.rawArgs = null;
    this._scriptPath = null;
    this._name = name || '';
    this._optionValues = {};
    this._storeOptionsAsProperties = true; // backwards compatible by default
    this._passCommandToAction = true; // backwards compatible by default
    this._actionResults = [];
    this._actionHandler = null;
    this._executableHandler = false;
    this._executableFile = null; // custom name for executable
    this._defaultCommandName = null;
    this._exitCallback = null;
    this._aliases = [];

    this._hidden = false;
    this._helpFlags = '-h, --help';
    this._helpDescription = 'display help for command';
    this._helpShortFlag = '-h';
    this._helpLongFlag = '--help';
    this._hasImplicitHelpCommand = undefined; // Deliberately undefined, not decided whether true or false
    this._helpCommandName = 'help';
    this._helpCommandnameAndArgs = 'help [command]';
    this._helpCommandDescription = 'display help for command';
  }

  /**
   * Define a command.
   *
   * There are two styles of command: pay attention to where to put the description.
   *
   * Examples:
   *
   *      // Command implemented using action handler (description is supplied separately to `.command`)
   *      program
   *        .command('clone <source> [destination]')
   *        .description('clone a repository into a newly created directory')
   *        .action((source, destination) => {
   *          console.log('clone command called');
   *        });
   *
   *      // Command implemented using separate executable file (description is second parameter to `.command`)
   *      program
   *        .command('start <service>', 'start named service')
   *        .command('stop [service]', 'stop named service, or all if no name supplied');
   *
   * @param {string} nameAndArgs - command name and arguments, args are `<required>` or `[optional]` and last may also be `variadic...`
   * @param {Object|string} [actionOptsOrExecDesc] - configuration options (for action), or description (for executable)
   * @param {Object} [execOpts] - configuration options (for executable)
   * @return {Command} returns new command for action handler, or `this` for executable command
   * @api public
   */

  command(nameAndArgs, actionOptsOrExecDesc, execOpts) {
    let desc = actionOptsOrExecDesc;
    let opts = execOpts;
    if (typeof desc === 'object' && desc !== null) {
      opts = desc;
      desc = null;
    }
    opts = opts || {};
    const args = nameAndArgs.split(/ +/);
    const cmd = this.createCommand(args.shift());

    if (desc) {
      cmd.description(desc);
      cmd._executableHandler = true;
    }
    if (opts.isDefault) this._defaultCommandName = cmd._name;

    cmd._hidden = !!(opts.noHelp || opts.hidden);
    cmd._helpFlags = this._helpFlags;
    cmd._helpDescription = this._helpDescription;
    cmd._helpShortFlag = this._helpShortFlag;
    cmd._helpLongFlag = this._helpLongFlag;
    cmd._helpCommandName = this._helpCommandName;
    cmd._helpCommandnameAndArgs = this._helpCommandnameAndArgs;
    cmd._helpCommandDescription = this._helpCommandDescription;
    cmd._exitCallback = this._exitCallback;
    cmd._storeOptionsAsProperties = this._storeOptionsAsProperties;
    cmd._passCommandToAction = this._passCommandToAction;

    cmd._executableFile = opts.executableFile || null; // Custom name for executable file, set missing to null to match constructor
    this.commands.push(cmd);
    cmd._parseExpectedArgs(args);
    cmd.parent = this;

    if (desc) return this;
    return cmd;
  };

  /**
   * Factory routine to create a new unattached command.
   *
   * See .command() for creating an attached subcommand, which uses this routine to
   * create the command. You can override createCommand to customise subcommands.
   *
   * @param {string} [name]
   * @return {Command} new command
   * @api public
   */

  createCommand(name) {
    return new Command(name);
  };

  /**
   * Add a prepared subcommand.
   *
   * See .command() for creating an attached subcommand which inherits settings from its parent.
   *
   * @param {Command} cmd - new subcommand
   * @param {Object} [opts] - configuration options
   * @return {Command} `this` command for chaining
   * @api public
   */

  addCommand(cmd, opts) {
    if (!cmd._name) throw new Error('Command passed to .addCommand() must have a name');

    // To keep things simple, block automatic name generation for deeply nested executables.
    // Fail fast and detect when adding rather than later when parsing.
    function checkExplicitNames(commandArray) {
      commandArray.forEach((cmd) => {
        if (cmd._executableHandler && !cmd._executableFile) {
          throw new Error(`Must specify executableFile for deeply nested executable: ${cmd.name()}`);
        }
        checkExplicitNames(cmd.commands);
      });
    }
    checkExplicitNames(cmd.commands);

    opts = opts || {};
    if (opts.isDefault) this._defaultCommandName = cmd._name;
    if (opts.noHelp || opts.hidden) cmd._hidden = true; // modifying passed command due to existing implementation

    this.commands.push(cmd);
    cmd.parent = this;
    return this;
  };

  /**
   * Define argument syntax for the command.
   *
   * @api public
   */

  arguments(desc) {
    return this._parseExpectedArgs(desc.split(/ +/));
  };

  /**
   * Override default decision whether to add implicit help command.
   *
   *    addHelpCommand() // force on
   *    addHelpCommand(false); // force off
   *    addHelpCommand('help [cmd]', 'display help for [cmd]'); // force on with custom detais
   *
   * @return {Command} `this` command for chaining
   * @api public
   */

  addHelpCommand(enableOrNameAndArgs, description) {
    if (enableOrNameAndArgs === false) {
      this._hasImplicitHelpCommand = false;
    } else {
      this._hasImplicitHelpCommand = true;
      if (typeof enableOrNameAndArgs === 'string') {
        this._helpCommandName = enableOrNameAndArgs.split(' ')[0];
        this._helpCommandnameAndArgs = enableOrNameAndArgs;
      }
      this._helpCommandDescription = description || this._helpCommandDescription;
    }
    return this;
  };

  /**
   * @return {boolean}
   * @api private
   */

  _lazyHasImplicitHelpCommand() {
    if (this._hasImplicitHelpCommand === undefined) {
      this._hasImplicitHelpCommand = this.commands.length && !this._actionHandler && !this._findCommand('help');
    }
    return this._hasImplicitHelpCommand;
  };

  /**
   * Parse expected `args`.
   *
   * For example `["[type]"]` becomes `[{ required: false, name: 'type' }]`.
   *
   * @param {Array} args
   * @return {Command} `this` command for chaining
   * @api private
   */

  _parseExpectedArgs(args) {
    if (!args.length) return;
    args.forEach((arg) => {
      const argDetails = {
        required: false,
        name: '',
        variadic: false
      };

      switch (arg[0]) {
        case '<':
          argDetails.required = true;
          argDetails.name = arg.slice(1, -1);
          break;
        case '[':
          argDetails.name = arg.slice(1, -1);
          break;
      }

      if (argDetails.name.length > 3 && argDetails.name.slice(-3) === '...') {
        argDetails.variadic = true;
        argDetails.name = argDetails.name.slice(0, -3);
      }
      if (argDetails.name) {
        this._args.push(argDetails);
      }
    });
    this._args.forEach((arg, i) => {
      if (arg.variadic && i < this._args.length - 1) {
        throw new Error(`only the last argument can be variadic '${arg.name}'`);
      }
    });
    return this;
  };

  /**
   * Register callback to use as replacement for calling process.exit.
   *
   * @param {Function} [fn] optional callback which will be passed a CommanderError, defaults to throwing
   * @return {Command} `this` command for chaining
   * @api public
   */

  exitOverride(fn) {
    if (fn) {
      this._exitCallback = fn;
    } else {
      this._exitCallback = (err) => {
        if (err.code !== 'commander.executeSubCommandAsync') {
          throw err;
        } else {
          // Async callback from spawn events, not useful to throw.
        }
      };
    }
    return this;
  };

  /**
   * Call process.exit, and _exitCallback if defined.
   *
   * @param {number} exitCode exit code for using with process.exit
   * @param {string} code an id string representing the error
   * @param {string} message human-readable description of the error
   * @return never
   * @api private
   */

  _exit(exitCode, code, message) {
    if (this._exitCallback) {
      this._exitCallback(new CommanderError(exitCode, code, message));
      // Expecting this line is not reached.
    }
    process.exit(exitCode);
  };

  /**
   * Register callback `fn` for the command.
   *
   * Examples:
   *
   *      program
   *        .command('help')
   *        .description('display verbose help')
   *        .action(function() {
   *           // output help here
   *        });
   *
   * @param {Function} fn
   * @return {Command} `this` command for chaining
   * @api public
   */

  action(fn) {
    const listener = (args) => {
      // The .action callback takes an extra parameter which is the command or options.
      const expectedArgsCount = this._args.length;
      const actionArgs = args.slice(0, expectedArgsCount);
      if (this._passCommandToAction) {
        actionArgs[expectedArgsCount] = this;
      } else {
        actionArgs[expectedArgsCount] = this.opts();
      }
      // Add the extra arguments so available too.
      if (args.length > expectedArgsCount) {
        actionArgs.push(args.slice(expectedArgsCount));
      }

      const actionResult = fn.apply(this, actionArgs);
      // Remember result in case it is async. Assume parseAsync getting called on root.
      let rootCommand = this;
      while (rootCommand.parent) {
        rootCommand = rootCommand.parent;
      }
      rootCommand._actionResults.push(actionResult);
    };
    this._actionHandler = listener;
    return this;
  };

  /**
   * Internal implementation shared by .option() and .requiredOption()
   *
   * @param {Object} config
   * @param {string} flags
   * @param {string} description
   * @param {Function|*} [fn] - custom option processing function or default vaue
   * @param {*} [defaultValue]
   * @return {Command} `this` command for chaining
   * @api private
   */

  _optionEx(config, flags, description, fn, defaultValue) {
    const option = new Option(flags, description);
    const oname = option.name();
    const name = option.attributeName();
    option.mandatory = !!config.mandatory;

    // default as 3rd arg
    if (typeof fn !== 'function') {
      if (fn instanceof RegExp) {
        // This is a bit simplistic (especially no error messages), and probably better handled by caller using custom option processing.
        // No longer documented in README, but still present for backwards compatibility.
        const regex = fn;
        fn = (val, def) => {
          const m = regex.exec(val);
          return m ? m[0] : def;
        };
      } else {
        defaultValue = fn;
        fn = null;
      }
    }

    // preassign default value for --no-*, [optional], <required>, or plain flag if boolean value
    if (option.negate || option.optional || option.required || typeof defaultValue === 'boolean') {
      // when --no-foo we make sure default is true, unless a --foo option is already defined
      if (option.negate) {
        const positiveLongFlag = option.long.replace(/^--no-/, '--');
        defaultValue = this._findOption(positiveLongFlag) ? this._getOptionValue(name) : true;
      }
      // preassign only if we have a default
      if (defaultValue !== undefined) {
        this._setOptionValue(name, defaultValue);
        option.defaultValue = defaultValue;
      }
    }

    // register the option
    this.options.push(option);

    // when it's passed assign the value
    // and conditionally invoke the callback
    this.on('option:' + oname, (val) => {
      // coercion
      if (val !== null && fn) {
        val = fn(val, this._getOptionValue(name) === undefined ? defaultValue : this._getOptionValue(name));
      }

      // unassigned or boolean value
      if (typeof this._getOptionValue(name) === 'boolean' || typeof this._getOptionValue(name) === 'undefined') {
        // if no value, negate false, and we have a default, then use it!
        if (val == null) {
          this._setOptionValue(name, option.negate
            ? false
            : defaultValue || true);
        } else {
          this._setOptionValue(name, val);
        }
      } else if (val !== null) {
        // reassign
        this._setOptionValue(name, option.negate ? false : val);
      }
    });

    return this;
  };

  /**
   * Define option with `flags`, `description` and optional
   * coercion `fn`.
   *
   * The `flags` string should contain both the short and long flags,
   * separated by comma, a pipe or space. The following are all valid
   * all will output this way when `--help` is used.
   *
   *    "-p, --pepper"
   *    "-p|--pepper"
   *    "-p --pepper"
   *
   * Examples:
   *
   *     // simple boolean defaulting to undefined
   *     program.option('-p, --pepper', 'add pepper');
   *
   *     program.pepper
   *     // => undefined
   *
   *     --pepper
   *     program.pepper
   *     // => true
   *
   *     // simple boolean defaulting to true (unless non-negated option is also defined)
   *     program.option('-C, --no-cheese', 'remove cheese');
   *
   *     program.cheese
   *     // => true
   *
   *     --no-cheese
   *     program.cheese
   *     // => false
   *
   *     // required argument
   *     program.option('-C, --chdir <path>', 'change the working directory');
   *
   *     --chdir /tmp
   *     program.chdir
   *     // => "/tmp"
   *
   *     // optional argument
   *     program.option('-c, --cheese [type]', 'add cheese [marble]');
   *
   * @param {string} flags
   * @param {string} description
   * @param {Function|*} [fn] - custom option processing function or default vaue
   * @param {*} [defaultValue]
   * @return {Command} `this` command for chaining
   * @api public
   */

  option(flags, description, fn, defaultValue) {
    return this._optionEx({}, flags, description, fn, defaultValue);
  };

  /*
  * Add a required option which must have a value after parsing. This usually means
  * the option must be specified on the command line. (Otherwise the same as .option().)
  *
  * The `flags` string should contain both the short and long flags, separated by comma, a pipe or space.
  *
  * @param {string} flags
  * @param {string} description
  * @param {Function|*} [fn] - custom option processing function or default vaue
  * @param {*} [defaultValue]
  * @return {Command} `this` command for chaining
  * @api public
  */

  requiredOption(flags, description, fn, defaultValue) {
    return this._optionEx({ mandatory: true }, flags, description, fn, defaultValue);
  };

  /**
   * Allow unknown options on the command line.
   *
   * @param {Boolean} [arg] - if `true` or omitted, no error will be thrown
   * for unknown options.
   * @api public
   */
  allowUnknownOption(arg) {
    this._allowUnknownOption = (arg === undefined) || arg;
    return this;
  };

  /**
    * Whether to store option values as properties on command object,
    * or store separately (specify false). In both cases the option values can be accessed using .opts().
    *
    * @param {boolean} value
    * @return {Command} `this` command for chaining
    * @api public
    */

  storeOptionsAsProperties(value) {
    this._storeOptionsAsProperties = (value === undefined) || value;
    if (this.options.length) {
      throw new Error('call .storeOptionsAsProperties() before adding options');
    }
    return this;
  };

  /**
    * Whether to pass command to action handler,
    * or just the options (specify false).
    *
    * @param {boolean} value
    * @return {Command} `this` command for chaining
    * @api public
    */

  passCommandToAction(value) {
    this._passCommandToAction = (value === undefined) || value;
    return this;
  };

  /**
   * Store option value
   *
   * @param {string} key
   * @param {Object} value
   * @api private
   */

  _setOptionValue(key, value) {
    if (this._storeOptionsAsProperties) {
      this[key] = value;
    } else {
      this._optionValues[key] = value;
    }
  };

  /**
   * Retrieve option value
   *
   * @param {string} key
   * @return {Object} value
   * @api private
   */

  _getOptionValue(key) {
    if (this._storeOptionsAsProperties) {
      return this[key];
    }
    return this._optionValues[key];
  };

  /**
   * Parse `argv`, setting options and invoking commands when defined.
   *
   * The default expectation is that the arguments are from node and have the application as argv[0]
   * and the script being run in argv[1], with user parameters after that.
   *
   * Examples:
   *
   *      program.parse(process.argv);
   *      program.parse(); // implicitly use process.argv and auto-detect node vs electron conventions
   *      program.parse(my-args, { from: 'user' }); // just user supplied arguments, nothing special about argv[0]
   *
   * @param {string[]} [argv] - optional, defaults to process.argv
   * @param {Object} [parseOptions] - optionally specify style of options with from: node/user/electron
   * @param {string} [parseOptions.from] - where the args are from: 'node', 'user', 'electron'
   * @return {Command} `this` command for chaining
   * @api public
   */

  parse(argv, parseOptions) {
    if (argv !== undefined && !Array.isArray(argv)) {
      throw new Error('first parameter to parse must be array or undefined');
    }
    parseOptions = parseOptions || {};

    // Default to using process.argv
    if (argv === undefined) {
      argv = process.argv;
      // @ts-ignore
      if (process.versions && process.versions.electron) {
        parseOptions.from = 'electron';
      }
    }
    this.rawArgs = argv.slice();

    // make it a little easier for callers by supporting various argv conventions
    let userArgs;
    switch (parseOptions.from) {
      case undefined:
      case 'node':
        this._scriptPath = argv[1];
        userArgs = argv.slice(2);
        break;
      case 'electron':
        // @ts-ignore
        if (process.defaultApp) {
          this._scriptPath = argv[1];
          userArgs = argv.slice(2);
        } else {
          userArgs = argv.slice(1);
        }
        break;
      case 'user':
        userArgs = argv.slice(0);
        break;
      default:
        throw new Error(`unexpected parse option { from: '${parseOptions.from}' }`);
    }
    if (!this._scriptPath && process.mainModule) {
      this._scriptPath = process.mainModule.filename;
    }

    // Guess name, used in usage in help.
    this._name = this._name || (this._scriptPath && path.basename(this._scriptPath, path.extname(this._scriptPath)));

    // Let's go!
    this._parseCommand([], userArgs);

    return this;
  };

  /**
   * Parse `argv`, setting options and invoking commands when defined.
   *
   * Use parseAsync instead of parse if any of your action handlers are async. Returns a Promise.
   *
   * The default expectation is that the arguments are from node and have the application as argv[0]
   * and the script being run in argv[1], with user parameters after that.
   *
   * Examples:
   *
   *      program.parseAsync(process.argv);
   *      program.parseAsync(); // implicitly use process.argv and auto-detect node vs electron conventions
   *      program.parseAsync(my-args, { from: 'user' }); // just user supplied arguments, nothing special about argv[0]
   *
   * @param {string[]} [argv]
   * @param {Object} [parseOptions]
   * @param {string} parseOptions.from - where the args are from: 'node', 'user', 'electron'
   * @return {Promise}
   * @api public
   */

  parseAsync(argv, parseOptions) {
    this.parse(argv, parseOptions);
    return Promise.all(this._actionResults).then(() => this);
  };

  /**
   * Execute a sub-command executable.
   *
   * @api private
   */

  _executeSubCommand(subcommand, args) {
    args = args.slice();
    let launchWithNode = false; // Use node for source targets so do not need to get permissions correct, and on Windows.
    const sourceExt = ['.js', '.ts', '.mjs'];

    // Not checking for help first. Unlikely to have mandatory and executable, and can't robustly test for help flags in external command.
    this._checkForMissingMandatoryOptions();

    // Want the entry script as the reference for command name and directory for searching for other files.
    const scriptPath = this._scriptPath;

    let baseDir;
    try {
      const resolvedLink = fs.realpathSync(scriptPath);
      baseDir = path.dirname(resolvedLink);
    } catch (e) {
      baseDir = '.'; // dummy, probably not going to find executable!
    }

    // name of the subcommand, like `pm-install`
    let bin = path.basename(scriptPath, path.extname(scriptPath)) + '-' + subcommand._name;
    if (subcommand._executableFile) {
      bin = subcommand._executableFile;
    }

    const localBin = path.join(baseDir, bin);
    if (fs.existsSync(localBin)) {
      // prefer local `./<bin>` to bin in the $PATH
      bin = localBin;
    } else {
      // Look for source files.
      sourceExt.forEach((ext) => {
        if (fs.existsSync(`${localBin}${ext}`)) {
          bin = `${localBin}${ext}`;
        }
      });
    }
    launchWithNode = sourceExt.includes(path.extname(bin));

    let proc;
    if (process.platform !== 'win32') {
      if (launchWithNode) {
        args.unshift(bin);
        // add executable arguments to spawn
        args = incrementNodeInspectorPort(process.execArgv).concat(args);

        proc = spawn(process.argv[0], args, { stdio: 'inherit' });
      } else {
        proc = spawn(bin, args, { stdio: 'inherit' });
      }
    } else {
      args.unshift(bin);
      // add executable arguments to spawn
      args = incrementNodeInspectorPort(process.execArgv).concat(args);
      proc = spawn(process.execPath, args, { stdio: 'inherit' });
    }

    const signals = ['SIGUSR1', 'SIGUSR2', 'SIGTERM', 'SIGINT', 'SIGHUP'];
    signals.forEach((signal) => {
      // @ts-ignore
      process.on(signal, () => {
        if (proc.killed === false && proc.exitCode === null) {
          proc.kill(signal);
        }
      });
    });

    // By default terminate process when spawned process terminates.
    // Suppressing the exit if exitCallback defined is a bit messy and of limited use, but does allow process to stay running!
    const exitCallback = this._exitCallback;
    if (!exitCallback) {
      proc.on('close', process.exit.bind(process));
    } else {
      proc.on('close', () => {
        exitCallback(new CommanderError(process.exitCode || 0, 'commander.executeSubCommandAsync', '(close)'));
      });
    }
    proc.on('error', (err) => {
      // @ts-ignore
      if (err.code === 'ENOENT') {
        const executableMissing = `'${bin}' does not exist
 - if '${subcommand._name}' is not meant to be an executable command, remove description parameter from '.command()' and use '.description()' instead
 - if the default executable name is not suitable, use the executableFile option to supply a custom name`;
        throw new Error(executableMissing);
      // @ts-ignore
      } else if (err.code === 'EACCES') {
        throw new Error(`'${bin}' not executable`);
      }
      if (!exitCallback) {
        process.exit(1);
      } else {
        const wrappedError = new CommanderError(1, 'commander.executeSubCommandAsync', '(error)');
        wrappedError.nestedError = err;
        exitCallback(wrappedError);
      }
    });

    // Store the reference to the child process
    this.runningCommand = proc;
  };

  /**
   * @api private
   */
  _dispatchSubcommand(commandName, operands, unknown) {
    const subCommand = this._findCommand(commandName);
    if (!subCommand) this._helpAndError();

    if (subCommand._executableHandler) {
      this._executeSubCommand(subCommand, operands.concat(unknown));
    } else {
      subCommand._parseCommand(operands, unknown);
    }
  };

  /**
   * Process arguments in context of this command.
   *
   * @api private
   */

  _parseCommand(operands, unknown) {
    const parsed = this.parseOptions(unknown);
    operands = operands.concat(parsed.operands);
    unknown = parsed.unknown;
    this.args = operands.concat(unknown);

    if (operands && this._findCommand(operands[0])) {
      this._dispatchSubcommand(operands[0], operands.slice(1), unknown);
    } else if (this._lazyHasImplicitHelpCommand() && operands[0] === this._helpCommandName) {
      if (operands.length === 1) {
        this.help();
      } else {
        this._dispatchSubcommand(operands[1], [], [this._helpLongFlag]);
      }
    } else if (this._defaultCommandName) {
      outputHelpIfRequested(this, unknown); // Run the help for default command from parent rather than passing to default command
      this._dispatchSubcommand(this._defaultCommandName, operands, unknown);
    } else {
      if (this.commands.length && this.args.length === 0 && !this._actionHandler && !this._defaultCommandName) {
        // probaby missing subcommand and no handler, user needs help
        this._helpAndError();
      }

      outputHelpIfRequested(this, parsed.unknown);
      this._checkForMissingMandatoryOptions();
      if (parsed.unknown.length > 0) {
        this.unknownOption(parsed.unknown[0]);
      }

      if (this._actionHandler) {
        const args = this.args.slice();
        this._args.forEach((arg, i) => {
          if (arg.required && args[i] == null) {
            this.missingArgument(arg.name);
          } else if (arg.variadic) {
            args[i] = args.splice(i);
          }
        });

        this._actionHandler(args);
        this.emit('command:' + this.name(), operands, unknown);
      } else if (operands.length) {
        if (this._findCommand('*')) {
          this._dispatchSubcommand('*', operands, unknown);
        } else if (this.listenerCount('command:*')) {
          this.emit('command:*', operands, unknown);
        } else if (this.commands.length) {
          this.unknownCommand();
        }
      } else if (this.commands.length) {
        // This command has subcommands and nothing hooked up at this level, so display help.
        this._helpAndError();
      } else {
        // fall through for caller to handle after calling .parse()
      }
    }
  };

  /**
   * Find matching command.
   *
   * @api private
   */
  _findCommand(name) {
    if (!name) return undefined;
    return this.commands.find(cmd => cmd._name === name || cmd._aliases.includes(name));
  };

  /**
   * Return an option matching `arg` if any.
   *
   * @param {string} arg
   * @return {Option}
   * @api private
   */

  _findOption(arg) {
    return this.options.find(option => option.is(arg));
  };

  /**
   * Display an error message if a mandatory option does not have a value.
   * Lazy calling after checking for help flags from leaf subcommand.
   *
   * @api private
   */

  _checkForMissingMandatoryOptions() {
    // Walk up hierarchy so can call in subcommand after checking for displaying help.
    for (let cmd = this; cmd; cmd = cmd.parent) {
      cmd.options.forEach((anOption) => {
        if (anOption.mandatory && (cmd._getOptionValue(anOption.attributeName()) === undefined)) {
          cmd.missingMandatoryOptionValue(anOption);
        }
      });
    }
  };

  /**
   * Parse options from `argv` removing known options,
   * and return argv split into operands and unknown arguments.
   *
   * Examples:
   *
   *    argv => operands, unknown
   *    --known kkk op => [op], []
   *    op --known kkk => [op], []
   *    sub --unknown uuu op => [sub], [--unknown uuu op]
   *    sub -- --unknown uuu op => [sub --unknown uuu op], []
   *
   * @param {String[]} argv
   * @return {{operands: String[], unknown: String[]}}
   * @api public
   */

  parseOptions(argv) {
    const operands = []; // operands, not options or values
    const unknown = []; // first unknown option and remaining unknown args
    let dest = operands;
    const args = argv.slice();

    function maybeOption(arg) {
      return arg.length > 1 && arg[0] === '-';
    }

    // parse options
    while (args.length) {
      const arg = args.shift();

      // literal
      if (arg === '--') {
        if (dest === unknown) dest.push(arg);
        dest.push(...args);
        break;
      }

      if (maybeOption(arg)) {
        const option = this._findOption(arg);
        // recognised option, call listener to assign value with possible custom processing
        if (option) {
          if (option.required) {
            const value = args.shift();
            if (value === undefined) this.optionMissingArgument(option);
            this.emit(`option:${option.name()}`, value);
          } else if (option.optional) {
            let value = null;
            // historical behaviour is optional value is following arg unless an option
            if (args.length > 0 && !maybeOption(args[0])) {
              value = args.shift();
            }
            this.emit(`option:${option.name()}`, value);
          } else { // boolean flag
            this.emit(`option:${option.name()}`);
          }
          continue;
        }
      }

      // Look for combo options following single dash, eat first one if known.
      if (arg.length > 2 && arg[0] === '-' && arg[1] !== '-') {
        const option = this._findOption(`-${arg[1]}`);
        if (option) {
          if (option.required || option.optional) {
            // option with value following in same argument
            this.emit(`option:${option.name()}`, arg.slice(2));
          } else {
            // boolean option, emit and put back remainder of arg for further processing
            this.emit(`option:${option.name()}`);
            args.unshift(`-${arg.slice(2)}`);
          }
          continue;
        }
      }

      // Look for known long flag with value, like --foo=bar
      if (/^--[^=]+=/.test(arg)) {
        const index = arg.indexOf('=');
        const option = this._findOption(arg.slice(0, index));
        if (option && (option.required || option.optional)) {
          this.emit(`option:${option.name()}`, arg.slice(index + 1));
          continue;
        }
      }

      // looks like an option but unknown, unknowns from here
      if (arg.length > 1 && arg[0] === '-') {
        dest = unknown;
      }

      // add arg
      dest.push(arg);
    }

    return { operands, unknown };
  };

  /**
   * Return an object containing options as key-value pairs
   *
   * @return {Object}
   * @api public
   */
  opts() {
    if (this._storeOptionsAsProperties) {
      // Preserve original behaviour so backwards compatible when still using properties
      const result = {};
      const len = this.options.length;

      for (let i = 0; i < len; i++) {
        const key = this.options[i].attributeName();
        result[key] = key === this._versionOptionName ? this._version : this[key];
      }
      return result;
    }

    return this._optionValues;
  };

  /**
   * Argument `name` is missing.
   *
   * @param {string} name
   * @api private
   */

  missingArgument(name) {
    const message = `error: missing required argument '${name}'`;
    console.error(message);
    this._exit(1, 'commander.missingArgument', message);
  };

  /**
   * `Option` is missing an argument, but received `flag` or nothing.
   *
   * @param {Option} option
   * @param {string} [flag]
   * @api private
   */

  optionMissingArgument(option, flag) {
    let message;
    if (flag) {
      message = `error: option '${option.flags}' argument missing, got '${flag}'`;
    } else {
      message = `error: option '${option.flags}' argument missing`;
    }
    console.error(message);
    this._exit(1, 'commander.optionMissingArgument', message);
  };

  /**
   * `Option` does not have a value, and is a mandatory option.
   *
   * @param {Option} option
   * @api private
   */

  missingMandatoryOptionValue(option) {
    const message = `error: required option '${option.flags}' not specified`;
    console.error(message);
    this._exit(1, 'commander.missingMandatoryOptionValue', message);
  };

  /**
   * Unknown option `flag`.
   *
   * @param {string} flag
   * @api private
   */

  unknownOption(flag) {
    if (this._allowUnknownOption) return;
    const message = `error: unknown option '${flag}'`;
    console.error(message);
    this._exit(1, 'commander.unknownOption', message);
  };

  /**
   * Unknown command.
   *
   * @api private
   */

  unknownCommand() {
    const partCommands = [this.name()];
    for (let parentCmd = this.parent; parentCmd; parentCmd = parentCmd.parent) {
      partCommands.unshift(parentCmd.name());
    }
    const fullCommand = partCommands.join(' ');
    const message = `error: unknown command '${this.args[0]}'. See '${fullCommand} ${this._helpLongFlag}'.`;
    console.error(message);
    this._exit(1, 'commander.unknownCommand', message);
  };

  /**
   * Set the program version to `str`.
   *
   * This method auto-registers the "-V, --version" flag
   * which will print the version number when passed.
   *
   * You can optionally supply the  flags and description to override the defaults.
   *
   * @param {string} str
   * @param {string} [flags]
   * @param {string} [description]
   * @return {this | string} `this` command for chaining, or version string if no arguments
   * @api public
   */

  version(str, flags, description) {
    if (str === undefined) return this._version;
    this._version = str;
    flags = flags || '-V, --version';
    description = description || 'output the version number';
    const versionOption = new Option(flags, description);
    this._versionOptionName = versionOption.long.substr(2) || 'version';
    this.options.push(versionOption);
    this.on('option:' + this._versionOptionName, () => {
      process.stdout.write(str + '\n');
      this._exit(0, 'commander.version', str);
    });
    return this;
  };

  /**
   * Set the description to `str`.
   *
   * @param {string} str
   * @param {Object} [argsDescription]
   * @return {string|Command}
   * @api public
   */

  description(str, argsDescription) {
    if (str === undefined && argsDescription === undefined) return this._description;
    this._description = str;
    this._argsDescription = argsDescription;
    return this;
  };

  /**
   * Set an alias for the command.
   *
   * You may call more than once to add multiple aliases. Only the first alias is shown in the auto-generated help.
   *
   * @param {string} [alias]
   * @return {string|Command}
   * @api public
   */

  alias(alias) {
    if (alias === undefined) return this._aliases[0]; // just return first, for backwards compatibility

    let command = this;
    if (this.commands.length !== 0 && this.commands[this.commands.length - 1]._executableHandler) {
      // assume adding alias for last added executable subcommand, rather than this
      command = this.commands[this.commands.length - 1];
    }

    if (alias === command._name) throw new Error('Command alias can\'t be the same as its name');

    command._aliases.push(alias);
    return this;
  };

  /**
   * Set aliases for the command.
   *
   * Only the first alias is shown in the auto-generated help.
   *
   * @param {string[]} [aliases]
   * @return {string[]|Command}
   * @api public
   */

  aliases(aliases) {
    // Getter for the array of aliases is the main reason for having aliases() in addition to alias().
    if (aliases === undefined) return this._aliases;

    aliases.forEach((alias) => this.alias(alias));
    return this;
  };

  /**
   * Set / get the command usage `str`.
   *
   * @param {string} [str]
   * @return {String|Command}
   * @api public
   */

  usage(str) {
    if (str === undefined) {
      if (this._usage) return this._usage;

      const args = this._args.map((arg) => {
        return humanReadableArgName(arg);
      });
      return '[options]' +
        (this.commands.length ? ' [command]' : '') +
        (this._args.length ? ' ' + args.join(' ') : '');
    }

    this._usage = str;
    return this;
  };

  /**
   * Get or set the name of the command
   *
   * @param {string} [str]
   * @return {String|Command}
   * @api public
   */

  name(str) {
    if (str === undefined) return this._name;
    this._name = str;
    return this;
  };

  /**
   * Return prepared commands.
   *
   * @return {Array}
   * @api private
   */

  prepareCommands() {
    const commandDetails = this.commands.filter((cmd) => {
      return !cmd._hidden;
    }).map((cmd) => {
      const args = cmd._args.map((arg) => {
        return humanReadableArgName(arg);
      }).join(' ');

      return [
        cmd._name +
          (cmd._aliases[0] ? '|' + cmd._aliases[0] : '') +
          (cmd.options.length ? ' [options]' : '') +
          (args ? ' ' + args : ''),
        cmd._description
      ];
    });

    if (this._lazyHasImplicitHelpCommand()) {
      commandDetails.push([this._helpCommandnameAndArgs, this._helpCommandDescription]);
    }
    return commandDetails;
  };

  /**
   * Return the largest command length.
   *
   * @return {number}
   * @api private
   */

  largestCommandLength() {
    const commands = this.prepareCommands();
    return commands.reduce((max, command) => {
      return Math.max(max, command[0].length);
    }, 0);
  };

  /**
   * Return the largest option length.
   *
   * @return {number}
   * @api private
   */

  largestOptionLength() {
    const options = [].slice.call(this.options);
    options.push({
      flags: this._helpFlags
    });

    return options.reduce((max, option) => {
      return Math.max(max, option.flags.length);
    }, 0);
  };

  /**
   * Return the largest arg length.
   *
   * @return {number}
   * @api private
   */

  largestArgLength() {
    return this._args.reduce((max, arg) => {
      return Math.max(max, arg.name.length);
    }, 0);
  };

  /**
   * Return the pad width.
   *
   * @return {number}
   * @api private
   */

  padWidth() {
    let width = this.largestOptionLength();
    if (this._argsDescription && this._args.length) {
      if (this.largestArgLength() > width) {
        width = this.largestArgLength();
      }
    }

    if (this.commands && this.commands.length) {
      if (this.largestCommandLength() > width) {
        width = this.largestCommandLength();
      }
    }

    return width;
  };

  /**
   * Return help for options.
   *
   * @return {string}
   * @api private
   */

  optionHelp() {
    const width = this.padWidth();
    const columns = process.stdout.columns || 80;
    const descriptionWidth = columns - width - 4;
    function padOptionDetails(flags, description) {
      return pad(flags, width) + '  ' + optionalWrap(description, descriptionWidth, width + 2);
    };

    // Explicit options (including version)
    const help = this.options.map((option) => {
      const fullDesc = option.description +
        ((!option.negate && option.defaultValue !== undefined) ? ' (default: ' + JSON.stringify(option.defaultValue) + ')' : '');
      return padOptionDetails(option.flags, fullDesc);
    });

    // Implicit help
    const showShortHelpFlag = this._helpShortFlag && !this._findOption(this._helpShortFlag);
    const showLongHelpFlag = !this._findOption(this._helpLongFlag);
    if (showShortHelpFlag || showLongHelpFlag) {
      let helpFlags = this._helpFlags;
      if (!showShortHelpFlag) {
        helpFlags = this._helpLongFlag;
      } else if (!showLongHelpFlag) {
        helpFlags = this._helpShortFlag;
      }
      help.push(padOptionDetails(helpFlags, this._helpDescription));
    }

    return help.join('\n');
  };

  /**
   * Return command help documentation.
   *
   * @return {string}
   * @api private
   */

  commandHelp() {
    if (!this.commands.length && !this._lazyHasImplicitHelpCommand()) return '';

    const commands = this.prepareCommands();
    const width = this.padWidth();

    const columns = process.stdout.columns || 80;
    const descriptionWidth = columns - width - 4;

    return [
      'Commands:',
      commands.map((cmd) => {
        const desc = cmd[1] ? '  ' + cmd[1] : '';
        return (desc ? pad(cmd[0], width) : cmd[0]) + optionalWrap(desc, descriptionWidth, width + 2);
      }).join('\n').replace(/^/gm, '  '),
      ''
    ].join('\n');
  };

  /**
   * Return program help documentation.
   *
   * @return {string}
   * @api public
   */

  helpInformation() {
    let desc = [];
    if (this._description) {
      desc = [
        this._description,
        ''
      ];

      const argsDescription = this._argsDescription;
      if (argsDescription && this._args.length) {
        const width = this.padWidth();
        const columns = process.stdout.columns || 80;
        const descriptionWidth = columns - width - 5;
        desc.push('Arguments:');
        desc.push('');
        this._args.forEach((arg) => {
          desc.push('  ' + pad(arg.name, width) + '  ' + wrap(argsDescription[arg.name], descriptionWidth, width + 4));
        });
        desc.push('');
      }
    }

    let cmdName = this._name;
    if (this._aliases[0]) {
      cmdName = cmdName + '|' + this._aliases[0];
    }
    let parentCmdNames = '';
    for (let parentCmd = this.parent; parentCmd; parentCmd = parentCmd.parent) {
      parentCmdNames = parentCmd.name() + ' ' + parentCmdNames;
    }
    const usage = [
      'Usage: ' + parentCmdNames + cmdName + ' ' + this.usage(),
      ''
    ];

    let cmds = [];
    const commandHelp = this.commandHelp();
    if (commandHelp) cmds = [commandHelp];

    const options = [
      'Options:',
      '' + this.optionHelp().replace(/^/gm, '  '),
      ''
    ];

    return usage
      .concat(desc)
      .concat(options)
      .concat(cmds)
      .join('\n');
  };

  /**
   * Output help information for this command.
   *
   * When listener(s) are available for the helpLongFlag
   * those callbacks are invoked.
   *
   * @api public
   */

  outputHelp(cb) {
    if (!cb) {
      cb = (passthru) => {
        return passthru;
      };
    }
    const cbOutput = cb(this.helpInformation());
    if (typeof cbOutput !== 'string' && !Buffer.isBuffer(cbOutput)) {
      throw new Error('outputHelp callback must return a string or a Buffer');
    }
    process.stdout.write(cbOutput);
    this.emit(this._helpLongFlag);
  };

  /**
   * You can pass in flags and a description to override the help
   * flags and help description for your command.
   *
   * @param {string} [flags]
   * @param {string} [description]
   * @return {Command} `this` command for chaining
   * @api public
   */

  helpOption(flags, description) {
    this._helpFlags = flags || this._helpFlags;
    this._helpDescription = description || this._helpDescription;

    const splitFlags = this._helpFlags.split(/[ ,|]+/);

    this._helpShortFlag = undefined;
    if (splitFlags.length > 1) this._helpShortFlag = splitFlags.shift();

    this._helpLongFlag = splitFlags.shift();

    return this;
  };

  /**
   * Output help information and exit.
   *
   * @param {Function} [cb]
   * @api public
   */

  help(cb) {
    this.outputHelp(cb);
    // exitCode: preserving original behaviour which was calling process.exit()
    // message: do not have all displayed text available so only passing placeholder.
    this._exit(process.exitCode || 0, 'commander.help', '(outputHelp)');
  };

  /**
   * Output help information and exit. Display for error situations.
   *
   * @api private
   */

  _helpAndError() {
    this.outputHelp();
    // message: do not have all displayed text available so only passing placeholder.
    this._exit(1, 'commander.help', '(outputHelp)');
  };
};

/**
 * Expose the root command.
 */

exports = module.exports = new Command();
exports.program = exports; // More explicit access to global command.

/**
 * Expose classes
 */

exports.Command = Command;
exports.Option = Option;
exports.CommanderError = CommanderError;

/**
 * Camel-case the given `flag`
 *
 * @param {string} flag
 * @return {string}
 * @api private
 */

function camelcase(flag) {
  return flag.split('-').reduce((str, word) => {
    return str + word[0].toUpperCase() + word.slice(1);
  });
}

/**
 * Pad `str` to `width`.
 *
 * @param {string} str
 * @param {number} width
 * @return {string}
 * @api private
 */

function pad(str, width) {
  const len = Math.max(0, width - str.length);
  return str + Array(len + 1).join(' ');
}

/**
 * Wraps the given string with line breaks at the specified width while breaking
 * words and indenting every but the first line on the left.
 *
 * @param {string} str
 * @param {number} width
 * @param {number} indent
 * @return {string}
 * @api private
 */
function wrap(str, width, indent) {
  const regex = new RegExp('.{1,' + (width - 1) + '}([\\s\u200B]|$)|[^\\s\u200B]+?([\\s\u200B]|$)', 'g');
  const lines = str.match(regex) || [];
  return lines.map((line, i) => {
    if (line.slice(-1) === '\n') {
      line = line.slice(0, line.length - 1);
    }
    return ((i > 0 && indent) ? Array(indent + 1).join(' ') : '') + line.trimRight();
  }).join('\n');
}

/**
 * Optionally wrap the given str to a max width of width characters per line
 * while indenting with indent spaces. Do not wrap if insufficient width or
 * string is manually formatted.
 *
 * @param {string} str
 * @param {number} width
 * @param {number} indent
 * @return {string}
 * @api private
 */
function optionalWrap(str, width, indent) {
  // Detect manually wrapped and indented strings by searching for line breaks
  // followed by multiple spaces/tabs.
  if (str.match(/[\n]\s+/)) return str;
  // Do not wrap to narrow columns (or can end up with a word per line).
  const minWidth = 40;
  if (width < minWidth) return str;

  return wrap(str, width, indent);
}

/**
 * Output help information if help flags specified
 *
 * @param {Command} cmd - command to output help for
 * @param {Array} args - array of options to search for help flags
 * @api private
 */

function outputHelpIfRequested(cmd, args) {
  const helpOption = args.find(arg => arg === cmd._helpLongFlag || arg === cmd._helpShortFlag);
  if (helpOption) {
    cmd.outputHelp();
    // (Do not have all displayed text available so only passing placeholder.)
    cmd._exit(0, 'commander.helpDisplayed', '(outputHelp)');
  }
}

/**
 * Takes an argument and returns its human readable equivalent for help usage.
 *
 * @param {Object} arg
 * @return {string}
 * @api private
 */

function humanReadableArgName(arg) {
  const nameOutput = arg.name + (arg.variadic === true ? '...' : '');

  return arg.required
    ? '<' + nameOutput + '>'
    : '[' + nameOutput + ']';
}

/**
 * Scan arguments and increment port number for inspect calls (to avoid conflicts when spawning new command).
 *
 * @param {string[]} args - array of arguments from node.execArgv
 * @returns {string[]}
 * @api private
 */

function incrementNodeInspectorPort(args) {
  // Testing for these options:
  //  --inspect[=[host:]port]
  //  --inspect-brk[=[host:]port]
  //  --inspect-port=[host:]port
  return args.map((arg) => {
    let result = arg;
    if (arg.indexOf('--inspect') === 0) {
      let debugOption;
      let debugHost = '127.0.0.1';
      let debugPort = '9229';
      let match;
      if ((match = arg.match(/^(--inspect(-brk)?)$/)) !== null) {
        // e.g. --inspect
        debugOption = match[1];
      } else if ((match = arg.match(/^(--inspect(-brk|-port)?)=([^:]+)$/)) !== null) {
        debugOption = match[1];
        if (/^\d+$/.test(match[3])) {
          // e.g. --inspect=1234
          debugPort = match[3];
        } else {
          // e.g. --inspect=localhost
          debugHost = match[3];
        }
      } else if ((match = arg.match(/^(--inspect(-brk|-port)?)=([^:]+):(\d+)$/)) !== null) {
        // e.g. --inspect=localhost:1234
        debugOption = match[1];
        debugHost = match[3];
        debugPort = match[4];
      }

      if (debugOption && debugPort !== '0') {
        result = `${debugOption}=${debugHost}:${parseInt(debugPort) + 1}`;
      }
    }
    return result;
  });
}

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(84), __webpack_require__(110).Buffer))

/***/ }),
/* 110 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {/*!
 * The buffer module from node.js, for the browser.
 *
 * @author   Feross Aboukhadijeh <http://feross.org>
 * @license  MIT
 */
/* eslint-disable no-proto */



var base64 = __webpack_require__(112)
var ieee754 = __webpack_require__(113)
var isArray = __webpack_require__(114)

exports.Buffer = Buffer
exports.SlowBuffer = SlowBuffer
exports.INSPECT_MAX_BYTES = 50

/**
 * If `Buffer.TYPED_ARRAY_SUPPORT`:
 *   === true    Use Uint8Array implementation (fastest)
 *   === false   Use Object implementation (most compatible, even IE6)
 *
 * Browsers that support typed arrays are IE 10+, Firefox 4+, Chrome 7+, Safari 5.1+,
 * Opera 11.6+, iOS 4.2+.
 *
 * Due to various browser bugs, sometimes the Object implementation will be used even
 * when the browser supports typed arrays.
 *
 * Note:
 *
 *   - Firefox 4-29 lacks support for adding new properties to `Uint8Array` instances,
 *     See: https://bugzilla.mozilla.org/show_bug.cgi?id=695438.
 *
 *   - Chrome 9-10 is missing the `TypedArray.prototype.subarray` function.
 *
 *   - IE10 has a broken `TypedArray.prototype.subarray` function which returns arrays of
 *     incorrect length in some situations.

 * We detect these buggy browsers and set `Buffer.TYPED_ARRAY_SUPPORT` to `false` so they
 * get the Object implementation, which is slower but behaves correctly.
 */
Buffer.TYPED_ARRAY_SUPPORT = global.TYPED_ARRAY_SUPPORT !== undefined
  ? global.TYPED_ARRAY_SUPPORT
  : typedArraySupport()

/*
 * Export kMaxLength after typed array support is determined.
 */
exports.kMaxLength = kMaxLength()

function typedArraySupport () {
  try {
    var arr = new Uint8Array(1)
    arr.__proto__ = {__proto__: Uint8Array.prototype, foo: function () { return 42 }}
    return arr.foo() === 42 && // typed array instances can be augmented
        typeof arr.subarray === 'function' && // chrome 9-10 lack `subarray`
        arr.subarray(1, 1).byteLength === 0 // ie10 has broken `subarray`
  } catch (e) {
    return false
  }
}

function kMaxLength () {
  return Buffer.TYPED_ARRAY_SUPPORT
    ? 0x7fffffff
    : 0x3fffffff
}

function createBuffer (that, length) {
  if (kMaxLength() < length) {
    throw new RangeError('Invalid typed array length')
  }
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    // Return an augmented `Uint8Array` instance, for best performance
    that = new Uint8Array(length)
    that.__proto__ = Buffer.prototype
  } else {
    // Fallback: Return an object instance of the Buffer class
    if (that === null) {
      that = new Buffer(length)
    }
    that.length = length
  }

  return that
}

/**
 * The Buffer constructor returns instances of `Uint8Array` that have their
 * prototype changed to `Buffer.prototype`. Furthermore, `Buffer` is a subclass of
 * `Uint8Array`, so the returned instances will have all the node `Buffer` methods
 * and the `Uint8Array` methods. Square bracket notation works as expected -- it
 * returns a single octet.
 *
 * The `Uint8Array` prototype remains unmodified.
 */

function Buffer (arg, encodingOrOffset, length) {
  if (!Buffer.TYPED_ARRAY_SUPPORT && !(this instanceof Buffer)) {
    return new Buffer(arg, encodingOrOffset, length)
  }

  // Common case.
  if (typeof arg === 'number') {
    if (typeof encodingOrOffset === 'string') {
      throw new Error(
        'If encoding is specified then the first argument must be a string'
      )
    }
    return allocUnsafe(this, arg)
  }
  return from(this, arg, encodingOrOffset, length)
}

Buffer.poolSize = 8192 // not used by this implementation

// TODO: Legacy, not needed anymore. Remove in next major version.
Buffer._augment = function (arr) {
  arr.__proto__ = Buffer.prototype
  return arr
}

function from (that, value, encodingOrOffset, length) {
  if (typeof value === 'number') {
    throw new TypeError('"value" argument must not be a number')
  }

  if (typeof ArrayBuffer !== 'undefined' && value instanceof ArrayBuffer) {
    return fromArrayBuffer(that, value, encodingOrOffset, length)
  }

  if (typeof value === 'string') {
    return fromString(that, value, encodingOrOffset)
  }

  return fromObject(that, value)
}

/**
 * Functionally equivalent to Buffer(arg, encoding) but throws a TypeError
 * if value is a number.
 * Buffer.from(str[, encoding])
 * Buffer.from(array)
 * Buffer.from(buffer)
 * Buffer.from(arrayBuffer[, byteOffset[, length]])
 **/
Buffer.from = function (value, encodingOrOffset, length) {
  return from(null, value, encodingOrOffset, length)
}

if (Buffer.TYPED_ARRAY_SUPPORT) {
  Buffer.prototype.__proto__ = Uint8Array.prototype
  Buffer.__proto__ = Uint8Array
  if (typeof Symbol !== 'undefined' && Symbol.species &&
      Buffer[Symbol.species] === Buffer) {
    // Fix subarray() in ES2016. See: https://github.com/feross/buffer/pull/97
    Object.defineProperty(Buffer, Symbol.species, {
      value: null,
      configurable: true
    })
  }
}

function assertSize (size) {
  if (typeof size !== 'number') {
    throw new TypeError('"size" argument must be a number')
  } else if (size < 0) {
    throw new RangeError('"size" argument must not be negative')
  }
}

function alloc (that, size, fill, encoding) {
  assertSize(size)
  if (size <= 0) {
    return createBuffer(that, size)
  }
  if (fill !== undefined) {
    // Only pay attention to encoding if it's a string. This
    // prevents accidentally sending in a number that would
    // be interpretted as a start offset.
    return typeof encoding === 'string'
      ? createBuffer(that, size).fill(fill, encoding)
      : createBuffer(that, size).fill(fill)
  }
  return createBuffer(that, size)
}

/**
 * Creates a new filled Buffer instance.
 * alloc(size[, fill[, encoding]])
 **/
Buffer.alloc = function (size, fill, encoding) {
  return alloc(null, size, fill, encoding)
}

function allocUnsafe (that, size) {
  assertSize(size)
  that = createBuffer(that, size < 0 ? 0 : checked(size) | 0)
  if (!Buffer.TYPED_ARRAY_SUPPORT) {
    for (var i = 0; i < size; ++i) {
      that[i] = 0
    }
  }
  return that
}

/**
 * Equivalent to Buffer(num), by default creates a non-zero-filled Buffer instance.
 * */
Buffer.allocUnsafe = function (size) {
  return allocUnsafe(null, size)
}
/**
 * Equivalent to SlowBuffer(num), by default creates a non-zero-filled Buffer instance.
 */
Buffer.allocUnsafeSlow = function (size) {
  return allocUnsafe(null, size)
}

function fromString (that, string, encoding) {
  if (typeof encoding !== 'string' || encoding === '') {
    encoding = 'utf8'
  }

  if (!Buffer.isEncoding(encoding)) {
    throw new TypeError('"encoding" must be a valid string encoding')
  }

  var length = byteLength(string, encoding) | 0
  that = createBuffer(that, length)

  var actual = that.write(string, encoding)

  if (actual !== length) {
    // Writing a hex string, for example, that contains invalid characters will
    // cause everything after the first invalid character to be ignored. (e.g.
    // 'abxxcd' will be treated as 'ab')
    that = that.slice(0, actual)
  }

  return that
}

function fromArrayLike (that, array) {
  var length = array.length < 0 ? 0 : checked(array.length) | 0
  that = createBuffer(that, length)
  for (var i = 0; i < length; i += 1) {
    that[i] = array[i] & 255
  }
  return that
}

function fromArrayBuffer (that, array, byteOffset, length) {
  array.byteLength // this throws if `array` is not a valid ArrayBuffer

  if (byteOffset < 0 || array.byteLength < byteOffset) {
    throw new RangeError('\'offset\' is out of bounds')
  }

  if (array.byteLength < byteOffset + (length || 0)) {
    throw new RangeError('\'length\' is out of bounds')
  }

  if (byteOffset === undefined && length === undefined) {
    array = new Uint8Array(array)
  } else if (length === undefined) {
    array = new Uint8Array(array, byteOffset)
  } else {
    array = new Uint8Array(array, byteOffset, length)
  }

  if (Buffer.TYPED_ARRAY_SUPPORT) {
    // Return an augmented `Uint8Array` instance, for best performance
    that = array
    that.__proto__ = Buffer.prototype
  } else {
    // Fallback: Return an object instance of the Buffer class
    that = fromArrayLike(that, array)
  }
  return that
}

function fromObject (that, obj) {
  if (Buffer.isBuffer(obj)) {
    var len = checked(obj.length) | 0
    that = createBuffer(that, len)

    if (that.length === 0) {
      return that
    }

    obj.copy(that, 0, 0, len)
    return that
  }

  if (obj) {
    if ((typeof ArrayBuffer !== 'undefined' &&
        obj.buffer instanceof ArrayBuffer) || 'length' in obj) {
      if (typeof obj.length !== 'number' || isnan(obj.length)) {
        return createBuffer(that, 0)
      }
      return fromArrayLike(that, obj)
    }

    if (obj.type === 'Buffer' && isArray(obj.data)) {
      return fromArrayLike(that, obj.data)
    }
  }

  throw new TypeError('First argument must be a string, Buffer, ArrayBuffer, Array, or array-like object.')
}

function checked (length) {
  // Note: cannot use `length < kMaxLength()` here because that fails when
  // length is NaN (which is otherwise coerced to zero.)
  if (length >= kMaxLength()) {
    throw new RangeError('Attempt to allocate Buffer larger than maximum ' +
                         'size: 0x' + kMaxLength().toString(16) + ' bytes')
  }
  return length | 0
}

function SlowBuffer (length) {
  if (+length != length) { // eslint-disable-line eqeqeq
    length = 0
  }
  return Buffer.alloc(+length)
}

Buffer.isBuffer = function isBuffer (b) {
  return !!(b != null && b._isBuffer)
}

Buffer.compare = function compare (a, b) {
  if (!Buffer.isBuffer(a) || !Buffer.isBuffer(b)) {
    throw new TypeError('Arguments must be Buffers')
  }

  if (a === b) return 0

  var x = a.length
  var y = b.length

  for (var i = 0, len = Math.min(x, y); i < len; ++i) {
    if (a[i] !== b[i]) {
      x = a[i]
      y = b[i]
      break
    }
  }

  if (x < y) return -1
  if (y < x) return 1
  return 0
}

Buffer.isEncoding = function isEncoding (encoding) {
  switch (String(encoding).toLowerCase()) {
    case 'hex':
    case 'utf8':
    case 'utf-8':
    case 'ascii':
    case 'latin1':
    case 'binary':
    case 'base64':
    case 'ucs2':
    case 'ucs-2':
    case 'utf16le':
    case 'utf-16le':
      return true
    default:
      return false
  }
}

Buffer.concat = function concat (list, length) {
  if (!isArray(list)) {
    throw new TypeError('"list" argument must be an Array of Buffers')
  }

  if (list.length === 0) {
    return Buffer.alloc(0)
  }

  var i
  if (length === undefined) {
    length = 0
    for (i = 0; i < list.length; ++i) {
      length += list[i].length
    }
  }

  var buffer = Buffer.allocUnsafe(length)
  var pos = 0
  for (i = 0; i < list.length; ++i) {
    var buf = list[i]
    if (!Buffer.isBuffer(buf)) {
      throw new TypeError('"list" argument must be an Array of Buffers')
    }
    buf.copy(buffer, pos)
    pos += buf.length
  }
  return buffer
}

function byteLength (string, encoding) {
  if (Buffer.isBuffer(string)) {
    return string.length
  }
  if (typeof ArrayBuffer !== 'undefined' && typeof ArrayBuffer.isView === 'function' &&
      (ArrayBuffer.isView(string) || string instanceof ArrayBuffer)) {
    return string.byteLength
  }
  if (typeof string !== 'string') {
    string = '' + string
  }

  var len = string.length
  if (len === 0) return 0

  // Use a for loop to avoid recursion
  var loweredCase = false
  for (;;) {
    switch (encoding) {
      case 'ascii':
      case 'latin1':
      case 'binary':
        return len
      case 'utf8':
      case 'utf-8':
      case undefined:
        return utf8ToBytes(string).length
      case 'ucs2':
      case 'ucs-2':
      case 'utf16le':
      case 'utf-16le':
        return len * 2
      case 'hex':
        return len >>> 1
      case 'base64':
        return base64ToBytes(string).length
      default:
        if (loweredCase) return utf8ToBytes(string).length // assume utf8
        encoding = ('' + encoding).toLowerCase()
        loweredCase = true
    }
  }
}
Buffer.byteLength = byteLength

function slowToString (encoding, start, end) {
  var loweredCase = false

  // No need to verify that "this.length <= MAX_UINT32" since it's a read-only
  // property of a typed array.

  // This behaves neither like String nor Uint8Array in that we set start/end
  // to their upper/lower bounds if the value passed is out of range.
  // undefined is handled specially as per ECMA-262 6th Edition,
  // Section 13.3.3.7 Runtime Semantics: KeyedBindingInitialization.
  if (start === undefined || start < 0) {
    start = 0
  }
  // Return early if start > this.length. Done here to prevent potential uint32
  // coercion fail below.
  if (start > this.length) {
    return ''
  }

  if (end === undefined || end > this.length) {
    end = this.length
  }

  if (end <= 0) {
    return ''
  }

  // Force coersion to uint32. This will also coerce falsey/NaN values to 0.
  end >>>= 0
  start >>>= 0

  if (end <= start) {
    return ''
  }

  if (!encoding) encoding = 'utf8'

  while (true) {
    switch (encoding) {
      case 'hex':
        return hexSlice(this, start, end)

      case 'utf8':
      case 'utf-8':
        return utf8Slice(this, start, end)

      case 'ascii':
        return asciiSlice(this, start, end)

      case 'latin1':
      case 'binary':
        return latin1Slice(this, start, end)

      case 'base64':
        return base64Slice(this, start, end)

      case 'ucs2':
      case 'ucs-2':
      case 'utf16le':
      case 'utf-16le':
        return utf16leSlice(this, start, end)

      default:
        if (loweredCase) throw new TypeError('Unknown encoding: ' + encoding)
        encoding = (encoding + '').toLowerCase()
        loweredCase = true
    }
  }
}

// The property is used by `Buffer.isBuffer` and `is-buffer` (in Safari 5-7) to detect
// Buffer instances.
Buffer.prototype._isBuffer = true

function swap (b, n, m) {
  var i = b[n]
  b[n] = b[m]
  b[m] = i
}

Buffer.prototype.swap16 = function swap16 () {
  var len = this.length
  if (len % 2 !== 0) {
    throw new RangeError('Buffer size must be a multiple of 16-bits')
  }
  for (var i = 0; i < len; i += 2) {
    swap(this, i, i + 1)
  }
  return this
}

Buffer.prototype.swap32 = function swap32 () {
  var len = this.length
  if (len % 4 !== 0) {
    throw new RangeError('Buffer size must be a multiple of 32-bits')
  }
  for (var i = 0; i < len; i += 4) {
    swap(this, i, i + 3)
    swap(this, i + 1, i + 2)
  }
  return this
}

Buffer.prototype.swap64 = function swap64 () {
  var len = this.length
  if (len % 8 !== 0) {
    throw new RangeError('Buffer size must be a multiple of 64-bits')
  }
  for (var i = 0; i < len; i += 8) {
    swap(this, i, i + 7)
    swap(this, i + 1, i + 6)
    swap(this, i + 2, i + 5)
    swap(this, i + 3, i + 4)
  }
  return this
}

Buffer.prototype.toString = function toString () {
  var length = this.length | 0
  if (length === 0) return ''
  if (arguments.length === 0) return utf8Slice(this, 0, length)
  return slowToString.apply(this, arguments)
}

Buffer.prototype.equals = function equals (b) {
  if (!Buffer.isBuffer(b)) throw new TypeError('Argument must be a Buffer')
  if (this === b) return true
  return Buffer.compare(this, b) === 0
}

Buffer.prototype.inspect = function inspect () {
  var str = ''
  var max = exports.INSPECT_MAX_BYTES
  if (this.length > 0) {
    str = this.toString('hex', 0, max).match(/.{2}/g).join(' ')
    if (this.length > max) str += ' ... '
  }
  return '<Buffer ' + str + '>'
}

Buffer.prototype.compare = function compare (target, start, end, thisStart, thisEnd) {
  if (!Buffer.isBuffer(target)) {
    throw new TypeError('Argument must be a Buffer')
  }

  if (start === undefined) {
    start = 0
  }
  if (end === undefined) {
    end = target ? target.length : 0
  }
  if (thisStart === undefined) {
    thisStart = 0
  }
  if (thisEnd === undefined) {
    thisEnd = this.length
  }

  if (start < 0 || end > target.length || thisStart < 0 || thisEnd > this.length) {
    throw new RangeError('out of range index')
  }

  if (thisStart >= thisEnd && start >= end) {
    return 0
  }
  if (thisStart >= thisEnd) {
    return -1
  }
  if (start >= end) {
    return 1
  }

  start >>>= 0
  end >>>= 0
  thisStart >>>= 0
  thisEnd >>>= 0

  if (this === target) return 0

  var x = thisEnd - thisStart
  var y = end - start
  var len = Math.min(x, y)

  var thisCopy = this.slice(thisStart, thisEnd)
  var targetCopy = target.slice(start, end)

  for (var i = 0; i < len; ++i) {
    if (thisCopy[i] !== targetCopy[i]) {
      x = thisCopy[i]
      y = targetCopy[i]
      break
    }
  }

  if (x < y) return -1
  if (y < x) return 1
  return 0
}

// Finds either the first index of `val` in `buffer` at offset >= `byteOffset`,
// OR the last index of `val` in `buffer` at offset <= `byteOffset`.
//
// Arguments:
// - buffer - a Buffer to search
// - val - a string, Buffer, or number
// - byteOffset - an index into `buffer`; will be clamped to an int32
// - encoding - an optional encoding, relevant is val is a string
// - dir - true for indexOf, false for lastIndexOf
function bidirectionalIndexOf (buffer, val, byteOffset, encoding, dir) {
  // Empty buffer means no match
  if (buffer.length === 0) return -1

  // Normalize byteOffset
  if (typeof byteOffset === 'string') {
    encoding = byteOffset
    byteOffset = 0
  } else if (byteOffset > 0x7fffffff) {
    byteOffset = 0x7fffffff
  } else if (byteOffset < -0x80000000) {
    byteOffset = -0x80000000
  }
  byteOffset = +byteOffset  // Coerce to Number.
  if (isNaN(byteOffset)) {
    // byteOffset: it it's undefined, null, NaN, "foo", etc, search whole buffer
    byteOffset = dir ? 0 : (buffer.length - 1)
  }

  // Normalize byteOffset: negative offsets start from the end of the buffer
  if (byteOffset < 0) byteOffset = buffer.length + byteOffset
  if (byteOffset >= buffer.length) {
    if (dir) return -1
    else byteOffset = buffer.length - 1
  } else if (byteOffset < 0) {
    if (dir) byteOffset = 0
    else return -1
  }

  // Normalize val
  if (typeof val === 'string') {
    val = Buffer.from(val, encoding)
  }

  // Finally, search either indexOf (if dir is true) or lastIndexOf
  if (Buffer.isBuffer(val)) {
    // Special case: looking for empty string/buffer always fails
    if (val.length === 0) {
      return -1
    }
    return arrayIndexOf(buffer, val, byteOffset, encoding, dir)
  } else if (typeof val === 'number') {
    val = val & 0xFF // Search for a byte value [0-255]
    if (Buffer.TYPED_ARRAY_SUPPORT &&
        typeof Uint8Array.prototype.indexOf === 'function') {
      if (dir) {
        return Uint8Array.prototype.indexOf.call(buffer, val, byteOffset)
      } else {
        return Uint8Array.prototype.lastIndexOf.call(buffer, val, byteOffset)
      }
    }
    return arrayIndexOf(buffer, [ val ], byteOffset, encoding, dir)
  }

  throw new TypeError('val must be string, number or Buffer')
}

function arrayIndexOf (arr, val, byteOffset, encoding, dir) {
  var indexSize = 1
  var arrLength = arr.length
  var valLength = val.length

  if (encoding !== undefined) {
    encoding = String(encoding).toLowerCase()
    if (encoding === 'ucs2' || encoding === 'ucs-2' ||
        encoding === 'utf16le' || encoding === 'utf-16le') {
      if (arr.length < 2 || val.length < 2) {
        return -1
      }
      indexSize = 2
      arrLength /= 2
      valLength /= 2
      byteOffset /= 2
    }
  }

  function read (buf, i) {
    if (indexSize === 1) {
      return buf[i]
    } else {
      return buf.readUInt16BE(i * indexSize)
    }
  }

  var i
  if (dir) {
    var foundIndex = -1
    for (i = byteOffset; i < arrLength; i++) {
      if (read(arr, i) === read(val, foundIndex === -1 ? 0 : i - foundIndex)) {
        if (foundIndex === -1) foundIndex = i
        if (i - foundIndex + 1 === valLength) return foundIndex * indexSize
      } else {
        if (foundIndex !== -1) i -= i - foundIndex
        foundIndex = -1
      }
    }
  } else {
    if (byteOffset + valLength > arrLength) byteOffset = arrLength - valLength
    for (i = byteOffset; i >= 0; i--) {
      var found = true
      for (var j = 0; j < valLength; j++) {
        if (read(arr, i + j) !== read(val, j)) {
          found = false
          break
        }
      }
      if (found) return i
    }
  }

  return -1
}

Buffer.prototype.includes = function includes (val, byteOffset, encoding) {
  return this.indexOf(val, byteOffset, encoding) !== -1
}

Buffer.prototype.indexOf = function indexOf (val, byteOffset, encoding) {
  return bidirectionalIndexOf(this, val, byteOffset, encoding, true)
}

Buffer.prototype.lastIndexOf = function lastIndexOf (val, byteOffset, encoding) {
  return bidirectionalIndexOf(this, val, byteOffset, encoding, false)
}

function hexWrite (buf, string, offset, length) {
  offset = Number(offset) || 0
  var remaining = buf.length - offset
  if (!length) {
    length = remaining
  } else {
    length = Number(length)
    if (length > remaining) {
      length = remaining
    }
  }

  // must be an even number of digits
  var strLen = string.length
  if (strLen % 2 !== 0) throw new TypeError('Invalid hex string')

  if (length > strLen / 2) {
    length = strLen / 2
  }
  for (var i = 0; i < length; ++i) {
    var parsed = parseInt(string.substr(i * 2, 2), 16)
    if (isNaN(parsed)) return i
    buf[offset + i] = parsed
  }
  return i
}

function utf8Write (buf, string, offset, length) {
  return blitBuffer(utf8ToBytes(string, buf.length - offset), buf, offset, length)
}

function asciiWrite (buf, string, offset, length) {
  return blitBuffer(asciiToBytes(string), buf, offset, length)
}

function latin1Write (buf, string, offset, length) {
  return asciiWrite(buf, string, offset, length)
}

function base64Write (buf, string, offset, length) {
  return blitBuffer(base64ToBytes(string), buf, offset, length)
}

function ucs2Write (buf, string, offset, length) {
  return blitBuffer(utf16leToBytes(string, buf.length - offset), buf, offset, length)
}

Buffer.prototype.write = function write (string, offset, length, encoding) {
  // Buffer#write(string)
  if (offset === undefined) {
    encoding = 'utf8'
    length = this.length
    offset = 0
  // Buffer#write(string, encoding)
  } else if (length === undefined && typeof offset === 'string') {
    encoding = offset
    length = this.length
    offset = 0
  // Buffer#write(string, offset[, length][, encoding])
  } else if (isFinite(offset)) {
    offset = offset | 0
    if (isFinite(length)) {
      length = length | 0
      if (encoding === undefined) encoding = 'utf8'
    } else {
      encoding = length
      length = undefined
    }
  // legacy write(string, encoding, offset, length) - remove in v0.13
  } else {
    throw new Error(
      'Buffer.write(string, encoding, offset[, length]) is no longer supported'
    )
  }

  var remaining = this.length - offset
  if (length === undefined || length > remaining) length = remaining

  if ((string.length > 0 && (length < 0 || offset < 0)) || offset > this.length) {
    throw new RangeError('Attempt to write outside buffer bounds')
  }

  if (!encoding) encoding = 'utf8'

  var loweredCase = false
  for (;;) {
    switch (encoding) {
      case 'hex':
        return hexWrite(this, string, offset, length)

      case 'utf8':
      case 'utf-8':
        return utf8Write(this, string, offset, length)

      case 'ascii':
        return asciiWrite(this, string, offset, length)

      case 'latin1':
      case 'binary':
        return latin1Write(this, string, offset, length)

      case 'base64':
        // Warning: maxLength not taken into account in base64Write
        return base64Write(this, string, offset, length)

      case 'ucs2':
      case 'ucs-2':
      case 'utf16le':
      case 'utf-16le':
        return ucs2Write(this, string, offset, length)

      default:
        if (loweredCase) throw new TypeError('Unknown encoding: ' + encoding)
        encoding = ('' + encoding).toLowerCase()
        loweredCase = true
    }
  }
}

Buffer.prototype.toJSON = function toJSON () {
  return {
    type: 'Buffer',
    data: Array.prototype.slice.call(this._arr || this, 0)
  }
}

function base64Slice (buf, start, end) {
  if (start === 0 && end === buf.length) {
    return base64.fromByteArray(buf)
  } else {
    return base64.fromByteArray(buf.slice(start, end))
  }
}

function utf8Slice (buf, start, end) {
  end = Math.min(buf.length, end)
  var res = []

  var i = start
  while (i < end) {
    var firstByte = buf[i]
    var codePoint = null
    var bytesPerSequence = (firstByte > 0xEF) ? 4
      : (firstByte > 0xDF) ? 3
      : (firstByte > 0xBF) ? 2
      : 1

    if (i + bytesPerSequence <= end) {
      var secondByte, thirdByte, fourthByte, tempCodePoint

      switch (bytesPerSequence) {
        case 1:
          if (firstByte < 0x80) {
            codePoint = firstByte
          }
          break
        case 2:
          secondByte = buf[i + 1]
          if ((secondByte & 0xC0) === 0x80) {
            tempCodePoint = (firstByte & 0x1F) << 0x6 | (secondByte & 0x3F)
            if (tempCodePoint > 0x7F) {
              codePoint = tempCodePoint
            }
          }
          break
        case 3:
          secondByte = buf[i + 1]
          thirdByte = buf[i + 2]
          if ((secondByte & 0xC0) === 0x80 && (thirdByte & 0xC0) === 0x80) {
            tempCodePoint = (firstByte & 0xF) << 0xC | (secondByte & 0x3F) << 0x6 | (thirdByte & 0x3F)
            if (tempCodePoint > 0x7FF && (tempCodePoint < 0xD800 || tempCodePoint > 0xDFFF)) {
              codePoint = tempCodePoint
            }
          }
          break
        case 4:
          secondByte = buf[i + 1]
          thirdByte = buf[i + 2]
          fourthByte = buf[i + 3]
          if ((secondByte & 0xC0) === 0x80 && (thirdByte & 0xC0) === 0x80 && (fourthByte & 0xC0) === 0x80) {
            tempCodePoint = (firstByte & 0xF) << 0x12 | (secondByte & 0x3F) << 0xC | (thirdByte & 0x3F) << 0x6 | (fourthByte & 0x3F)
            if (tempCodePoint > 0xFFFF && tempCodePoint < 0x110000) {
              codePoint = tempCodePoint
            }
          }
      }
    }

    if (codePoint === null) {
      // we did not generate a valid codePoint so insert a
      // replacement char (U+FFFD) and advance only 1 byte
      codePoint = 0xFFFD
      bytesPerSequence = 1
    } else if (codePoint > 0xFFFF) {
      // encode to utf16 (surrogate pair dance)
      codePoint -= 0x10000
      res.push(codePoint >>> 10 & 0x3FF | 0xD800)
      codePoint = 0xDC00 | codePoint & 0x3FF
    }

    res.push(codePoint)
    i += bytesPerSequence
  }

  return decodeCodePointsArray(res)
}

// Based on http://stackoverflow.com/a/22747272/680742, the browser with
// the lowest limit is Chrome, with 0x10000 args.
// We go 1 magnitude less, for safety
var MAX_ARGUMENTS_LENGTH = 0x1000

function decodeCodePointsArray (codePoints) {
  var len = codePoints.length
  if (len <= MAX_ARGUMENTS_LENGTH) {
    return String.fromCharCode.apply(String, codePoints) // avoid extra slice()
  }

  // Decode in chunks to avoid "call stack size exceeded".
  var res = ''
  var i = 0
  while (i < len) {
    res += String.fromCharCode.apply(
      String,
      codePoints.slice(i, i += MAX_ARGUMENTS_LENGTH)
    )
  }
  return res
}

function asciiSlice (buf, start, end) {
  var ret = ''
  end = Math.min(buf.length, end)

  for (var i = start; i < end; ++i) {
    ret += String.fromCharCode(buf[i] & 0x7F)
  }
  return ret
}

function latin1Slice (buf, start, end) {
  var ret = ''
  end = Math.min(buf.length, end)

  for (var i = start; i < end; ++i) {
    ret += String.fromCharCode(buf[i])
  }
  return ret
}

function hexSlice (buf, start, end) {
  var len = buf.length

  if (!start || start < 0) start = 0
  if (!end || end < 0 || end > len) end = len

  var out = ''
  for (var i = start; i < end; ++i) {
    out += toHex(buf[i])
  }
  return out
}

function utf16leSlice (buf, start, end) {
  var bytes = buf.slice(start, end)
  var res = ''
  for (var i = 0; i < bytes.length; i += 2) {
    res += String.fromCharCode(bytes[i] + bytes[i + 1] * 256)
  }
  return res
}

Buffer.prototype.slice = function slice (start, end) {
  var len = this.length
  start = ~~start
  end = end === undefined ? len : ~~end

  if (start < 0) {
    start += len
    if (start < 0) start = 0
  } else if (start > len) {
    start = len
  }

  if (end < 0) {
    end += len
    if (end < 0) end = 0
  } else if (end > len) {
    end = len
  }

  if (end < start) end = start

  var newBuf
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    newBuf = this.subarray(start, end)
    newBuf.__proto__ = Buffer.prototype
  } else {
    var sliceLen = end - start
    newBuf = new Buffer(sliceLen, undefined)
    for (var i = 0; i < sliceLen; ++i) {
      newBuf[i] = this[i + start]
    }
  }

  return newBuf
}

/*
 * Need to make sure that buffer isn't trying to write out of bounds.
 */
function checkOffset (offset, ext, length) {
  if ((offset % 1) !== 0 || offset < 0) throw new RangeError('offset is not uint')
  if (offset + ext > length) throw new RangeError('Trying to access beyond buffer length')
}

Buffer.prototype.readUIntLE = function readUIntLE (offset, byteLength, noAssert) {
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) checkOffset(offset, byteLength, this.length)

  var val = this[offset]
  var mul = 1
  var i = 0
  while (++i < byteLength && (mul *= 0x100)) {
    val += this[offset + i] * mul
  }

  return val
}

Buffer.prototype.readUIntBE = function readUIntBE (offset, byteLength, noAssert) {
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) {
    checkOffset(offset, byteLength, this.length)
  }

  var val = this[offset + --byteLength]
  var mul = 1
  while (byteLength > 0 && (mul *= 0x100)) {
    val += this[offset + --byteLength] * mul
  }

  return val
}

Buffer.prototype.readUInt8 = function readUInt8 (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 1, this.length)
  return this[offset]
}

Buffer.prototype.readUInt16LE = function readUInt16LE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 2, this.length)
  return this[offset] | (this[offset + 1] << 8)
}

Buffer.prototype.readUInt16BE = function readUInt16BE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 2, this.length)
  return (this[offset] << 8) | this[offset + 1]
}

Buffer.prototype.readUInt32LE = function readUInt32LE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)

  return ((this[offset]) |
      (this[offset + 1] << 8) |
      (this[offset + 2] << 16)) +
      (this[offset + 3] * 0x1000000)
}

Buffer.prototype.readUInt32BE = function readUInt32BE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)

  return (this[offset] * 0x1000000) +
    ((this[offset + 1] << 16) |
    (this[offset + 2] << 8) |
    this[offset + 3])
}

Buffer.prototype.readIntLE = function readIntLE (offset, byteLength, noAssert) {
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) checkOffset(offset, byteLength, this.length)

  var val = this[offset]
  var mul = 1
  var i = 0
  while (++i < byteLength && (mul *= 0x100)) {
    val += this[offset + i] * mul
  }
  mul *= 0x80

  if (val >= mul) val -= Math.pow(2, 8 * byteLength)

  return val
}

Buffer.prototype.readIntBE = function readIntBE (offset, byteLength, noAssert) {
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) checkOffset(offset, byteLength, this.length)

  var i = byteLength
  var mul = 1
  var val = this[offset + --i]
  while (i > 0 && (mul *= 0x100)) {
    val += this[offset + --i] * mul
  }
  mul *= 0x80

  if (val >= mul) val -= Math.pow(2, 8 * byteLength)

  return val
}

Buffer.prototype.readInt8 = function readInt8 (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 1, this.length)
  if (!(this[offset] & 0x80)) return (this[offset])
  return ((0xff - this[offset] + 1) * -1)
}

Buffer.prototype.readInt16LE = function readInt16LE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 2, this.length)
  var val = this[offset] | (this[offset + 1] << 8)
  return (val & 0x8000) ? val | 0xFFFF0000 : val
}

Buffer.prototype.readInt16BE = function readInt16BE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 2, this.length)
  var val = this[offset + 1] | (this[offset] << 8)
  return (val & 0x8000) ? val | 0xFFFF0000 : val
}

Buffer.prototype.readInt32LE = function readInt32LE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)

  return (this[offset]) |
    (this[offset + 1] << 8) |
    (this[offset + 2] << 16) |
    (this[offset + 3] << 24)
}

Buffer.prototype.readInt32BE = function readInt32BE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)

  return (this[offset] << 24) |
    (this[offset + 1] << 16) |
    (this[offset + 2] << 8) |
    (this[offset + 3])
}

Buffer.prototype.readFloatLE = function readFloatLE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)
  return ieee754.read(this, offset, true, 23, 4)
}

Buffer.prototype.readFloatBE = function readFloatBE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)
  return ieee754.read(this, offset, false, 23, 4)
}

Buffer.prototype.readDoubleLE = function readDoubleLE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 8, this.length)
  return ieee754.read(this, offset, true, 52, 8)
}

Buffer.prototype.readDoubleBE = function readDoubleBE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 8, this.length)
  return ieee754.read(this, offset, false, 52, 8)
}

function checkInt (buf, value, offset, ext, max, min) {
  if (!Buffer.isBuffer(buf)) throw new TypeError('"buffer" argument must be a Buffer instance')
  if (value > max || value < min) throw new RangeError('"value" argument is out of bounds')
  if (offset + ext > buf.length) throw new RangeError('Index out of range')
}

Buffer.prototype.writeUIntLE = function writeUIntLE (value, offset, byteLength, noAssert) {
  value = +value
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) {
    var maxBytes = Math.pow(2, 8 * byteLength) - 1
    checkInt(this, value, offset, byteLength, maxBytes, 0)
  }

  var mul = 1
  var i = 0
  this[offset] = value & 0xFF
  while (++i < byteLength && (mul *= 0x100)) {
    this[offset + i] = (value / mul) & 0xFF
  }

  return offset + byteLength
}

Buffer.prototype.writeUIntBE = function writeUIntBE (value, offset, byteLength, noAssert) {
  value = +value
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) {
    var maxBytes = Math.pow(2, 8 * byteLength) - 1
    checkInt(this, value, offset, byteLength, maxBytes, 0)
  }

  var i = byteLength - 1
  var mul = 1
  this[offset + i] = value & 0xFF
  while (--i >= 0 && (mul *= 0x100)) {
    this[offset + i] = (value / mul) & 0xFF
  }

  return offset + byteLength
}

Buffer.prototype.writeUInt8 = function writeUInt8 (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 1, 0xff, 0)
  if (!Buffer.TYPED_ARRAY_SUPPORT) value = Math.floor(value)
  this[offset] = (value & 0xff)
  return offset + 1
}

function objectWriteUInt16 (buf, value, offset, littleEndian) {
  if (value < 0) value = 0xffff + value + 1
  for (var i = 0, j = Math.min(buf.length - offset, 2); i < j; ++i) {
    buf[offset + i] = (value & (0xff << (8 * (littleEndian ? i : 1 - i)))) >>>
      (littleEndian ? i : 1 - i) * 8
  }
}

Buffer.prototype.writeUInt16LE = function writeUInt16LE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 2, 0xffff, 0)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value & 0xff)
    this[offset + 1] = (value >>> 8)
  } else {
    objectWriteUInt16(this, value, offset, true)
  }
  return offset + 2
}

Buffer.prototype.writeUInt16BE = function writeUInt16BE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 2, 0xffff, 0)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value >>> 8)
    this[offset + 1] = (value & 0xff)
  } else {
    objectWriteUInt16(this, value, offset, false)
  }
  return offset + 2
}

function objectWriteUInt32 (buf, value, offset, littleEndian) {
  if (value < 0) value = 0xffffffff + value + 1
  for (var i = 0, j = Math.min(buf.length - offset, 4); i < j; ++i) {
    buf[offset + i] = (value >>> (littleEndian ? i : 3 - i) * 8) & 0xff
  }
}

Buffer.prototype.writeUInt32LE = function writeUInt32LE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 4, 0xffffffff, 0)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset + 3] = (value >>> 24)
    this[offset + 2] = (value >>> 16)
    this[offset + 1] = (value >>> 8)
    this[offset] = (value & 0xff)
  } else {
    objectWriteUInt32(this, value, offset, true)
  }
  return offset + 4
}

Buffer.prototype.writeUInt32BE = function writeUInt32BE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 4, 0xffffffff, 0)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value >>> 24)
    this[offset + 1] = (value >>> 16)
    this[offset + 2] = (value >>> 8)
    this[offset + 3] = (value & 0xff)
  } else {
    objectWriteUInt32(this, value, offset, false)
  }
  return offset + 4
}

Buffer.prototype.writeIntLE = function writeIntLE (value, offset, byteLength, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) {
    var limit = Math.pow(2, 8 * byteLength - 1)

    checkInt(this, value, offset, byteLength, limit - 1, -limit)
  }

  var i = 0
  var mul = 1
  var sub = 0
  this[offset] = value & 0xFF
  while (++i < byteLength && (mul *= 0x100)) {
    if (value < 0 && sub === 0 && this[offset + i - 1] !== 0) {
      sub = 1
    }
    this[offset + i] = ((value / mul) >> 0) - sub & 0xFF
  }

  return offset + byteLength
}

Buffer.prototype.writeIntBE = function writeIntBE (value, offset, byteLength, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) {
    var limit = Math.pow(2, 8 * byteLength - 1)

    checkInt(this, value, offset, byteLength, limit - 1, -limit)
  }

  var i = byteLength - 1
  var mul = 1
  var sub = 0
  this[offset + i] = value & 0xFF
  while (--i >= 0 && (mul *= 0x100)) {
    if (value < 0 && sub === 0 && this[offset + i + 1] !== 0) {
      sub = 1
    }
    this[offset + i] = ((value / mul) >> 0) - sub & 0xFF
  }

  return offset + byteLength
}

Buffer.prototype.writeInt8 = function writeInt8 (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 1, 0x7f, -0x80)
  if (!Buffer.TYPED_ARRAY_SUPPORT) value = Math.floor(value)
  if (value < 0) value = 0xff + value + 1
  this[offset] = (value & 0xff)
  return offset + 1
}

Buffer.prototype.writeInt16LE = function writeInt16LE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 2, 0x7fff, -0x8000)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value & 0xff)
    this[offset + 1] = (value >>> 8)
  } else {
    objectWriteUInt16(this, value, offset, true)
  }
  return offset + 2
}

Buffer.prototype.writeInt16BE = function writeInt16BE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 2, 0x7fff, -0x8000)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value >>> 8)
    this[offset + 1] = (value & 0xff)
  } else {
    objectWriteUInt16(this, value, offset, false)
  }
  return offset + 2
}

Buffer.prototype.writeInt32LE = function writeInt32LE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 4, 0x7fffffff, -0x80000000)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value & 0xff)
    this[offset + 1] = (value >>> 8)
    this[offset + 2] = (value >>> 16)
    this[offset + 3] = (value >>> 24)
  } else {
    objectWriteUInt32(this, value, offset, true)
  }
  return offset + 4
}

Buffer.prototype.writeInt32BE = function writeInt32BE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 4, 0x7fffffff, -0x80000000)
  if (value < 0) value = 0xffffffff + value + 1
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value >>> 24)
    this[offset + 1] = (value >>> 16)
    this[offset + 2] = (value >>> 8)
    this[offset + 3] = (value & 0xff)
  } else {
    objectWriteUInt32(this, value, offset, false)
  }
  return offset + 4
}

function checkIEEE754 (buf, value, offset, ext, max, min) {
  if (offset + ext > buf.length) throw new RangeError('Index out of range')
  if (offset < 0) throw new RangeError('Index out of range')
}

function writeFloat (buf, value, offset, littleEndian, noAssert) {
  if (!noAssert) {
    checkIEEE754(buf, value, offset, 4, 3.4028234663852886e+38, -3.4028234663852886e+38)
  }
  ieee754.write(buf, value, offset, littleEndian, 23, 4)
  return offset + 4
}

Buffer.prototype.writeFloatLE = function writeFloatLE (value, offset, noAssert) {
  return writeFloat(this, value, offset, true, noAssert)
}

Buffer.prototype.writeFloatBE = function writeFloatBE (value, offset, noAssert) {
  return writeFloat(this, value, offset, false, noAssert)
}

function writeDouble (buf, value, offset, littleEndian, noAssert) {
  if (!noAssert) {
    checkIEEE754(buf, value, offset, 8, 1.7976931348623157E+308, -1.7976931348623157E+308)
  }
  ieee754.write(buf, value, offset, littleEndian, 52, 8)
  return offset + 8
}

Buffer.prototype.writeDoubleLE = function writeDoubleLE (value, offset, noAssert) {
  return writeDouble(this, value, offset, true, noAssert)
}

Buffer.prototype.writeDoubleBE = function writeDoubleBE (value, offset, noAssert) {
  return writeDouble(this, value, offset, false, noAssert)
}

// copy(targetBuffer, targetStart=0, sourceStart=0, sourceEnd=buffer.length)
Buffer.prototype.copy = function copy (target, targetStart, start, end) {
  if (!start) start = 0
  if (!end && end !== 0) end = this.length
  if (targetStart >= target.length) targetStart = target.length
  if (!targetStart) targetStart = 0
  if (end > 0 && end < start) end = start

  // Copy 0 bytes; we're done
  if (end === start) return 0
  if (target.length === 0 || this.length === 0) return 0

  // Fatal error conditions
  if (targetStart < 0) {
    throw new RangeError('targetStart out of bounds')
  }
  if (start < 0 || start >= this.length) throw new RangeError('sourceStart out of bounds')
  if (end < 0) throw new RangeError('sourceEnd out of bounds')

  // Are we oob?
  if (end > this.length) end = this.length
  if (target.length - targetStart < end - start) {
    end = target.length - targetStart + start
  }

  var len = end - start
  var i

  if (this === target && start < targetStart && targetStart < end) {
    // descending copy from end
    for (i = len - 1; i >= 0; --i) {
      target[i + targetStart] = this[i + start]
    }
  } else if (len < 1000 || !Buffer.TYPED_ARRAY_SUPPORT) {
    // ascending copy from start
    for (i = 0; i < len; ++i) {
      target[i + targetStart] = this[i + start]
    }
  } else {
    Uint8Array.prototype.set.call(
      target,
      this.subarray(start, start + len),
      targetStart
    )
  }

  return len
}

// Usage:
//    buffer.fill(number[, offset[, end]])
//    buffer.fill(buffer[, offset[, end]])
//    buffer.fill(string[, offset[, end]][, encoding])
Buffer.prototype.fill = function fill (val, start, end, encoding) {
  // Handle string cases:
  if (typeof val === 'string') {
    if (typeof start === 'string') {
      encoding = start
      start = 0
      end = this.length
    } else if (typeof end === 'string') {
      encoding = end
      end = this.length
    }
    if (val.length === 1) {
      var code = val.charCodeAt(0)
      if (code < 256) {
        val = code
      }
    }
    if (encoding !== undefined && typeof encoding !== 'string') {
      throw new TypeError('encoding must be a string')
    }
    if (typeof encoding === 'string' && !Buffer.isEncoding(encoding)) {
      throw new TypeError('Unknown encoding: ' + encoding)
    }
  } else if (typeof val === 'number') {
    val = val & 255
  }

  // Invalid ranges are not set to a default, so can range check early.
  if (start < 0 || this.length < start || this.length < end) {
    throw new RangeError('Out of range index')
  }

  if (end <= start) {
    return this
  }

  start = start >>> 0
  end = end === undefined ? this.length : end >>> 0

  if (!val) val = 0

  var i
  if (typeof val === 'number') {
    for (i = start; i < end; ++i) {
      this[i] = val
    }
  } else {
    var bytes = Buffer.isBuffer(val)
      ? val
      : utf8ToBytes(new Buffer(val, encoding).toString())
    var len = bytes.length
    for (i = 0; i < end - start; ++i) {
      this[i + start] = bytes[i % len]
    }
  }

  return this
}

// HELPER FUNCTIONS
// ================

var INVALID_BASE64_RE = /[^+\/0-9A-Za-z-_]/g

function base64clean (str) {
  // Node strips out invalid characters like \n and \t from the string, base64-js does not
  str = stringtrim(str).replace(INVALID_BASE64_RE, '')
  // Node converts strings with length < 2 to ''
  if (str.length < 2) return ''
  // Node allows for non-padded base64 strings (missing trailing ===), base64-js does not
  while (str.length % 4 !== 0) {
    str = str + '='
  }
  return str
}

function stringtrim (str) {
  if (str.trim) return str.trim()
  return str.replace(/^\s+|\s+$/g, '')
}

function toHex (n) {
  if (n < 16) return '0' + n.toString(16)
  return n.toString(16)
}

function utf8ToBytes (string, units) {
  units = units || Infinity
  var codePoint
  var length = string.length
  var leadSurrogate = null
  var bytes = []

  for (var i = 0; i < length; ++i) {
    codePoint = string.charCodeAt(i)

    // is surrogate component
    if (codePoint > 0xD7FF && codePoint < 0xE000) {
      // last char was a lead
      if (!leadSurrogate) {
        // no lead yet
        if (codePoint > 0xDBFF) {
          // unexpected trail
          if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
          continue
        } else if (i + 1 === length) {
          // unpaired lead
          if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
          continue
        }

        // valid lead
        leadSurrogate = codePoint

        continue
      }

      // 2 leads in a row
      if (codePoint < 0xDC00) {
        if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
        leadSurrogate = codePoint
        continue
      }

      // valid surrogate pair
      codePoint = (leadSurrogate - 0xD800 << 10 | codePoint - 0xDC00) + 0x10000
    } else if (leadSurrogate) {
      // valid bmp char, but last char was a lead
      if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
    }

    leadSurrogate = null

    // encode utf8
    if (codePoint < 0x80) {
      if ((units -= 1) < 0) break
      bytes.push(codePoint)
    } else if (codePoint < 0x800) {
      if ((units -= 2) < 0) break
      bytes.push(
        codePoint >> 0x6 | 0xC0,
        codePoint & 0x3F | 0x80
      )
    } else if (codePoint < 0x10000) {
      if ((units -= 3) < 0) break
      bytes.push(
        codePoint >> 0xC | 0xE0,
        codePoint >> 0x6 & 0x3F | 0x80,
        codePoint & 0x3F | 0x80
      )
    } else if (codePoint < 0x110000) {
      if ((units -= 4) < 0) break
      bytes.push(
        codePoint >> 0x12 | 0xF0,
        codePoint >> 0xC & 0x3F | 0x80,
        codePoint >> 0x6 & 0x3F | 0x80,
        codePoint & 0x3F | 0x80
      )
    } else {
      throw new Error('Invalid code point')
    }
  }

  return bytes
}

function asciiToBytes (str) {
  var byteArray = []
  for (var i = 0; i < str.length; ++i) {
    // Node's code seems to be doing this and not & 0x7F..
    byteArray.push(str.charCodeAt(i) & 0xFF)
  }
  return byteArray
}

function utf16leToBytes (str, units) {
  var c, hi, lo
  var byteArray = []
  for (var i = 0; i < str.length; ++i) {
    if ((units -= 2) < 0) break

    c = str.charCodeAt(i)
    hi = c >> 8
    lo = c % 256
    byteArray.push(lo)
    byteArray.push(hi)
  }

  return byteArray
}

function base64ToBytes (str) {
  return base64.toByteArray(base64clean(str))
}

function blitBuffer (src, dst, offset, length) {
  for (var i = 0; i < length; ++i) {
    if ((i + offset >= dst.length) || (i >= src.length)) break
    dst[i + offset] = src[i]
  }
  return i
}

function isnan (val) {
  return val !== val // eslint-disable-line no-self-compare
}

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(111)))

/***/ }),
/* 111 */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || new Function("return this")();
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),
/* 112 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.byteLength = byteLength
exports.toByteArray = toByteArray
exports.fromByteArray = fromByteArray

var lookup = []
var revLookup = []
var Arr = typeof Uint8Array !== 'undefined' ? Uint8Array : Array

var code = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/'
for (var i = 0, len = code.length; i < len; ++i) {
  lookup[i] = code[i]
  revLookup[code.charCodeAt(i)] = i
}

// Support decoding URL-safe base64 strings, as Node.js does.
// See: https://en.wikipedia.org/wiki/Base64#URL_applications
revLookup['-'.charCodeAt(0)] = 62
revLookup['_'.charCodeAt(0)] = 63

function getLens (b64) {
  var len = b64.length

  if (len % 4 > 0) {
    throw new Error('Invalid string. Length must be a multiple of 4')
  }

  // Trim off extra bytes after placeholder bytes are found
  // See: https://github.com/beatgammit/base64-js/issues/42
  var validLen = b64.indexOf('=')
  if (validLen === -1) validLen = len

  var placeHoldersLen = validLen === len
    ? 0
    : 4 - (validLen % 4)

  return [validLen, placeHoldersLen]
}

// base64 is 4/3 + up to two characters of the original data
function byteLength (b64) {
  var lens = getLens(b64)
  var validLen = lens[0]
  var placeHoldersLen = lens[1]
  return ((validLen + placeHoldersLen) * 3 / 4) - placeHoldersLen
}

function _byteLength (b64, validLen, placeHoldersLen) {
  return ((validLen + placeHoldersLen) * 3 / 4) - placeHoldersLen
}

function toByteArray (b64) {
  var tmp
  var lens = getLens(b64)
  var validLen = lens[0]
  var placeHoldersLen = lens[1]

  var arr = new Arr(_byteLength(b64, validLen, placeHoldersLen))

  var curByte = 0

  // if there are placeholders, only get up to the last complete 4 chars
  var len = placeHoldersLen > 0
    ? validLen - 4
    : validLen

  var i
  for (i = 0; i < len; i += 4) {
    tmp =
      (revLookup[b64.charCodeAt(i)] << 18) |
      (revLookup[b64.charCodeAt(i + 1)] << 12) |
      (revLookup[b64.charCodeAt(i + 2)] << 6) |
      revLookup[b64.charCodeAt(i + 3)]
    arr[curByte++] = (tmp >> 16) & 0xFF
    arr[curByte++] = (tmp >> 8) & 0xFF
    arr[curByte++] = tmp & 0xFF
  }

  if (placeHoldersLen === 2) {
    tmp =
      (revLookup[b64.charCodeAt(i)] << 2) |
      (revLookup[b64.charCodeAt(i + 1)] >> 4)
    arr[curByte++] = tmp & 0xFF
  }

  if (placeHoldersLen === 1) {
    tmp =
      (revLookup[b64.charCodeAt(i)] << 10) |
      (revLookup[b64.charCodeAt(i + 1)] << 4) |
      (revLookup[b64.charCodeAt(i + 2)] >> 2)
    arr[curByte++] = (tmp >> 8) & 0xFF
    arr[curByte++] = tmp & 0xFF
  }

  return arr
}

function tripletToBase64 (num) {
  return lookup[num >> 18 & 0x3F] +
    lookup[num >> 12 & 0x3F] +
    lookup[num >> 6 & 0x3F] +
    lookup[num & 0x3F]
}

function encodeChunk (uint8, start, end) {
  var tmp
  var output = []
  for (var i = start; i < end; i += 3) {
    tmp =
      ((uint8[i] << 16) & 0xFF0000) +
      ((uint8[i + 1] << 8) & 0xFF00) +
      (uint8[i + 2] & 0xFF)
    output.push(tripletToBase64(tmp))
  }
  return output.join('')
}

function fromByteArray (uint8) {
  var tmp
  var len = uint8.length
  var extraBytes = len % 3 // if we have 1 byte left, pad 2 bytes
  var parts = []
  var maxChunkLength = 16383 // must be multiple of 3

  // go through the array every three bytes, we'll deal with trailing stuff later
  for (var i = 0, len2 = len - extraBytes; i < len2; i += maxChunkLength) {
    parts.push(encodeChunk(uint8, i, (i + maxChunkLength) > len2 ? len2 : (i + maxChunkLength)))
  }

  // pad the end with zeros, but make sure to not forget the extra bytes
  if (extraBytes === 1) {
    tmp = uint8[len - 1]
    parts.push(
      lookup[tmp >> 2] +
      lookup[(tmp << 4) & 0x3F] +
      '=='
    )
  } else if (extraBytes === 2) {
    tmp = (uint8[len - 2] << 8) + uint8[len - 1]
    parts.push(
      lookup[tmp >> 10] +
      lookup[(tmp >> 4) & 0x3F] +
      lookup[(tmp << 2) & 0x3F] +
      '='
    )
  }

  return parts.join('')
}


/***/ }),
/* 113 */
/***/ (function(module, exports) {

/*! ieee754. BSD-3-Clause License. Feross Aboukhadijeh <https://feross.org/opensource> */
exports.read = function (buffer, offset, isLE, mLen, nBytes) {
  var e, m
  var eLen = (nBytes * 8) - mLen - 1
  var eMax = (1 << eLen) - 1
  var eBias = eMax >> 1
  var nBits = -7
  var i = isLE ? (nBytes - 1) : 0
  var d = isLE ? -1 : 1
  var s = buffer[offset + i]

  i += d

  e = s & ((1 << (-nBits)) - 1)
  s >>= (-nBits)
  nBits += eLen
  for (; nBits > 0; e = (e * 256) + buffer[offset + i], i += d, nBits -= 8) {}

  m = e & ((1 << (-nBits)) - 1)
  e >>= (-nBits)
  nBits += mLen
  for (; nBits > 0; m = (m * 256) + buffer[offset + i], i += d, nBits -= 8) {}

  if (e === 0) {
    e = 1 - eBias
  } else if (e === eMax) {
    return m ? NaN : ((s ? -1 : 1) * Infinity)
  } else {
    m = m + Math.pow(2, mLen)
    e = e - eBias
  }
  return (s ? -1 : 1) * m * Math.pow(2, e - mLen)
}

exports.write = function (buffer, value, offset, isLE, mLen, nBytes) {
  var e, m, c
  var eLen = (nBytes * 8) - mLen - 1
  var eMax = (1 << eLen) - 1
  var eBias = eMax >> 1
  var rt = (mLen === 23 ? Math.pow(2, -24) - Math.pow(2, -77) : 0)
  var i = isLE ? 0 : (nBytes - 1)
  var d = isLE ? 1 : -1
  var s = value < 0 || (value === 0 && 1 / value < 0) ? 1 : 0

  value = Math.abs(value)

  if (isNaN(value) || value === Infinity) {
    m = isNaN(value) ? 1 : 0
    e = eMax
  } else {
    e = Math.floor(Math.log(value) / Math.LN2)
    if (value * (c = Math.pow(2, -e)) < 1) {
      e--
      c *= 2
    }
    if (e + eBias >= 1) {
      value += rt / c
    } else {
      value += rt * Math.pow(2, 1 - eBias)
    }
    if (value * c >= 2) {
      e++
      c /= 2
    }

    if (e + eBias >= eMax) {
      m = 0
      e = eMax
    } else if (e + eBias >= 1) {
      m = ((value * c) - 1) * Math.pow(2, mLen)
      e = e + eBias
    } else {
      m = value * Math.pow(2, eBias - 1) * Math.pow(2, mLen)
      e = 0
    }
  }

  for (; mLen >= 8; buffer[offset + i] = m & 0xff, i += d, m /= 256, mLen -= 8) {}

  e = (e << mLen) | m
  eLen += mLen
  for (; eLen > 0; buffer[offset + i] = e & 0xff, i += d, e /= 256, eLen -= 8) {}

  buffer[offset + i - d] |= s * 128
}


/***/ }),
/* 114 */
/***/ (function(module, exports) {

var toString = {}.toString;

module.exports = Array.isArray || function (arr) {
  return toString.call(arr) == '[object Array]';
};


/***/ }),
/* 115 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.



var R = typeof Reflect === 'object' ? Reflect : null
var ReflectApply = R && typeof R.apply === 'function'
  ? R.apply
  : function ReflectApply(target, receiver, args) {
    return Function.prototype.apply.call(target, receiver, args);
  }

var ReflectOwnKeys
if (R && typeof R.ownKeys === 'function') {
  ReflectOwnKeys = R.ownKeys
} else if (Object.getOwnPropertySymbols) {
  ReflectOwnKeys = function ReflectOwnKeys(target) {
    return Object.getOwnPropertyNames(target)
      .concat(Object.getOwnPropertySymbols(target));
  };
} else {
  ReflectOwnKeys = function ReflectOwnKeys(target) {
    return Object.getOwnPropertyNames(target);
  };
}

function ProcessEmitWarning(warning) {
  if (console && console.warn) console.warn(warning);
}

var NumberIsNaN = Number.isNaN || function NumberIsNaN(value) {
  return value !== value;
}

function EventEmitter() {
  EventEmitter.init.call(this);
}
module.exports = EventEmitter;
module.exports.once = once;

// Backwards-compat with node 0.10.x
EventEmitter.EventEmitter = EventEmitter;

EventEmitter.prototype._events = undefined;
EventEmitter.prototype._eventsCount = 0;
EventEmitter.prototype._maxListeners = undefined;

// By default EventEmitters will print a warning if more than 10 listeners are
// added to it. This is a useful default which helps finding memory leaks.
var defaultMaxListeners = 10;

function checkListener(listener) {
  if (typeof listener !== 'function') {
    throw new TypeError('The "listener" argument must be of type Function. Received type ' + typeof listener);
  }
}

Object.defineProperty(EventEmitter, 'defaultMaxListeners', {
  enumerable: true,
  get: function() {
    return defaultMaxListeners;
  },
  set: function(arg) {
    if (typeof arg !== 'number' || arg < 0 || NumberIsNaN(arg)) {
      throw new RangeError('The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received ' + arg + '.');
    }
    defaultMaxListeners = arg;
  }
});

EventEmitter.init = function() {

  if (this._events === undefined ||
      this._events === Object.getPrototypeOf(this)._events) {
    this._events = Object.create(null);
    this._eventsCount = 0;
  }

  this._maxListeners = this._maxListeners || undefined;
};

// Obviously not all Emitters should be limited to 10. This function allows
// that to be increased. Set to zero for unlimited.
EventEmitter.prototype.setMaxListeners = function setMaxListeners(n) {
  if (typeof n !== 'number' || n < 0 || NumberIsNaN(n)) {
    throw new RangeError('The value of "n" is out of range. It must be a non-negative number. Received ' + n + '.');
  }
  this._maxListeners = n;
  return this;
};

function _getMaxListeners(that) {
  if (that._maxListeners === undefined)
    return EventEmitter.defaultMaxListeners;
  return that._maxListeners;
}

EventEmitter.prototype.getMaxListeners = function getMaxListeners() {
  return _getMaxListeners(this);
};

EventEmitter.prototype.emit = function emit(type) {
  var args = [];
  for (var i = 1; i < arguments.length; i++) args.push(arguments[i]);
  var doError = (type === 'error');

  var events = this._events;
  if (events !== undefined)
    doError = (doError && events.error === undefined);
  else if (!doError)
    return false;

  // If there is no 'error' event listener then throw.
  if (doError) {
    var er;
    if (args.length > 0)
      er = args[0];
    if (er instanceof Error) {
      // Note: The comments on the `throw` lines are intentional, they show
      // up in Node's output if this results in an unhandled exception.
      throw er; // Unhandled 'error' event
    }
    // At least give some kind of context to the user
    var err = new Error('Unhandled error.' + (er ? ' (' + er.message + ')' : ''));
    err.context = er;
    throw err; // Unhandled 'error' event
  }

  var handler = events[type];

  if (handler === undefined)
    return false;

  if (typeof handler === 'function') {
    ReflectApply(handler, this, args);
  } else {
    var len = handler.length;
    var listeners = arrayClone(handler, len);
    for (var i = 0; i < len; ++i)
      ReflectApply(listeners[i], this, args);
  }

  return true;
};

function _addListener(target, type, listener, prepend) {
  var m;
  var events;
  var existing;

  checkListener(listener);

  events = target._events;
  if (events === undefined) {
    events = target._events = Object.create(null);
    target._eventsCount = 0;
  } else {
    // To avoid recursion in the case that type === "newListener"! Before
    // adding it to the listeners, first emit "newListener".
    if (events.newListener !== undefined) {
      target.emit('newListener', type,
                  listener.listener ? listener.listener : listener);

      // Re-assign `events` because a newListener handler could have caused the
      // this._events to be assigned to a new object
      events = target._events;
    }
    existing = events[type];
  }

  if (existing === undefined) {
    // Optimize the case of one listener. Don't need the extra array object.
    existing = events[type] = listener;
    ++target._eventsCount;
  } else {
    if (typeof existing === 'function') {
      // Adding the second element, need to change to array.
      existing = events[type] =
        prepend ? [listener, existing] : [existing, listener];
      // If we've already got an array, just append.
    } else if (prepend) {
      existing.unshift(listener);
    } else {
      existing.push(listener);
    }

    // Check for listener leak
    m = _getMaxListeners(target);
    if (m > 0 && existing.length > m && !existing.warned) {
      existing.warned = true;
      // No error code for this since it is a Warning
      // eslint-disable-next-line no-restricted-syntax
      var w = new Error('Possible EventEmitter memory leak detected. ' +
                          existing.length + ' ' + String(type) + ' listeners ' +
                          'added. Use emitter.setMaxListeners() to ' +
                          'increase limit');
      w.name = 'MaxListenersExceededWarning';
      w.emitter = target;
      w.type = type;
      w.count = existing.length;
      ProcessEmitWarning(w);
    }
  }

  return target;
}

EventEmitter.prototype.addListener = function addListener(type, listener) {
  return _addListener(this, type, listener, false);
};

EventEmitter.prototype.on = EventEmitter.prototype.addListener;

EventEmitter.prototype.prependListener =
    function prependListener(type, listener) {
      return _addListener(this, type, listener, true);
    };

function onceWrapper() {
  if (!this.fired) {
    this.target.removeListener(this.type, this.wrapFn);
    this.fired = true;
    if (arguments.length === 0)
      return this.listener.call(this.target);
    return this.listener.apply(this.target, arguments);
  }
}

function _onceWrap(target, type, listener) {
  var state = { fired: false, wrapFn: undefined, target: target, type: type, listener: listener };
  var wrapped = onceWrapper.bind(state);
  wrapped.listener = listener;
  state.wrapFn = wrapped;
  return wrapped;
}

EventEmitter.prototype.once = function once(type, listener) {
  checkListener(listener);
  this.on(type, _onceWrap(this, type, listener));
  return this;
};

EventEmitter.prototype.prependOnceListener =
    function prependOnceListener(type, listener) {
      checkListener(listener);
      this.prependListener(type, _onceWrap(this, type, listener));
      return this;
    };

// Emits a 'removeListener' event if and only if the listener was removed.
EventEmitter.prototype.removeListener =
    function removeListener(type, listener) {
      var list, events, position, i, originalListener;

      checkListener(listener);

      events = this._events;
      if (events === undefined)
        return this;

      list = events[type];
      if (list === undefined)
        return this;

      if (list === listener || list.listener === listener) {
        if (--this._eventsCount === 0)
          this._events = Object.create(null);
        else {
          delete events[type];
          if (events.removeListener)
            this.emit('removeListener', type, list.listener || listener);
        }
      } else if (typeof list !== 'function') {
        position = -1;

        for (i = list.length - 1; i >= 0; i--) {
          if (list[i] === listener || list[i].listener === listener) {
            originalListener = list[i].listener;
            position = i;
            break;
          }
        }

        if (position < 0)
          return this;

        if (position === 0)
          list.shift();
        else {
          spliceOne(list, position);
        }

        if (list.length === 1)
          events[type] = list[0];

        if (events.removeListener !== undefined)
          this.emit('removeListener', type, originalListener || listener);
      }

      return this;
    };

EventEmitter.prototype.off = EventEmitter.prototype.removeListener;

EventEmitter.prototype.removeAllListeners =
    function removeAllListeners(type) {
      var listeners, events, i;

      events = this._events;
      if (events === undefined)
        return this;

      // not listening for removeListener, no need to emit
      if (events.removeListener === undefined) {
        if (arguments.length === 0) {
          this._events = Object.create(null);
          this._eventsCount = 0;
        } else if (events[type] !== undefined) {
          if (--this._eventsCount === 0)
            this._events = Object.create(null);
          else
            delete events[type];
        }
        return this;
      }

      // emit removeListener for all listeners on all events
      if (arguments.length === 0) {
        var keys = Object.keys(events);
        var key;
        for (i = 0; i < keys.length; ++i) {
          key = keys[i];
          if (key === 'removeListener') continue;
          this.removeAllListeners(key);
        }
        this.removeAllListeners('removeListener');
        this._events = Object.create(null);
        this._eventsCount = 0;
        return this;
      }

      listeners = events[type];

      if (typeof listeners === 'function') {
        this.removeListener(type, listeners);
      } else if (listeners !== undefined) {
        // LIFO order
        for (i = listeners.length - 1; i >= 0; i--) {
          this.removeListener(type, listeners[i]);
        }
      }

      return this;
    };

function _listeners(target, type, unwrap) {
  var events = target._events;

  if (events === undefined)
    return [];

  var evlistener = events[type];
  if (evlistener === undefined)
    return [];

  if (typeof evlistener === 'function')
    return unwrap ? [evlistener.listener || evlistener] : [evlistener];

  return unwrap ?
    unwrapListeners(evlistener) : arrayClone(evlistener, evlistener.length);
}

EventEmitter.prototype.listeners = function listeners(type) {
  return _listeners(this, type, true);
};

EventEmitter.prototype.rawListeners = function rawListeners(type) {
  return _listeners(this, type, false);
};

EventEmitter.listenerCount = function(emitter, type) {
  if (typeof emitter.listenerCount === 'function') {
    return emitter.listenerCount(type);
  } else {
    return listenerCount.call(emitter, type);
  }
};

EventEmitter.prototype.listenerCount = listenerCount;
function listenerCount(type) {
  var events = this._events;

  if (events !== undefined) {
    var evlistener = events[type];

    if (typeof evlistener === 'function') {
      return 1;
    } else if (evlistener !== undefined) {
      return evlistener.length;
    }
  }

  return 0;
}

EventEmitter.prototype.eventNames = function eventNames() {
  return this._eventsCount > 0 ? ReflectOwnKeys(this._events) : [];
};

function arrayClone(arr, n) {
  var copy = new Array(n);
  for (var i = 0; i < n; ++i)
    copy[i] = arr[i];
  return copy;
}

function spliceOne(list, index) {
  for (; index + 1 < list.length; index++)
    list[index] = list[index + 1];
  list.pop();
}

function unwrapListeners(arr) {
  var ret = new Array(arr.length);
  for (var i = 0; i < ret.length; ++i) {
    ret[i] = arr[i].listener || arr[i];
  }
  return ret;
}

function once(emitter, name) {
  return new Promise(function (resolve, reject) {
    function eventListener() {
      if (errorListener !== undefined) {
        emitter.removeListener('error', errorListener);
      }
      resolve([].slice.call(arguments));
    };
    var errorListener;

    // Adding an error listener is not optional because
    // if an error is thrown on an event emitter we cannot
    // guarantee that the actual event we are waiting will
    // be fired. The result could be a silent way to create
    // memory or file descriptor leaks, which is something
    // we should avoid.
    if (name !== 'error') {
      errorListener = function errorListener(err) {
        emitter.removeListener(name, eventListener);
        reject(err);
      };

      emitter.once('error', errorListener);
    }

    emitter.once(name, eventListener);
  });
}


/***/ }),
/* 116 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.parseInteger = exports.parseDecimal = exports.DOT_OPERATOR = exports.parseCents = exports.parseQuotient = exports.parseMonzo = exports.parse23FreeClass = void 0;
var two3FreeClass_1 = __webpack_require__(117);
Object.defineProperty(exports, "parse23FreeClass", { enumerable: true, get: function () { return two3FreeClass_1.parse23FreeClass; } });
var monzo_1 = __webpack_require__(121);
Object.defineProperty(exports, "parseMonzo", { enumerable: true, get: function () { return monzo_1.parseMonzo; } });
var quotient_1 = __webpack_require__(118);
Object.defineProperty(exports, "parseQuotient", { enumerable: true, get: function () { return quotient_1.parseQuotient; } });
var cents_1 = __webpack_require__(122);
Object.defineProperty(exports, "parseCents", { enumerable: true, get: function () { return cents_1.parseCents; } });
var constants_1 = __webpack_require__(119);
Object.defineProperty(exports, "DOT_OPERATOR", { enumerable: true, get: function () { return constants_1.DOT_OPERATOR; } });
var decimal_1 = __webpack_require__(120);
Object.defineProperty(exports, "parseDecimal", { enumerable: true, get: function () { return decimal_1.parseDecimal; } });
Object.defineProperty(exports, "parseInteger", { enumerable: true, get: function () { return decimal_1.parseInteger; } });


/***/ }),
/* 117 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.parse23FreeClass = void 0;
var math_1 = __webpack_require__(6);
var quotient_1 = __webpack_require__(118);
var parse23FreeClass = function (two3FreeClassIo) {
    var two3FreeQuotient = quotient_1.parseQuotient(two3FreeClassIo);
    if (!math_1.isQuotientRational(two3FreeQuotient)) {
        throw new Error("Attempted to parse " + two3FreeClassIo + " to a 2,3-free class, but they must be rational");
    }
    if (math_1.isQuotientSub(two3FreeQuotient)) {
        throw new Error("Attempted to parse " + two3FreeClassIo + " to a 2,3-free class, but they must be sub.");
    }
    var reducedTwo3FreeQuotient = math_1.computeLowestTermsRationalQuotient(two3FreeQuotient);
    return {
        monzo: math_1.computeRationalMonzoFromRationalQuotient(reducedTwo3FreeQuotient),
    };
};
exports.parse23FreeClass = parse23FreeClass;


/***/ }),
/* 118 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.parseQuotient = void 0;
var constants_1 = __webpack_require__(64);
var typedOperations_1 = __webpack_require__(71);
var constants_2 = __webpack_require__(119);
var decimal_1 = __webpack_require__(120);
var superscriptNumbers = constants_1.SUPERSCRIPT_NUMBERS.join();
var parseQuotient = function (quotientIo) {
    var quotient = typedOperations_1.split(quotientIo, /[\/:]/).map(function (quotientPartIo) {
        if (quotientPartIo.match(new RegExp("[" + superscriptNumbers + ".\u22C5]"))) {
            var factorPowers = quotientPartIo.match(new RegExp("[\u22C5]")) ?
                quotientPartIo.split(constants_2.DOT_OPERATOR) :
                quotientPartIo.split(".");
            return factorPowers.reduce(function (product, factorPower) {
                var exponentPartOfFactorPower = factorPower.replace(new RegExp("[^" + superscriptNumbers + "]", "g"), constants_1.BLANK);
                var basePartOfFactorPower = factorPower.replace(exponentPartOfFactorPower, constants_1.BLANK);
                var base = decimal_1.parseInteger(basePartOfFactorPower);
                var power = exponentPartOfFactorPower === constants_1.BLANK ?
                    1 :
                    constants_1.SUPERSCRIPT_NUMBERS.indexOf(exponentPartOfFactorPower);
                return product * Math.pow(base, power);
            }, 1);
        }
        else {
            return parseFloat(quotientPartIo);
        }
    });
    if (quotient.length === 1) {
        quotient.push(1);
    }
    if (quotientIo.includes(":")) {
        quotient.reverse();
    }
    return quotient;
};
exports.parseQuotient = parseQuotient;


/***/ }),
/* 119 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.DOT_OPERATOR = void 0;
var DOT_OPERATOR = "⋅";
exports.DOT_OPERATOR = DOT_OPERATOR;


/***/ }),
/* 120 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.parseInteger = exports.parseDecimal = void 0;
var parseDecimal = function (decimalIo) {
    return parseFloat(decimalIo);
};
exports.parseDecimal = parseDecimal;
var parseInteger = function (integerIo) {
    return parseInt(integerIo);
};
exports.parseInteger = parseInteger;


/***/ }),
/* 121 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.parseMonzo = void 0;
var handleAbbreviatedAndPunctuatedMonzo = function (preparsedMonzoIo) {
    var handledMonzoIo = preparsedMonzoIo
        .replace(/^[|\[],/, "[0,0,")
        .replace(/^[|\[]([^ 0]+,.*)/, "[0,$1");
    var len = handledMonzoIo.length - 1;
    while (handledMonzoIo.length !== len) {
        len = handledMonzoIo.length;
        handledMonzoIo = handledMonzoIo.replace(/,,/g, ",0,0,0,"); //
    }
    return handledMonzoIo;
};
var parseMonzo = function (monzoIo) {
    var preparsedMonzoIo = monzoIo;
    var isCopiedFromJavascript = !preparsedMonzoIo.match(/[⟩>|]/);
    if (!isCopiedFromJavascript) {
        preparsedMonzoIo = handleAbbreviatedAndPunctuatedMonzo(preparsedMonzoIo);
    }
    preparsedMonzoIo = preparsedMonzoIo
        .replace("⟩", "]")
        .replace(">", "]")
        .replace("|", "[")
        .replace(/\s*\[\s+/, "[")
        .replace(/\s+]\s*/, "]")
        .replace(/,\s*/g, ",")
        .replace(/\s+/g, ",");
    return JSON.parse(preparsedMonzoIo);
};
exports.parseMonzo = parseMonzo;


/***/ }),
/* 122 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.parseCents = void 0;
var constants_1 = __webpack_require__(64);
var parseCents = function (centsIo) {
    var preparsedCentsText = centsIo.replace("c", constants_1.BLANK).replace("¢", constants_1.BLANK);
    return parseFloat(preparsedCentsText);
};
exports.parseCents = parseCents;


/***/ }),
/* 123 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.stringify = void 0;
var stringify = function (object, _a) {
    var _b = _a === void 0 ? {} : _a, _c = _b.multiline, multiline = _c === void 0 ? false : _c;
    return multiline ? JSON.stringify(object, undefined, 4) : JSON.stringify(object);
};
exports.stringify = stringify;


/***/ }),
/* 124 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.computePx = void 0;
var scale_1 = __webpack_require__(125);
Object.defineProperty(exports, "computePx", { enumerable: true, get: function () { return scale_1.computePx; } });


/***/ }),
/* 125 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.computePx = void 0;
var computePx = function (basis, scale) {
    return basis * scale;
};
exports.computePx = computePx;


/***/ }),
/* 126 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.formatBound = exports.formatCents = exports.formatPitch = exports.formatTime = exports.formatQuotient = exports.alignFormattedDecimal = exports.formatIntegerDecimal = exports.formatDecimal = exports.formatVal = exports.formatMonzo = exports.TimePrecision = void 0;
var types_1 = __webpack_require__(127);
Object.defineProperty(exports, "TimePrecision", { enumerable: true, get: function () { return types_1.TimePrecision; } });
var monzo_1 = __webpack_require__(128);
Object.defineProperty(exports, "formatMonzo", { enumerable: true, get: function () { return monzo_1.formatMonzo; } });
var val_1 = __webpack_require__(130);
Object.defineProperty(exports, "formatVal", { enumerable: true, get: function () { return val_1.formatVal; } });
var decimal_1 = __webpack_require__(131);
Object.defineProperty(exports, "formatDecimal", { enumerable: true, get: function () { return decimal_1.formatDecimal; } });
Object.defineProperty(exports, "formatIntegerDecimal", { enumerable: true, get: function () { return decimal_1.formatIntegerDecimal; } });
Object.defineProperty(exports, "alignFormattedDecimal", { enumerable: true, get: function () { return decimal_1.alignFormattedDecimal; } });
var quotient_1 = __webpack_require__(132);
Object.defineProperty(exports, "formatQuotient", { enumerable: true, get: function () { return quotient_1.formatQuotient; } });
var time_1 = __webpack_require__(133);
Object.defineProperty(exports, "formatTime", { enumerable: true, get: function () { return time_1.formatTime; } });
var pitch_1 = __webpack_require__(134);
Object.defineProperty(exports, "formatPitch", { enumerable: true, get: function () { return pitch_1.formatPitch; } });
var cents_1 = __webpack_require__(150);
Object.defineProperty(exports, "formatCents", { enumerable: true, get: function () { return cents_1.formatCents; } });
var bound_1 = __webpack_require__(151);
Object.defineProperty(exports, "formatBound", { enumerable: true, get: function () { return bound_1.formatBound; } });


/***/ }),
/* 127 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.TimePrecision = void 0;
var TimePrecision;
(function (TimePrecision) {
    TimePrecision[TimePrecision["D"] = 0] = "D";
    TimePrecision[TimePrecision["H"] = 1] = "H";
    TimePrecision[TimePrecision["M"] = 2] = "M";
    TimePrecision[TimePrecision["S"] = 3] = "S";
    TimePrecision[TimePrecision["MS"] = 4] = "MS";
})(TimePrecision || (TimePrecision = {}));
exports.TimePrecision = TimePrecision;


/***/ }),
/* 128 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.formatMonzo = void 0;
var code_1 = __webpack_require__(4);
var constants_1 = __webpack_require__(64);
var spaceMonzoOrValExponent_1 = __webpack_require__(129);
var maybeSpaceMonzoOrValExponent = function (primeExponent, _a) {
    var abbreviated = _a.abbreviated;
    return abbreviated ?
        primeExponent.toString() :
        spaceMonzoOrValExponent_1.spaceMonzoOrValExponent(primeExponent);
};
var formatMonzo = function (monzo, _a) {
    var _b = _a === void 0 ? {} : _a, _c = _b.punctuated, punctuated = _c === void 0 ? false : _c, _d = _b.abbreviated, abbreviated = _d === void 0 ? false : _d;
    var buffer = abbreviated ? constants_1.BLANK : constants_1.SPACE;
    var contents;
    if (punctuated) {
        var punctuatedSeparator = "" + constants_1.COMMA + buffer;
        // Take care of the first 2 elements, which are special
        var two3FreeMonzo = monzo.splice(2);
        contents = monzo.map(function (primeExponent) {
            return maybeSpaceMonzoOrValExponent(primeExponent, { abbreviated: abbreviated });
        }).join(constants_1.SPACE) + punctuatedSeparator;
        var index = 0;
        while (index < two3FreeMonzo.length) {
            var primeExponent = two3FreeMonzo[index];
            var newContent = maybeSpaceMonzoOrValExponent(primeExponent, { abbreviated: abbreviated });
            contents = contents + newContent;
            if (index < code_1.indexOfFinalElement(two3FreeMonzo)) {
                if (index % 3 === 2) {
                    contents = contents + punctuatedSeparator;
                }
                else {
                    contents = contents + constants_1.SPACE;
                }
            }
            index += 1;
        }
    }
    else {
        contents = monzo.map(function (primeExponent) {
            return maybeSpaceMonzoOrValExponent(primeExponent, { abbreviated: abbreviated });
        }).join(constants_1.SPACE);
    }
    if (abbreviated && punctuated) {
        contents = contents
            .replace(/^0 0/, constants_1.BLANK)
            .replace(/^0 /, constants_1.BLANK)
            .replace(/0 0 0/g, constants_1.BLANK);
    }
    return "[" + buffer + contents + buffer + "\u27E9";
};
exports.formatMonzo = formatMonzo;


/***/ }),
/* 129 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.spaceMonzoOrValExponent = void 0;
var spaceMonzoOrValExponent = function (exponent) {
    var exponentText = exponent.toString();
    while (exponentText.length < 3) {
        exponentText = " " + exponentText;
    }
    return exponentText;
};
exports.spaceMonzoOrValExponent = spaceMonzoOrValExponent;


/***/ }),
/* 130 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.formatVal = void 0;
var monzo_1 = __webpack_require__(128);
var formatVal = function (val, options) {
    return monzo_1.formatMonzo(val, options)
        .replace("[", "⟨")
        .replace("⟩", "]");
};
exports.formatVal = formatVal;


/***/ }),
/* 131 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.formatIntegerDecimal = exports.formatDecimal = exports.alignFormattedDecimal = void 0;
var math_1 = __webpack_require__(6);
var constants_1 = __webpack_require__(64);
var globals_1 = __webpack_require__(63);
var table_1 = __webpack_require__(65);
var alignFormattedDecimal = function (formattedDecimal) {
    while (formattedDecimal.length < 7) {
        formattedDecimal = " " + formattedDecimal;
    }
    return formattedDecimal;
};
exports.alignFormattedDecimal = alignFormattedDecimal;
var alignFormattedIntegerDecimal = function (formattedIntegerDecimal) {
    while (formattedIntegerDecimal.length < 3) {
        formattedIntegerDecimal = " " + formattedIntegerDecimal;
    }
    while (formattedIntegerDecimal.length < 7) {
        formattedIntegerDecimal = formattedIntegerDecimal + " ";
    }
    return formattedIntegerDecimal;
};
var formatDecimal = function (decimal, _a) {
    var _b = _a === void 0 ? {} : _a, align = _b.align;
    var roundedDecimal = math_1.round(decimal, constants_1.IO_PRECISION)
        .toFixed(3)
        .replace(/\.(\d\d\d)0*$/, ".$1");
    return align && globals_1.ioSettings.tableFormat !== table_1.TableFormat.SPREADSHEET ?
        alignFormattedDecimal(roundedDecimal) :
        roundedDecimal;
};
exports.formatDecimal = formatDecimal;
var formatIntegerDecimal = function (integerDecimal, _a) {
    var _b = _a === void 0 ? {} : _a, align = _b.align;
    var stringifiedIntegerDecimal = integerDecimal
        .toString();
    return align && globals_1.ioSettings.tableFormat !== table_1.TableFormat.SPREADSHEET ?
        alignFormattedIntegerDecimal(stringifiedIntegerDecimal) :
        stringifiedIntegerDecimal;
};
exports.formatIntegerDecimal = formatIntegerDecimal;


/***/ }),
/* 132 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __read = (this && this.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.formatQuotient = void 0;
var math_1 = __webpack_require__(6);
var globals_1 = __webpack_require__(63);
var table_1 = __webpack_require__(65);
var formatQuotient = function (inputQuotient, _a) {
    var _b = _a === void 0 ? {} : _a, _c = _b.directed, directed = _c === void 0 ? true : _c, _d = _b.noLaTeXScaler, noLaTeXScaler = _d === void 0 ? false : _d;
    var _e = __read(directed ? inputQuotient : math_1.computeSuperQuotient(inputQuotient), 2), numerator = _e[0], denominator = _e[1];
    if (numerator === Infinity)
        numerator = "(too big for JS)";
    if (denominator === Infinity)
        denominator = "(too big for JS)";
    return directed ?
        globals_1.ioSettings.tableFormat === table_1.TableFormat.FORUM && !noLaTeXScaler ?
            denominator === 1 ?
                "[latex]" + numerator + "[/latex]" :
                "[latex]\\frac{" + numerator + "}{" + denominator + "}[/latex]" :
            denominator === 1 ?
                "" + numerator :
                numerator + "/" + denominator :
        denominator + ":" + numerator;
};
exports.formatQuotient = formatQuotient;
/*
5/4 valid directed quotient (super)                 4/5 valid directed quotient (sub)
[5, 4] as Quotient<{ direction: Direction.SUPER}>   [4, 5] as Quotient<{ direction: Direction.SUB }>

5:4 does not exist                                  4:5 valid undirected quotient
                                                    [5, 4] as Quotient
 */


/***/ }),
/* 133 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.formatTime = void 0;
var math_1 = __webpack_require__(6);
var types_1 = __webpack_require__(127);
var formatTime = function (ms, timePrecision) {
    if (timePrecision === void 0) { timePrecision = types_1.TimePrecision.MS; }
    var rawMilliseconds = ms % 1000;
    var milliseconds = timePrecision > types_1.TimePrecision.MS ? math_1.floor(rawMilliseconds) : math_1.round(rawMilliseconds);
    var rawSeconds = (ms / 1000) % 60;
    var seconds = timePrecision > types_1.TimePrecision.S ? math_1.floor(rawSeconds) : math_1.round(rawSeconds);
    var rawMinutes = (ms / (1000 * 60)) % 60;
    var minutes = timePrecision > types_1.TimePrecision.M ? math_1.floor(rawMinutes) : math_1.round(rawMinutes);
    var rawHours = (ms / (1000 * 60 * 60)) % 24;
    var hours = timePrecision > types_1.TimePrecision.H ? math_1.floor(rawHours) : math_1.round(rawHours);
    var rawDays = (ms / (1000 * 60 * 60 * 24)) % 365.25;
    var days = timePrecision > types_1.TimePrecision.D ? math_1.floor(rawDays) : math_1.round(rawDays);
    var parts = [];
    if (days > 0)
        parts.push(days + "d");
    if (timePrecision >= types_1.TimePrecision.H && (hours > 0 || days > 0))
        parts.push(hours + "h");
    if (timePrecision >= types_1.TimePrecision.M && (minutes > 0 || hours > 0 || days > 0))
        parts.push(minutes + "m");
    if (timePrecision >= types_1.TimePrecision.S && (seconds > 0 || minutes > 0 || hours > 0 || days > 0))
        parts.push(seconds + "s");
    if (timePrecision >= types_1.TimePrecision.MS)
        parts.push(milliseconds + "ms");
    return parts.join(", ");
};
exports.formatTime = formatTime;


/***/ }),
/* 134 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.formatPitch = void 0;
var math_1 = __webpack_require__(6);
var music_1 = __webpack_require__(135);
var cents_1 = __webpack_require__(150);
var monzo_1 = __webpack_require__(128);
var quotient_1 = __webpack_require__(132);
var formatPitch = function (pitch, options) {
    if (options === void 0) { options = {}; }
    if (math_1.isScamonRational(pitch)) {
        return monzo_1.formatMonzo(pitch.monzo);
    }
    else {
        var scaler = pitch.scaler, monzo = pitch.monzo;
        if (math_1.isQuotientRational(scaler)) {
            return monzo_1.formatMonzo(monzo) + "(" + quotient_1.formatQuotient(scaler, options) + ")";
        }
        else {
            return cents_1.formatCents(music_1.computeCentsFromPitch(pitch), options);
        }
    }
};
exports.formatPitch = formatPitch;


/***/ }),
/* 135 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.computePitchExpectation = exports.two3FreeClassFixture = exports.SYNTONIC_COMMA = exports.SEPTIMAL_KLEISMA = exports.SEPTIMAL_COMMA = exports.SCHISMINA = exports.SCHISMA = exports.APOTOME = exports.OCTAVE_WINDOW = exports.THIRTYONE_THREE_COMMA = exports.PYTHAGOREAN_WHOLE_TONE = exports.PYTHAGOREAN_LARGE_DIESIS = exports.SUPERCOMPLEX_PYTHAGOREAN_KLEISMA = exports.PYTHAGOREAN_SCHISMA = exports.PYTHAGOREAN_LIMMA = exports.PYTHAGOREAN_COMMA = exports.TWO_3_FREE_CLASS_SIGN = exports.TWO_3_FREE = exports.UNISON = exports.format23FreeClass = exports.compute23FreeClassName = exports.COMMA_POPULARITIES = exports.THREE_PRIME_LIMIT = exports.compute23FreeClass = exports.computeLowerAndUpperExclusive = exports.CENTS_PER_OCTAVE = exports.computePitchFromCents = exports.computeCentsFromPitch = exports.subtractPitch = exports.dividePitch = void 0;
var cents_1 = __webpack_require__(136);
Object.defineProperty(exports, "dividePitch", { enumerable: true, get: function () { return cents_1.dividePitch; } });
Object.defineProperty(exports, "subtractPitch", { enumerable: true, get: function () { return cents_1.subtractPitch; } });
Object.defineProperty(exports, "computeCentsFromPitch", { enumerable: true, get: function () { return cents_1.computeCentsFromPitch; } });
Object.defineProperty(exports, "computePitchFromCents", { enumerable: true, get: function () { return cents_1.computePitchFromCents; } });
var constants_1 = __webpack_require__(137);
Object.defineProperty(exports, "CENTS_PER_OCTAVE", { enumerable: true, get: function () { return constants_1.CENTS_PER_OCTAVE; } });
var zone_1 = __webpack_require__(138);
Object.defineProperty(exports, "computeLowerAndUpperExclusive", { enumerable: true, get: function () { return zone_1.computeLowerAndUpperExclusive; } });
var ji_1 = __webpack_require__(139);
Object.defineProperty(exports, "compute23FreeClass", { enumerable: true, get: function () { return ji_1.compute23FreeClass; } });
Object.defineProperty(exports, "THREE_PRIME_LIMIT", { enumerable: true, get: function () { return ji_1.THREE_PRIME_LIMIT; } });
Object.defineProperty(exports, "COMMA_POPULARITIES", { enumerable: true, get: function () { return ji_1.COMMA_POPULARITIES; } });
Object.defineProperty(exports, "compute23FreeClassName", { enumerable: true, get: function () { return ji_1.compute23FreeClassName; } });
Object.defineProperty(exports, "format23FreeClass", { enumerable: true, get: function () { return ji_1.format23FreeClass; } });
Object.defineProperty(exports, "UNISON", { enumerable: true, get: function () { return ji_1.UNISON; } });
Object.defineProperty(exports, "TWO_3_FREE", { enumerable: true, get: function () { return ji_1.TWO_3_FREE; } });
Object.defineProperty(exports, "TWO_3_FREE_CLASS_SIGN", { enumerable: true, get: function () { return ji_1.TWO_3_FREE_CLASS_SIGN; } });
Object.defineProperty(exports, "PYTHAGOREAN_COMMA", { enumerable: true, get: function () { return ji_1.PYTHAGOREAN_COMMA; } });
Object.defineProperty(exports, "PYTHAGOREAN_LIMMA", { enumerable: true, get: function () { return ji_1.PYTHAGOREAN_LIMMA; } });
Object.defineProperty(exports, "PYTHAGOREAN_SCHISMA", { enumerable: true, get: function () { return ji_1.PYTHAGOREAN_SCHISMA; } });
Object.defineProperty(exports, "SUPERCOMPLEX_PYTHAGOREAN_KLEISMA", { enumerable: true, get: function () { return ji_1.SUPERCOMPLEX_PYTHAGOREAN_KLEISMA; } });
Object.defineProperty(exports, "PYTHAGOREAN_LARGE_DIESIS", { enumerable: true, get: function () { return ji_1.PYTHAGOREAN_LARGE_DIESIS; } });
Object.defineProperty(exports, "PYTHAGOREAN_WHOLE_TONE", { enumerable: true, get: function () { return ji_1.PYTHAGOREAN_WHOLE_TONE; } });
Object.defineProperty(exports, "THIRTYONE_THREE_COMMA", { enumerable: true, get: function () { return ji_1.THIRTYONE_THREE_COMMA; } });
Object.defineProperty(exports, "OCTAVE_WINDOW", { enumerable: true, get: function () { return ji_1.OCTAVE_WINDOW; } });
Object.defineProperty(exports, "APOTOME", { enumerable: true, get: function () { return ji_1.APOTOME; } });
Object.defineProperty(exports, "SCHISMA", { enumerable: true, get: function () { return ji_1.SCHISMA; } });
Object.defineProperty(exports, "SCHISMINA", { enumerable: true, get: function () { return ji_1.SCHISMINA; } });
Object.defineProperty(exports, "SEPTIMAL_COMMA", { enumerable: true, get: function () { return ji_1.SEPTIMAL_COMMA; } });
Object.defineProperty(exports, "SEPTIMAL_KLEISMA", { enumerable: true, get: function () { return ji_1.SEPTIMAL_KLEISMA; } });
Object.defineProperty(exports, "SYNTONIC_COMMA", { enumerable: true, get: function () { return ji_1.SYNTONIC_COMMA; } });
var specHelpers_1 = __webpack_require__(147);
Object.defineProperty(exports, "two3FreeClassFixture", { enumerable: true, get: function () { return specHelpers_1.two3FreeClassFixture; } });
Object.defineProperty(exports, "computePitchExpectation", { enumerable: true, get: function () { return specHelpers_1.computePitchExpectation; } });


/***/ }),
/* 136 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.computeCentsFromPitch = exports.computePitchFromCents = exports.subtractPitch = exports.dividePitch = void 0;
var math_1 = __webpack_require__(6);
var constants_1 = __webpack_require__(137);
var computePitchFromCents = function (cents) {
    return math_1.computeScamonFromDecimal(Math.pow(2, (cents / constants_1.CENTS_PER_OCTAVE)));
};
exports.computePitchFromCents = computePitchFromCents;
var computeCentsFromPitch = function (pitch) {
    return math_1.log(math_1.computeIrrationalDecimalFromScamon(pitch), math_1.BASE_2) * constants_1.CENTS_PER_OCTAVE;
};
exports.computeCentsFromPitch = computeCentsFromPitch;
var dividePitch = function (dividendPitch, divisorPitch) {
    return computeCentsFromPitch(dividendPitch) / computeCentsFromPitch(divisorPitch);
};
exports.dividePitch = dividePitch;
var subtractPitch = function (minuendPitch, subtrahendPitch) {
    return math_1.subtract(computeCentsFromPitch(minuendPitch), computeCentsFromPitch(subtrahendPitch));
};
exports.subtractPitch = subtractPitch;


/***/ }),
/* 137 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.CENTS_PER_OCTAVE = void 0;
var CENTS_PER_OCTAVE = 1200;
exports.CENTS_PER_OCTAVE = CENTS_PER_OCTAVE;


/***/ }),
/* 138 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __read = (this && this.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.computeLowerAndUpperExclusive = void 0;
var code_1 = __webpack_require__(4);
var computeLowerAndUpperExclusive = function (exclusive) {
    if (code_1.isArray(exclusive)) {
        var _a = __read(exclusive, 2), lowerExclusive = _a[0], upperExclusive = _a[1];
        return { lowerExclusive: lowerExclusive, upperExclusive: upperExclusive };
    }
    else if (code_1.isUndefined(exclusive)) {
        return { lowerExclusive: undefined, upperExclusive: undefined };
    }
    else {
        return { lowerExclusive: exclusive, upperExclusive: exclusive };
    }
};
exports.computeLowerAndUpperExclusive = computeLowerAndUpperExclusive;


/***/ }),
/* 139 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.TWO_3_FREE_CLASS_SIGN = exports.TWO_3_FREE = exports.COMMA_POPULARITIES = exports.compute23FreeClass = exports.format23FreeClass = exports.compute23FreeClassName = exports.SYNTONIC_COMMA = exports.SEPTIMAL_KLEISMA = exports.SEPTIMAL_COMMA = exports.SCHISMINA = exports.SCHISMA = exports.APOTOME = exports.OCTAVE_WINDOW = exports.THIRTYONE_THREE_COMMA = exports.PYTHAGOREAN_WHOLE_TONE = exports.PYTHAGOREAN_LARGE_DIESIS = exports.SUPERCOMPLEX_PYTHAGOREAN_KLEISMA = exports.PYTHAGOREAN_SCHISMA = exports.PYTHAGOREAN_LIMMA = exports.PYTHAGOREAN_COMMA = exports.UNISON = exports.THREE_PRIME_LIMIT = void 0;
var constants_1 = __webpack_require__(140);
Object.defineProperty(exports, "THREE_PRIME_LIMIT", { enumerable: true, get: function () { return constants_1.THREE_PRIME_LIMIT; } });
Object.defineProperty(exports, "UNISON", { enumerable: true, get: function () { return constants_1.UNISON; } });
Object.defineProperty(exports, "PYTHAGOREAN_COMMA", { enumerable: true, get: function () { return constants_1.PYTHAGOREAN_COMMA; } });
Object.defineProperty(exports, "PYTHAGOREAN_LIMMA", { enumerable: true, get: function () { return constants_1.PYTHAGOREAN_LIMMA; } });
Object.defineProperty(exports, "PYTHAGOREAN_SCHISMA", { enumerable: true, get: function () { return constants_1.PYTHAGOREAN_SCHISMA; } });
Object.defineProperty(exports, "SUPERCOMPLEX_PYTHAGOREAN_KLEISMA", { enumerable: true, get: function () { return constants_1.SUPERCOMPLEX_PYTHAGOREAN_KLEISMA; } });
Object.defineProperty(exports, "PYTHAGOREAN_LARGE_DIESIS", { enumerable: true, get: function () { return constants_1.PYTHAGOREAN_LARGE_DIESIS; } });
Object.defineProperty(exports, "PYTHAGOREAN_WHOLE_TONE", { enumerable: true, get: function () { return constants_1.PYTHAGOREAN_WHOLE_TONE; } });
Object.defineProperty(exports, "THIRTYONE_THREE_COMMA", { enumerable: true, get: function () { return constants_1.THIRTYONE_THREE_COMMA; } });
Object.defineProperty(exports, "OCTAVE_WINDOW", { enumerable: true, get: function () { return constants_1.OCTAVE_WINDOW; } });
Object.defineProperty(exports, "APOTOME", { enumerable: true, get: function () { return constants_1.APOTOME; } });
Object.defineProperty(exports, "SCHISMA", { enumerable: true, get: function () { return constants_1.SCHISMA; } });
Object.defineProperty(exports, "SCHISMINA", { enumerable: true, get: function () { return constants_1.SCHISMINA; } });
Object.defineProperty(exports, "SEPTIMAL_COMMA", { enumerable: true, get: function () { return constants_1.SEPTIMAL_COMMA; } });
Object.defineProperty(exports, "SEPTIMAL_KLEISMA", { enumerable: true, get: function () { return constants_1.SEPTIMAL_KLEISMA; } });
Object.defineProperty(exports, "SYNTONIC_COMMA", { enumerable: true, get: function () { return constants_1.SYNTONIC_COMMA; } });
var two3FreeClass_1 = __webpack_require__(141);
Object.defineProperty(exports, "compute23FreeClassName", { enumerable: true, get: function () { return two3FreeClass_1.compute23FreeClassName; } });
Object.defineProperty(exports, "format23FreeClass", { enumerable: true, get: function () { return two3FreeClass_1.format23FreeClass; } });
Object.defineProperty(exports, "compute23FreeClass", { enumerable: true, get: function () { return two3FreeClass_1.compute23FreeClass; } });
Object.defineProperty(exports, "COMMA_POPULARITIES", { enumerable: true, get: function () { return two3FreeClass_1.COMMA_POPULARITIES; } });
Object.defineProperty(exports, "TWO_3_FREE", { enumerable: true, get: function () { return two3FreeClass_1.TWO_3_FREE; } });
Object.defineProperty(exports, "TWO_3_FREE_CLASS_SIGN", { enumerable: true, get: function () { return two3FreeClass_1.TWO_3_FREE_CLASS_SIGN; } });


/***/ }),
/* 140 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// tslint:disable max-line-length
Object.defineProperty(exports, "__esModule", { value: true });
exports.KLEISMA = exports.SYNTONIC_COMMA = exports.SEPTIMAL_KLEISMA = exports.SEPTIMAL_COMMA = exports.SCHISMINA = exports.SCHISMA = exports.APOTOME = exports.OCTAVE_WINDOW = exports.OCTAVE = exports.THIRTYONE_THREE_COMMA = exports.PYTHAGOREAN_WHOLE_TONE = exports.PYTHAGOREAN_LARGE_DIESIS = exports.SUPERCOMPLEX_PYTHAGOREAN_KLEISMA = exports.PYTHAGOREAN_SCHISMA = exports.PYTHAGOREAN_LIMMA = exports.PYTHAGOREAN_COMMA = exports.UNISON = exports.SEVEN_PRIME_LIMIT = exports.FIVE_PRIME_LIMIT = exports.THREE_PRIME_LIMIT = void 0;
var THREE_PRIME_LIMIT = 3;
exports.THREE_PRIME_LIMIT = THREE_PRIME_LIMIT;
var FIVE_PRIME_LIMIT = 5;
exports.FIVE_PRIME_LIMIT = FIVE_PRIME_LIMIT;
var SEVEN_PRIME_LIMIT = 7;
exports.SEVEN_PRIME_LIMIT = SEVEN_PRIME_LIMIT;
// I wish I could use the EMPTY_MONZO here but it leads to bundling errors
var UNISON = { monzo: [] };
exports.UNISON = UNISON;
var OCTAVE = { monzo: [1] };
exports.OCTAVE = OCTAVE;
// This may be of interest: http://forum.sagittal.org/viewtopic.php?p=1723#p1723
var PYTHAGOREAN_SCHISMA = { monzo: [-84, 53] }; // 3s       Mercator's comma          3.615046¢
exports.PYTHAGOREAN_SCHISMA = PYTHAGOREAN_SCHISMA;
var SUPERCOMPLEX_PYTHAGOREAN_KLEISMA = { monzo: [317, -200] }; // 3k                                 8.999827¢
exports.SUPERCOMPLEX_PYTHAGOREAN_KLEISMA = SUPERCOMPLEX_PYTHAGOREAN_KLEISMA;
var PYTHAGOREAN_COMMA = { monzo: [-19, 12] }; // 3C       ditonic comma            23.460010¢   531441/524288
exports.PYTHAGOREAN_COMMA = PYTHAGOREAN_COMMA;
var PYTHAGOREAN_LARGE_DIESIS = { monzo: [27, -17] }; // 3L       17-comma                 66.764985¢
exports.PYTHAGOREAN_LARGE_DIESIS = PYTHAGOREAN_LARGE_DIESIS;
var PYTHAGOREAN_LIMMA = { monzo: [8, -5] }; // 3SS      Pythagorean semitone     90.224996¢      256/243
exports.PYTHAGOREAN_LIMMA = PYTHAGOREAN_LIMMA;
var APOTOME = { monzo: [-11, 7] }; // 3A       chromatic semitone      113.685006¢     2187/2048
exports.APOTOME = APOTOME;
var THIRTYONE_THREE_COMMA = { monzo: [-49, 31] }; // 3M+A                             160.605027¢
exports.THIRTYONE_THREE_COMMA = THIRTYONE_THREE_COMMA;
var PYTHAGOREAN_WHOLE_TONE = { monzo: [-3, 2] }; // 3MS+A                            203.910002¢        9/8
exports.PYTHAGOREAN_WHOLE_TONE = PYTHAGOREAN_WHOLE_TONE;
var OCTAVE_WINDOW = 2;
exports.OCTAVE_WINDOW = OCTAVE_WINDOW;
var SCHISMINA = { monzo: [12, -2, -1, -1, 0, -1] };
exports.SCHISMINA = SCHISMINA;
var SCHISMA = { monzo: [-15, 8, 1] };
exports.SCHISMA = SCHISMA;
var KLEISMA = { monzo: [-6, -5, 6] };
exports.KLEISMA = KLEISMA;
var SYNTONIC_COMMA = { monzo: [-4, 4, -1] };
exports.SYNTONIC_COMMA = SYNTONIC_COMMA;
var SEPTIMAL_KLEISMA = { monzo: [-5, 2, 2, -1] };
exports.SEPTIMAL_KLEISMA = SEPTIMAL_KLEISMA;
var SEPTIMAL_COMMA = { monzo: [6, -2, 0, -1] };
exports.SEPTIMAL_COMMA = SEPTIMAL_COMMA;


/***/ }),
/* 141 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.TWO_3_FREE_CLASS_SIGN = exports.TWO_3_FREE = exports.compute23FreeClassName = exports.format23FreeClass = exports.compute23FreeClass = exports.COMMA_POPULARITIES = void 0;
var popularities_1 = __webpack_require__(142);
Object.defineProperty(exports, "COMMA_POPULARITIES", { enumerable: true, get: function () { return popularities_1.COMMA_POPULARITIES; } });
var two3FreeClass_1 = __webpack_require__(143);
Object.defineProperty(exports, "compute23FreeClass", { enumerable: true, get: function () { return two3FreeClass_1.compute23FreeClass; } });
var format_1 = __webpack_require__(145);
Object.defineProperty(exports, "format23FreeClass", { enumerable: true, get: function () { return format_1.format23FreeClass; } });
var name_1 = __webpack_require__(146);
Object.defineProperty(exports, "compute23FreeClassName", { enumerable: true, get: function () { return name_1.compute23FreeClassName; } });
var constants_1 = __webpack_require__(144);
Object.defineProperty(exports, "TWO_3_FREE", { enumerable: true, get: function () { return constants_1.TWO_3_FREE; } });
Object.defineProperty(exports, "TWO_3_FREE_CLASS_SIGN", { enumerable: true, get: function () { return constants_1.TWO_3_FREE_CLASS_SIGN; } });


/***/ }),
/* 142 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// tslint:disable max-line-length
Object.defineProperty(exports, "__esModule", { value: true });
exports.COMMA_POPULARITIES = void 0;
// Per Scala statistics
// See: http://www.huygens-fokker.org/microtonality/scales.html
var COMMA_POPULARITIES = [
    { rank: 1, two3FreeClass: { monzo: [] /*[1, 1]*/ }, votes: 7624 },
    { rank: 2, two3FreeClass: { monzo: [0, 0, 1] /*[5, 1]*/ }, votes: 5371 },
    { rank: 3, two3FreeClass: { monzo: [0, 0, 0, 1] /*[7, 1]*/ }, votes: 3016 },
    { rank: 4, two3FreeClass: { monzo: [0, 0, 2] /*[25, 1]*/ }, votes: 1610 },
    { rank: 5, two3FreeClass: { monzo: [0, 0, -1, 1] /*[7, 5]*/ }, votes: 1318 },
    { rank: 6, two3FreeClass: { monzo: [0, 0, 0, 0, 1] /*[11, 1]*/ }, votes: 1002 },
    { rank: 7, two3FreeClass: { monzo: [0, 0, 1, 1] /*[35, 1]*/ }, votes: 875 },
    { rank: 8, two3FreeClass: { monzo: [0, 0, 3] /*[125, 1]*/ }, votes: 492 },
    { rank: 9, two3FreeClass: { monzo: [0, 0, 0, 2] /*[49, 1]*/ }, votes: 463 },
    { rank: 10, two3FreeClass: { monzo: [0, 0, 0, 0, 0, 1] /*[13, 1]*/ }, votes: 447 },
    { rank: 11, two3FreeClass: { monzo: [0, 0, -1, 0, 1] /*[11, 5]*/ }, votes: 339 },
    { rank: 12, two3FreeClass: { monzo: [0, 0, 0, -1, 1] /*[11, 7]*/ }, votes: 324 },
    { rank: 13, two3FreeClass: { monzo: [0, 0, 0, 0, 0, 0, 1] /*[17, 1]*/ }, votes: 318 },
    { rank: 14, two3FreeClass: { monzo: [0, 0, 2, -1] /*[25, 7]*/ }, votes: 312 },
    { rank: 15, two3FreeClass: { monzo: [0, 0, -1, 2] /*[49, 5]*/ }, votes: 246 },
    { rank: 16, two3FreeClass: { monzo: [0, 0, -1, 0, 0, 1] /*[13, 5]*/ }, votes: 205 },
    { rank: 17, two3FreeClass: { monzo: [0, 0, 2, 1] /*[175, 1]*/ }, votes: 168 },
    { rank: 18, two3FreeClass: { monzo: [0, 0, 0, 0, 0, 0, 0, 1] /*[19, 1]*/ }, votes: 166 },
    { rank: 19, two3FreeClass: { monzo: [0, 0, 1, 2] /*[245, 1]*/ }, votes: 165 },
    { rank: 20, two3FreeClass: { monzo: [0, 0, 0, -1, 0, 1] /*[13, 7]*/ }, votes: 145 },
    { rank: 21, two3FreeClass: { monzo: [0, 0, 4] /*[625, 1]*/ }, votes: 143 },
    { rank: 22, two3FreeClass: { monzo: [0, 0, 0, 0, 0, 0, 0, 0, 1] /*[23, 1]*/ }, votes: 136 },
    { rank: 23, two3FreeClass: { monzo: [0, 0, -2, 2] /*[49, 25]*/ }, votes: 134 },
    { rank: 24, two3FreeClass: { monzo: [0, 0, 1, 0, 1] /*[55, 1]*/ }, votes: 119 },
    { rank: 25, two3FreeClass: { monzo: [0, 0, 0, 1, 1] /*[77, 1]*/ }, votes: 111 },
    { rank: 26, two3FreeClass: { monzo: [0, 0, -1, 0, 0, 0, 1] /*[17, 5]*/ }, votes: 108 },
    { rank: 27, two3FreeClass: { monzo: [0, 0, -1, 0, 0, 0, 0, 1] /*[19, 5]*/ }, votes: 97 },
    { rank: 28, two3FreeClass: { monzo: [0, 0, 1, 1, -1] /*[35, 11]*/ }, votes: 92 },
    { rank: 29, two3FreeClass: { monzo: [0, 0, 0, 0, -1, 1] /*[13, 11]*/ }, votes: 89 },
    { rank: 30, two3FreeClass: { monzo: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1] /*[31, 1]*/ }, votes: 80 },
    { rank: 31, two3FreeClass: { monzo: [0, 0, 0, 3] /*[343, 1]*/ }, votes: 70 },
    { rank: 32, two3FreeClass: { monzo: [0, 0, 0, 0, 0, 0, 0, 0, 0, 1] /*[29, 1]*/ }, votes: 67 },
    { rank: 33, two3FreeClass: { monzo: [0, 0, 3, -1] /*[125, 7]*/ }, votes: 62 },
    { rank: 34, two3FreeClass: { monzo: [0, 0, 1, -1, 1] /*[55, 7]*/ }, votes: 61 },
    { rank: 35.5, two3FreeClass: { monzo: [0, 0, 0, 0, -1, 0, 1] /*[17, 11]*/ }, votes: 55 },
    { rank: 35.5, two3FreeClass: { monzo: [0, 0, -1, 1, 1] /*[77, 5]*/ }, votes: 55 },
    { rank: 37.5, two3FreeClass: { monzo: [0, 0, 0, -1, 0, 0, 0, 1] /*[19, 7]*/ }, votes: 52 },
    { rank: 37.5, two3FreeClass: { monzo: [0, 0, 1, 1, 1] /*[385, 1]*/ }, votes: 52 },
    { rank: 39, two3FreeClass: { monzo: [0, 0, 1, -2, 1] /*[55, 49]*/ }, votes: 51 },
    { rank: 40, two3FreeClass: { monzo: [0, 0, 0, -1, 0, 0, 1] /*[17, 7]*/ }, votes: 50 },
    { rank: 41, two3FreeClass: { monzo: [0, 0, 2, 2] /*[1225, 1]*/ }, votes: 47 },
    { rank: 42.5, two3FreeClass: { monzo: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1] /*[37, 1]*/ }, votes: 46 },
    { rank: 42.5, two3FreeClass: { monzo: [0, 0, 0, 0, 2] /*[121, 1]*/ }, votes: 46 },
    { rank: 44, two3FreeClass: { monzo: [0, 0, -1, 0, 0, 0, 0, 0, 1] /*[23, 5]*/ }, votes: 45 },
    { rank: 45, two3FreeClass: { monzo: [0, 0, 0, 0, 0, -1, 0, 1] /*[19, 13]*/ }, votes: 44 },
    { rank: 47, two3FreeClass: { monzo: [0, 0, 0, 0, 0, -1, 1] /*[17, 13]*/ }, votes: 42 },
    { rank: 47, two3FreeClass: { monzo: [0, 0, 0, -1, 0, 0, 0, 0, 1] /*[23, 7]*/ }, votes: 42 },
    { rank: 47, two3FreeClass: { monzo: [0, 0, 2, 0, -1] /*[25, 11]*/ }, votes: 42 },
    { rank: 49, two3FreeClass: { monzo: [0, 0, 0, 0, -1, 0, 0, 0, 0, 0, 1] /*[31, 11]*/ }, votes: 41 },
    { rank: 50, two3FreeClass: { monzo: [0, 0, 1, 0, 0, 1] /*[65, 1]*/ }, votes: 40 },
    { rank: 51, two3FreeClass: { monzo: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1] /*[47, 1]*/ }, votes: 37 },
    { rank: 52.5, two3FreeClass: { monzo: [0, 0, 2, 0, 0, -1] /*[25, 13]*/ }, votes: 34 },
    { rank: 52.5, two3FreeClass: { monzo: [0, 0, 5] /*[3125, 1]*/ }, votes: 34 },
    { rank: 54, two3FreeClass: { monzo: [0, 0, 0, 2, -1] /*[49, 11]*/ }, votes: 33 },
    { rank: 55.5, two3FreeClass: { monzo: [0, 0, 0, 0, -1, 0, 0, 1] /*[19, 11]*/ }, votes: 31 },
    { rank: 55.5, two3FreeClass: { monzo: [0, 0, -1, 3] /*[343, 5]*/ }, votes: 31 },
    { rank: 57, two3FreeClass: { monzo: [0, 0, 0, 1, 0, 1] /*[91, 1]*/ }, votes: 30 },
    { rank: 58, two3FreeClass: { monzo: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1] /*[43, 1]*/ }, votes: 29 },
    { rank: 59.5, two3FreeClass: { monzo: [0, 0, -1, 0, 0, 0, 0, 0, 0, 1] /*[29, 5]*/ }, votes: 28 },
    { rank: 59.5, two3FreeClass: { monzo: [0, 0, 0, 0, -1, 0, 0, 0, 0, 0, 0, 1] /*[37, 11]*/ }, votes: 28 },
    { rank: 63, two3FreeClass: { monzo: [0, 0, 0, 0, -1, 0, 0, 0, 1] /*[23, 11]*/ }, votes: 27 },
    { rank: 63, two3FreeClass: { monzo: [0, 0, 0, 0, 0, -1, 0, 0, 1] /*[23, 13]*/ }, votes: 27 },
    { rank: 63, two3FreeClass: { monzo: [0, 0, -2, 1, 1] /*[77, 25]*/ }, votes: 27 },
    { rank: 63, two3FreeClass: { monzo: [0, 0, 3, -2] /*[125, 49]*/ }, votes: 27 },
    { rank: 63, two3FreeClass: { monzo: [0, 0, 6] /*[15625, 1]*/ }, votes: 27 },
    { rank: 66, two3FreeClass: { monzo: [0, 0, 0, 0, 1, 1] /*[143, 1]*/ }, votes: 26 },
    { rank: 68, two3FreeClass: { monzo: [0, 0, -1, 0, 0, 0, 0, 0, 0, 0, 1] /*[31, 5]*/ }, votes: 25 },
    { rank: 68, two3FreeClass: { monzo: [0, 0, 1, 1, 0, -1] /*[35, 13]*/ }, votes: 25 },
    { rank: 68, two3FreeClass: { monzo: [0, 0, -2, 3] /*[343, 25]*/ }, votes: 25 },
    { rank: 70, two3FreeClass: { monzo: [0, 0, -1, 0, 0, 0, 0, 0, 0, 0, 0, 1] /*[37, 5]*/ }, votes: 24 },
    { rank: 72, two3FreeClass: { monzo: [0, 0, 0, 0, 0, 0, -1, 1] /*[19, 17]*/ }, votes: 23 },
    { rank: 72, two3FreeClass: { monzo: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1] /*[41, 1]*/ }, votes: 23 },
    { rank: 72, two3FreeClass: { monzo: [0, 0, 1, 0, 0, 0, 0, 1] /*[95, 1]*/ }, votes: 23 },
    { rank: 74, two3FreeClass: { monzo: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1] /*[53, 1]*/ }, votes: 22 },
    { rank: 76, two3FreeClass: { monzo: [0, 0, 0, 0, 0, 0, -1, 0, 1] /*[23, 17]*/ }, votes: 21 },
    { rank: 76, two3FreeClass: { monzo: [0, 0, 3, 1] /*[875, 1]*/ }, votes: 21 },
    { rank: 76, two3FreeClass: { monzo: [0, 0, 1, 3] /*[1715, 1]*/ }, votes: 21 },
    { rank: 78, two3FreeClass: { monzo: [0, 0, 1, 0, 0, 0, 1] /*[85, 1]*/ }, votes: 20 },
    { rank: 79.5, two3FreeClass: { monzo: [0, 0, 2, 0, 0, 0, 0, -1] /*[25, 19]*/ }, votes: 19 },
    { rank: 79.5, two3FreeClass: { monzo: [0, 0, 0, 4] /*[2401, 1]*/ }, votes: 19 },
    { rank: 81, two3FreeClass: { monzo: [0, 0, 0, 0, 0, 0, -1, 0, 0, 0, 1] /*[31, 17]*/ }, votes: 16 },
    { rank: 83, two3FreeClass: { monzo: [0, 0, 0, -1, 0, 0, 0, 0, 0, 1] /*[29, 7]*/ }, votes: 15 },
    { rank: 83, two3FreeClass: { monzo: [0, 0, 0, 0, -1, 0, 0, 0, 0, 0, 0, 0, 0, 1] /*[43, 11]*/ }, votes: 15 },
    { rank: 83, two3FreeClass: { monzo: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1] /*[59, 1]*/ }, votes: 15 },
    { rank: 86, two3FreeClass: { monzo: [0, 0, 0, 0, 0, 0, 0, 0, -1, 0, 1] /*[31, 23]*/ }, votes: 14 },
    { rank: 86, two3FreeClass: { monzo: [0, 0, 0, 0, 0, 2] /*[169, 1]*/ }, votes: 14 },
    { rank: 86, two3FreeClass: { monzo: [0, 0, 3, 0, 0, 0, 0, 1] /*[2375, 1]*/ }, votes: 14 },
    { rank: 90, two3FreeClass: { monzo: [0, 0, 0, 0, -1, 0, 0, 0, 0, 1] /*[29, 11]*/ }, votes: 13 },
    { rank: 90, two3FreeClass: { monzo: [0, 0, 0, 0, 0, -1, 0, 0, 0, 0, 0, 1] /*[37, 13]*/ }, votes: 13 },
    { rank: 90, two3FreeClass: { monzo: [0, 0, -1, 0, 1, 1] /*[143, 5]*/ }, votes: 13 },
    { rank: 90, two3FreeClass: { monzo: [0, 0, 0, 0, -1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1] /*[211, 11]*/ }, votes: 13 },
    { rank: 90, two3FreeClass: { monzo: [0, 0, 7] /*[78125, 1]*/ }, votes: 13 },
    { rank: 94.5, two3FreeClass: { monzo: [0, 0, 0, 0, 0, 0, 0, -1, 0, 0, 0, 1] /*[37, 19]*/ }, votes: 12 },
    { rank: 94.5, two3FreeClass: { monzo: [0, 0, 2, 0, 0, 0, 0, 1] /*[475, 1]*/ }, votes: 12 },
    { rank: 94.5, two3FreeClass: { monzo: [0, 0, 1, 0, 2] /*[605, 1]*/ }, votes: 12 },
    { rank: 94.5, two3FreeClass: { monzo: [0, 0, 4, -2] /*[625, 49]*/ }, votes: 12 },
    { rank: 102.5, two3FreeClass: { monzo: [0, 0, 0, 0, 0, 0, 0, -1, 1] /*[23, 19]*/ }, votes: 11 },
    { rank: 102.5, two3FreeClass: { monzo: [0, 0, 0, 0, 0, -1, 0, 0, 0, 1] /*[29, 13]*/ }, votes: 11 },
    { rank: 102.5, two3FreeClass: { monzo: [0, 0, 0, 2, 0, 0, 0, -1] /*[49, 19]*/ }, votes: 11 },
    { rank: 102.5, two3FreeClass: { monzo: [0, 0, 1, -1, 0, 1] /*[65, 7]*/ }, votes: 11 },
    { rank: 102.5, two3FreeClass: { monzo: [0, 0, 0, 0, 0, 0, 0, -1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1] /*[67, 19]*/ }, votes: 11 },
    { rank: 102.5, two3FreeClass: { monzo: [0, 0, -1, 1, 0, 1] /*[91, 5]*/ }, votes: 11 },
    { rank: 102.5, two3FreeClass: { monzo: [0, 0, -1, -1, 2] /*[121, 35]*/ }, votes: 11 },
    { rank: 102.5, two3FreeClass: { monzo: [0, 0, 2, 1, -1] /*[175, 11]*/ }, votes: 11 },
    { rank: 102.5, two3FreeClass: { monzo: [0, 0, 2, -2, 1] /*[275, 49]*/ }, votes: 11 },
    { rank: 102.5, two3FreeClass: { monzo: [0, 0, -3, 3] /*[343, 125]*/ }, votes: 11 },
    { rank: 102.5, two3FreeClass: { monzo: [0, 0, -3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1] /*[433, 125]*/ }, votes: 11 },
    { rank: 102.5, two3FreeClass: { monzo: [0, 0, 0, 6] /*[117649, 1]*/ }, votes: 11 },
    { rank: 113, two3FreeClass: { monzo: [0, 0, -2, 0, 0, 0, 0, 0, 0, 1] /*[29, 25]*/ }, votes: 10 },
    { rank: 113, two3FreeClass: { monzo: [0, 0, 0, -1, 0, 0, 0, 0, 0, 0, 1] /*[31, 7]*/ }, votes: 10 },
    { rank: 113, two3FreeClass: { monzo: [0, 0, -2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1] /*[47, 25]*/ }, votes: 10 },
    { rank: 113, two3FreeClass: { monzo: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1] /*[61, 1]*/ }, votes: 10 },
    { rank: 113, two3FreeClass: { monzo: [0, 0, 3, -1, -1] /*[125, 77]*/ }, votes: 10 },
    { rank: 113, two3FreeClass: { monzo: [0, 0, 1, 2, -1] /*[245, 11]*/ }, votes: 10 },
    { rank: 113, two3FreeClass: { monzo: [0, 0, 4, -1] /*[625, 7]*/ }, votes: 10 },
    { rank: 113, two3FreeClass: { monzo: [0, 0, 0, 1, 2] /*[847, 1]*/ }, votes: 10 },
    { rank: 113, two3FreeClass: { monzo: [0, 0, 0, 5] /*[16807, 1]*/ }, votes: 10 },
    { rank: 123.5, two3FreeClass: { monzo: [0, 0, 0, 0, 0, -1, 0, 0, 0, 0, 1] /*[31, 13]*/ }, votes: 9 },
    { rank: 123.5, two3FreeClass: { monzo: [0, 0, 1, 1, 0, 0, -1] /*[35, 17]*/ }, votes: 9 },
    { rank: 123.5, two3FreeClass: { monzo: [0, 0, 0, -1, 0, 0, 0, 0, 0, 0, 0, 1] /*[37, 7]*/ }, votes: 9 },
    { rank: 123.5, two3FreeClass: { monzo: [0, 0, 0, 0, 0, 0, -1, 0, 0, 0, 0, 1] /*[37, 17]*/ }, votes: 9 },
    { rank: 123.5, two3FreeClass: { monzo: [0, 0, 0, -1, 0, 0, 0, 0, 0, 0, 0, 0, 1] /*[41, 7]*/ }, votes: 9 },
    { rank: 123.5, two3FreeClass: { monzo: [0, 0, 0, 2, 0, 0, 0, 0, 0, 0, -1] /*[49, 31]*/ }, votes: 9 },
    { rank: 123.5, two3FreeClass: { monzo: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, -1, 0, 0, 0, 0, 1] /*[53, 31]*/ }, votes: 9 },
    { rank: 123.5, two3FreeClass: { monzo: [0, 0, 1, 0, 1, 0, 0, -1] /*[55, 19]*/ }, votes: 9 },
    { rank: 123.5, two3FreeClass: { monzo: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1] /*[97, 1]*/ }, votes: 9 },
    { rank: 123.5, two3FreeClass: { monzo: [0, 0, 0, -1, 1, 1] /*[143, 7]*/ }, votes: 9 },
    { rank: 123.5, two3FreeClass: { monzo: [0, 0, 1, 0, 0, -1, -1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1] /*[295, 221]*/ }, votes: 9 },
    { rank: 123.5, two3FreeClass: { monzo: [0, 0, 2, 3] /*[8575, 1]*/ }, votes: 9 },
    { rank: 134.5, two3FreeClass: { monzo: [0, 0, 2, 0, 0, 0, -1] /*[25, 17]*/ }, votes: 8 },
    { rank: 134.5, two3FreeClass: { monzo: [0, 0, -1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1] /*[47, 5]*/ }, votes: 8 },
    { rank: 134.5, two3FreeClass: { monzo: [0, 0, 0, 0, -1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1] /*[47, 11]*/ }, votes: 8 },
    { rank: 134.5, two3FreeClass: { monzo: [0, 0, 0, 0, 0, -1, 0, 0, 0, 0, 0, 0, 0, 0, 1] /*[47, 13]*/ }, votes: 8 },
    { rank: 134.5, two3FreeClass: { monzo: [0, 0, -1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1] /*[73, 5]*/ }, votes: 8 },
    { rank: 134.5, two3FreeClass: { monzo: [0, 0, 0, 1, 1, -1] /*[77, 13]*/ }, votes: 8 },
    { rank: 134.5, two3FreeClass: { monzo: [0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, -1] /*[85, 37]*/ }, votes: 8 },
    { rank: 134.5, two3FreeClass: { monzo: [0, 0, 0, -1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1] /*[89, 7]*/ }, votes: 8 },
    { rank: 134.5, two3FreeClass: { monzo: [0, 0, 0, -2, 2] /*[121, 49]*/ }, votes: 8 },
    { rank: 134.5, two3FreeClass: { monzo: [0, 0, -1, 4] /*[2401, 5]*/ }, votes: 8 },
    { rank: 147, two3FreeClass: { monzo: [0, 0, 0, 0, 0, 0, 0, -1, 0, 1] /*[29, 19]*/ }, votes: 7 },
    { rank: 147, two3FreeClass: { monzo: [0, 0, 0, 0, 0, 0, 0, -1, 0, 0, 1] /*[31, 19]*/ }, votes: 7 },
    { rank: 147, two3FreeClass: { monzo: [0, 0, 0, -1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1] /*[43, 7]*/ }, votes: 7 },
    { rank: 147, two3FreeClass: { monzo: [0, 0, 0, 2, 0, -1] /*[49, 13]*/ }, votes: 7 },
    { rank: 147, two3FreeClass: { monzo: [0, 0, 0, 0, -1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1] /*[59, 11]*/ }, votes: 7 },
    { rank: 147, two3FreeClass: { monzo: [0, 0, -1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1] /*[61, 5]*/ }, votes: 7 },
    { rank: 147, two3FreeClass: { monzo: [0, 0, 0, -1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1] /*[61, 7]*/ }, votes: 7 },
    { rank: 147, two3FreeClass: { monzo: [0, 0, 0, -1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1] /*[97, 7]*/ }, votes: 7 },
    { rank: 147, two3FreeClass: { monzo: [0, 0, -1, 0, 2] /*[121, 5]*/ }, votes: 7 },
    { rank: 147, two3FreeClass: { monzo: [0, 0, 3, 0, -1] /*[125, 11]*/ }, votes: 7 },
    { rank: 147, two3FreeClass: { monzo: [0, 0, 2, 0, 1] /*[275, 1]*/ }, votes: 7 },
    { rank: 147, two3FreeClass: { monzo: [0, 0, 2, -1, 1] /*[275, 7]*/ }, votes: 7 },
    { rank: 147, two3FreeClass: { monzo: [0, 0, 0, 1, 1, 1] /*[1001, 1]*/ }, votes: 7 },
    { rank: 147, two3FreeClass: { monzo: [0, 0, 4, 1] /*[4375, 1]*/ }, votes: 7 },
    { rank: 147, two3FreeClass: { monzo: [0, 0, 0, 8] /*[5764801, 1]*/ }, votes: 7 },
    { rank: 164, two3FreeClass: { monzo: [0, 0, 2, 0, 0, 0, 0, 0, -1] /*[25, 23]*/ }, votes: 6 },
    { rank: 164, two3FreeClass: { monzo: [0, 0, 1, 1, 0, 0, 0, -1] /*[35, 19]*/ }, votes: 6 },
    { rank: 164, two3FreeClass: { monzo: [0, 0, 1, 1, 0, 0, 0, 0, -1] /*[35, 23]*/ }, votes: 6 },
    { rank: 164, two3FreeClass: { monzo: [0, 0, -1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1] /*[41, 5]*/ }, votes: 6 },
    { rank: 164, two3FreeClass: { monzo: [0, 0, -1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1] /*[43, 5]*/ }, votes: 6 },
    { rank: 164, two3FreeClass: { monzo: [0, 0, 0, 0, 0, 0, 0, 0, -1, 0, 0, 0, 0, 1] /*[43, 23]*/ }, votes: 6 },
    { rank: 164, two3FreeClass: { monzo: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, -1, 0, 0, 1] /*[43, 31]*/ }, votes: 6 },
    { rank: 164, two3FreeClass: { monzo: [0, 0, -1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1] /*[53, 5]*/ }, votes: 6 },
    { rank: 164, two3FreeClass: { monzo: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, -1, 0, 0, 0, 0, 0, 1] /*[59, 31]*/ }, votes: 6 },
    { rank: 164, two3FreeClass: { monzo: [0, 0, 1, 0, -1, 1] /*[65, 11]*/ }, votes: 6 },
    { rank: 164, two3FreeClass: { monzo: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1] /*[83, 1]*/ }, votes: 6 },
    { rank: 164, two3FreeClass: { monzo: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, -1, 0, 0, 0, 0, 1] /*[83, 61]*/ }, votes: 6 },
    { rank: 164, two3FreeClass: { monzo: [0, 0, 0, 0, -1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1] /*[97, 11]*/ }, votes: 6 },
    { rank: 164, two3FreeClass: { monzo: [0, 0, 0, -1, 2] /*[121, 7]*/ }, votes: 6 },
    { rank: 164, two3FreeClass: { monzo: [0, 0, -1, 1, 1, 1] /*[1001, 5]*/ }, votes: 6 },
    { rank: 164, two3FreeClass: { monzo: [0, 0, 5, -2] /*[3125, 49]*/ }, votes: 6 },
    { rank: 164, two3FreeClass: { monzo: [0, 0, 1, 1, 1, 1] /*[5005, 1]*/ }, votes: 6 },
    { rank: 164, two3FreeClass: { monzo: [0, 0, 3, 2] /*[6125, 1]*/ }, votes: 6 },
    { rank: 164, two3FreeClass: { monzo: [0, 0, 4, 0, 0, 0, 0, 1] /*[11875, 1]*/ }, votes: 6 },
    { rank: 186.5, two3FreeClass: { monzo: [0, 0, 0, 0, 0, 0, -1, 0, 0, 1] /*[29, 17]*/ }, votes: 5 },
    { rank: 186.5, two3FreeClass: { monzo: [0, 0, 0, 0, 0, 0, 0, 0, 0, -1, 1] /*[31, 29]*/ }, votes: 5 },
    { rank: 186.5, two3FreeClass: { monzo: [0, 0, 0, 0, 0, 0, -1, 0, 0, 0, 0, 0, 0, 0, 1] /*[47, 17]*/ }, votes: 5 },
    { rank: 186.5, two3FreeClass: { monzo: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, -1, 0, 0, 1] /*[47, 37]*/ }, votes: 5 },
    { rank: 186.5, two3FreeClass: { monzo: [0, 0, 0, 2, 0, 0, 0, 0, -1] /*[49, 23]*/ }, votes: 5 },
    { rank: 186.5, two3FreeClass: { monzo: [0, 0, 0, 0, -1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1] /*[53, 11]*/ }, votes: 5 },
    { rank: 186.5, two3FreeClass: { monzo: [0, 0, 0, 0, 0, 0, -1, 0, 0, 0, 0, 0, 0, 0, 0, 1] /*[53, 17]*/ }, votes: 5 },
    { rank: 186.5, two3FreeClass: { monzo: [0, 0, 0, 0, 0, 0, 0, 0, -1, 0, 0, 0, 0, 0, 0, 0, 0, 1] /*[61, 23]*/ }, votes: 5 },
    { rank: 186.5, two3FreeClass: { monzo: [0, 0, 0, 0, 0, 0, 0, -1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1] /*[73, 19]*/ }, votes: 5 },
    { rank: 186.5, two3FreeClass: { monzo: [0, 0, 0, 1, 1, 0, 0, -1] /*[77, 19]*/ }, votes: 5 },
    { rank: 186.5, two3FreeClass: { monzo: [0, 0, 1, 0, -1, 0, 1] /*[85, 11]*/ }, votes: 5 },
    { rank: 186.5, two3FreeClass: { monzo: [0, 0, 0, 0, 0, 0, 0, 0, -1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1] /*[89, 23]*/ }, votes: 5 },
    { rank: 186.5, two3FreeClass: { monzo: [0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, -1] /*[91, 59]*/ }, votes: 5 },
    { rank: 186.5, two3FreeClass: { monzo: [0, 0, -1, -1, 1, 1] /*[143, 35]*/ }, votes: 5 },
    { rank: 186.5, two3FreeClass: { monzo: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1] /*[149, 1]*/ }, votes: 5 },
    { rank: 186.5, two3FreeClass: { monzo: [0, 0, -1, 0, 0, 0, 1, 1] /*[323, 5]*/ }, votes: 5 },
    { rank: 186.5, two3FreeClass: { monzo: [0, 0, 1, 1, 0, 1] /*[455, 1]*/ }, votes: 5 },
    { rank: 186.5, two3FreeClass: { monzo: [0, 0, 0, 2, 1] /*[539, 1]*/ }, votes: 5 },
    { rank: 186.5, two3FreeClass: { monzo: [0, 0, 1, 0, 1, 1] /*[715, 1]*/ }, votes: 5 },
    { rank: 186.5, two3FreeClass: { monzo: [0, 0, 0, 0, 3] /*[1331, 1]*/ }, votes: 5 },
    { rank: 186.5, two3FreeClass: { monzo: [0, 0, 1, 1, 2] /*[4235, 1]*/ }, votes: 5 },
    { rank: 186.5, two3FreeClass: { monzo: [0, 0, 1, 4] /*[12005, 1]*/ }, votes: 5 },
    { rank: 186.5, two3FreeClass: { monzo: [0, 0, 8] /*[390625, 1]*/ }, votes: 5 },
    { rank: 186.5, two3FreeClass: { monzo: [0, 0, 0, 7] /*[823543, 1]*/ }, votes: 5 },
    { rank: 186.5, two3FreeClass: { monzo: [0, 0, 9] /*[1953125, 1]*/ }, votes: 5 },
    { rank: 186.5, two3FreeClass: { monzo: [0, 0, 0, 9] /*[40353607, 1]*/ }, votes: 5 },
    { rank: 217.5, two3FreeClass: { monzo: [0, 0, -2, 0, 0, 0, 0, 0, 0, 0, 0, 1] /*[37, 25]*/ }, votes: 4 },
    { rank: 217.5, two3FreeClass: { monzo: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, -1, 1] /*[37, 31]*/ }, votes: 4 },
    { rank: 217.5, two3FreeClass: { monzo: [0, 0, 0, 0, -1, 0, 0, 0, 0, 0, 0, 0, 1] /*[41, 11]*/ }, votes: 4 },
    { rank: 217.5, two3FreeClass: { monzo: [0, 0, 0, 0, 0, -1, 0, 0, 0, 0, 0, 0, 1] /*[41, 13]*/ }, votes: 4 },
    { rank: 217.5, two3FreeClass: { monzo: [0, 0, -2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1] /*[43, 25]*/ }, votes: 4 },
    { rank: 217.5, two3FreeClass: { monzo: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, -1, 1] /*[53, 47]*/ }, votes: 4 },
    { rank: 217.5, two3FreeClass: { monzo: [0, 0, 0, -2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1] /*[53, 49]*/ }, votes: 4 },
    { rank: 217.5, two3FreeClass: { monzo: [0, 0, 1, 0, 1, -1] /*[55, 13]*/ }, votes: 4 },
    { rank: 217.5, two3FreeClass: { monzo: [0, 0, 1, 0, 1, 0, 0, 0, -1] /*[55, 23]*/ }, votes: 4 },
    { rank: 217.5, two3FreeClass: { monzo: [0, 0, 1, 0, 1, 0, 0, 0, 0, -1] /*[55, 29]*/ }, votes: 4 },
    { rank: 217.5, two3FreeClass: { monzo: [0, 0, -1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1] /*[59, 5]*/ }, votes: 4 },
    { rank: 217.5, two3FreeClass: { monzo: [0, 0, 1, 0, 0, 1, -1] /*[65, 17]*/ }, votes: 4 },
    { rank: 217.5, two3FreeClass: { monzo: [0, 0, -1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1] /*[67, 5]*/ }, votes: 4 },
    { rank: 217.5, two3FreeClass: { monzo: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, -1, 0, 0, 0, 0, 0, 1] /*[67, 41]*/ }, votes: 4 },
    { rank: 217.5, two3FreeClass: { monzo: [0, 0, 0, 0, 0, 0, 0, 0, 0, -1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1] /*[71, 29]*/ }, votes: 4 },
    { rank: 217.5, two3FreeClass: { monzo: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, -1, 0, 0, 0, 0, 1] /*[71, 47]*/ }, votes: 4 },
    { rank: 217.5, two3FreeClass: { monzo: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1] /*[73, 1]*/ }, votes: 4 },
    { rank: 217.5, two3FreeClass: { monzo: [0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, -1] /*[77, 41]*/ }, votes: 4 },
    { rank: 217.5, two3FreeClass: { monzo: [0, 0, -1, 1, 1, -1] /*[77, 65]*/ }, votes: 4 },
    { rank: 217.5, two3FreeClass: { monzo: [0, 0, -1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1] /*[79, 5]*/ }, votes: 4 },
    { rank: 217.5, two3FreeClass: { monzo: [0, 0, 0, 0, -1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1] /*[79, 11]*/ }, votes: 4 },
    { rank: 217.5, two3FreeClass: { monzo: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1] /*[89, 1]*/ }, votes: 4 },
    { rank: 217.5, two3FreeClass: { monzo: [0, 0, -1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1] /*[89, 5]*/ }, votes: 4 },
    { rank: 217.5, two3FreeClass: { monzo: [0, 0, 0, -2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1] /*[89, 49]*/ }, votes: 4 },
    { rank: 217.5, two3FreeClass: { monzo: [0, 0, 0, 1, -1, 1] /*[91, 11]*/ }, votes: 4 },
    { rank: 217.5, two3FreeClass: { monzo: [0, 0, -1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1] /*[101, 5]*/ }, votes: 4 },
    { rank: 217.5, two3FreeClass: { monzo: [0, 0, 0, 0, 0, -1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1] /*[103, 13]*/ }, votes: 4 },
    { rank: 217.5, two3FreeClass: { monzo: [0, 0, -1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1] /*[107, 5]*/ }, votes: 4 },
    { rank: 217.5, two3FreeClass: { monzo: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1] /*[109, 1]*/ }, votes: 4 },
    { rank: 217.5, two3FreeClass: { monzo: [0, 0, -1, 1, 0, 0, 1] /*[119, 5]*/ }, votes: 4 },
    { rank: 217.5, two3FreeClass: { monzo: [0, 0, -2, 0, 2] /*[121, 25]*/ }, votes: 4 },
    { rank: 217.5, two3FreeClass: { monzo: [0, 0, 0, 0, 1, 0, 1] /*[187, 1]*/ }, votes: 4 },
    { rank: 217.5, two3FreeClass: { monzo: [0, 0, -1, 0, 1, 0, 1] /*[187, 5]*/ }, votes: 4 },
    { rank: 217.5, two3FreeClass: { monzo: [0, 0, 2, 2, -1] /*[1225, 11]*/ }, votes: 4 },
    { rank: 217.5, two3FreeClass: { monzo: [0, 0, 3, 3] /*[42875, 1]*/ }, votes: 4 },
    { rank: 217.5, two3FreeClass: { monzo: [0, 0, 0, 10] /*[282475249, 1]*/ }, votes: 4 },
    { rank: 252.5, two3FreeClass: { monzo: [0, 0, 0, 0, 0, 0, 0, 0, -1, 1] /*[29, 23]*/ }, votes: 3 },
    { rank: 252.5, two3FreeClass: { monzo: [0, 0, 0, 0, 0, -1, 0, 0, 0, 0, 0, 0, 0, 1] /*[43, 13]*/ }, votes: 3 },
    { rank: 252.5, two3FreeClass: { monzo: [0, 0, 0, 0, 0, 0, -1, 0, 0, 0, 0, 0, 0, 1] /*[43, 17]*/ }, votes: 3 },
    { rank: 252.5, two3FreeClass: { monzo: [0, 0, 0, -1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1] /*[47, 7]*/ }, votes: 3 },
    { rank: 252.5, two3FreeClass: { monzo: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, -1, 0, 0, 1] /*[53, 41]*/ }, votes: 3 },
    { rank: 252.5, two3FreeClass: { monzo: [0, 0, 0, 0, 0, 0, 0, 0, -1, 0, 0, 0, 0, 0, 0, 0, 1] /*[59, 23]*/ }, votes: 3 },
    { rank: 252.5, two3FreeClass: { monzo: [0, 0, 0, 0, 0, 0, 0, -1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1] /*[61, 19]*/ }, votes: 3 },
    { rank: 252.5, two3FreeClass: { monzo: [0, 0, 0, 0, 0, 0, 0, 0, 0, -1, 0, 0, 0, 0, 0, 0, 0, 1] /*[61, 29]*/ }, votes: 3 },
    { rank: 252.5, two3FreeClass: { monzo: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, -1, 0, 0, 0, 0, 0, 0, 1] /*[61, 31]*/ }, votes: 3 },
    { rank: 252.5, two3FreeClass: { monzo: [0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, -1] /*[65, 43]*/ }, votes: 3 },
    { rank: 252.5, two3FreeClass: { monzo: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1] /*[67, 1]*/ }, votes: 3 },
    { rank: 252.5, two3FreeClass: { monzo: [0, 0, 0, 0, 0, 0, 0, 0, -1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1] /*[67, 23]*/ }, votes: 3 },
    { rank: 252.5, two3FreeClass: { monzo: [0, 0, -2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1] /*[67, 25]*/ }, votes: 3 },
    { rank: 252.5, two3FreeClass: { monzo: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, -1, 0, 0, 0, 1] /*[67, 47]*/ }, votes: 3 },
    { rank: 252.5, two3FreeClass: { monzo: [0, 0, 0, 0, -1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1] /*[71, 11]*/ }, votes: 3 },
    { rank: 252.5, two3FreeClass: { monzo: [0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, -1] /*[77, 73]*/ }, votes: 3 },
    { rank: 252.5, two3FreeClass: { monzo: [0, 0, 0, 0, 0, -1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1] /*[79, 13]*/ }, votes: 3 },
    { rank: 252.5, two3FreeClass: { monzo: [0, 0, 0, 0, 0, 0, -1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1] /*[79, 17]*/ }, votes: 3 },
    { rank: 252.5, two3FreeClass: { monzo: [0, 0, 0, 0, 0, 0, 0, -1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1] /*[89, 19]*/ }, votes: 3 },
    { rank: 252.5, two3FreeClass: { monzo: [0, 0, -1, 0, 0, 0, -1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1] /*[97, 85]*/ }, votes: 3 },
    { rank: 252.5, two3FreeClass: { monzo: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, -1, 0, 0, 0, 0, 0, 0, 0, 0, 1] /*[107, 67]*/ }, votes: 3 },
    { rank: 252.5, two3FreeClass: { monzo: [0, 0, 0, 1, 0, 0, 1] /*[119, 1]*/ }, votes: 3 },
    { rank: 252.5, two3FreeClass: { monzo: [0, 0, 0, -1, 2, -1] /*[121, 91]*/ }, votes: 3 },
    { rank: 252.5, two3FreeClass: { monzo: [0, 0, -1, 1, 0, 0, 0, 0, 1] /*[161, 5]*/ }, votes: 3 },
    { rank: 252.5, two3FreeClass: { monzo: [0, 0, 0, 0, 0, 1, 1] /*[221, 1]*/ }, votes: 3 },
    { rank: 252.5, two3FreeClass: { monzo: [0, 0, 0, -1, 0, 1, 0, 1] /*[247, 7]*/ }, votes: 3 },
    { rank: 252.5, two3FreeClass: { monzo: [0, 0, 0, 0, 0, 0, 2] /*[289, 1]*/ }, votes: 3 },
    { rank: 252.5, two3FreeClass: { monzo: [0, 0, 4, -3] /*[625, 343]*/ }, votes: 3 },
    { rank: 252.5, two3FreeClass: { monzo: [0, 0, 1, -1, 1, 1] /*[715, 7]*/ }, votes: 3 },
    { rank: 252.5, two3FreeClass: { monzo: [0, 0, -2, 1, 1, 1] /*[1001, 25]*/ }, votes: 3 },
    { rank: 252.5, two3FreeClass: { monzo: [0, 0, -3, 4] /*[2401, 125]*/ }, votes: 3 },
    { rank: 252.5, two3FreeClass: { monzo: [0, 0, 5, -1] /*[3125, 7]*/ }, votes: 3 },
    { rank: 252.5, two3FreeClass: { monzo: [0, 0, 10] /*[9765625, 1]*/ }, votes: 3 },
    { rank: 252.5, two3FreeClass: { monzo: [0, 0, 11] /*[48828125, 1]*/ }, votes: 3 },
    { rank: 329, two3FreeClass: { monzo: [0, 0, 1, 1, 0, 0, 0, 0, 0, -1] /*[35, 29]*/ }, votes: 2 },
    { rank: 329, two3FreeClass: { monzo: [0, 0, 1, 1, 0, 0, 0, 0, 0, 0, -1] /*[35, 31]*/ }, votes: 2 },
    { rank: 329, two3FreeClass: { monzo: [0, 0, 0, 0, 0, 0, 0, 0, -1, 0, 0, 1] /*[37, 23]*/ }, votes: 2 },
    { rank: 329, two3FreeClass: { monzo: [0, 0, 0, 0, 0, 0, 0, 0, 0, -1, 0, 1] /*[37, 29]*/ }, votes: 2 },
    { rank: 329, two3FreeClass: { monzo: [0, 0, -1, -1, 0, 0, 0, 0, 0, 0, 0, 1] /*[37, 35]*/ }, votes: 2 },
    { rank: 329, two3FreeClass: { monzo: [0, 0, 0, 0, 0, 0, -1, 0, 0, 0, 0, 0, 1] /*[41, 17]*/ }, votes: 2 },
    { rank: 329, two3FreeClass: { monzo: [0, 0, 0, 0, 0, 0, 0, 0, -1, 0, 0, 0, 1] /*[41, 23]*/ }, votes: 2 },
    { rank: 329, two3FreeClass: { monzo: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, -1, 1] /*[41, 37]*/ }, votes: 2 },
    { rank: 329, two3FreeClass: { monzo: [0, 0, 0, 0, 0, 0, 0, -1, 0, 0, 0, 0, 0, 1] /*[43, 19]*/ }, votes: 2 },
    { rank: 329, two3FreeClass: { monzo: [0, 0, 0, 0, 0, 0, 0, 0, 0, -1, 0, 0, 0, 1] /*[43, 29]*/ }, votes: 2 },
    { rank: 329, two3FreeClass: { monzo: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, -1, 0, 1] /*[43, 37]*/ }, votes: 2 },
    { rank: 329, two3FreeClass: { monzo: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, -1, 1] /*[43, 41]*/ }, votes: 2 },
    { rank: 329, two3FreeClass: { monzo: [0, 0, 0, 0, 0, 0, 0, 0, -1, 0, 0, 0, 0, 0, 1] /*[47, 23]*/ }, votes: 2 },
    { rank: 329, two3FreeClass: { monzo: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, -1, 0, 0, 0, 1] /*[47, 31]*/ }, votes: 2 },
    { rank: 329, two3FreeClass: { monzo: [0, 0, -1, -1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1] /*[47, 35]*/ }, votes: 2 },
    { rank: 329, two3FreeClass: { monzo: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, -1, 0, 1] /*[47, 41]*/ }, votes: 2 },
    { rank: 329, two3FreeClass: { monzo: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, -1, 1] /*[47, 43]*/ }, votes: 2 },
    { rank: 329, two3FreeClass: { monzo: [0, 0, 0, 2, 0, 0, -1] /*[49, 17]*/ }, votes: 2 },
    { rank: 329, two3FreeClass: { monzo: [0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, -1] /*[49, 43]*/ }, votes: 2 },
    { rank: 329, two3FreeClass: { monzo: [0, 0, 0, 0, 0, -1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1] /*[53, 13]*/ }, votes: 2 },
    { rank: 329, two3FreeClass: { monzo: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, -1, 0, 0, 0, 1] /*[53, 37]*/ }, votes: 2 },
    { rank: 329, two3FreeClass: { monzo: [0, 0, 1, 0, 1, 0, -1] /*[55, 17]*/ }, votes: 2 },
    { rank: 329, two3FreeClass: { monzo: [0, 0, 0, 0, 0, -1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1] /*[59, 13]*/ }, votes: 2 },
    { rank: 329, two3FreeClass: { monzo: [0, 0, -2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1] /*[59, 25]*/ }, votes: 2 },
    { rank: 329, two3FreeClass: { monzo: [0, 0, 0, 0, 0, -1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1] /*[61, 13]*/ }, votes: 2 },
    { rank: 329, two3FreeClass: { monzo: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, -1, 0, 0, 0, 0, 0, 1] /*[61, 37]*/ }, votes: 2 },
    { rank: 329, two3FreeClass: { monzo: [0, 0, 1, 0, 0, 1, 0, -1] /*[65, 19]*/ }, votes: 2 },
    { rank: 329, two3FreeClass: { monzo: [0, 0, 1, 0, 0, 1, 0, 0, -1] /*[65, 23]*/ }, votes: 2 },
    { rank: 329, two3FreeClass: { monzo: [0, 0, 1, 0, 0, 1, 0, 0, 0, -1] /*[65, 29]*/ }, votes: 2 },
    { rank: 329, two3FreeClass: { monzo: [0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, -1] /*[65, 41]*/ }, votes: 2 },
    { rank: 329, two3FreeClass: { monzo: [0, 0, 1, -2, 0, 1] /*[65, 49]*/ }, votes: 2 },
    { rank: 329, two3FreeClass: { monzo: [0, 0, 0, 0, 0, -1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1] /*[67, 13]*/ }, votes: 2 },
    { rank: 329, two3FreeClass: { monzo: [0, 0, 0, 0, 0, 0, -1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1] /*[67, 17]*/ }, votes: 2 },
    { rank: 329, two3FreeClass: { monzo: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, -1, 1] /*[67, 61]*/ }, votes: 2 },
    { rank: 329, two3FreeClass: { monzo: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, -1, 0, 0, 0, 0, 0, 0, 1] /*[71, 41]*/ }, votes: 2 },
    { rank: 329, two3FreeClass: { monzo: [0, 0, 0, -2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1] /*[71, 49]*/ }, votes: 2 },
    { rank: 329, two3FreeClass: { monzo: [0, 0, -1, 0, 0, -1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1] /*[71, 65]*/ }, votes: 2 },
    { rank: 329, two3FreeClass: { monzo: [0, 0, 0, -1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1] /*[73, 7]*/ }, votes: 2 },
    { rank: 329, two3FreeClass: { monzo: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, -1, 0, 0, 0, 0, 0, 0, 1] /*[73, 43]*/ }, votes: 2 },
    { rank: 329, two3FreeClass: { monzo: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, -1, 0, 0, 0, 0, 0, 1] /*[73, 47]*/ }, votes: 2 },
    { rank: 329, two3FreeClass: { monzo: [0, 0, 0, 1, 1, 0, 0, 0, 0, 0, -1] /*[77, 31]*/ }, votes: 2 },
    { rank: 329, two3FreeClass: { monzo: [0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, -1] /*[77, 47]*/ }, votes: 2 },
    { rank: 329, two3FreeClass: { monzo: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1] /*[79, 1]*/ }, votes: 2 },
    { rank: 329, two3FreeClass: { monzo: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, -1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1] /*[79, 37]*/ }, votes: 2 },
    { rank: 329, two3FreeClass: { monzo: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, -1, 0, 0, 0, 0, 1] /*[79, 59]*/ }, votes: 2 },
    { rank: 329, two3FreeClass: { monzo: [0, 0, -1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1] /*[83, 5]*/ }, votes: 2 },
    { rank: 329, two3FreeClass: { monzo: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, -1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1] /*[83, 37]*/ }, votes: 2 },
    { rank: 329, two3FreeClass: { monzo: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, -1, 0, 0, 0, 0, 0, 0, 0, 0, 1] /*[83, 43]*/ }, votes: 2 },
    { rank: 329, two3FreeClass: { monzo: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, -1, 0, 0, 0, 0, 0, 0, 0, 1] /*[83, 47]*/ }, votes: 2 },
    { rank: 329, two3FreeClass: { monzo: [0, 0, 0, -2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1] /*[83, 49]*/ }, votes: 2 },
    { rank: 329, two3FreeClass: { monzo: [0, 0, 1, 0, 0, -1, 1] /*[85, 13]*/ }, votes: 2 },
    { rank: 329, two3FreeClass: { monzo: [0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, -1] /*[85, 43]*/ }, votes: 2 },
    { rank: 329, two3FreeClass: { monzo: [0, 0, 1, -2, 0, 0, 1] /*[85, 49]*/ }, votes: 2 },
    { rank: 329, two3FreeClass: { monzo: [0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, -1] /*[85, 59]*/ }, votes: 2 },
    { rank: 329, two3FreeClass: { monzo: [0, 0, -1, 0, -1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1] /*[89, 55]*/ }, votes: 2 },
    { rank: 329, two3FreeClass: { monzo: [0, 0, 0, 1, 0, 1, 0, 0, -1] /*[91, 23]*/ }, votes: 2 },
    { rank: 329, two3FreeClass: { monzo: [0, 0, -2, 1, 0, 1] /*[91, 25]*/ }, votes: 2 },
    { rank: 329, two3FreeClass: { monzo: [0, 0, 0, 1, 0, 1, 0, 0, 0, -1] /*[91, 29]*/ }, votes: 2 },
    { rank: 329, two3FreeClass: { monzo: [0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, -1] /*[91, 73]*/ }, votes: 2 },
    { rank: 329, two3FreeClass: { monzo: [0, 0, -2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1] /*[97, 25]*/ }, votes: 2 },
    { rank: 329, two3FreeClass: { monzo: [0, 0, 0, 0, 0, -1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1] /*[101, 13]*/ }, votes: 2 },
    { rank: 329, two3FreeClass: { monzo: [0, 0, 0, 0, 0, 0, 0, -1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1] /*[101, 19]*/ }, votes: 2 },
    { rank: 329, two3FreeClass: { monzo: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, -1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1] /*[101, 47]*/ }, votes: 2 },
    { rank: 329, two3FreeClass: { monzo: [0, 0, -1, 0, 0, -1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1] /*[101, 65]*/ }, votes: 2 },
    { rank: 329, two3FreeClass: { monzo: [0, 0, 0, 0, 0, 0, 0, -1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1] /*[103, 19]*/ }, votes: 2 },
    { rank: 329, two3FreeClass: { monzo: [0, 0, 0, 0, -1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1] /*[109, 11]*/ }, votes: 2 },
    { rank: 329, two3FreeClass: { monzo: [0, 0, -2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1] /*[109, 25]*/ }, votes: 2 },
    { rank: 329, two3FreeClass: { monzo: [0, 0, 0, -1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1] /*[113, 7]*/ }, votes: 2 },
    { rank: 329, two3FreeClass: { monzo: [0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, -1] /*[115, 79]*/ }, votes: 2 },
    { rank: 329, two3FreeClass: { monzo: [0, 0, -1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1] /*[127, 5]*/ }, votes: 2 },
    { rank: 329, two3FreeClass: { monzo: [0, 0, 0, 1, 0, 0, 0, 1] /*[133, 1]*/ }, votes: 2 },
    { rank: 329, two3FreeClass: { monzo: [0, 0, 0, 0, 0, 0, 0, 0, -1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1] /*[137, 23]*/ }, votes: 2 },
    { rank: 329, two3FreeClass: { monzo: [0, 0, 0, 0, 1, 1, 0, 0, -1] /*[143, 23]*/ }, votes: 2 },
    { rank: 329, two3FreeClass: { monzo: [0, 0, -2, 0, 1, 1] /*[143, 25]*/ }, votes: 2 },
    { rank: 329, two3FreeClass: { monzo: [0, 0, 0, 0, 1, 1, 0, 0, 0, -1] /*[143, 29]*/ }, votes: 2 },
    { rank: 329, two3FreeClass: { monzo: [0, 0, -2, 1, 0, 0, 0, 0, 1] /*[161, 25]*/ }, votes: 2 },
    { rank: 329, two3FreeClass: { monzo: [0, 0, -1, 0, 0, 2] /*[169, 5]*/ }, votes: 2 },
    { rank: 329, two3FreeClass: { monzo: [0, 0, 0, 0, 0, 2, 0, -1] /*[169, 19]*/ }, votes: 2 },
    { rank: 329, two3FreeClass: { monzo: [0, 0, -1, -1, 0, 2] /*[169, 35]*/ }, votes: 2 },
    { rank: 329, two3FreeClass: { monzo: [0, 0, 0, 0, 0, 0, 0, -1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1] /*[179, 19]*/ }, votes: 2 },
    { rank: 329, two3FreeClass: { monzo: [0, 0, 0, -1, 1, 0, 1] /*[187, 7]*/ }, votes: 2 },
    { rank: 329, two3FreeClass: { monzo: [0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, -1] /*[205, 67]*/ }, votes: 2 },
    { rank: 329, two3FreeClass: { monzo: [0, 0, -1, 0, 1, 0, 0, 1] /*[209, 5]*/ }, votes: 2 },
    { rank: 329, two3FreeClass: { monzo: [0, 0, 0, -1, 1, 0, 0, 1] /*[209, 7]*/ }, votes: 2 },
    { rank: 329, two3FreeClass: { monzo: [0, 0, -1, 0, 0, 1, 1] /*[221, 5]*/ }, votes: 2 },
    { rank: 329, two3FreeClass: { monzo: [0, 0, 0, -1, 0, 1, 1] /*[221, 7]*/ }, votes: 2 },
    { rank: 329, two3FreeClass: { monzo: [0, 0, -1, 0, 0, 1, 0, 1] /*[247, 5]*/ }, votes: 2 },
    { rank: 329, two3FreeClass: { monzo: [0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, -1] /*[253, 211]*/ }, votes: 2 },
    { rank: 329, two3FreeClass: { monzo: [0, 0, 0, -1, 0, 0, 1, 1] /*[323, 7]*/ }, votes: 2 },
    { rank: 329, two3FreeClass: { monzo: [0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, -1] /*[355, 197]*/ }, votes: 2 },
    { rank: 329, two3FreeClass: { monzo: [0, 0, 1, 1, 1, -1] /*[385, 13]*/ }, votes: 2 },
    { rank: 329, two3FreeClass: { monzo: [0, 0, -3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1] /*[419, 125]*/ }, votes: 2 },
    { rank: 329, two3FreeClass: { monzo: [0, 0, 2, 0, 0, 0, 1] /*[425, 1]*/ }, votes: 2 },
    { rank: 329, two3FreeClass: { monzo: [0, 0, 1, 1, -1, 1] /*[455, 11]*/ }, votes: 2 },
    { rank: 329, two3FreeClass: { monzo: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1] /*[499, 1]*/ }, votes: 2 },
    { rank: 329, two3FreeClass: { monzo: [0, 0, -1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, -1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1] /*[643, 215]*/ }, votes: 2 },
    { rank: 329, two3FreeClass: { monzo: [0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, -1] /*[671, 199]*/ }, votes: 2 },
    { rank: 329, two3FreeClass: { monzo: [0, 0, 0, -1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1] /*[1787, 7]*/ }, votes: 2 },
    { rank: 329, two3FreeClass: { monzo: [0, 0, -2, 4] /*[2401, 25]*/ }, votes: 2 },
    { rank: 329, two3FreeClass: { monzo: [0, 0, -4, 4] /*[2401, 625]*/ }, votes: 2 },
    { rank: 329, two3FreeClass: { monzo: [0, 0, -1, -1, 1, 1, 1] /*[2431, 35]*/ }, votes: 2 },
    { rank: 329, two3FreeClass: { monzo: [0, 0, 1, 2, 1] /*[2695, 1]*/ }, votes: 2 },
    { rank: 329, two3FreeClass: { monzo: [0, 0, -1, -1, 1, 1, 0, 1] /*[2717, 35]*/ }, votes: 2 },
    { rank: 329, two3FreeClass: { monzo: [0, 0, -1, -1, 1, 0, 1, 1] /*[3553, 35]*/ }, votes: 2 },
    { rank: 329, two3FreeClass: { monzo: [0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, -1] /*[4151, 3767]*/ }, votes: 2 },
    { rank: 329, two3FreeClass: { monzo: [0, 0, -1, -1, 0, 1, 1, 1] /*[4199, 35]*/ }, votes: 2 },
    { rank: 329, two3FreeClass: { monzo: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, -1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1] /*[4583, 3767]*/ }, votes: 2 },
    { rank: 329, two3FreeClass: { monzo: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, -1] /*[5069, 3767]*/ }, votes: 2 },
    { rank: 329, two3FreeClass: { monzo: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, -1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1] /*[5581, 3767]*/ }, votes: 2 },
    { rank: 329, two3FreeClass: { monzo: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, -1] /*[6157, 3767]*/ }, votes: 2 },
    { rank: 329, two3FreeClass: { monzo: [0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, -1] /*[6805, 3767]*/ }, votes: 2 },
    { rank: 329, two3FreeClass: { monzo: [0, 0, 0, 0, 4] /*[14641, 1]*/ }, votes: 2 },
    { rank: 329, two3FreeClass: { monzo: [0, 0, 4, 2] /*[30625, 1]*/ }, votes: 2 },
    { rank: 329, two3FreeClass: { monzo: [0, 0, 2, 4] /*[60025, 1]*/ }, votes: 2 },
    { rank: 329, two3FreeClass: { monzo: [0, 0, -2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, -2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2] /*[413449, 46225]*/ }, votes: 2 },
    { rank: 329, two3FreeClass: { monzo: [0, 0, 2, 5] /*[420175, 1]*/ }, votes: 2 },
    { rank: 329, two3FreeClass: { monzo: [0, 0, 12] /*[244140625, 1]*/ }, votes: 2 },
    { rank: 329, two3FreeClass: { monzo: [0, 0, -3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, -3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3] /*[265847707, 9938375]*/ }, votes: 2 },
    { rank: 329, two3FreeClass: { monzo: [0, 0, 0, 11] /*[1977326743, 1]*/ }, votes: 2 },
];
exports.COMMA_POPULARITIES = COMMA_POPULARITIES;


/***/ }),
/* 143 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.compute23FreeClass = void 0;
var math_1 = __webpack_require__(6);
var constants_1 = __webpack_require__(144);
var compute23FreeClass = function (_a) {
    var monzo = _a.monzo;
    var two3FreeClass = {};
    var two3FreeMonzo = math_1.computeRoughRationalMonzo(monzo, constants_1.TWO_3_FREE);
    two3FreeClass.monzo = math_1.computeSuperMonzo(two3FreeMonzo);
    return two3FreeClass;
};
exports.compute23FreeClass = compute23FreeClass;


/***/ }),
/* 144 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.TWO_3_FREE_CLASS_SIGN = exports.TWO_3_FREE = void 0;
var TWO_3_FREE = 5;
exports.TWO_3_FREE = TWO_3_FREE;
var TWO_3_FREE_CLASS_SIGN = "₂,₃";
exports.TWO_3_FREE_CLASS_SIGN = TWO_3_FREE_CLASS_SIGN;


/***/ }),
/* 145 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __read = (this && this.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.format23FreeClass = void 0;
var io_1 = __webpack_require__(62);
var math_1 = __webpack_require__(6);
var name_1 = __webpack_require__(146);
var format23FreeClass = function (two3FreeClass) {
    var _a = __read(math_1.computeQuotientFromMonzo(two3FreeClass.monzo), 2), numerator = _a[0], denominator = _a[1];
    return io_1.ioSettings.tableFormat === io_1.TableFormat.FORUM ?
        denominator === 1 ?
            "[latex]\\{" + numerator + "\\}_{\\scriptsize{2,3}}[/latex]" :
            "[latex]\\{\\frac{" + numerator + "}{" + denominator + "}\\}_{\\scriptsize{2,3}}[/latex]" :
        name_1.compute23FreeClassName(two3FreeClass);
};
exports.format23FreeClass = format23FreeClass;


/***/ }),
/* 146 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.compute23FreeClassName = void 0;
var io_1 = __webpack_require__(62);
var math_1 = __webpack_require__(6);
var constants_1 = __webpack_require__(144);
var compute23FreeClassName = function (two3FreeClass) {
    var quotient = math_1.computeQuotientFromMonzo(two3FreeClass.monzo);
    return "{" + io_1.formatQuotient(quotient) + "}" + constants_1.TWO_3_FREE_CLASS_SIGN;
};
exports.compute23FreeClassName = compute23FreeClassName;


/***/ }),
/* 147 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.computePitchExpectation = exports.two3FreeClassFixture = void 0;
var fixtures_1 = __webpack_require__(148);
Object.defineProperty(exports, "two3FreeClassFixture", { enumerable: true, get: function () { return fixtures_1.two3FreeClassFixture; } });
var pitchExpectation_1 = __webpack_require__(149);
Object.defineProperty(exports, "computePitchExpectation", { enumerable: true, get: function () { return pitchExpectation_1.computePitchExpectation; } });


/***/ }),
/* 148 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.two3FreeClassFixture = void 0;
var two3FreeClassFixture = {
    monzo: [1, 1],
};
exports.two3FreeClassFixture = two3FreeClassFixture;


/***/ }),
/* 149 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.computePitchExpectation = void 0;
var math_1 = __webpack_require__(6);
var cents_1 = __webpack_require__(136);
var computePitchExpectation = function (pitch) {
    return ({
        pitch: pitch,
        decimal: math_1.computeIrrationalDecimalFromScamon(pitch),
        cents: cents_1.computeCentsFromPitch(pitch),
        monzo: math_1.computeIrrationalMonzoFromScamon(pitch),
    });
};
exports.computePitchExpectation = computePitchExpectation;


/***/ }),
/* 150 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.formatCents = void 0;
var globals_1 = __webpack_require__(63);
var table_1 = __webpack_require__(65);
var decimal_1 = __webpack_require__(131);
var formatCents = function (cents, options) {
    if (options === void 0) { options = {}; }
    var formattedCents = decimal_1.formatDecimal(cents, options);
    // The normal 7, plus 1 for the ¢, but then also another column (7)
    var columnWidth = globals_1.ioSettings.tableFormat === table_1.TableFormat.TERMINAL ? 15 : 8;
    formattedCents = formattedCents + "¢";
    if (options.align && globals_1.ioSettings.tableFormat !== table_1.TableFormat.SPREADSHEET) {
        while (formattedCents.length < columnWidth) {
            formattedCents = " " + formattedCents;
        }
    }
    return formattedCents;
};
exports.formatCents = formatCents;


/***/ }),
/* 151 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.formatBound = void 0;
var code_1 = __webpack_require__(4);
var pitch_1 = __webpack_require__(134);
var formatBound = function (bound, exclusive) {
    if (code_1.isUndefined(bound)) {
        return "(none)";
    }
    var formattedBound = pitch_1.formatPitch(bound, { align: true, noLaTeXScaler: true });
    var formattedExclusive = !!exclusive ? "exclusive" : "inclusive";
    return formattedBound + " (" + formattedExclusive + ")";
};
exports.formatBound = formatBound;


/***/ }),
/* 152 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.time = void 0;
var code_1 = __webpack_require__(4);
var math_1 = __webpack_require__(6);
var format_1 = __webpack_require__(126);
var globals_1 = __webpack_require__(63);
var time = function () {
    return format_1.formatTime(math_1.subtract(code_1.now(), globals_1.ioSettings.time));
};
exports.time = time;


/***/ }),
/* 153 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.program = void 0;
var commander_1 = __webpack_require__(109);
Object.defineProperty(exports, "program", { enumerable: true, get: function () { return commander_1.program; } });


/***/ }),
/* 154 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.readLines = void 0;
var fs = __importStar(__webpack_require__(82));
var constants_1 = __webpack_require__(64);
var readLines = function (filename) {
    var lines = fs
        .readFileSync(filename, { encoding: "utf8" })
        .replace(/\r/g, constants_1.BLANK)
        .split(constants_1.NEWLINE);
    lines.pop();
    return lines;
};
exports.readLines = readLines;


/***/ }),
/* 155 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.computePatentVal = void 0;
var code_1 = __webpack_require__(4);
var rational_1 = __webpack_require__(13);
var typedOperations_1 = __webpack_require__(8);
var computePatentVal = function (options) {
    var ed = options.ed, window = options.window, primeLimit = options.primeLimit;
    var stepSize = Math.pow(window, (1 / ed));
    var primes = rational_1.computePrimes(primeLimit);
    var maxPrimeIndex = primes.indexOf(primeLimit);
    var patentVal = [];
    for (var primeIndex = 0; primeIndex <= maxPrimeIndex; primeIndex = code_1.increment(primeIndex)) {
        var prime = primes[primeIndex];
        var previousApproximation = undefined;
        var currentApproximation = undefined;
        var primeExponent = 0;
        while (true) {
            previousApproximation = currentApproximation;
            currentApproximation = Math.pow(stepSize, primeExponent);
            if (currentApproximation > prime) {
                var currentDiff = typedOperations_1.abs(currentApproximation - prime);
                var previousDiff = previousApproximation ? typedOperations_1.abs(previousApproximation - prime) : Infinity;
                if (currentDiff < previousDiff) {
                    patentVal.push(primeExponent);
                }
                else {
                    patentVal.push(primeExponent - 1);
                }
                break;
            }
            primeExponent = code_1.increment(primeExponent);
        }
    }
    return patentVal;
};
exports.computePatentVal = computePatentVal;


/***/ }),
/* 156 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.EMPTY_MONZO = void 0;
var EMPTY_MONZO = [];
exports.EMPTY_MONZO = EMPTY_MONZO;


/***/ }),
/* 157 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.isDecimalLowerOrEqual = exports.isDecimalHigherOrEqual = exports.isDecimalLower = exports.isDecimalHigher = exports.areDecimalsEqual = void 0;
var code_1 = __webpack_require__(4);
var areDecimalsEqual = function (decimalA, decimalB, precision) {
    return code_1.isUndefined(precision) ?
        decimalA === decimalB :
        code_1.isCloseTo(decimalA, decimalB, precision);
};
exports.areDecimalsEqual = areDecimalsEqual;
var isDecimalHigher = function (decimal, otherDecimal, precision) {
    if (precision === void 0) { precision = code_1.MAX_JS_PRECISION; }
    return !areDecimalsEqual(decimal, otherDecimal, precision) && decimal > otherDecimal;
};
exports.isDecimalHigher = isDecimalHigher;
var isDecimalLower = function (decimal, otherDecimal, precision) {
    if (precision === void 0) { precision = code_1.MAX_JS_PRECISION; }
    return !areDecimalsEqual(decimal, otherDecimal, precision) && decimal < otherDecimal;
};
exports.isDecimalLower = isDecimalLower;
var isDecimalHigherOrEqual = function (decimal, otherDecimal, precision) {
    if (precision === void 0) { precision = code_1.MAX_JS_PRECISION; }
    return areDecimalsEqual(decimal, otherDecimal, precision) || decimal > otherDecimal;
};
exports.isDecimalHigherOrEqual = isDecimalHigherOrEqual;
var isDecimalLowerOrEqual = function (decimal, otherDecimal, precision) {
    if (precision === void 0) { precision = code_1.MAX_JS_PRECISION; }
    return areDecimalsEqual(decimal, otherDecimal, precision) || decimal < otherDecimal;
};
exports.isDecimalLowerOrEqual = isDecimalLowerOrEqual;


/***/ }),
/* 158 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __read = (this && this.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
var __spread = (this && this.__spread) || function () {
    for (var ar = [], i = 0; i < arguments.length; i++) ar = ar.concat(__read(arguments[i]));
    return ar;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.computeGeometricMean = exports.computeArithmeticMean = exports.sqrt = exports.reciprocal = exports.mod = void 0;
var typedOperations_1 = __webpack_require__(8);
var mod = function (dividend, divisor) {
    return dividend % divisor;
};
exports.mod = mod;
var reciprocal = function (decimal) {
    return 1 / decimal;
};
exports.reciprocal = reciprocal;
var sqrt = function (decimal) {
    return Math.sqrt(decimal);
};
exports.sqrt = sqrt;
var computeArithmeticMean = function () {
    var decimals = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        decimals[_i] = arguments[_i];
    }
    return typedOperations_1.sum.apply(void 0, __spread(decimals)) / typedOperations_1.count(decimals);
};
exports.computeArithmeticMean = computeArithmeticMean;
var computeGeometricMean = function () {
    var decimals = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        decimals[_i] = arguments[_i];
    }
    return Math.pow(typedOperations_1.product.apply(void 0, __spread(decimals)), reciprocal(typedOperations_1.count(decimals)));
};
exports.computeGeometricMean = computeGeometricMean;


/***/ }),
/* 159 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __read = (this && this.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.computeDecimalFromQuotient = void 0;
var computeDecimalFromQuotient = function (_a) {
    var _b = __read(_a, 2), numerator = _b[0], denominator = _b[1];
    return numerator / denominator;
};
exports.computeDecimalFromQuotient = computeDecimalFromQuotient;


/***/ }),
/* 160 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.computeSuperDecimal = exports.computeSubDecimal = exports.invertDecimal = exports.isDecimalUnison = exports.isDecimalSuper = exports.isDecimalSub = void 0;
var constants_1 = __webpack_require__(9);
var isDecimalSuper = function (candidateSuperDecimal) {
    return candidateSuperDecimal > constants_1.MULTIPLICATIVE_IDENTITY;
};
exports.isDecimalSuper = isDecimalSuper;
var isDecimalSub = function (candidateSubDecimal) {
    return candidateSubDecimal < constants_1.MULTIPLICATIVE_IDENTITY;
};
exports.isDecimalSub = isDecimalSub;
var isDecimalUnison = function (candidateUnisonDecimal) {
    return candidateUnisonDecimal === constants_1.MULTIPLICATIVE_IDENTITY;
};
exports.isDecimalUnison = isDecimalUnison;
var computeSuperDecimal = function (decimal) {
    return isDecimalSuper(decimal) ?
        decimal :
        invertDecimal(decimal);
};
exports.computeSuperDecimal = computeSuperDecimal;
var computeSubDecimal = function (decimal) {
    return isDecimalSub(decimal) ?
        decimal :
        invertDecimal(decimal);
};
exports.computeSubDecimal = computeSubDecimal;
var invertDecimal = function (decimal) {
    return 1 / decimal;
};
exports.invertDecimal = invertDecimal;


/***/ }),
/* 161 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.halveQuotient = exports.computeQuotientProduct = exports.computeSuperQuotient = exports.QuotientPartType = exports.computeQuotientFromMonzo = exports.areQuotientsEqual = exports.invertQuotient = exports.computeSubQuotient = exports.isQuotientUnison = exports.isQuotientSuper = exports.isQuotientSub = void 0;
var direction_1 = __webpack_require__(162);
Object.defineProperty(exports, "isQuotientSub", { enumerable: true, get: function () { return direction_1.isQuotientSub; } });
Object.defineProperty(exports, "isQuotientSuper", { enumerable: true, get: function () { return direction_1.isQuotientSuper; } });
Object.defineProperty(exports, "isQuotientUnison", { enumerable: true, get: function () { return direction_1.isQuotientUnison; } });
Object.defineProperty(exports, "computeSubQuotient", { enumerable: true, get: function () { return direction_1.computeSubQuotient; } });
Object.defineProperty(exports, "invertQuotient", { enumerable: true, get: function () { return direction_1.invertQuotient; } });
var comparison_1 = __webpack_require__(163);
Object.defineProperty(exports, "areQuotientsEqual", { enumerable: true, get: function () { return comparison_1.areQuotientsEqual; } });
var fromMonzo_1 = __webpack_require__(164);
Object.defineProperty(exports, "computeQuotientFromMonzo", { enumerable: true, get: function () { return fromMonzo_1.computeQuotientFromMonzo; } });
var types_1 = __webpack_require__(165);
Object.defineProperty(exports, "QuotientPartType", { enumerable: true, get: function () { return types_1.QuotientPartType; } });
var direction_2 = __webpack_require__(162);
Object.defineProperty(exports, "computeSuperQuotient", { enumerable: true, get: function () { return direction_2.computeSuperQuotient; } });
var typedOperations_1 = __webpack_require__(166);
Object.defineProperty(exports, "computeQuotientProduct", { enumerable: true, get: function () { return typedOperations_1.computeQuotientProduct; } });
Object.defineProperty(exports, "halveQuotient", { enumerable: true, get: function () { return typedOperations_1.halveQuotient; } });


/***/ }),
/* 162 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __read = (this && this.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.invertQuotient = exports.isQuotientUnison = exports.isQuotientSub = exports.isQuotientSuper = exports.computeSubQuotient = exports.computeSuperQuotient = void 0;
var isQuotientSuper = function (candidateSuperQuotient) {
    var _a = __read(candidateSuperQuotient, 2), numerator = _a[0], denominator = _a[1];
    return numerator > denominator;
};
exports.isQuotientSuper = isQuotientSuper;
var isQuotientSub = function (candidateSubQuotient) {
    var _a = __read(candidateSubQuotient, 2), numerator = _a[0], denominator = _a[1];
    return numerator < denominator;
};
exports.isQuotientSub = isQuotientSub;
var isQuotientUnison = function (candidateUnisonQuotient) {
    var _a = __read(candidateUnisonQuotient, 2), numerator = _a[0], denominator = _a[1];
    return numerator === denominator;
};
exports.isQuotientUnison = isQuotientUnison;
var computeSuperQuotient = function (quotient) {
    return isQuotientSuper(quotient) ?
        quotient :
        invertQuotient(quotient);
};
exports.computeSuperQuotient = computeSuperQuotient;
var computeSubQuotient = function (quotient) {
    return isQuotientSub(quotient) ?
        quotient :
        invertQuotient(quotient);
};
exports.computeSubQuotient = computeSubQuotient;
var invertQuotient = function (_a) {
    var _b = __read(_a, 2), numerator = _b[0], denominator = _b[1];
    return [
        denominator,
        numerator,
    ];
};
exports.invertQuotient = invertQuotient;


/***/ }),
/* 163 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.areQuotientsEqual = void 0;
var code_1 = __webpack_require__(4);
var rational_1 = __webpack_require__(13);
var decimal_1 = __webpack_require__(11);
var areQuotientsEqual = function (quotientA, quotientB, precision) {
    if (precision === void 0) { precision = code_1.MAX_JS_PRECISION; }
    return rational_1.isQuotientRational(quotientA) && rational_1.isQuotientRational(quotientB) ?
        rational_1.areRationalQuotientsEqual(quotientA, quotientB) :
        code_1.isCloseTo(quotientA && decimal_1.computeDecimalFromQuotient(quotientA), quotientB && decimal_1.computeDecimalFromQuotient(quotientB), precision);
};
exports.areQuotientsEqual = areQuotientsEqual;


/***/ }),
/* 164 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.computeQuotientFromMonzo = void 0;
var typedOperations_1 = __webpack_require__(8);
var decimal_1 = __webpack_require__(11);
var computeQuotientFromMonzo = function (monzo) {
    var numeratorMonzo = monzo.map(function (primeExponent) {
        return primeExponent > 0 ? primeExponent : 0;
    });
    var denominatorMonzo = monzo.map(function (primeExponent) {
        return primeExponent < 0 ? typedOperations_1.negative(primeExponent) : 0;
    });
    var numerator = decimal_1.computeDecimalFromMonzo(numeratorMonzo);
    var denominator = decimal_1.computeDecimalFromMonzo(denominatorMonzo);
    return [numerator, denominator];
};
exports.computeQuotientFromMonzo = computeQuotientFromMonzo;


/***/ }),
/* 165 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.QuotientPartType = void 0;
var QuotientPartType;
(function (QuotientPartType) {
    QuotientPartType["NUMERATOR"] = "numerator";
    QuotientPartType["DENOMINATOR"] = "denominator";
})(QuotientPartType || (QuotientPartType = {}));
exports.QuotientPartType = QuotientPartType;


/***/ }),
/* 166 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __read = (this && this.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.halveQuotient = exports.computeQuotientProduct = void 0;
var typedOperations_1 = __webpack_require__(8);
var computeQuotientProduct = function () {
    var quotients = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        quotients[_i] = arguments[_i];
    }
    return quotients.reduce(function (_a, _b) {
        var _c = __read(_a, 2), productNumerator = _c[0], productDenominator = _c[1];
        var _d = __read(_b, 2), numerator = _d[0], denominator = _d[1];
        return [
            typedOperations_1.multiply(productNumerator, numerator),
            typedOperations_1.multiply(productDenominator, denominator),
        ];
    }, [1, 1]);
};
exports.computeQuotientProduct = computeQuotientProduct;
var halveQuotient = function (_a) {
    var _b = __read(_a, 2), numerator = _b[0], denominator = _b[1];
    return [
        numerator,
        denominator * 2,
    ];
};
exports.halveQuotient = halveQuotient;


/***/ }),
/* 167 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.isScamonGreaterOrEqual = exports.isScamonLesserOrEqual = exports.isScamonLesser = exports.isScamonGreater = exports.areScamonsEqual = exports.maxScamon = exports.scaleScamon = exports.multiplyScamon = exports.addScamons = exports.halveScamon = exports.invertScamon = exports.computeSuperScamon = exports.isScamonUnison = exports.isScamonSuper = exports.isScamonSub = exports.computeScamonFromMonzo = exports.computeScamonFromQuotient = exports.computeScamonFromDecimal = void 0;
var fromDecimal_1 = __webpack_require__(168);
Object.defineProperty(exports, "computeScamonFromDecimal", { enumerable: true, get: function () { return fromDecimal_1.computeScamonFromDecimal; } });
var fromQuotient_1 = __webpack_require__(179);
Object.defineProperty(exports, "computeScamonFromQuotient", { enumerable: true, get: function () { return fromQuotient_1.computeScamonFromQuotient; } });
var fromMonzo_1 = __webpack_require__(180);
Object.defineProperty(exports, "computeScamonFromMonzo", { enumerable: true, get: function () { return fromMonzo_1.computeScamonFromMonzo; } });
var direction_1 = __webpack_require__(181);
Object.defineProperty(exports, "isScamonSub", { enumerable: true, get: function () { return direction_1.isScamonSub; } });
Object.defineProperty(exports, "isScamonSuper", { enumerable: true, get: function () { return direction_1.isScamonSuper; } });
Object.defineProperty(exports, "isScamonUnison", { enumerable: true, get: function () { return direction_1.isScamonUnison; } });
Object.defineProperty(exports, "computeSuperScamon", { enumerable: true, get: function () { return direction_1.computeSuperScamon; } });
Object.defineProperty(exports, "invertScamon", { enumerable: true, get: function () { return direction_1.invertScamon; } });
var typedOperations_1 = __webpack_require__(182);
Object.defineProperty(exports, "halveScamon", { enumerable: true, get: function () { return typedOperations_1.halveScamon; } });
Object.defineProperty(exports, "addScamons", { enumerable: true, get: function () { return typedOperations_1.addScamons; } });
Object.defineProperty(exports, "multiplyScamon", { enumerable: true, get: function () { return typedOperations_1.multiplyScamon; } });
Object.defineProperty(exports, "scaleScamon", { enumerable: true, get: function () { return typedOperations_1.scaleScamon; } });
Object.defineProperty(exports, "maxScamon", { enumerable: true, get: function () { return typedOperations_1.maxScamon; } });
var comparison_1 = __webpack_require__(183);
Object.defineProperty(exports, "areScamonsEqual", { enumerable: true, get: function () { return comparison_1.areScamonsEqual; } });
Object.defineProperty(exports, "isScamonGreater", { enumerable: true, get: function () { return comparison_1.isScamonGreater; } });
Object.defineProperty(exports, "isScamonLesser", { enumerable: true, get: function () { return comparison_1.isScamonLesser; } });
Object.defineProperty(exports, "isScamonLesserOrEqual", { enumerable: true, get: function () { return comparison_1.isScamonLesserOrEqual; } });
Object.defineProperty(exports, "isScamonGreaterOrEqual", { enumerable: true, get: function () { return comparison_1.isScamonGreaterOrEqual; } });


/***/ }),
/* 168 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.computeScamonFromDecimal = void 0;
var irrational_1 = __webpack_require__(169);
var rational_1 = __webpack_require__(13);
var computeScamonFromDecimal = function (decimal) {
    return rational_1.isDecimalRational(decimal) ?
        rational_1.computeRationalScamonFromRationalDecimal(decimal) :
        irrational_1.computeIrrationalScamonFromDecimal(decimal);
};
exports.computeScamonFromDecimal = computeScamonFromDecimal;


/***/ }),
/* 169 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.IRRATIONAL_SCAMON_BASE_MONZO = exports.HALF_SCALER = exports.computeIrrationalScamonFromQuotient = exports.computeIrrationalScamonFromMonzo = exports.computeIrrationalScamonFromDecimal = exports.computeIrrationalMonzoFromScamon = exports.computeIrrationalDecimalFromScamon = void 0;
var decimal_1 = __webpack_require__(170);
Object.defineProperty(exports, "computeIrrationalDecimalFromScamon", { enumerable: true, get: function () { return decimal_1.computeIrrationalDecimalFromScamon; } });
var monzo_1 = __webpack_require__(172);
Object.defineProperty(exports, "computeIrrationalMonzoFromScamon", { enumerable: true, get: function () { return monzo_1.computeIrrationalMonzoFromScamon; } });
var scamon_1 = __webpack_require__(174);
Object.defineProperty(exports, "computeIrrationalScamonFromDecimal", { enumerable: true, get: function () { return scamon_1.computeIrrationalScamonFromDecimal; } });
Object.defineProperty(exports, "computeIrrationalScamonFromMonzo", { enumerable: true, get: function () { return scamon_1.computeIrrationalScamonFromMonzo; } });
Object.defineProperty(exports, "computeIrrationalScamonFromQuotient", { enumerable: true, get: function () { return scamon_1.computeIrrationalScamonFromQuotient; } });
Object.defineProperty(exports, "HALF_SCALER", { enumerable: true, get: function () { return scamon_1.HALF_SCALER; } });
Object.defineProperty(exports, "IRRATIONAL_SCAMON_BASE_MONZO", { enumerable: true, get: function () { return scamon_1.IRRATIONAL_SCAMON_BASE_MONZO; } });


/***/ }),
/* 170 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.computeIrrationalDecimalFromScamon = void 0;
var fromScamon_1 = __webpack_require__(171);
Object.defineProperty(exports, "computeIrrationalDecimalFromScamon", { enumerable: true, get: function () { return fromScamon_1.computeIrrationalDecimalFromScamon; } });


/***/ }),
/* 171 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.computeIrrationalDecimalFromScamon = void 0;
var numeric_1 = __webpack_require__(10);
var computeIrrationalDecimalFromScamon = function (scamon) {
    return Math.pow(numeric_1.computeDecimalFromMonzo(scamon.monzo), numeric_1.computeDecimalFromQuotient(scamon.scaler || [1, 1]));
};
exports.computeIrrationalDecimalFromScamon = computeIrrationalDecimalFromScamon;


/***/ }),
/* 172 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.computeIrrationalMonzoFromScamon = void 0;
var fromScamon_1 = __webpack_require__(173);
Object.defineProperty(exports, "computeIrrationalMonzoFromScamon", { enumerable: true, get: function () { return fromScamon_1.computeIrrationalMonzoFromScamon; } });


/***/ }),
/* 173 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.computeIrrationalMonzoFromScamon = void 0;
var numeric_1 = __webpack_require__(10);
var computeIrrationalMonzoFromScamon = function (scamon) {
    return scamon.monzo
        .map(function (primeExponent) {
        return primeExponent * numeric_1.computeDecimalFromQuotient(scamon.scaler || [1, 1]);
    });
};
exports.computeIrrationalMonzoFromScamon = computeIrrationalMonzoFromScamon;


/***/ }),
/* 174 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.computeIrrationalScamonFromQuotient = exports.computeIrrationalScamonFromMonzo = exports.computeIrrationalScamonFromDecimal = exports.IRRATIONAL_SCAMON_BASE_MONZO = exports.HALF_SCALER = void 0;
var constants_1 = __webpack_require__(175);
Object.defineProperty(exports, "HALF_SCALER", { enumerable: true, get: function () { return constants_1.HALF_SCALER; } });
Object.defineProperty(exports, "IRRATIONAL_SCAMON_BASE_MONZO", { enumerable: true, get: function () { return constants_1.IRRATIONAL_SCAMON_BASE_MONZO; } });
var fromDecimal_1 = __webpack_require__(176);
Object.defineProperty(exports, "computeIrrationalScamonFromDecimal", { enumerable: true, get: function () { return fromDecimal_1.computeIrrationalScamonFromDecimal; } });
var fromMonzo_1 = __webpack_require__(177);
Object.defineProperty(exports, "computeIrrationalScamonFromMonzo", { enumerable: true, get: function () { return fromMonzo_1.computeIrrationalScamonFromMonzo; } });
var fromQuotient_1 = __webpack_require__(178);
Object.defineProperty(exports, "computeIrrationalScamonFromQuotient", { enumerable: true, get: function () { return fromQuotient_1.computeIrrationalScamonFromQuotient; } });


/***/ }),
/* 175 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.HALF_SCALER = exports.IRRATIONAL_SCAMON_BASE_MONZO = void 0;
var HALF_SCALER = [1, 2];
exports.HALF_SCALER = HALF_SCALER;
var IRRATIONAL_SCAMON_BASE_MONZO = [1];
exports.IRRATIONAL_SCAMON_BASE_MONZO = IRRATIONAL_SCAMON_BASE_MONZO;


/***/ }),
/* 176 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.computeIrrationalScamonFromDecimal = void 0;
var code_1 = __webpack_require__(4);
var constants_1 = __webpack_require__(9);
var typedOperations_1 = __webpack_require__(8);
var constants_2 = __webpack_require__(175);
var computeIrrationalScamonFromDecimal = function (decimal) {
    return ({
        monzo: code_1.shallowClone(constants_2.IRRATIONAL_SCAMON_BASE_MONZO),
        scaler: [typedOperations_1.log(decimal, constants_1.BASE_2), 1],
    });
};
exports.computeIrrationalScamonFromDecimal = computeIrrationalScamonFromDecimal;


/***/ }),
/* 177 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.computeIrrationalScamonFromMonzo = void 0;
var numeric_1 = __webpack_require__(10);
var fromDecimal_1 = __webpack_require__(176);
var computeIrrationalScamonFromMonzo = function (monzo) {
    return fromDecimal_1.computeIrrationalScamonFromDecimal(numeric_1.computeDecimalFromMonzo(monzo));
};
exports.computeIrrationalScamonFromMonzo = computeIrrationalScamonFromMonzo;


/***/ }),
/* 178 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.computeIrrationalScamonFromQuotient = void 0;
var numeric_1 = __webpack_require__(10);
var fromDecimal_1 = __webpack_require__(176);
var computeIrrationalScamonFromQuotient = function (quotient) {
    return fromDecimal_1.computeIrrationalScamonFromDecimal(numeric_1.computeDecimalFromQuotient(quotient));
};
exports.computeIrrationalScamonFromQuotient = computeIrrationalScamonFromQuotient;


/***/ }),
/* 179 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.computeScamonFromQuotient = void 0;
var irrational_1 = __webpack_require__(169);
var rational_1 = __webpack_require__(13);
var computeScamonFromQuotient = function (quotient) {
    return rational_1.isQuotientRational(quotient) ?
        rational_1.computeRationalScamonFromRationalQuotient(quotient) :
        irrational_1.computeIrrationalScamonFromQuotient(quotient);
};
exports.computeScamonFromQuotient = computeScamonFromQuotient;


/***/ }),
/* 180 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.computeScamonFromMonzo = void 0;
var irrational_1 = __webpack_require__(169);
var rational_1 = __webpack_require__(13);
var computeScamonFromMonzo = function (monzo) {
    return rational_1.isMonzoRational(monzo) ?
        rational_1.computeRationalScamonFromRationalMonzo(monzo) :
        irrational_1.computeIrrationalScamonFromMonzo(monzo);
};
exports.computeScamonFromMonzo = computeScamonFromMonzo;


/***/ }),
/* 181 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.invertScamon = exports.computeSubScamon = exports.computeSuperScamon = exports.isScamonUnison = exports.isScamonSuper = exports.isScamonSub = void 0;
var code_1 = __webpack_require__(4);
var math_1 = __webpack_require__(6);
var irrational_1 = __webpack_require__(169);
var isScamonSuper = function (candidateSuperScamon) {
    return math_1.isDecimalSuper(irrational_1.computeIrrationalDecimalFromScamon(candidateSuperScamon));
};
exports.isScamonSuper = isScamonSuper;
var isScamonSub = function (candidateSubScamon) {
    return math_1.isDecimalSub(irrational_1.computeIrrationalDecimalFromScamon(candidateSubScamon));
};
exports.isScamonSub = isScamonSub;
var isScamonUnison = function (candidateUnisonScamon) {
    return math_1.isDecimalUnison(irrational_1.computeIrrationalDecimalFromScamon(candidateUnisonScamon));
};
exports.isScamonUnison = isScamonUnison;
var computeSuperScamon = function (scamon) {
    return isScamonSuper(scamon) ?
        scamon :
        invertScamon(scamon);
};
exports.computeSuperScamon = computeSuperScamon;
var computeSubScamon = function (scamon) {
    return isScamonSub(scamon) ?
        scamon :
        invertScamon(scamon);
};
exports.computeSubScamon = computeSubScamon;
var invertScamon = function (scamon) {
    var invertedScamon = code_1.deepClone(scamon);
    invertedScamon.monzo = math_1.invertMonzo(invertedScamon.monzo);
    return invertedScamon;
};
exports.invertScamon = invertScamon;


/***/ }),
/* 182 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.scaleScamon = exports.multiplyScamon = exports.subtractScamons = exports.minScamon = exports.maxScamon = exports.halveScamon = exports.addScamons = void 0;
var math_1 = __webpack_require__(6);
var irrational_1 = __webpack_require__(169);
var quotient_1 = __webpack_require__(161);
var addScamons = function (augendScamon, addendScamon) {
    return irrational_1.computeIrrationalScamonFromDecimal(math_1.multiply(irrational_1.computeIrrationalDecimalFromScamon(augendScamon), irrational_1.computeIrrationalDecimalFromScamon(addendScamon)));
};
exports.addScamons = addScamons;
var subtractScamons = function (minuendScamon, subtrahendScamon) {
    return irrational_1.computeIrrationalScamonFromDecimal(math_1.divide(irrational_1.computeIrrationalDecimalFromScamon(minuendScamon), irrational_1.computeIrrationalDecimalFromScamon(subtrahendScamon)));
};
exports.subtractScamons = subtractScamons;
var halveScamon = function (scamon) {
    return (__assign(__assign({}, scamon), { scaler: scamon.scaler ? quotient_1.halveQuotient(scamon.scaler) : irrational_1.HALF_SCALER }));
};
exports.halveScamon = halveScamon;
var scaleScamon = function (scamon, scaler) {
    return (__assign(__assign({}, scamon), { scaler: scamon.scaler ? quotient_1.computeQuotientProduct(scamon.scaler, scaler) : scaler }));
};
exports.scaleScamon = scaleScamon;
var maxScamon = function () {
    var scamons = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        scamons[_i] = arguments[_i];
    }
    var maxDecimal = -Infinity;
    var maxIndex = undefined;
    scamons.map(irrational_1.computeIrrationalDecimalFromScamon).forEach(function (decimal, index) {
        if (decimal > maxDecimal) {
            maxDecimal = decimal;
            maxIndex = index;
        }
    });
    return scamons[maxIndex];
};
exports.maxScamon = maxScamon;
var multiplyScamon = function (scamon, multiplier) {
    return __assign(__assign({}, scamon), { monzo: scamon.monzo.map(function (primeExponent) {
            return math_1.multiply(primeExponent, multiplier);
        }) });
};
exports.multiplyScamon = multiplyScamon;
var minScamon = function () {
    var scamons = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        scamons[_i] = arguments[_i];
    }
    var minDecimal = Infinity;
    var minIndex = undefined;
    scamons.map(irrational_1.computeIrrationalDecimalFromScamon).forEach(function (decimal, index) {
        if (decimal < minDecimal) {
            minDecimal = decimal;
            minIndex = index;
        }
    });
    return scamons[minIndex];
};
exports.minScamon = minScamon;


/***/ }),
/* 183 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.isScamonLesserOrEqual = exports.isScamonGreaterOrEqual = exports.isScamonLesser = exports.isScamonGreater = exports.areScamonsEqual = void 0;
var code_1 = __webpack_require__(4);
var math_1 = __webpack_require__(6);
var irrational_1 = __webpack_require__(169);
var areScamonsEqual = function (scamonA, scamonB, precision) {
    if (precision === void 0) { precision = code_1.MAX_JS_PRECISION; }
    return (math_1.areMonzosEqual(scamonA.monzo, scamonB.monzo, precision)
        && (code_1.isUndefined(scamonA.scaler) && code_1.isUndefined(scamonB.scaler)
            || (!code_1.isUndefined(scamonA.scaler) && !code_1.isUndefined(scamonB.scaler)
                && math_1.areQuotientsEqual(scamonA.scaler, scamonB.scaler, precision))))
        || math_1.areDecimalsEqual(irrational_1.computeIrrationalDecimalFromScamon(scamonA), irrational_1.computeIrrationalDecimalFromScamon(scamonB), precision);
};
exports.areScamonsEqual = areScamonsEqual;
var isScamonGreater = function (scamon, otherScamon, precision) {
    if (precision === void 0) { precision = code_1.MAX_JS_PRECISION; }
    return (!areScamonsEqual(scamon, otherScamon, precision)
        && irrational_1.computeIrrationalDecimalFromScamon(scamon) > irrational_1.computeIrrationalDecimalFromScamon(otherScamon));
};
exports.isScamonGreater = isScamonGreater;
var isScamonLesser = function (scamon, otherScamon, precision) {
    if (precision === void 0) { precision = code_1.MAX_JS_PRECISION; }
    return (!areScamonsEqual(scamon, otherScamon, precision)
        && irrational_1.computeIrrationalDecimalFromScamon(scamon) < irrational_1.computeIrrationalDecimalFromScamon(otherScamon));
};
exports.isScamonLesser = isScamonLesser;
var isScamonGreaterOrEqual = function (scamon, otherScamon, precision) {
    if (precision === void 0) { precision = code_1.MAX_JS_PRECISION; }
    return areScamonsEqual(scamon, otherScamon, precision) || isScamonGreater(scamon, otherScamon, precision);
};
exports.isScamonGreaterOrEqual = isScamonGreaterOrEqual;
var isScamonLesserOrEqual = function (scamon, otherScamon, precision) {
    if (precision === void 0) { precision = code_1.MAX_JS_PRECISION; }
    return areScamonsEqual(scamon, otherScamon, precision) || isScamonLesser(scamon, otherScamon, precision);
};
exports.isScamonLesserOrEqual = isScamonLesserOrEqual;


/***/ }),
/* 184 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.Direction = void 0;
var Direction;
(function (Direction) {
    Direction["SUPER"] = "super";
    Direction["SUB"] = "sub";
    Direction["UNISON"] = "unison";
})(Direction || (Direction = {}));
exports.Direction = Direction;


/***/ }),
/* 185 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __read = (this && this.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
var __spread = (this && this.__spread) || function () {
    for (var ar = [], i = 0; i < arguments.length; i++) ar = ar.concat(__read(arguments[i]));
    return ar;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.computeDistributions = void 0;
var code_1 = __webpack_require__(4);
var computeDistributions = function (array, binCount) {
    var emptyDistribution = __spread(Array(binCount).keys()).map(function (_) { return []; });
    var distributions = [emptyDistribution];
    array.forEach(function (element) {
        var extendedDistributions = [];
        var _loop_1 = function (index) {
            distributions.forEach(function (distribution) {
                var extendedDistribution = code_1.deepClone(distribution);
                extendedDistribution[index].push(code_1.deepClone(element));
                extendedDistributions.push(extendedDistribution);
            });
        };
        for (var index = 0; index < binCount; index++) {
            _loop_1(index);
        }
        distributions = extendedDistributions;
    });
    return distributions;
};
exports.computeDistributions = computeDistributions;


/***/ }),
/* 186 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __read = (this && this.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.degreesToRadians = exports.radiansToDegrees = exports.computeAngle = void 0;
var constants_1 = __webpack_require__(9);
var typedOperations_1 = __webpack_require__(8);
var computeAngle = function (_a, _b) {
    var _c = __read(_a, 2), originX = _c[0], originY = _c[1];
    var _d = __read(_b, 2), pointX = _d[0], pointY = _d[1];
    var rise = typedOperations_1.subtract(pointY, originY);
    var run = typedOperations_1.subtract(pointX, originX);
    var slope = rise / run;
    return Math.atan(slope);
};
exports.computeAngle = computeAngle;
var radiansToDegrees = function (radians) {
    return radians * constants_1.RADIANS_TO_DEGREES;
};
exports.radiansToDegrees = radiansToDegrees;
var degreesToRadians = function (degrees) {
    return degrees * constants_1.DEGREES_TO_RADIANS;
};
exports.degreesToRadians = degreesToRadians;


/***/ }),
/* 187 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.computeTriangularNumber = void 0;
var computeTriangularNumber = function (number) {
    return (number * (number + 1)) / 2;
};
exports.computeTriangularNumber = computeTriangularNumber;


/***/ }),
/* 188 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.MeanType = void 0;
var MeanType;
(function (MeanType) {
    MeanType["ARITHMETIC"] = "arithmetic";
    MeanType["GEOMETRIC"] = "geometric";
    MeanType["HARMONIC"] = "harmonic";
})(MeanType || (MeanType = {}));
exports.MeanType = MeanType;


/***/ }),
/* 189 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.isBoolean = exports.isObject = exports.isArray = exports.isUndefined = exports.isString = exports.isNumber = void 0;
var isNumber = function (candidateNumber) {
    return typeof candidateNumber === "number" && !isNaN(candidateNumber);
};
exports.isNumber = isNumber;
var isString = function (candidateString) {
    return typeof candidateString === "string";
};
exports.isString = isString;
var isUndefined = function (candidateUndefined) {
    return typeof candidateUndefined === "undefined";
};
exports.isUndefined = isUndefined;
var isObject = function (candidateObject) {
    return typeof candidateObject === "object";
};
exports.isObject = isObject;
var isArray = function (candidateArray) {
    return candidateArray instanceof Array;
};
exports.isArray = isArray;
var isBoolean = function (candidateBoolean) {
    return candidateBoolean === true || candidateBoolean === false;
};
exports.isBoolean = isBoolean;


/***/ }),
/* 190 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.computeKeyPathArray = exports.computeKeyPath = void 0;
var finalElement_1 = __webpack_require__(191);
var typeGuards_1 = __webpack_require__(189);
var computeKeyPath = function () {
    var _a;
    var path = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        path[_i] = arguments[_i];
    }
    if (path.length === 1) {
        return path[0];
    }
    if (path.length === 2) {
        return _a = {}, _a[path[0]] = path[1], _a;
    }
    var keyPath = {};
    var cursor = keyPath;
    var pathUpToLastTwoSteps = path.slice(0, path.length - 2);
    pathUpToLastTwoSteps.forEach(function (step) {
        cursor[step] = {};
        cursor = cursor[step];
    });
    var penultimateStep = path[path.length - 2];
    cursor[penultimateStep] = finalElement_1.finalElement(path);
    return keyPath;
};
exports.computeKeyPath = computeKeyPath;
var computeKeyPathArray = function (keyPath) {
    if (typeGuards_1.isNumber(keyPath) || typeGuards_1.isString(keyPath))
        return [keyPath];
    var keyPathArray = [];
    var cursor = keyPath;
    while (typeGuards_1.isObject(cursor)) {
        var key = Object.keys(cursor)[0];
        var maybeIndex = parseInt(key);
        if (!isNaN(maybeIndex))
            key = maybeIndex;
        keyPathArray.push(key);
        cursor = cursor[key];
    }
    keyPathArray.push(cursor);
    return keyPathArray;
};
exports.computeKeyPathArray = computeKeyPathArray;


/***/ }),
/* 191 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.finalElement = exports.indexOfFinalElement = void 0;
var indexOfFinalElement = function (array) {
    return array.length - 1;
};
exports.indexOfFinalElement = indexOfFinalElement;
var finalElement = function (array) {
    return array[indexOfFinalElement(array)];
};
exports.finalElement = finalElement;


/***/ }),
/* 192 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.cleanObject = void 0;
var cleanObject = function (object) {
    for (var variableKey in object) {
        if (object.hasOwnProperty(variableKey)) {
            delete object[variableKey];
        }
    }
};
exports.cleanObject = cleanObject;


/***/ }),
/* 193 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.cleanArray = void 0;
var cleanArray = function (array) {
    array.length = 0;
};
exports.cleanArray = cleanArray;


/***/ }),
/* 194 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.constantCaseToUpperCase = exports.camelCaseToUpperCase = exports.camelCaseToLowerCase = exports.camelCaseToConstantCase = void 0;
var camelCaseToLowerCase = function (str) {
    return str.replace(/([a-z\xE0-\xFF])([A-Z\xC0\xDF])/g, "$1 $2")
        .toLowerCase();
};
exports.camelCaseToLowerCase = camelCaseToLowerCase;
var camelCaseToConstantCase = function (str) {
    return str.replace(/([a-z\xE0-\xFF])([A-Z\xC0\xDF])/g, "$1_$2")
        .toUpperCase();
};
exports.camelCaseToConstantCase = camelCaseToConstantCase;
var constantCaseToUpperCase = function (str) {
    var almost = str.toLowerCase()
        .replace(/(\_\w)/g, function (match) { return " " + match[1].toUpperCase(); });
    return almost.charAt(0)
        .toUpperCase() + almost.slice(1);
};
exports.constantCaseToUpperCase = constantCaseToUpperCase;
var camelCaseToUpperCase = function (str) {
    return constantCaseToUpperCase(camelCaseToConstantCase(str));
};
exports.camelCaseToUpperCase = camelCaseToUpperCase;


/***/ }),
/* 195 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __read = (this && this.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.setAllPropertiesOfObjectOnAnother = void 0;
var clone_1 = __webpack_require__(196);
var typeGuards_1 = __webpack_require__(189);
var setAllPropertiesOfObjectOnAnother = function (_a) {
    var objectToChange = _a.objectToChange, objectWithProperties = _a.objectWithProperties;
    Object.entries(objectWithProperties)
        .forEach(function (_a) {
        var _b = __read(_a, 2), key = _b[0], value = _b[1];
        objectToChange[key] = typeGuards_1.isUndefined(value) ? value : clone_1.deepClone(value);
    });
};
exports.setAllPropertiesOfObjectOnAnother = setAllPropertiesOfObjectOnAnother;


/***/ }),
/* 196 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deepClone = exports.shallowClone = void 0;
var deepClone = function (object) {
    return object ? JSON.parse(JSON.stringify(object)) : object;
};
exports.deepClone = deepClone;
var shallowClone = function (object) {
    return object.length === undefined ?
        __assign({}, object) :
        object.slice(0);
};
exports.shallowClone = shallowClone;


/***/ }),
/* 197 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __read = (this && this.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
var __spread = (this && this.__spread) || function () {
    for (var ar = [], i = 0; i < arguments.length; i++) ar = ar.concat(__read(arguments[i]));
    return ar;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deepMap = void 0;
var typeGuards_1 = __webpack_require__(189);
var deepMap = function (value, fn) {
    var args = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        args[_i - 2] = arguments[_i];
    }
    if (typeGuards_1.isNumber(value)) {
        return fn.apply(void 0, __spread([value], args));
    }
    else if (typeGuards_1.isArray(value)) {
        return value.map(function (element) { return deepMap.apply(void 0, __spread([element, fn], args)); });
    }
    else if (typeGuards_1.isObject(value)) {
        return Object.entries(value).reduce(function (object, _a) {
            var _b;
            var _c = __read(_a, 2), key = _c[0], value = _c[1];
            return __assign(__assign({}, object), (_b = {}, _b[key] = deepMap.apply(void 0, __spread([value, fn], args)), _b));
        }, {});
    }
    else {
        return value;
    }
};
exports.deepMap = deepMap;


/***/ }),
/* 198 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.concat = void 0;
var concat = function (baseArray, concatenatedArray) {
    return baseArray.concat(concatenatedArray);
};
exports.concat = concat;


/***/ }),
/* 199 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.MAX_JS_VALUE_PRESERVING_MAX_PRECISION = exports.MIN_JS_VALUE_PRESERVING_MAX_PRECISION = exports.NOT_FOUND = exports.MAX_JS_PRECISION = exports.MAX_JS_INTEGER_VALUE = exports.ZERO_ONE_INDEX_DIFF = exports.DEFAULT_PRECISION = exports.OBJECT_EXTENSION_BASE = exports.ARRAY_EXTENSION_BASE = void 0;
var DEFAULT_PRECISION = 5;
exports.DEFAULT_PRECISION = DEFAULT_PRECISION;
var MAX_JS_PRECISION = 15;
exports.MAX_JS_PRECISION = MAX_JS_PRECISION;
var ARRAY_EXTENSION_BASE = [];
exports.ARRAY_EXTENSION_BASE = ARRAY_EXTENSION_BASE;
var OBJECT_EXTENSION_BASE = {};
exports.OBJECT_EXTENSION_BASE = OBJECT_EXTENSION_BASE;
var ZERO_ONE_INDEX_DIFF = 1;
exports.ZERO_ONE_INDEX_DIFF = ZERO_ONE_INDEX_DIFF;
var MAX_JS_INTEGER_VALUE = 9007199254740991;
exports.MAX_JS_INTEGER_VALUE = MAX_JS_INTEGER_VALUE;
// JS min value before giving up and just returning 0 is 5e-324.
// As you approach it, its ability to include full precision slowly erodes.
// It kind of makes sense that it's about 15 decimal places off from 324.
var MIN_JS_VALUE_PRESERVING_MAX_PRECISION = 3.82295e-308;
exports.MIN_JS_VALUE_PRESERVING_MAX_PRECISION = MIN_JS_VALUE_PRESERVING_MAX_PRECISION;
// For whatever reason, we don't have the same problem going up.
// You step over this point, and suddenly it gives up and just starts returning Infinity.
// So strictly speaking it's not necessary to check if you're greater than this.
// You could just check if you get Infinity. But I thought it was valuable to include it for parallelism.
// This one is exact, since it's a well-known value I found described online.
// The other one isn't exact because it's less likely anyone would care about the exact point one loses precision.
// And I gave up on tediously trying to pin it down myself.
var MAX_JS_VALUE_PRESERVING_MAX_PRECISION = 1.7976931348623157e+308;
exports.MAX_JS_VALUE_PRESERVING_MAX_PRECISION = MAX_JS_VALUE_PRESERVING_MAX_PRECISION;
var NOT_FOUND = -1;
exports.NOT_FOUND = NOT_FOUND;


/***/ }),
/* 200 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.computeDeepDistinct = void 0;
var computeDeepDistinct = function (array) {
    return Array.from(new Set(array.map(function (element) { return JSON.stringify(element); })))
        .map(function (element) { return JSON.parse(element); });
};
exports.computeDeepDistinct = computeDeepDistinct;


/***/ }),
/* 201 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __read = (this && this.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deepEquals = void 0;
var isCloseTo_1 = __webpack_require__(202);
var typeGuards_1 = __webpack_require__(189);
var deepEqualsArray = function (valueA, valueB, precision) {
    return typeGuards_1.isArray(valueA) &&
        valueA.length === valueB.length &&
        valueB.every(function (el, index) { return deepEquals(el, valueA[index], precision); });
};
var deepEqualsObject = function (valueA, valueB, precision) {
    var equal;
    if (typeGuards_1.isArray(valueA)) {
        equal = false;
    }
    else if (typeGuards_1.isObject(valueA)) {
        equal = Object.keys(valueA).length === Object.keys(valueB).length &&
            Object.entries(valueB)
                .every(function (_a) {
                var _b = __read(_a, 2), key = _b[0], value = _b[1];
                return deepEquals(value, valueA[key], precision);
            });
    }
    else {
        equal = false;
    }
    return equal;
};
var deepEquals = function (valueA, valueB, precision) {
    var equal = false;
    if (valueA === valueB) {
        equal = true;
    }
    else if (!typeGuards_1.isUndefined(precision) && typeGuards_1.isNumber(valueA) && typeGuards_1.isNumber(valueB)) {
        equal = isCloseTo_1.isCloseTo(valueA, valueB, precision);
    }
    else if (typeGuards_1.isArray(valueA)) {
        equal = deepEqualsArray(valueB, valueA, precision);
    }
    else if (typeGuards_1.isObject(valueA)) {
        equal = deepEqualsObject(valueB, valueA, precision);
    }
    return equal;
};
exports.deepEquals = deepEquals;


/***/ }),
/* 202 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.isCloseTo = void 0;
var math_1 = __webpack_require__(6);
var constants_1 = __webpack_require__(199);
var typeGuards_1 = __webpack_require__(189);
var isCloseTo = function (actual, expected, precision) {
    if (precision === void 0) { precision = constants_1.DEFAULT_PRECISION; }
    if (actual === Infinity && expected === Infinity) {
        return true;
    }
    if (typeGuards_1.isUndefined(actual) && typeGuards_1.isUndefined(expected)) {
        return true;
    }
    if (typeGuards_1.isUndefined(actual)) {
        return false;
    }
    if (typeGuards_1.isUndefined(expected)) {
        return false;
    }
    var pow = Math.pow(10, (precision + 1));
    var delta = math_1.abs(actual - expected);
    var maxDelta = Math.pow(10, math_1.negative(precision)) / 2;
    return math_1.round(delta * pow) / pow <= maxDelta;
};
exports.isCloseTo = isCloseTo;


/***/ }),
/* 203 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.parseBoolean = void 0;
var parseBoolean = function (booleanText) {
    return booleanText === "true";
};
exports.parseBoolean = parseBoolean;


/***/ }),
/* 204 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.computeExampleElement = void 0;
var computeExampleElement = function (array) {
    return array[0];
};
exports.computeExampleElement = computeExampleElement;


/***/ }),
/* 205 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __values = (this && this.__values) || function(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.dig = void 0;
var io_1 = __webpack_require__(62);
var clone_1 = __webpack_require__(196);
var keyPath_1 = __webpack_require__(190);
var typeGuards_1 = __webpack_require__(189);
var dig = function (object, keyPath, _a) {
    var e_1, _b;
    var _c = _a === void 0 ? {} : _a, _d = _c.parents, parents = _d === void 0 ? undefined : _d, _e = _c.strict, strict = _e === void 0 ? false : _e;
    var cursor = object;
    var keyPathArray = keyPath_1.computeKeyPathArray(keyPath);
    try {
        for (var keyPathArray_1 = __values(keyPathArray), keyPathArray_1_1 = keyPathArray_1.next(); !keyPathArray_1_1.done; keyPathArray_1_1 = keyPathArray_1.next()) {
            var key = keyPathArray_1_1.value;
            if (!typeGuards_1.isUndefined(cursor[key])) {
                cursor = cursor[key];
            }
            else if (parents) {
                cursor[key] = clone_1.shallowClone(parents);
                cursor = cursor[key];
            }
            else if (strict) {
                throw new Error("Failed to dig value at " + io_1.stringify(keyPathArray) + " of " + io_1.stringify(object) + ".");
            }
            else {
                return undefined;
            }
        }
    }
    catch (e_1_1) { e_1 = { error: e_1_1 }; }
    finally {
        try {
            if (keyPathArray_1_1 && !keyPathArray_1_1.done && (_b = keyPathArray_1.return)) _b.call(keyPathArray_1);
        }
        finally { if (e_1) throw e_1.error; }
    }
    return cursor;
};
exports.dig = dig;


/***/ }),
/* 206 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.doOnNextEventLoop = void 0;
var doOnNextEventLoop = function (fn, timeout) {
    if (timeout === void 0) { timeout = 0; }
    return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_a) {
            return [2 /*return*/, new Promise(function (resolve) {
                    setTimeout(function () { return __awaiter(void 0, void 0, void 0, function () {
                        return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0: return [4 /*yield*/, fn()];
                                case 1:
                                    _a.sent();
                                    resolve();
                                    return [2 /*return*/];
                            }
                        });
                    }); }, timeout);
                })];
        });
    });
};
exports.doOnNextEventLoop = doOnNextEventLoop;


/***/ }),
/* 207 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.computeExtensionBase = void 0;
var clone_1 = __webpack_require__(196);
var constants_1 = __webpack_require__(199);
var types_1 = __webpack_require__(208);
var computeExtensionBase = function (extensionBaseType) {
    return extensionBaseType === types_1.ExtensionBaseType.ARRAY ?
        clone_1.shallowClone(constants_1.ARRAY_EXTENSION_BASE) :
        clone_1.shallowClone(constants_1.OBJECT_EXTENSION_BASE);
};
exports.computeExtensionBase = computeExtensionBase;


/***/ }),
/* 208 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.ExtensionBaseType = exports.RankStrategy = void 0;
var RankStrategy;
(function (RankStrategy) {
    RankStrategy["FRACTIONAL"] = "fractional";
    RankStrategy["COMPETITION"] = "competition";
    RankStrategy["DENSE"] = "dense";
    RankStrategy["ORDINAL"] = "ordinal";
})(RankStrategy || (RankStrategy = {}));
exports.RankStrategy = RankStrategy;
var ExtensionBaseType;
(function (ExtensionBaseType) {
    ExtensionBaseType["ARRAY"] = "array";
    ExtensionBaseType["OBJECT"] = "object";
})(ExtensionBaseType || (ExtensionBaseType = {}));
exports.ExtensionBaseType = ExtensionBaseType;


/***/ }),
/* 209 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.isSingleton = exports.isEmpty = void 0;
var isEmpty = function (array) {
    return array.length === 0;
};
exports.isEmpty = isEmpty;
var isSingleton = function (array) {
    return array.length === 1;
};
exports.isSingleton = isSingleton;


/***/ }),
/* 210 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.merge = void 0;
var merge = function () {
    var objects = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        objects[_i] = arguments[_i];
    }
    return objects.reduce(function (mergedObjects, object) {
        return (__assign(__assign({}, mergedObjects), object));
    }, {});
};
exports.merge = merge;


/***/ }),
/* 211 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.computePlusOrMinusRange = void 0;
var math_1 = __webpack_require__(6);
var range_1 = __webpack_require__(212);
var computePlusOrMinusRange = function (value) {
    return range_1.computeRange(math_1.negative(value), value + 1);
};
exports.computePlusOrMinusRange = computePlusOrMinusRange;


/***/ }),
/* 212 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __read = (this && this.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
var __spread = (this && this.__spread) || function () {
    for (var ar = [], i = 0; i < arguments.length; i++) ar = ar.concat(__read(arguments[i]));
    return ar;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.computeRange = void 0;
var index_1 = __webpack_require__(4);
var computeRange = function (firstParameter, secondParameter) {
    if (index_1.isUndefined(secondParameter)) {
        return __spread(Array(firstParameter).keys());
    }
    return __spread(Array(secondParameter - firstParameter).keys()).map(function (number) { return number + firstParameter; });
};
exports.computeRange = computeRange;


/***/ }),
/* 213 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.rank = void 0;
var clone_1 = __webpack_require__(196);
var constants_1 = __webpack_require__(199);
var crement_1 = __webpack_require__(214);
var dig_1 = __webpack_require__(205);
var isCloseTo_1 = __webpack_require__(202);
var keyPath_1 = __webpack_require__(190);
var sort_1 = __webpack_require__(215);
var typeGuards_1 = __webpack_require__(189);
var types_1 = __webpack_require__(208);
var isCloseOrEqual = function (a, b, precision) {
    if (precision === void 0) { precision = constants_1.DEFAULT_PRECISION; }
    if (typeGuards_1.isUndefined(precision) || !typeGuards_1.isNumber(a) || !typeGuards_1.isNumber(b)) {
        return a === b;
    }
    else {
        return isCloseTo_1.isCloseTo(a, b, precision);
    }
};
var rank = function (arrayOfObjects, options) {
    if (options === void 0) { options = {}; }
    var _a = options.by, by = _a === void 0 ? keyPath_1.computeKeyPath("value") : _a, _b = options.strategy, strategy = _b === void 0 ? types_1.RankStrategy.COMPETITION : _b, descending = options.descending, precision = options.precision;
    var clonedArrayOfObjects = clone_1.deepClone(arrayOfObjects);
    sort_1.sort(clonedArrayOfObjects, { by: by, descending: descending, precision: precision });
    var rank = 0;
    var tiesCount = 0;
    var previousValue;
    if (typeGuards_1.isArray(by))
        throw new Error("Ranking by multiple properties is not yet supported");
    switch (strategy) {
        case types_1.RankStrategy.FRACTIONAL:
            return clonedArrayOfObjects.map(function (object, index) {
                if (object.rank) {
                    return object;
                }
                tiesCount = 0;
                clonedArrayOfObjects.slice(index + 1).forEach(function (objectWithWorseOrTiedRank) {
                    if (isCloseOrEqual(dig_1.dig(objectWithWorseOrTiedRank, by), dig_1.dig(object, by), precision)) {
                        tiesCount = tiesCount + 1;
                    }
                });
                if (tiesCount === 0) {
                    return __assign(__assign({}, object), { rank: index + 1 });
                }
                else {
                    var rank_1 = (index + 1) + tiesCount / 2;
                    for (var i = index; i < index + tiesCount; i++) {
                        clonedArrayOfObjects[i + 1].rank = rank_1;
                    }
                    return __assign(__assign({}, object), { rank: rank_1 });
                }
            });
        case types_1.RankStrategy.COMPETITION:
            return clonedArrayOfObjects.map(function (object) {
                var rankingValue = dig_1.dig(object, by);
                if (isCloseOrEqual(rankingValue, previousValue, precision)) {
                    tiesCount = crement_1.increment(tiesCount);
                    return __assign(__assign({}, object), { rank: rank });
                }
                else {
                    rank = rank + 1 + tiesCount;
                    tiesCount = 0;
                    previousValue = rankingValue;
                    return __assign(__assign({}, object), { rank: rank });
                }
            });
        case types_1.RankStrategy.DENSE:
            return clonedArrayOfObjects.map(function (object) {
                var rankingValue = dig_1.dig(object, by);
                if (isCloseOrEqual(rankingValue, previousValue, precision)) {
                    return __assign(__assign({}, object), { rank: rank });
                }
                else {
                    rank = crement_1.increment(rank);
                    previousValue = rankingValue;
                    return __assign(__assign({}, object), { rank: rank });
                }
            });
        case types_1.RankStrategy.ORDINAL:
            return clonedArrayOfObjects.map(function (object, index) {
                return __assign(__assign({}, object), { rank: index + 1 });
            });
        default:
            throw new Error("unknown rank strategy " + strategy);
    }
};
exports.rank = rank;


/***/ }),
/* 214 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.decrement = exports.increment = void 0;
var increment = function (number) {
    return number + 1;
};
exports.increment = increment;
var decrement = function (number) {
    return number - 1;
};
exports.decrement = decrement;


/***/ }),
/* 215 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.sort = void 0;
var io_1 = __webpack_require__(62);
var constants_1 = __webpack_require__(199);
var crement_1 = __webpack_require__(214);
var dig_1 = __webpack_require__(205);
var exampleElement_1 = __webpack_require__(204);
var isCloseTo_1 = __webpack_require__(202);
var typeGuards_1 = __webpack_require__(189);
var isNotClose = function (a, b, precision) {
    if (precision === void 0) { precision = constants_1.DEFAULT_PRECISION; }
    return typeGuards_1.isNumber(a) && typeGuards_1.isNumber(b) ?
        !isCloseTo_1.isCloseTo(a, b, precision)
        : true;
};
var checkPath = function (array, keyPath) {
    var exampleElement = exampleElement_1.computeExampleElement(array);
    try {
        dig_1.dig(exampleElement, keyPath, { strict: true });
    }
    catch (e) {
        throw new Error("\"Attempted to sort array by " + io_1.stringify(keyPath) + ", however its elements do not have this property. Example element: " + io_1.stringify(exampleElement));
    }
};
var computeSortByResult = function (element, nextElement, options) {
    var keyPath = options.keyPath, precision = options.precision, descending = options.descending;
    var nextSorter = dig_1.dig(nextElement, keyPath);
    var sorter = dig_1.dig(element, keyPath);
    return computeSortResult(sorter, nextSorter, { precision: precision, descending: descending });
};
var computeSortResult = function (element, nextElement, _a) {
    var precision = _a.precision, descending = _a.descending;
    var notClose = isNotClose(element, nextElement, precision);
    return descending ?
        nextElement > element && notClose ? 1 :
            nextElement < element && notClose ? -1 : 0 :
        element > nextElement && notClose ? 1 :
            element < nextElement && notClose ? -1 : 0;
};
var sort = function (array, _a) {
    var _b = _a === void 0 ? {} : _a, by = _b.by, descending = _b.descending, precision = _b.precision;
    if (array.length === 0)
        return array;
    if (!typeGuards_1.isUndefined(by)) {
        if (typeGuards_1.isArray(by)) {
            by.forEach(function (keyPath) { return checkPath(array, keyPath); });
            array
                .sort(function (element, nextElement) {
                var sortResult = 0;
                var byIndex = -1;
                while (sortResult === 0 && byIndex < by.length) {
                    byIndex = crement_1.increment(byIndex);
                    sortResult =
                        computeSortByResult(element, nextElement, { keyPath: by[byIndex], descending: descending, precision: precision });
                }
                return sortResult;
            });
        }
        else {
            checkPath(array, by);
            array
                .sort(function (element, nextElement) {
                return computeSortByResult(element, nextElement, { keyPath: by, descending: descending, precision: precision });
            });
        }
    }
    else {
        array
            .sort(function (element, nextElement) {
            return computeSortResult(element, nextElement, { precision: precision, descending: descending });
        });
    }
    return array;
};
exports.sort = sort;


/***/ }),
/* 216 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.shuffle = void 0;
var math_1 = __webpack_require__(6);
var finalElement_1 = __webpack_require__(191);
var shuffle = function (array) {
    for (var i = finalElement_1.indexOfFinalElement(array); i > 0; i--) {
        var j = math_1.floor(Math.random() * i);
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
};
exports.shuffle = shuffle;


/***/ }),
/* 217 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.computeTrimmedArray = void 0;
var clone_1 = __webpack_require__(196);
var finalElement_1 = __webpack_require__(191);
var computeTrimmedArray = function (array) {
    var trimmedArray = clone_1.shallowClone(array);
    while (trimmedArray.length && !finalElement_1.finalElement(trimmedArray)) {
        trimmedArray.pop();
    }
    return trimmedArray;
};
exports.computeTrimmedArray = computeTrimmedArray;


/***/ }),
/* 218 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.allElementsEqual = void 0;
var deepEquals_1 = __webpack_require__(201);
var allElementsEqual = function (array) {
    return array.every(function (element) {
        return deepEquals_1.deepEquals(element, array[0]);
    });
};
exports.allElementsEqual = allElementsEqual;


/***/ }),
/* 219 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.now = void 0;
var perf_hooks_1 = __webpack_require__(82);
var now = function () {
    return perf_hooks_1.performance.now();
};
exports.now = now;


/***/ }),
/* 220 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __read = (this && this.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
var __spread = (this && this.__spread) || function () {
    for (var ar = [], i = 0; i < arguments.length; i++) ar = ar.concat(__read(arguments[i]));
    return ar;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.setAt = void 0;
var dig_1 = __webpack_require__(205);
var finalElement_1 = __webpack_require__(191);
var keyPath_1 = __webpack_require__(190);
var setAt = function (object, keyPath, value, options) {
    if (options === void 0) { options = {}; }
    var keyPathArray = keyPath_1.computeKeyPathArray(keyPath);
    var upToSecondToLastStepOfKeyPathArray = keyPathArray.slice(0, finalElement_1.indexOfFinalElement(keyPathArray));
    var upToSecondToLastStepOfKeyPath = keyPath_1.computeKeyPath.apply(void 0, __spread(upToSecondToLastStepOfKeyPathArray));
    var cursor = dig_1.dig(object, upToSecondToLastStepOfKeyPath, options);
    var finalKey = finalElement_1.finalElement(keyPathArray);
    cursor[finalKey] = value;
};
exports.setAt = setAt;


/***/ }),
/* 221 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.offset = void 0;
var offset = function (value, offset) {
    return value + offset;
};
exports.offset = offset;


/***/ }),
/* 222 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.computePossibilities = exports.computeParameterValues = void 0;
var parameterValues_1 = __webpack_require__(223);
Object.defineProperty(exports, "computeParameterValues", { enumerable: true, get: function () { return parameterValues_1.computeParameterValues; } });
var possibilities_1 = __webpack_require__(224);
Object.defineProperty(exports, "computePossibilities", { enumerable: true, get: function () { return possibilities_1.computePossibilities; } });


/***/ }),
/* 223 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __read = (this && this.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
var __spread = (this && this.__spread) || function () {
    for (var ar = [], i = 0; i < arguments.length; i++) ar = ar.concat(__read(arguments[i]));
    return ar;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.computeParameterValues = void 0;
var computeParameterValues = function (parameterScope) {
    var _a = parameterScope.center, center = _a === void 0 ? 0 : _a, _b = parameterScope.window, window = _b === void 0 ? 0 : _b, _c = parameterScope.ed, ed = _c === void 0 ? 1 : _c;
    if (ed === 1) {
        return [center];
    }
    var keys = __spread(Array(ed).keys());
    var offset = center - window / 2;
    return keys.map(function (key) {
        var adjustedKey = key * window / (ed - 1);
        return offset + adjustedKey;
    });
};
exports.computeParameterValues = computeParameterValues;


/***/ }),
/* 224 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __read = (this && this.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.computePossibilities = void 0;
var code_1 = __webpack_require__(4);
var parameterValues_1 = __webpack_require__(223);
var computePossibilities = function (scope) {
    var possibilities = [code_1.computeExtensionBase(code_1.ExtensionBaseType.OBJECT)];
    var scopeEntries = Object.entries(scope);
    scopeEntries.forEach(function (_a) {
        var _b = __read(_a, 2), parameter = _b[0], parameterScope = _b[1];
        var extendedPossibilities = [];
        var values;
        if (!code_1.isObject(parameterScope)) {
            values = [parameterScope];
        }
        else {
            values = parameterValues_1.computeParameterValues(parameterScope);
        }
        if (code_1.isEmpty(values)) {
            return;
        }
        possibilities.forEach(function (possibility) {
            values.forEach(function (value) {
                var _a;
                extendedPossibilities.push(__assign(__assign({}, possibility), (_a = {}, _a[parameter] = value, _a)));
            });
        });
        possibilities = extendedPossibilities;
    });
    return possibilities;
};
exports.computePossibilities = computePossibilities;


/***/ }),
/* 225 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.runScriptAndGetConsoleOutput = exports.slowReporter = exports.specNameReporter = exports.specReporter = exports.customMatchers = exports.onlyRunInCi = exports.catchEmptyFiles = exports.catchBadSpecFiles = exports.catchBadMainDescriptions = void 0;
var catchBadMainDescriptions_1 = __webpack_require__(226);
Object.defineProperty(exports, "catchBadMainDescriptions", { enumerable: true, get: function () { return catchBadMainDescriptions_1.catchBadMainDescriptions; } });
var catchBadSpecFiles_1 = __webpack_require__(228);
Object.defineProperty(exports, "catchBadSpecFiles", { enumerable: true, get: function () { return catchBadSpecFiles_1.catchBadSpecFiles; } });
var catchEmptyFiles_1 = __webpack_require__(229);
Object.defineProperty(exports, "catchEmptyFiles", { enumerable: true, get: function () { return catchEmptyFiles_1.catchEmptyFiles; } });
var onlyRunInCi_1 = __webpack_require__(230);
Object.defineProperty(exports, "onlyRunInCi", { enumerable: true, get: function () { return onlyRunInCi_1.onlyRunInCi; } });
var customMatchers_1 = __webpack_require__(231);
Object.defineProperty(exports, "customMatchers", { enumerable: true, get: function () { return customMatchers_1.customMatchers; } });
var reporters_1 = __webpack_require__(232);
Object.defineProperty(exports, "specReporter", { enumerable: true, get: function () { return reporters_1.specReporter; } });
Object.defineProperty(exports, "specNameReporter", { enumerable: true, get: function () { return reporters_1.specNameReporter; } });
Object.defineProperty(exports, "slowReporter", { enumerable: true, get: function () { return reporters_1.slowReporter; } });
var scripts_1 = __webpack_require__(237);
Object.defineProperty(exports, "runScriptAndGetConsoleOutput", { enumerable: true, get: function () { return scripts_1.runScriptAndGetConsoleOutput; } });


/***/ }),
/* 226 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __values = (this && this.__values) || function(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.catchBadMainDescriptions = void 0;
var fs = __importStar(__webpack_require__(82));
var path = __importStar(__webpack_require__(83));
var code_1 = __webpack_require__(4);
var io_1 = __webpack_require__(62);
var ciMode_1 = __webpack_require__(227);
var INDEX_OF_CAPTURED_GROUP = 1;
var catchBadMainDescriptions = function (basePath) {
    var e_1, _a;
    if (!ciMode_1.CI_MODE)
        return;
    var _loop_1 = function (file) {
        var filename = path.join(basePath, file);
        if (fs.lstatSync(filename).isDirectory()) {
            catchBadMainDescriptions(filename);
        }
        else if (!new RegExp("verificationSpecs").test(filename) && !new RegExp("scripts").test(filename)) {
            var lines = io_1.readLines(filename);
            var subjectDescription_1 = undefined;
            lines.forEach(function (line) {
                var maybeDescribeMatches = line.match(/^describe\("(\w+)/);
                if (maybeDescribeMatches !== null)
                    subjectDescription_1 = maybeDescribeMatches[INDEX_OF_CAPTURED_GROUP];
                var subjectActual = line.match(/\s*const actual = (?:await )?(\w+)/);
                if (subjectActual !== null
                    && !code_1.isUndefined(subjectDescription_1)
                    && subjectDescription_1 !== subjectActual[INDEX_OF_CAPTURED_GROUP]) {
                    throw new Error("Mismatched main description and subject in module " + filename + ": description says " + subjectDescription_1 + " but actual is " + subjectActual[INDEX_OF_CAPTURED_GROUP]);
                }
            });
        }
    };
    try {
        for (var _b = __values(fs.readdirSync(basePath)), _c = _b.next(); !_c.done; _c = _b.next()) {
            var file = _c.value;
            _loop_1(file);
        }
    }
    catch (e_1_1) { e_1 = { error: e_1_1 }; }
    finally {
        try {
            if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
        }
        finally { if (e_1) throw e_1.error; }
    }
};
exports.catchBadMainDescriptions = catchBadMainDescriptions;


/***/ }),
/* 227 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {
Object.defineProperty(exports, "__esModule", { value: true });
exports.CI_MODE = void 0;
var CI_MODE = !!process.env.CI || process.argv[2] === "--ci=true";
exports.CI_MODE = CI_MODE;

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(84)))

/***/ }),
/* 228 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __values = (this && this.__values) || function(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.catchBadSpecFiles = void 0;
var fs = __importStar(__webpack_require__(82));
var path = __importStar(__webpack_require__(83));
var ciMode_1 = __webpack_require__(227);
var catchBadSpecFiles = function (basePath) {
    var e_1, _a;
    if (basePath === void 0) { basePath = ""; }
    if (!ciMode_1.CI_MODE)
        return;
    try {
        for (var _b = __values(fs.readdirSync(path.join("spec/src", basePath))), _c = _b.next(); !_c.done; _c = _b.next()) {
            var file = _c.value;
            var filename = path.join(basePath, file);
            if (fs.lstatSync(path.join("spec/src", basePath, file)).isDirectory()) {
                catchBadSpecFiles(filename);
            }
            else {
                if (!new RegExp(".*Spec\.ts").test(filename)) {
                    throw new Error("Spec is not named properly and will not run: " + path.join("spec/src", filename));
                }
                if (!fs.existsSync(path.join("src", filename).replace("Spec.ts", ".ts")) &&
                    !new RegExp("verificationSpecs").test(filename)) {
                    throw new Error("Spec is not paired with a src file by name: " + filename);
                }
            }
        }
    }
    catch (e_1_1) { e_1 = { error: e_1_1 }; }
    finally {
        try {
            if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
        }
        finally { if (e_1) throw e_1.error; }
    }
};
exports.catchBadSpecFiles = catchBadSpecFiles;


/***/ }),
/* 229 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __values = (this && this.__values) || function(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.catchEmptyFiles = void 0;
var fs = __importStar(__webpack_require__(82));
var path = __importStar(__webpack_require__(83));
var ciMode_1 = __webpack_require__(227);
var catchEmptyFiles = function (basePath) {
    var e_1, _a;
    if (!ciMode_1.CI_MODE)
        return;
    try {
        for (var _b = __values(fs.readdirSync(basePath)), _c = _b.next(); !_c.done; _c = _b.next()) {
            var file = _c.value;
            var filename = path.join(basePath, file);
            if (fs.lstatSync(filename).isDirectory()) {
                catchEmptyFiles(filename);
            }
            else {
                if (fs.readFileSync(filename).length === 0 && file !== ".keep") {
                    throw new Error("Empty file detected: " + filename);
                }
            }
        }
    }
    catch (e_1_1) { e_1 = { error: e_1_1 }; }
    finally {
        try {
            if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
        }
        finally { if (e_1) throw e_1.error; }
    }
};
exports.catchEmptyFiles = catchEmptyFiles;


/***/ }),
/* 230 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.onlyRunInCi = void 0;
var ciMode_1 = __webpack_require__(227);
var onlyRunInCi = function () {
    if (!ciMode_1.CI_MODE) {
        pending("slow test only run in CI");
    }
};
exports.onlyRunInCi = onlyRunInCi;


/***/ }),
/* 231 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// tslint:disable max-line-length
Object.defineProperty(exports, "__esModule", { value: true });
exports.customMatchers = void 0;
var code_1 = __webpack_require__(4);
var io_1 = __webpack_require__(62);
var math_1 = __webpack_require__(6);
var precisionMessage = function (precision) {
    return code_1.isUndefined(precision) ? "" : ", with precision " + precision;
};
var failWith = function (message) { return ({
    message: message,
    pass: false,
}); };
var doAssertions = function (logicFunc) {
    try {
        logicFunc();
        return { pass: true };
    }
    catch (e) {
        return failWith(e.toString());
    }
};
var assert = function (condition, message) {
    if (condition) {
        return;
    }
    throw message;
};
var testEqualScamons = function (actual, expected, precision, negate, message) {
    assert(math_1.areScamonsEqual(actual, expected, precision), message || "Expected pitch " + io_1.stringify(actual) + " to equal pitch " + io_1.stringify(expected) + ".");
};
var testIsCloseTo = function (actual, expected, precision, negate, message) {
    var isClose = code_1.isCloseTo(actual, expected, precision);
    if (negate) {
        assert(!isClose, message ||
            "Expected " + io_1.stringify(actual, { multiline: true }) + " not to be close to " + io_1.stringify(expected, { multiline: true }) + precisionMessage(precision) + ".");
    }
    else {
        assert(isClose, message || "Expected " + io_1.stringify(actual, { multiline: true }) + " to be close to " + io_1.stringify(expected, { multiline: true }) + precisionMessage(precision) + ".");
    }
};
var arraysHaveSameContents = function (arrayA, arrayB) {
    if (arrayA.length !== arrayB.length) {
        return false;
    }
    return arrayA.every(function (elementA) {
        return arrayB.some(function (elementB) {
            return code_1.deepEquals(elementA, elementB);
        });
    });
};
var arraysAreCloseUpThroughExpected = function (expected, actual, precision, negate, message) {
    expected.forEach(function (expectedElement, index) {
        var actualElement = actual[index];
        testIsCloseTo(actualElement, expectedElement, precision, negate, message);
    });
};
var testStringAreEqualTrailingWhitespaceAgnostic = function (actual, expected, negate, message) {
    var trimmedActual = actual.trim();
    var trimmedExpected = expected.trim();
    var stringAreEqualTrailingWhitespaceAgnostic = trimmedActual === trimmedExpected;
    if (negate) {
        assert(!stringAreEqualTrailingWhitespaceAgnostic, message ||
            "Expected " + trimmedActual + " not to equal " + trimmedExpected + " (trailing whitespace agnostic; has been trimmed).");
    }
    else {
        assert(stringAreEqualTrailingWhitespaceAgnostic, message || "Expected " + trimmedActual + " to equal " + trimmedExpected + " (trailing whitespace agnostic; has been trimmed).");
    }
};
var arraysOfStringsAreEqualTrailingWhitespaceAgnostic = function (expected, actual, precision, negate, message) {
    expected.forEach(function (expectedElement, index) {
        var actualElement = actual[index];
        testStringAreEqualTrailingWhitespaceAgnostic(actualElement, expectedElement, negate, message);
    });
};
var eachExpectedElementIsCloseToSomeActualElement = function (expectedElements, actual, precision, message) {
    expectedElements.forEach(function (expectedElement) {
        assert(actual.some(function (actualElement) {
            return code_1.deepEquals(actualElement, expectedElement, precision);
        }), message || "This expected element did not find an element close to it: " + io_1.stringify(expectedElement, { multiline: true }) + ".");
    });
};
var eachExpectedElementDeepEqualsSomeActualElement = function (expectedElements, actual, message) {
    expectedElements.forEach(function (expectedElement) {
        assert(actual.some(function (actualElement) {
            return code_1.deepEquals(actualElement, expectedElement);
        }), message || "This expected element was not found: " + io_1.stringify(expectedElement, { multiline: true }) + ".");
    });
};
var eachExpectedElementHasSameContentsAsSomeActualElement = function (expectedElements, actual, message) {
    expectedElements.forEach(function (expectedElement) {
        assert(actual.some(function (actualElement) {
            return arraysHaveSameContents(actualElement, expectedElement);
        }), message || "This expected element was not found: " + io_1.stringify(expectedElement, { multiline: true }));
    });
};
var customMatchers = {
    toEqualScamon: function (util, customEqualityTesters) { return ({
        compare: function (actual, expected, precision, negate, message) {
            if (precision === void 0) { precision = code_1.DEFAULT_PRECISION; }
            return doAssertions(function () {
                testEqualScamons(actual, expected, precision, negate, message);
            });
        },
    }); },
    toBeCloseToTyped: function (util, customEqualityTesters) { return ({
        compare: function (actual, expected, precision, negate, message) {
            if (precision === void 0) { precision = code_1.DEFAULT_PRECISION; }
            return doAssertions(function () {
                testIsCloseTo(actual, expected, precision, negate, message);
            });
        },
    }); },
    toEqualLines: function (util, customEqualityTesters) { return ({
        compare: function (actual, expected, precision, negate, message) {
            if (precision === void 0) { precision = code_1.DEFAULT_PRECISION; }
            return doAssertions(function () {
                assert(actual.length === expected.length, message || "Expected length to be " + expected.length + ". It was " + actual.length + " instead.");
                arraysOfStringsAreEqualTrailingWhitespaceAgnostic(expected, actual, precision, negate, message);
            });
        },
    }); },
    toEqualWhitespaceAgnostic: function (util, customEqualityTesters) { return ({
        compare: function (actual, expected, negate, message) {
            return doAssertions(function () {
                assert(actual.replace(/\s+/g, io_1.SPACE) === expected.replace(/\s+/g, io_1.SPACE), message || "Expected strings to be equal, ignoring differences in whitespace. Actual: " + actual);
            });
        },
    }); },
    toBeCloseToArray: function (util, customEqualityTesters) { return ({
        compare: function (actual, expected, precision, negate, message) {
            if (precision === void 0) { precision = code_1.DEFAULT_PRECISION; }
            return doAssertions(function () {
                assert(actual.length === expected.length, message || "Expected length to be " + expected.length + ". It was " + actual.length + " instead.");
                arraysAreCloseUpThroughExpected(expected, actual, precision, negate, message);
            });
        },
    }); },
    toBeArrayWithDeepCloseContents: function (util, customEqualityTesters) { return ({
        compare: function (actual, expected, precision, message) {
            if (precision === void 0) { precision = code_1.DEFAULT_PRECISION; }
            return doAssertions(function () {
                assert(actual.length === expected.length, "Arrays did not have the same length (expected: " + expected.length + "; actual: " + actual.length + "), so there is no way they could have the same members (closely).");
                eachExpectedElementIsCloseToSomeActualElement(expected, actual, precision, message);
            });
        },
    }); },
    toBeCloseToObject: function (util, customEqualityTesters) { return ({
        compare: function (actual, expected, precision, negate, message) {
            if (precision === void 0) { precision = code_1.DEFAULT_PRECISION; }
            return doAssertions(function () {
                assert(code_1.deepEquals(actual, expected, precision), message || "Expected " + io_1.stringify(actual, { multiline: true }) + " to deep equal " + io_1.stringify(expected, { multiline: true }) + " with numbers within decimal precision " + precision + ".");
            });
        },
    }); },
    toBeCloseSoFar: function (util, customEqualityTesters) { return ({
        compare: function (actual, expected, precision, negate, message) {
            if (precision === void 0) { precision = code_1.DEFAULT_PRECISION; }
            return doAssertions(function () {
                arraysAreCloseUpThroughExpected(expected, actual, precision, negate, message);
            });
        },
    }); },
    // Depth 1: any order, thenceforth: enforced order (deep equal)
    toBeArrayWithDeepEqualContents: function (util, customEqualityTesters) { return ({
        compare: function (actual, expected, message) {
            return doAssertions(function () {
                assert(actual.length === expected.length, "Arrays did not have the same length (expected: " + expected.length + "; actual: " + actual.length + "), so there is no way they could have the same members.");
                eachExpectedElementDeepEqualsSomeActualElement(expected, actual, message);
            });
        },
    }); },
    // Depth 1: any order, depth 2: any order, thenceforth: enforced order (deep equal)
    toBeSameCombinationsAs: function (util, customEqualityTesters) { return ({
        compare: function (actual, expected, message) {
            return doAssertions(function () {
                assert(actual.length === expected.length, "Arrays did not have the same length (expected: " + expected.length + "; actual: " + actual.length + "), so there is no way they could have the same members.");
                eachExpectedElementHasSameContentsAsSomeActualElement(expected, actual, message);
            });
        },
    }); },
    // Depth 1: any order, depth 2: enforced order, depth 3: any order, thenceforth: enforced order (deep equal)
    toBeSameDistributionsAs: function (util, customEqualityTesters) { return ({
        compare: function (actual, expected, message) {
            return doAssertions(function () {
                assert(actual.length === expected.length, "Arrays did not have the same length (expected: " + expected.length + "; actual: " + actual.length + "), so there is no way they could have the same members.");
                expected.forEach(function (expectedElement) {
                    assert(actual.some(function (actualElement) {
                        return actualElement.every(function (actualElementElement, index) {
                            return arraysHaveSameContents(actualElementElement, expectedElement[index]);
                        });
                    }), message || "This expected element was not found: " + io_1.stringify(expectedElement, { multiline: true }));
                });
            });
        },
    }); },
    // Same as toBeArrayWithDeepEqualContents, but without the length match
    toBeArrayIncludingDeepEqual: function (util, customEqualityTesters) { return ({
        compare: function (actual, expected, message) {
            return doAssertions(function () {
                eachExpectedElementDeepEqualsSomeActualElement(expected, actual, message);
            });
        },
    }); },
    // Same as toBeSameCombinationsAs, but without the length match
    toBeArrayIncludingCombinations: function (util, customEqualityTesters) { return ({
        compare: function (actual, expected, message) {
            return doAssertions(function () {
                eachExpectedElementHasSameContentsAsSomeActualElement(expected, actual, message);
            });
        },
    }); },
};
exports.customMatchers = customMatchers;


/***/ }),
/* 232 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.specReporter = exports.specNameReporter = exports.slowReporter = void 0;
var slowReporter_1 = __webpack_require__(233);
Object.defineProperty(exports, "slowReporter", { enumerable: true, get: function () { return slowReporter_1.slowReporter; } });
var specNameReporter_1 = __webpack_require__(235);
Object.defineProperty(exports, "specNameReporter", { enumerable: true, get: function () { return specNameReporter_1.specNameReporter; } });
var specReporter_1 = __webpack_require__(236);
Object.defineProperty(exports, "specReporter", { enumerable: true, get: function () { return specReporter_1.specReporter; } });


/***/ }),
/* 233 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.slowReporter = void 0;
var code_1 = __webpack_require__(4);
var io_1 = __webpack_require__(62);
var math_1 = __webpack_require__(6);
var constants_1 = __webpack_require__(234);
var specTimes = [];
var specStartedTime = 0;
var slowReporter = {
    specStarted: function () {
        specStartedTime = code_1.now();
    },
    specDone: function (actual) {
        var time = math_1.round(math_1.subtract(code_1.now(), specStartedTime));
        var description = actual.fullName.length > constants_1.MAX_TEST_DESCRIPTION_LENGTH ?
            actual.fullName.slice(0, constants_1.MAX_TEST_DESCRIPTION_LENGTH) + "…" :
            actual.fullName;
        specTimes.push({ description: description, time: time });
        if (time >= constants_1.WARN_THRESHOLD_MS) {
            io_1.saveLog("      took " + time + "ms", io_1.LogTarget.SPEC);
        }
    },
    jasmineDone: function () {
        var slowestSpecs = code_1.sort(specTimes, { by: code_1.computeKeyPath("time"), descending: true })
            .filter(function (specTime) { return specTime.time > constants_1.WARN_THRESHOLD_MS; })
            .slice(0, constants_1.COUNT_SLOW_SPECS_TO_SUMMARIZE);
        var slowestSpecCount = math_1.count(slowestSpecs);
        if (slowestSpecCount) {
            io_1.saveLog(slowestSpecCount + " slowest specs:", io_1.LogTarget.SPEC);
            // tslint:disable-next-line no-console
            console.table(slowestSpecs);
        }
    },
};
exports.slowReporter = slowReporter;


/***/ }),
/* 234 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.MAX_TEST_DESCRIPTION_LENGTH = exports.COUNT_SLOW_SPECS_TO_SUMMARIZE = exports.WARN_THRESHOLD_MS = void 0;
var WARN_THRESHOLD_MS = 1000;
exports.WARN_THRESHOLD_MS = WARN_THRESHOLD_MS;
var MAX_TEST_DESCRIPTION_LENGTH = 100;
exports.MAX_TEST_DESCRIPTION_LENGTH = MAX_TEST_DESCRIPTION_LENGTH;
var COUNT_SLOW_SPECS_TO_SUMMARIZE = 10;
exports.COUNT_SLOW_SPECS_TO_SUMMARIZE = COUNT_SLOW_SPECS_TO_SUMMARIZE;


/***/ }),
/* 235 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {
Object.defineProperty(exports, "__esModule", { value: true });
exports.specNameReporter = void 0;
var io_1 = __webpack_require__(62);
// This is quite handy when the suite starts to hang, so you can identify where the issue is.
var PRINT_NAMES = process.argv[3] === "--names=true";
var specNameReporter = {
    specStarted: function (result) {
        if (PRINT_NAMES)
            io_1.saveLog(result.fullName, io_1.LogTarget.SPEC);
    },
};
exports.specNameReporter = specNameReporter;

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(84)))

/***/ }),
/* 236 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {
Object.defineProperty(exports, "__esModule", { value: true });
exports.specReporter = void 0;
var jasmine_spec_reporter_1 = __webpack_require__(82);
var ciMode_1 = __webpack_require__(227);
var specReporter = process.env.TEST_MODE ? new jasmine_spec_reporter_1.SpecReporter({ summary: { displayPending: ciMode_1.CI_MODE } }) : {};
exports.specReporter = specReporter;

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(84)))

/***/ }),
/* 237 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.runScriptAndGetConsoleOutput = void 0;
var runScriptAndGetConsoleOutput_1 = __webpack_require__(238);
Object.defineProperty(exports, "runScriptAndGetConsoleOutput", { enumerable: true, get: function () { return runScriptAndGetConsoleOutput_1.runScriptAndGetConsoleOutput; } });


/***/ }),
/* 238 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.runScriptAndGetConsoleOutput = void 0;
var cp = __importStar(__webpack_require__(82));
var io_1 = __webpack_require__(62);
var math_1 = __webpack_require__(6);
var constants_1 = __webpack_require__(239);
var runScriptAndGetConsoleOutput = function (script) {
    var consoleOutput = cp.execSync(script, { stdio: ["pipe", "pipe", "inherit"] }).toString();
    var consoleOutputLines = io_1.split(consoleOutput, io_1.NEWLINE);
    return consoleOutputLines.slice(constants_1.NPM_SCRIPT_HEADER_LINES_COUNT, math_1.count(consoleOutputLines) - constants_1.SKIP_THE_FINAL_EMPTY_LINE);
};
exports.runScriptAndGetConsoleOutput = runScriptAndGetConsoleOutput;


/***/ }),
/* 239 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.SKIP_THE_FINAL_EMPTY_LINE = exports.NPM_SCRIPT_HEADER_LINES_COUNT = void 0;
var NPM_SCRIPT_HEADER_LINES_COUNT = 4;
exports.NPM_SCRIPT_HEADER_LINES_COUNT = NPM_SCRIPT_HEADER_LINES_COUNT;
var SKIP_THE_FINAL_EMPTY_LINE = 1;
exports.SKIP_THE_FINAL_EMPTY_LINE = SKIP_THE_FINAL_EMPTY_LINE;


/***/ }),
/* 240 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.ACCIDENTALS = void 0;
const conventional_1 = __webpack_require__(241);
const ehejipn_1 = __webpack_require__(243);
const sagittal_1 = __webpack_require__(245);
const unconventional_1 = __webpack_require__(244);
const upsAndDowns_1 = __webpack_require__(246);
const ACCIDENTALS = {
    ...conventional_1.CONVENTIONAL_ACCIDENTALS,
    ...ehejipn_1.EHEJIPN_ACCIDENTALS,
    ...sagittal_1.SAGITTAL_ACCIDENTALS,
    ...unconventional_1.UNCONVENTIONAL_ACCIDENTALS,
    ...upsAndDowns_1.UPS_AND_DOWNS_ACCIDENTALS,
};
exports.ACCIDENTALS = ACCIDENTALS;


/***/ }),
/* 241 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.smallDoubleSharp = exports.bb = exports.x = exports.b = exports.sharp = exports.n = exports.h = exports.CONVENTIONAL_ACCIDENTALS = void 0;
const types_1 = __webpack_require__(242);
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
/* 242 */
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
/* 243 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// tslint:disable max-line-length
Object.defineProperty(exports, "__esModule", { value: true });
exports.ehejipnNaturalTemperedSemitone = exports.ehejipnFlatTemperedSemitone = exports.ehejipnDoubleFlatTemperedSemitone = exports.ehejipnCombiningCloseCurlyBrace = exports.ehejipnCombiningOpenCurlyBrace = exports.ehejipn23Utonal = exports.ehejipn23Otonal = exports.ehejipn19Otonal = exports.ehejipn19Utonal = exports.ehejipn17Utonal = exports.ehejipn17Otonal = exports.ehejipn13Utonal = exports.ehejipn13Otonal = exports.ehejipn11Otonal = exports.ehejipn11Utonal = exports.ehejipnDouble7Utonal = exports.ehejipnDouble7Otonal = exports.ehejipn7Utonal = exports.ehejipn7Otonal = exports.ehejipnDoubleSharpTriple5Utonal = exports.ehejipnSharpTriple5Utonal = exports.ehejipnNaturalTriple5Utonal = exports.ehejipnFlatTriple5Utonal = exports.ehejipnDoubleFlatTriple5Utonal = exports.ehejipnDoubleSharpTriple5Otonal = exports.ehejipnSharpTriple5Otonal = exports.ehejipnNaturalTriple5Otonal = exports.ehejipnFlatTriple5Otonal = exports.ehejipnDoubleFlatTriple5Otonal = exports.ehejipnDoubleSharpDouble5Utonal = exports.ehejipnSharpDouble5Utonal = exports.ehejipnNaturalDouble5Utonal = exports.ehejipnFlatDouble5Utonal = exports.ehejipnDoubleFlatDouble5Utonal = exports.ehejipnDoubleSharpDouble5Otonal = exports.ehejipnSharpDouble5Otonal = exports.ehejipnNaturalDouble5Otonal = exports.ehejipnFlatDouble5Otonal = exports.ehejipnDoubleFlatDouble5Otonal = exports.ehejipnDoubleSharp5Utonal = exports.ehejipnSharp5Utonal = exports.ehejipnNatural5Utonal = exports.ehejipnFlat5Utonal = exports.ehejipnDoubleFlat5Utonal = exports.ehejipnDoubleSharp5Otonal = exports.ehejipnSharp5Otonal = exports.ehejipnNatural5Otonal = exports.ehejipnFlat5Otonal = exports.ehejipnDoubleFlat5Otonal = exports.EHEJIPN_ACCIDENTALS = void 0;
exports.accidentalThreeQuarterTonesFlatZimmermann = exports.ehejipnEnharmonicallyReinterpretEquals = exports.ehejipnEnharmonicallyReinterpretAlmostEqual = exports.ehejipnEnharmonicallyReinterpret = exports.ehejipn53Utonal = exports.ehejipn53Otonal = exports.ehejipnQuarterSharpTemperedSemitone = exports.ehejipnQuarterFlatTemperedSemitone = exports.ehejipnDoubleSharpTemperedSemitone = exports.ehejipnSharpTemperedSemitone = void 0;
const types_1 = __webpack_require__(242);
const conventional_1 = __webpack_require__(241);
const unconventional_1 = __webpack_require__(244);
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
/* 244 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.wilsonMinus = exports.wilsonPlus = exports.sesquiflat = exports.sesquisharp = exports.semiflat = exports.semisharp = exports.UNCONVENTIONAL_ACCIDENTALS = void 0;
const types_1 = __webpack_require__(242);
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
/* 245 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// tslint:disable max-line-length
Object.defineProperty(exports, "__esModule", { value: true });
exports.doubleSharp5v7kDown = exports.doubleFlat5CUp = exports.doubleSharp5CDown = exports.doubleFlat7CUp = exports.doubleSharp7CDown = exports.doubleFlat25SUp = exports.doubleSharp25SDown = exports.flat35LDown = exports.sharp35LUp = exports.flat11LDown = exports.sharp11LUp = exports.flat11MDown = exports.sharp11MUp = exports.flat35MDown = exports.sharp35MUp = exports.flat25SDown = exports.sharp25SUp = exports.flat7CDown = exports.sharp7CUp = exports.flat5CDown = exports.sharp5CUp = exports.flat5v7kDown = exports.sharp5v7kUp = exports.apotomeDown = exports.apotomeUp = exports.flat5v7kUp = exports.sharp5v7kDown = exports.flat5CUp = exports.sharp5CDown = exports.flat7CUp = exports.sharp7CDown = exports.flat25SUp = exports.sharp25SDown = exports._35LDown = exports._35LUp = exports._11LDown = exports._11LUp = exports._11MDown = exports._11MUp = exports._35MDown = exports._35MUp = exports._25SDown = exports._25SUp = exports._7CDown = exports._7CUp = exports._5CDown = exports._5CUp = exports._5v7kDown = exports._5v7kUp = exports.SAGITTAL_ACCIDENTALS = void 0;
exports.sharp5v23SDown = exports._5v23SDown = exports._5v23SUp = exports._5v19CDown = exports._5v19CUp = exports._23CDown = exports._23CUp = exports.doubleFlat7v11kUp = exports.doubleSharp7v11kDown = exports.doubleFlat17CUp = exports.doubleSharp17CDown = exports.doubleFlat55CUp = exports.doubleSharp55CDown = exports.doubleFlat7v11CUp = exports.doubleSharp7v11CDown = exports.doubleFlat5v11SUp = exports.doubleSharp5v11SDown = exports.flat5v11SDown = exports.sharp5v11SUp = exports.flat7v11CDown = exports.sharp7v11CUp = exports.flat55CDown = exports.sharp55CUp = exports.flat17CDown = exports.sharp17CUp = exports.flat7v11kDown = exports.sharp7v11kUp = exports.flat7v11kUp = exports.sharp7v11kDown = exports.flat17CUp = exports.sharp17CDown = exports.flat55CUp = exports.sharp55CDown = exports.flat7v11CUp = exports.sharp7v11CDown = exports.flat5v11SUp = exports.sharp5v11SDown = exports._5v11SDown = exports._5v11SUp = exports._7v11CDown = exports._7v11CUp = exports._55CDown = exports._55CUp = exports._17CDown = exports._17CUp = exports._7v11kDown = exports._7v11kUp = exports.doubleFlat = exports.doubleSharp = exports.doubleFlat5v7kUp = void 0;
exports.sharp49SDown = exports.flat23SUp = exports.sharp23SDown = exports._5v13LDown = exports._5v13LUp = exports._11v19LDown = exports._11v19LUp = exports._49LDown = exports._49LUp = exports._5v49MDown = exports._5v49MUp = exports._49MDown = exports._49MUp = exports._11v19MDown = exports._11v19MUp = exports._5v13MDown = exports._5v13MUp = exports._23SDown = exports._23SUp = exports._49SDown = exports._49SUp = exports._7v19CDown = exports._7v19CUp = exports._19CDown = exports._19CUp = exports._11v49CDown = exports._11v49CUp = exports._143CDown = exports._143CUp = exports._17kDown = exports._17kUp = exports._19sDown = exports._19sUp = exports.doubleFlat23CUp = exports.doubleSharp23CDown = exports.doubleFlat5v19CUp = exports.doubleSharp5v19CDown = exports.doubleFlat5v23SUp = exports.doubleSharp5v23SDown = exports.flat5v23SDown = exports.sharp5v23SUp = exports.flat5v19CDown = exports.sharp5v19CUp = exports.flat23CDown = exports.sharp23CUp = exports.flat23CUp = exports.sharp23CDown = exports.flat5v19CUp = exports.sharp5v19CDown = exports.flat5v23SUp = void 0;
exports.doubleSharp19CDown = exports.doubleFlat7v19CUp = exports.doubleSharp7v19CDown = exports.doubleFlat49SUp = exports.doubleSharp49SDown = exports.doubleFlat23SUp = exports.doubleSharp23SDown = exports.flat5v13LDown = exports.sharp5v13LUp = exports.flat11v19LDown = exports.sharp11v19LUp = exports.flat49LDown = exports.sharp49LUp = exports.flat5v49MDown = exports.sharp5v49MUp = exports.flat49MDown = exports.sharp49MUp = exports.flat11v19MDown = exports.sharp11v19MUp = exports.flat5v13MDown = exports.sharp5v13MUp = exports.flat23SDown = exports.sharp23SUp = exports.flat49SDown = exports.sharp49SUp = exports.flat7v19CDown = exports.sharp7v19CUp = exports.flat19CDown = exports.sharp19CUp = exports.flat11v49CDown = exports.sharp11v49CUp = exports.flat143CDown = exports.sharp143CUp = exports.flat17kDown = exports.sharp17kUp = exports.flat19sDown = exports.sharp19sUp = exports.flat19sUp = exports.sharp19sDown = exports.flat17kUp = exports.sharp17kDown = exports.flat143CUp = exports.sharp143CDown = exports.flat11v49CUp = exports.sharp11v49CDown = exports.flat19CUp = exports.sharp19CDown = exports.flat7v19CUp = exports.sharp7v19CDown = exports.flat49SUp = void 0;
exports.dotDown = exports.dotUp = exports.wingbirdDown = exports.wingbirdUp = exports.wedgebirdDown = exports.wedgebirdUp = exports.hornbirdDown = exports.hornbirdUp = exports.mBirdDown = exports.mBirdUp = exports.wedgewingDown = exports.wedgewingUp = exports.hornwingDown = exports.hornwingUp = exports.mWingDown = exports.mWingUp = exports.wedgeDown = exports.wedgeUp = exports.hornDown = exports.hornUp = exports.birdDown = exports.birdUp = exports.wingDown = exports.wingUp = exports.tickDown = exports.tickUp = exports.shaftDown = exports.shaftUp = exports.doubleFlat19sUp = exports.doubleSharp19sDown = exports.doubleFlat17kUp = exports.doubleSharp17kDown = exports.doubleFlat143CUp = exports.doubleSharp143CDown = exports.doubleFlat11v49CUp = exports.doubleSharp11v49CDown = exports.doubleFlat19CUp = void 0;
const types_1 = __webpack_require__(242);
// TODO: I considered pulling these unicodes in from @sagittal/system, but decided not to bloat it for the forum
const _5v7kUp = ""; // U+E300   5:7 kleisma up, (5:7k, ~11:13k, 7C less 5C)
exports._5v7kUp = _5v7kUp;
const _5v7kDown = ""; // U+E301   5:7 kleisma down
exports._5v7kDown = _5v7kDown;
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
const _7v11kUp = ""; // U+E340   7:11 kleisma up, (7:11k)
exports._7v11kUp = _7v11kUp;
const _7v11kDown = ""; // U+E341   7:11 kleisma down
exports._7v11kDown = _7v11kDown;
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
const _17kUp = ""; // U+E392   17 kleisma up, (17k)
exports._17kUp = _17kUp;
const _17kDown = ""; // U+E393   17 kleisma down
exports._17kDown = _17kDown;
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
    [types_1.Code["|("]]: _5v7kUp,
    [types_1.Code["!("]]: _5v7kDown,
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
    [types_1.Code[")|("]]: _7v11kUp,
    [types_1.Code[")!("]]: _7v11kDown,
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
    [types_1.Code["~|"]]: _17kUp,
    [types_1.Code["~!"]]: _17kDown,
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
/* 246 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.down = exports.up = exports.UPS_AND_DOWNS_ACCIDENTALS = void 0;
const types_1 = __webpack_require__(242);
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
/* 247 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.bsf2 = exports.bsg2 = exports.bsa2 = exports.bsb2 = exports.bsc3 = exports.bsd3 = exports.bse3 = exports.bsf3 = exports.bsg3 = exports.bsa3 = exports.bsb3 = exports.bsc4 = exports.bsd4 = exports.bse4 = exports.tra3 = exports.trb3 = exports.trc4 = exports.trd4 = exports.tre4 = exports.trf4 = exports.trg4 = exports.tra4 = exports.trb4 = exports.trc5 = exports.trd5 = exports.tre5 = exports.trf5 = exports.trg5 = exports.tra5 = exports.trb5 = exports.trc6 = exports.staffPosLower8 = exports.staffPosLower7 = exports.staffPosLower6 = exports.staffPosLower5 = exports.staffPosLower4 = exports.staffPosLower3 = exports.staffPosLower2 = exports.staffPosLower1 = exports.staffPosCenter = exports.staffPosRaise1 = exports.staffPosRaise2 = exports.staffPosRaise3 = exports.staffPosRaise4 = exports.staffPosRaise5 = exports.staffPosRaise6 = exports.staffPosRaise7 = exports.staffPosRaise8 = exports.TREBLE_COMBINING_STAFF_POSITION_UNICODE_MAP = exports.BASS_COMBINING_STAFF_POSITION_UNICODE_MAP = void 0;
exports.COMBINING_STAFF_POSITIONS = exports.a3 = exports.b3 = exports.c4 = exports.d4 = exports.e4 = exports.f4 = exports.g4 = exports.a4 = exports.b4 = exports.c5 = exports.d5 = exports.e5 = exports.f5 = exports.g5 = exports.a5 = exports.b5 = exports.c6 = exports.bsc2 = exports.bsd2 = exports.bse2 = void 0;
const types_1 = __webpack_require__(242);
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
const COMBINING_STAFF_POSITIONS = [
    staffPosRaise8,
    staffPosRaise7,
    staffPosRaise6,
    staffPosRaise5,
    staffPosRaise4,
    staffPosRaise3,
    staffPosRaise2,
    staffPosRaise1,
    staffPosCenter,
    staffPosLower1,
    staffPosLower2,
    staffPosLower3,
    staffPosLower4,
    staffPosLower5,
    staffPosLower6,
    staffPosLower7,
    staffPosLower8,
];
exports.COMBINING_STAFF_POSITIONS = COMBINING_STAFF_POSITIONS;


/***/ }),
/* 248 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.INITIAL_STAFF_STATE = void 0;
const INITIAL_STAFF_STATE = {
    smartSpace: 0,
    smartStaff: 0,
    smartStaffOn: false,
};
exports.INITIAL_STAFF_STATE = INITIAL_STAFF_STATE;


/***/ }),
/* 249 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.getUnicode = void 0;
const combiningStaffPositions_1 = __webpack_require__(247);
const types_1 = __webpack_require__(242);
const unicodeFromUnknownCode_1 = __webpack_require__(250);
const unicodeMap_1 = __webpack_require__(251);
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
    const knownUnicode = INPUT_TO_UNICODE_MAP[userInput];
    return knownUnicode || (userInput.match(/^u\+/) ?
        unicodeFromUnknownCode_1.unicodeFromUnknownCode(userInput) :
        userInput);
};
exports.getUnicode = getUnicode;


/***/ }),
/* 250 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.unicodeFromUnknownCode = void 0;
// TODO: Probably a lot of these types and variable names can be refined now that we have Code type
const unicodeFromUnknownCode = (userInput) => String.fromCharCode(parseInt(userInput.replace(/^u\+(.*)/, "0x$1")));
exports.unicodeFromUnknownCode = unicodeFromUnknownCode;


/***/ }),
/* 251 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.nt2 = exports.nt1 = exports.ntdb = exports.TIME_SIGNATURES = exports.tmdn = exports.tmnm = exports.tmcm = exports.tm9 = exports.tm8 = exports.tm7 = exports.tm6 = exports.tm5 = exports.tm4 = exports.tm3 = exports.tm2 = exports.tm1 = exports.tm0 = exports.CLEFS = exports._8vb = exports._8va = exports.bscf = exports.alcf = exports.tbcf = exports.BARS = exports.brlndb = exports.brln = exports.LEDGER_LINES = exports.STAFF_LINES = exports.lgln = exports.st = exports.st24 = exports.st16 = exports.st8 = exports.SPACES = exports.sp16 = exports.sp15 = exports.sp14 = exports.sp13 = exports.sp12 = exports.sp11 = exports.sp10 = exports.sp9 = exports.sp8 = exports.sp7 = exports.sp6 = exports.sp5 = exports.sp4 = exports.sp3 = exports.sp2 = exports.sp1 = void 0;
exports.CODES = exports.BEAMED_GROUPS_OF_NOTES = exports.tp3 = exports.bm16 = exports.bm8 = exports.ntbm16 = exports.ntbm8 = exports.ntbmst = exports.DOTS = exports.agdt = exports.dt = exports.RESTS = exports.rs = exports.rs16 = exports.rs8 = exports.rs4 = exports.rs2 = exports.rs1 = exports.rsdb = exports.NOTES = exports.nt = exports.nt16dn = exports.nt16 = exports.nt8dn = exports.nt8 = exports.nt4dn = exports.nt4 = exports.nt2dn = void 0;
const accidentals_1 = __webpack_require__(240);
const types_1 = __webpack_require__(242);
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
const STAFF_LINES = {
    [types_1.Code["st8"]]: st8,
    [types_1.Code["st16"]]: st16,
    [types_1.Code["st24"]]: st24,
    [types_1.Code["st"]]: st,
};
exports.STAFF_LINES = STAFF_LINES;
const lgln = ""; // U+E022    leger line
exports.lgln = lgln;
const LEDGER_LINES = {
    [types_1.Code["lgln"]]: lgln,
};
exports.LEDGER_LINES = LEDGER_LINES;
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
    ...STAFF_LINES,
    ...LEDGER_LINES,
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
/* 252 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.staffState = void 0;
const constants_1 = __webpack_require__(248);
const staffState = JSON.parse(JSON.stringify(constants_1.INITIAL_STAFF_STATE));
exports.staffState = staffState;


/***/ }),
/* 253 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.computeSpaceUnicode = void 0;
const general_1 = __webpack_require__(3);
const unicodeMap_1 = __webpack_require__(251);
const BIGGEST_SPACE = 16;
// TODO: ugh names are so bad
const SPACES_ARRAY = [
    "",
    unicodeMap_1.sp1,
    unicodeMap_1.sp2,
    unicodeMap_1.sp3,
    unicodeMap_1.sp4,
    unicodeMap_1.sp5,
    unicodeMap_1.sp6,
    unicodeMap_1.sp7,
    unicodeMap_1.sp8,
    unicodeMap_1.sp9,
    unicodeMap_1.sp10,
    unicodeMap_1.sp11,
    unicodeMap_1.sp12,
    unicodeMap_1.sp13,
    unicodeMap_1.sp14,
    unicodeMap_1.sp15,
];
const computeSpaceUnicode = (spaces) => {
    let remainingSpace = spaces;
    let unicode = "";
    while (remainingSpace >= BIGGEST_SPACE) {
        remainingSpace = remainingSpace - 16;
        unicode = general_1.sumTexts(unicode, unicodeMap_1.sp16);
    }
    return general_1.sumTexts(unicode, SPACES_ARRAY[remainingSpace]);
};
exports.computeSpaceUnicode = computeSpaceUnicode;


/***/ })
/******/ ]);