// 278. First Bad Version

var solution = function (isBadVersion) {
  return function (n) {
    let left = 1;
    let right = n;

    while (left < right) {
      let mid = Math.floor((left + right) / 2);

      if (isBadVersion(mid)) {
        right = mid;
      } else {
        left = mid + 1; // first bad is on the right
      }
    }

    return left; // or right (they are equal)
  };
};

console.log(solution(5));
console.log(solution(1));
