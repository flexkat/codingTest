
let s1 = "all is well";
let s2 = "ell that en";
let s3 = "hat end";
let s4 = "t ends well";

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

  return overlapMax
}
// checkOverlap(s1, s2)

const assembleFragments = (strings) => {
  let mergedString = "";

  // for each string pass it through checkOverlap and record overlapMax
  // if overlapMax is the largest value => add that merged string and remove the piece strings
  // start again and compare each string to each other
  for (let i = 0; i < strings.length; i++) {
    let { mergedString, overlapMax } = checkOverlap(strings[i], strings[i + 1])
  }
}

export { checkOverlap, assembleFragments, mergeStrings }