// 3541. Find Most Frequent Vowel and Consonant

var maxFreqSum = function (s) {
    let map = {};

    for (let ch of s) {
        map[ch] = (map[ch] || 0) + 1;
    }

    let vowels = new Set(['a', 'e', 'i', 'o', 'u']);
    let maxVowels = 0;
    let maxConsonant = 0;

    for (let ch in map) {
        if (vowels.has(ch)) {
            maxVowels = Math.max(maxVowels, map[ch]);
        } else {
            maxConsonant = Math.max(maxConsonant, map[ch]);
        }
    }

    return maxVowels + maxConsonant;
};
       

console.log(maxFreqSum("aaaaeeeiioouu")); 
console.log(maxFreqSum("leetcode"));