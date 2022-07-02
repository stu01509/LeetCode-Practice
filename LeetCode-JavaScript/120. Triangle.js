/**
 * @param {number[][]} triangle
 * @return {number}
 */
const minimumTotal = function (triangle) {
    for (let i = triangle.length - 2; i >= 0; i--) {
        for (let j = 0; j <= i; j++) {
            triangle[i][j] += Math.min(triangle[i + 1][j], triangle[i + 1][j + 1]);
        }
    }
    return triangle[0][0];
};

console.log(minimumTotal([
    [2],
    [3, 4],
    [6, 5, 7],
    [4, 1, 8, 3]
]));

console.log(minimumTotal([
    [-10]
]));