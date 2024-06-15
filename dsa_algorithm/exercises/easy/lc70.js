// https://leetcode.com/problems/climbing-stairs/description/
// 70. Climbing Stairs
// Easy
// Topics
// Companies
// Hint
// You are climbing a staircase. It takes n steps to reach the top.

// Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?

 

// Example 1:

// Input: n = 2
// Output: 2
// Explanation: There are two ways to climb to the top.
// 1. 1 step + 1 step
// 2. 2 steps
// Example 2:

// Input: n = 3
// Output: 3
// Explanation: There are three ways to climb to the top.
// 1. 1 step + 1 step + 1 step
// 2. 1 step + 2 steps
// 3. 2 steps + 1 step
 

var climbStairs = function(n) {
    if (n === 0) return 1;
    if (n === 1) return 1;
    
    let dp = new Array(n + 1).fill(0);
    dp[0] = 1;
    dp[1] = 1;
    
    for (let i = 2; i <= n; i++) {
        dp[i] = dp[i - 1] + dp[i - 2];
    }
    
    return dp[n];
};

// Base case
// If there are 0 steps, there is only 1 way to stay at the ground (doing nothing), so ways(0) = 1.
// If there is 1 step, there is only 1 way to climb it (a single step), so ways(1) = 1.

// Recurrence relation
// This is because from step n-1, you can take a single step to reach step n, and from step n-2, you can take two steps to reach step n.


// For n = 3:

// dp[0] = 1
// dp[1] = 1
// dp[2] = dp[1] + dp[0] = 1 + 1 = 2
// dp[3] = dp[2] + dp[1] = 2 + 1 = 3
// Output: 3