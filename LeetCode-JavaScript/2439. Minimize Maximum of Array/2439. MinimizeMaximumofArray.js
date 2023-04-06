/**
 * @param {number[]} nums
 * @return {number}
 */
const minimizeArrayValue = function(nums) {
  let sum = 0;
  let result = 0;
  
  for (let i = 0; i < nums.length; i++) {
    sum += nums[i];
    result = Math.max(result, Math.ceil(sum / (i + 1)));
  }

  return result;
};

console.log(minimizeArrayValue([3, 7, 1, 6]));
console.log(minimizeArrayValue([10, 1]));