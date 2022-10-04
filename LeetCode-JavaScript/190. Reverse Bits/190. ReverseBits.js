/**
 * @param {number} n - a positive integer
 * @return {number} - a positive integer
 */
const reverseBits = function (n) {
    let result = 0;
    for (let i = 0; i < 32; i++) {
        result *= 2;
        result += n & 1;
        n /= 2;
    }
    return result;
};

console.log(reverseBits(00000010100101000001111010011100));
console.log(reverseBits(11111111111111111111111111111101));