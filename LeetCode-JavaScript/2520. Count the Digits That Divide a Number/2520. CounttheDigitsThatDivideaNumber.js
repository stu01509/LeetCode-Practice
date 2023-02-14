/**
 * @param {number} num
 * @return {number}
 */
const countDigits = function (num) {
    const digits = num.toString().split('').map((digit) => Number(digit));
    let result = 0;

    for (let i = 0; i < digits.length; i++) {
        if (num % digits[i] === 0) {
            result++;
        }
    }
    return result;
};

console.log(countDigits(7));
console.log(countDigits(121));
console.log(countDigits(1248));