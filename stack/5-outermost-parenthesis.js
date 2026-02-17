//  1021. Remove Outermost Parentheses

// Using Stack

var removeOuterParentheses = function (s) {
  let stack = [];
  let ans = "";

  for (let char of s) {
    if (char === "(") {
      if (stack.length > 0) {
        ans += char; // not outer
      }
      stack.push(char);
    } else {
      stack.pop();
      if (stack.length > 0) {
        ans += char; // not outer
      }
    }
  }

  return ans;
};

// Without Using Stack

function removeOuterParentheses(s) {
  let result = "";
  let balance = 0;

  for (let i = 0; i < s.length; i++) {
    if (s[i] === "(") {
      if (balance > 0) {
        result += "(";
      }
      balance++;
    } else {
      balance--;
      if (balance > 0) {
        result += ")";
      }
    }
  }

  return result;
}

console.log(removeOuterParentheses("(()())(())"));
console.log(removeOuterParentheses("(()())(())(()(()))"));
console.log(removeOuterParentheses("()()"));



// Dry Run :  

// (   → outer → skip
// (   → inner → add
// )   → inner → add
// (   → inner → add
// )   → inner → add
// )   → outer → skip
