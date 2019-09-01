/**
 * @param {string} s
 * @return {number}
 */
const lengthOfLastWord = function(s) {
    if (s.length === 0 || s.trim() === '') {
        return 0;
    }
    const splitArr = s.split(' ');
    for (let i = splitArr.length - 1; i >= 0; i--) {
        if (splitArr[i].length !== 0) {
            return splitArr[i].length;
        }        
    }
};
console.log(lengthOfLastWord('Hello World'));
console.log(lengthOfLastWord('a '));
console.log(lengthOfLastWord(' '));
