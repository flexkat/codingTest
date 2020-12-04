const checkOverlap = require("./checkOverlap");

describe("checkOverlap", () => {
  it("should return a number for number of characters or spaces overlapping between two strings", () => {
    expect(checkOverlap("abcd", "cdef")).toBe(2);
  });
  it("should return length of string if strings are the same", () => {
    expect(checkOverlap("abcd", "abcd")).toBe(4);
  });
  it("should return zero if there is no overlap", () => {
    expect(checkOverlap("adcd", "efdh")).toBe(0);
  });
  it("should throw an error if fragments are not strings", () => {
    expect(() => {
      checkOverlap("adcd", 1);
    }).toThrow("Please pass fragments as strings");
  });
  it("should throw an error if only one fragment is passed in", () => {
    expect(() => {
      checkOverlap("adcd");
    }).toThrow("Missing a string for comparison");
  });
});
