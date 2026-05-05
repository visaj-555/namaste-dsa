// 921. Minimum Add to Make Parentheses Valid

// Brute Force

var minAddToMakeValid = function (s) {
  let stack = [];
  let additions = 0;

  for (let char of s) {
    if (char === "(") {
      stack.push(char);
    } else {
      if (stack.length > 0) {
        stack.pop();
      } else {
        additions++; // need one '('
      }
    }
  }

  // remaining '(' need ')'
  return additions + stack.length;
};

// Optimal Solution

var minAddToMakeValid = function (s) {
  let open = 0; // unmatched '('
  let add = 0; // insertions needed

  for (let char of s) {
    if (char === "(") {
      open++;
    } else {
      if (open > 0) {
        open--; // match with a previous '('
      } else {
        add++; // need to add '('
      }
    }
  }

  return add + open; // remaining '(' need ')'
};
