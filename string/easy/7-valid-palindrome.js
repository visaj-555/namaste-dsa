// 125. Valid Palindrome

// Extra Space

function isPalindrome(str) {
  str = str.toLowerCase();
  let filteredString = "";
  let rev = "";

  for (let i = 0; i < str.length; i++) {
    if (str[i].match(/[a-z0-9]/i)) {
      filteredString += str[i];
      rev = str[i] + rev;
    }
  }

  return filteredString === rev;
}

// Two Pointers

var isPalindrome = function (s) {
  let l = 0;
  let r = s.length - 1;

  while (l < r) {
    // skip non-alphanumeric from left
    while (l < r && !/[a-z0-9]/i.test(s[l])) {
      l++;
    }

    // skip non-alphanumeric from right
    while (l < r && !/[a-z0-9]/i.test(s[r])) {
      r--;
    }

    // compare (case-insensitive)
    if (s[l].toLowerCase() !== s[r].toLowerCase()) {
      return false;
    }

    l++;
    r--;
  }

  return true;
};
