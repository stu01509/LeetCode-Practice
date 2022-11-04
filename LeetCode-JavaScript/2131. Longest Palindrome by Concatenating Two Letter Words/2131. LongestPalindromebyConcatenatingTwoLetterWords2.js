/**
 * @param {string[]} words
 * @return {number}
 */
const longestPalindrome = function (words) {
    let result = 0;
    let isMiddle = false;
    const count = new Map();

    for (const word of words) {
        const wordCount = count.get(word);
        if (wordCount) {
            count.set(word, wordCount + 1);
        } else {
            count.set(word, 1);
        }
    }

    for (const [key, value] of count) {
        const word = key
        const wordCount = value;

        if (word.charAt(0) === word.charAt(1)) {
            if (wordCount % 2 === 0) {
                result += wordCount;
            } else {
                result += wordCount - 1;
                isMiddle = true;
            }
        } else if (word.charAt(0) < word.charAt(1)) {
            const reverseWord = word.charAt(1) + word.charAt(0);
            if (count.get(reverseWord)) {
                result += 2 * Math.min(wordCount, count.get(reverseWord));
            }
        }
    }
    if (isMiddle) {
        result++;
    }

    return result * 2;
};

console.log(longestPalindrome(["lc", "cl", "gg"]));
console.log(longestPalindrome(["ab", "ty", "yt", "lc", "cl", "ab"]));
console.log(longestPalindrome(["cc", "ll", "xx"]));