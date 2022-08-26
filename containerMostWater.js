/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    let maxWaterArea = 0;

    let i = 0;
    let j = height.length - 1;

    while (j !== i ) {
        const base = j - i;

        const iPost = height[i];
        const jPost = height[j];

        const currentArea = base * Math.min(iPost, jPost);

        if (currentArea > maxWaterArea) {
            maxWaterArea = currentArea;
        }

        if (jPost > iPost) {
            i ++;
        } else {
            j --;
        }
    }; 

    return maxWaterArea;
};

console.log(maxArea([2,3,4,5,18,17,6]));