/**
 * @param {string} s
 * @return {number}
 */
 var longestValidParentheses = function(s) {
    const parenthesesStack = [-1];

    let currentMax = 0;

    for (let i = 0; i < s.length; i++) {
        const curr = s[i];

        switch (curr) {
            case '(': {
                parenthesesStack.push(i);
                break;
            }
            case ')' : {
                parenthesesStack.pop();
                if (parenthesesStack.length <= 0) {
                    // invalid operation
                    parenthesesStack.push(i);
                } else {
                    currentMax = Math.max(currentMax, i - parenthesesStack[parenthesesStack.length - 1]);
                }
                break;
            }
            default:
                break;
        }
        
    }
    
    return currentMax;
};

console.log(longestValidParentheses('()(()'));