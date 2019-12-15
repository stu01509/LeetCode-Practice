/**
 * @param {number[]} nums
 * @return {number}
 */
const rob = function (nums) {
    let odd = 0;
    let even = 0;
    nums.forEach((num, index) => {
        if (index % 2 === 0) {
            even = Math.max(even + num, odd);
        } else {
            odd = Math.max(even, odd + num);
        }
    });
    return Math.max(odd, even);
};

console.log(rob([1, 2, 3, 1]));
console.log(rob([2, 7, 9, 3, 1]));
console.log(rob([2, 1, 1, 2]));
