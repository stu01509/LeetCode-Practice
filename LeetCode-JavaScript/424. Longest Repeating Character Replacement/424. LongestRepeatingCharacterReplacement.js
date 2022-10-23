/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
 const characterReplacement = function (s, k) {
    if (s.length < 2) {
        return s.length;
    }

    const chars = s.split('');
    const freq = new Array(26).fill(0);
    let maxCount = 0;
    let left = 0;
    let right = 0;
    
    while (right < s.length) {
        freq[chars[right].charCodeAt() - 65]++;
        maxCount = Math.max(maxCount, freq[chars[right].charCodeAt() - 65]);
        right++;

        if (right - left > maxCount + k) {
            freq[chars[left].charCodeAt() - 65]--;
            left++;
        }
    }
    return right - left;
};

console.log(characterReplacement('ABAB', 2));
console.log(characterReplacement('AABABBA', 1));