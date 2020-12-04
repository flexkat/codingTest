const checkOverlap = require("./checkOverlap");
const mergeFragments = require("./mergeFragments");

const reassembleFragments = (arrayOfStrings) => {
  let mergedString = "";
  let stringA = "";
  let stringB = "";
  let maxOverlapValue = 0;

  if (!arrayOfStrings || arrayOfStrings.length < 1)
    throw new Error("Missing fragments to reassemble");
  if (!Array.isArray(arrayOfStrings))
    throw new Error("Fragments need to be in an array to be reassembled");

  for (let i = 0; i < arrayOfStrings.length - 1; i++) {
    let indexOfSecondString = i + 1;

    while (indexOfSecondString <= arrayOfStrings.length - 1) {
      let overlapMax = checkOverlap(
        arrayOfStrings[i],
        arrayOfStrings[indexOfSecondString]
      );

      if (overlapMax > maxOverlapValue) {
        maxOverlapValue = overlapMax;
        stringA = arrayOfStrings[i];
        stringB = arrayOfStrings[indexOfSecondString];
      }
      indexOfSecondString++;
    }
  }

  mergedString = mergeFragments(stringA, stringB);

  let newArrayOfStrings = arrayOfStrings.filter((val) => {
    if (val == stringA || val == stringB) return false;
    return true;
  });

  newArrayOfStrings.push(mergedString);

  if (newArrayOfStrings.length > 1) {
    return reassembleFragments(newArrayOfStrings);
  }
  return newArrayOfStrings[0];
};

module.exports = reassembleFragments;
