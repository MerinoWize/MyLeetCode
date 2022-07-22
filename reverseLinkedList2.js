/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} left
 * @param {number} right
 * @return {ListNode}
 */
 var reverseBetween = function(head, left, right) {
    let startOfSublist,
         endOfSublist,
         beforeStartOfSublist,
         afterEndOfSublist = null;
    let count = 1;
    let node = head;
    let prev = null;
    let next = null;
    
    while (node) {
        if (count === left - 1) {
            beforeStartOfSublist = node;
        }

        if (count === left) {
            startOfSublist = node
        }

        if (count === right) {
            endOfSublist = node;
        }

        if (count === right + 1) {
            afterEndOfSublist = node;
        }

        if (count >= left && count <= right) {
            next = node.next;
            node.next = prev;
            prev = node;
            node = next;
        } else {
            node = node.next;
        }

        count ++;
    }

    if (beforeStartOfSublist) {
        beforeStartOfSublist.next = endOfSublist;
    } else {
        head = endOfSublist;
    }
    startOfSublist.next = afterEndOfSublist;

    return head;
};