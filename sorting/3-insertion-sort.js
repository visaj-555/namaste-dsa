function insertionSort(arr) {
  let n = arr.length;

  for (let i = 1; i < n; i++) {
    let curr = arr[i];
    let prev = i - 1;

    while (prev >= 0 && arr[prev] > curr) {
      arr[prev + 1] = arr[prev]; // shift
      prev--;
    }

    arr[prev + 1] = curr; // insert
  }

  return arr;
}

console.log(insertionSort([4, 5, 1, 3, 9]));
