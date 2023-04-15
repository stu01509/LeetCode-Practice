/**
 * @param {string} s
 * @return {number}
 */
const longestPalindromeSubseq = function (s) {
    const dp = Array.from({
        length: s.length
    }, () => Array.from({ length: s.length}).fill(0));

    for (let left = 1; left <= s.length; left++) {
        for (let i = 0; i <= s.length - left; i++) {
            const j = i + left - 1;

            if (i === j) {
                dp[i][j] = 1;
                continue;
            }

            if (s[i] === s[j]) {
                dp[i][j] = dp[i + 1][j - 1] + 2;
            } else {
                dp[i][j] = Math.max(dp[i + 1][j], dp[i][j - 1]);
            }
        }
    }
    return dp[0][s.length - 1];
};

console.log(longestPalindromeSubseq('bbbab'));
console.log(longestPalindromeSubseq('cbbd'));