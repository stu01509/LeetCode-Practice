/**
 * @param {number} n
 * @return {boolean}
 */
const hasAlternatingBits = function(n) {
    const binary = n.toString(2);
    for (let i = 1; i < binary.length; i++) {
       if (binary[i - 1] === binary[i]) {
           return false;
       }
    }
    return true;
};

console.log(hasAlternatingBits(5));
console.log(hasAlternatingBits(7));
console.log(hasAlternatingBits(11));
console.log(hasAlternatingBits(10));