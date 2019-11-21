const readlineSync = require("readline-sync");

const MIN = 0;
const MAX = Number.MAX_SAFE_INTEGER;
let positiveInteger = 0;
let isPrime = false;

do {
  const positiveInteger = readlineSync.question("Non-negative integer: ");
} while (positiveInteger < MIN || positiveInteger > MAX || positiveInteger % 1 !== 0 || Number.isNaN(positiveInteger));
if (positiveInteger == 1) {
  console.log("Not Prime.");
  isPrime = false;
} if (positiveInteger == 2){
  console.log("Prime.");
  isPrime = true;
}
for (let i = 3; i < positiveInteger; i++) {
  if (positiveInteger % i == 0){
    isPrime = false;
  break;
} else {
isPrime = true;
} 
if (isPrime = true){
  console.log("Prime.");
} else {
  console.log("Not prime.");
}
}
