/**
 * @param {number} n
 * @return {boolean}
 */
const isStrictlyPalindromic = function (n) {
    for (let i = 2 ; i <= n - 2; i++) {
        const baseStr = n.toString(i);
        if (!isPalindrome(baseStr)) {
            return false;
        }
    }
    return true;
};

const isPalindrome = (text) => {
  return text === text.split('').reverse().join('');


console.log(isStrictlyPalindromic(9));
console.log(isStrictlyPalindromic(4));