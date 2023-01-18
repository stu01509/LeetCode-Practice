/**
 * @param {number[]} nums
 * @return {number}
 */
const maxSubarraySumCircular = function (nums) {
    const sum = nums.reduce((pre, cur) => pre += cur, 0);

    let curMax = nums[0];
    let curMin = nums[0];
    let sumMax = nums[0];
    let sumMin = nums[0];

    for (let i = 1; i < nums.length; i++) {
        curMax = Math.max(nums[i], curMax + nums[i]);
        curMin = Math.min(nums[i], curMin + nums[i]);
        sumMax = Math.max(sumMax, curMax);
        sumMin = Math.min(sumMin, curMin);
    }

    if (sum === sumMin) {
        return sumMax;
    }
    return Math.max(sumMax, sum - sumMin);
};

console.log(maxSubarraySumCircular([1, -2, 3, -2]));
console.log(maxSubarraySumCircular([5, -3, 5]));
console.log(maxSubarraySumCircular([-3, -2, -3]));