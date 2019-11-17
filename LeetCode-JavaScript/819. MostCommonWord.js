/**
 * @param {string} paragraph
 * @param {string[]} banned
 * @return {string}
 */
const mostCommonWord = function(paragraph, banned) {
    const paragraphArr = paragraph.toLowerCase().split(/\W+/);
    const strMap = new Map();
        
    paragraphArr.forEach((item) => {    
        if (!strMap.get(item)) {
            strMap.set(item, 1);
        } else {
            strMap.set(item, strMap.get(item) + 1);
        }
    });

    let count = 0;
    let result = '';
    strMap.forEach((key, value,) => {
        if (key > count && !banned.includes(value)) {
            result = value;
            count = key;
        }      
    });
    return result;
};

console.log(mostCommonWord('Bob hit a ball, the hit BALL flew far after it was hit.', ['hit']));