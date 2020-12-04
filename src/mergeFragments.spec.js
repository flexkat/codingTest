const mergeFragments = require("./mergeFragments");

describe("mergeFragments", () => {
  it("should return the first fragment if fragment1 and fragment2 are the same", () => {
    expect(mergeFragments("abcd", "abcd")).toBe("abcd");
  });
  it("should return a merged string with the fragments joined, overlapping any matching character", () => {
    expect(mergeFragments("all is well", "ell that en")).toBe(
      "all is well that en"
    );
  });
  it("should join together two fragments if there is no overlap", () => {
    expect(mergeFragments("adcd", "efdh")).toBe("adcdefdh");
  });
});
