// 34. Find First and Last Position of Element in Sorted Array

function searchRange(nums, target) {
  let first = findFirst(nums, target);
  let last = findLast(nums, target);

  return [first, last];
}

function findFirst(nums, target) {
  let left = 0;
  let right = nums.length - 1;
  let ans = -1;

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);

    if (nums[mid] === target) {
      ans = mid;
      right = mid - 1;
    } else if (nums[mid] < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  return ans;
}

function findLast(nums, target) {
  let left = 0;
  let right = nums.length - 1;
  let ans = -1;

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);

    if (nums[mid] === target) {
      ans = mid;
      left = mid + 1;
    } else if (nums[mid] < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  return ans;
}
