/**
 * @param {number[][]} A
 * @return {number[][]}
 */
const flipAndInvertImage = function(A) {
    for (let i = 0; i < A.length; i++) {
        A[i] = A[i].reverse();
    }
    for (let i = 0; i < A.length; i++) {
        for (let j = 0; j < A[i].length; j++) {
            if (A[i][j] === 1) {
                A[i][j] = 0;
            } else if (A[i][j] === 0) {
                A[i][j] = 1;
            }
        }
    }
    return A;
};

console.log(flipAndInvertImage([[1,1,0],[1,0,1],[0,0,0]]));
console.log(flipAndInvertImage([[1,1,0,0],[1,0,0,1],[0,1,1,1],[1,0,1,0]]));
