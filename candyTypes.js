/**
 * @param {number[]} candyType
 * @return {number}
 */
 var distributeCandies = function(candyType) {
    const maxAmountOfCandies = candyType.length / 2;
    const candiesPerType = {};

    candyType.forEach(candy => {
        if (candiesPerType[candy]) {
            candiesPerType[candy] = candiesPerType[candy] + 1;
        } else {
            candiesPerType[candy] = 1;
        }
    });

    return Math.min(maxAmountOfCandies, Object.keys(candiesPerType).length);
};