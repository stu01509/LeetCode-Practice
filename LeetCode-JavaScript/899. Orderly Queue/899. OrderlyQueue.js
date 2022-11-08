/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
const orderlyQueue = function (s, k) {
    if (k >= 2) {
        return s.split('').sort().join('');
    }
    let result = s;
    for (let i = 0; i < s.length; i++) {
        s = s.substring(1) + s.substring(0, 1);
        if (result > s) {
            result = s;
        }
    }
    return result;
};

console.log(orderlyQueue('cba', 1));
console.log(orderlyQueue('baaca', 3));