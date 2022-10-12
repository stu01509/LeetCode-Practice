/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
const setZeroes = function (matrix) {
    let isCol = false;
    let row = matrix.length;
    let col = matrix[0].length;


    for (let i = 0; i < row; i++) {
        if (matrix[i][0] === 0) {
            isCol = true;
        }

        for (let j = 1; j < col; j++) {
            if (matrix[i][j] === 0) {
                matrix[0][j] = 0;
                matrix[i][0] = 0;
            }
        }
    }

    for (let i = 1; i < row; i++) {
        for (let j = 1; j < col; j++) {
            if (matrix[i][0] === 0 || matrix[0][j] === 0) {
                matrix[i][j] = 0;
            }
        }
    }

    if (matrix[0][0] === 0) {
        for (let i = 0; i < col; i++) {
            matrix[0][i] = 0;
        }
    }

    if (isCol) {
        for (let i = 0; i < row; i++) {
            matrix[i][0] = 0;
        }
    }
};

console.log(setZeroes([
    [1, 1, 1],
    [1, 0, 1],
    [1, 1, 1]
]));

console.log(setZeroes([
    [0, 1, 2, 0],
    [3, 4, 5, 2],
    [1, 3, 1, 5]
]));

console.log(setZeroes([
    [0, 1]
]));

console.log(setZeroes(
    [
        [1],
        [0]
    ]
));