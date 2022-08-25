/**
 * @param {string} s
 * @return {number}
 */
 var romanToInt = function(s) {
    const romanValues = {
        I: 1,
        V: 5,
        X: 10,
        L: 50,
        C: 100,
        D: 500,
        M: 1000,
    };

    let result  = 0;

    for (let i = 0; i < s.length; i++) {
        const curr = s[i];
        const next = s[i + 1];

        let sign = 1;

        if (next) {
            if (romanValues[curr] < romanValues[next]) {
                sign = -1;
            }
        }

        result += romanValues[curr] * sign;
    }

    return result;
};
