// TODO: BUG: write a test that checks to make sure that no two codes have the same code
//  Meaning you can't have "X" and "x" because you're going to need to call tolowercase on them all
//  In order to get /X\ able to be used
//  But that's a problem because the TypeScript enum will let you add both "X" and "x" but those will conflict
//  So you'll need to iterate over the enum and check each of its values, lowercased, aaginst everything already seen

describe("CODE_MAP", (): void => {

})
