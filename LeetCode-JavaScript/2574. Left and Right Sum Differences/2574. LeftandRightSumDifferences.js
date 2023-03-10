/**
 * @param {number[]} nums
 * @return {number[]}
 */
const leftRigthDifference = function (nums) {
    const leftSum = [0];
    const rightSum = [0];
    const answer = [];

    for (let i = 0; i < nums.length - 1; i++) {
        leftSum.push(leftSum[leftSum.length - 1] + nums[i]);
    }
    for (let i = nums.length - 1; i > 0; i--) {
        rightSum.unshift(rightSum[0] + nums[i]);
    }
    for (let i = 0; i < nums.length; i++) {
        answer.push(Math.abs(leftSum[i] - rightSum[i]));
    }
    return answer;
};

console.log(leftRigthDifference([10, 4, 8, 3]));
console.log(leftRigthDifference([1]));