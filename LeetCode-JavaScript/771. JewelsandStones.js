/**
 * @param {string} J
 * @param {string} S
 * @return {number}
 */
const numJewelsInStones = function(J, S) {
    let count = 0;
    const numsMap = new Map();
    for (let i = 0; i < J.length; i++) {
        numsMap.set(J[i], 0);
    }
    for (let j = 0; j < S.length; j++) {
        if (numsMap.get(S[j]) !== undefined) {
            count++;
        }
    }    
    return count;
};

console.log(numJewelsInStones('aA', 'aAAbbbb'));
console.log(numJewelsInStones('z', 'ZZ'));
