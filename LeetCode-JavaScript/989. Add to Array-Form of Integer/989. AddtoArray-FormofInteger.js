/**
 * @param {number[]} num
 * @param {number} k
 * @return {number[]}
 */
const addToArrayForm = function (num, k) {
    const sum = BigInt(num.join('')) + BigInt(k);
    return String(sum).split('');
};

console.log(addToArrayForm([1, 2, 0, 0], 34));
console.log(addToArrayForm([2, 7, 4], 181));
console.log(addToArrayForm([2, 1, 5], 806));