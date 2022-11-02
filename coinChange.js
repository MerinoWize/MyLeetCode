/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
 var coinChange = function(coins, amount) {
    if (amount === 0) {
        return 0;
    }

    coins.sort((x, y) => x > y ? 1 : -1);
    coins.reverse();

    console.log('sortedCoins', coins);

    let coinsToReturn = 0;
    let remainder = amount;

    while (remainder > 0) {
        console.log('remainder', remainder);
        let divisionValue;
        let intPart;
        let selectedCoin;
        let aCoinWasSelected = false;

        coins.find(c => {
            selectedCoin = c;
            divisionValue = remainder / c;
            aCoinWasSelected = divisionValue >= 1;
            return aCoinWasSelected;
        });

        console.log('aCoinWasSelected', aCoinWasSelected);

        if (!aCoinWasSelected) {
            remainder = -1;
            break;
        }

        console.log('selectedCoin', selectedCoin);

        intPart = Math.trunc(divisionValue);
        console.log('intPart', intPart);
        coinsToReturn += intPart;
        remainder = remainder - (intPart * selectedCoin);

        console.log('remainder - coins', remainder);

        if (Number.isInteger(divisionValue)) {
            remainder = 0;
            break;
        }

        console.log('_______________________________');
    }

    if (coinsToReturn === 0 || remainder <= -1) {
        return -1;
    }

    return coinsToReturn;
};

console.log('coinChange', coinChange([186,419,83,408], 6249));