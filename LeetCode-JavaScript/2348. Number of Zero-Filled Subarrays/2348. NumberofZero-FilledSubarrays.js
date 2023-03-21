/**
 * @param {number[]} nums
 * @return {number}
 */
const zeroFilledSubarray = function (nums) {
    let count = 0;
    let result = 0;

    for (let i = 0; i < nums.length; i++) {
        if (nums[i]) {
            count = 0;
        } else {
            count++;
        }
        result += count;
    }

    return result;
};

console.log(zeroFilledSubarray([1, 3, 0, 0, 2, 0, 0, 4]));
console.log(zeroFilledSubarray([0, 0, 0, 2, 0, 0]));