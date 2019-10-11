/**
 * @param {string[]} words
 * @return {string[]}
 */
const findWords = function (words) {
    const row1 = 'qwertyuiop';
    const row2 = 'asdfghjkl';
    const row3 = 'zxcvbnm';
    const result = [];
    for (let i = 0; i < words.length; i++) {
        let isRow1 = true;
        let isRow2 = true;
        let isRow3 = true;
        for (let j = 0; j < words[i].length; j++) {
            const strChar = words[i][j].toLowerCase();
            if (!row1.includes(strChar)) {
                isRow1 = false;
            }
            if (!row2.includes(strChar)) {
                isRow2 = false;
            }
            if (!row3.includes(strChar)) {
                isRow3 = false;
            }
        }
        if (isRow1 || isRow2 || isRow3) {
            result.push(words[i]);
        }
    }
    return result;
};

console.log(findWords(['Hello', 'Alaska', 'Dad', 'Peace']));