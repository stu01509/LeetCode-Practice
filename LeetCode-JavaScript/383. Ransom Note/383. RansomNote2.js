/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
 const canConstruct = function(ransomNote, magazine) {
    const magazineMap = new Map();
    
    for (let i = 0; i < magazine.length; i++) {
        if (magazineMap.get(magazine[i])) {
            magazineMap.set(magazine[i], magazineMap.get(magazine[i]) + 1);
        } else {
            magazineMap.set(magazine[i], 1);
        }
    }

    for (let i = 0; i < ransomNote.length; i++) {
        if (magazineMap.get(ransomNote[i]) === 0 || !magazineMap.get(ransomNote[i])) {
            return false;
        } else {
            magazineMap.set(ransomNote[i], magazineMap.get(ransomNote[i]) - 1);
        }
    }
    return true;
};

console.log(canConstruct('a', 'b'));
console.log(canConstruct('aa', 'ab'));
console.log(canConstruct('aa', 'aab'));