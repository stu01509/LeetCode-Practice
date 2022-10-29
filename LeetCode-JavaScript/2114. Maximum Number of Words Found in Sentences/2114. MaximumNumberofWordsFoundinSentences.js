/**
 * @param {string[]} sentences
 * @return {number}
 */
const mostWordsFound = function (sentences) {
    let result = 0;

    for (let i = 0; i < sentences.length; i++) {
        result = Math.max(result, sentences[i].split(' ').length);
    }

    return result;
};

console.log(mostWordsFound(["alice and bob love leetcode", "i think so too", "this is great thanks very much"]));
console.log(mostWordsFound(["please wait", "continue to fight", "continue to win"]));