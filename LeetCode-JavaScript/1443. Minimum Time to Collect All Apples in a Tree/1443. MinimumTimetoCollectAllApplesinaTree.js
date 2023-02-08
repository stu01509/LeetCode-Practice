/**
 * @param {number} n
 * @param {number[][]} edges
 * @param {boolean[]} hasApple
 * @return {number}
 */
const minTime = function (n, edges, hasApple) {
    const graphs = Array.from({
        length: n
    }, () => []);
    const visited = new Set();

    for (const [x, y] of edges) {
        graphs[x].push(y);
        graphs[y].push(x);
    }

    return dfs(0, hasApple, graphs, visited);
};

const dfs = (current, hasApple, graphs, visited) => {
    visited.add(current);

    let result = 0;
    for (const next of graphs[current]) {
        if (visited.has(next)) {
            continue;
        }
        let childResult = dfs(next, hasApple, graphs, visited);
        if (hasApple[next] || childResult) {
            childResult += 2;
        }
        result += childResult;
    }

    return result;
};


console.log(minTime(
    7,
    [
        [0, 1],
        [0, 2],
        [1, 4],
        [1, 5],
        [2, 3],
        [2, 6]
    ],
    [false, false, true, false, true, true, false]
));

console.log(minTime(
    7,
    [
        [0, 1],
        [0, 2],
        [1, 4],
        [1, 5],
        [2, 3],
        [2, 6]
    ],
    [false, false, true, false, false, true, false]
));

console.log(minTime(
    7,
    [
        [0, 1],
        [0, 2],
        [1, 4],
        [1, 5],
        [2, 3],
        [2, 6]
    ],
    [false, false, false, false, false, false, false]
));