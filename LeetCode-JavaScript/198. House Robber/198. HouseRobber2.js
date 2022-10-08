/**
 * @param {number[]} nums
 * @return {number}
 */
const rob = function (nums) {
    let firstHouse = 0;
    let secondHouse = 0;

    for (let i = 0; i < nums.length; i++) {
        const temp = Math.max(firstHouse + nums[i], secondHouse);
        firstHouse = secondHouse;
        secondHouse = temp;
    }
    return secondHouse;
};

console.log(rob([1, 2, 3, 1]));
console.log(rob([2, 7, 9, 3, 1]));