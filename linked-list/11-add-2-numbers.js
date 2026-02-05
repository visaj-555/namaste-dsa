// 2. Add Two Numbers

var addTwoNumbers = function(l1, l2) {
    let dummy = new ListNode(0);
    let curr = dummy;
    let carry = 0;

    while (l1 || l2 || carry) {
        let sum = (l1?.val || 0) + (l2?.val || 0) + carry;
        carry = Math.floor(sum / 10);
        curr.next = new ListNode(sum % 10);
        curr = curr.next;
        l1 = l1?.next;
        l2 = l2?.next;
    }

    return dummy.next;
};

 //// Easy Solution : 

var addTwoNumbers = function(l1, l2) {
    let dummy = new ListNode(0);
    let current = dummy;
    let carry = 0;

    while (l1 || l2 || carry) {
        let sum = carry;

        if (l1) {
            sum += l1.val;
            l1 = l1.next;
        }

        if (l2) {
            sum += l2.val;
            l2 = l2.next;
        }

        let digit = sum % 10;     // last digit to display         
        carry = Math.floor(sum / 10);      // carry for next sum

        current.next = new ListNode(digit);
        current = current.next;
    }

    return dummy.next;
};
