function linearSearch(arr, target) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == target) {
      return i;
    }
  }

  return -1;
}

console.log(linearSearch([0, 1, 2, 4, 8], 4));
console.log(linearSearch([0, 1, 2, 4, 8], 9));
