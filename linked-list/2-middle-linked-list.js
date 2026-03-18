// 876. Middle Linked List

// Brute Force

var middleNode = function (head) {
  let count = 0;
  let curr = head;

  // count nodes
  while (curr) {
    count++;
    curr = curr.next;
  }

  // go to middle
  let mid = Math.floor(count / 2);
  curr = head;

  for (let i = 0; i < mid; i++) {
    curr = curr.next;
  }

  return curr;
};

var middleNode = function (head) {
  let slow = head;
  let fast = head;

  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;
  }

  return slow;
};

// Time Complexity: O(n)
// Space Complexity: O(1)
