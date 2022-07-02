/**
 * @param {string[]} strs
 * @return {string[][]}
 */
const groupAnagrams = function (strs) {
    const map = new Map();
    for (let i = 0; i < strs.length; i++) {
        const key = strs[i].split('').sort().join('');
        if (map.has(key)) {
            map.set(key, [...map.get(key), strs[i]]);
        } else {
            map.set(key, [strs[i]]);
        }
    }
    return Array.from(map.values());
};

console.log(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]));
console.log(groupAnagrams([""]));
console.log(groupAnagrams(["a"]));