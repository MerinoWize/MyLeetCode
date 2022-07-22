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
 
     let startOfSublist,
         endOfSublist,
         beforeStartOfSublist,
         afterEndOfSublist = null;
 
     let count = 1;
     
     let node = head;
     
     while (node) {
         if (count === left - 1) {
             beforeStartOfSublist = node;
         }
 
         if (count === left) {
             startOfSublist = node;
         }
 
         if (count === right) {
             endOfSublist = node;
         }
 
         if (count === right + 1) {
             afterEndOfSublist = node;
         }
 
         node = node.next;
         count ++;
     }
 
     endOfSublist.next = null;
 
     const reversedSublist = reverseList(startOfSublist);
 
     let newHead;
 
     if (beforeStartOfSublist) {
         beforeStartOfSublist.next = reversedSublist;
         newHead = head;
     } else {
         newHead = reversedSublist;
     }
 
     startOfSublist.next = afterEndOfSublist;
 
     return newHead;
 };