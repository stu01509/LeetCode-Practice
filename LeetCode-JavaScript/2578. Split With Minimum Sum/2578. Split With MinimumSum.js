/**
 * @param {number} num
 * @return {number}
 */
const splitNum = function (num) {
    const sortedNum = num.toString().split('').sort((n1, n2) => n1 - n2).join('');
    let num1 = '';
    let num2 = '';

    for (let i = 0; i < sortedNum.length; i++) {
        if (i % 2 === 0) {
            num1 += sortedNum[i];
        } else {
            num2 += sortedNum[i];
        }
    }
    return Number(num1) + Number(num2);
};

console.log(splitNum(4325));
console.log(splitNum(687));