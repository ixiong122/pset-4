const readlineSync = require("readline-sync");

const MIN = 1;
const MAX = Number.MAX_SAFE_INTEGER;
let positiveInteger = 0;

do {
   positiveInteger = readlineSync.question("Positive Integer: ");
} while (positiveInteger < MIN || positiveInteger > MAX);
let length = positiveInteger.length;
let number = length;
for (let number = length; number > length ; number--) {
  console.log(number);
}
