function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
}
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
const middleNode = function (head) {
    let nodeCount = 0;
    let currentHead = head;
    while (currentHead !== null) {
        nodeCount++;
        currentHead = currentHead.next;
    }
    nodeCount = Math.floor(nodeCount / 2);
    while (head !== null) {
        if (nodeCount === 0) {
            return head;
        }
        nodeCount--;
        head = head.next;
    }
    return head;
};

console.log(middleNode(new ListNode(1, new ListNode(2, new ListNode(3, new ListNode(4, new ListNode(5, null)))))));
console.log(middleNode(new ListNode(1, new ListNode(2, new ListNode(3, new ListNode(4, new ListNode(5, new ListNode(6, null))))))));