/**
 * @param {number} n - a positive integer
 * @return {number}
 */
const hammingWeight = function (n) {
    let count = 0;
    for (let i = 0; i < 32; i++) {
        count += n & 1;
        n >>= 1;
    }
    return count;
};

console.log(hammingWeight(00000000000000000000000000001011));
console.log(hammingWeight(11111111111111111111111111111101));
