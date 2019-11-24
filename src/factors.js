const readlineSync = require("readline-sync");

const MIN = 1;
const MAX = Number.MAX_SAFE_INTEGER;
var positiveInteger = 0;
let number = 0;
let divided = 0;
let ans = 0;

do {
  positiveInteger = Number(readlineSync.question("Positive Integer: "));
} while (positiveInteger < MIN || positiveInteger > MAX || positiveInteger % 1 !== 0 || Number.isNaN(positiveInteger));

for (var i = 1; i <= positiveInteger; i++) {
  if (num % i == 0) {
            str += ',' + i;
        }
    }
}
