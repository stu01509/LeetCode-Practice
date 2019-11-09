/**
 * @param {number[]} nums
 * @return {boolean}
 */
const containsDuplicate = function (nums) {
    const numSet = new Set();
    for (let i = 0; i < nums.length; i++) {
        if (numSet.has(nums[i])) {
            return true;
        } else {
            numSet.add(nums[i]);
        }
    }
    return false;
};

console.log(containsDuplicate([1, 2, 3, 1]));
console.log(containsDuplicate([1, 2, 3, 4]));
console.log(containsDuplicate([1, 1, 1, 3, 3, 4, 3, 2, 4, 2]));