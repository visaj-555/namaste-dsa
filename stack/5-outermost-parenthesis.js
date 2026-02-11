//  1021. Remove Outermost Parentheses

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

console.log(removeOuterParentheses("(()())(())"))
console.log(removeOuterParentheses("(()())(())(()(()))"))
console.log(removeOuterParentheses("()()"))