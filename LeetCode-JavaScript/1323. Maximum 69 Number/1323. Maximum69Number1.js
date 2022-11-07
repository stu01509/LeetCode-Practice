/**
 * @param {number} num
 * @return {number}
 */
const maximum69Number  = function(num) {
    return Number(num.toString().replace('6', '9'));
}

console.log(maximum69Number(9669));
console.log(maximum69Number(9996));
console.log(maximum69Number(9999));