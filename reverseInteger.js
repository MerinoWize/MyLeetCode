/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    const sign = x >= 0 ? '' : '-';

    const numberString = '' + x;

    let resultString = '';

    for (let i = numberString.length - 1; i >= 0; i--) {
        const curr = numberString[i];

        if (curr !== '-') {
            resultString = resultString + curr;
        }
    }

    const resultNumber = parseInt(sign + resultString, 10);

    const result = (resultNumber < (Math.pow(-2, 31))) || (resultNumber > (Math.pow(2, 31) - 1)) ?
        0 :
        resultNumber;

    return result;
};

console.log(reverse(123));