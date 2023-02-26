const prompt = require("prompt-sync")({ sigint: true });
const n1 = Number(prompt("Enter first number: "));
const n2 = Number(prompt("Enter second number: "));
const op = prompt("Enter the operator (+, -, *, /, %): ");

switch (op) {
  case "+":
    console.log(n1 + n2);
    break;
  case "-":
    console.log(n1 - n2);
    break;
  case "*":
    console.log(n1 * n2);
    break;
  case "/":
    console.log(n1 / n2);
    break;
  case "%":
    console.log(n1 % n2);
    break;
  default:
    console.log("Please enter valid operator!");
}

// Example output
// Enter first number: 2
// Enter second number: 7
// Enter the operator (+, -, *, /, %): +
// 9
