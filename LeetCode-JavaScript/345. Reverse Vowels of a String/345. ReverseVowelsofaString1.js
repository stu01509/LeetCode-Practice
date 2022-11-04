/**
 * @param {string} s
 * @return {string}
 */
const reverseVowels = function (s) {
    const vowelsMap = new Set(['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U']);
    const vowels = [];
    const vowelsIndex = [];
    let result = '';

    for (let i = 0; i < s.length; i++) {
        if (vowelsMap.has(s[i])) {
            vowels.push(s[i]);
            vowelsIndex.push(i);
        }
    }

    vowels.reverse();

    for (let i = 0; i < s.length; i++) {
        if (i === vowelsIndex[0]) {
            result += vowels[0];
            vowels.shift();
            vowelsIndex.shift();
        } else {
            result += s[i];
        }
    }

    return result;
};

console.log(reverseVowels('hello'));
console.log(reverseVowels('leetcode'));