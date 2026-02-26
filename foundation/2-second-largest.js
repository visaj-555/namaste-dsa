// 1796. Second Largest Digit in a String

var secondHighest = function (s) {
  let first = -1;
  let second = -1;

  for (let ch of s) {
    if (ch >= "0" && ch <= "9") {
      let num = Number(ch);

      if (num > first) {
        second = first;
        first = num;
      } else if (num < first && num > second) {
        second = num;
      }
    }
  }

  return second;
};

console.log(secondHighest("dfa12321afd")); 
console.log(secondHighest("abc1111"));