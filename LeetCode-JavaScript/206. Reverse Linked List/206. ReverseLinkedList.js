function ListNode(val, next) {
     this.val = (val===undefined ? 0 : val)
     this.next = (next===undefined ? null : next)
}
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
 const reverseList = function (head) {
     let prev = null;
     while (head !== null) {
          const tempNext = head.next;
          head.next = prev;
          prev = head;
          head = tempNext;
     }
     return prev;
};

console.log(reverseList(new ListNode(1, new ListNode(2, new ListNode(3, new ListNode(4, new ListNode(5, null)))))));
console.log(reverseList(new ListNode(1, new ListNode(2, null))));
console.log(reverseList(new ListNode(null, null)));