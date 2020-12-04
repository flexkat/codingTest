const mergeFragments = require('./mergeFragments');

describe('mergeFragments', () => {
  it('should return the first string if string1 and string2 are the same', () => {
    expect(mergeFragments("abcd", "abcd")).toBe("abcd");
  })
  it('should return a merged fragment with the strings joined, overlapping any matching character', () => {
    expect(mergeFragments("all is well", "ell that en")).toBe("all is well that en")
  })
  it('should join together two strings if there is no overlap', () => {
    expect(mergeFragments("adcd", "efdh")).toBe("adcdefdh")
  })
});
