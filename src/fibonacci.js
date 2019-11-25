const readlineSync = require("readline-sync");

const MIN = 1;
const MAX = 78;
let positiveInteger = 0;
let sum = 0;
let sum1 = 1;
let sum2 = 0;

do {
   positiveInteger = readlineSync.question("Positive Integer: ");
} while (positiveInteger < MIN || positiveInteger > MAX || positiveInteger % 1 !== 0 || Number.isNaN(positiveInteger) );

if (positiveInteger == 1){
  console.log("1.");
} else {
for (let i = 2; i <= positiveInteger; i++){
  sum = sum1 + sum2;
  sum2 = sum1;
  sum1 = sum;
}
let formatted = sum.toLocaleString("en");
console.log("\n" + formatted + ".\n");
}
