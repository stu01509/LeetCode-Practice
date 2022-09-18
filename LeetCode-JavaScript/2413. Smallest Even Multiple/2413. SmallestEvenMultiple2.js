/**
 * @param {number} n
 * @return {number}
 */
 const smallestEvenMultiple = function(n) {
    return n % 2 === 0 ? n : n << 1;
};

console.log(smallestEvenMultiple(5));
console.log(smallestEvenMultiple(6));