/**
 * @param {string[]} A
 * @return {number}
 */
const minDeletionSize = function(A) {
    let count = 0;
    for (let i =  0; i < A[0].length; i++) {
        let charCode = 0;
        let isDecreasing = true;
        for (let j = 1; j < A.length; j++) {
            charCode = A[j - 1][i];
            if (charCode <= A[j][i]) {
                charCode = A[j][i];
            } else {
               isDecreasing = false;
            }
        }
        if (!isDecreasing) {
            count++;
        }
    }
    return count;
};

console.log(minDeletionSize(["cba","daf","ghi"]));
console.log(minDeletionSize(["a","b"]));
console.log(minDeletionSize(["zyx","wvu","tsr"]));
console.log(minDeletionSize(["rrjk","furt","guzm"]));
