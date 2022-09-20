/**
 * @param {string} s
 * @return {number}
 */
const longestContinuousSubstring = function (s) {
    let result = 0;
    let temp = 1;

    for (let i = 1; i < s.length; i++) {
        const firstCharCode = s[i - 1].charCodeAt();
        const secondCharCode = s[i].charCodeAt() - 1;

        if (firstCharCode === secondCharCode) {
            temp++
        } else {
            result = Math.max(result, temp);
            temp = 1;
        }
    }
    result = Math.max(result, temp);
    return result;
};

console.log(longestContinuousSubstring('abacaba'));
console.log(longestContinuousSubstring('abcde'));