/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
const setZeroes = function (matrix) {
    const rowSet = new Set();
    const colSet = new Set();

    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[0].length; j++) {
            if (matrix[i][j] === 0) {
                rowSet.add(i);
                colSet.add(j);
            }
        }
    }
    rowSet.forEach((row) => {
        for (let i = 0; i < matrix[0].length; i++) {
            matrix[row][i] = 0;
        }
    });

    colSet.forEach((col) => {
        for (let i = 0; i < matrix.length; i++) {
            matrix[i][col] = 0;
        }
    });
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