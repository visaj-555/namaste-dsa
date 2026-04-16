// 160. Intersection of Two Linked Lists

var getIntersectionNode = function (headA, headB) {
  // Brute Force :

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

// Optimal :

var getIntersectionNode = function (headA, headB) {
  let a = headA;
  let b = headB;

  while (a !== b) {
    a = a ? a.next : headB;
    b = b ? b.next : headA;
  }

  return a;
};
