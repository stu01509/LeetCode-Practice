/**
 * @param {number[]} nums
 * @return {number}
 */
const averageValue = function (nums) {
    let sum = 0;
    let count = 0;

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] % 6 === 0) {
            sum += nums[i];
            count++;
        }
    }

    return sum === 0 ? 0 : Math.floor(sum / count);
}

console.log(averageValue([1, 3, 6, 10, 12, 15]));
console.log(averageValue([1, 2, 4, 7, 10]));