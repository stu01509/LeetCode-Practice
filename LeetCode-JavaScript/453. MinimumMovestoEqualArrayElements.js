/**
 * @param {number[]} nums
 * @return {number}
 */
const minMoves = function (nums) {
    let count = 0;
    let min = Math.min(...nums);

    nums.forEach(num => min = Math.min(min, num));
    nums.forEach(num => count += num - min);
    return count;
};

console.log(minMoves([1, 2, 3]));