/**
 * @param {string} str
 * @return {string}
 */
const toLowerCase = function (str) {
    let strArr = str.split('');
    for (let i = 0; i < strArr.length; i++) {
        if (65 <= strArr[i].charCodeAt() && strArr[i].charCodeAt() <= 90) {
            strArr[i] = String.fromCharCode(strArr[i].codePointAt() + 32);
        }
    }
    return strArr.join('')
};