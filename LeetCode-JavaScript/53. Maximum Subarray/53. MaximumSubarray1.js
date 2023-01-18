/**
 * @param {number[]} nums
 * @return {number}
 */
const maxSubArray = function (nums) {
    let result = nums[0];
    let currentMax = nums[0];

    for (let i = 1; i < nums.length; i++) {
        currentMax = Math.max(currentMax + nums[i], nums[i]);
        result = Math.max(result, currentMax);
    }

    return result;
};

console.log(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]));
console.log(maxSubArray([1]));
console.log(maxSubArray([5, 4, -1, 7, 8]));