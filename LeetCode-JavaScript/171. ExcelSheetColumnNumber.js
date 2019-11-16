/**
 * @param {string} s
 * @return {number}
 */
const titleToNumber = function(s) {
    const strArr = s.split('');
    let sum = 0;
    let ratio = 1;
    for (let i = strArr.length - 1; i >= 0; i--) {
        sum += ((strArr[i]).charCodeAt() - 64) * ratio;
        ratio *= 26;
    }
    return sum;
};

console.log(titleToNumber('A'));
console.log(titleToNumber('AB'));
console.log(titleToNumber('ZY'));
console.log(titleToNumber('AAA'));
