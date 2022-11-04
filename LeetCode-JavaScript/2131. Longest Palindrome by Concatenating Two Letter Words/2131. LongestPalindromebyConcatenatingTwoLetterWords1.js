/**
 * @param {string[]} words
 * @return {number}
 */
const longestPalindrome = function (words) {
    let result = 0;
    const count = new Map();

    for (const word of words) {
        const wordCount = count.get(word);
        const reverseWord = word[1] + word[0];

        if (count.get(reverseWord) > 0) {
            count.set(reverseWord, count.get(reverseWord) - 1);
            result += 4;
        } else if (wordCount) {
            count.set(word, wordCount + 1);
        } else {
            count.set(word, 1);
        }
    }

    for (const [word] of count) {
        if (word[0] === word[1] && count.get(word) > 0) {
            result += 2;
            break;
        }
    }
    return result;
};

console.log(longestPalindrome(["lc", "cl", "gg"]));
console.log(longestPalindrome(["ab", "ty", "yt", "lc", "cl", "ab"]));
console.log(longestPalindrome(["cc", "ll", "xx"]));