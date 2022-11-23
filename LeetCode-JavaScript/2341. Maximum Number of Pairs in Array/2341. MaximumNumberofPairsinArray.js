/**
 * @param {number[]} nums
 * @return {number[]}
 */
const numberOfPairs = function (nums) {
    const set = new Set();

    for (let i = 0; i < nums.length; i++) {
        const num = nums[i];
        if (set.has(num)) {
            set.delete(num);
        } else {
            set.add(num);
        }
    }
    return [(nums.length - set.size) / 2 ,set.size];
};

console.log(numberOfPairs([1, 3, 2, 1, 3, 2, 2]));
console.log(numberOfPairs([1, 1]));
console.log(numberOfPairs([0]));