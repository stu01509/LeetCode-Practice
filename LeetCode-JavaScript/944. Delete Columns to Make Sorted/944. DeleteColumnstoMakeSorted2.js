/**
 * @param {string[]} strs
 * @return {number}
 */
const minDeletionSize = function (strs) {
    const ROWS = strs.length;
    const COLS = strs[0].length;
    let result = 0;

    for (let col = 0; col < COLS; col++) {
        for (let row = 1; row < ROWS; row++) {
            if (strs[row - 1][col] > strs[row][col]) {
                result
                break;
            }
        }
    }
    return result;
};

console.log(minDeletionSize(["cba", "daf", "ghi"]));
console.log(minDeletionSize(["a", "b"]));
console.log(minDeletionSize(["zyx", "wvu", "tsr"]));