const reassembleFragments = require("./src/reassembleFragments");

const s3 = "all is well";
const s4 = "ell that en";
const s1 = "hat end";
const s2 = "t ends well";

const a1 = "The apple doesn't";
const a2 = "n't fall f";
const a3 = "all far";
const a4 = "ar from the";
const a5 = "he tree";

console.log("===============EXAMPLE INPUTS=======================");
console.log(`a1: ${a1} + a2: ${a2} + a3: ${a3} + a4: ${a4} + a5: ${a5}`);
console.log(reassembleFragments([a4, a2, a1, a5, a3]));

console.log("===============ASSIGNMENT INPUTS=======================");
console.log(`s3: ${s3} + s4: ${s4} + s1: ${s1} + s2: ${s2}`);
console.log(reassembleFragments([s1, s2, s3, s4]));
