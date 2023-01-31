/**
 * @param {number} n
 * @return {number}
 */
const tribonacci = function(n) {
    if (n === 0) {
        return 0;
    }
    if (n === 1 || n === 2) {
        return 1;
    }

    let t0 = 0;
    let t1 = 1;
    let t2 = 1;
    let result = 0;

    for (let i = 2; i < n; i++) {
        result = t0 + t1 + t2;
        t0 = t1;
        t1 = t2;
        t2 = result;
    }

    return result;
};

console.log(tribonacci(4));
console.log(tribonacci(25));