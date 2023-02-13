/**
 * @param {string} s
 * @return {string}
 */
const sortSentence = function (s) {
    const sentences = s.split(' ').sort((s1, s2) => s1[s1.length - 1] - s2[s2.length - 1]);
    const result = [];

    for (let i = 0; i < sentences.length; i++) {
        result.push(sentences[i].substring(0, sentences[i].length - 1));
    }
    return result.join(' ');
};

console.log(sortSentence('is2 sentence4 This1 a3'));
console.log(sortSentence('Myself2 Me1 I4 and3'));