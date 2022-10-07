/**
 * @param {number[]} nums
 * @return {number}
 */
const missingNumber = function (nums) {
    let result = nums.length;

    for (let i = 0; i < nums.length; i++) {
        result += (i - nums[i]);
    }
    return result;
};

console.log(missingNumber([3, 0, 1]));
console.log(missingNumber([0, 1]));
console.log(missingNumber([9, 6, 4, 2, 3, 5, 7, 0, 1]));
// 9
// 9 + (0 - 9) = 0
// 0 + (1 - 6) = -5
// -5 + (2 - 4) = -7
// -7 + (3 - 2) = -6
// -6 + (4 - 3) = -5
// -5 + (5 - 5) = -5
// -5 + (6 - 7) = -6
// -6 + (7 - 0) = 1
// 1 + (8 - 1) = 8