/**
 * @param {number[]} nums
 * @return {number}
 */
const minMaxGame = function (nums) {
    if (nums.length === 1) {
        return nums;
    }

    const newNumsSize = Math.round(nums.length / 2);
    const newNums = new Array(newNumsSize);
    for (let i = 0; i < newNumsSize; i++) {
        if (i % 2 === 0) {
            newNums[i] = Math.min(nums[2 * i], nums[2 * i + 1]);
        } else {
            newNums[i] = Math.max(nums[2 * i], nums[2 * i + 1]);
        }

    }
    return minMaxGame(newNums);
};

console.log(minMaxGame([1, 3, 5, 2, 4, 8, 2, 2]));
console.log(minMaxGame([3]));