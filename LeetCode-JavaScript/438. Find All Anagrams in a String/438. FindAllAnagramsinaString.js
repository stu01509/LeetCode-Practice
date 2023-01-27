/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
const findAnagrams = (s, p) => {
    const n = s.length;
    const l = p.length;

    const sMapping = new Array(26).fill(0);
    const pMapping = new Array(26).fill(0);
    const result = [];

    for (const char of p) {
        ++pMapping[char.charCodeAt() - 97];
    }

    for (let i = 0; i < n; i++) {
        if (i >= l) {
            --sMapping[s[i - l].charCodeAt() - 97];
        }
        ++sMapping[s[i].charCodeAt() - 97];
        if (sMapping.join('') === pMapping.join('')) {
            result.push(i + 1 - l);
        }
    }
    return result;
};

console.log(findAnagrams('cbaebabacd', 'abc'));
console.log(findAnagrams('abab', 'ab'));