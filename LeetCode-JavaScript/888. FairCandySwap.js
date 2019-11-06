/**
 * @param {number[]} A
 * @param {number[]} B
 * @return {number[]}
 */
const fairCandySwap = function (A, B) {
    const numASet = new Set();
    A.forEach(num => numASet.add(num));

    const sumA = A.reduce((prev, cur) => {
        return prev + cur;
    }, 0);
    const sumB = B.reduce((prev, cur) => {
        return prev + cur;
    }, 0);

    const diff = (sumA - sumB) / 2;
    
    for (let i = 0; i < B.length; i++) {
        if (numASet.has(B[i] + diff)) {
            return [B[i] + diff, B[i]];
        }
    }
};

console.log(fairCandySwap([1, 1], [2, 2]));
console.log(fairCandySwap([1, 2], [2, 3]));
console.log(fairCandySwap([2], [1, 3]));
console.log(fairCandySwap([1, 2, 5], [2, 4]));