/**
 * @param {number[][]} coordinates
 * @return {boolean}
 */
const checkStraightLine = function (coordinates) {
    const diffX = (coordinates[1][0] - coordinates[0][0]);
    const diffY = (coordinates[1][1] - coordinates[0][1]);
    for (let i = 1; i < coordinates.length; i++) {
       
        if ((coordinates[i][0] - coordinates[i - 1][0]) * diffY  !== (coordinates[i][1] - coordinates[i - 1][1]) * diffX) {
            return false;
        }        
    }
    return true;
};

console.log(checkStraightLine([
    [1, 1],
    [2, 2],
    [3, 4],
    [4, 5],
    [5, 6],
    [7, 7]
]));

console.log(checkStraightLine([
    [1, 2],
    [2, 3],
    [3, 4],
    [4, 5],
    [5, 6],
    [6, 7]
]));

console.log(checkStraightLine([
    [-3, -2],
    [-1, -2],
    [2, -2],
    [-2, -2],
    [0, -2]
]));