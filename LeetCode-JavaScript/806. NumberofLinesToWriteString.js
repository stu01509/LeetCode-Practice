/**
 * @param {number[]} widths
 * @param {string} S
 * @return {number[]}
 */
const numberOfLines = function (widths, S) {
    let lines = 1;
    let block = 0;
    for (let i = 0; i < S.length; i++) {
        const charWidth = widths[S[i].charCodeAt() - 97];
        if (block + charWidth > 100) {
            lines++;
            block = 0;
        }
        block += charWidth;
    }
    return [lines, block];
};

console.log(numberOfLines([10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10], 'abcdefghijklmnopqrstuvwxyz'))
console.log(numberOfLines([4, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10], 'bbbcccdddaaa'))