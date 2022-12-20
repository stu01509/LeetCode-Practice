/**
 * @param {number[][]} rooms
 * @return {boolean}
 */
const canVisitAllRooms = function (rooms) {
    const visited = new Set();
    dfs(rooms, 0, visited);
    return visited.size === rooms.length;
};

const dfs = function (rooms, current, visited) {
    if (visited.has(current)) {
        return;
    }
    visited.add(current);
    for (const key of rooms[current]) {
        dfs(rooms, key, visited);
    }
};

console.log(canVisitAllRooms([
    [1],
    [2],
    [3],
    []
]));

console.log(canVisitAllRooms([
    [1, 3],
    [3, 0, 1],
    [2],
    [0]
]));