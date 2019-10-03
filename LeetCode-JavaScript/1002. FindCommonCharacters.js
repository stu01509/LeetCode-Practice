/**
 * @param {string[]} A
 * @return {string[]}
 */
const commonChars = function (A) {
    const result = [];
    const allCharArr = new Array(26).fill(0);
    for (let i = 0; i < A[1].length; i++) {
        allCharArr[A[0][i].charCodeAt() - 97]++;
    }
    for (let i = 0; i < A.length; i++) {
        const charArr = new Array(26).fill(0);

        for (let j = 0; j < A[i].length; j++) {
            charArr[A[i][j].charCodeAt() - 97]++;
        }
        for (let j = 0; j < allCharArr.length; j++) {
            allCharArr[j] = Math.min(allCharArr[j], charArr[j]);
        }
    }
    for (let i = 0; i < allCharArr.length; i++) {        
        for (let j = 0; j < allCharArr[i]; j++) {
            result.push(String.fromCharCode(i + 97));
        }
    }
    return result;
};

console.log(commonChars(['bella', 'label', 'roller']));
console.log(commonChars(['cool', 'lock', 'cook']));
console.log(commonChars(['acabcddd', 'bcbdbcbd', 'baddbadb', 'cbdddcac', 'aacbcccd', 'ccccddda', 'cababaab', 'addcaccd']));