/**
 * @param {string} A
 * @param {string} B
 * @return {boolean}
 */
const rotateString = function(A, B) {
    if (A === B) {
        return true;
    }
    const aArr = A.split('');
    for (let i = 0; i < A.length; i++) {
        if (aArr.join('') === B) {
            return true;
        } else {
            const temp = aArr.shift();
            aArr.push(temp);
        }
    }
    return false;
};

console.log(rotateString('abcde', 'cdeab'));
console.log(rotateString('abcde', 'cdeab'));
console.log(rotateString('', ''));