/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
const addTwoNumbers = function(l1, l2) {
    let node = new ListNode();
    let current = node;
    let carry = 0
    while (l1 || l2 || carry > 0){
        let sum = 0;

        if (l1 !== null){
            sum += l1.val;
            l1 = l1.next;
        }

        if (l2 !== null){
            sum += l2.val;
            l2 = l2.next;
        }

        sum += carry;
        node.next = new ListNode(sum % 10);
        carry = parseInt(sum / 10);
        node = node.next;
    }
    return current.next;
};