// 406. Reverse Linked List

// Brute Force :

var reverseList = function (head) {
  let arr = [];
  let curr = head;

  while (curr) {
    arr.push(curr.val);
    curr = curr.next;
  }

  curr = head;
  while (curr) {
    curr.val = arr.pop();
    curr = curr.next;
  }

  return head;
};

// Optimal :

var reverseList = function (head) {
  let prev = null;
  let curr = head;

  while (curr) {
    let nextNode = curr.next;
    curr.next = prev;
    prev = curr;
    curr = nextNode;
  }

  return prev;
};

// Recursive Solution :

var reverseList = function (head) {
  if (!head || !head.next) return head;

  let newHead = reverseList(head.next);

  head.next.next = head;
  head.next = null;

  return newHead;
};
