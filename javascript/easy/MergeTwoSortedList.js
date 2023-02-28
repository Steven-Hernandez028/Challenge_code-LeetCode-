function ListNode(val, next) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }

const mergeTwoList =(list1, list2)=>{

    let dummyHead = new ListNode(-1);
    let current = dummyHead;
    
    while (list1 !== null && list2 !== null) {
      if (list1.val <= list2.val) {
        current.next = list1;
        list1 = list1.next;
      } else {
        current.next = list2;
        list2 = list2.next;
      }
      current = current.next;
    }
    
    if (list1 !== null) {
      current.next = list1;
    }


}