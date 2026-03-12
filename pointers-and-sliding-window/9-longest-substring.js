// 3. Longest Substring Without Repeating Characters

// Brute Force

var lengthOfLongestSubstring = function (s) {
  let maxLen = 0;

  for (let i = 0; i < s.length; i++) {
    let set = new Set();

    for (let j = i; j < s.length; j++) {
      if (set.has(s[j])) {
        break;
      }

      set.add(s[j]);

      maxLen = Math.max(maxLen, j - i + 1);
    }
  }

  return maxLen;
};

// Optimal :

var lengthOfLongestSubstring = function (s) {
  let set = new Set();
  let left = 0;
  let maxLen = 0;

  for (let right = 0; right < s.length; right++) {
    while (set.has(s[right])) {
      set.delete(s[left]);
      left++;
    }

    set.add(s[right]);

    maxLen = Math.max(maxLen, right - left + 1);
  }

  return maxLen;
};
