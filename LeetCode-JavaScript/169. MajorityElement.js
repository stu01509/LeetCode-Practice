/**
 * @param {number[]} nums
 * @return {number}
 */
const majorityElement = function (nums) {
    let max = Number.MIN_VALUE;
    let majority;
    const numMap = new Map();
    nums.forEach((num) => {
        if (!numMap.has(num)) {
            numMap.set(num, 1);
        } else {
            numMap.set(num, numMap.get(num) + 1);
        }
    })
    numMap.forEach((key, value) => {
        if (key > max) {
            max = key;
            majority = value;
        }
    });
    return majority;    
};

console.log(majorityElement([3, 2, 3]));
console.log(majorityElement([2, 2, 1, 1, 1, 2, 2]));