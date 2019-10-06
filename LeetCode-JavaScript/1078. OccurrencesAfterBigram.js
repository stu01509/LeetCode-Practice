/**
 * @param {string} text
 * @param {string} first
 * @param {string} second
 * @return {string[]}
 */
const findOcurrences = function(text, first, second) {
    const textArr = text.split(' ');
    const result = [];
    for (let i = 1; i < textArr.length - 1; i++) {
        if (textArr[i - 1] === first && textArr[i] === second) {
            result.push(textArr[i + 1]);
        }
    }
    return result;
};

console.log(findOcurrences('alice is a good girl she is a good student', 'a', 'good'));
console.log(findOcurrences('we will we will rock you', 'we', 'will'));
