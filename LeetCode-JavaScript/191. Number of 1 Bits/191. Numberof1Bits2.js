/**
 * @param {number} n - a positive integer
 * @return {number}
 */
const hammingWeight = function (n) {
    let result = 0;
    while(n) {
        n = n & (n - 1);
        result++;
    }
    return result;
};

console.log(hammingWeight(00000000000000000000000000001011));
console.log(hammingWeight(11111111111111111111111111111101));

