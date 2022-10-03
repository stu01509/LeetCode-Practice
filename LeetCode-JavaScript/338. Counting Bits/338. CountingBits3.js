/**
 * @param {number} n
 * @return {number[]}
 */
const countBits = function (n) {
    const result = [0];

    for (let i = 1; i <= n; i++) {
        result.push(result[i >> 1] + (i & 1));
    }

    return result;
}

console.log(countBits(4));
console.log(countBits(5));

console.log(countBits(4));
console.log(countBits(5));