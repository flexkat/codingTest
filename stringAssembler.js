
let s1 = "all is well"
let s2 = "ell that en"
let s3 = "hat end"
let s4 = "t ends well"

const checkOverlap = (string1, string2) => {
  let overlapMax = 0;
  let overlapString = ""
  let mergedString

  if (string1.includes(string2)) {
    overlapMax = string2.length
    overlapString = string2
  }

  for (let i = 0; i < string2.length; i++) {
    let substring = string2.substring(i)
    let remaining = string2.substring(0, i)

    if (string1.startsWith(substring)) {
      overlapString = substring
      overlapMax = i + 1
      mergedString = remaining + string1
    }
  }

  for (let i = string2.length; i > 0; i--) {
    let substring = string2.substring(0, i)
    let remaining = string2.substring(i)

    if (string1.endsWith(substring)) {
      overlapString = substring
      overlapMax = i + 1
      mergedString = string1 + remaining
    }
  }

  if (!mergedString) mergedString = string1 + string2

  console.log({ mergedString })
  return { mergedString, overlapMax }
}

checkOverlap(s1, s2)
