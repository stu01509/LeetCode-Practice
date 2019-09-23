/**
 * @param {string} S
 * @return {number[]}
 */
const diStringMatch = function(S) {
    const result = [];
    let min = 0;
    let max = S.length;
    for (let i = 0; i < S.length; i++) {
        if (S[i] === 'I') {
            result.push(min);
            min++;
        } else {
            result.push(max);
            max--;
        }
    }
    result.push(min);
    return result;
};

console.log(diStringMatch('IDID'));
console.log(diStringMatch('III'));
console.log(diStringMatch('DDI'));