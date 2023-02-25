const prompt = require("prompt-sync")({ sigint: true });

const month = prompt("Enter a month: ");

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
    console.log("28-29 days");
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
