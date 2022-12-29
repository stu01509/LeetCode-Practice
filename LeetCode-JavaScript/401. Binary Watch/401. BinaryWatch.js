/**
 * @param {number} turnedOn
 * @return {string[]}
 */
const readBinaryWatch = function (turnedOn) {
    const set = new Set();
    for (let h = 0; h < 12; h++) {
        for (let m = 0; m < 60; m++) {
            const hourBitCount = h.toString(2).split('1').length - 1;
            const minuteBitCount = m.toString(2).split('1').length - 1;
            if (hourBitCount + minuteBitCount === turnedOn) {
                set.add(`${h}:${m.toString().padStart(2, 0)}`);
            }            
        }
    }
    return Array.from(set);
};

console.log(readBinaryWatch(1));
console.log(readBinaryWatch(9));