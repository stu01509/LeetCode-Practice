/**
 * @param {number[][]} grid
 * @return {number}
 */
const maxIncreaseKeepingSkyline = function (grid) {
    const top = [];
    const left = [];
    
    grid.forEach(row => left.push(Math.max(...row)));
    
    for (let i = 0; i < grid.length; i++) {
        const tempArr = [];
        for (let j = 0; j < grid[0].length; j++) {
            tempArr.push(grid[j][i]);
        }
        top.push(Math.max(...tempArr));
    }
    let sum = 0;
    for (let i = 0; i < left.length; i++) {
        for (let j = 0; j < top.length; j++) {
            sum += (Math.min(left[i], top[j]) - grid[i][j]);
        }
    }
    return sum;
};

console.log(maxIncreaseKeepingSkyline([
    [3, 0, 8, 4],
    [2, 4, 5, 7],
    [9, 2, 6, 3],
    [0, 3, 1, 0],
]));