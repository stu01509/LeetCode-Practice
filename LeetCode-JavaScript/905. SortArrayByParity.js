/**
 * @param {number[]} A
 * @return {number[]}
 */
const sortArrayByParity = function(A) {
    const oddArr = [];
    const evenArr = [];
    for (let i = 0; i < A.length; i++) {
        if (A[i] % 2 === 0) {
            evenArr.push(A[i]);
        } else {
            oddArr.push(A[i]);
        }
    }
    return evenArr.concat(oddArr);
};

console.log(sortArrayByParity([3,1,2,4]));
