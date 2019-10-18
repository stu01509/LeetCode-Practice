/**
 * @param {number[]} nums
 * @return {number}
 */
const singleNumber = function (nums) {
    let result = 0;
    nums.forEach((num) => {
        result ^= num;
    })
    return result;
};

console.log(singleNumber([2, 2, 1]));
console.log(singleNumber([4, 1, 2, 1, 2]));