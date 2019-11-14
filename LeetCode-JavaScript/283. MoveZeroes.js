/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
const moveZeroes = function (nums) {
    let index = 0;
    let current = 0;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === 0) {
            index++;
        } else {
            const temp = nums[index];
            nums[index] = nums[current];
            nums[current] = temp;
            current++;
            index++;
        }
    }
    return nums;
};

console.log(moveZeroes([0, 1, 0, 3, 12]));