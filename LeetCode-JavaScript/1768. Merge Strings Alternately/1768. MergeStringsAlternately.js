/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */
const mergeAlternately = function(word1, word2) {
    let result = '';
    let index;
    for (index = 0; index < word1.length && word2.length; index++) {
        result += word1.charAt(index);
        result += word2.charAt(index);
    }
    if (word1.length > index) {
        result += word1.substr(index);
    } else {
        result += word2.substr(index);
    }
    return result;
};

console.log(mergeAlternately('abc', 'pqr'));
console.log(mergeAlternately('ab', 'pqrs'));
console.log(mergeAlternately('abcd', 'pq'));