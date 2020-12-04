const reassembleFragments = require("./reassembleFragments");

describe("reassembleFragments", () => {
  let testArray = ["all is well", "ell that en", "hat end", "t ends well"];

  it("should return a string from an array of strings", () => {
    expect(reassembleFragments(testArray)).toBe("all is well that ends well");
  });
  it("should throw an error if no args passed in", () => {
    expect(() => {
      reassembleFragments();
    }).toThrow("Missing fragments to reassemble");
  });
  it("should throw an error if an empty array passed in", () => {
    expect(() => {
      reassembleFragments([]);
    }).toThrow("Missing fragments to reassemble");
  });
  it("should throw an error if an array is not passed in", () => {
    expect(() => {
      reassembleFragments("abcd", "cdef");
    }).toThrow("Fragments need to be in an array to be reassembled");
  });
});
