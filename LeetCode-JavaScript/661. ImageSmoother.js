/**
 * @param {number[][]} M
 * @return {number[][]}
 */
const imageSmoother = function (M) {
    const result = [];
    for (let i = 0; i < M.length; i++) {
        const tempArr = [];
        for (let j = 0; j < M[i].length; j++) {
            let sum = 0;
            let count = 0;
            // left top
            if (i - 1 > -1 && j - 1 > -1) {
                sum += M[i - 1][j - 1];
                count++;
            }
            // left
            if (j - 1 > -1) {
                sum += M[i][j - 1];
                count++;
            }
            // left bottom
            if (i + 1 < M.length && j - 1 > -1) {
                sum += M[i + 1][j - 1];
                count++;
            }
            // top
            if (i - 1 > -1) {
                sum += M[i - 1][j];
                count++;
            }
            // bottom
            if (i + 1 < M.length) {
                sum += M[i + 1][j];
                count++;
            }
            // right top
            if (i - 1 > -1 && j + 1 < M[0].length) {
                sum += M[i - 1][j + 1];
                count++;
            }
            // right
            if (j + 1 < M[0].length) {
                sum += M[i][j + 1];
                count++;
            }
            // right bottom
            if (i + 1 < M.length && j + 1 < M[0].length) {
                sum += M[i + 1][j + 1];
                count++;
            }
            sum += M[i][j];
            count++;
            tempArr.push(Math.floor(sum / count));
        }
        result.push(tempArr);
    }
    return result;
};

// console.log(imageSmoother([
//     [1, 1, 1],
//     [1, 0, 1],
//     [1, 1, 1]
// ]));
// console.log(imageSmoother([
//     [1, 2, 3],
//     [4, 5, 6],
//     [7, 8, 9]
// ]));
console.log(imageSmoother([
    [2, 3, 4],
    [5, 6, 7],
    [8, 9, 10],
    [11, 12, 13],
    [14, 15, 16]
]));