const checkOverlap = require('./checkOverlap');

describe('checkOverlap', () => {
  it('should return a number for number of characters or spaces overlapping between two strings', () => {
    expect(checkOverlap("abcd", "cdef")).toBe(2)
  })
  it('should return length of string if strings are the same', () => {
    expect(checkOverlap("abcd", "abcd")).toBe(4);
  })
  it('should return zero if there is no overlap', () => {
    expect(checkOverlap("adcd", "efdh")).toBe(0)
  })
});
