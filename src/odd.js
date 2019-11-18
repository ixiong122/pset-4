const readlineSync = require("readline-sync");

const MIN = Number.MIN_SAFE_INTEGER;
const MAX = Number.MAX_SAFE_INTEGER;
let positiveInteger = 0;

do {
  positiveInteger = readlineSync.question("Positive Integer: ");
} while (positiveInteger < 0 ||positiveInteger < MIN || positiveInteger > MAX);
