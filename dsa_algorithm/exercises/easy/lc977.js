// https://leetcode.com/problems/squares-of-a-sorted-array/description/
// 977. Squares of a Sorted Array
// Solved
// Easy
// Topics
// Companies
// Given an integer array nums sorted in non-decreasing order, return an array of the squares of each number sorted in non-decreasing order.

// Example 1:

// Input: nums = [-4,-1,0,3,10]
// Output: [0,1,9,16,100]
// Explanation: After squaring, the array becomes [16,1,0,9,100].
// After sorting, it becomes [0,1,9,16,100].
// Example 2:

// Input: nums = [-7,-3,2,3,11]
// Output: [4,9,9,49,121]

// Constraints:

// 1 <= nums.length <= 104
// -104 <= nums[i] <= 104
// nums is sorted in non-decreasing order.

var sortedSquares = function (numbers) {
    const length = numbers.length;
    const squaredNumbers = new Array(length).fill(0); // Array to store squared values
    let leftPointer = 0, rightPointer = length - 1;

    for (let index = length - 1; index >= 0; index--) { // Iterate backwards
        if (Math.abs(numbers[leftPointer]) < Math.abs(numbers[rightPointer])) {
            squaredNumbers[index] = numbers[rightPointer] * numbers[rightPointer];
            rightPointer--; // Move right pointer towards the center
        } else {
            squaredNumbers[index] = numbers[leftPointer] * numbers[leftPointer];
            leftPointer++; // Move left pointer towards the center
        }
    }
    return squaredNumbers;
};