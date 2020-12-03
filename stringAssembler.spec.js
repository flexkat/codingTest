import jest from 'jest';
import { describe } from '@jest/globals';
import { checkOverlap, mergeStrings } from './stringAssembler'

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

describe('mergeStrings', () => {
  it('should return the first string if string1 and string2 are the same', () => {
    expect(mergeStrings("abcd", "abcd")).toBe("abcd");
  })
  it('should return a mergedString with the strings joined, overlapping any matching character', () => {
    expect(mergeStrings("all is well", "ell that en")).toBe("all is well that en")
  })
  it('should join together two strings if there is no overlap', () => {
    expect(mergeStrings("adcd", "efdh")).toBe("adcdefdh")
  })
});

