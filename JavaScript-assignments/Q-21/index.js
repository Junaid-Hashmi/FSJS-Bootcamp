let countries = ["India", "USA", "China", "North Korea", "Russia", "Egypt"];

function findEthiopia(arr) {
  if (arr.includes("Ethiopia")) {
    console.log(arr[arr.indexOf("Ethiopia")].toUpperCase());
  } else {
    arr.push("Ethiopia");
    console.log(countries);
  }
}
findEthiopia(countries);

// output
// [
//   'India',
//   'USA',
//   'China',
//   'North Korea',
//   'Russia',
//   'Egypt',
//   'Ethiopia'
// ]
