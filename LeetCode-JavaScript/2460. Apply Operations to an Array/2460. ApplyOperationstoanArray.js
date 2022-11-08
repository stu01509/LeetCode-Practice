/**
 * @param {number[]} nums
 * @return {number[]}
 */
const applyOperations = function (nums) {
    const result = [];
    let zeroCount = 0;
    for (let i = 1; i < nums.length; i++) {
        if (nums[i - 1] === nums[i]) {
            nums[i - 1] *= 2;
            nums[i] = 0;
        }
    }

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === 0) {
            zeroCount++;
        } else {
            result.push(nums[i]);
        }
    }

    return result.concat(new Array(zeroCount).fill(0));
};

console.log(applyOperations([1, 2, 2, 1, 1, 0]));
console.log(applyOperations([0, 1]));