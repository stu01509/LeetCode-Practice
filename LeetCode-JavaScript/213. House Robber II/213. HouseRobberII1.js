/**
 * @param {number[]} nums
 * @return {number}
 */
const rob = function (nums) {
    if (nums.length <= 1) {
        return nums;
    }
    return Math.max(helper(nums.slice(1)), helper(nums.slice(0, nums.length - 1)));
};

const helper = function (nums) {
    let firstHouse = 0;
    let secondHouse = 0;

    for (let i = 0; i < nums.length; i++) {
        const temp = Math.max(firstHouse + nums[i], secondHouse);
        firstHouse = secondHouse;
        secondHouse = temp;
    }
    return secondHouse;
};

console.log(rob([2, 3, 2]));
console.log(rob([1, 2, 3, 1]));