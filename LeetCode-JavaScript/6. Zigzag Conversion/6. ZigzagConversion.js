/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
const convert = function (s, numRows) {
    if (numRows === 1) {
        return s;
    }

    let result = '';

    for (let i = 0; i < numRows; i++) {
        const increment = 2 * (numRows - 1);
        for (let j = i; j < s.length; j += increment) {
            result += s[j];
            if (i > 0 && i < numRows - 1 && j + increment - 2 * i < s.length) {
                result += s[j + increment - 2 * i];
            }
        }
    }

    return result;
};

console.log(convert('PAYPALISHIRING', 3));
console.log(convert('PAYPALISHIRING', 4));
console.log(convert('A', 1));