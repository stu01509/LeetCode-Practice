/**
 * @param {number} num
 * @return {boolean}
 */
const checkPerfectNumber = function (num) {
    let sum = 0;
    for (let i = 1; i < num; i++) {
        if (num % i === 0) {
            sum += i;
        }
    }
    return num === sum;
};

console.log(checkPerfectNumber(28));
console.log(checkPerfectNumber(7));