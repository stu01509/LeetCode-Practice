/**
 * @param {number[]} nums
 * @return {number}
 */
const missingNumber = function (nums) {
    let result = nums.length;

    for (let i = 0; i < nums.length; i++) {
        result ^= i;
        result ^= nums[i];
    }
    return result;
};

console.log(missingNumber([3, 0, 1]));
// result 0011
// i = 0, num = 0011
// 
// 0011
// 0000
// ----
// 0011
// 0011
// ----
// 0000
//
// i = 1, num = 0000
//
// 0000
// 0001
// ----
// 0001
// 0000
// ----
// 0001
//
// i = 2, num = 0001
//
// 0001
// 0010
// ----
// 0011
// 0001
// 0010
