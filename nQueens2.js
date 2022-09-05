/**
 * @param {number} n
 * @return {string[][]}
 */
 var totalNQueens = function(n) {
    let columns  = {};
    let negDiag = {}; // r - c
    let posDiag = {}; // r + c

    let result = 0;

    const backtrack = (r) => {
        if (r === n) {
            result += 1;
            return;
        } else {
            for (let c = 0; c < n; c++) {
                if (!(columns[c] || negDiag[r - c] || posDiag[r + c])) {
                    columns[c] = true;
                    negDiag[r - c] = true;
                    posDiag[r + c] = true;
                    
                    backtrack (r + 1);

                    delete columns[c];
                    delete negDiag[r - c];
                    delete posDiag[r + c];
                }
            }
        }
    }
    
    backtrack(0);
    return result;
};

