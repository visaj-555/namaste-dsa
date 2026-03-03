// 540. Single Element in a Sorted Array

var singleNonDuplicate = function (nums) {
  let left = 0;
  let right = nums.length - 1;

  while (left < right) {
    let mid = Math.floor((left + right) / 2);

    // Ensure mid is even
    if (mid % 2 === 1) {
      mid--;
    }

    // If pair is correct, single is on right
    if (nums[mid] === nums[mid + 1]) {
      left = mid + 2;
    }
    // Pair broken, single is on left (including mid)
    else {
      right = mid;
    }
  }

  return nums[left];
};
