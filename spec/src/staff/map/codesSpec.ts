// TODO: BUG: write a test that checks to make sure that no two codes have the same code
//  Meaning you can't have "X" and "x" because you're going to need to call tolowercase on them all
//  In order to get /X\ able to be used
//  But that's a problem because the TypeScript enum will let you add both "X" and "x" but those will conflict
//  So you'll need to iterate over the enum and check each of its values, lowercased, aaginst everything already seen

import {Code, Codeword} from "../../../../src/staff/map"

describe("no duplicate codewords", (): void => {
    it("verifies that no two codewords, when put in lower case, are the same", (): void => {
        const seenLowercaseCodewords = [] as Codeword[] // TODO: LowercaseCode type?

        const codewords = Object.keys(Code) as Codeword[]

        codewords.forEach((codeword: Codeword): void => {
            // TODO: CLEAN: get consistent about lowerCase vs lowercase
            const lowercaseCodeword = codeword.toLowerCase() as Codeword
            if (seenLowercaseCodewords.includes(lowercaseCodeword)) {
                // TODO: CLEAN make sure all references to code that are actually codeword are right
                fail(`duplicate codeword: ${codeword}`)
            }
            seenLowercaseCodewords.push(lowercaseCodeword)
        })
    })
})
