// 234. Palindrome Linked List
// Solved
// Easy
// Topics
// Companies
// Given the head of a singly linked list, return true if it is a 
// palindrome
//  or false otherwise.



// Example 1:


// Input: head = [1,2,2,1]
// Output: true
// Example 2:


// Input: head = [1,2]
// Output: false

class ListNode {
    constructor(val, next = null) {
        this.val = val;
        this.next = next;
    }
}

function isPalindrome(head) {
    const values = []; // Store node values in an array

    // Traverse the linked list and store values
    while (head) {
        values.push(head.val);
        head = head.next;
    }

    // Compare values from both ends of the array
    let left = 0;
    let right = values.length - 1;
    while (left < right) {
        if (values[left] !== values[right]) {
            return false;
        }
        left++;
        right--;
    }

    return true;
}