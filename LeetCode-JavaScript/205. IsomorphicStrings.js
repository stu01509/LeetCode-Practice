/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
const isIsomorphic = function(s, t) {
    const objS = {};
    const objT = {};

    for (let i = 0; i < s.length; i++) {
        if (!objS[s[i]] && !objT[t[i]]) {
            objS[s[i]] = t[i];
            objT[t[i]] = s[i];
        } else {
            if (objS[s[i]] !== t[i]) {
                return false;
            }
        }
    }
    return true;
};

console.log(isIsomorphic('egg', 'add'));
console.log(isIsomorphic('paper', 'title'));