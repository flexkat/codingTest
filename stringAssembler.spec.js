import jest from 'jest';
import { describe } from '@jest/globals';
import { checkOverlap } from './stringAssembler'

describe('checkOverlap', () => {
  it('should return the first string if string1 and string2 are the same', () => {
    expect(checkOverlap("abcd", "abcd").mergedString).toBe("abcd");
  })
  it('should return an object with keys mergedString and overlapMax', () => {
    expect(checkOverlap("abcd", "cdef")).toHaveProperty("mergedString")
    expect(checkOverlap("abcd", "cdef")).toHaveProperty("overlapMax")
  })
  it('should return a value of the overlapMax, which is the number of characters or spaces overlapping', () => {
    expect(checkOverlap("abcd", "cdef").overlapMax).toBe(2)
  })
  it('should return a mergedString with the strings joined, overlapping any matching character', () => {
    expect(checkOverlap("all is well", "ell that en").mergedString).toBe("all is well that en")
  })
  it('should join together two strings if there is no overlap', () => {
    expect(checkOverlap("adcd", "efdh").mergedString).toBe("adcdefdh")
  })
});

