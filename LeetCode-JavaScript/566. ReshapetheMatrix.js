/**
 * @param {number[][]} nums
 * @param {number} r
 * @param {number} c
 * @return {number[][]}
 */
const matrixReshape = function (nums, r, c) {
    if (nums.length === 0 || nums.length * nums[0].length !== r * c) {
        return nums;
    }
    const temp = [];
    for (let i = 0; i < nums.length; i++) {
        for (let j = 0; j < nums[0].length; j++) {
            temp.push(nums[i][j]);
        }
    }
    const result = [];
    let row = [];
    let index = 0;
    for (let i = 0; i < r; i++) {
        for (let j = 0; j < c; j++) {
            row.push(temp[index]);
            index++;
        }
        result.push(row);
        row = [];
    }
    return result;
};

console.log(matrixReshape([
    [1, 2],
    [3, 4]
], 1, 4));

console.log(matrixReshape([
    [1, 2],
    [3, 4]
], 2, 4));

console.log(matrixReshape([
    [1, 2],
    [3, 4]
], 4, 1));