/**
 * @param {number[]} nums
 * @return {number}
 */
const findMaxConsecutiveOnes = function (nums) {
    let times = 0;
    let count = 0;
    nums.forEach((num, index) => {
        if (num === 1) {
            count++;
        } else {
            times = Math.max(count, times);
            count = 0;
        }
    });
    times = Math.max(count, times);
    return times;
};

console.log(findMaxConsecutiveOnes([1, 1, 0, 1, 1, 1]));