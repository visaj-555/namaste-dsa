// 14. Longest Common Prefix

// Brute Force :

var longestCommonPrefix = function (strs) {
  let prefix = strs[0];

  for (let i = 1; i < strs.length; i++) {
    while (strs[i].indexOf(prefix) !== 0) {
      prefix = prefix.slice(0, prefix.length - 1);
    }
  }

  return prefix;
};

// Optimal  :

var longestCommonPrefix = function (strs) {
  for (let i = 0; i < strs[0].length; i++) {
    let ch = strs[0][i];

    for (let j = 1; j < strs.length; j++) {
      if (i >= strs[j].length || strs[j][i] !== ch) {
        return strs[0].slice(0, i);
      }
    }
  }

  return strs[0];
};

console.log(longestCommonPrefix(["flower", "flow", "flight"]));
console.log(longestCommonPrefix(["dog", "racecar", "car"]));
