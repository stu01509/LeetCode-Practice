/**
 * @param {string} s
 * @return {string}
 */
const reverseWords = function(s) {
    const splitArr = s.split(' ');
    let resultStr = '';
    for (let i = 0; i < splitArr.length; i++) {
        for (let j = splitArr[i].length - 1; j >= 0; j--) {
            // console.log(splitArr[i][j]);
            resultStr += splitArr[i][j];
        }
        if (i !== splitArr.length - 1) {
            resultStr += ' ';
        }
    }
    return resultStr;
};

console.log(reverseWords("Let's take LeetCode contest"));
