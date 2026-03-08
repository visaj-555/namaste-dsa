// 28. Find the Index of the First Occurrence in a String

var strStr = function (haystack, needle) {
  for (let i = 0; i <= haystack.length - needle.length; i++) {
    let match = true;
    for (let j = 0; j < needle.length; j++) {
      if (haystack[i + j] !== needle[j]) {
        match = false;
        break;
      }
    }
    if (match) {
      return i;
    }
  }

  return -1;
};

// Without match
for (let i = 0; i <= haystack.length - needle.length; i++) {
  for (let j = 0; j < needle.length; j++) {
    if (haystack[i + j] !== needle[j]) break;
  }

  if (j === needle.length) return i;
}

return -1;

// Optimal using Kmp Algorithm

function strStr(haystack, needle) {

    let m = needle.length;
    let n = haystack.length;

    let lps = new Array(m).fill(0);

    // BUILD LPS
    for (let i = 1, len = 0; i < m;) {

        if (needle[i] === needle[len]) {
            lps[i++] = ++len;
        }
        else if (len !== 0) {
            len = lps[len - 1];
        }
        else {
            lps[i++] = 0;
        }

    }

    // SEARCH
    for (let i = 0, j = 0; i < n;) {

        if (haystack[i] === needle[j]) {
            i++;
            j++;
        }

        if (j === m) {
            return i - j;
        }

        else if (i < n && haystack[i] !== needle[j]) {

            if (j !== 0)
                j = lps[j - 1];
            else
                i++;
        }

    }

    return -1;
}
