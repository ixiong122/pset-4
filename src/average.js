const readlineSync = require("readline-sync");

const MIN = 0;
const MAX = Number.MAX_SAFE_INTEGER;
let positiveInteger = 0;
let sum = 0;
let average = 0;

do {
   positiveInteger = Number(readlineSync.question("Non-negative integer: "));
  if (positiveInteger >= MIN && positiveInteger < MAX && !Number.isNaN(positiveInteger)) {
    sum = sum + positiveInteger;
    average = average + 1;
  }
} while ((positiveInteger >= MIN && positiveInteger < MAX && positiveInteger % 1 == 0) || Number.isNaN(positiveInteger));

let answer = (sum / average);
let final =((100 * answer) / (100));
let finalAnswer = final.toLocaleString("en", {minimumFractionDigits:3, maximumFractionDigits:3});

console.log("\n" + finalAnswer + ".\n\n");
