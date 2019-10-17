/**
 * @param {number[]} A
 * @param {number[][]} queries
 * @return {number[]}
 */
const sumEvenAfterQueries = function (A, queries) {
    const result = [];
    for (let i = 0; i < queries.length; i++) {
        A[queries[i][1]] += queries[i][0];
        const sum = A.reduce((prev, elem) => {
            if (elem % 2 == 0) {
                return prev + elem;
            } else {
                return prev + 0;
            }
        }, 0);
        result.push(sum);
    }
    return result;
};

console.log(sumEvenAfterQueries([1, 2, 3, 4], [
    [1, 0],
    [-3, 1],
    [-4, 0],
    [2, 3]
]))