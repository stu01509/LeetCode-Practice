/**
 * @param {string} s
 * @return {number}
 */
const countSubstrings = function (s) {
    let result = 0;

    for (let i = 0; i < s.length; i++) {
        let left = i;
        let right = i;

        while (left >= 0 && right < s.length && s[left] === s[right]) {
            result++;
            left--;
            right++;
        }

        left = i;
        right = i + 1;

        while (left >= 0 && right < s.length && s[left] === s[right]) {
            result++;
            left--;
            right++;
        }
    }

    return result;
};

console.log(countSubstrings('abc'));
console.log(countSubstrings('aaa'));