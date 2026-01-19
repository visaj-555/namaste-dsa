// Brute Force

function singleNumber(nums) {
  let n = nums.length;

  for (let i = 0; i < n; i++) {
    let count = 0;

    for (let j = 0; j < n; j++) {
      if (nums[i] === nums[j]) {
        count++;
      }
    }

    if (count === 1) {
      return nums[i];
    }
  }
}

// Hash Map

function singleNumber(nums) {
  let map = {};

  for (let i = 0; i < nums.length; i++) {
    if (map[nums[i]] === undefined) {
      map[nums[i]] = 1;
    } else {
      map[nums[i]]++;
    }
  }

  for (let key in map) {
    if (map[key] === 1) {
      return Number(key);
    }
  }
}

// Optimal

function singleNumber(nums) {
  let result = 0;

  for (let i = 0; i < nums.length; i++) {
    result = result ^ nums[i];
  }

  return result;
}
