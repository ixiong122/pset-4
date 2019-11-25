const readlineSync = require("readline-sync");

const MIN = 1;
const MAX = Number.MAX_SAFE_INTEGER;
let positiveInteger = 0;
let numberValue = 0;

do {
   positiveInteger = readlineSync.question("Positive Integer: ");
} while (positiveInteger < MIN || positiveInteger > MAX || Number.isNaN(positiveInteger) || positiveInteger % 1 !== 0);

do {
  number = positiveInteger % 10
  positiveInteger = Math.floor(positiveInteger / 10)
  if (positiveInteger > 0) {
    numberValue = numberValue + number + ", ";
  } else {
    numberValue = numberValue + number + ". ";
  }
} while (positiveInteger > 0)

console.log("\n" + numberValue + "\n\n");
