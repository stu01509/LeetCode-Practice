/**
 * @param {number[]} A
 * @return {boolean}
 */
const isMonotonic = function (A) {
    if (A[0] < A[A.length - 1]) {
        for (let i = 1; i < A.length; i++) {
            if (A[i - 1] > A[i]) {
                return false;
            }
        }
    } else {
        for (let i = 1; i < A.length; i++) {
            if (A[i - 1] < A[i]) {
                return false;
            }
        }
    }
    return true;
};

console.log(isMonotonic([1, 2, 2, 3]));
console.log(isMonotonic([6, 5, 4, 4]));
console.log(isMonotonic([1, 3, 2]));
console.log(isMonotonic([1, 2, 4, 5]));
console.log(isMonotonic([1, 1, 1]));