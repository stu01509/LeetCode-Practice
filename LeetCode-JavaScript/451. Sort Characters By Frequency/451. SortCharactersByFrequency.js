/**
 * @param {string} s
 * @return {string}
 */
const frequencySort = function (s) {
    const countMap = new Map();

    for (let i = 0; i < s.length; i++) {
        if (countMap.has(s[i])) {
            countMap.set(s[i], countMap.get(s[i]) + 1);
        } else {
            countMap.set(s[i], 1);
        }
    }

    const sortMap = new Map([...countMap].sort((a, b) => b[1] - a[1]));
    let result = '';
    sortMap.forEach((value, key) => result += key.repeat(value));
    return result;
};

console.log(frequencySort('tree'));
console.log(frequencySort('cccaaa'));
console.log(frequencySort('Aabb'));