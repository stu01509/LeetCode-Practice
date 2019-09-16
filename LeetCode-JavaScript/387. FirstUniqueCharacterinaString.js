/**
 * @param {string} s
 * @return {number}
 */
const firstUniqChar = function(s) {
    const strObj = {};
    for (let i = 0; i < s.length; i++) {
        if (strObj[s[i]] === undefined) {
            strObj[s[i]] = 1;
        } else {
            strObj[s[i]]++;
        }
    }
    const result = Object.entries(strObj)
    let indexStr;
    for (let i = 0; i < result.length; i++) {
        if (result[i][1] === 1) {            
            indexStr =  result[i][0];
            break;
        }
    }
    return s.indexOf(indexStr);    
};

console.log(firstUniqChar('leetcode'));
console.log(firstUniqChar('loveleetcode'));
