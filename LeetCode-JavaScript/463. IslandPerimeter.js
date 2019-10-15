/**
 * @param {number[][]} grid
 * @return {number}
 */
const islandPerimeter = function (grid) {
    let side = 0;
    let neighbor = 0;
    if (grid.length === 0) {
        return 0;
    }
    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[i].length; j++) {
            if (grid[i][j] === 1) {
                side += 4;
                if (i > 0 && grid[i - 1][j] === 1) {
                    neighbor++;
                }
                if (i < grid.length - 1 && grid[i + 1][j] === 1) {
                    neighbor++;
                }
                if (j > 0 && grid[i][j - 1] === 1) {
                    neighbor++;
                }
                if (j < grid[0].length && grid[i][j + 1] === 1) {
                    neighbor++;
                }
            }
        }
    }
    return side - neighbor;
};

console.log(islandPerimeter([
    [0, 1, 0, 0],
    [1, 1, 1, 0],
    [0, 1, 0, 0],
    [1, 1, 0, 0]
]));