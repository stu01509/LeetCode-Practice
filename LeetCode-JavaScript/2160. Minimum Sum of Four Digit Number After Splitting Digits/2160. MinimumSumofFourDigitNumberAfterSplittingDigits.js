/**
 * @param {number} num
 * @return {number}
 */
const minimumSum = function (num) {
    const nums = num.toString().split('').sort();
    const pair1 = nums[0] + nums[2];
    const pair2 = nums[1] + nums[3];
    return Number.parseInt(pair1, 10) + Number.parseInt(pair2, 10);
};

console.log(minimumSum(2932));
console.log(minimumSum(4009));
console.log(minimumSum(2687));