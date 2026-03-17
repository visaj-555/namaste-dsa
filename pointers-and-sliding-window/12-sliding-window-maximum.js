// 239. Sliding Window Maximum

// Brute Force :

var maxSlidingWindow = function (nums, k) {
  let result = [];

  for (let i = 0; i <= nums.length - k; i++) {
    let max = nums[i];

    for (let j = i; j < i + k; j++) {
      max = Math.max(max, nums[j]);
    }

    result.push(max);
  }

  return result;
};

// Optimal :

var maxSlidingWindow = function (nums, k) {
  let deque = [];
  let result = [];

  for (let i = 0; i < nums.length; i++) {
    // 1. Remove indexes outside window
    if (deque.length && deque[0] <= i - k) {
      deque.shift();
    }

    // 2. Remove smaller elements from back
    while (deque.length && nums[deque[deque.length - 1]] < nums[i]) {
      deque.pop();
    }

    // 3. Add current index
    deque.push(i);

    // 4. Window ready → record max
    if (i >= k - 1) {
      result.push(nums[deque[0]]);
    }
  }

  return result;
};

console.log(maxSlidingWindow([1, 3, -1, -3, 5, 3, 6, 7]), 3);
console.log(maxSlidingWindow([1]), 1);
