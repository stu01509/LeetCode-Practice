/**
 * @param {number[]} nums
 * @return {number}
 */
const pivotIndex = function (nums) {
    const sum = nums.reduce((num1, num2) => num1 + num2, 0)

    let left = 0;
    let right = sum;

    for (let i = 0; i < nums.length; i++) {
        right -= nums[i];
        if (left === right) {
            return i
        }
        left += nums[i];
    }
    return -1;
};

console.log(pivotIndex([1, 7, 3, 6, 5, 6]));
console.log(pivotIndex([1, 2, 3]));
console.log(pivotIndex([2, 1, -1]));