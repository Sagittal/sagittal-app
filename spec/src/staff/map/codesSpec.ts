import {Code, Codeword} from "../../../../src/staff/map"

describe("no duplicate codewords", (): void => {
    it("verifies that no two codewords, when put in lower case, are the same", (): void => {
        const seenLowercaseCodewords = [] as Codeword[]

        const codewords = Object.keys(Code) as Codeword[]

        codewords.forEach((codeword: Codeword): void => {
            const lowercaseCodeword = codeword.toLowerCase() as Codeword
            if (seenLowercaseCodewords.includes(lowercaseCodeword)) {
                fail(`duplicate codeword: ${codeword}`)
            }
            seenLowercaseCodewords.push(lowercaseCodeword)
        })
    })
})
