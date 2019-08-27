/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
const strStr = function(haystack, needle) {
    if(!needle) {
        return 0;
    }
    if (haystack === null || needle === null ||
        needle.length > haystack.length) {
        return -1;
    }

    for (let i = 0; i < haystack.length; i++) {
        const splitStr = haystack.substr(i, needle.length);
        if (splitStr === needle) {           
            return i;
        }
    }
    return -1;
};

console.log(strStr('hello', 'll'));
console.log(strStr('aaaaa', 'bba'));
console.log(strStr('', ''));
