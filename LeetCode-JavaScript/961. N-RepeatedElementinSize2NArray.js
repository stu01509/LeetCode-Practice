/**
 * @param {number[]} A
 * @return {number}
 */
const repeatedNTimes = function(A) {
    const map = new Map();
    for (let i = 0; i < A.length; i++) {
        if (map.get(A[i]) === undefined) {
            map.set(A[i], '');
        } else {
            return A[i];
        }
    }
    return -1;
};

console.log(repeatedNTimes([1,2,3,3]));
console.log(repeatedNTimes([2,1,2,5,3,2]));
console.log(repeatedNTimes([5,1,5,2,5,3,5,4]));