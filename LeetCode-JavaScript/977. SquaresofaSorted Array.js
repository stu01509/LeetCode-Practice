/**
 * @param {number[]} A
 * @return {number[]}
 */
const sortedSquares = function(A) {
    for (let i = 0; i < A.length; i++) {
        A[i] = A[i] * A[i];
    }
    return A.sort(customSort);
};

const customSort = (a, b) => {
    return a - b;
}

console.log(sortedSquares([-4,-1,0,3,10]));
console.log(sortedSquares([-7,-3,2,3,11]));
