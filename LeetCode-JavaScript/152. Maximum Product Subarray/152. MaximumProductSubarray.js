/**
 * @param {number[]} nums
 * @return {number}
 */
const maxProduct = function (nums) {
    let result = Math.max(...nums);
    let currentMax = nums[0];
    let currentMin = nums[0];

    for (let i = 1; i < nums.length; i++) {
        const max = currentMax;
        currentMax = Math.max(max * nums[i], currentMin * nums[i], nums[i]);
        currentMin = Math.min(max * nums[i], currentMin * nums[i], nums[i]);
        result = Math.max(currentMax, result);
    }

    return result;
};

console.log(maxProduct([2, 3, -2, 4]));
console.log(maxProduct([-2, 0, -1]));