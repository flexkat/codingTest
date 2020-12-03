
let s1 = "all is well";
let s2 = "ell that en";
let s3 = "hat end";
let s4 = "t ends well";

const fragmentAssembler = (strings) => {
  for (let i = 0; i < strings.length; i++) {
    let string = strings[i]
    // get first 2 characters of first string, can it be found in remaining strings, set those aside
    let fragment = string.substring(0, 3)
    console.log(fragment + "!")

    for (let j = i + 1; j < strings.length; j++) {
      let comparingString = strings[j]
      if (comparingString.includes(fragment) && comparingString != string) {
        console.log(string + comparingString)
      }
      // go through each of alternate strings adding extra chars from 1st string until one string ends

    }

    // add new string to strings array

  }
}

// fragmentAssembler([s1,s2,s3,s4])


//let containingStrings = strings.filter(str => str.includes(fragment) && str != string)
//  console.log("string", string, containingStrings)
// ? sort length of matching
// add two strings together
//let matchingString = containingStrings[0] 

//let splitMatchingString = matchingString.split("")
//let newString = string.split("").concat(splitMatchingString).join(",")
//console.log("newString", newString)


const sentenceFixing = (strings) => {
  let overlapMax = 0;
  let overlapString = ""
  let overlap
  let initial

  strings.forEach((string, index) => {
    initial = string
    for (let i = 0; i < strings.length; i++) {
      let value = strings[i]
      if (index == i) {
        // console.log("its a match")
      } else if (string.includes(value.charAt(value.length - 1))) {
        let valueOverlap = 0
        let overlapPart
        for (let j = 0; j < value.length; j++) {
          if (string.includes(value.substring(0, j + 1))) {
            valueOverlap = j
            overlapPart = value.substring(0, j + 1)

            if (valueOverlap > overlapMax) {
              overlapMax = valueOverlap
              overlapString = value
              overlap = overlapPart
              // console.log("overlapString", overlapString, initial, overlapMax)

              let splitInitial = initial.split("")
              let splitOverlap = overlapString.split("")
              let newString = splitInitial.map(letter => {
                splitOverlap.forEach((val, index) => {
                  if (val == letter) {
                    return letter
                  } else {
                    return val
                  }
                })
              })
              console.log(splitInitial, splitOverlap)
              console.log("newString", newString.join(""))
            }
          }
        }
      } else {
        overlapString = ""
      }
    }
  })
}

sentenceFixing([s1, s2, s3, s4])
