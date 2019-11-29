/**
 * @param {number[]} nums
 * @return {number}
 */
const removeDuplicates = function (nums) {
    if (nums.length === 0 || nums === null) {
        return 0;
    }
    let index = 0;
    for (let i = 0; i < nums.length; i++) {
        if (i < 2 || nums[i] > nums[index - 2]) {
            nums[index++] = nums[i];
        }
    }
    return index;
};

console.log(removeDuplicates([1, 1, 1, 2, 2, 3]));
console.log(removeDuplicates([0, 0, 1, 1, 1, 1, 2, 3, 3]));