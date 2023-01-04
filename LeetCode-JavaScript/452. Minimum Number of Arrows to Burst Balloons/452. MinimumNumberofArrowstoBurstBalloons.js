/**
 * @param {number[][]} points
 * @return {number}
 */
const findMinArrowShots = function (points) {
    if (points.length === 0) {
        return 0;
    }
    points.sort((p1, p2) => p1[1] - p2[1]);
    let arrowPosition = points[0][1];
    let arrowCount = 1;
    for (let i = 1; i < points.length; i++) {
        if (arrowPosition < points[i][0]) {
            arrowCount++;
            arrowPosition = points[i][1];
        }
    }
    return arrowCount;
};

console.log(findMinArrowShots([
    [10, 16],
    [2, 8],
    [1, 6],
    [7, 12]
]));

console.log(findMinArrowShots([
    [1, 2],
    [3, 4],
    [5, 6],
    [7, 8]
]));

console.log(findMinArrowShots([
    [1, 2],
    [2, 3],
    [3, 4],
    [4, 5]
]));