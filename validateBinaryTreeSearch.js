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
    const checkTreeValidity = (curr, low, high) => {
        if (!curr) {
            return true;
        }

        if (
            (typeof low === 'number' && curr.val <= low) ||
            (typeof high === 'number' && curr.val >= high)
        ) {
            return false;
        }

        return checkTreeValidity(curr.left, low, curr.val) && checkTreeValidity(curr.right, curr.val, high);
    };

    return checkTreeValidity(root);
};