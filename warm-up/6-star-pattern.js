function pattern1(n) {
  for (let i = 0; i < n; i++) {
    let row = " ";
    for (let j = 0; j < n; j++) {
      row = row + " * ";
    }

    console.log(row);
  }
}

console.log(pattern1(4));

function pattern2(n) {
  for (let i = 0; i < n; i++) {
    let row = " ";
    for (let j = 0; j < i + 1; j++) {
      row = row + " * ";
    }

    console.log(row);
  }
}

console.log(pattern2(4));

function pattern3(n) {
  for (let i = 1; i <= n; i++) {
    let row = " ";
    for (let j = 1; j <= i; j++) {
      row = row + j;
    }
    console.log(row);
  }
}

console.log(pattern3(5));

function pattern4(n) {
  for (let i = 1; i <= n; i++) {
    let row = " ";
    for (let j = 1; j <= i; j++) {
      row = row + i;
    }
    console.log(row);
  }
}

console.log(pattern4(5));

function pattern5(n) {
  for (let i = 0; i <= n; i++) {
    let row = " ";
    for (let j = 0; j < n - i; j++) {
      row = row + (j + 1);
    }
    console.log(row);
  }
}

console.log(pattern5(5));

function pattern6(n) {
  for (let i = 0; i <= n; i++) {
    let row = " ";
    for (let j = 0; j < n - i; j++) {
      row = row + "*";
    }
    console.log(row);
  }
}

console.log(pattern6(5));

function pattern7(n) {
  for (let i = 0; i < n; i++) {
    let row = " ";
    // for spaces
    for (let j = 0; j < n - (i + 1); j++) {
      row = row + " ";
    }
    // for stars
    for (let k = 0; k < i + 1; k++) {
      row = row + "*";
    }
    console.log(row);
  }
}

console.log(pattern7(5));

function pattern8(n) {
  for (let i = 0; i < n; i++) {
    let row = "";
    for (let j = 0; j < i + 1; j++) {
      if (j % 2 == 0) {
        row = row + "1";
      } else {
        row = row + "0";
      }
    }
    console.log(row);
  }
}

console.log(pattern8(5));

function pattern9(n) {
  let toggle = 1;

  for (let i = 0; i < n; i++) {
    let row = "";

    for (let j = 0; j < i + 1; j++) {
      row = row + toggle;

      // switch the toggle

      if (toggle == 1) {
        toggle = 0;
      } else {
        toggle = 1;
      }
    }

    console.log(row);
  }
}

pattern9(5);

function pattern10(n) {
  let rowStart = 1;

  for (let i = 0; i < n; i++) {
    let row = "";
    let toggle = rowStart;

    for (let j = 0; j <= i; j++) {
      row += toggle;
      toggle = toggle === 1 ? 0 : 1; // toggle inside row
    }

    console.log(row);

    // flip starting value after every 2 rows
    if (i % 2 === 1) {
      rowStart = rowStart === 1 ? 0 : 1;
    }
  }
}

pattern10(5);
