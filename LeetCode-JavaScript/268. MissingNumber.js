/**
 * @param {number[]} nums
 * @return {number}
 */
const missingNumber = function (nums) {
    let sum = nums.reduce((prev, item) => {
	    return prev + item;
    }, 0);
    return 0.5 * nums.length * (nums.length + 1) - sum;
};

console.log(missingNumber([3, 0, 1]));
console.log(missingNumber([9, 6, 4, 2, 3, 5, 7, 0, 1]));
console.log(missingNumber([0]));
console.log(missingNumber([1]));