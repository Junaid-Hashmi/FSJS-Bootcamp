const prompt = require("prompt-sync")({ sigint: true });

const month = prompt("Enter a month: ");
const year = prompt("Enter a year: ");

switch (month) {
  case "January":
  case "March":
  case "May":
  case "July":
  case "August":
  case "October":
  case "December":
    console.log("31 Days");
    break;

  case "February":
    // Checking for leap year
    console.log(`${year % 4 == 0 ? "29 Days" : "28 Days"}`);
    break;

  case "April":
  case "June":
  case "September":
  case "November":
    console.log("30 Days");
    break;

  default:
    console.log("Enter valid month");
}
