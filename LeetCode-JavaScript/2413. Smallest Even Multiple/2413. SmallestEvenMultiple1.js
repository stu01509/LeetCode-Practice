/**
 * @param {number} n
 * @return {number}
 */
const smallestEvenMultiple = function (n) {
    if (n % 2 === 0) {
        return n;
    }
    return n * 2;
};

console.log(smallestEvenMultiple(5));
console.log(smallestEvenMultiple(6));