//  392. Is Subsequence

// Brute Force

var isSubsequence = function (s, t) {
  let j = 0;
  for (let i = 0; i < s.length; i++) {
    while (j < t.length && t[j] !== s[i]) {
      j++;
    }
    if (j === t.length) {
      return false;
    }
    j++;
  }
  return true;
};

// Optimal

var isSubsequence = function (s, t) {
  let i = 0;
  let j = 0;

  while (i < s.length && j < t.length) {
    if (s[i] === t[j]) {
      i++;
    }

    j++;
  }

  return i === s.length;
};

console.log(isSubsequence("abc", "ahbgdc"));
console.log(isSubsequence("axc", "ahbgdc"));
