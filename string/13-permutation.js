// 567. Permutation in String

var checkInclusion = function (s1, s2) {
  if (s1.length > s2.length) return false;

  let count1 = new Array(26).fill(0);
  let count2 = new Array(26).fill(0);

  // frequency of s1
  for (let i = 0; i < s1.length; i++) {
    count1[s1.charCodeAt(i) - 97]++;
    count2[s2.charCodeAt(i) - 97]++;
  }

  // check first window
  if (count1.join() === count2.join()) return true;

  // sliding window
  for (let i = s1.length; i < s2.length; i++) {
    count2[s2.charCodeAt(i) - 97]++; // add new char
    count2[s2.charCodeAt(i - s1.length) - 97]--; // remove left char

    if (count1.join() === count2.join()) return true;
  }

  return false;
};

console.log(checkInclusion("ab", "eidbaooo"));
console.log(checkInclusion("ab", "eidboaoo"));
