/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
const twoSum = (nums, target) => {
    let numsMap = new Map();
    let result = [];

    for (let i = 0; i < nums.length; i++) {
        const subNum = target - nums[i];
        if (numsMap.has(subNum) && numsMap.get(subNum) !== i) {
            result[0] = numsMap.get(subNum);
            result[1] = i;
            return result;
        } else {
            numsMap.set(nums[i], i);
        }
    }

}