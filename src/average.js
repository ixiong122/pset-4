const readlineSync = require("readline-sync");

const MIN = 0;
const MAX = Number.MAX_SAFE_INTEGER;
let positiveInteger = 0;
let firstPositiveInteger = 0;

do {
  const positiveInteger = readlineSync.question("Non-negative integer: ");
    if (positiveInteger == -1 || positiveInteger < MIN || positiveInteger > MAX) {
      const firstPositiveInteger = readlineSync.question("Non-negative integer: ");
    }
} while (positiveInteger < MIN || positiveInteger > MAX );
