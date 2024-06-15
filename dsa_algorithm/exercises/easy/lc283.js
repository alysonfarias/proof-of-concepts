// https://leetcode.com/problems/move-zeroes/description/
// 283. Move Zeroes
// Solved
// Easy
// Topics
// Companies
// Hint
// Given an integer array nums, move all 0's to the end of it while maintaining the relative order of the non-zero elements.

// Note that you must do this in-place without making a copy of the array.

 

// Example 1:

// Input: nums = [0,1,0,3,12]
// Output: [1,3,12,0,0]
// Example 2:

// Input: nums = [0]
// Output: [0]
 

// Constraints:

// 1 <= nums.length <= 104
// -231 <= nums[i] <= 231 - 1

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
    let nonZeroIndex = 0;

    // First pass: move non-zero elements to the beginning
    for (let current = 0; current < nums.length; current++) {
        if (nums[current] !== 0) {
            nums[nonZeroIndex] = nums[current];
            nonZeroIndex++;
        }
    }

    // Second pass: fill the rest with zeros
    for (let i = nonZeroIndex; i < nums.length; i++) {
        nums[i] = 0;
    }
};


// Initial Array: [0, 1, 0, 3, 12]

// First Pass:

// current = 0, nums[0] = 0, no change, nonZeroIndex = 0
// current = 1, nums[1] = 1, move 1 to nums[0], nonZeroIndex = 1
// current = 2, nums[2] = 0, no change, nonZeroIndex = 1
// current = 3, nums[3] = 3, move 3 to nums[1], nonZeroIndex = 2
// current = 4, nums[4] = 12, move 12 to nums[2], nonZeroIndex = 3
// Array now: [1, 3, 12, 3, 12]
// Second Pass:

// Fill the rest with zeros from nonZeroIndex = 3
// Array after filling zeros: [1, 3, 12, 0, 0]

// O(n) time complexity, O(1) additional space