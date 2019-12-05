/**
 * @param {number} N
 * @param {number[][]} trust
 * @return {number}
 */
const findJudge = function (N, trust) {
    if (trust === null) {
        return -1;
    }
    const degree = new Array(N + 1).fill(0);
    trust.forEach((trust) => {
        degree[trust[0]]--;
        degree[trust[1]]++;
    });

    for (let i = 1; i <= N; i++) {
        if (degree[i] === N - 1) {
            return i;
        }
    }
    return -1;
};

console.log(findJudge(2, [
    [1, 2]
]));

console.log(findJudge(3, [
    [1, 3],
    [2, 3]
]));

console.log(findJudge(3, [
    [1, 3],
    [2, 3],
    [3, 1]
]));

console.log(findJudge(3, [
    [1, 2],
    [2, 3]
]));

console.log(findJudge(4, [
    [1, 3],
    [1, 4],
    [2, 3],
    [2, 4],
    [4, 3]
]));