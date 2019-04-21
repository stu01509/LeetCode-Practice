/**
 * @param {number} x
 * @return {number}
 */ 
const reverse = function(x) {
    const isNegative = x > 0 ? 1 : -1;
    const strNum = Math.abs(x) + '';
    const result = (strNum.split('').reverse().join('') * isNegative) - 0;
    if (result < -2147483648 || result > 2147483647) return 0;
    return result;
};