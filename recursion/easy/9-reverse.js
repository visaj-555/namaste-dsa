function reverseNumber(n) {
  let rev = 0;

  while (n > 0) {
    let digit = n % 10;
    rev = rev * 10 + digit;
    n = Math.floor(n / 10);
  }

  return rev;
}

function reverseNumber(n, rev = 0) {
  if (n === 0) return rev;

  let digit = n % 10;
  return reverseNumber(Math.floor(n / 10), rev * 10 + digit);
}

console.log(reverseNumber(1008));
