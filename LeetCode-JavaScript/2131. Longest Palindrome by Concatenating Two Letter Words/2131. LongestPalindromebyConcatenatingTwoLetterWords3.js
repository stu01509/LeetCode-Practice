/**
 * @param {string[]} words
 * @return {number}
 */
const longestPalindrome = function (words) {
    let odd = 0;
    let result = 0;
    const count = new Map();

    for (const word of words) {
        const wordCount = count.get(word);
        if (wordCount) {
            count.set(word, wordCount + 1);
        } else {
            count.set(word, 1);
        }
    }

    for (const word of words) {
        if (word.charAt(0) === word.charAt(1)) {
            result += Math.floor(count.get(word) / 2) * 2 * 2;
            odd = Math.max(odd, (count.get(word) % 2) * 2);
        } else if (word[0] < word[1]) {
            const reverseWord = word[1] + word[0];
            result += Math.min(count.get(word), count.get(reverseWord)) * 2 * 2;
        }
    }

    return result + odd;
};

console.log(longestPalindrome(["lc", "cl", "gg"]));
console.log(longestPalindrome(["ab", "ty", "yt", "lc", "cl", "ab"]));
console.log(longestPalindrome(["cc", "ll", "xx"]));