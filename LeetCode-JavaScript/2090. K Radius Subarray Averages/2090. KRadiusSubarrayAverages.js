/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
const getAverages = function (nums, k) {
  const count = k * 2 + 1;
  const prefix = [nums[0]];
  const result = [];

  for (const num of nums) {
    prefix.push(num + prefix[prefix.length - 1]);
  }

  for (let i = 0; i < nums.length; i++) {
    if (i - k >= 0 && i + k < nums.length) {
      result.push(Math.floor((prefix[i + k + 1] - prefix[i - k]) / count))
    } else {
      result.push(-1);
    }
  }
  return result;
};

console.log(getAverages([7, 4, 3, 9, 1, 8, 5, 2, 6], 3));
console.log(getAverages([100000], 0));
console.log(getAverages([8], 100000));