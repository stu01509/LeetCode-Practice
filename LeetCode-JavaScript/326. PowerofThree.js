/**
 * @param {number} n
 * @return {boolean}
 */
const isPowerOfThree = function(n) {
    return (n > 0 && 1162261467  % n === 0);
};

console.log(isPowerOfThree(27));
console.log(isPowerOfThree(0));
console.log(isPowerOfThree(9));
console.log(isPowerOfThree(45));