/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
const exist = function (board, word) {
    const rows = board.length;
    const cols = board[0].length;
    const visited = new Set();

    const dfs = function (row, col, i) {
        if (i === word.length) {
            return true;
        }

        if (
            row < 0 || col < 0 ||
            row >= rows || col >= cols ||
            word[i] !== board[row][col] ||
            visited.has(`${row}${col}`)
        ) {
            return false;
        }

        visited.add(`${row}${col}`);
        const result = dfs(row + 1, col, i + 1) ||
            dfs(row - 1, col, i + 1) ||
            dfs(row, col + 1, i + 1) ||
            dfs(row, col - 1, i + 1);
        visited.delete(`${row}${col}`);
        return result;
    }

    for (let row = 0; row < rows; row++) {
        for (let col = 0; col < cols; col++) {
            if (dfs(row, col, 0)) {
                return true;
            }
        }
    }

    return false;
}

console.log(exist([
    ["A", "B", "C", "E"],
    ["S", "F", "C", "S"],
    ["A", "D", "E", "E"]
], 'ABCCED'));

console.log(([
    ["A", "B", "C", "E"],
    ["S", "F", "C", "S"],
    ["A", "D", "E", "E"]
], 'SEE'));

console.log(exist([
    ["A", "B", "C", "E"],
    ["S", "F", "C", "S"],
    ["A", "D", "E", "E"]
], 'ABCB'));