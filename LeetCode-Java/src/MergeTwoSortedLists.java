public class MergeTwoSortedLists {

    public static void main(String[] args) {
    }

    public class ListNode {
        int val;
        ListNode next;
        ListNode(int x) { val = x; }
    }

    class MergeTwoSortedListsSolution {
        public ListNode mergeTwoLists(ListNode l1, ListNode l2) {
            ListNode node = new ListNode(0);
            ListNode current = node;

            while (l1 != null && l2 != null) {
                // l1.val 大於 l2.val
                // 所以放入較小值
                if (l1.val > l2.val) {
                    current.next = new ListNode(l2.val);
                    l2 = l2.next;
                } else {
                    current.next = new ListNode(l1.val);
                    l1 = l1.next;
                }
                current = current.next;
            }
            if (l1 != null) {
                current.next = l1;
            }
            if (l2 != null) {
                current.next = l2;
            }
            return node.next;
        }
    }
}
