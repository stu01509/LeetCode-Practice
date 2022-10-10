/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
const spiralOrder = function (matrix) {
    const result = [];
    let left = 0;
    let right = matrix[0].length - 1;
    let top = 0;
    let bottom = matrix.length - 1;

    while (left <= right && top <= bottom) {
        for (let i = left; i <= right; i++) {
            result.push(matrix[top][i]);
        }
        top += 1;

        for (let i = top; i <= bottom; i++) {
            result.push(matrix[i][right]);
        }
        right -= 1;

        if (!(left <= right && top <= bottom)) {
            break;
        }

        for (let i = right; i >= left; i--) {
            result.push(matrix[bottom][i]);
        }
        bottom -= 1;

        for (let i = bottom; i >= top; i--) {
            result.push(matrix[i][left]);
        }
        left += 1;
    }

    return result;
};

console.log(spiralOrder([
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
]));