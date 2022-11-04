/**
 * @param {string} s
 * @return {string}
 */
const reverseVowels = function (s) {
    const splitS = s.split('');
    const vowelsMap = new Set(['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U']);
    let left = 0;
    let right = splitS.length - 1;

    while (left < right) {
        while (left < splitS.length && !vowelsMap.has(splitS[left])) {
            left++;
        }
        while (right >= 0 && !vowelsMap.has(splitS[right])) {
            right--;
        }

        if (left < right) {
            [splitS[left], splitS[right]] = [splitS[right], splitS[left]]
            ++left;
            --right;
        }
    }

    return splitS.join('');
};

console.log(reverseVowels('hello'));
console.log(reverseVowels('leetcode'));