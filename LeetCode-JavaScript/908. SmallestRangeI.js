/**
 * @param {number[]} A
 * @param {number} K
 * @return {number}
 */
const smallestRangeI = function (A, K) {
    if (A.length === 1) {
        return 0;
    }
    let max = Number.MIN_VALUE;
    let min = Number.MAX_VALUE;

    for (let i = 0; i < A.length; i++) {
        if (max < A[i]) {
            max = A[i];
        }
        if (min > A[i]) {
            min = A[i];
        }
    }
    max -= K;
    min += K;
    if (min > max) {
        return 0;
    } else {
        return max - min;
    }
};