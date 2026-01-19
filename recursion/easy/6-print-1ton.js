// Brute Force

function print1toN(n) {
  for (let i = 1; i <= n; i++) {
    console.log(i);
  }
}

function print1toN(n) {
  if (n === 0) return;

  print1toN(n - 1);
  console.log(n);
}
