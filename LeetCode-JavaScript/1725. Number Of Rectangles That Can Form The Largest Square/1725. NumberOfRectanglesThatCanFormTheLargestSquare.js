/**
 * @param {number[][]} rectangles
 * @return {number}
 */
const countGoodRectangles = function (rectangles) {
    let side = 0;
    let count = 0;

    for (let i = 0; i < rectangles.length; i++) {
        const currentSide = Math.min(...rectangles[i]);
        if (currentSide > side) {
            side = currentSide;
            count = 1;
        } else if (currentSide === side) {
            count++;
        }
    }

    return count;
};

console.log(countGoodRectangles([
    [5, 8],
    [3, 9],
    [5, 12],
    [16, 5]
]));

console.log(countGoodRectangles([
    [2, 3],
    [3, 7],
    [4, 3],
    [3, 7]
]));