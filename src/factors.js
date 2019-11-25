const readlineSync = require("readline-sync");

const MIN = 1;
const MAX = Number.MAX_SAFE_INTEGER;

let positiveInteger = Number(readlineSync.question("\nPositive integer: "));
let factor = 0;

while (Number.isNaN(positiveInteger) || positiveInteger < MIN || positiveInteger > MAX || !Number.isInteger(positiveInteger)) {
  positiveInteger = Number(readlineSync.question("Positive integer: "));
}

process.stdout.write("\n");

for (var i = 1; i * i <= positiveInteger; i++) {
  if (positiveInteger % i == 0)  {
    factors = (i == (positiveInteger / i)) ? i + ".\n " : i + ", " + positiveInteger / i + ", "
    process.stdout.write(factors);
  }
}
console.log("\n")
