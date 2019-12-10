/**
 * @param {number} n
 * @return {boolean}
 */
const isHappy = function(n) {
    const numSet = new Set();
    let sum;
    n = n.toString();
    while(sum !== 1) {
        sum = 0;
        for (let i = 0; i < n.length; i++) {
            sum += n[i] * n[i];
        }
        n = sum + '';
        if (numSet.has(sum)) {
            return false;
        }
        numSet.add(sum);
    }
    return true;
};

console.log(isHappy(19));
console.log(isHappy(3));