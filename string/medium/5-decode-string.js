// 394. Decode String

// Easy Approach

var decodeString = function (s) {
  const stack = [];
  let currentString = "";
  let currentNumber = 0;

  for (let i = 0; i < s.length; i++) {
    const char = s[i];

    if (!isNaN(char)) {
      currentNumber = currentNumber * 10 + Number(char);
    } else if (char === "[") {
      stack.push([currentNumber, currentString]);
      currentNumber = 0;
      currentString = "";
    } else if (char === "]") {
      const [num, prevString] = stack.pop();
      currentString = prevString + currentString.repeat(num);
    } else {
      currentString += char;
    }
  }

  return currentString;
};

// Recursive Approach
var decodeString = function (s) {
  let i = 0;

  let decode = () => {
    let res = "";
    let num = 0;

    while (i < s.length) {
      let char = s[i];

      if (char >= "0" && char <= "9") {
        num = num * 10 + parseInt(char);
        i++;
      } else if (char === "[") {
        i++;
        let str = decode();
        res += str.repeat(num);
        num = 0;
      } else if (char === "]") {
        i++;
        return res;
      } else {
        res += char;
        i++;
      }
    }

    return res;
  };

  return decode();
};
