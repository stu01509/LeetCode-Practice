/**
 * @param {number[]} nums
 * @return {boolean}
 */
const canBeIncreasing = function (nums) {
    for (let i = 0; i < nums.length; i++) {
        const removeOneNums = [...nums];
        removeOneNums.splice(i, 1);
        if (helper(removeOneNums)) {
            return true;
        }
    }
    return false;
};

const helper = function (nums) {
    for (let i = 1; i < nums.length; i++) {
        if (nums[i - 1] >= nums[i]) {
            return false;
        }
    }
    return true;
}

console.log(canBeIncreasing([1, 2, 10, 5, 7]));
console.log(canBeIncreasing([2, 3, 1, 2]));
console.log(canBeIncreasing([1, 1, 1]));
console.log(canBeIncreasing([1]));