// https://leetcode.com/problems/is-subsequence/description/
// 392. Is Subsequence
// Solved
// Easy
// Topics
// Companies
// Given two strings s and t, return true if s is a subsequence of t, or false otherwise.

// A subsequence of a string is a new string that is formed from the original string by deleting some (can be none) of the characters without disturbing the relative positions of the remaining characters. (i.e., "ace" is a subsequence of "abcde" while "aec" is not).

 

// Example 1:

// Input: s = "abc", t = "ahbgdc"
// Output: true
// Example 2:

// Input: s = "axc", t = "ahbgdc"
// Output: false
/**
 * @param {string} subsequence
 * @param {string} mainString
 * @return {boolean}
 */
var isSubsequence = function(subsequence, mainString) {
    let subsequenceIndex = 0; // Index to track the current position in the subsequence
    let mainStringIndex = 0; // Index to track the current position in the main string

    while (subsequenceIndex < subsequence.length && mainStringIndex < mainString.length) {
        if (subsequence[subsequenceIndex] === mainString[mainStringIndex]) {
            subsequenceIndex++; // Move to the next character in the subsequence if we have a match
        }
        mainStringIndex++; // Always move to the next character in the main string
    }

    return subsequenceIndex === subsequence.length; // All characters in the subsequence were found
};