const minMax = (arr) => {
  arr.sort();
  console.log(`min: ${arr[0]}`);
  console.log(`max: ${arr[arr.length - 1]}`);
};

const medianAge = (arr) => {
  if (arr.length % 2 == 0) {
    console.log(
      `Median age: ${(arr[arr.length / 2 - 1] + arr[arr.length / 2]) / 2}`
    );
  } else {
    console.log(`Median age: ${arr[Math.floor(arr.length / 2)] / 2}`);
  }
};

const average = (arr) => {
  let sum = 0;
  for (let n of arr) {
    sum += n;
  }
  console.log(`Average: ${sum / arr.length}`);
};

const range = (arr) => {
  arr.sort();
  console.log(`Range: ${arr[arr.length - 1] - arr[0]}`);
};

const compare = (arr) => {
  arr.sort();
  let sum = 0;
  for (let n of arr) {
    sum += n;
  }
  let avg = sum / arr.length;
  let minAvg = arr[0] - avg;
  let maxAvg = arr[arr.length - 1] - avg;
  console.log(`Comparison: ${Math.abs(minAvg / maxAvg)}`);
};

const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24];
minMax(ages);
medianAge(ages);
average(ages);
range(ages);
compare(ages);

// Output
// min: 19
// max: 26
// Median age: 24
// Average: 22.8
// Range: 7
// Comparison: 1.1875000000000004
