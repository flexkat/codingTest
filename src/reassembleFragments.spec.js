const { describe } = require('@jest/globals');
const reassembleFragments = require('./reassembleFragments');

describe('reassembleFragments', () => {
  let testStringArrayOne = ["all is well", "ell that en", "hat end", "t ends well"]

  it('should return a string from an array of strings', () => {
    expect(reassembleFragments(testStringArrayOne)).toBe("all is well that ends well")
  })
  it('should return "Error: Missing strings" if no args passed in', () => {
    expect(reassembleFragments()).toBe("Error: Missing strings")
  })
  it('should return "Error: Missing strings" if an empty array passed in', () => {
    expect(reassembleFragments([])).toBe("Error: Missing strings")
  })
})

