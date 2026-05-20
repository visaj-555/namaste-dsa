// 767. Reorganize String

var reorganizeString = function (s) {
  let freq = {};
  let maxFreq = 0;

  // Count frequency
  for (let c of s) {
    freq[c] = (freq[c] || 0) + 1;
    maxFreq = Math.max(maxFreq, freq[c]);
  }

  let n = s.length;

  // Impossible case
  if (maxFreq > Math.ceil(n / 2)) {
    return "";
  }

  // Sort characters by frequency (descending)
  let chars = Object.keys(freq).sort((a, b) => freq[b] - freq[a]);

  let result = new Array(n);
  let i = 0;

  // Fill even indices first, then odd
  for (let ch of chars) {
    let count = freq[ch];

    while (count > 0) {
      if (i >= n) {
        i = 1; // move to odd index
      }

      result[i] = ch;
      i += 2;
      count--;
    }
  }

  return result.join("");
};
