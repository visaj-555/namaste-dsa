// 739. Daily Temperatures

// Brute Force

function nextGreater(arr) {
  let n = arr.length;
  let ans = new Array(n).fill(-1);

  for (let i = 0; i < n; i++) {
    for (let j = i + 1; j < n; j++) {
      if (arr[j] > arr[i]) {
        ans[i] = arr[j];
        break;
      }
    }
  }

  return ans;
}

// Easy Optimal

function dailyTemperatures(arr) {
  let n = arr.length;
  let ans = new Array(n).fill(0);
  let stack = []; // store indices

  for (let i = 0; i < n; i++) {

    // current day is warmer
    while (
      stack.length > 0 &&
      arr[i] > arr[stack[stack.length - 1]]
    ) {
      let prev = stack.pop();
      ans[prev] = i - prev;
    }

    stack.push(i);
  }

  return ans;
}



// Optimal

var dailyTemperatures = function (arr) {
  let stack = [];
  let n = arr.length;
  let ans = Array(n).fill(0);

  stack.push(n - 1);
  for (let i = n - 2; i >= 0; i--) {
    while (stack.length) {
      let top = stack[stack.length - 1];
      if (arr[i] >= arr[top]) {
        stack.pop();
      } else {
        ans[i] = top - i;
        break;
      }
    }
    stack.push(i);
  }
  return ans;
};

console.log(dailyTemperatures([73, 74, 75, 71, 69, 72, 76, 73]));
console.log(dailyTemperatures([30, 40, 50, 60]));
console.log(dailyTemperatures([30, 60, 90]));
