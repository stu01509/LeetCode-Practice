/**
 * @param {string} word
 * @return {boolean}
 */
const detectCapitalUse = function(word) {
    let count = 0;
    let isValid = false;
    for (let i = 0; i < word.length; i++) {
        if (65 <= word[i].charCodeAt() && word[i].charCodeAt() <= 90) {
            count++;
        }
    }
    if (count === word.length || count === 0 ||
        (count === 1 && 65 <= word[0].charCodeAt() && word[0].charCodeAt() <= 90)) {
        isValid = true;
    }
    return isValid;
};

console.log(detectCapitalUse('USA'));
console.log(detectCapitalUse('leetcode'));
console.log(detectCapitalUse('Leetcode'));
console.log(detectCapitalUse('LeetDcode'));
console.log(detectCapitalUse('ffffffffffffffffffffF'));
