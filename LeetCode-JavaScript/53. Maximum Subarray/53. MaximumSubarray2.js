/**
 * @param {number[]} nums
 * @return {number}
 */
const maxSubArray = function (nums) {
    for (let i = 1; i < nums.length; i++) {
        if (nums[i - 1] > 0) {
            nums[i] = nums[i - 1] + nums[i];
        }
    }
    return Math.max(...nums);
};

console.log(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]));
console.log(maxSubArray([1]));
console.log(maxSubArray([5, 4, -1, 7, 8]));