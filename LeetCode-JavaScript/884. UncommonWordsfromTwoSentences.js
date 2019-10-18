/**
 * @param {string} A
 * @param {string} B
 * @return {string[]}
 */
const uncommonFromSentences = function (A, B) {
    const strMap = new Map();
    const result = [];
    const splitA = A.split(' ');
    const splitB = B.split(' ');

    for (let i = 0; i < splitA.length; i++) {
        if (strMap.has(splitA[i])) {
            strMap.set(splitA[i], strMap.get(splitA[i]) + 1);
        } else {
            strMap.set(splitA[i], 1);
        }
    }

    for (let i = 0; i < splitB.length; i++) {
        if (strMap.has(splitB[i])) {
            strMap.set(splitB[i], strMap.get(splitB[i]) + 1);
        } else {
            strMap.set(splitB[i], 1);
        }
    }
    for (var [key, value] of strMap) {
        if (value === 1) {
            result.push(key);
        }
    }
    return result;
};

console.log(uncommonFromSentences('this apple is sweet', 'this apple is sour'));
console.log(uncommonFromSentences('apple apple', 'banana'));