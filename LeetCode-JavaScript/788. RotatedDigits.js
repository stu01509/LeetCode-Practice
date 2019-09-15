/**
 * @param {number} N
 * @return {number}
 */
const rotatedDigits = function(N) {
    let count = 0;
    for (let i = 1; i <= N; i++) {
        if (isGood(i)) {
            count++;
        }
    }
    return count;
};

const isGood = function(num) {
    let flag = false;
    for (let i = 0; i < num.toString().length; i++) {
        const strNum = num.toString()[i];    
        if (strNum === '3' || strNum === '4' || strNum === '7') {
            return false;
        }
        if (strNum === '2' || strNum === '5' || strNum === '6' || strNum === '9') {
            flag = true;
        }
    }
    return flag;
}

console.log(rotatedDigits(10));
console.log(rotatedDigits(857));