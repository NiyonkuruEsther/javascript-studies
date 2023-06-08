function Prime(num) {
  let divisors = [];

  if (num < 2) {
    return false;
  }

  Array(num + 1)
    .fill()
    .map((_, index) => index)
    .forEach(function (number) {
      if (num % number === 0) {
        divisors.push(number);
      }
    });

  return num < 2
    ? false
    : divisors.length > 2
    ? false
    : divisors.includes(num) && divisors.includes(1);
}

console.log(Prime(21));
