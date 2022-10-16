/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
const merge = function (intervals) {
    intervals.sort((a, b) => a[0] - b[0]);

    const result = [intervals[0]];

    for (let i = 1; i < intervals.length; i++) {
        const startTime = intervals[i][0];
        const endTIme = intervals[i][1];
        const lastResult = result[result.length - 1];
        const lastEndTime = lastResult[1];

        if (startTime <= lastEndTime) {
            lastResult[1] = Math.max(lastEndTime, endTIme);
        } else {
            result.push(intervals[i]);
        }
    }

    return result;
};

console.log(merge([
    [1, 3],
    [2, 6],
    [8, 10],
    [15, 18]
]));

console.log(merge([
    [1, 4],
    [4, 5]
]));