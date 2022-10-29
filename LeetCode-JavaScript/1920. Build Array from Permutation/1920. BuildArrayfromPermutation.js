/**
 * @param {number[]} nums
 * @return {number[]}
 */
const buildArray = function (nums) {
    const result = [];

    for (let i = 0; i < nums.length; i++) {
        result.push(nums[nums[i]]);
    }
    
    return result;
};

console.log(buildArray([0, 2, 1, 5, 3, 4]));
console.log(buildArray([5, 0, 1, 2, 3, 4]));