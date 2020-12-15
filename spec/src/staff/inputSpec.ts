import {Io, SPACE} from "@sagittal/general"
import {computeInputUnicode} from "../../../src/staff/input"
import {Unicode} from "../../../src/staff/symbols"
import {computeCodewordsFromUnicode} from "../../../src/staff/utility/codeword"

const codewordFailMessage = (actualUnicodeSentence: Unicode, expectedUnicodeSentence: Unicode): Io => {
    const actualCodewords = computeCodewordsFromUnicode(actualUnicodeSentence)
    const expectedCodewords = computeCodewordsFromUnicode(expectedUnicodeSentence)

    return `expected "${actualCodewords.join(SPACE)}" to be "${expectedCodewords.join(SPACE)}"`
}

describe("computeInputUnicode", (): void => {
    it("basically works", (): void => {
        const inputSentence = "d5 /|\\ d5 nt" as Io

        const actual = computeInputUnicode(inputSentence)

        // Codewords: d5 /|\ d5 nt sp13
        const expected = "　 " as Unicode
        expect(actual).toBe(expected, codewordFailMessage(actual, expected))
    })

    describe("Smart Position", (): void => {
        it("the most recently used position is automatically applied if none is specified", (): void => {
            const inputSentence = "d5 /|\\ nt" as Io

            const actual = computeInputUnicode(inputSentence)

            // Codewords: d5 /|\ d5 nt sp13
            const expected = "　 " as Unicode
            expect(actual).toBe(expected, codewordFailMessage(actual, expected))
        })

        it("don't manifest until they are needed (only apply to symbols with ligatures to be vertically shifted by them)", (): void => {
            const inputSentence = "d5 st /|\\ sp13 nt" as Io

            const actual = computeInputUnicode(inputSentence)

            // Codewords: d5 /|\ st24 sp13 d5 nt sp11 st24 sp2
            const expected = "　    " as Unicode
            expect(actual).toBe(expected, codewordFailMessage(actual, expected))
        })

        it("persist until a new one is used", (): void => {
            const inputSentence = "d5 st /|\\ sp13 nt sp13 g4 \\! sp7 nt" as Io

            const actual = computeInputUnicode(inputSentence)

            // Codewords: d5 /|\ st24 sp13 d5 nt sp11 st24 sp2 g4 \! sp7 g4 nt sp13
            const expected = "　      　 " as Unicode
            expect(actual).toBe(expected, codewordFailMessage(actual, expected))
        })
    })

    describe("Smart Clef", (): void => {
        it("assume treble clef even if no clef has been provided", (): void => {
            const inputSentence = "d4 nt" as Io

            const actual = computeInputUnicode(inputSentence)

            // Codewords: trd4 nt sp13
            const expected = "　 " as Unicode
            expect(actual).toBe(expected, codewordFailMessage(actual, expected))
        })

        it("change depending on the clef", (): void => {
            const inputSentence = "bscf ; d4 nt" as Io

            const actual = computeInputUnicode(inputSentence)

            // Codewords: bscf sp16 sp8 b5 nt4 sp13
            const expected = "  　 " as Unicode
            expect(actual).toBe(expected, codewordFailMessage(actual, expected))
        })

        it("clefs are smart and they stick until you change them (you can change from one to the other)", (): void => {
            const inputSentence = "bscf ; d4 nt ; c4 nt ; tbcf ; d4 nt ; c4 nt" as Io

            const actual = computeInputUnicode(inputSentence)

            // Codewords: bscf sp16 sp8 bsd4 nt sp13 bsc4 nt sp13 tbcf sp16 sp8 tbd4 nt sp13 tbc4 nt sp13
            const expected = "  　 　   　 　 " as Unicode
            expect(actual).toBe(expected, codewordFailMessage(actual, expected))
        })
    })

    describe("Smart Advance", (): void => {
        it("advances by the width given by each symbol", (): void => {
            let actual
            let expected

            actual = computeInputUnicode("lgln ;" as Io)
            expected = "　 " as Unicode     // Codewords: lgln sp13
            expect(actual).toBe(expected, codewordFailMessage(actual, expected))

            actual = computeInputUnicode("tbcf ;" as Io)
            expected = "  " as Unicode     // Codewords: tbcf sp16 sp8
            expect(actual).toBe(expected, codewordFailMessage(actual, expected))

            actual = computeInputUnicode("ntdb ;" as Io)
            expected = "   " as Unicode    // Codewords: ntdb sp16 sp7
            expect(actual).toBe(expected, codewordFailMessage(actual, expected))

            actual = computeInputUnicode("nt1 ;" as Io)
            expected = "　 " as Unicode     // Codewords: nt1 sp13
            expect(actual).toBe(expected, codewordFailMessage(actual, expected))

            actual = computeInputUnicode("nt2 ;" as Io)
            expected = "　 " as Unicode     // Codewords: nt2 sp13
            expect(actual).toBe(expected, codewordFailMessage(actual, expected))

            actual = computeInputUnicode("nt4 ;" as Io)
            expected = "　 " as Unicode     // Codewords: nt4 sp13
            expect(actual).toBe(expected, codewordFailMessage(actual, expected))

            actual = computeInputUnicode("nt8 ;" as Io)
            expected = "   " as Unicode    // Codewords: nt8 sp16 sp5
            expect(actual).toBe(expected, codewordFailMessage(actual, expected))

            actual = computeInputUnicode("nt16 ;" as Io)
            expected = "   " as Unicode    // Codewords: nt16 sp16 sp5
            expect(actual).toBe(expected, codewordFailMessage(actual, expected))

            actual = computeInputUnicode("nt2dn ;" as Io)
            expected = "　 " as Unicode     // Codewords: nt2dn sp13
            expect(actual).toBe(expected, codewordFailMessage(actual, expected))

            actual = computeInputUnicode("nt4dn ;" as Io)
            expected = "　 " as Unicode     // Codewords: nt4dn sp13
            expect(actual).toBe(expected, codewordFailMessage(actual, expected))

            actual = computeInputUnicode("nt8dn ;" as Io)
            expected = "　 " as Unicode     // Codewords: nt8dn sp13
            expect(actual).toBe(expected, codewordFailMessage(actual, expected))

            actual = computeInputUnicode("nt16dn ;" as Io)
            expected = "　 " as Unicode     // Codewords: nt16dn sp13
            expect(actual).toBe(expected, codewordFailMessage(actual, expected))
        })

        it("if more than one symbol has occurred since the previous advance, uses the width of the symbol with the max width", (): void => {
            const inputSentence = "lgln nt16 ;" as Io

            const actual = computeInputUnicode(inputSentence)

            // Codewords: lgln nt16 sp16 sp5
            const expected = "   " as Unicode
            expect(actual).toBe(expected, codewordFailMessage(actual, expected))
        })

        it("resets the advance amount after each application", (): void => {
            const inputSentence = "lgln nt16 ; nt4 ;" as Io

            const actual = computeInputUnicode(inputSentence)

            // Codewords: lgln nt16 sp16 sp5 nt4 sp13
            const expected = "   　 " as Unicode
            expect(actual).toBe(expected, codewordFailMessage(actual, expected))
        })
    })

    describe("Smart Stave", (): void => {
        it("automatically adds stave lines as needed, if a staff has been asked for at all", (): void => {
            const inputSentence = "st24 nt8 ; nt4 ;"

            const actual = computeInputUnicode(inputSentence)

            // Codewords: st24 nt8 sp16 sp5 nt4 sp3 st24 sp10
            const expected = "      " as Unicode
            expect(actual).toBe(expected, codewordFailMessage(actual, expected))
        })

        // tslint:disable-next-line:ban
        xit("can turn off Smart Stave", (): void => {

        })
    })
})
