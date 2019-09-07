/**
 * @param {number} left
 * @param {number} right
 * @return {number[]}
 */
const selfDividingNumbers = function(left, right) {
    const result = [];
    for (let i = left; i <= right; i++) {
        const num = i + ''.split('');
        let isZero = true;  
        for (let j = 0; j < num.length; j++) {
            if (i % num[j] !== 0) {
                isZero = false;
                break;
            }           
        }
        if (isZero) {
            result.push(i);
        }
    }
    return result;
};
console.log(selfDividingNumbers(1, 22));
