const readlineSync = require("readline-sync");

const MIN = 0;
const MAX = Number.MAX_SAFE_INTEGER;
let positiveInteger = 0;
let isPrime = true;

do {
    positiveInteger = readlineSync.question("Non-negative integer: ");
} while (positiveInteger < MIN || positiveInteger > MAX || positiveInteger % 1 !== 0 || Number.isNaN(positiveInteger));

if (positiveInteger == 1) {
  isPrime = false;
} else if (positiveInteger == 2){
  isPrime = true;
} else {
  for (let i = 2; i < positiveInteger; i++){
    if (positiveInteger % i == 0){
      isPrime = false;
      break;
    }
  }
}

if (isPrime) {
  console.log("\nPrime.\n")
  console.log();
} else {
  console.log("\nNot prime.\n");
  console.log();
}
