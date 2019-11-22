const readlineSync = require("readline-sync");

const MIN = Number.MIN_SAFE_INTEGER;
const MAX = Number.MAX_SAFE_INTEGER ;

let upperBound = 0;
let lowerBound = 0;
let sum = 0;

do {
   lowerBound = readlineSync.question("Lower bound: ");
   upperBound = readlineSync.question("Upper bound: ");
} while (lowerBound > upperBound || lowerBound < MIN || upperBound > MAX || lowerBound % 1 !==0 || upperBound % 1 !==0 || Number.isNaN(upperBound) || Number.isNaN(lowerBound));

for (let i =lowerBound; i <= upperBound; i++) {
  if (i % 2 == 0) {
    sum = sum + i;
  }
}
let formatted = sum.toLocaleString("en");

console.log("\n" + formatted + ".\n");
