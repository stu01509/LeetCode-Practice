/**
 * @param {number[][]} grid
 * @return {number}
 */
const numEnclaves = function (grid) {
    const ROW = grid.length;
    const COL = grid[0].length;
    let result = 0;

    for (let i = 0; i < ROW; i++) {
        dfs(grid, ROW, COL, i, 0);
        dfs(grid, ROW, COL, i, COL - 1);
    }

    for (let i = 0; i < COL; i++) {
        dfs(grid, ROW, COL, 0, i);
        dfs(grid, ROW, COL, ROW - 1, i);
    }

    for (let i = 0; i < ROW; i++) {
        for (let j = 0; j < COL; j++) {
            if (grid[i][j] === 1) {
                result++;
            }
        }
    }

    return result;
};

const dfs = function (grid, row, col, x, y) {
    if (x < 0 || y < 0 || x >= row || y >= col || grid[x][y] === 0) {
        return;
    }
    grid[x][y] = 0;
    dfs(grid, row, col, x - 1, y);
    dfs(grid, row, col, x + 1, y);
    dfs(grid, row, col, x, y - 1);
    dfs(grid, row, col, x, y + 1);
};

console.log(numEnclaves([
    [0, 0, 0, 0],
    [1, 0, 1, 0],
    [0, 1, 1, 0],
    [0, 0, 0, 0]
]));

console.log(numEnclaves([
    [0, 1, 1, 0],
    [0, 0, 1, 0],
    [0, 0, 1, 0],
    [0, 0, 0, 0]
]));