const mergeFragments = (fragment1, fragment2) => {
  let mergedString = "";

  if (fragment1.includes(fragment2)) {
    mergedString = fragment2;
  }

  for (let i = 0; i < fragment2.length; i++) {
    let substring = fragment2.substring(i);
    let remaining = fragment2.substring(0, i);

    if (fragment1.startsWith(substring)) {
      mergedString = remaining + fragment1;
    }
  }

  for (let i = fragment2.length; i > 0; i--) {
    let substring = fragment2.substring(0, i);
    let remaining = fragment2.substring(i);

    if (fragment1.endsWith(substring)) {
      mergedString = fragment1 + remaining;
    }
  }

  if (!mergedString) mergedString = fragment1 + fragment2;

  return mergedString;
}

module.exports = mergeFragments;
