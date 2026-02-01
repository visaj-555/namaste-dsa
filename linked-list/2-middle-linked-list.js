// 876. Middle Linked List

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
