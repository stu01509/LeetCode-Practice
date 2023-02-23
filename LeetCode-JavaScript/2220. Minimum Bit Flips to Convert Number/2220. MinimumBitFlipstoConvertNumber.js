/**
 * @param {number} start
 * @param {number} goal
 * @return {number}
 */
const minBitFlips = function (start, goal) {
    const xor = (start ^ goal).toString(2);
    const count = xor.split('0').join('').length;
    return count;
};

console.log(minBitFlips(10, 7));
console.log(minBitFlips(3, 4));