/**
 * @param {number[][]} points
 * @return {number}
 */
const minTimeToVisitAllPoints = function (points) {
    let sec = 0;
    for (let i = 1; i < points.length; i++) {
        const dX = Math.abs(points[i - 1][0] - points[i][0]);
        const dY = Math.abs(points[i - 1][1] - points[i][1]);
        sec += Math.min(dX, dY);
        sec += Math.abs(dX - dY);
    }
    return sec;
};

console.log(minTimeToVisitAllPoints([
    [1, 1],
    [3, 4],
    [-1, 0]
]));