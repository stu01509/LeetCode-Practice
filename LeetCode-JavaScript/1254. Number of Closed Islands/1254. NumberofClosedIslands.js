/**
 * @param {number[][]} grid
 * @return {number}
 */
const closedIsland = function (grid) {
    const COL = grid.length;
    const ROW = grid[0].length;
    let result = 0;

    for (let i = 0; i < COL; i++) {
        for (let j = 0; j < ROW; j++) {
            if (grid[i][j] === 0) {
                result += dfs(grid, COL, ROW, i, j);
            }
        }
    }

    return result;
};

const dfs = function (grid, col, row, x, y) {
    if (x < 0 || y < 0 || x >= col || y >= row) {
        return false;
    }

    if (grid[x][y] === 1) {
        return true;
    }

    grid[x][y] = 1;
    const d1 = dfs(grid, col, row, x + 1, y);
    const d2 = dfs(grid, col, row, x - 1, y);
    const d3 = dfs(grid, col, row, x, y + 1);
    const d4 = dfs(grid, col, row, x, y - 1);
    return d1 && d2 && d3 && d4;
}

console.log(closedIsland([
    [1, 1, 1, 1, 1, 1, 1, 0],
    [1, 0, 0, 0, 0, 1, 1, 0],
    [1, 0, 1, 0, 1, 1, 1, 0],
    [1, 0, 0, 0, 0, 1, 0, 1],
    [1, 1, 1, 1, 1, 1, 1, 0]
]));

console.log(closedIsland([
    [0, 0, 1, 0, 0],
    [0, 1, 0, 1, 0],
    [0, 1, 1, 1, 0]
]));

console.log(closedIsland([
    [1, 1, 1, 1, 1, 1, 1],
    [1, 0, 0, 0, 0, 0, 1],
    [1, 0, 1, 1, 1, 0, 1],
    [1, 0, 1, 0, 1, 0, 1],
    [1, 0, 1, 1, 1, 0, 1],
    [1, 0, 0, 0, 0, 0, 1],
    [1, 1, 1, 1, 1, 1, 1]
]));