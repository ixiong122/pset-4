const readlineSync = require("readline-sync");

const MIN = Number.MIN_SAFE_INTEGER;
const MAX = Number.MAX_SAFE_INTEGER ;

let upperBound = 0;
let lowerBound = 0;

do {
  lowerBound = readlineSync.question("Lower bound: ");
  upperBound = readlineSync.question("Upper bound: ");
} while (lowerBound > upperBound || lowerBound < MIN || upperBound > MAX || lowerBound % 1 !==0 || upperBound % 1 !==0);
const lowerBound2 = 2 * Math.ceil(lowerBound / 2);
const upperBound2 = 2 * Math.floor(upperBound / 2);
let numberofTerms = Math.floor(upperBound2 - lowerBound2 + 1)/2;
let sum = (upperBound2 + lowerBound2) * (numberofTerms);
console.log(sum);
