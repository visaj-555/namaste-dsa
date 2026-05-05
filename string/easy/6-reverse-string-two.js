// Brute Force :

var reverseStr = function (s, k) {
  let result = "";

  for (let i = 0; i < s.length; i += 2 * k) {
    let first = s
      .slice(i, i + k)
      .split("")
      .reverse()
      .join("");
    let second = s.slice(i + k, i + 2 * k);

    result += first + second;
  }

  return result;
};

// Optimal :

var reverseStr = function (s, k) {
  let arr = s.split("");

  for (let i = 0; i < arr.length; i += 2 * k) {
    let left = i;
    let right = Math.min(i + k - 1, arr.length - 1);

    while (left < right) {
      [arr[left], arr[right]] = [arr[right], arr[left]];
      left++;
      right--;
    }
  }

  return arr.join("");
};

console.log(reverseStr("abcdefg", 2));
console.log(reverseStr("abcd", 2));
