/**
 * @param {string} pattern
 * @param {string} s
 * @return {boolean}
 */
const wordPattern = function (pattern, s) {
    const words = s.split(' ');
    const patternMap = new Map();
    const wordMap = new Map();

    if (pattern.length !== words.length) {
        return false;
    }

    for (let i = 0; i < pattern.length; i++) {
        patternMap.set(pattern[i], words[i]);
        wordMap.set(words[i], pattern[i]);
    }
    for (let i = 0; i < pattern.length; i++) {
        if (pattern[i] !== wordMap.get(words[i]) || patternMap.get(pattern[i]) !== words[i]) {
            return false;
        }
    }
    return true;
};

console.log(wordPattern('abba', 'dog cat cat dog'));
console.log(wordPattern('abba', 'dog cat cat fish'));
console.log(wordPattern('aaaa', 'dog cat cat dog'));