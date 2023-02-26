function patternOne(n) {
  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= i; j++) {
      // console.log("*");
      process.stdout.write("*");
    }
    process.stdout.write("\n");
  }
}

function patternTwo(n) {
  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= n; j++) {
      process.stdout.write("*");
    }
    process.stdout.write("\n");
  }
}

function patternThree(n) {
  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= n - i; j++) {
      process.stdout.write(" ");
    }
    for (let k = 1; k <= 2 * i - 1; k++) {
      process.stdout.write("*");
    }
    process.stdout.write("\n");
  }
}

const prompt = require("prompt-sync")({ sigint: true });
const num = prompt("Enter a number: ");
patternOne(num);
patternTwo(num);
patternThree(num);
