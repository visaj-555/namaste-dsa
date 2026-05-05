// 151. Reverse Words in a String

// Brute Force

var reverseWords = function (s) {
  return s
    .trim() // remove leading/trailing spaces
    .split(/\s+/) // split by one or more spaces
    .reverse() // reverse words
    .join(" "); // join with single space
};

// Optimal Solution

var reverseWords = function (s) {
  let result = [];
  let i = s.length - 1;

  while (i >= 0) {
    // skip spaces
    while (i >= 0 && s[i] === " ") i--;

    if (i < 0) break;

    let j = i;

    // find word start
    while (j >= 0 && s[j] !== " ") j--;

    // extract word
    result.push(s.slice(j + 1, i + 1));

    i = j;
  }

  return result.join(" ");
};
