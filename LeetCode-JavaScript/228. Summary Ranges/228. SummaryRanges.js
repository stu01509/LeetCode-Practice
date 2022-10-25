/**
 * @param {number[]} nums
 * @return {string[]}
 */
const summaryRanges = function (nums) {
    const result = [];

    for (let i = 0; i < nums.length; i++) {
        const num = nums[i];

        while (i < nums.length - 1 && nums[i] + 1 === nums[i + 1]) {
            i++;
        }

        if (num !== nums[i]) {
            result.push(`${num}->${nums[i]}`);
        } else {
            result.push(`${num}`);
        }
    }

    return result;
};

console.log(summaryRanges([0, 1, 2, 4, 5, 7]));
console.log(summaryRanges([0, 2, 3, 4, 6, 8, 9]));