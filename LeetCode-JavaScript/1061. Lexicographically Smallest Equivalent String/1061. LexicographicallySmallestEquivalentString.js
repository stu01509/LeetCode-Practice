/**
 * @param {string} s1
 * @param {string} s2
 * @param {string} baseStr
 * @return {string}
 */
const smallestEquivalentString = function (s1, s2, baseStr) {
    const graph = [];
    for (let i = 0; i < 26; i++) {
        graph[i] = i;
    }

    for (let i = 0; i < s1.length; i++) {
        const s1Index = s1[i].charCodeAt() - 97;
        const s2Index = s2[i].charCodeAt() - 97;

        const s1Result = find(graph, s2Index);
        const s2Result = find(graph, s1Index);

        if (s1Result < s2Result) {
            graph[s2Result] = s1Result;
        } else {
            graph[s1Result] = s2Result;
        }
    }

    let result = '';
    for (let i = 0; i < baseStr.length; i++) {
        result += String.fromCharCode(97 + find(graph, baseStr[i].charCodeAt() - 97));
    }
    return result;
};

const find = (graph, index) => {
    while (graph[index] !== index) {
        index = graph[index];
    }
    return index;
};

console.log(smallestEquivalentString('parker', 'morris', 'parser'));
console.log(smallestEquivalentString('hello', 'world', 'hold'));
console.log(smallestEquivalentString('leetcode', 'programs', 'sourcecode'));