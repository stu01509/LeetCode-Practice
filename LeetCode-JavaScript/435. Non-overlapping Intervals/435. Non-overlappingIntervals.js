/**
 * @param {number[][]} intervals
 * @return {number}
 */
const eraseOverlapIntervals = function (intervals) {

    intervals.sort((a, b) => a[0] - b[0]);

    let result = 0;
    let previousEndTime = intervals[0][1];

    for (let i = 1; i < intervals.length; i++) {
        const startTime = intervals[i][0];
        const endTime = intervals[i][1];

        if (previousEndTime > startTime) {
            previousEndTime = Math.min(endTime, previousEndTime);
            result++;
        } else {
            previousEndTime = endTime;
        }
    }

    return result;
}

console.log(eraseOverlapIntervals([
    [1, 2],
    [2, 3],
    [3, 4],
    [1, 3]
]));

console.log(eraseOverlapIntervals([
    [1, 2],
    [1, 2],
    [1, 2]
]));

console.log(eraseOverlapIntervals(
    [
        [1, 2],
        [2, 3]
    ]
));