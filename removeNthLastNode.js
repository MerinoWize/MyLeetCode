/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */

/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
 var removeNthFromEnd = function(head, n) {
    let currentNode = head;
    let allNodes = [];

    while (currentNode) {
        allNodes.push(currentNode);

        currentNode = currentNode.next || null;
    }

    const indexNodeToRemove = (allNodes.length - n);
    const prevNodeToConnectIndex = indexNodeToRemove - 1;
    const nextNodeToConnectIndex = indexNodeToRemove + 1;

    let connectToNewNode = false;

    if (prevNodeToConnectIndex < 0) {
        return nextNodeToConnectIndex < allNodes.length ?
            allNodes[nextNodeToConnectIndex]
            : null;
    }

    if (nextNodeToConnectIndex >= allNodes.length) connectToNewNode = true;

    if (connectToNewNode) {
        allNodes[prevNodeToConnectIndex].next = null;
    } else {
        allNodes[prevNodeToConnectIndex].next = allNodes[nextNodeToConnectIndex];
    }

    return head;
};

console.log(removeNthFromEnd(new ListNode(1), 1));