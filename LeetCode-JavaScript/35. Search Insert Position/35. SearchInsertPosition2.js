/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
const searchInsert = function (nums, target) {
    let left = 0;
    let right = nums.length - 1;

    if (target <= nums[0]) {
        return 0;
    }

    if (target > nums[nums.length - 1]) {
        return nums.length;
    }

    while (left <= right) {
        const middle = Math.floor((left + right) / 2);
        if (nums[middle] >= target && target > nums[middle - 1]) {
            return middle;
        } else if (nums[middle] < target) {
            left = middle + 1;
        } else {
            right = middle - 1;
        }
    }
};

console.log(searchInsert([1,3,5,6], 5));
console.log(searchInsert([1,3,5,6], 2));
console.log(searchInsert([1,3,5,6], 7));