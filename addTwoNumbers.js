/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    let currentNode1 = l1;
    let currentNode2 = l2;
    let currentCarry = 0;

    let result;
    let currentResult = result;

  while (currentNode1.next || currentNode2.next) {
    console.log('currentResult', currentResult);
    currentResult = currentResult?.next ? currentResult.next : currentResult;
    const rawSum = (currentNode1?.val || 0) + (currentNode2?.val || 0) + currentCarry;
    currentCarry = Math.trunc(rawSum / 10);
    const sumOnes = rawSum - (currentCarry * 10);

    currentResult = listNode(sumOnes);

    currentNode1 = currentNode1.next;
    currentNode2 = currentNode2.next;
  }

  console.log('result', result);

  return result;
};