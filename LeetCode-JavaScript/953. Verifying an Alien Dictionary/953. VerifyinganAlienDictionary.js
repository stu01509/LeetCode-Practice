/**
 * @param {string[]} words
 * @param {string} order
 * @return {boolean}
 */
const isAlienSorted = function (words, order) {
    const alienMapping = {};
    for (let i = 0; i < order.length; i++) {
        alienMapping[order[i]] = i;
    }

    const isValidate = (word1, word2) => {
        const len = Math.min(word1.length, word2.length);

        for (let i = 0; i < len; i++) {
            if (alienMapping[word1[i]] > alienMapping[word2[i]]) {
                return true;
            }
            if (alienMapping[word1[i]] < alienMapping[word2[i]]) {
                return false;
            }
        }
        return word1.length >= word2.length;
    }

    for (let i = 1; i < words.length; i++) {
        if (!isValidate(words[i], words[i - 1])) {
            return false;
        }
    }
    return true;
};

console.log(isAlienSorted(["hello", "leetcode"], "hlabcdefgijkmnopqrstuvwxyz"));
console.log(isAlienSorted(["word", "world", "row"], "worldabcefghijkmnpqstuvxyz"));
console.log(isAlienSorted(["apple", "app"], "abcdefghijklmnopqrstuvwxyz"));