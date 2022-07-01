/**
 * @param {number[]} nums
 * @return {number}
 */
const minMoves2 = function (nums) {
    nums.sort((a, b) => a - b);
    const middle = nums[Math.floor(nums.length / 2)];
    let result = 0;
    nums.forEach((num) => {
        result += Math.abs(middle - num);
    })
    return result;
};

console.log(minMoves2([1, 2, 3]));
console.log(minMoves2([1, 3, 2]));
console.log(minMoves2([1, 10, 2, 9]));