/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
 var isValidBST = function(root) {
    const treeQueue = [{ node: root, side: 'C'}];

    const queue = (x) => treeQueue.push(x);
    const dequeue = () => treeQueue.shift();

    while (treeQueue.length > 0) {
        const obj = dequeue();
        const curr = obj.node;

        const side = obj.side

        if (side === 'R') {
            if (curr.val <= root.val) {
                return false;
            }
        }

        if (side === 'L') {
            if (curr.val >= root.val) {
                return false;
            }
        }

        if (curr.left) {
            if (curr.left.val >= curr.val) {
                return false;
            }
            queue({
                node: curr.left,
                side: side === 'C' ? 'L' : side,
            });
        }
        
        if (curr.right) {
            if (curr.right.val <= curr.val) {
                return false;
            }
            queue({
                node: curr.right,
                side: side === 'C' ? 'R' : side,
            });
        }
    }

    return true;
};