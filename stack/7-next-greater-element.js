// 496. Next Greater Element I

var nextGreaterElement = function(nums1, nums2) {
    let stack = [];
    let map = {};

    // Build next greater map
    for (let i = nums2.length - 1; i >= 0; i--) {

        // Remove all smaller or equal elements
        while (stack.length > 0 && stack[stack.length - 1] <= nums2[i]) {
            stack.pop();
        }

        // If stack is empty, no greater element
        if (stack.length === 0) {
            map[nums2[i]] = -1;
        } else {
            map[nums2[i]] = stack[stack.length - 1];
        }

        stack.push(nums2[i]);
    }

    // Build result array
    let result = [];
    for (let i = 0; i < nums1.length; i++) {
        result.push(map[nums1[i]]);
    }

    return result;
};



console.log(nextGreaterElement([4,1,2], [1,3,4,2]));
console.log(nextGreaterElement([2,4], [1,2,3,4]));
