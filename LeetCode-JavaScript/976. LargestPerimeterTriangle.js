/**
 * @param {number[]} A
 * @return {number}
 */
const largestPerimeter = function (A) {
    A.sort(function (a, b) {
        return a - b
    });
    for (let i = A.length - 2; i >= 0; i--) {
        if (A[i] + A[i + 1] > A[i + 2]) {
            return A[i] + A[i + 1] + A[i + 2];
        }
    }
    return 0;
};

console.log(largestPerimeter([2, 1, 2]));
console.log(largestPerimeter([1, 2, 1]));
console.log(largestPerimeter([3, 2, 3, 4]));
console.log(largestPerimeter([3, 6, 2, 3]));