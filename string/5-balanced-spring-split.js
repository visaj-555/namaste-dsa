//  1221. Split a String in Balanced Strings

// Brute Force Solution

var balancedStringSplit = function (s) {
  let R = 0;
  let L = 0;
  let count = 0;

  for (let i = 0; i < s.length; i++) {
    if (s[i] === "R") {
      ++R;
    } else {
      ++L;
    }

    if (L == R) {
      count++;
      R = 0;
      L = 0;
    }
  }
  return count;
};

// Optimal Solution

var balancedStringSplit = function (s) {
  let count = 0;
  let balance = 0;

  for (let char of s) {
    if (char === "L") balance++;
    else balance--;

    if (balance === 0) count++;
  }

  return count;
};
