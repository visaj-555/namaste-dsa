// 160. Intersection of Two Linked Lists

var getIntersectionNode = function (headA, headB) {
  let set = new Set();
  while (headB) {
    set.add(headB);
    headB = headB.next;
  }
  while (headA) {
    if (set.has(headA)) return headA;
    headA = headA.next;
  }
  return null;
};

// Optimal

var getIntersectionNode = function (headA, headB) {
  let a = headA;
  let b = headB;

  while (a !== b) {
    a = a === null ? headB : a.next;
    b = b === null ? headA : b.next;
  }

  return a;
};
