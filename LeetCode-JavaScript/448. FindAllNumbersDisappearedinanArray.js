/**
 * @param {number[]} nums
 * @return {number[]}
 */
const findDisappearedNumbers = function (nums) {
    const result = [];
    for (let i = 1; i <= nums.length; i++) {
        if (!nums.includes(i)) {
            result.push(i);
        }
    }
    return result;
};

console.log(findDisappearedNumbers([4, 3, 2, 7, 8, 2, 3, 1]));
console.log(findDisappearedNumbers([1, 1]));