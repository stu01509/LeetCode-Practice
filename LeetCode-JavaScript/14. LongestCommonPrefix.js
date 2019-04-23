/**
 * @param {string[]} strs
 * @return {string}
 */
const longestCommonPrefix = function (strs) {
    if (strs === null || strs.length === 0) return "";
    const strsSort = strs.sort();
    let first = strsSort[0];
    let last = strsSort[strsSort.length - 1];

    while (last.indexOf(first) != 0) {
        first = first.substring(0, first.length - 1);
    }
    return first;
};

console.log(longestCommonPrefix(["flower", "flow", "flight"]))