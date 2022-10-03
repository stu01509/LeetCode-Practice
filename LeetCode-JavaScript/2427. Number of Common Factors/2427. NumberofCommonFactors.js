/**
 * @param {number} a
 * @param {number} b
 * @return {number}
 */
const commonFactors = function (a, b) {
    const min = Math.min(a, b);
    let result = 0;

    for (let i = 1; i <= min; i++) {
        if (a % i === 0 && b % i === 0) {
            result++;
        }
    }
    return result;
};

console.log(commonFactors(12, 6));
console.log(commonFactors(25, 30));