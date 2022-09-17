/**
 * @param {number[]} nums
 * @param {number} diff
 * @return {number}
 */
const arithmeticTriplets = function (nums, diff) {
    let result = 0;

    for (let i = 0; i < nums.length; i++) {
        let left = i + 1;
        let right = nums.length - 1;

        while (left < right) {
            const leftDiff = nums[left] - nums[i];
            const rightDiff = nums[right] - nums[left];

            if (leftDiff === diff && rightDiff === diff) {
                result++;
            }
            if (leftDiff < diff) {
                left++;
            } else {
                right--;
            }
        }
    }
    return result;
};

console.log(arithmeticTriplets([0, 1, 4, 6, 7, 10], 3));
console.log(arithmeticTriplets([4, 5, 6, 7, 8, 9], 2));