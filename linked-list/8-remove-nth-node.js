//  19. Remove Nth Node From End of List


// Approach 1 : Two Pass 
var removeNthFromEnd = function(head, n) {
    let sentinel = new ListNode(0, head);
    let length = 0;
    let first = head;
    while (first) {
        length++;
        first = first.next;
    }
    let prev = sentinel;
    for (let i = 0; i < length - n; i++) {
        prev = prev.next;
    }
    prev.next = prev.next.next;
    return sentinel.next;
};


// One Pass : 

var removeNthFromEnd = function(head, n) {
    let sentinel = new ListNode(0);
    sentinel.next = head;

    let first = sentinel;
    let second = sentinel;

    // move first ahead by n + 1 steps
    for (let i = 0; i <= n; i++) {
        first = first.next;
    }

    // move both pointers until first hits null
    while (first !== null) {
        first = first.next;
        second = second.next;
    }

    // remove the nth node from the end
    second.next = second.next.next;

    return sentinel.next;
};
