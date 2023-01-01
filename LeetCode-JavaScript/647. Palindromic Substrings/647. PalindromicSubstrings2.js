/**
 * @param {string} s
 * @return {number}
 */
const countSubstrings = function (s) {
    let result = 0;

    for (let i = 0; i < s.length; i++) {
        result += countPalindromic(s, i, i);
        result += countPalindromic(s, i, i + 1);
    }

    return result;
};

const countPalindromic = function (s, left, right) {
    let count = 0;    
    while (left >= 0 && right < s.length && s[left] === s[right]) {
        count++;
        left--;
        right++;
    }

    return count;
};

console.log(countSubstrings('abc'));
console.log(countSubstrings('aaa'));