/**
 * @param {number[]} nums
 * @return {number[]}
 */
const getConcatenation = function (nums) {
    return nums.concat(nums);
};

console.log(getConcatenation([1, 2, 1]));
console.log(getConcatenation([1, 3, 2, 1]));