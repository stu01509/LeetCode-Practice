/**
 * @param {string} s
 * @return {number}
 */
const minDeletions = function (s) {
    let count = 0;
    const map = new Map();
    const set = new Set();
    
    for (let i = 0; i < s.length; i++) {
        if (map.has(s[i])) {
            map.set(s[i], map.get(s[i]) + 1);
        } else {
            map.set(s[i], 1);
        }
    }
    map.forEach((item) => {
        if (!set.has(item)) {
            set.add(item);
        } else {
            while (set.has(item) && item  > 0) {
                item--;
                count++;
            }
            set.add(item);
        }        
    })
    return count;
};

console.log(minDeletions('aab'));
console.log(minDeletions('aaabbbcc'));
console.log(minDeletions('ceabaacb'));
console.log(minDeletions('bbcebab'));
