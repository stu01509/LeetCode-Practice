/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
const isAnagram = function(s, t) {
    const strMap = {};
    for (let i = 0; i < s.length; i++) {
        if (!strMap[s[i]]) {
            strMap[s[i]] = 1;
        } else {
            strMap[s[i]]++;
        }        
    }

    for (let i = 0; i < t.length; i++) {
        strMap[t[i]]--;
    }

    for (const key in strMap) {
        if (strMap[key] !== 0) {
            return false;
        }
    }
    return true;
};

console.log(isAnagram('anagram', 'nagaram'));
console.log(isAnagram('rat', 'cat'));