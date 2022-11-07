/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
const canConstruct = function(ransomNote, magazine) {
    const strArr = [];
    for (let i = 0; i < magazine.length; i++) {
        const str = magazine[i];
        if (strArr[str] === undefined) {
            strArr[str] = 1;
        } else {
            strArr[str]++;
        }
    }
    for (let i = 0; i < ransomNote.length; i++) {
        const str = ransomNote[i];
        if (strArr[str] === undefined || --strArr[str] < 0) {
            return false;
        }
    }
    return true;
};

console.log(canConstruct('a', 'b'));
console.log(canConstruct('aa', 'ab'));
console.log(canConstruct('aa', 'aab'));
