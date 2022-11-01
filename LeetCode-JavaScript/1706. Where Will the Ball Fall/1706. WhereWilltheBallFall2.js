/**
 * @param {number[][]} grid
 * @return {number[]}
 */
const findBall = function (grid) {
    const result = [];

    for (let i = 0; i < grid[0].length; i++) {
        result.push(dfs(0, i, grid))
    }

    return result;
};

const dfs = function (row, col, grid) {
    if (row === grid.length) {
        return col;
    }

    const nextCol = col + grid[row][col];
    if (nextCol < 0 || nextCol >= grid[0].length || grid[row][col] !== grid[row][nextCol]) {
        return -1;
    }
    return dfs(row + 1, nextCol, grid);
}

console.log(findBall([
    [1, 1, 1, -1, -1],
    [1, 1, 1, -1, -1],
    [-1, -1, -1, 1, 1],
    [1, 1, 1, 1, -1],
    [-1, -1, -1, -1, -1]
]));

console.log(findBall([
    [-1]
]));

console.log(findBall([
    [1, 1, 1, 1, 1, 1],
    [-1, -1, -1, -1, -1, -1],
    [1, 1, 1, 1, 1, 1],
    [-1, -1, -1, -1, -1, -1]
]));