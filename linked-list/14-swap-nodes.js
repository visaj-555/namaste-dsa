// 24. Swap Nodes in Pairs

var swapPairs = function(head) {
    if (!head || !head.next) return head;

    let dummy = new ListNode(0);
    dummy.next = head;
    let prev = dummy;

    while (prev.next && prev.next.next) {
        let first = prev.next;
        let second = first.next;

        first.next = second.next;
        second.next = first;
        prev.next = second;

        prev = first;
    }
    return dummy.next;
};

// Revision : Recursion 


var swapPairs = function(head) {
    if (!head || !head.next) return head;

    let first = head;
    let second = head.next;

    first.next = swapPairs(second.next);
    second.next = first;

    return second;
};
