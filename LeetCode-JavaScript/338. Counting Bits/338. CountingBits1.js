/**
 * @param {number} n
 * @return {number[]}
 */
const countBits = function (n) {
    const result = [];

    for (let i = 0; i <= n; i++) {
        const binary = i.toString(2);
        const count = binary.split('1').length - 1;
        result.push(count);
    }

    return result;
};

console.log(countBits(4));
console.log(countBits(5));