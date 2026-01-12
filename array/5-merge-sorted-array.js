// 88. Merge Sorted Arrays

// Approach 1 (Brute) :

var merge = function (nums1, m, nums2, n) {
  for (let i = m; i < nums1.length; i++) {
    nums1[i] = nums2[i - m];
  }
  nums1.sort((a, b) => a - b);
};

// Approach 2 (Better) :
var merge = function (nums1, m, nums2, n) {
  let numsCopy = nums1.slice(0, m);
  let p1 = 0;
  let p2 = 0;

  for (let i = 0; i < m + n; i++) {
    if (p1 < m && (p2 >= n || numsCopy[p1] <= nums2[p2])) {
      nums1[i] = numsCopy[p1];
      p1++;
    } else {
      nums1[i] = nums2[p2];
      p2++;
    }
  }
};

// Approach 3 (Optimal) :

var merge = function (nums1, m, nums2, n) {
  let p1 = m - 1;
  let p2 = n - 1;

  for (let i = m + n - 1; i >= 0; i--) {
    if (p2 < 0) break;

    if (p1 >= 0 && nums1[p1] > nums2[p2]) {
      nums1[i] = nums1[p1--];
    } else {
      nums1[i] = nums2[p2--];
    }
  }
};

console.log(((a) => (merge(a, 3, [2, 5, 6], 3), a))([1, 2, 3, 0, 0, 0]));
console.log(((a) => (merge(a, 1, [], 0), a))([1]));
console.log(((a) => (merge(a, 0, [1], 1), a))([0]));
