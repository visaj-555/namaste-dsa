function countDigits(n) {
  if (n === 0) return 1;

  return 1 + countDigits(Math.floor(n / 10));
}

console.log(countDigits(1000000000));
