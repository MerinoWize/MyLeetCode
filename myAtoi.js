/**
 * @param {string} s
 * @return {number}
 */
 var myAtoi = function(s) {
    const INT_MAX = Math.pow(2,31) - 1;
    const INT_MIN = -Math.pow(2, 31);

    let currentResult = 0;
    let isNegative = false; 
    let numberStarted = false;
    let signed = false;

    for (let i = 0; i < s.length; i++) {
        const currentChar = s[i];
        if(currentChar.includes('-')) {
            if (signed) break;
            isNegative = true;
            signed = true;
        }

        if(currentChar.includes('+')) {
            if (signed) break;
            isNegative = false;
            signed = true;
        }

        if(/[0-9]/.test(currentChar)) {
            const num = parseInt(currentChar);
            
            if (!numberStarted) numberStarted = true;
            currentResult = (currentResult * 10) + num;
        }

        if (!isNegative && currentResult > INT_MAX) {
            return INT_MAX;
        }

        if (isNegative && ((-1 * currentResult) < INT_MIN)) {
            return INT_MIN;
        }

        if(/[a-zA-Z]|\./.test(currentChar)) {
            break;
        }

        if(/\s/.test(currentChar) && (numberStarted || signed)) {
            break;
        }

    }

    const signMultipliyer = isNegative ? -1 : 1;

    return currentResult * signMultipliyer;
};