/**
 * @param {string[]} words
 * @return {string}
 */
const firstPalindrome = function (words) {
    for (let i = 0; i < words.length; i++) {
        let left = 0;
        let right = words[i].length - 1;

        while (left < right) {
            if (words[i][left] !== words[i][right]) {
                break;
            }
            left++;
            right--;
        }
        
        if (left >= right) {
            return words[i];
        }
    }
    return '';
};

console.log(firstPalindrome(["abc", "car", "ada", "racecar", "cool"]));
console.log(firstPalindrome(["notapalindrome", "racecar"]));
console.log(firstPalindrome(["def", "ghi"]));