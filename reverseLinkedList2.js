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
    const getNfromStartNode = (head, n) => {
        let node = head;
        let prev = null;

        for (let i = 1; i <= n; i++) {
            if (!node) {
                break
            }

            if (i > 1) {
                prev = node;
                node = node.next;
            }
        }

        return {
            result: node, 
            prev
        };
    };

    const getEndOflist = (head) => {
        let node = head;

        while (node.next) {
            node = node.next;
        }

        return node;
    }

    const reverseList = (head) => {
        let prev = null;
        let curr = head;
        let next = null;

        while (curr) {
            next = curr.next;
            curr.next = prev;
            prev = curr;
            curr = next;
        }
        return prev;
    };

    const {  result: sublistEnd } = getNfromStartNode(head, right);
    const sublisEndNext = sublistEnd.next;

    sublistEnd.next = null;

    const {  result: sublistStart, prev } = getNfromStartNode(head, left);

    const reversedSublist = reverseList(sublistStart);

    let newHead;

    if (prev) {
        prev.next = reversedSublist;
        newHead = head;
    } else {
        newHead = reversedSublist;
    }

    const endOfNewList = getEndOflist(newHead);

    endOfNewList.next = sublisEndNext;

    return newHead;
};