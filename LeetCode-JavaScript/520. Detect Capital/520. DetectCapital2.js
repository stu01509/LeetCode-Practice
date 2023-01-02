/**
 * @param {string} word
 * @return {boolean}
 */
const detectCapitalUse = function(word) {
    if (word === word.toUpperCase()) {
        return true;
    }
    if (word === word.toLowerCase()) {
        return true;
    }
    if (
        word[0] === word[0].toUpperCase() &&
        word.substring(1) === word.substring(1).toLowerCase()
    ) {
        return true;
    }

    return false;
};

console.log(detectCapitalUse('USA'));
console.log(detectCapitalUse('leetcode'));
console.log(detectCapitalUse('Leetcode'));
console.log(detectCapitalUse('LeetDcode'));
console.log(detectCapitalUse('ffffffffffffffffffffF'));