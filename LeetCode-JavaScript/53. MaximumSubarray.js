/**
 * @param {number[]} nums
 * @return {number}
 */
const maxSubArray = function (nums) {
    let max = nums[0];
    const arr = [];
    arr[0] = nums[0];
    
    for (let i = 1; i < nums.length; i++) {
        if (arr[i - 1] + nums[i] > nums[i]) {
            arr[i] = arr[i - 1] + nums[i];            
        } else {
            arr[i] = nums[i];
        }
        if (arr[i] > max || max === undefined) {
            max = arr[i];
        }
    }
    return max;
};

console.log(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]));