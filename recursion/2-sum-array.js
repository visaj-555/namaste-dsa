// Solution 1 :

function sumArray(arr) {
  if (arr.length === 0) return 0;
  return arr[0] + sumArray(arr.slice(1));
}

console.log(sumArray([5, 3, 2, 0, 1]));

// Solution 2 :

let arr = [5, 3, 2, 0, 1];
function sumOfArray(n) {
  if (n == 0) {
    return arr[n];
  }

  return arr[n] + sumOfArray(n - 1);
}

console.log(sumOfArray(arr.length - 1));
