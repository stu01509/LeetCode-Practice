/**
 * @param {number[]} A
 * @return {number}
 */
const peakIndexInMountainArray = function(A) {
    for (let i = 1; i < A.length - 1; i++) {
        if (A[i] > A[i + 1]) {
            return i;
        }
    }
    return 0;
};

console.log(peakIndexInMountainArray([0,1,0]));
console.log(peakIndexInMountainArray([0,2,1,0]));
