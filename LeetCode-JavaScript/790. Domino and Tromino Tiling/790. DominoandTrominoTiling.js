/**
 * @param {number} n
 * @return {number}
 */
const numTilings = function (n) {
    const MOD = 1e9 + 7
    const dp = {
        1: 1,
        2: 2,
        3: 5,
    };

    for (let i = 4; i <= n; i++) {
        dp[i] = (2 * dp[i - 1] + dp[i - 3]) % MOD;
    }

    return dp[n];
};

console.log(numTilings(3));
console.log(numTilings(1));