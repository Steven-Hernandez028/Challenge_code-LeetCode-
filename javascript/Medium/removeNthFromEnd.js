class ListNode {
    constructor(val = 0, next = null) {
      this.val = val;
      this.next = next;
    }
  }

  const removeNthFromEnd = (head,n)=>{
         // Create a dummy node to serve as the head of the list.
  const dummy = new ListNode(0);
  dummy.next = head;

  // Initialize two pointers: fast and slow.
  let fast = dummy;
  let slow = dummy;

  // Move the fast pointer n steps ahead of the slow pointer.
  for (let i = 0; i <= n; i++) {
    fast = fast.next;
  }

  // Move both pointers until the fast pointer reaches the end of the list.
  while (fast !== null) {
    fast = fast.next;
    slow = slow.next;
  }

  // Remove the nth node from the end of the list.
  slow.next = slow.next.next;

  // Return the head of the list.
  return dummy.next;
  }