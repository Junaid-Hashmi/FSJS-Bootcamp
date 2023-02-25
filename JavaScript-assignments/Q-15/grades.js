// 80-100, A
// 70-89, B
// 60-69, C
// 50-59, D
// 0-49, F
const prompt = require("prompt-sync")({ sigint: true });

const marks = Number(prompt("Enter your marks: "));

if (marks >= 80 && marks <= 100) {
  console.log("A");
} else if (marks <= 79 && marks >= 70) {
  console.log("B");
} else if (marks <= 69 && marks >= 60) {
  console.log("C");
} else if (marks <= 59 && marks >= 50) {
  console.log("D");
} else if (marks <= 49 && marks >= 0) {
  console.log("F");
} else {
  console.log("Enter valid marks");
}
