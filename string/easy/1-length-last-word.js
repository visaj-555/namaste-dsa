// 58. Length of Last Word


// Easy Approach for 2 loops :

var lengthOfLastWord = function (s) {
    let n = s.length - 1;
    let count = 0;

    // skip trailing spaces
    while (n >= 0 && s[n] === " ") {
        n--;
    }

    // count last word characters
    while (n >= 0 && s[n] !== " ") {
        count++;
        n--;
    }

    return count;
};

// Single While Loop : 

var lengthOfLastWord = function(s) {
    let n = s.length - 1;
    let count = 0;

    while (n >= 0) {
        if (s[n] !== " ") {
            count++;
        } else if (count > 0) {
            break;
        }
        n--;
    }

    return count;
};

// Single For Loop : 

var lengthOfLastWord = function(s) {
    let count = 0;

    for (let i = s.length - 1; i >= 0; i--) {
        if (s[i] !== ' ') {
            count++;
        } else if (count > 0) {
            break;
        }
    }
    return count;
};
