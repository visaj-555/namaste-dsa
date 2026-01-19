// Brute

function isPowerOfTwo(n) {
  if (n <= 0) return false;

  while (n > 1) {
    if (n % 2 !== 0) return false;
    n = n / 2;
  }

  return true;
}

// Better

function isPowerOfTwo(n) {
  if (n <= 0) return false;
  return (n & (n - 1)) === 0;
}

// Optimal

function isPowerOfTwo(n) {
  if (n === 1) return true;
  else if (n < 1 || n % 2 !== 0) return false;
  return isPowerOfTwo(n / 2);
}

console.log(isPowerOfTwo(8));
console.log(isPowerOfTwo(18));
console.log(isPowerOfTwo(1));
console.log(isPowerOfTwo(16));
console.log(isPowerOfTwo(3));
console.log(isPowerOfTwo(0));
