// https://leetcode.com/problems/longest-consecutive-sequence/description/
// Given an unsorted array of integers nums, return the length of the longest consecutive elements sequence.

// You must write an algorithm that runs in O(n) time.

// Example 1:

// Input: nums = [100,4,200,1,3,2]
// Output: 4
// Explanation: The longest consecutive elements sequence is [1, 2, 3, 4]. Therefore its length is 4.
// Example 2:

// Input: nums = [0,3,7,2,5,8,4,6,0,1]
// Output: 9
 

// Constraints:

// 0 <= nums.length <= 105
// -109 <= nums[i] <= 109

/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function(nums) {
    if (nums.length === 0) return 0;

    const numSet = new Set(nums);
    let longest = 0;

    for (const num of numSet) {
        // Only check for the start of a sequence
        if (!numSet.has(num - 1)) {
            let currentNum = num;
            let currentStreak = 1;

            while (numSet.has(currentNum + 1)) {
                currentNum += 1;
                currentStreak += 1;
            }

            longest = Math.max(longest, currentStreak);
        }
    }

    return longest;
};

// walk through
// ([100, 4, 200, 1, 3, 2]);Processing Each Number
// Number: 100
// numSet.has(100 - 1) or numSet.has(99) is false.
// So, 100 is the start of a sequence.
// Initialize currentNum = 100 and currentStreak = 1.
// Check the next number: numSet.has(100 + 1) or numSet.has(101) is false.
// Sequence length for 100 is 1.
// Update longest to max(longest, currentStreak) which is max(0, 1) = 1.
// Number: 4
// numSet.has(4 - 1) or numSet.has(3) is true.
// So, 4 is not the start of a sequence.
// Skip to the next number.
// Number: 200
// numSet.has(200 - 1) or numSet.has(199) is false.
// So, 200 is the start of a sequence.
// Initialize currentNum = 200 and currentStreak = 1.
// Check the next number: numSet.has(200 + 1) or numSet.has(201) is false.
// Sequence length for 200 is 1.
// Update longest to max(longest, currentStreak) which is max(1, 1) = 1.
// Number: 1
// numSet.has(1 - 1) or numSet.has(0) is false.
// So, 1 is the start of a sequence.
// Initialize currentNum = 1 and currentStreak = 1.
// Check the next number: numSet.has(1 + 1) or numSet.has(2) is true.
// Increment currentNum to 2 and currentStreak to 2.
// Check the next number: numSet.has(2 + 1) or numSet.has(3) is true.
// Increment currentNum to 3 and currentStreak to 3.
// Check the next number: numSet.has(3 + 1) or numSet.has(4) is true.
// Increment currentNum to 4 and currentStreak to 4.
// Check the next number: numSet.has(4 + 1) or numSet.has(5) is false.
// Sequence length for 1 is 4.
// Update longest to max(longest, currentStreak) which is max(1, 4) = 4.
// Number: 3
// numSet.has(3 - 1) or numSet.has(2) is true.
// So, 3 is not the start of a sequence.
// Skip to the next number.
// Number: 2
// numSet.has(2 - 1) or numSet.has(1) is true.
// So, 2 is not the start of a sequence.
// Skip to the next number.
// Final Result
// After iterating through all numbers, the longest consecutive sequence length is 4.