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
    let oddHouse = 0;
    let evenHouse = 0;

    for (let i = 0; i < nums.length; i++) {
        if (i % 2 === 0) {
            evenHouse = Math.max(evenHouse + nums[i], oddHouse);
        } else {
            oddHouse = Math.max(evenHouse, oddHouse + nums[i]);
        }
    }
    return Math.max(oddHouse, evenHouse);
};

console.log(rob([2, 3, 2]));
console.log(rob([1, 2, 3, 1]));