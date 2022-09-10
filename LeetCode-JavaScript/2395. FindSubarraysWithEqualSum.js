/**
 * @param {number[]} nums
 * @return {boolean}
 */
const findSubarrays = function (nums) {
    const set = new Set();

    for (let i = 1; i < nums.length; i++) {
        const sum = nums[i - 1] + nums[i];
        if (set.has(sum)) {
            return true;
        }
        set.add(sum);
    }
    return false;
};

console.log(findSubarrays([4, 2, 4]));
console.log(findSubarrays([1, 2, 3, 4, 5]));
console.log(findSubarrays([0, 0, 0]));