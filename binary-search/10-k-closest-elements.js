//  658. Find K Closest Elements

var findClosestElements = function (arr, k, target) {
  let left = 0;
  let right = arr.length - k;
  while (left < right) {
    let mid = left + Math.floor((right - left) / 2);
    if (arr[mid + k] - target < target - arr[mid]) {
      left = mid + 1;
    } else {
      right = mid;
    }
  }
  let result = [];
  for (let i = left; i < left + k; i++) {
    result.push(arr[i]);
  }
  return result;
};
