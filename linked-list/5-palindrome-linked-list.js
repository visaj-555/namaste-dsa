 // 234. Palindrome Linked List

var isPalindrome = function(head) {
    let slow = head, fast = head;

    while (fast && fast.next) {
        slow = slow.next;
        fast = fast.next.next;
    }

    // Reverse second half
    let prev = null;
    while (slow) {
        let temp = slow.next;
        slow.next = prev;
        prev = slow;
        slow = temp;
    }

    // Compare two halves
    let first = head, second = prev;
    while (second) {
        if (first.val !== second.val) return false;
        first = first.next;
        second = second.next;
    }

    return true;
};