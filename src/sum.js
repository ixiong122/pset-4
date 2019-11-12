const readlineSync = require("readline-sync");

const MIN = Number.MIN_SAFE_INTEGER;
const MAX = Number.MAX_SAFE_INTEGER;

let lowerBound = 0;
let upperBound = -1;

while (lowerBound > upperBound) {
  lowerBound = readlineSync.question("Lower bound: ");
  upperBound = readlineSync.question("Upper bound: ");
}
