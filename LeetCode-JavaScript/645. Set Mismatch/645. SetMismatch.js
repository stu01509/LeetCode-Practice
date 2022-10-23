/**
 * @param {number[]} nums
 * @return {number[]}
 */
const findErrorNums = function (nums) {
    const result = [];
    const set = new Set();

    for (let i = 0; i < nums.length; i++) {
        if (set.has(nums[i])) {
            result[0] = nums[i];
        } else {
            set.add(nums[i]);
        }
    }

    for (let i = 1; i <= nums.length; i++) {
        if (!set.has(i)) {
            result[1] = i;
        }
    }

    return result;
};

console.log(findErrorNums([1, 2, 2, 4]));
console.log(findErrorNums([1, 1]));