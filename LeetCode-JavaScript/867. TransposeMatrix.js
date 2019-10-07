/**
 * @param {number[][]} A
 * @return {number[][]}
 */
const transpose = function(A) {
    const result = [];
    for (let i = 0; i < A[0].length; i++) {
        const temp = [];
        for (let j = 0; j < A.length; j++) {
            temp.push(A[j][i]);
        }
        result.push(temp);
    }
    return result
};

console.log(transpose([[1,2,3],[4,5,6],[7,8,9]]));
console.log(transpose([[1,2,3],[4,5,6]]));
