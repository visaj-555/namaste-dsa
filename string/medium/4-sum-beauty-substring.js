// 1781. Sum of Beauty of All Substrings

var beautySum = function (s) {
  let beautySum = 0;
  const base = "a".charCodeAt(0);

  for (let i = 0; i < s.length; i++) {
    let freq = new Array(26).fill(0);

    for (let j = i; j < s.length; j++) {
      let index = s.charCodeAt(j) - base;
      freq[index]++;

      let max = 0;
      let min = Infinity;

      for (let k = 0; k < 26; k++) {
        if (freq[k] > 0) {
          max = Math.max(max, freq[k]);
          min = Math.min(min, freq[k]);
        }
      }

      beautySum += max - min;
    }
  }

  return beautySum;
};
