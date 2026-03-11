// 42. Trapping Rain Water

// Brute Force  :

var trap = function (height) {
  let n = height.length;
  let water = 0;

  for (let i = 0; i < n; i++) {
    let leftMax = 0;
    let rightMax = 0;

    // find max on left
    for (let j = 0; j <= i; j++) {
      leftMax = Math.max(leftMax, height[j]);
    }

    // find max on right
    for (let j = i; j < n; j++) {
      rightMax = Math.max(rightMax, height[j]);
    }

    water += Math.min(leftMax, rightMax) - height[i];
  }

  return water;
};

// Optimal

var trap = function (height) {
  let n = height.length;

  let leftMax = new Array(n);
  let rightMax = new Array(n);

  leftMax[0] = height[0];

  for (let i = 1; i < n; i++) {
    leftMax[i] = Math.max(leftMax[i - 1], height[i]);
  }

  rightMax[n - 1] = height[n - 1];

  for (let i = n - 2; i >= 0; i--) {
    rightMax[i] = Math.max(rightMax[i + 1], height[i]);
  }

  let water = 0;

  for (let i = 0; i < n; i++) {
    water += Math.min(leftMax[i], rightMax[i]) - height[i];
  }

  return water;
};
