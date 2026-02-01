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


var swapPairs = function(head) {
    if (!head || !head.next) return head;

    let l = head;
    let r = head.next;

    l.next = swapPairs(r.next);
    r.next = l;
    return r;
};