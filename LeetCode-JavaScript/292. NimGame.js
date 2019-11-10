/**
 * @param {number} n
 * @return {boolean}
 */
const canWinNim = function(n) {
    if (n <= 3) {
        return true;
    }
    return n % 4 !== 0;
};

console.log(canWinNim(4));