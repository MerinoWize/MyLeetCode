/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
 var coinChange = function(coins, amount) {
    if (amount === 0) {
        return 0;
    }

    const getCoinsChange = (coins, remainder, count = {}) => {
        if (remainder < 0) return -1;
        if (remainder === 0) return 0;
        if (count[remainder - 1] && count[remainder - 1] !== 0) return count[remainder - 1];

        let minimumValue = Number.MAX_VALUE;

        coins.forEach(coin => {
            let result = getCoinsChange(coins, remainder - coin, count);
            if (result >= 0 && result < minimumValue) {
                minimumValue = 1 + result;
            }
        });

        count[remainder - 1] = (minimumValue === Number.MAX_VALUE) ? -1 : minimumValue;
        return count[remainder - 1];
    };

    return getCoinsChange(coins, amount, {});
};

console.log('coinChange', coinChange([2], 3));