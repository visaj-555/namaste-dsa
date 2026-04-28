// 1903. Largest Odd Number in String

// Using while loop and substring

var largestOddNumber = function (s) {
  let n = s.length - 1;
  while (n >= 0) {
    if (Number(s[n]) % 2 == 1) {
      return s.substring(0, n + 1);
    }
    --n;
  }
  return "";
};

// Using for loop and slice

var largestOddNumber = function (num) {
  for (let i = num.length - 1; i >= 0; i--) {
    if (Number(num[i]) % 2 !== 0) {
      return num.slice(0, i + 1);
    }
  }

  return "";
};

console.log(largestOddNumber("52"));
console.log(largestOddNumber("4602"));
console.log(largestOddNumber("35427"));
