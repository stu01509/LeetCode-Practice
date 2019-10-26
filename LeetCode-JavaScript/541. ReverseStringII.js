/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
const reverseStr = function (s, k) {
    let result = '';
    for (let i = 0; i < s.length; i += k) {
        if (i % (k * 2) === 0) {
            result += s.substring(i, i + k).split('').reverse().join('');
        } else {
            result += s.substring(i, i + k);
        }
    }
    return result;
};
console.log(reverseStr('abcdefg', 2));
console.log(reverseStr('abcdef', 3));