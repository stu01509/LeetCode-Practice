/**
 * @param {number} num
 * @return {string}
 */
const intToRoman = function (num) {
    const one = ['', 'I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX'];
    const ten = ['', 'X', 'XX', 'XXX', 'XL', 'L', 'LX', 'LXX', 'LXXX', 'XC'];
    const hun = ['', 'C', 'CC', 'CCC', 'CD', 'D', 'DC', 'DCC', 'DCCC', 'CM'];
    const tho = ['', 'M', 'MM', 'MMM'];
    return tho[Math.floor(num / 1000)] + hun[Math.floor(num % 1000 / 100)] + ten[Math.floor(num % 100 / 10)] + one[Math.floor(num % 10)];
};