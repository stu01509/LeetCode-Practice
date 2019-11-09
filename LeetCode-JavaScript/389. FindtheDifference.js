/**
 * @param {string} s
 * @param {string} t
 * @return {character}
 */
const findTheDifference = function (s, t) {
    const strMap = new Map();
    for (let i = 0; i < s.length; i++) {
        if (strMap.get(s[i]) === undefined) {
            strMap.set(s[i], 1);
        } else {
            strMap.set(s[i], strMap.get(s[i]) + 1);
        }
    }
    for (let i = 0; i < t.length; i++) {
        if (strMap.get(t[i]) === undefined || strMap.get(t[i]) === 0) {
            return t[i];
        } else {
            strMap.set(t[i], strMap.get(t[i]) - 1);
        }
    }
};

console.log(findTheDifference('abcd', 'abcde'));
console.log(findTheDifference('a', 'aa'));