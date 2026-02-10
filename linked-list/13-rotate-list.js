// 61. Rotate List

// Easy Variable names 

var rotateRight = function(head, k) {
    if (!head || !head.next || k === 0) return head;

    // Step 1: find length
    let length = 1;
    let tail = head;
    while (tail.next) {
        tail = tail.next;
        length++;
    }

    // Step 2: make it circular
    tail.next = head;

    // Step 3: find new tail
    k = k % length;
    let steps = length - k;

    let newTail = head;
    for (let i = 1; i < steps; i++) {
        newTail = newTail.next;
    }

    // Step 4: break the circle
    let newHead = newTail.next;
    newTail.next = null;

    return newHead;
};
