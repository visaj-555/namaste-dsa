// 485. Max Consecutive Ones

var findMaxConsecutiveOnes = function (nums) {
  let largestCount = 0;
  let currentCount = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] == 0) {
      currentCount = 0;
    } else {
      currentCount++;
    }

    if (currentCount > largestCount) largestCount = currentCount;
  }
  return largestCount;
};

// Revision
var findMaxConsecutiveOnes = function (nums) {
  let bestStreak = 0;
  let currentStreak = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] == 1) {
      currentStreak++;
    }
    if (nums[i] != 1) {
      if (bestStreak < currentStreak) {
        bestStreak = currentStreak;
      }
      currentStreak = 0;
    }
  }
  max = Math.max(bestStreak, currentStreak);
  return max;
};

console.log(findMaxConsecutiveOnes([0, 1, 0, 1, 1, 0, 1, 1, 1]));
