/**
 * @param {number[]} digits
 * @return {number[]}
 */
const plusOne = function(digits) {
    if (digits === null || digits.length === 0) {
        return digits;
    }
    let carry = 0;

    for (let i = digits.length - 1; i >= 0; i--) {

        digits[i] += carry;
        if (i === digits.length - 1) {
            digits[i] = digits[i]+ 1;
        }
        if (digits[i] === 10) {
            digits[i] = 0;
            carry = 1;
        } else {
            carry = 0;
        }        
    }
    if (carry === 1) {
        digits.unshift(carry);
    }
    return digits;
};

console.log(plusOne([9]));
console.log(plusOne([1,2,3]));
console.log(plusOne([4,3,2,1]));
console.log(plusOne([6, 1, 4, 5, 3, 9, 0, 1, 9, 5, 1, 8, 6, 7, 0, 5, 5, 4, 3]));