function missingNumber(nums) {
  let n = nums.length;
  nums.sort();

  for (let i = 0; i <= n; i++) {
    if (!nums.includes(i)) {
      return i;
    }
  }
}

console.log(missingNumber([0, 3, 1]));
