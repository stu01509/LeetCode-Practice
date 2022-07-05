/**
 * @param {number[]} nums
 * @return {number}
 */
const longestConsecutive = function (nums) {
    const set = new Set(nums);
    let result = 0;

    for (let num of set) {
        if (!set.has(num - 1)) {
            let counter = 0;
            while (set.has(num++)) {
                counter++;
            }
            result = Math.max(result, counter);
        }
    }
    return result;
};

console.log(longestConsecutive([100, 4, 200, 1, 3, 2]));
console.log(longestConsecutive([0, 3, 7, 2, 5, 8, 4, 6, 0, 1]));