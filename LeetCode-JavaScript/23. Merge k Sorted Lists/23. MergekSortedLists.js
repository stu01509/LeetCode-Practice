function ListNode(val) {
    this.val = val;
    this.next = null;
}
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
const mergeKLists = function (lists) {
    if (lists.length === 0) {
        return null;
    }

    while (lists.length > 1) {
        const mergedLists = [];

        for (let i = 0; i < lists.length; i += 2) {
            const l1 = lists[i];
            const l2 = lists[i + 1] ? lists[i + 1] : null;
            mergedLists.push(mergeLists(l1, l2));
        }
        lists = mergedLists;
    }
    return lists[0];
};

const mergeLists = function (l1, l2) {
    const dummy = new ListNode();
    let current = dummy;

    while (l1 && l2) {
        if (l1.val > l2.val) {
            current.next = l2;
            l2 = l2.next;
        } else {
            current.next = l1;
            l1 = l1.next;
        }
        current = current.next;
    }
    if (l1) {
        current.next = l1;
    }
    if (l2) {
        current.next = l2;
    }
    return dummy.next;
}

console.log(mergeKLists(
    [new ListNode(1, new ListNode(4, new ListNode(5)))],
    [new ListNode(1, new ListNode(3, new ListNode(4)))],
    [new ListNode(2, new ListNode(6))],
));
console.log(mergeKLists([]));
console.log(mergeKLists([[]]));