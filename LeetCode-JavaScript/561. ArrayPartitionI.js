/**
 * @param {number[]} nums
 * @return {number}
 */
const arrayPairSum = function(nums) {
    let result = 0;
    nums.sort(customSort);
    for (let i = 0; i < nums.length; i += 2) {
        result += Math.min(nums[i], nums[i + 1]);
    }
    return result;
};

const customSort = function(a, b) {
    return a - b;
}

console.log(arrayPairSum([1,4,3,2]));
