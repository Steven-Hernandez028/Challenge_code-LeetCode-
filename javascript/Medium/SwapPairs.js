const swapPairs = (head)=>{


    if (!head || !head.next) {
        // base case: list is empty or has only one node
        return head;
      }
    
      const dummy = new ListNode(0); // create a dummy node to act as a placeholder for the head
      dummy.next = head; // link the dummy node to the head
      let prev = dummy;
    
      while (head && head.next) {
        const first = head;
        const second = head.next;
        const next = second.next;
    
        // swap the first and second nodes
        prev.next = second;
        second.next = first;
        first.next = next;
    
        // update pointers for the next iteration
        prev = first;
        head = next;
      }
    
      return dummy.next; // return the real head node, not the dummy node
}