// https://leetcode.com/problems/single-number/description/
// Given a non-empty array of integers nums, every element appears twice except for one. Find that single one.

// You must implement a solution with a linear runtime complexity and use only constant extra space.

 

// Example 1:

// Input: nums = [2,2,1]
// Output: 1
// Example 2:

// Input: nums = [4,1,2,1,2]
// Output: 4
// Example 3:

// Input: nums = [1]
// Output: 1
 

// Constraints:

// 1 <= nums.length <= 3 * 104
// -3 * 104 <= nums[i] <= 3 * 104
// Each element in the array appears twice except for one element which appears only once.

// MY INITIAL SOLUTION:
function singleNumber(nums) {
    nums.sort(); 
    for (let i = 0; i < nums.length - 1; i += 2) {
        if (nums[i] !== nums[i + 1]) {
        return nums[i];
        }
    }
    return nums[nums.length - 1];
}


// Best solution using XOR:
function singleNumber(nums) {
    let result = 0;
    for (const num of nums) {
        result ^= num;
    }
    return result;
}


// Why XOR is the Solution

// Duplicates Cancel Out: Since each number appears twice, their XOR operations cancel each other out (2 ^ 2 = 0, 1 ^ 1 = 0).
// Single Number Remains: The single number that appears only once remains after all cancellations, as it doesn't have a duplicate to cancel it out.

// nums = [4, 1, 2, 1, 2]:
// result = 0

// result = 0 ^ 4 = 4
// result = 4 ^ 1 = 5
// result = 5 ^ 2 = 7
// result = 7 ^ 1 = 6
// result = 6 ^ 2 = 4 