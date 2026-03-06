//  167. Two Sum II - Input Array Is Sorted



// Brute Force 

var twoSum = function(numbers, target) {

  for (let i = 0; i < numbers.length; i++) {

    for (let j = i + 1; j < numbers.length; j++) {

      if (numbers[i] + numbers[j] === target) {
        return [i + 1, j + 1]; // 1-indexed
      }

    }

  }

};

// Optimal

var twoSum = function (numbers, target) {
  let left = 0;
  let right = numbers.length - 1;

  while (left < right) {
    const sum = numbers[left] + numbers[right];

    if (sum === target) {
      return [left + 1, right + 1]; // 1-indexed
    } else if (sum < target) {
      left++;
    } else {
      right--;
    }
  }
};
