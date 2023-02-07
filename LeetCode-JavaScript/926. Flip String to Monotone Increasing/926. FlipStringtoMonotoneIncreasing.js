/**
 * @param {string} s
 * @return {number}
 */
const minFlipsMonoIncr = function (s) {
    let ones = 0;
    let zeros = 0;
    let total = 0;

    for (let i = 0; i < s.length; i++) {
        if (s[i] === '1') {
            ones++;
        } else {
            zeros++;
        }

        if (zeros > ones) {
            total += ones;
            ones = 0;
            zeros = 0;
        }
    }
    return total + zeros;
};

console.log('00110');
console.log('010110');
console.log('00011000');