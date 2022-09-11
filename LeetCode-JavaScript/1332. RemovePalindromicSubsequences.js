/**
 * @param {string} s
 * @return {number}
 */
const removePalindromeSub = function (s) {
    if (s.length === 0) {
        return 0;
    }
    if (s.split('').reverse().join('') === s) {
        return 1;
    }
    return 2;
};

console.log(removePalindromeSub('ababa'));
console.log(removePalindromeSub('abb'));
console.log(removePalindromeSub('baabb'));