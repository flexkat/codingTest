const checkOverlap = (string1, string2) => {
  if (!string1 || !string2) {
    throw new Error("Missing a string for comparison");
  }
  if (typeof string1 != "string" || typeof string2 != "string") {
    throw new Error("Please pass fragments as strings");
  }
  let overlapMax = 0;

  if (string1.includes(string2)) overlapMax = string2.length;

  for (let i = 0; i < string2.length; i++) {
    let substring = string2.substring(i);

    if (string1.startsWith(substring)) {
      overlapMax = i;
    }
  }

  for (let i = string2.length; i > 0; i--) {
    let substring = string2.substring(0, i);

    if (string1.endsWith(substring)) {
      overlapMax = i;
    }
  }

  return overlapMax;
};

module.exports = checkOverlap;
