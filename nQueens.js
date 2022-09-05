/**
 * @param {number} n
 * @return {string[][]}
 */
 var solveNQueens = function(n) {

    let columns  = {};
    let negDiag = {}; // r - c
    let posDiag = {}; // r + c

    let result = [];

    const createRow = (QueenPos = null) => {
        let row = '';
        for (let i = 0; i < n; i++) {
            if (typeof QueenPos === 'number' && QueenPos === i) {
                row += 'Q';
            } else {
                row += '.';
            }
        }
        return row;
    };

    const createBoard = () => {
        let board = [];
        for (let r = 0; r < n; r++) {
            board.push(createRow());
        }

        return board;
    }

    const board = createBoard();

    const backtrack = (r) => {
        if (r === n) {
            const newBoard = [...board];
            result = [...result, newBoard];
            return;
        } else {
            for (let c = 0; c < n; c++) {
                if (!(columns[c] || negDiag[r - c] || posDiag[r + c])) {
                    columns[c] = true;
                    negDiag[r - c] = true;
                    posDiag[r + c] = true;
                    board[r] = createRow(c);
                    
                    backtrack (r + 1);

                    delete columns[c];
                    delete negDiag[r - c];
                    delete posDiag[r + c];
                    board[r] = createRow();
                }
            }
        }
    }
    
    backtrack(0);
    return result;
};

console.log(solveNQueens(8));