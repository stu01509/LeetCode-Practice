/**
 * @param {string} S
 * @param {character} C
 * @return {number[]}
 */
const shortestToChar = function(S, C) {
    const result = [];
    const temp1 = [];
    const temp2 = [];
    let index1 = Number.MAX_VALUE;
    for (let i = 0; i < S.length; i++) {
        if (S[i] === C) {
            index1 = 0;
        } else if (index1 !== Number.MAX_VALUE) {
            index1++;
        }
        temp1[i] = index1;
    }
    let index2 = Number.MAX_VALUE;
    for (let i = S.length - 1; i >= 0; i--) {        
        if (S[i] === C) {
            index2 = 0;
        } else if (index2 !== Number.MAX_VALUE) {
            index2++;
        }
        temp2[i] = index2;
    }
    for (let i = 0; i < S.length; i++) {
        result[i] = Math.min(temp1[i], temp2[i]);
    }
    return result;
};

console.log(shortestToChar('loveleetcode', 'e'));