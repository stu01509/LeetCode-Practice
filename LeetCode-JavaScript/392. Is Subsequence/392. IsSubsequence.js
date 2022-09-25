/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
const isSubsequence = function (s, t) {
    if (s.length > t.length) {
        return false;
    }

    let pointer = 0;

    for (let i = 0; i < t.length; i++) {
        if (s[pointer] === t[i]) {
            pointer++;
        }
    }
    return pointer === s.length;
};

console.log(isSubsequence('abc', 'ahbgdc'));
console.log(isSubsequence('axc', 'ahbgdc'));