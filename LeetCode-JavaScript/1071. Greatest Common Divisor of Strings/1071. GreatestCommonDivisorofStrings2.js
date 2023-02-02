/**
 * @param {string} str1
 * @param {string} str2
 * @return {string}
 */
const gcdOfStrings = function (str1, str2) {
    if (str1.length < str2.length) {
        return gcdOfStrings(str2, str1);
    }

    if (str2.length === 0) {
        return str1;
    }

    if (str1.substring(0, str2.length) !== str2) {
        return '';
    }

    return gcdOfStrings(str1.substring(str2.length), str2);
};

console.log(gcdOfStrings('ABCABC', 'ABC'));
console.log(gcdOfStrings('ABABAB', 'ABAB'));
console.log(gcdOfStrings('LEET', 'CODE'));