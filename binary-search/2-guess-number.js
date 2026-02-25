// 374. Guess Number Higher or Lower

var guessNumber = function (n) {
  let left = 1;
  let right = n;

  while (left <= right) {
    let mid = left + Math.floor((right - left) / 2);
    let res = guess(mid);

    if (res === 0) {
      return mid;
    } else if (res === -1) {
      // mid is too high
      right = mid - 1;
    } else {
      // mid is too low
      left = mid + 1;
    }
  }

  return -1; // theoretically never reached
};
