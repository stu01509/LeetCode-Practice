/**
 * @param {number[]} arr
 * @return {number[][]}
 */
const minimumAbsDifference = function (arr) {
    arr.sort(customSort);
    let minDiff = Number.MAX_VALUE;
    const result = [];
    for (let i = 1; i < arr.length; i++) {
        const diff = Math.abs(arr[i] - arr[i - 1]);
        if (diff < minDiff) {
            result.length = 0;
            minDiff = diff;
        }
        if (diff === minDiff) {
            result.push([arr[i - 1], arr[i]]);
        }
    }
    return result;
};

const customSort = function (a, b) {
    return a - b;
}

console.log(minimumAbsDifference([4, 2, 1, 3]));
console.log(minimumAbsDifference([1, 3, 6, 10, 15]));
console.log(minimumAbsDifference([3, 8, -10, 23, 19, -4, -14, 27]));