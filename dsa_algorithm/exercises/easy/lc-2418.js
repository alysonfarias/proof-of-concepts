// https://leetcode.com/problems/sort-the-people/description/
// 2418. Sort the People
// Solved
// Easy
// Topics
// Companies
// Hint
// You are given an array of strings names, and an array heights that consists of distinct positive integers. Both arrays are of length n.

// For each index i, names[i] and heights[i] denote the name and height of the ith person.

// Return names sorted in descending order by the people's heights.



// Example 1:

// Input: names = ["Mary","John","Emma"], heights = [180,165,170]
// Output: ["Mary","Emma","John"]
// Explanation: Mary is the tallest, followed by Emma and John.
// Example 2:

// Input: names = ["Alice","Bob","Bob"], heights = [155,185,150]
// Output: ["Bob","Alice","Bob"]
// Explanation: The first Bob is the tallest, followed by Alice and the second Bob.

/**
 * @param {string[]} names
 * @param {number[]} heights
 * @return {string[]}
 */
var sortPeople = function (names, heights) {
    const pairs = [];

    for (let i = 0; i < names.length; i++) {
        pairs.push([names[i], heights[i]]);
    }

    pairs.sort((a, b) => b[1] - a[1]); // Sort by second element (height)

    // Extract sorted names back into an array
    const sortedNames = pairs.map(pair => pair[0]);
    return sortedNames;
};