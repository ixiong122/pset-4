const readlineSync = require("readline-sync");

const MIN = 0;
const MAX = Number.MAX_SAFE_INTEGER;
let positiveInteger = 0;

do {
  const positiveInteger = readlineSync.question("Non-negative integer: ");
} while (positiveInteger < MIN || positiveInteger > MAX || positiveInteger % 1 !== 0 || Number.isNaN(positiveInteger));
if (positiveInteger == 1) {
  console.log("Not Prime.");
}
for (let i = 2; i < positiveInteger; i++) {
  if (positiveInteger % i == 0){
    console.log("Not prime.");
  let  i = positiveInteger;
}
console.log("Prime.");
}
