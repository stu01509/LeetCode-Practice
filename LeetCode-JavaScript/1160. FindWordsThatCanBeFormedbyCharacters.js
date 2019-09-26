/**
 * @param {string[]} words
 * @param {string} chars
 * @return {number}
 */
const countCharacters = function (words, chars) {
    const strArr = chars.split('');
    let count = 0;
    for (let i = 0; i < words.length; i++) {
        const tempStrArr = [...strArr];
        let isCanBeFormed = true;
        for (let j = 0; j < words[i].length; j++) {
            if (tempStrArr.includes(words[i][j])) {
                tempStrArr.splice(tempStrArr.indexOf(words[i][j]), 1);
            } else {
                isCanBeFormed = false;
                break;
            }
        }
        if (isCanBeFormed) {
            count += words[i].length;
        }
    }
    return count;
};

console.log(countCharacters(['cat','bt','hat','tree'], 'atach'));
console.log(countCharacters(['hello', 'world', 'leetcode'], 'welldonehoneyr'));