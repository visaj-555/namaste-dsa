// 344. Reverse String

var reverseString = function (s) {
  let length = s.length;
  let halfLength = Math.floor(length / 2);
  for (let i = 0; i < halfLength; i++) {
    let temp = s[i];
    s[i] = s[length - 1 - i];
    s[length - 1 - i] = temp;
  }
};

console.log(reverseString(["h", "e", "l", "l", "o"]));
console.log(reverseString(["H", "a", "n", "n", "a", "h"]));
