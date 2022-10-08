/**
 * @param {number[]} nums
 * @return {number}
 */
const rob = function (nums) {
    let oddHouse = 0;
    let evenHouse = 0;

    for (let i = 0; i < nums.length; i++) {
        if (i % 2 === 0) {
            evenHouse = Math.max(evenHouse + nums[i], oddHouse);
        } else {
            oddHouse = Math.max(evenHouse, oddHouse + nums[i]);
        }
    }
    return Math.max(oddHouse, evenHouse);
};

console.log(rob([1, 2, 3, 1]));
console.log(rob([2, 7, 9, 3, 1]));