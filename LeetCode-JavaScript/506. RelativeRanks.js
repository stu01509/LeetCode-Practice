/**
 * @param {number[]} nums
 * @return {string[]}
 */
const findRelativeRanks = function(nums) {
    const indexArr = [];
    for (let i = 0; i < nums.length; i++) {
        indexArr[i] = i;
    }

    for (let i = 0; i < nums.length; i++) {
        for (let j = 0; j < nums.length - 1; j++) {
            if (nums[j] < nums[j + 1]) {
                const temp = nums[j];
                nums[j] = nums[j + 1];
                nums[j + 1] = temp;
                const tempIndex = indexArr[j];
                indexArr[j] = indexArr[j + 1];
                indexArr[j + 1] = tempIndex;
            }
        }
    }
    const result = [];

    for (let i = 0; i < nums.length; i++) {
        if (i === 0) {
            result[indexArr[i]] = 'Gold Medal';
        } else if (i === 1) {
            result[indexArr[i]] = 'Silver Medal';
        } else if (i === 2) {
            result[indexArr[i]] = 'Bronze Medal';            
        } else {
            result[indexArr[i]] = String(i + 1);
        }
    }
    return result;    
};

console.log(findRelativeRanks([5, 4, 3, 2, 1]));
console.log(findRelativeRanks([10,3,8,9,4]));
