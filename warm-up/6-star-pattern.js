function pattern1(n) {
  for (let i = 0; i < n; i++) {
    row = " ";
    for (let j = 0; j < n; j++) {
      row = row + " * ";
    }

    console.log(row);
  }
}

console.log(pattern1(4));

function pattern2(n) {
  for (let i = 0; i < n; i++) {
    row = " ";
    for (let j = 0; j < i + 1; j++) {
      row = row + " * ";
    }

    console.log(row);
  }
}

console.log(pattern2(4));
