function missingNumber(nums) {
  let n = nums.length;
  nums.sort();

  for (let i = 0; i <= n; i++) {
    if (!nums.includes(i)) {
      return i;
    }
  }
}

// Revision

var missingNumber = function (nums) {
  let missingNumber = 0;
  nums.sort((a, b) => a - b);

  for (let i = 0; i <= nums.length; i++) {
    if (i !== nums[i]) {
      return i;
    }
  }
  return nums.length;
};

console.log(missingNumber([0, 3, 1]));
