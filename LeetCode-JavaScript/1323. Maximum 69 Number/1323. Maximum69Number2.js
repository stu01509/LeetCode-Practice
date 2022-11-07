/**
 * @param {number} num
 * @return {number}
 */
const maximum69Number = function (num) {
    if (Math.floor(num / 1000) === 6) {
        return num + 3000;
    }
    if (Math.floor(num / 100) % 10 === 6) {
        return num + 300;
    }
    if (Math.floor(num / 10) % 10 === 6) {
        return num + 30;
    }
    if (Math.floor(num / 1) % 10 === 6) {
        return num + 3;
    }
    return num;
}

console.log(maximum69Number(9669));
console.log(maximum69Number(9996));
console.log(maximum69Number(9999));