/**
 * @param {number[][]} graph
 * @return {number[][]}
 */
const allPathsSourceTarget = function (graph) {
    const result = [];
    let paths = [
        [0]
    ];

    while (paths.length) {
        const temp = [];
        for (const path of paths) {
            if (path[path.length - 1] === graph.length - 1) {
                result.push(path);
                continue;
            }
            for (const node of graph[path[path.length - 1]]) {
                temp.push(path.concat(node));
            }
        }
        paths = temp;
    }
    return result;
};

console.log(allPathsSourceTarget([
    [1, 2],
    [3],
    [3],
    []
]));

console.log(allPathsSourceTarget(
    [
        [4, 3, 1],
        [3, 2, 4],
        [3],
        [4],
        []
    ]
));