/**
 * @param {number[][]} roads
 * @param {number} seats
 * @return {number}
 */
const minimumFuelCost = function (roads, seats) {
    const adjacency = Array.from({
        length: roads.length + 1
    }, () => [])
    for (const [src, dst] of roads) {
        adjacency[src].push(dst);
        adjacency[dst].push(src);
    }

    let result = 0;

    const dfs = function (node, parent) {
        let passengers = 1;
        for (const child of adjacency[node]) {
            if (child !== parent) {
                const p = dfs(child, node);
                passengers += p;
                result += Math.ceil(p / seats);
            }
        }

        return passengers;
    };

    dfs(0, -1);
    return result;
};

console.log(minimumFuelCost([
    [0, 1],
    [0, 2],
    [0, 3]
], 5));

console.log(minimumFuelCost([
    [3, 1],
    [3, 2],
    [1, 0],
    [0, 4],
    [0, 5],
    [4, 6]
], 2));

console.log(minimumFuelCost([], 1));