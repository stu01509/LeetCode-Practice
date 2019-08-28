/**
 * @param {number} n
 * @return {string}
 */
const countAndSay = function(n) {
    if (n === 1) {
        return '1';
    }

    let result = '1';
    
    for (let i = 1; i < n; i++) {
        let tempResult = '';
        let count = 1;
        for (let j = 0; j < result.length; j++) {
            if (result[j] === result[j + 1]) {
                count++;                
            } else {
               tempResult += count;
               tempResult += result[j];               
               count = 1;
            }            
        }
        result = tempResult;
    }
    return result;
};

console.log(countAndSay(1));
console.log(countAndSay(4));
