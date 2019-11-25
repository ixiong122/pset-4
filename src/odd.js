const readlineSync = require("readline-sync");

const MIN = 1;
const MAX = Number.MAX_SAFE_INTEGER;
let positiveInteger = 0;
let sum = 0;
let number = 0;

do {
  positiveInteger = Number(readlineSync.question("Positive Integer: "));
} while (positiveInteger < MIN || positiveInteger > MAX || Number.isNaN(positiveInteger) || positiveInteger % 1 !== 0);

while (positiveInteger > 0) {
   number = positiveInteger % 10;
   positiveInteger = Math.floor(positiveInteger / 10);

   if (number % 2 !== 0) {
     sum = sum + number;
   }
}
let formatted = sum.toLocaleString("en");

console.log("\n" + sum + ".\n\n");
