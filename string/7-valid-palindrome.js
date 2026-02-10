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

 var isPalindrome = function(s) {
    s = s.toLowerCase();
    let i = 0;
    let j = s.length - 1;
    while (i < j) {
        if (!s[i].match(/[a-z0-9]/i)) {
            ++i;
        }
        else if (!s[j].match(/[a-z0-9]/i)) {
            --j;
        }
        else if (s[i] === s[j]) {
            ++i;
            --j;
        }
        else {
            return false;
        }
    }
    return true;
  };