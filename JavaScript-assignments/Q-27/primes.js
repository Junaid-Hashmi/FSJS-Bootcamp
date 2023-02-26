function primes() {
  let isPrime = true;
  for (let i = 1; i <= 100; i++) {
    let count = 0;
    for (let j = 1; j <= i; j++) {
      if (i % j == 0) {
        count += 1;
      }
    }
    if (count == 2) {
      console.log(i);
    }
  }
}
primes();

// output
// 2
// 3
// 5
// 7
// 11
// 13
// 17
// 19
// 23
// 29
// 31
// 37
// 41
// 43
// 47
// 53
// 59
// 61
// 67
// 71
// 73
// 79
// 83
// 89
// 97
