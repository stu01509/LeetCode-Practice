/**
 * @param {number[]} nums
 * @return {boolean}
 */
const canJump = function (nums) {
    let goal = nums.length - 1;

    for (let i = goal; i >= 0; i--) {
        if (i + nums[i] >= goal) {
            goal = i;
        }
    }
    return goal === 0;
};

console.log(canJump([2, 3, 1, 1, 4]));
console.log(canJump([3, 2, 1, 0, 4]));