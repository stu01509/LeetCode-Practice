/**
 * @param {string} word1
 * @param {string} word2
 * @return {boolean}
 */
const closeStrings = function (word1, word2) {
    if (word1.length !== word2.length) {
        return false;
    }

    const word1Set = [...new Set(word1)].sort().join('');
    const word2Set = [...new Set(word2)].sort().join('');

    if (word1Set !== word2Set) {
        return false;
    }

    const word1Freq = Array(26).fill(0);
    const word2Freq = Array(26).fill(0);

    for (let i = 0; i < word1.length; i++) {
        const charCodeIndex1 = word1[i].charCodeAt() - 'a'.charCodeAt();
        const charCodeIndex2 = word2[i].charCodeAt() - 'a'.charCodeAt();
        word1Freq[charCodeIndex1]++;
        word2Freq[charCodeIndex2]++;
    }

    return word1Freq.sort().join('') === word2Freq.sort().join('');
};

console.log(closeStrings('abc', 'bca'));
console.log(closeStrings('a', 'aa'));
console.log(closeStrings('cabbba', 'abbccc'));