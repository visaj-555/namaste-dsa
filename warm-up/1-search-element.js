function searchElement(arr, x) {
  let index = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == x) {
      index = i;
    }
  }
  return index;
}

console.log(searchElement([20, 10, 30, 50, 21], 10));
