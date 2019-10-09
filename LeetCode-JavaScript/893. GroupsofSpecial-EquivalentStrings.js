/**
 * @param {string[]} A
 * @return {number}
 */
const numSpecialEquivGroups = function (A) {
    const strSet = new Set();
    A.forEach(item => {
        const oddArr = [];
        const evenArr = [];
        for (let i = 0; i < item.length; i++) {
            if (i % 2 === 0) {
                evenArr.push(item[i]);
            } else {
                oddArr.push(item[i]);
            }
        }
        evenArr.sort();
        oddArr.sort();
        strSet.add(evenArr + oddArr);
    })
    return strSet.size;
};

console.log(numSpecialEquivGroups(['a', 'b', 'c', 'a', 'c', 'c']));
console.log(numSpecialEquivGroups(['aa', 'bb', 'ab', 'ba']));
console.log(numSpecialEquivGroups(['abc', 'acb', 'bac', 'bca', 'cab', 'cba']));
console.log(numSpecialEquivGroups(['abcd', 'cdab', 'adcb', 'cbad']));
console.log(numSpecialEquivGroups(['abc','acb','bac','bca','cab','cba']));
