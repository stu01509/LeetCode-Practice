/**
 * @param {number} x
 * @return {boolean}
 */
const isPalindrome = function (x) {
    if (x < 0) return false;
    if (x === (x + '').split('').reverse().join('') - 0) {
        return true;
    } else {
        return false;
    }
};

console.log(isPalindrome(8))