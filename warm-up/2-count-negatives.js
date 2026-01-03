function countNegatives(arr) {
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < 0) {
      count++;
    }
  }
  return count;
}

let ans = countNegatives([10, 20, 30, -1, 5, 0, -2, -6, -8]);
console.log(ans);
