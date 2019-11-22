const readlineSync = require("readline-sync");

const MIN = 0;
const MAX = Number.MAX_SAFE_INTEGER;
let positiveInteger = 0;
let isPrime = false;

do {
   positiveInteger = readlineSync.question("Non-negative integer: ");
} while (positiveInteger < MIN || positiveInteger > MAX || positiveInteger % 1 !== 0 || Number.isNaN(positiveInteger));

if (positiveInteger == 1) {
  isPrime = false;
  // break;
} else if (positiveInteger == 2){
  isPrime = true;
  // break;
} else {
  for (let i = 2; i < positiveInteger; i++){
  if (positiveInteger % i == 0){
    console.log("Not prime.");
    i = positiveInteger;
}
if (isPrime) {
  console.log("Not prime.");
} else {
  console.log("Prime.");
}
