
let s3 = "all is well";
let s4 = "ell that en";
let s1 = "hat end";
let s2 = "t ends well";

let a1 = "an apple doesnt";
let a2 = "nt fall fa";
let a3 = "ll far"
let a4 = "ar from th"
let a5 = "he tree";


const mergeStrings = (string1, string2) => {
  let mergedString = "";

  if (string1.includes(string2)) {
    mergedString = string2;
  }

  for (let i = 0; i < string2.length; i++) {
    let substring = string2.substring(i);
    let remaining = string2.substring(0, i);

    if (string1.startsWith(substring)) {
      mergedString = remaining + string1;
    }
  }

  for (let i = string2.length; i > 0; i--) {
    let substring = string2.substring(0, i);
    let remaining = string2.substring(i);

    if (string1.endsWith(substring)) {
      mergedString = string1 + remaining;
    }
  }

  if (!mergedString) mergedString = string1 + string2;

  return mergedString;
}

const checkOverlap = (string1, string2) => {
  let overlapMax = 0;
  let overlapSection = ""

  if (!string1 || !string2) {
    console.log("error, missing a string")

  } else {

    if (string1.includes(string2)) overlapMax = string2.length;

    for (let i = 0; i < string2.length; i++) {
      let substring = string2.substring(i);

      if (string1.startsWith(substring)) {
        overlapMax = i;
        overlapSection = substring
      }
    }

    for (let i = string2.length; i > 0; i--) {
      let substring = string2.substring(0, i);

      if (string1.endsWith(substring)) {
        overlapMax = i;
        overlapSection = substring
      }
    }
  }

  return overlapMax
}
// checkOverlap(s1, s2)

const assembleFragments = (strings) => {
  let mergedString = "";
  let stringA = "";
  let stringB = "";
  let maxOverlapValue = 0;

  if (!strings || strings.length < 1) return "Error: Missing strings"

  // for each string pass it through checkOverlap and record overlapMax
  // if overlapMax is the largest value => add that merged string and remove the piece strings
  // start again and compare each string to each other
  for (let i = 0; i < strings.length - 1; i++) {
    let indexOfSecondString = i + 1
    // string 1 compares 2,3,4
    // string 2 compares 3,4
    // string 3 compares 4

    while (indexOfSecondString <= strings.length - 1) {
      let overlapMax = checkOverlap(strings[i], strings[indexOfSecondString])

      if (overlapMax > maxOverlapValue) {
        maxOverlapValue = overlapMax;
        stringA = strings[i];
        stringB = strings[indexOfSecondString];
      }
      indexOfSecondString++;
    }
  }

  mergedString = mergeStrings(stringA, stringB)

  let newStrings = strings.filter(string => {
    if (string == stringA || string == stringB) return false
    return true
  }
  )

  newStrings.push(mergedString)

  if (newStrings.length > 1) {
    return assembleFragments(newStrings);
  }
  return newStrings[0];
}

// assembleFragments([a1, a2, a3, a4, a5]);




export { checkOverlap, assembleFragments, mergeStrings }