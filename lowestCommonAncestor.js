/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function(root, p, q) {    
    let bfs = [root];
    
    let visited = [];
    let visitedLR = [];

    currentSide = 'root';

    let indexOfP, indexOfQ, count = 0;
    let pFound, qFound = false
    
    while(bfs.length > 0) {
        const currentNode = bfs.pop();

        console.log('currentNode', currentNode.val);
        
        if (currentNode.val) {
            bfs.unshift(currentNode.left);
            bfs.unshift(currentNode.right);
            
            visited.unshift(currentNode.val);
            visitedLR.unshift(currentSide);

            if (currentNode == p) {
                pFound = true;
                indexOfP = count;
            }

            if (currentNode == q) {
                qFound == true;
                indexOfQ = count;
            }

            if (pFound && qFound) {
                break;
            }

            count ++;

            currentSide = currentSide === 'l' ? 'r' : 'l';
        }
        console.log('bfs', bfs);
    }

    console.log('visited', visited);

    const largestIndex = Math.max(indexOfP, indexOfQ); 
    const lowestIndex = Math.min(indexOfP, indexOfQ);

    const isOdd = ((largestIndex - lowestIndex) % 2) === 0;


    if(isOdd) {
        return visited[lowestIndex];
    } else {
        const sideOfEarlier = visitedLR[lowestIndex];
        const stepsToParent = sideOfEarlier === 'l' ? 1 : 2;
        return visited[lowestIndex - stepsToParent]
    }
};