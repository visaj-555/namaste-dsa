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

// More Standard Solution 

var reverseString = function(s) {
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
