// 344. Reverse String

var reverseString = function (s) {
  let mid = Math.floor(s.length / 2);
  let left = 0;
  let right = s.length - 1;
  let temp = 0;

  for (let i = 0; i < mid; i++) {
    temp = s[right];
    s[right] = s[left];
    s[left] = temp;
    left++;
    right--;
  }
};

// More Standard Solution

var reverseString = function (s) {
  let left = 0;
  let right = s.length - 1;

  while (left < right) {
    [s[left], s[right]] = [s[right], s[left]];
    left++;
    right--;
  }
};

console.log(reverseString(["h", "e", "l", "l", "o"]));
console.log(reverseString(["H", "a", "n", "n", "a", "h"]));
