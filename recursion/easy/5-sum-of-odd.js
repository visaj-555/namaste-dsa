function sumOdd(n) {
  if (n === 0) return 0;

  let isOdd = n % 2 !== 0;

  if (isOdd) return n + sumOdd(n - 1);
  else return sumOdd(n - 1);
}
