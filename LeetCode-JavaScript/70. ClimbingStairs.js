/**
 * @param {number} n
 * @return {number}
 */
const cache = new Map();
cache.set(1, 1);
cache.set(2, 2);
const climbStairs = function(n) {
    if (cache.has(n)) {
        return cache.get(n);
    }
    if (!cache.has(n)) {
        cache.set(n, climbStairs(n - 1) + climbStairs(n - 2));
        return cache.get(n);
    }
};

console.log(climbStairs(2));
console.log(climbStairs(3));
console.log(climbStairs(45));
